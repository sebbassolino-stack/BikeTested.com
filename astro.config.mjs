import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { offers } from './src/data/catalog.js';
import { guides } from './src/data/guides.js';
const guideDates = new Map([...guides.map(g => [`/guides/${g.slug}`, g.updatedOn]),...offers.flatMap(o=>[[`/brands/${o.brand}`,o.reportedOn],...(o.code?[[`/promo/${o.brand}`,o.reportedOn]]:[])])]);
export default defineConfig({
  site:'https://biketested.com', output:'static', trailingSlash:'never', build:{format:'file'},
  integrations:[sitemap({
    filter:page=>!['/search','/404'].some(p=>new URL(page).pathname===p),
    serialize:item=>{
      const modified=guideDates.get(new URL(item.url).pathname);
      return modified ? {...item,lastmod:modified} : item;
    }
  })]
});
