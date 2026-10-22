# Bike Tested

Premium cycling and electric mobility affiliate publication, built with Astro static output and plain CSS. Canonical domain: https://biketested.com. Repository: https://github.com/sebbassolino-stack/BikeTested.com.

## Run

Node 22.12+ required (built with Node 22.22.3).

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` validates the canonical data, builds static pages, generates Pagefind search, and checks headings, metadata, structured data, internal references, rating exclusions, and a stable path baseline.

## Source of truth

- `src/data/catalog.js`: products, manufacturers, specifications, reviews, categories, comparisons, and exported offers.
- `src/data/partners.js`: canonical partner roster, exact affiliate URLs, reader codes and supplied benefits.
- `src/lib/offers.js`: shared answers, FAQs, schema and buying paths for pages and crawler feeds.
- `src/data/guides.js`: original buying guides.
- `src/data/pages.js`: editorial standards and publication information.
- `src/styles/global.css`: responsive design tokens and components.
- `docs/image-sources.json`: official manufacturer image provenance.
- `docs/design-system.md`: visual direction and original concept reference.

The build produces 115 HTML pages, including three product reviews, 18 buying guides, two editorial comparisons, an interactive comparison tool, a qualitative shortlist, six categories, 47 brand pages, 24 promo pages, and offer/trust pages. No numerical ratings or generated product photos.

## Monetization

The owner supplied 44 live Bike Tested partnerships on October 22, 2026: 24 reader codes (19 with a stated saving) and 20 link-only partners. Exact affiliate URLs are preserved. The public Eunorau reader offer is 2%; a separate personal-use code is excluded from all public output. Unknown discount amounts, eligibility, stacking and expiry remain unspecified. Supplied live status is separate from independently tested checkout acceptance.

Update `src/data/partners.js` with documented Bike Tested offers. Use `reportedOn` for the actual source date and `checkoutTestedOn` only for a real recorded cart test. `catalog.js` exports derived brand and offer records; code pages, brand pages, the directory, review buyboxes/FAQs, product cards, schema, `llms.txt` and `agent.json` share these records. Never substitute another regional storefront or invent model eligibility.

`docs/partner-review-queue.json` prepares all partners for product research. Run `npm run review:queue` to regenerate the initial queue from the registry; preserve subsequent editorial progress before regenerating. See `docs/partner-review-workflow.md` for product intake. KuKirin and Windgoo need storefront follow-up; Emax USA sells FPV/RC equipment and sits outside the cycling review queue. Link-check results live in `docs/partner-store-checks-2026-10-22.json`; they do not prove checkout, tracking attribution or fulfillment.

Analytics hooks exist for affiliate clicks and code copies, including brand and placement. No analytics provider is configured, and no event-delivery or commission claim is made.

See `docs/launch-readiness.md` for hosting and remaining commercial configuration. No automatic publishing or IndexNow submissions happen during builds.

## Cloudflare Pages

Project: `biketested`; public Pages address: https://biketested.pages.dev. Git integration tracks `main` in `sebbassolino-stack/BikeTested.com` and automatically builds pushed commits. Build command: `npm run build`; output: `dist`; Node: `22.22.3` (pinned in `.node-version` and Pages production/preview configuration).

The custom domain `biketested.com` returned the Bike Tested site successfully on October 21, 2026. Canonical URLs target that domain. Affiliate and analytics activation remain separate from publication.

## Guide publishing

Guide content lives in `src/data/guides.js`. Each guide has stable dates, category topics, a direct answer and sections; new guides also carry primary source links, visible FAQs, and curated related articles. `src/lib/guides.js` controls hub placement, section anchors and reading-time labels. Article dates, visible FAQs, internal anchors, cross-links and sitemap lastmod are checked during `npm run build`. FAQ markup describes the visible answers; it is not a promise of a Google rich result.
