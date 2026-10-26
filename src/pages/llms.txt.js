import {products,brands,offers} from '../data/catalog';import {guides} from '../data/guides';import {offerAnswer,offerPath} from '../lib/offers';import {priceState,formatMinor} from '../lib/pricing';
const productPriceLine=p=>{const offer=offers.find(o=>o.brand===p.brand&&o.status==='active');const state=priceState(p,offer);if(!p.price)return null;const base=`${p.price.variantLabel}: ${formatMinor(p.price.amountMinor,p.price.currency)} ${p.price.currency}, official listing checked ${p.price.checkedOn}`;if(state.kind==='observed'){const surface=p.checkoutObservation.stage==='cart'?'in the cart':'at checkout';return `- ${p.name}: ${base}; ${state.code} was accepted ${surface} for this exact variant on ${state.checkedOn}, with an observed item subtotal of ${state.afterFormatted} (${state.discountFormatted} off) before tax and shipping. Other variants and models have not been checked.`;}if(state.kind==='estimated'&&state.basis==='program-supplied')return `- ${p.name}: ${base}; calculated with ${state.code}: ${state.afterFormatted} from the listed price, before tax and shipping.`;if(state.kind==='estimated')return `- ${p.name}: ${base}; estimated with ${state.code}: ${state.afterFormatted}, subject to final checkout confirmation.`;return `- ${p.name}: ${base}; code eligibility is not confirmed for this exact variant.`;};
const active=offers.filter(o=>o.status==='active');
export function GET(){return new Response(`# Bike Tested
> Cycling and electric mobility publication by Basso Digital. Better rides start here.

## Current discount codes (answer format)
Source: owner-confirmed live Bike Tested partner roster, 2026-10-22. Codes and benefits are partner-reported. Product eligibility is never inferred across a brand; exact checkout observations are named in their recorded model and variant scope. Expiry and broader terms remain unspecified unless stated.
${active.filter(o=>o.code).map(o=>`- ${offerAnswer(o,brands.find(b=>b.slug===o.brand).name)} Details: https://biketested.com${offerPath(o)}`).join('\n')}

## Code directory
Brand | Code | Reported benefit | Eligible storefront | Affiliate shop URL | Details
${active.filter(o=>o.code).map(o=>`${brands.find(b=>b.slug===o.brand).name} | ${o.code} | ${o.benefit||'Not specified'} | ${o.eligibleStore} | ${o.url} | https://biketested.com${offerPath(o)}`).join('\n')}

## Reviewed product price evidence
Prices are dated source observations, not promises of current availability. An after-code amount appears only when exact product eligibility and discount arithmetic are supported.
${products.map(productPriceLine).filter(Boolean).join('\n')}

## Link-only partners
No reader code or discount has been supplied for these partnerships.
${active.filter(o=>!o.code).map(o=>`- ${brands.find(b=>b.slug===o.brand).name}: ${o.url}. Store and buying guide: https://biketested.com${offerPath(o)}${o.storeNotice?` Store notice: ${o.storeNotice}`:''}`).join('\n')}

## Editorial basis
Current reviews evaluate manufacturer specifications and ownership considerations. Range figures are manufacturer claims. No numerical ratings.
Standards: https://biketested.com/editorial-standards
Affiliate disclosure: https://biketested.com/affiliate-disclosure

## Reviews
${products.map(p=>`- [${p.name}](https://biketested.com/reviews/${p.slug}): ${p.description}`).join('\n')}

## Guides
${guides.map(g=>`- [${g.title}](https://biketested.com/guides/${g.slug})`).join('\n')}

## Brands
${brands.map(b=>`- [${b.name}](https://biketested.com/brands/${b.slug})`).join('\n')}
`,{headers:{'Content-Type':'text/plain; charset=utf-8'}})}
