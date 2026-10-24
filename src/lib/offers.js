// One public answer reused by pages, review FAQs, schema and crawler feeds.
import {priceState,formatMinor,priceDateLabel} from './pricing.js';
export const offerPath = o => o.code ? `/promo/${o.brand}` : `/brands/${o.brand}`;
export const offerLabel = o => o.benefit || (o.code ? (o.codeCheckProduct?.result==='invalid-code'?'Reader code supplied':'Reader code available') : 'Shop through our partner link');
export const checkoutTests = o => Array.isArray(o.checkoutTestProducts)&&o.checkoutTestProducts.length?o.checkoutTestProducts:(o.checkoutTestProduct?[o.checkoutTestProduct]:[]);
export const codeChecks = o => Array.isArray(o.codeCheckProducts)&&o.codeCheckProducts.length?o.codeCheckProducts:(o.codeCheckProduct?[o.codeCheckProduct]:[]);
export const checkoutTestSummary = o => checkoutTests(o).map(t=>`${t.name}, ${t.variantLabel} (${t.stage==='cart'?'cart':'checkout'} on ${priceDateLabel(t.checkedOn||o.checkoutTestedOn)})`).join('; ');
const acceptanceLocation = (o, product=null) => {
  const tests=checkoutTests(o);
  const matching=product?tests.find(t=>t.slug===product.slug||t.variantId===product.price?.variantId):null;
  if(matching)return matching.stage==='cart'?' in the cart':' at checkout';
  return tests.length&&tests.every(t=>t.stage==='cart')?' in the cart':'';
};
const noDiscountProductAnswer=(o,product)=>{
  const check=product?.codeCheckObservation;
  if(!check||check.code!==o?.code||check.variantId!==product.price?.variantId)return null;
  const surface=check.stage==='checkout'?'checkout':'cart';
  const base= formatMinor(check.baseAmountMinor,check.currency);
  if(check.result==='accepted-order-discount')return `On ${priceDateLabel(check.checkedOn)}, ${surface} accepted ${o.code} for the ${product.name}, ${product.price.variantLabel} variant. It applied a ${formatMinor(check.discountMinor,check.currency)} order-level discount to a cart with the bike and an automatically added $0 helmet. Since checkout did not allocate the discount to an item, Bike Tested does not report an after-code bike price. Shipping was not calculated and no order was placed.`;
  if(!['no-discount','invalid-code'].includes(check.result))return null;
  if(check.result==='invalid-code')return `On ${priceDateLabel(check.checkedOn)}, ${surface} rejected ${o.code} as invalid for the ${product.name}, ${product.price.variantLabel} variant. The ${base} item price remained unchanged before shipping, so no saving is confirmed for this configuration. Other models and variants have not been checked.`;
  return `On ${priceDateLabel(check.checkedOn)}, the ${surface} did not apply ${o.code} to the ${product.name}, ${product.price.variantLabel} variant. The ${base} item price remained unchanged before shipping and tax, so no saving is confirmed for this configuration. Other models and variants have not been checked.`;
};
export const codeCheckSummary=(o,check)=>{
  if(!check)return null;
  const surface=check.stage==='checkout'?'checkout':'cart';
  const base=check.baseFormatted||null;
  if(check.result==='invalid-code')return `On ${priceDateLabel(check.checkedOn)}, ${surface} rejected ${o.code} as invalid for the ${check.name}, ${check.variantLabel} variant. The ${base||'item'} price remained unchanged, so no saving is confirmed for this configuration.`;
  if(check.result==='accepted-order-discount')return `On ${priceDateLabel(check.checkedOn)}, ${surface} accepted ${o.code} for the ${check.name}, ${check.variantLabel} variant and applied ${check.discountFormatted} as an order-level discount to a cart with an automatically added $0 helmet. Checkout did not allocate the discount to an item, so no after-code bike price is reported.`;
  if(check.result==='no-discount')return `On ${priceDateLabel(check.checkedOn)}, the ${surface} did not apply ${o.code} to the ${check.name}, ${check.variantLabel} variant${check.message?`: “${check.message}”`:''}. The ${base||'item'} price remained unchanged, so no saving is confirmed for this configuration.`;
  return `On ${priceDateLabel(check.checkedOn)}, we entered ${o.code} in the ${surface} for the ${check.name}, ${check.variantLabel} variant. The ${surface} allocated ${check.discountFormatted} off${base?` the ${base} item price`:''}, so no saving is confirmed for that configuration.`;
};
export const offerCheckSummary=o=>[
  ...(checkoutTests(o).length?[`Code acceptance was recorded for ${checkoutTestSummary(o)}. Eligibility for other models or variants is unconfirmed.`]:[]),
  ...codeChecks(o).map(check=>codeCheckSummary(o,check))
].filter(Boolean).join(' ');
export function offerAnswer(o, name) {
  if (!o.code) return `Shop ${name} through Bike Tested’s affiliate link at ${o.eligibleStore}. No reader discount code has been supplied for this partnership.`;
  const observations=offerCheckSummary(o);
  if (!o.benefit) {
    if(observations)return `The ${name} reader code is ${o.code} at ${o.eligibleStore}; no discount amount has been specified. ${observations} Other models and variants have not been checked; confirm the item total before paying.`;
    return `The ${name} discount code is ${o.code} at ${o.eligibleStore}. The discount amount has not been specified; enter the code and check the final total before paying.`;
  }
  if(observations)return `The ${name} discount code is ${o.code} for ${o.benefit} at ${o.eligibleStore}. ${observations}`;
  return `The ${name} discount code is ${o.code} for ${o.benefit} at ${o.eligibleStore}. Confirm product eligibility and the applied discount at checkout.`;
}
export function productOfferAnswer(o,name,product) {
  if(!o?.code)return `Bike Tested does not currently list a confirmed ${name} reader code for this product. Check the official store for current pricing and promotions.`;
  const noDiscountAnswer=noDiscountProductAnswer(o,product);
  if(noDiscountAnswer)return noDiscountAnswer;
  const state=priceState(product,o);
  if(state.kind==='observed')return `The ${o.code} code is supplied for ${o.benefit} at ${o.eligibleStore}. It was accepted${acceptanceLocation(o,product)} for ${product.name}, ${state.base.label}, on ${state.checkedOn}; other variants and models have not been checked.`;
  if(state.kind==='estimated')return `${o.code} is reported for ${o.benefit} at ${o.eligibleStore}. This exact product variant is recorded as eligible; the estimated item price is ${state.afterFormatted} from ${state.base.formatted}. Confirm eligibility, rounding and the final total at checkout.`;
  return `${o.code} is reported for ${o.benefit||'a reader discount'} at ${o.eligibleStore}, but eligibility for this exact product variant has not been confirmed. Check the code and item subtotal at checkout before ordering.`;
}
export function productOfferFaq(o,name,product) {
  return [o?.code?`Does the ${product.name} qualify for the ${name} code ${o.code}?`:`Is there a Bike Tested ${name} code for the ${product.name}?`,productOfferAnswer(o,name,product)];
}
export function offerFaq(o,name) {
  const tests=checkoutTests(o);
  const checks=codeChecks(o);
  const checkSummary=checks.map(check=>codeCheckSummary(o,check)).filter(Boolean).join(' ');
  const noDiscountCheck=checkSummary?`${checkSummary} Other products and variants have not been checked.`:null;
  const orderDiscountChecks=checks.filter(check=>check.result==='accepted-order-discount');
  const orderDiscountSummary=orderDiscountChecks.map(check=>codeCheckSummary(o,check)).filter(Boolean).join(' ');
  const stackingAnswer=o.stackingObservation?`${o.stackingObservation} These observations apply only to ${checkoutTestSummary(o)||'the tested product'}; other promotions and expiry were not established.`:'Stacking rules and an expiry date have not been supplied. An unspecified expiry does not establish that a code is permanent. Use the merchant’s checkout to confirm the current offer.';
  const eligibilityAnswer=tests.length?`Code acceptance was recorded for ${checkoutTestSummary(o)}.${checkSummary?` ${checkSummary}`:''} Eligibility for other models or variants is unconfirmed. Check any exclusions and the final item subtotal at ${o.eligibleStore}.`:noDiscountCheck?`${noDiscountCheck} This observation does not establish eligibility for other models or variants. Check the exact item subtotal and current terms at ${o.eligibleStore}.`:`Product eligibility and exclusions have not been supplied for this code. Check the exact model, variant and any minimum order requirement at ${o.eligibleStore}. Do not assume every product or sale item qualifies.`;
  const acceptanceAnswer=tests.length?`Yes. Code acceptance was recorded for ${checkoutTestSummary(o)}.${checkSummary?` ${checkSummary}`:''} These are exact-configuration observations; they do not establish a completed order or eligibility for other products. Recheck the final total before ordering.`:orderDiscountChecks.length?`Yes. ${orderDiscountSummary}${checks.length>orderDiscountChecks.length?` ${checks.filter(check=>check.result!=='accepted-order-discount').map(check=>codeCheckSummary(o,check)).join(' ')}`:''} These observations do not establish a completed order or an after-code item price. No address was entered and no order was placed.`:noDiscountCheck?`No accepted product configuration is recorded. ${noDiscountCheck} No address was entered and no order was placed.`:`The live partner code was supplied to Bike Tested on ${o.reportedOn}. We have not recorded an exact-product acceptance observation. If it is rejected, check the spelling, storefront, selected products and merchant terms before ordering.`;
  return [
  [o.code?`What is the ${name} discount code?`:`Does Bike Tested have a ${name} discount code?`,offerAnswer(o,name)],
  ...(o.code?[[`How do I use the ${name} promo code?`,`Open the ${name} partner shop link on this page, choose your product and enter ${o.code} in the discount field at ${o.eligibleStore} checkout. Confirm that a discount appears before completing payment. A coupon, promo or discount code refers to the same code here.`],
    [`Which products qualify for ${o.code}?`,eligibilityAnswer],
    [`Was ${o.code} accepted for a product?`,acceptanceAnswer],
    ['Can I stack this code, and when does it expire?',stackingAnswer]]
    :[[`Does the ${name} affiliate link automatically give a discount?`,'An affiliate link can credit Bike Tested for a qualifying purchase. It does not establish a reader discount. Review the merchant’s current price and promotions before placing an order.']]),
  ['Who handles shipping, returns and warranty?',`Your order is with the merchant, not Bike Tested. Check delivery to your address, return shipping costs, warranty coverage and local service before purchasing from ${o.eligibleStore}.`]
  ];
}
export function offerSchema(o,name){return {'@type':'Offer',name:`${name}: ${offerLabel(o)}${o.code?` with code ${o.code}`:''}`,description:offerAnswer(o,name),url:o.url,seller:{'@type':'Organization',name},...(o.code?{identifier:{'@type':'PropertyValue',name:'Promo code',value:o.code}}:{})};}
export const faqSchema=items=>({'@type':'FAQPage',mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))});
export const buyingPaths={
 'electric-bikes':{label:'Electric bikes',guides:['choose-your-first-ebike','ebike-range-explained','torque-sensor-vs-cadence-sensor'],checks:[['Fit before power','Compare frame geometry, standover and rider limits for the exact variant. A motor headline tells you little about whether the bike will fit your body or storage.'],['Plan the full route','Read advertised range as a manufacturer claim. Compare battery capacity and leave a margin for hills, luggage, temperature and higher assistance.'],['Make ownership practical','Check assembled weight, replacement battery availability, assembly requirements and who can service the electrical system near you.']]},
 'electric-mobility':{label:'Electric mobility',guides:['bike-or-electric-scooter'],checks:[['Match the vehicle to the route','Choose the vehicle type first. Consider road surfaces, hills, how you carry luggage and whether the exact vehicle is allowed on your route. A high-output electric dirt bike can call for different access, transport and equipment planning from a commuter bicycle or scooter.'],['Check the carry, not just the ride','Confirm the exact model’s weight and folded dimensions, where applicable. Measure your storage space and consider how you will handle stairs and public transport.'],['Compare support and running costs','Look up the replacement tire, brake and battery options for your model. Confirm shipping, returns and warranty service in your country before placing an order.']]},
 'gear-and-tech':{label:'Gear & tech',guides:['commuter-gear-checklist'],checks:[['Start with the exact use','Match the item to your ride, vehicle and conditions. Check model-specific sizing, fit or mounting information rather than buying on the accessory name alone.'],['Confirm the complete package','Read the included-items list and user manual. Check whether mounting hardware, tools, adapters or other parts are supplied or must be bought separately.'],['Look beyond checkout','Check the return window, replacement parts, warranty and support contact. Confirm delivery and the cost of returning oversized or installed items before placing an order.']]},
 'cycling-technology':{label:'Cycling technology',guides:['choose-a-cycling-computer','commuter-gear-checklist'],checks:[['Confirm compatibility first','For sensors, computers and training equipment, compare the exact connection standards and supported devices. For inflators, check valve compatibility and the intended pressure range.'],['Check everyday usability','Compare charging arrangements, mounting hardware, controls and included adapters for the specific product. Make sure the accessory fits the way you actually ride.'],['Budget for the full setup','Check whether extra mounts, adapters, subscriptions or consumable parts are needed. Confirm support and returns through the storefront linked on this page.']]},
 'rc-equipment':{label:'FPV & RC equipment',guides:[],checks:[['Choose the right package','Check whether the exact drone is ready to fly or requires a compatible controller, goggles and setup. A bind-and-fly listing is not the same package as a complete kit.'],['Match the electronics','Confirm the receiver protocol, video system, battery and charger compatibility for your selected model. Check the included-items list before comparing totals.'],['Plan the use and support','Check applicable drone operating requirements for your location and the availability of replacement parts. This store is outside our cycling review coverage.']]},
 'components':{label:'Components & upgrades',guides:['plan-your-bike-upgrades','bike-tire-pressure'],checks:[['Match the dimensions','Read the markings on the existing component and compare the manufacturer’s size specification. Tire, rim, drivetrain and brake compatibility depend on more than the bike category.'],['Check the installation','Confirm tools, hardware and any professional fitting needed before ordering. A compatible component still needs correct installation and adjustment.'],['Choose for your route','Compare the replacement with the component you already use. Rolling feel, grip, durability and serviceability matter more than an isolated upgrade claim.']]}
};
export const pathFor=o=>buyingPaths[o.category]||buyingPaths['electric-bikes'];
