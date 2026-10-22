import assert from 'node:assert/strict';import fs from 'node:fs';import {offers,brands} from '../src/data/catalog.js';import {offerAnswer,offerFaq} from '../src/lib/offers.js';
const decode=s=>s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&#x27;/g,"'");
const visible=s=>decode(s.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
const graph=s=>JSON.parse(s.match(/<script type="application\/ld\+json">(.*?)<\/script>/)[1])['@graph'];
const feed=JSON.parse(fs.readFileSync('dist/agent.json','utf8'));const llms=fs.readFileSync('dist/llms.txt','utf8');const deals=fs.readFileSync('dist/deals.html','utf8');const sitemap=fs.readFileSync('dist/sitemap-0.xml','utf8');
assert.equal(offers.length,44);assert.equal(offers.filter(o=>o.code).length,24);assert.equal(offers.filter(o=>o.benefit).length,19);assert.equal(new Set(offers.map(o=>o.brand)).size,44);
assert.equal(feed.offers.length,44);
const exact={eunorau:['EUNORSEBASTIAN60','2% off','https://eunorau-ebike.com/?ref=gowithsebastian&utm_medium=affiliate&utm_source=goaffpro'],actbest:['SEBASTIAN3%','3% off','https://actbestbike.com/81054420bg'],gebike:['SEBASTIANBASSOL','€10 off','https://gebikeglobal.com/?ref=SEBASTIANBASSOLINO'],eahora:['SEBASTIANBASSOL','$400 off','https://eahoraescooter.com/?ref=vymoetrs'],happyrun:['SEBASTIANBASSOL23',null,'https://happyrunsports.com/?ref=hhyssezj']};
for(const [slug,expected] of Object.entries(exact)){const o=offers.find(o=>o.brand===slug);assert.deepEqual([o.code,o.benefit,o.url],expected,`Exact owner offer: ${slug}`);}
for(const o of offers){const name=brands.find(b=>b.slug===o.brand).name;const answer=offerAnswer(o,name);const item=feed.offers.find(x=>x.slug===o.brand);assert.equal(item.shop_url,o.url);assert.equal(item.answer,answer);assert.equal(item.last_spot_check,null);assert.equal(item.permanent,null);assert.equal(item.discount,o.benefit);assert.equal(item.code,o.code);assert(llms.includes(o.url),`Crawler URL ${o.brand}`);
 const paths=[`/brands/${o.brand}`,...(o.code?[`/promo/${o.brand}`]:[])];
 for(const route of paths){const html=fs.readFileSync(`dist${route}.html`,'utf8');const text=visible(html);assert(text.includes(answer),`Visible canonical answer ${route}`);assert(sitemap.includes(`https://biketested.com${route}</loc><lastmod>${o.reportedOn}`),`Dated sitemap: ${route}`);assert(html.includes(`href="${o.url.replace(/&/g,'&amp;')}"`)||html.includes(`href="${o.url}"`),`Exact tracking URL ${route}`);for(const tag of html.match(/<a\b[^>]+>/g)||[]){if(decode(tag).includes(`href="${o.url}"`)){assert(tag.includes('rel="sponsored noopener"')&&tag.includes('data-affiliate="true"'),`Sponsored CTA ${route}`);}}
  const faq=graph(html).find(x=>x['@type']==='FAQPage');assert.equal(faq.mainEntity.length,offerFaq(o,name).length);for(const q of faq.mainEntity)assert(text.includes(q.name)&&text.includes(q.acceptedAnswer.text),`Visible FAQ ${route}`);
  if(route.startsWith('/promo/')){assert(html.includes(`data-copy-code="${o.code}"`),`Exact copy value ${route}`);assert(graph(html).some(x=>x['@type']==='Offer'&&x.identifier?.value===o.code),`Offer schema ${route}`);assert(llms.includes(answer));}
 }
 if(!o.code)assert(!fs.existsSync(`dist/promo/${o.brand}.html`),`No invented coupon route ${o.brand}`);
 assert(deals.includes(`data-partner="${name.toLowerCase()}"`),`Deals placement ${o.brand}`);
}
const walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(`${p}/${x.name}`):[`${p}/${x.name}`]);for(const file of walk('dist').filter(x=>/\.(html|json|txt|js)$/.test(x))){const content=fs.readFileSync(file,'utf8');assert(!content.includes('PERSON'+'SEBASTIAN84'),`Personal-use code leaked: ${file}`);}
const queue=JSON.parse(fs.readFileSync('docs/partner-review-queue.json','utf8'));assert.equal(queue.queue.length,44);for(const q of queue.queue){assert.equal(q.affiliateUrl,offers.find(o=>o.brand===q.brandSlug).url);assert.equal(q.product,null);assert.equal(q.reviewUrl,null);}
console.log('Partner output valid: 44 exact affiliate links, 24 coupon routes, visible/schema/feed agreement, provenance, regional storefronts and personal-code exclusion.');
