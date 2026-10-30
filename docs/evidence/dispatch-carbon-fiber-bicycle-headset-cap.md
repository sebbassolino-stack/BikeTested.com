# Dispatch Carbon Fiber Bicycle Headset Cap

Prepared October 30, 2026 for a local Wave140 review draft. The draft remains unpublished. No cart, checkout, order, fit test, or installation test was performed.

## Candidate decision

- The current 92-product catalog has no Dispatch review and no headset-cap review. The components category has two existing reviews: a rack and a tire set. The cap adds a distinct cockpit-fit purchase question and links to the existing [Plan a better bike upgrade](https://biketested.com/guides/plan-your-bike-upgrades) guide; the guide was not edited.
- The first gap candidate, EVERCROSS EK28, was excluded because the official product page showed “Sold out” for both colors, despite the public Shopify feed reporting available variants.
- The AMYET Waterproof Rack Pannier Bag was excluded because its official product page showed “Sold Out - Notify me when it’s available,” despite the product feed reporting its variant as available.

## Exact product, variant, region, and price

- Official product page: https://checkout.dispatch.bike/products/carbon-fiber-bicycle-headset-cap?variant=45919754486002
- Public product record: https://checkout.dispatch.bike/products/carbon-fiber-bicycle-headset-cap.js
- Product title: “Carbon Fiber Bicycle Headset Cap”; vendor: Dispatch Custom Cycling Components.
- The official product option is “Add bolt”; the selected “Yes” variant is Shopify variant `45919754486002`. The feed returns `available: true`, price 2398 minor units, USD, with no comparison price or SKU.
- On October 30, 2026, the official page used locale `en_US` and currency `USD`, listed the exact option at $23.98, and displayed an “Add to cart” control. This records storefront availability at that check; it does not establish destination-specific shipping or checkout acceptance.

## Manufacturer specifications and limits

- Dispatch lists a glossy 6061 aluminum cap, 1 1/8-inch steerer-tube fit, and 1 1/4-inch (32 mm) width.
- The product title says “Carbon Fiber,” while the specification identifies aluminum. The draft follows the material specification and does not call the part carbon fiber.
- The description mentions 11 colors, but the Shopify variant feed exposes only the bolt option. The review flags color selection as a detail to confirm on the live page rather than claiming an exact color variant.
- The page provides no evidence that the cap changes handling or riding performance. The draft makes no such claim.

## Partner offer

- `src/data/partners.js` records Dispatch as active with referral URL `https://checkout.dispatch.bike/?ref=qwpxpztz`, code `SEBASTIANBASSOL`, and owner-supplied benefit “10% off,” reported October 29, 2026.
- The exact cap option has not been tested with the code. Eligibility and stacking are unresolved; the review shows no after-code price. `checkoutTestedOn` remains null and `offerDetailNeeded` remains true in the queue.

## Product image

- Exact official featured image for the selected “Add bolt: Yes” option: https://cdn.shopify.com/s/files/1/1660/0023/files/blue_bicycle_headset_cap.png?v=1733729146
- Saved as `/images/products/dispatch-carbon-fiber-bicycle-headset-cap.webp`. The official 1290 × 1320 PNG was resized to 1173 × 1200 and converted losslessly to WebP with the white background, framing, and product pixels preserved. The final asset SHA-256 is `9c877e2f8b78ec1a0b08c51ab50f1aff9d36ce51a8409265145debb9efadb900`; it was visually inspected after conversion.
- Provenance is also recorded in `docs/image-sources.json`.
