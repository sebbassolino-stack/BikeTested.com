import {guides} from '../src/data/guides.js';
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);const files=walk('dist');const html=files.filter(f=>f.endsWith('.html'));let links=0;
for(const file of html){const s=fs.readFileSync(file,'utf8');assert.equal((s.match(/<h1[\s>]/g)||[]).length,1,`One H1: ${file}`);assert(s.includes('rel="canonical"'),`Canonical: ${file}`);assert(!/aggregateRating|reviewRating|ratingValue/.test(s),`No ratings: ${file}`);assert(s.includes('name="description"'),`Description: ${file}`);for(const [,url] of s.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){if(url.startsWith('//'))continue;const target=decodeURIComponent(url);assert(fs.existsSync(`dist${target}`)||fs.existsSync(`dist${target}.html`)||fs.existsSync(`dist${target}/index.html`),`Broken local link in ${file}: ${url}`);links++;}for(const [,raw]of s.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g))JSON.parse(raw);}
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
