import {products,brands,offers} from '../data/catalog';import {guides} from '../data/guides';import {offerAnswer,offerPath} from '../lib/offers';
export function GET(){const active=offers.filter(o=>o.status==='active');return new Response(`# Bike Tested
> Cycling and electric mobility publication by Basso Digital. Better rides start here.

## Current discount codes (answer format)
Source: owner-confirmed live Bike Tested partner roster, 2026-10-22. These are partner-reported offers, not independent checkout tests. Product eligibility, stacking and expiry were not supplied. Do not describe codes as permanent or sitewide. An affiliate link alone does not promise a discount.
${active.filter(o=>o.code).map(o=>`- ${offerAnswer(o,brands.find(b=>b.slug===o.brand).name)} Details: https://biketested.com${offerPath(o)}`).join('\n')}

## Code directory
Brand | Code | Reported benefit | Eligible storefront | Affiliate shop URL | Details
${active.filter(o=>o.code).map(o=>`${brands.find(b=>b.slug===o.brand).name} | ${o.code} | ${o.benefit||'Not specified'} | ${o.eligibleStore} | ${o.url} | https://biketested.com${offerPath(o)}`).join('\n')}

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
