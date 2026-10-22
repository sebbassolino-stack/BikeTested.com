import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {products,brands,offers,comparisons,categories} from '../src/data/catalog.js';
import {guides} from '../src/data/guides.js';
import {sectionsFor,sectionId,guideGroups} from '../src/lib/guides.js';
import {pathFor} from '../src/lib/offers.js';
import {discountAmountMinor,discountLabel,formatMinor,priceState} from '../src/lib/pricing.js';

const date=value=>typeof value==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(value)&&!Number.isNaN(Date.parse(`${value}T00:00:00Z`));
for(const list of [products,brands,comparisons,guides,categories])assert.equal(new Set(list.map(x=>x.slug)).size,list.length,'Duplicate slugs');
for(const p of products){
  assert(brands.some(b=>b.slug===p.brand),`Missing brand: ${p.slug}`);
  assert(existsSync(`public${p.image}`),`Missing image ${p.image}`);
  assert(p.verdict&&p.strengths.length&&p.tradeoffs.length&&p.specs&&p.sections?.length&&p.source&&p.evidence,`Incomplete review: ${p.slug}`);
  assert(!('rating'in p)&&!('score'in p),`No review scores: ${p.slug}`);
  assert.equal(new URL(p.source).protocol,'https:');
  for(const key of ['publishedOn','updatedOn','specsCheckedOn'])assert(date(p[key]),`Product date ${key}: ${p.slug}`);
  assert(p.updatedOn>=p.publishedOn,`Product date order: ${p.slug}`);
  if(p.faqs){assert(p.faqs.length>=4&&p.faqs.length<=5,`Product FAQ count: ${p.slug}`);assert.equal(new Set(p.faqs.map(([q])=>q)).size,p.faqs.length,`Duplicate product FAQ: ${p.slug}`);for(const [q,a] of p.faqs)assert(q&&a,`Empty product FAQ: ${p.slug}`);}
  if(p.price){
    const price=p.price;
    assert(Number.isSafeInteger(price.amountMinor)&&price.amountMinor>=0,`Price minor units: ${p.slug}`);
    assert(/^[A-Z]{3}$/.test(price.currency)&&formatMinor(price.amountMinor,price.currency),`Price currency: ${p.slug}`);
    assert(price.region&&price.variantId&&price.variantLabel&&price.source&&date(price.checkedOn),`Price contract: ${p.slug}`);
    assert.equal(new URL(price.source).protocol,'https:');
    assert.equal(price.source,p.source,`Price source must be the exact product source: ${p.slug}`);
    assert(p.eligibility&&['eligible','unresolved'].includes(p.eligibility.status),`Explicit product eligibility: ${p.slug}`);
    if(p.eligibility.status==='eligible'){
      assert.equal(p.eligibility.variantId,price.variantId,`Eligibility variant: ${p.slug}`);
      assert(p.eligibility.evidence&&existsSync(p.eligibility.evidence.split('#')[0]),`Eligibility evidence: ${p.slug}`);
    }
  } else assert(!p.eligibility&&!p.checkoutObservation,`Eligibility cannot exist without a price: ${p.slug}`);
  if(p.checkoutObservation){
    const observation=p.checkoutObservation,offer=offers.find(o=>o.brand===p.brand);
    assert(offer?.code&&date(observation.checkedOn),`Checkout test provenance: ${p.slug}`);
    assert.equal(observation.code,offer.code,`Checkout code scope: ${p.slug}`);
    assert.equal(observation.variantId,p.price.variantId,`Checkout variant scope: ${p.slug}`);
    assert.equal(observation.currency,p.price.currency,`Checkout currency: ${p.slug}`);
    assert.equal(observation.baseAmountMinor,p.price.amountMinor,`Checkout base amount: ${p.slug}`);
    assert.equal(observation.baseAmountMinor-observation.discountMinor,observation.afterAmountMinor,`Checkout amount arithmetic: ${p.slug}`);
    assert.equal(priceState(p,offer).kind,'observed',`Observed price state: ${p.slug}`);
  }
  if(p.slug==='mooncool-tk2-folding-electric-trike'){
    const words=p.verdict.trim().split(/\s+/).length;
    assert(words>=50&&words<=90,`Quick verdict must be 50-90 words: ${p.slug}`);
    assert(p.faqs.length===4,`Four model-specific FAQs plus shared code FAQ: ${p.slug}`);
  }
}
for(const c of comparisons)assert(products.some(p=>p.slug===c.a)&&products.some(p=>p.slug===c.b)&&c.a!==c.b);
for(const c of categories)assert(guides.some(g=>g.slug===c.guide));
for(const o of offers){
  assert(brands.some(b=>b.slug===o.brand));assert(o.evidence&&o.reportedOn&&o.url,'Commercial offer needs provenance');
  assert.equal(new URL(o.url).protocol,'https:');assert.equal(o.eligibleStore,new URL(o.url).hostname,'Offer storefront');
  assert(o.benefit===null||typeof o.benefit==='string');if(o.code)assert(o.eligibleStore&&o.terms,'Code needs exact store and terms');
  if(o.discount){assert(['percent','fixed'].includes(o.discount.type)&&Number.isFinite(o.discount.value)&&o.discount.value>0&&o.discount.scope,`Structured discount: ${o.brand}`);if(o.discount.type==='fixed')assert(/^[A-Z]{3}$/.test(o.discount.currency),`Fixed discount currency: ${o.brand}`);assert.equal(o.benefit,discountLabel(o.discount),`Discount label derives from canonical value: ${o.brand}`);}
  assert.equal(o.checkoutTestedOn!==null,Boolean(o.checkoutTestProduct),`Checkout date and test scope agree: ${o.brand}`);
  if(o.checkoutTestProduct){const p=products.find(x=>x.slug===o.checkoutTestProduct.slug);assert(p?.checkoutObservation&&p.checkoutObservation.checkedOn===o.checkoutTestedOn,`Offer test points to exact product evidence: ${o.brand}`);}
  for(const slug of pathFor(o).guides)assert(guides.some(g=>g.slug===slug),`Unknown partner guide: ${slug}`);
}

