# VIPCOO H3 Electric Dirt Bike evidence

Checked October 30, 2026. This review covers Hidoes’ exact US product listing, not the separate Vipcoo.com partner listing.

## Exact product and listed price

- Official product page: <https://hidoes.com/products/vipcoo-h3-electric-dirt-bikes?variant=51227085963561>
- Official Shopify product feed: <https://hidoes.com/products/vipcoo-h3-electric-dirt-bikes.js>
- Selected option: Default Title, variant `51227085963561`, SKU `VIPCOO H3`.
- Feed price: `$1,099.00 USD` (109900 minor units); feed compare-at price `$1,999.00 USD`.
- Availability conflict: feed returned `available: true`; Hidoes’ homepage displayed the H3 as Sold Out with a preorder message. No ship date was visible on the product page. The review does not claim availability.

## Seller-listed product details

Hidoes’ product page names the model `VIPCOO H3 Electric Dirt Bikes - 37 Mph Fast Speed` and calls it an electric motorcycle in its description. It lists a 3,500W mid-drive, removable 23Ah battery, 14-inch front / 12-inch rear off-road tires, front hydraulic suspension, rear nitrogen-filled shocks, front and rear hydraulic disc brakes, headlight, integrated brake/turn-signal tail lights, hazard flashers and a display. The 37 mph figure appears in the product title and is presented only as a seller claim. The reviewed listing does not establish range, voltage, complete-bike weight, payload, seat height, full dimensions, rider-height fit or legal classification.

## Offer and availability

The Hidoes entry in `src/data/partners.js` uses `https://hidoes.com/?ref=SEBASTIANBASSOLINO`, code `SEBASTIANBASSOL`, and an owner-reported `7% off` benefit. Its scope says product eligibility and combinations apply; no Hidoes checkout test is recorded. Eligibility for VIPCOO H3 variant `51227085963561` and stacking with the listed price remain unknown. No reduced price is calculated. The separate Vipcoo.com partner entry is link-only (`https://vipcoo.com/?ref=SEBASTIANBASSOLINO`) and is not used as evidence for this Hidoes listing.

## Delivery, warranty and returns

- Hidoes shipping policy: <https://hidoes.com/policies/shipping-policy>. The policy describes US delivery limits; confirm the exact destination, current ship window and any freight/unloading needs, especially while the listing signals conflict.
- Hidoes warranty page: <https://hidoes.com/pages/warranty>. It generally describes a one-year bike warranty and six-month battery warranty, but also says heavy vehicles may not be returned because of high shipping fees.
- Hidoes refund policy: <https://hidoes.com/policies/refund-policy>. It separately lists a 14-day return period for electric dirt bikes with handling, logistics and depreciation fees.
- These policy statements do not resolve the terms for the exact H3. Ask Hidoes to confirm the applicable written warranty, return eligibility/cost, replacement parts and service support for SKU `VIPCOO H3`.

## Image provenance

- Official image: <https://cdn.shopify.com/s/files/1/0686/6642/5641/files/VIPCOO_H3_59.jpg?v=1758273515>
- Local path: `public/images/products/vipcoo-h3-electric-dirt-bike.jpg`
- SHA-256: `64aa75fe538b96a93e774656d089030cde495813e989cf588935183319c5bfa4`
- The exact 1500 × 1500 JPEG was copied unchanged. White studio background and framing were preserved; no generated edits, crop or retouching. The visible black-and-green side-profile bike was inspected against the Hidoes H3 listing.

## Scope and limits

The buyer guidance distinguishes this seller-described motorcycle-style dirt bike from an ordinary commuter e-bike, and asks shoppers to confirm route classification/access, fit, delivery and service. Product specifications and the speed claim are attributed to Hidoes. There was no checkout, code, riding, speed, range, braking or fit test. Do not infer road legality or a completed order from this record.

## Release verification

- Content commit: `7c809c6a4c7a4f14022adddffaafa72f99976ad3` on `main`.
- Cloudflare Pages check `124122227213` completed successfully; deployment ID `90b89154-6d48-4333-8448-a8eefe99ab3b`.
- Review, `/promo/hidoes`, `/deals`, `/agent.json`, `/llms.txt`, sitemap index/child and the image returned HTTP 200 on `https://biketested.com`, `https://biketested.pages.dev` and the commit preview `https://90b89154.biketested.pages.dev`. The review canonical, selected variant, listed price, Hidoes referral destination and sitemap entry matched. No after-code amount appeared.
- The live image SHA-256 matches the original local image: `64aa75fe538b96a93e774656d089030cde495813e989cf588935183319c5bfa4`.
- Desktop and 390 × 844 mobile browser screenshots were visually inspected; the hero image loaded and no horizontal overflow was apparent in the sampled mobile view. This does not claim exhaustive responsive or accessibility coverage.
