# EKX X21 Max Electric Dirt Bike — source and checkout evidence

Checked October 23, 2026. This is a specification-based editorial review; Bike Tested has not ridden the X21 Max or measured its speed, range, braking, or handling.

## Exact product

- Manufacturer and seller: EKX.
- Model: X21 Max Electric Dirt Bike.
- Selected US configuration: `8000W(Peak) / 60V 30Ah / United States`, Shopify variant `46552269914299`; the listing does not expose a SKU for this option.
- Official variant page: https://ekxbike.com/products/ekx-x21-max-electric-dirt-bike?variant=46552269914299
- Seller-listed price when checked: $1,949.00 USD. The product page listed a compare-at price of $2,599.00; the review uses the selected variant's current selling price.

## Manufacturer facts and conflicts

- EKX lists a 3,000W rated / 8,000W peak motor, 60V 30Ah removable battery (1,800Wh), up to 240 N·m torque, up to 60 mph, adjustable inverted fork and rear shock, two-piston hydraulic disc brakes, 70/100-19 off-road tires, 48.2 kg / 106 lb weight, 150 kg / 330 lb payload, and a recommended 5 ft 5 in–6 ft 5 in rider-height range.
- The selected listing has no frame-geometry chart or saddle-height range. It mentions pedal-assist levels and a seven-speed transmission but does not identify a torque or cadence sensor or explain the assist behavior.
- Range conflicts on the product page: the specifications table says up to 60 miles; one image caption says 55 miles. Both remain seller claims.
- EKX's FAQ calls the model street legal. The product page's 3,000W rated motor and 60 mph claim make that seller statement insufficient to establish vehicle class, registration, equipment, or permission in any particular jurisdiction. The review directs readers to confirm local requirements.
- Official reference pages: [user guides and manual index](https://ekxbike.com/pages/user-guides), [warranty policy](https://ekxbike.com/pages/warranty-policy), [FAQ and returns](https://ekxbike.com/pages/frequently-asked-questions).
- EKX's warranty policy lists one-year limited coverage. Original battery coverage is one year or 300 charging cycles, whichever comes first, subject to policy terms; tires, brake pads, chains and other wear items are excluded. The FAQ lists a 30-day return window with new-condition, factory-packaging, and under-10-odometer-mile conditions for a full buyer-remorse refund; buyer-remorse return shipping is typically $150–$250 plus a 10–15% restocking fee.

## Bike Tested offer and exact checkout observation

- Partner slug: `ekx`.
- Affiliate destination copied from `src/data/partners.js`: https://ekxbike.com/?ref=SEBASTIANBASSOLINO
- Reader code: `SEBASTIANBASSOL`.
- Roster benefit: $150 off. Structured fixed discount: $150 USD, scoped in the partner registry to the tested X21 Max US variant; other models and variants were not tested.
- On October 23, 2026, the code was accepted at merchant checkout for variant `46552269914299`. Item subtotal changed from $1,949.00 to $1,799.00, a $150.00 line discount. The result is before shipping and tax; no address was entered and no order was placed. This observation does not establish affiliate attribution or a sale.
- Checkout evidence pointer: `src/data/catalog.js` product `ekx-x21-max-electric-dirt-bike`, `price`, `eligibility`, and `checkoutObservation` fields.

## Image provenance

- Official gallery image: https://cdn.shopify.com/s/files/1/0649/3657/5163/files/EKXBIKE-X21_Max-Eectricl_Dirt_Bike_1.png?v=1782825366
- Original download retained outside Git at `.local/review-research/ekx/official-x21-max-gallery-source.png`.
- Background-removal edit retained locally at `.local/review-research/ekx/background-removed-x21-max.png`; generated with OpenAI image_gen from the inspected official image, with transparent background requested and only the background removal specified.
- Published asset: `public/images/products/ekx-x21-max-electric-dirt-bike.webp`, padded, 1200 × 1200, transparent lossless WebP, resized/converted with Sharp.
- The final asset was compared with the source and inspected on light and dark backgrounds. The frame, EKX marks, orange fork graphics, battery enclosure, suspension, controls, tires, rotors, spokes, and cables remain visible; the image is not a commissioned product rendering.
