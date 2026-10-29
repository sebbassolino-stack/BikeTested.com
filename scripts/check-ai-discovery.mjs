import fs from 'node:fs';import assert from 'node:assert/strict';
const read=p=>fs.readFileSync('dist/'+p,'utf8');
const directory=JSON.parse(read('ai-directory.json'));
assert(fs.existsSync('dist'+new URL(directory.sitemap).pathname),'Discovery sitemap must exist');
const agents=['agent.json','.well-known/agent.json'].filter(p=>fs.existsSync('dist/'+p));assert(agents.length,'A readable agent file must exist');for(const file of agents){const payload=JSON.parse(read(file));assert(payload.site_directory===`https://${new URL(directory.site).hostname}/ai-directory.json`||payload.format==='publisher-site-directory','Agent must link the current site directory: '+file);}
const strip=u=>u.replace(/\/$/,'');
const sitemap=fs.readdirSync('dist').filter(p=>/^sitemap.*\.xml$/.test(p)).map(read).join('\n');
const locs=new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>strip(m[1])));
const llms=read('llms.txt');
assert(llms.includes('/ai-directory.json'),'llms must link the discovery directory');
assert(!/commissionTerms|commissionRate|payout|reader_email|payment_email/.test(JSON.stringify(directory)),'Private partner fields must not enter discovery');
function htmlFor(url){const route=new URL(url).pathname.replace(/\/$/,'');for(const f of [route+'.html',route+'/index.html'])if(fs.existsSync('dist'+f))return fs.readFileSync('dist'+f,'utf8');throw new Error('Missing discovery page '+url)}
for(const page of directory.seasonal_pages){assert(locs.has(strip(page.url)),'Seasonal sitemap URL '+page.url);assert(llms.includes(strip(page.url)),'Seasonal llms URL '+page.url);const html=htmlFor(page.url);assert(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html),'Seasonal page must be indexable');assert(html.includes('2026'),'Seasonal page needs its real edition');}
for(const o of directory.partner_offers){assert(o.brand&&o.url&&o.shop_url,'Incomplete public partner entry');assert(locs.has(strip(o.url)),'Offer absent from sitemap '+o.url);const html=htmlFor(o.url).replaceAll('&amp;','&').replaceAll('&#38;','&');assert(html.includes(o.shop_url),'Exact shop link absent from '+o.url);if(o.code)assert(html.includes(o.code),'Code absent from '+o.url);}
console.log(`AI discovery checked: ${directory.partner_offers.length} partner records, seasonal URLs, sitemap/HTML/llms parity and private-field exclusion.`);
