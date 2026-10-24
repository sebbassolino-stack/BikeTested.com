# HiKNiGHT GTX2 Electric Dirt Bike — source, image and cart evidence

- Checked October 24, 2026 on HiKNiGHT’s US storefront.
- Product: HiKNiGHT GTX2 Electric Dirt Bike; Shopify product `9512005140700`.
- Selected configuration: Silver-Black / US; Shopify variant `52273751130332`; SKU `HKN-GTX2-BO-US`.
- Official product page: https://hiknightebike.com/products/hiknight-gtx2-electric-dirt-bike?variant=52273751130332
- Official product JSON: https://hiknightebike.com/products/hiknight-gtx2-electric-dirt-bike.js
- Bike Tested partner destination: https://hiknightebike.com/?ref=SEBASTIANBASSOLINO
- Bike Tested code: `SEBASTIANBASSOL`; partner-reported benefit is `$100 off`, not universal eligibility.
- The Shopify product feed and direct product HTML listed the selected variant at `$799.00 USD`, compare-at `$1,699.00`, and available. A fresh isolated cart accepted the exact variant at `$799.00`.
- Product JSON `published_at`: July 14, 2026.

## Exact-variant cart check

- Added one variant `52273751130332` / SKU `HKN-GTX2-BO-US` to a new cookie-isolated cart on October 24, 2026.
- Cart line price and subtotal: `$799.00 USD`.
- Applied `SEBASTIANBASSOL` through the store’s discount route. It redirected to the cart; `cart.js` showed no discount applications, no line discount, and the item remained `$799.00`.
- The cart was cleared after the observation. No delivery address was entered and no order was placed. This is cart evidence, not completed checkout.
- The partner code was separately accepted for the HiKNiGHT H2 Pro Grey / US variant `46697841885404` on October 22, 2026. That result does not establish GTX2 eligibility. No GTX2 saving or after-code amount is claimed.

## Manufacturer claims and page differences

- The product description lists a 5,000W peak mid-drive, up to 255 N·m torque, a 52V 27Ah removable battery, speed up to 45 mph, range up to 52 miles, 14-inch front / 12-inch rear off-road tires, dual hydraulic suspension, 200mm front travel and hydraulic disc brakes.
- Battery energy is shown as `1,404Wh`, calculated as 52V × 27Ah from the seller’s listed nominal values.
- The product description gives weight as approximately 52 kg / 114.6 lb; its technical specification table says 55 kg / approximately 121 lb.
- The product description gives charging time as 4–6 hours; the technical table says 6–8 hours.
- The technical table lists 265 lb / 120 kg payload, 120–185 cm rider-height guidance, 29.1-inch seat height, dimensions 65 × 39.8 inches, and IP65 water resistance. These are seller specifications, not Bike Tested fit or water testing.
- The GTX2 product page says UL2272 certified. HiKNiGHT’s warranty page/footer displays UL2849 language. No GTX2-specific certification document was verified; the review asks the buyer to obtain one identifying the exact model.
- The site advertises a two-year warranty, while its component schedule lists 12 months for the frame, battery, motor and controller and shorter periods for many parts. Policy checked: https://hiknightebike.com/pages/warranty-technical-support
- The return policy lists a $100 USD restocking fee and $150 USD return freight for eligible buyer-remorse returns within 14 days; as-new condition, under 10 odometer miles and other terms apply. Policy checked: https://hiknightebike.com/pages/return-refund
- No riding, speed, range, braking, fit, durability or safety test was performed by Bike Tested. High-speed operation and local vehicle classification/access were not independently determined.

## Official product image

- Source: https://cdn.shopify.com/s/files/1/0761/1229/8204/files/Electric_Dirt_Bike_GTX2.webp?v=1789360395
- The exact official Silver-Black GTX2 studio image was inspected. OpenAI image_gen removed the remaining white/gray studio floor and shadow; the output was then trimmed, centered and padded with Sharp to a 1,200 × 1,200 transparent lossless WebP.
- The image was compared with the source on light and dark backgrounds. The frame panels and decals, handlebars, fork, fenders, tires, spokes, brake discs and complete silhouette were checked.
- Published image: `public/images/products/hiknight-gtx2-electric-dirt-bike.webp`; provenance is also recorded in `docs/image-sources.json`.

## Internal implementation

- Catalog product: `hiknight-gtx2-electric-dirt-bike` in `src/data/catalog.js`.
- Partner code scope in `src/data/partners.js` remains exact-variant: accepted on H2 Pro Grey / US; no discount applied to this GTX2 cart.
- Related editorial link: `mid-drive-vs-hub-motor` guide. This product is identified there as a separate electric dirt bike rather than a commuter comparison.
