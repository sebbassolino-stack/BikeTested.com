# Leoout T85 Electric Scooter — source and checkout evidence

Checked October 23, 2026. This is a manufacturer-specification editorial evaluation; Bike Tested did not ride the scooter or measure its speed, braking, handling or range.

## Exact product and variant

- Manufacturer: Leoout.
- Product: T85 Electric Scooter; selected version: **Scooter with Seat**.
- Shopify product ID: `9726025072953`; variant ID: `53358973976889`. No SKU is provided in the public product feed.
- Official product page: https://www.leoout.com/products/leoout-t85?variant=53358973976889
- Exact Bike Tested affiliate destination from `src/data/partners.js`: `https://leoout.com/?ref=SEBASTIANBASSOLINO`. The storefront redirects to its `www` host; keep the supplied destination unchanged.
- Selected variant price in the official product feed and checkout: **$1,299.99 USD**. The product page also lists a $1,899.00 comparison price.

## Product-page claims and limits

The selected official listing advertises 5,600W dual-drive motors, a top speed up to 85 km/h, 80–100 km range, 11-inch off-road tires, dual shock absorbers, hydraulic brakes, NFC unlocking and a 330 lb maximum load. It also says the factory default speed limit is 17 mph. The listing does not explain the settings behind that speed discrepancy or the conditions for its range claim. Battery capacity, vehicle weight, dimensions and charging time are not stated on the selected page. These are manufacturer claims; no Bike Tested performance measurement is implied.

Leoout's warranty page gives an original online-store buyer in the US or Europe a six-month limited warranty, subject to its terms and exclusions. Its return page says its 30-day return window applies only to quality issues; it lists $300 return shipping and a $250 restocking fee for a scooter returned with wear. See the linked current terms before ordering:

- Warranty: https://www.leoout.com/pages/warranty-information
- Returns: https://www.leoout.com/pages/shipping-policy-1
- Shipping: https://www.leoout.com/pages/shipping-policy

## Checkout observation

- Code: `SEBASTIANBASSOL`, supplied as **$100 off** in the Bike Tested owner-confirmed partner roster.
- Exact variant tested: `53358973976889`, **Scooter with Seat**.
- Checkout showed `$1,299.99` before the code, accepted `SEBASTIANBASSOL`, and showed an item amount of `$1,199.99` after a `$100.00` discount.
- No delivery address was entered. Shipping and destination-based charges were not established. No order was placed.
- The acceptance observation applies only to this exact variant; other T85 versions and Leoout products are untested.
- Catalog evidence pointer: `src/data/catalog.js`, product `leoout-t85-electric-scooter` (`price`, `eligibility`, and `checkoutObservation`).

## Image provenance

- Official image: https://cdn.shopify.com/s/files/1/0764/0632/5561/files/5_389bd376-4353-4c1a-ab7a-ed5d9c4125bc.jpg?v=1733809736
- Original retained under the git-ignored `.local/review-research/leoout/` folder.
- The image shows the seat-equipped T85. The white and decorative paint-splash background was removed from that exact image with OpenAI image_gen; the image was then resized to a 1200 × 1200 transparent lossless WebP with Sharp, retaining the original square framing.
- The scooter, seat, tires, controls, gold fork, frame marks and edges were compared against the source on light and dark backgrounds. The cutout preserves the official product identity; no accessory or alternate model was added.
- Published image: `public/images/products/leoout-t85-electric-scooter.webp`; provenance is also recorded in `docs/image-sources.json`.
