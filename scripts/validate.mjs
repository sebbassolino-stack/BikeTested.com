import assert from 'node:assert/strict';import {existsSync} from 'node:fs';import {products,brands,offers,comparisons,categories} from '../src/data/catalog.js';import {guides} from '../src/data/guides.js';
for(const list of [products,brands,comparisons,guides,categories])assert.equal(new Set(list.map(x=>x.slug)).size,list.length,'Duplicate slugs');
for(const p of products){assert(brands.some(b=>b.slug===p.brand));assert(existsSync(`public${p.image}`),`Missing image ${p.image}`);assert(p.verdict&&p.strengths.length&&p.tradeoffs.length&&p.source&&p.evidence);assert(!('rating'in p)&&!('score'in p));assert(new URL(p.source).protocol==='https:');}
for(const c of comparisons)assert(products.some(p=>p.slug===c.a)&&products.some(p=>p.slug===c.b)&&c.a!==c.b);
for(const c of categories)assert(guides.some(g=>g.slug===c.guide));
for(const o of offers){assert(brands.some(b=>b.slug===o.brand));assert(o.evidence&&o.checkedOn&&o.url&&o.benefit,'Commercial offer needs provenance');if(o.code)assert(o.eligibleStore&&o.terms,'Code needs exact store and terms');}
console.log(`Data valid: ${products.length} reviews, ${guides.length} guides, ${comparisons.length} comparisons, ${offers.length} confirmed offers.`);
