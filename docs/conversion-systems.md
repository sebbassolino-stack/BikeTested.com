# Holiday conversion maintenance

`src/data/holiday-picks.json` holds editorial selections, existing review paths and existing authentic image paths. It contains no prices, discounts or commission data. `HolidayProductPicks.astro` joins optional brand-offer paths to current `holiday-2026.js` records at build time. A store button is a brand shopping route; product-specific eligibility remains on the review and offer pages. Do not copy global brand discounts into SKU-specific claims.

Keep at least four distinct selections, explicit buyer-fit reasons and the correct product image. Preserve variant, region and store distinctions. Software plans should be chosen with the recipient; do not assume gifting or account transfer is supported. No ratings, fabricated testing or generated product imagery.

`npm run build` runs `scripts/check-gift-shortlist.mjs` after the existing indexing/AI checks. It rejects missing review routes, missing selected images, missing offer pages and unrendered selections. Build with `INDEXNOW_ON_BUILD=0` for local verification.

The optional `OfferFinder.astro` progressively searches existing normalized partner records by brand or exact code. The original complete directory stays server rendered. Sites with an established finder retain it.

Holiday controls emit `promo_code_copy` only after a successful copy and `affiliate_click` for shop actions, with brand, placement and product where present. No destination URL, visitor identity or tracking query enters event payloads. Delivery uses existing receivers only; a local event or injected QA receiver is not proof of analytics ingestion, attribution or revenue. Cast & Cruise retains its existing sponsored-link receiver listener to avoid double counting.

The shared hub's `scripts/audit-conversion-systems.mjs` checks mobile/desktop layouts, selected images, copy behavior, event counts and quick-finder results. Read the active run and correct checkout map before rerunning. Preserve unrelated work and keep private commission queues outside public repositories.
