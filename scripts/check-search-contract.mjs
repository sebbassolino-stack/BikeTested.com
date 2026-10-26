// Portable build gate. Run after HTML/sitemap generation; no network or submissions.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function schemaIssues(value, at = '$') {
  const issues = [];
  if (!value || typeof value !== 'object') return issues;
  if (Array.isArray(value)) return value.flatMap((v, i) => schemaIssues(v, `${at}[${i}]`));
  const types = [].concat(value['@type'] || []);
  if (types.includes('Product') && !['offers', 'review', 'aggregateRating'].some(k => value[k])) issues.push(`${at}: Product has no offers, review or aggregateRating`);
  if (types.includes('Review') && !value.reviewRating) issues.push(`${at}: Review has no reviewRating; qualitative editorial belongs in Article markup`);
  if (types.includes('Product') && value.offers) {
    for (const o of [].concat(value.offers)) {
      const os = [].concat(o?.['@type'] || []);
      if (os.includes('Offer') && o.price == null && o.priceSpecification?.price == null) issues.push(`${at}: Product Offer has no price`);
      if (os.includes('AggregateOffer') && o.lowPrice == null) issues.push(`${at}: AggregateOffer has no lowPrice`);
    }
  }
  for (const [k, v] of Object.entries(value)) if (v && typeof v === 'object') issues.push(...schemaIssues(v, `${at}.${k}`));
  return issues;
}
const walk = p => fs.readdirSync(p, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(p,e.name)) : [path.join(p,e.name)]);
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i'))?.[1] || '';
const allNodes = value => !value || typeof value !== 'object' ? [] : Array.isArray(value) ? value.flatMap(allNodes) : [value,...Object.values(value).flatMap(allNodes)];
export function checkBuild(dist = 'dist') {
  if (!fs.existsSync(dist)) throw Error(`Missing build output: ${dist}`);
  const files = walk(dist), errors = [], sitemap = new Set();
  const decode = s => s.replaceAll('&amp;','&');
  for (const f of files.filter(f => /sitemap[^/]*\.xml$/.test(f))) {
    const xml = fs.readFileSync(f,'utf8');
    if (/<urlset\b/.test(xml)) for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemap.add(decode(m[1]));
  }
  const htmlFiles = files.filter(f => f.endsWith('.html'));
  const breadcrumbTargets = [];
  for (const f of htmlFiles) {
    const html = fs.readFileSync(f,'utf8'), rel = path.relative(dist,f);
    for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      if (attr(m[1],'type').toLowerCase() !== 'application/ld+json') continue;
      try {
        const graph=JSON.parse(m[2]);
        errors.push(...schemaIssues(graph).map(x => `${rel}: ${x}`));
        for(const n of allNodes(graph).filter(n=>[].concat(n['@type']||[]).includes('BreadcrumbList'))) {
          for(const item of n.itemListElement||[]) {
            const url=typeof item.item==='string'?item.item:item.item?.['@id']||item.item?.url;
            if(url) breadcrumbTargets.push({rel,url});
          }
        }
      }
      catch(e) { errors.push(`${rel}: invalid JSON-LD: ${e.message}`); }
    }
    const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(m => m[0]);
    const canonicals = links.filter(t => attr(t,'rel').split(/\s+/).includes('canonical')).map(t => decode(attr(t,'href')));
    const noindex = [...html.matchAll(/<meta\b[^>]*>/gi)].some(m => ['robots','googlebot'].includes(attr(m[0],'name').toLowerCase()) && /\bnoindex\b/i.test(attr(m[0],'content')));
    if (noindex && canonicals.some(c => sitemap.has(c))) errors.push(`${rel}: noindex page is included in sitemap`);
    if (!noindex && !/(^|\/)404(?:\/index)?\.html$/.test(rel) && canonicals.length !== 1) errors.push(`${rel}: expected exactly one canonical`);
  }
  for (const u of sitemap) {
    let pathname;
    try { pathname = decodeURIComponent(new URL(u).pathname); } catch { errors.push(`Invalid sitemap URL: ${u}`); continue; }
    const stem = path.join(dist,pathname);
    if (![stem,`${stem}.html`,path.join(stem,'index.html')].some(f => fs.existsSync(f) && fs.statSync(f).isFile())) errors.push(`Sitemap URL has no generated HTML: ${u}`);
  }
  const siteHost=[...sitemap].map(u=>{try{return new URL(u).hostname;}catch{return null;}}).find(Boolean);
  for(const {rel,url} of breadcrumbTargets) {
    let u;
    try {u=new URL(url,siteHost?`https://${siteHost}`:undefined);} catch {errors.push(`${rel}: invalid breadcrumb URL ${url}`);continue;}
    if(siteHost&&u.hostname!==siteHost)continue;
    const stem=path.join(dist,decodeURIComponent(u.pathname));
    if(![stem,`${stem}.html`,path.join(stem,'index.html')].some(f=>fs.existsSync(f)&&fs.statSync(f).isFile())) errors.push(`${rel}: breadcrumb destination has no generated HTML: ${url}`);
  }
  return {pages:htmlFiles.length,sitemapUrls:sitemap.size,errors};
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = checkBuild(process.argv[2] || 'dist');
  if (result.errors.length) { console.error(result.errors.join('\n')); process.exitCode = 1; }
  else console.log(`Search contract passed: ${result.pages} HTML pages, ${result.sitemapUrls} sitemap URLs; no invalid Product/Review basis or sitemap/noindex contradictions.`);
}
