import {guides} from '../src/data/guides.js';
import {products,offers,brands} from '../src/data/catalog.js';
import {productOfferFaq} from '../src/lib/offers.js';
import {formatMinor,priceState} from '../src/lib/pricing.js';
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);const files=walk('dist');const html=files.filter(f=>f.endsWith('.html'));let links=0;
for(const file of html){const s=fs.readFileSync(file,'utf8');assert.equal((s.match(/<h1[\s>]/g)||[]).length,1,`One H1: ${file}`);assert(s.includes('rel="canonical"'),`Canonical: ${file}`);const route=file.slice('dist'.length).replace(/\/index\.html$/,'').replace(/\.html$/,'')||'/';const canonical=s.match(/<link rel="canonical" href="([^"]+)"/);assert.equal(canonical?.[1],`https://biketested.com${route}`,`Canonical route: ${file}`);assert(!/aggregateRating|reviewRating|ratingValue/.test(s),`No ratings: ${file}`);assert(s.includes('name="description"'),`Description: ${file}`);for(const [,url]of s.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){if(url.startsWith('//'))continue;const target=decodeURIComponent(url);assert(fs.existsSync(`dist${target}`)||fs.existsSync(`dist${target}.html`)||fs.existsSync(`dist${target}/index.html`),`Broken local link in ${file}: ${url}`);links++;}for(const [,raw]of s.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g))JSON.parse(raw);}
const baseline=JSON.parse(fs.readFileSync('docs/published-paths.json','utf8'));for(const route of baseline)assert(fs.existsSync(`dist${route}.html`)||route==='/'&&fs.existsSync('dist/index.html'),`Missing baseline URL ${route}`);
assert(fs.existsSync('dist/pagefind/pagefind.js'));assert(fs.existsSync('dist/sitemap-index.xml'));console.log(`Build valid: ${html.length} HTML pages; ${links} internal references; structured data and published path baseline passed.`);

const plainText=s=>s.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&#x27;/g,"'").replace(/\s+/g,' ').trim();
const sitemap=fs.readFileSync('dist/sitemap-0.xml','utf8');
for(const g of guides){
 const html=fs.readFileSync(`dist/guides/${g.slug}.html`,'utf8');
 const graph=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)[1])['@graph'];
 const article=graph.find(x=>x['@type']==='Article');
 assert(article?.headline===g.title && article.datePublished===g.publishedOn && article.dateModified===g.updatedOn,`Article facts: ${g.slug}`);
 for(const [,anchor] of html.matchAll(/href="#([^"]+)"/g))assert(html.includes(`id="${anchor}"`),`Broken TOC anchor: ${g.slug} / ${anchor}`);
 if(g.faq){const faq=graph.find(x=>x['@type']==='FAQPage');assert(faq?.mainEntity.length===g.faq.length,`FAQ count: ${g.slug}`);const visible=plainText(html);for(const [q,a] of g.faq)assert(visible.includes(q)&&visible.includes(a),`FAQ text is not visible: ${g.slug}`);}
 assert(sitemap.includes(`https://biketested.com/guides/${g.slug}</loc><lastmod>${g.updatedOn}`),`Guide sitemap date: ${g.slug}`);
}
console.log(`Guide HTML and schema agree; ${guides.length} dated sitemap entries and all TOC anchors pass.`);

for(const p of products){
 const file=`dist/reviews/${p.slug}.html`,html=fs.readFileSync(file,'utf8'),text=plainText(html),graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
 const article=graph.find(x=>x['@type']==='Article'),product=graph.find(x=>x['@type']==='Article')?.about,faq=graph.find(x=>x['@type']==='FAQPage');
 assert(article?.headline===`${p.name} review`&&article.datePublished===p.publishedOn&&article.dateModified===p.updatedOn,`Review article dates: ${p.slug}`);
 assert(product?.['@type']==='Thing'&&product.name===p.name,`Editorial subject: ${p.slug}`);assert(!graph.some(x=>x['@type']==='Product'),`Incomplete Product rich-result markup: ${p.slug}`);
 assert(html.includes(`src="${p.image}"`)&&text.includes(p.verdict),`Review image and verdict: ${p.slug}`);
 const baseFaq=p.faqs||[[`Who should choose the ${p.name}?`,p.verdict],[`What range does the ${p.name} claim?`,`The listed range is the manufacturer's claim. Real distance depends on conditions, rider load, assistance level, and route.`],[`What should I check before ordering the ${p.name}?`,p.tradeoffs.join('. ')]];
 const expectedFaq=[...baseFaq,productOfferFaq(offers.find(o=>o.brand===p.brand&&o.status==='active'),brands.find(b=>b.slug===p.brand).name,p)];
 assert.equal(faq?.mainEntity.length,expectedFaq.length,`Review FAQ count: ${p.slug}`);
 for(const [q,a]of expectedFaq)assert(text.includes(q)&&text.includes(a),`Visible review FAQ/schema answer: ${p.slug}`);
 assert(text.includes(`Manufacturer specifications checked ${new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${p.specsCheckedOn}T00:00:00Z`))}`),`Visible specification check date: ${p.slug}`);
 assert(sitemap.includes(`https://biketested.com/reviews/${p.slug}</loc><lastmod>${p.updatedOn}`),`Review sitemap date: ${p.slug}`);
 if(p.price){const offer=offers.find(o=>o.brand===p.brand&&o.status==='active'),state=priceState(p,offer);assert(text.includes(formatMinor(p.price.amountMinor,p.price.currency))&&text.includes(p.price.variantLabel),`Visible dated exact variant price: ${p.slug}`);if(state.kind==='observed'||state.kind==='estimated')assert(text.includes(state.afterFormatted)&&text.includes(offer.code),`Visible supported after-code amount: ${p.slug}`);}
}
console.log(`Review HTML, per-product dates, product and FAQ schema, supported price states, and sitemap entries passed for ${products.length} reviews.`);

const browserScript=fs.readFileSync('dist/site.js','utf8');
assert(browserScript.includes('Copied')&&browserScript.includes('Copy failed'), 'Copy success and failure feedback must be rendered by the shared browser script');
