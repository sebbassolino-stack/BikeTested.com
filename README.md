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

- `src/data/catalog.js`: products, manufacturers, specifications, reviews, categories, comparisons, and offer registry.
- `src/data/guides.js`: original buying guides.
- `src/data/pages.js`: editorial standards and publication information.
- `src/styles/global.css`: responsive design tokens and components.
- `docs/image-sources.json`: official manufacturer image provenance.
- `docs/design-system.md`: visual direction and original concept reference.

The build produces 35 HTML pages, including three product reviews, six buying guides, two editorial comparisons, an interactive comparison tool, a qualitative shortlist, six categories, and brand/offer/trust pages. No numerical ratings or generated product photos.

## Monetization

There are no confirmed Bike Tested affiliate agreements or discount codes in the supplied material. Current outbound links are direct manufacturer links. No commission, checkout discount, measured testing, or sales attribution is claimed. Analytics hooks exist but no analytics provider is configured.

Add documented offers to `offers` in `catalog.js`. Required fields: `brand`, `status`, `url`, `benefit`, `evidence`, `checkedOn`. Coded offers also need `code`, `eligibleStore`, and `terms`; optionally `checkoutTestedOn` and `stackingTerms`. An active coded offer generates `/promo/<brand>` on build. Do not transfer codes or tracking IDs from sister brands.

See `docs/launch-readiness.md` for hosting and remaining commercial configuration. No automatic publishing or IndexNow submissions happen during builds.

## Cloudflare Pages

Project: `biketested`; public Pages address: https://biketested.pages.dev. Git integration tracks `main` in `sebbassolino-stack/BikeTested.com` and automatically builds pushed commits. Build command: `npm run build`; output: `dist`; Node: `22.22.3` (pinned in `.node-version` and Pages production/preview configuration).

The custom-domain connection for `biketested.com` is a separate launch step. Canonical URLs currently target that intended domain. Affiliate and analytics activation remain separate from publication.
