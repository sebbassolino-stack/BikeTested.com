# Mooncool FT1 Fat Tire Electric Trike

Checked: 2026-10-24
Official US product page: https://www.mooncool.com/products/ft1-electric-trike?variant=46134256894124
Official Shopify product feed: https://www.mooncool.com/products/ft1-electric-trike.js

Mooncool’s storefront labels FT1 “New.” The official product feed identifies Shopify product `8526264795308`, handle `ft1-electric-trike`, published April 17, 2026.

## Exact variant and price

- Selected variant: Peacock Green-Matte / US
- Variant ID: `46134256894124`
- SKU: `FT1-20KQL`
- Listed sale price on October 24, 2026: `$1,349.99 USD`
- Listed regular price: `$1,899.99 USD`
- The price and variant are from Mooncool’s official product feed and the exact-variant page.

## Exact-variant cart check

- Bike Tested partner destination from `src/data/partners.js`: https://www.mooncool.com/?ref=znnfuofi
- Supplied reader code: `SEBASTIANBASSOL`; the partner roster reports 5% off.
- An isolated US Shopify session added one variant `46134256894124` / SKU `FT1-20KQL` to the cart. The listed item price was `$1,349.99`.
- After applying `SEBASTIANBASSOL`, `/cart.js` reported `applicable: true`, `total_discount: 6749` minor units and `total_price: 128250` minor units. The cart page displayed the code, `-$67.49` and a `$1,282.50 USD` total for the one-trike cart.
- The cart line’s `discounted_price` and `line_price` were `128250` minor units. Shopify also returned `final_line_price: 134999` and an empty `line_level_discount_allocations` array, despite the cart page rendering the discount and lower total. The review reports the visible one-item cart subtotal and not a completed checkout or order.
- No delivery address was entered. Shipping and tax were not calculated. No payment or order was submitted. The test cart was cleared and verified empty (`item_count: 0`).
- This result applies only to this exact variant and date; it does not establish eligibility for other colors or models.

## Manufacturer-listed features and limits

- 500W rated rear-drive motor, 1,092W peak and 45 N·m torque; Mooncool says the rear-drive motor works with a differential.
- 48V 14.5Ah lithium battery; the product copy gives a 35–60-mile range, while the technical table lists 60 miles. The page does not provide comparable test conditions with these range figures.
- 20 × 4-inch tires; three pedal-assist levels; thumb throttle; Shimano seven-speed drivetrain.
- Top safe speed listed as 15.5 mph; Mooncool labels the trike Class 2. Its certification claims are seller statements and were not independently checked.
- 48 kg net weight; 400 lb maximum load. Recommended height is 5 ft–6 ft 3 in, with a listed seat-height range of 30–40 in.
- Assembled dimensions: 70.9 in long × 30.7 in wide. Folded dimensions: 41.3 × 33.5 × 50.4 in.
- Front basket: 12.2 × 11.8 × 5.5 in. Rear basket: 18.9 × 14.2 × 5.9 in.
- Technical table lists mechanical disc brakes, a parking brake and brake motor cutoff; turn signals and a horn are also listed.
- A 2A charger and 7–9-hour charge time are listed; the technical table says fast charging is unsupported.
- Mooncool lists a lifetime frame warranty, two-year battery warranty and one-year accessories/parts coverage. The warranty page contains further terms and exclusions, including tires, tubes and cables.

This is manufacturer-specification editorial evaluation. Bike Tested did not ride the FT1 or measure range, speed, braking, handling, traction, hill performance or assembly time.

## Image provenance

- Exact official product image: https://cdn.shopify.com/s/files/1/0567/3821/8156/files/180_25fcbb21-05c1-45cd-939d-6b5865e2084b.png?v=1792036685
- Downloaded and matched to the Peacock Green-Matte FT1 listing on October 24, 2026. The 1,200 × 1,200 source PNG already contains a transparent background, so no background-removal edit was needed.
- Converted the source directly to a 1,200 × 1,200 lossless WebP with Sharp, preserving the full original composition and alpha. Compared the source and final cutout on light and dark backgrounds; the complete trike, Mooncool/FT1 marks, baskets, seat and backrest, tires, wheels, spokes, controls, cables and edges are preserved.