assert.equal(formatMinor(59900,'USD'),'$599.00');
assert.equal(discountAmountMinor(59900,{type:'percent',value:3},'USD'),1797,'Percent rounding uses integer minor units, down');
assert.equal(discountAmountMinor(101,{type:'percent',value:2},'USD'),2,'Fractional minor-unit rounding down');
assert.equal(discountAmountMinor(119,{type:'percent',value:5},'USD'),5,'Percentage discounts floor fractional minor units');
assert.equal(discountAmountMinor(149999,{type:'percent',value:5},'USD'),7499,'Mooncool checkout rounds the percentage down to whole minor units');
assert.equal(discountAmountMinor(5000,{type:'fixed',value:50,currency:'USD'},'USD'),5000);
assert.equal(discountAmountMinor(4999,{type:'fixed',value:50,currency:'USD'},'USD'),null,'Fixed discounts never create a negative price');
assert.equal(discountAmountMinor(9000,{type:'fixed',value:50,currency:'EUR'},'USD'),null,'Fixed discount currency must match');
const sample={price:{amountMinor:101,currency:'USD',region:'US',variantId:'v1',variantLabel:'Blue',source:'https://example.com/p',checkedOn:'2026-10-22'},eligibility:{status:'eligible',variantId:'v1',evidence:'docs/evidence/mooncool-tk2-folding-electric-trike.md'}};
const percentOffer={status:'active',code:'CODE',discount:{type:'percent',value:2,scope:'Exact variant'}};
assert.equal(priceState(sample,percentOffer).afterMinor,99,'Percentage estimate');
assert.equal(priceState({...sample,eligibility:null},percentOffer).kind,'eligibility-unconfirmed','Unapproved product never receives a calculated saving');
assert.equal(priceState({eligibility:sample.eligibility},percentOffer).kind,'unresolved','Missing price never receives a calculated saving');
assert.equal(priceState({...sample,price:{...sample.price,isSalePrice:true}},percentOffer).kind,'eligibility-unconfirmed','Sale stacking must be observed or evidenced');
assert.equal(priceState(sample,{...percentOffer,status:'inactive'}).kind,'price-only','Inactive offers are not calculated');
assert.equal(priceState(sample,{...percentOffer,expiresOn:'2020-01-01'}).kind,'price-only','Expired offers are not calculated');
assert.equal(priceState(sample,{...percentOffer,discount:{type:'fixed',value:5,currency:'EUR',scope:'Exact variant'}}).kind,'terms-unresolved','Mismatched fixed discount currency fails closed');
console.log(`Data valid: ${products.length} reviews, ${guides.length} guides, ${comparisons.length} comparisons, ${offers.length} partner offers; price eligibility and rounding checks passed.`);

for(const g of guides){
  assert(g.title&&g.description&&g.answer&&g.topics?.length,`Guide metadata: ${g.slug}`);
  assert(g.topics.every(t=>categories.some(c=>c.slug===t)),`Guide topics: ${g.slug}`);
  assert(existsSync(`public${g.image}`),`Guide social image: ${g.slug}`);
  assert(date(g.publishedOn)&&date(g.updatedOn),`Guide date format: ${g.slug}`);
  assert(g.updatedOn>=g.publishedOn,`Guide date order: ${g.slug}`);
  const sections=sectionsFor(g);const ids=sections.map(s=>sectionId(s.heading));
  assert(ids.every(Boolean)&&new Set(ids).size===ids.length,`Unique guide anchors: ${g.slug}`);
  for(const s of sections){assert(s.heading&&(s.paragraphs?.length||s.table||s.steps?.length),`Empty section: ${g.slug}`);if(s.table)assert(s.table.caption&&s.table.rows.every(r=>r.length===s.table.headers.length),`Table cells: ${g.slug}`);}
  for(const slug of g.related||[])assert(slug!==g.slug&&guides.some(x=>x.slug===slug),`Related guide: ${g.slug} / ${slug}`);
  for(const slug of g.products||[])assert(products.some(p=>p.slug===slug),`Mentioned product: ${g.slug} / ${slug}`);
  if(g.faq){assert.equal(new Set(g.faq.map(([q])=>q)).size,g.faq.length,`Duplicate FAQ: ${g.slug}`);for(const [q,a] of g.faq)assert(q&&a,`Empty FAQ: ${g.slug}`);assert(g.sources?.length,`Guide sources: ${g.slug}`);}
  for(const source of g.sources||[])assert(source.name&&new URL(source.url).protocol==='https:',`Source URL: ${g.slug}`);
}
const hubSlugs=guideGroups.flatMap(group=>group.slugs);
assert(hubSlugs.length===guides.length&&new Set(hubSlugs).size===guides.length&&hubSlugs.every(slug=>guides.some(g=>g.slug===slug)),'Every guide must have one hub placement');
console.log('Guide dates, sources, related links, sections, FAQs and hub coverage valid.');
