const minorDigits = currency => {
  try {
    return new Intl.NumberFormat('en-US', {style:'currency',currency}).resolvedOptions().maximumFractionDigits;
  } catch {
    return null;
  }
};

export function formatMinor(amountMinor, currency) {
  const digits=minorDigits(currency);
  if (!Number.isSafeInteger(amountMinor) || amountMinor<0 || digits===null) return null;
  return new Intl.NumberFormat('en-US',{style:'currency',currency,minimumFractionDigits:digits,maximumFractionDigits:digits}).format(amountMinor/(10**digits));
}

export function discountLabel(discount) {
  if (discount?.type==='percent' && Number.isFinite(discount.value)) return `${discount.value}% off`;
  if (discount?.type==='fixed' && Number.isFinite(discount.value) && discount.currency) {
    const digits=minorDigits(discount.currency);
    if(digits===null)return null;
    return `${new Intl.NumberFormat('en-US',{style:'currency',currency:discount.currency,minimumFractionDigits:digits,maximumFractionDigits:digits}).format(discount.value)} off`;
  }
  return null;
}

const dateIsValid=value=>typeof value==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(value)&&!Number.isNaN(Date.parse(`${value}T00:00:00Z`));
const offerIsCurrent=offer=>offer?.status==='active'&&(!offer.expiresOn||(dateIsValid(offer.expiresOn)&&Date.now()<=Date.parse(`${offer.expiresOn}T23:59:59Z`)));

export function priceState(product, offer) {
  const price=product?.price;
  if(!price || !Number.isSafeInteger(price.amountMinor) || price.amountMinor<0 || !price.currency || minorDigits(price.currency)===null || !price.region || !price.variantId || !price.variantLabel || !price.source || !dateIsValid(price.checkedOn)) return {kind:'unresolved',message:'Check current price and availability at the store.'};
  const base={amountMinor:price.amountMinor,currency:price.currency,label:price.variantLabel,checkedOn:price.checkedOn,formatted:formatMinor(price.amountMinor,price.currency)};
  if(!offer?.code || !offerIsCurrent(offer) || !offer.discount) return {kind:'price-only',base,message:'Check the current price and code terms at the store.'};
  const eligibility=product.eligibility;
  // `program-supplied`: the partner program supplies the code for the brand; the saving is calculated from the listed price only (never a cart observation).
  const supplied=eligibility?.status==='program-supplied' && eligibility.variantId===price.variantId;
  if(!supplied && (eligibility?.status!=='eligible' || eligibility.variantId!==price.variantId || !eligibility.evidence)) return {kind:'eligibility-unconfirmed',base,message:`Check whether ${offer.code} applies to this model and variant at checkout.`};
  const discount=offer.discount;
  if(discount.type!=='percent'&&discount.type!=='fixed') return {kind:'terms-unresolved',base,message:`Check the discount terms for ${offer.code} at checkout.`};
  if(discount.type==='percent'&&(!Number.isFinite(discount.value)||discount.value<=0||discount.value>100)) return {kind:'terms-unresolved',base,message:`Check the discount terms for ${offer.code} at checkout.`};
  if(discount.type==='fixed'&&(!Number.isFinite(discount.value)||discount.value<=0||!discount.currency||minorDigits(discount.currency)===null||discount.currency!==price.currency)) return {kind:'terms-unresolved',base,message:`Check the discount terms and currency for ${offer.code} at checkout.`};
  const observation=product.checkoutObservation;
  if(observation){
    const observedMatches=observation.code===offer.code&&observation.variantId===price.variantId&&observation.currency===price.currency&&dateIsValid(observation.checkedOn)&&Number.isSafeInteger(observation.baseAmountMinor)&&Number.isSafeInteger(observation.discountMinor)&&Number.isSafeInteger(observation.afterAmountMinor)&&observation.baseAmountMinor===price.amountMinor&&observation.discountMinor>=0&&observation.afterAmountMinor>=0&&observation.baseAmountMinor-observation.discountMinor===observation.afterAmountMinor;
    if(!observedMatches) return {kind:'terms-unresolved',base,message:`Check the current price and code result at checkout.`};
    const expected=discountAmountMinor(price.amountMinor,discount,price.currency);
    if(expected===null||expected!==observation.discountMinor) return {kind:'terms-unresolved',base,message:`The recorded checkout amount does not match the current discount terms.`};
    return {kind:'observed',base,discountMinor:observation.discountMinor,afterMinor:observation.afterAmountMinor,afterFormatted:formatMinor(observation.afterAmountMinor,price.currency),discountFormatted:formatMinor(observation.discountMinor,price.currency),code:offer.code,checkedOn:observation.checkedOn,exclusions:observation.exclusions||'Before tax and shipping.'};
  }
  if(price.isSalePrice&&!price.codeStackingEvidence) return {kind:'eligibility-unconfirmed',base,message:`Sale-price code stacking is unconfirmed. Check ${offer.code} and the final total at checkout.`};
  const discountMinor=discountAmountMinor(price.amountMinor,discount,price.currency);
  if(discountMinor===null||discountMinor>price.amountMinor) return {kind:'terms-unresolved',base,message:`Check the discount terms for ${offer.code} at checkout.`};
  const afterMinor=price.amountMinor-discountMinor;
  return {kind:'estimated',basis:supplied?'program-supplied':'recorded-eligibility',base,discountMinor,afterMinor,afterFormatted:formatMinor(afterMinor,price.currency),discountFormatted:formatMinor(discountMinor,price.currency),code:offer.code,checkedOn:price.checkedOn};
}

export function discountAmountMinor(amountMinor, discount, currency) {
  const digits=minorDigits(currency);
  if(!Number.isSafeInteger(amountMinor)||amountMinor<0||digits===null||!discount)return null;
  if(discount.type==='percent'){
    if(!Number.isFinite(discount.value)||discount.value<=0||discount.value>100)return null;
    const basisPoints=Math.round(discount.value*100);
    // Keep percentage calculations explicit and conservative at the minor-unit boundary.
    return Math.floor(amountMinor*basisPoints/10000);
  }
  if(discount.type==='fixed'){
    if(!Number.isFinite(discount.value)||discount.value<0||discount.currency!==currency)return null;
    const fixedMinor=Math.round(discount.value*(10**digits));
    if(!Number.isSafeInteger(fixedMinor)||amountMinor<fixedMinor)return null;
    if(Number.isSafeInteger(discount.minimumSpendMinor)&&amountMinor<discount.minimumSpendMinor)return null;
    return fixedMinor;
  }
  return null;
}

export function priceDateLabel(date) {
  if(!dateIsValid(date))return date||'';
  return new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${date}T00:00:00Z`));
}
