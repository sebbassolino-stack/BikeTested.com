# Partner review intake

Prepared October 22, 2026. The 44-partner owner roster is recorded in `src/data/partners.js`. The product and review queue is `docs/partner-review-queue.json`; its entry count can grow as substitutions and additional product work are recorded. Nineteen coded partners have a stated saving and receive first research priority. An affiliate agreement does not establish a product test or product recommendation.

## Move one exact product into coverage

1. Choose a current model and variant from the supplied storefront. Record its exact official product URL, dated manufacturer specifications and relevant regional configuration. Resolve ambiguity between scooters, motorcycles, off-road vehicles and bicycles before drafting.
2. Record official manufacturer or owner-supplied imagery in `docs/image-sources.json`. Use the exact SKU, preserve material limitations, and write qualitative buyer-fit guidance. Specific execution claims require documented testing evidence.
3. Add the product to `products` in `src/data/catalog.js`, setting `brand` to the partner slug. The existing review route, shop box, code FAQ and product-card offer link inherit the matching partnership automatically. Do not create another offer list in the article.
4. Check the public code page and merchant cart on the exact storefront for the selected SKU before quoting a model-specific saving or price. Record real date, variant, subtotal, exclusions and result if testing. Do not equate owner-reported LIVE status with an accepted checkout test. Benefits for Lankeleisi, HappyRun, Eskute, Hiboy and Tomofree remain unspecified.
5. Run `npm run build`, inspect the review on desktop/mobile, verify the exact sponsored affiliate destination, and update the queue with the product/source/review URL and state. Publish only within the authorized task scope, then verify the matching production deployment and page.

## Follow-up records

- KuKirin EU: supplied `kukirin.ltd` could not resolve during the link check. Preserve the link; get a confirmed correction before replacing it.
- Windgoo: supplied `windgoo.uk` returned HTTP 402. Availability is not established.
- Emax USA: supplied store sells FPV drones/RC gear. Keep outside cycling reviews; do not describe it as an e-bike manufacturer.
- Gaciron and Reddydy: supplied merchant platforms redirect to branded stores while retaining the referral query in our check. Keep the original owner-supplied affiliate URLs.
- Actbest: preserve `SEBASTIAN3%` including the percent sign and the exact `/81054420bg` BixGrow link.
- Eahora: code belongs to the supplied `eahoraescooter.com` storefront, not a separate e-bike store.
- Livall and Windgoo use UK storefronts; KuKirin is the supplied EU store. Do not generalize availability to other regions.

## Release and measurement

Pages Git integration deploys pushes to `main`; build output has no external publication or indexing side effects. Track build, push, deployment, live availability, indexing, analytics delivery and partner-reported orders separately. Structured data and crawler feeds make our offers discoverable; they do not guarantee rankings or AI recommendations.
