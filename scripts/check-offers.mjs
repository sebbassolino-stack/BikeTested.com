import assert from 'node:assert/strict';
import fs from 'node:fs';
import {offers,brands,products} from '../src/data/catalog.js';
import {offerAnswer,offerFaq} from '../src/lib/offers.js';
import {priceState} from '../src/lib/pricing.js';

const decode=s=>s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&#x27;/g,"'");
const visible=s=>decode(s.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
const graph=s=>JSON.parse(s.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
const feed=JSON.parse(fs.readFileSync('dist/agent.json','utf8'));
const llms=fs.readFileSync('dist/llms.txt','utf8');
const deals=fs.readFileSync('dist/deals.html','utf8');
const sitemap=fs.readFileSync('dist/sitemap-0.xml','utf8');
assert.equal(offers.length,44);assert.equal(offers.filter(o=>o.code).length,24);assert.equal(offers.filter(o=>o.benefit).length,20);assert.equal(new Set(offers.map(o=>o.brand)).size,44);
assert.equal(feed.offers.length,44);
const exact={eunorau:['EUNORSEBASTIAN60','2% off','https://eunorau-ebike.com/?ref=gowithsebastian&utm_medium=affiliate&utm_source=goaffpro'],actbest:['SEBASTIAN3%','3% off','https://actbestbike.com/81054420bg'],gebike:['SEBASTIANBASSOL','€10.00 off','https://gebikeglobal.com/?ref=SEBASTIANBASSOLINO'],eahora:['SEBASTIANBASSOL','$400 off','https://eahoraescooter.com/?ref=vymoetrs'],happyrun:['SEBASTIANBASSOL23',null,'https://happyrunsports.com/?ref=hhyssezj'],mooncool:['SEBASTIANBASSOL','5% off','https://www.mooncool.com/?ref=znnfuofi'],tomofree:['SEBASTIANBASSOL','6% off','https://tomofree.com/?ref=uhifvbyw'],zwheel:['SEBASTIANBASSOL','$20.00 off','https://zwheelsport.com/?ref=SEBASTIANBASSOLINO']};
for(const [slug,expected]of Object.entries(exact)){const o=offers.find(x=>x.brand===slug);assert.deepEqual([o.code,o.benefit,o.url],expected,`Exact owner offer: ${slug}`);}
for(const o of offers){
  const name=brands.find(b=>b.slug===o.brand).name,answer=offerAnswer(o,name),item=feed.offers.find(x=>x.slug===o.brand);
  assert.equal(item.shop_url,o.url);assert.equal(item.answer,answer);assert.equal(item.last_spot_check,o.checkoutTestedOn);assert.equal(item.permanent,null);assert.equal(item.discount,o.benefit);assert.equal(item.code,o.code);assert.deepEqual(item.structuredDiscount,o.discount||null);assert(llms.includes(o.url),`Crawler URL ${o.brand}`);
  if(o.checkoutTestProduct){assert.deepEqual(item.checkout_test_product,{name:o.checkoutTestProduct.name,variantId:o.checkoutTestProduct.variantId,variantLabel:o.checkoutTestProduct.variantLabel});assert(answer.includes(o.checkoutTestProduct.variantLabel));}
  const paths=[`/brands/${o.brand}`,...(o.code?[`/promo/${o.brand}`]:[])];
  for(const route of paths){
    const html=fs.readFileSync(`dist${route}.html`,'utf8'),text=visible(html);
    assert(text.includes(answer),`Visible canonical answer ${route}`);assert(sitemap.includes(`https://biketested.com${route}</loc><lastmod>${o.reportedOn}`),`Dated sitemap: ${route}`);
    assert(html.includes(`href="${o.url.replace(/&/g,'&amp;')}"`)||html.includes(`href="${o.url}"`),`Exact tracking URL ${route}`);
    for(const tag of html.match(/<a\b[^>]+>/g)||[])if(decode(tag).includes(`href="${o.url}"`))assert(tag.includes('rel="sponsored noopener"')&&tag.includes('data-affiliate="true"'),`Sponsored CTA ${route}`);
    const faq=graph(html).find(x=>x['@type']==='FAQPage');assert.equal(faq.mainEntity.length,offerFaq(o,name).length);
    for(const [q,a]of offerFaq(o,name))assert(text.includes(q)&&text.includes(a),`Visible FAQ text ${route}`);
    if(route.startsWith('/promo/')){
      assert(html.includes(`data-copy-code="${o.code}"`),`Exact copy value ${route}`);
      assert(graph(html).some(x=>x['@type']==='Offer'&&x.identifier?.value===o.code),`Promo-code schema ${route}`);
      assert(llms.includes(answer));
      const reviewed=products.filter(p=>p.brand===o.brand);
      for(const p of reviewed){const state=priceState(p,o),promoText=visible(html);assert(html.includes(`data-product="${p.slug}"`),`Reviewed product card ${route} / ${p.slug}`);if(state.afterFormatted)assert(promoText.includes(state.afterFormatted),`Supported price on promo card ${p.slug}`);assert(html.includes(p.image),`Exact product image on promo page ${p.slug}`);}
    }
  }
  if(!o.code)assert(!fs.existsSync(`dist/promo/${o.brand}.html`),`No invented coupon route ${o.brand}`);
  assert(deals.includes(`data-partner="${name.toLowerCase()}"`),`Deals placement ${o.brand}`);
}
const reviewed=products.find(p=>p.slug==='mooncool-tk2-folding-electric-trike'),reviewFeed=feed.products.find(p=>p.name===reviewed.name),reviewState=priceState(reviewed,offers.find(o=>o.brand==='mooncool'));
assert(reviewFeed&&reviewFeed.price.amountMinor===149999&&reviewFeed.price.variantId===reviewed.price.variantId,`Exact public product price ${reviewed.slug}`);
assert.equal(reviewFeed.eligibility.status,'confirmed-for-exact-variant');assert.equal(reviewFeed.afterCodePrice.amountMinor,142500);assert.equal(reviewState.kind,'observed');
assert(llms.includes('$1,425.00')&&/Other variants and models have not been checked/.test(llms),`Crawler price and eligibility scope ${reviewed.slug}`);
const tomofreeProduct=products.find(p=>p.slug==='tomofree-t1max-folding-ebike'),tomofreeFeed=feed.products.find(p=>p.name===tomofreeProduct.name),tomofreeState=priceState(tomofreeProduct,offers.find(o=>o.brand==='tomofree'));
assert(tomofreeFeed&&tomofreeFeed.price.amountMinor===49900&&tomofreeFeed.price.variantId==='51294483775628',`Exact public product price ${tomofreeProduct.slug}`);
assert.equal(tomofreeFeed.eligibility.status,'confirmed-for-exact-variant');assert.equal(tomofreeFeed.afterCodePrice.amountMinor,46906);assert.equal(tomofreeState.kind,'observed');
assert(llms.includes('$469.06')&&llms.includes('Other variants and models have not been checked'),`Crawler price and eligibility scope ${tomofreeProduct.slug}`);
const zwheelProduct=products.find(p=>p.slug==='zwheel-d3-d-electric-scooter'),zwheelFeed=feed.products.find(p=>p.name===zwheelProduct.name),zwheelState=priceState(zwheelProduct,offers.find(o=>o.brand==='zwheel'));
assert(zwheelFeed&&zwheelFeed.price.amountMinor===67999&&zwheelFeed.price.variantId==='48219169783962',`Exact public product price ${zwheelProduct.slug}`);
assert.equal(zwheelFeed.eligibility.status,'confirmed-for-exact-variant');assert.equal(zwheelFeed.afterCodePrice.amountMinor,65999);assert.equal(zwheelState.kind,'observed');
assert(llms.includes('$659.99')&&llms.toLowerCase().includes('other variants and models have not been checked'),`Crawler price and eligibility scope ${zwheelProduct.slug}`);
const walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(`${p}/${x.name}`):[`${p}/${x.name}`]);
for(const file of walk('dist').filter(x=>/\.(html|json|txt|js)$/.test(x))){const content=fs.readFileSync(file,'utf8');assert(!content.includes('PERSON'+'SEBASTIAN84'),`Personal-use code leaked: ${file}`);}
const queue=JSON.parse(fs.readFileSync('docs/partner-review-queue.json','utf8'));
const queuedBrands=new Set(queue.queue.map(q=>q.brandSlug));
assert.equal(queuedBrands.size,offers.length);
for(const offer of offers)assert(queuedBrands.has(offer.brand),`Partner queue coverage ${offer.brand}`);
for(const q of queue.queue){assert.equal(q.affiliateUrl,offers.find(o=>o.brand===q.brandSlug).url);}
const luckeep=queue.queue.find(q=>q.brandSlug==='luckeep'),mooncool=queue.queue.find(q=>q.brandSlug==='mooncool');
assert.equal(luckeep.status,'product-unavailable-after-bounded-research');assert(luckeep.nextStep.includes('M5 Max')&&luckeep.nextStep.includes('C23'));
assert.equal(mooncool.reviewUrl,'/reviews/mooncool-tk2-folding-electric-trike');assert(mooncool.product.includes('Cyan Green-Matte'));
console.log('Partner output valid: 44 exact affiliate links, 24 coupon routes, scoped checkout evidence, visible/schema/feed agreement, review coverage and private-code exclusion.');
