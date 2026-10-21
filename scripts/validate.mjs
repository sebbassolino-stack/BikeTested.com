import assert from 'node:assert/strict';import {existsSync} from 'node:fs';import {products,brands,offers,comparisons,categories} from '../src/data/catalog.js';import {guides} from '../src/data/guides.js';import {sectionsFor,sectionId,guideGroups} from '../src/lib/guides.js';
for(const list of [products,brands,comparisons,guides,categories])assert.equal(new Set(list.map(x=>x.slug)).size,list.length,'Duplicate slugs');
for(const p of products){assert(brands.some(b=>b.slug===p.brand));assert(existsSync(`public${p.image}`),`Missing image ${p.image}`);assert(p.verdict&&p.strengths.length&&p.tradeoffs.length&&p.source&&p.evidence);assert(!('rating'in p)&&!('score'in p));assert(new URL(p.source).protocol==='https:');}
for(const c of comparisons)assert(products.some(p=>p.slug===c.a)&&products.some(p=>p.slug===c.b)&&c.a!==c.b);
for(const c of categories)assert(guides.some(g=>g.slug===c.guide));
for(const o of offers){assert(brands.some(b=>b.slug===o.brand));assert(o.evidence&&o.checkedOn&&o.url&&o.benefit,'Commercial offer needs provenance');if(o.code)assert(o.eligibleStore&&o.terms,'Code needs exact store and terms');}
console.log(`Data valid: ${products.length} reviews, ${guides.length} guides, ${comparisons.length} comparisons, ${offers.length} confirmed offers.`);

for (const g of guides) {
 assert(g.title && g.description && g.answer && g.topics?.length, `Guide metadata: ${g.slug}`);
 assert(g.topics.every(t=>categories.some(c=>c.slug===t)), `Guide topics: ${g.slug}`);
 assert(existsSync(`public${g.image}`), `Guide social image: ${g.slug}`);
 assert(/^\d{4}-\d{2}-\d{2}$/.test(g.publishedOn) && /^\d{4}-\d{2}-\d{2}$/.test(g.updatedOn), `Guide date format: ${g.slug}`);
 assert(!Number.isNaN(Date.parse(g.publishedOn)) && g.updatedOn>=g.publishedOn, `Guide date order: ${g.slug}`);
 const sections=sectionsFor(g); const ids=sections.map(s=>sectionId(s.heading));
 assert(ids.every(Boolean) && new Set(ids).size===ids.length, `Unique guide anchors: ${g.slug}`);
 for(const s of sections){assert(s.heading && (s.paragraphs?.length||s.table||s.steps?.length), `Empty section: ${g.slug}`);if(s.table)assert(s.table.caption && s.table.rows.every(r=>r.length===s.table.headers.length), `Table cells: ${g.slug}`);}
 for(const slug of g.related||[])assert(slug!==g.slug&&guides.some(x=>x.slug===slug), `Related guide: ${g.slug} / ${slug}`);
 for(const slug of g.products||[])assert(products.some(p=>p.slug===slug), `Mentioned bike: ${g.slug} / ${slug}`);
 if(g.faq){assert(new Set(g.faq.map(([q])=>q)).size===g.faq.length, `Duplicate FAQ: ${g.slug}`);for(const [q,a] of g.faq)assert(q&&a,`Empty FAQ: ${g.slug}`);assert(g.sources?.length, `Guide sources: ${g.slug}`);}
 for(const source of g.sources||[])assert(source.name && new URL(source.url).protocol==='https:', `Source URL: ${g.slug}`);
}
const hubSlugs=guideGroups.flatMap(group=>group.slugs);
assert(hubSlugs.length===guides.length && new Set(hubSlugs).size===guides.length && hubSlugs.every(slug=>guides.some(g=>g.slug===slug)), 'Every guide must have one hub placement');
console.log('Guide dates, sources, related links, sections, FAQs and hub coverage valid.');
