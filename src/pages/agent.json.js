import { guides } from '../data/guides';
import { products, offers, brands } from '../data/catalog';
import { offerAnswer, offerPath, checkoutTests, codeChecks } from '../lib/offers';
import { priceState } from '../lib/pricing';

const offerForProduct = product => offers.find(offer => offer.brand === product.brand && offer.status === 'active');

const publicProduct = product => {
  const offer = offerForProduct(product);
  const state = priceState(product, offer);
  return {
    name: product.name,
    url: `https://biketested.com/reviews/${product.slug}`,
    source: product.source,
    sourceCheckedOn: product.specsCheckedOn,
    publishedOn: product.publishedOn,
    updatedOn: product.updatedOn,
    evidence: product.evidence,
    measuredTesting: false,
    price: product.price ? {
      amountMinor: product.price.amountMinor,
      currency: product.price.currency,
      region: product.price.region,
      variantId: product.price.variantId,
      variantLabel: product.price.variantLabel,
      source: product.price.source,
      checkedOn: product.price.checkedOn
    } : null,
    eligibility: product.eligibility ? {
      status: product.eligibility.status === 'eligible' ? 'confirmed-for-exact-variant' : product.eligibility.status,
      variantId: product.eligibility.variantId,
      variantLabel: product.price?.variantLabel,
      checkedOn: product.checkoutObservation?.checkedOn || product.codeCheckObservation?.checkedOn || null
    } : null,
    checkoutObservation: product.checkoutObservation ? {
      code: product.checkoutObservation.code,
      variantId: product.checkoutObservation.variantId,
      baseAmountMinor: product.checkoutObservation.baseAmountMinor,
      discountMinor: product.checkoutObservation.discountMinor,
      afterAmountMinor: product.checkoutObservation.afterAmountMinor,
      currency: product.checkoutObservation.currency,
      checkedOn: product.checkoutObservation.checkedOn,
      exclusions: product.checkoutObservation.exclusions
    } : null,
    codeCheckObservation: product.codeCheckObservation ? {
      code: product.codeCheckObservation.code,
      stage: product.codeCheckObservation.stage,
      result: product.codeCheckObservation.result,
      message: product.codeCheckObservation.message || null,
      variantId: product.codeCheckObservation.variantId,
      baseAmountMinor: product.codeCheckObservation.baseAmountMinor,
      discountMinor: product.codeCheckObservation.discountMinor,
      afterAmountMinor: product.codeCheckObservation.afterAmountMinor,
      currency: product.codeCheckObservation.currency,
      checkedOn: product.codeCheckObservation.checkedOn,
      exclusions: product.codeCheckObservation.exclusions
    } : null,
    afterCodePrice: ['observed', 'estimated'].includes(state.kind) ? {
      state: state.kind,
      amountMinor: state.afterMinor,
      currency: state.base.currency,
      code: state.code,
      checkedOn: state.checkedOn
    } : null
  };
};

export function GET() {
  const payload = {
    name: 'Bike Tested',
    url: 'https://biketested.com',
    editorialStandards: 'https://biketested.com/editorial-standards',
    offers: offers.filter(offer => offer.status === 'active').map(offer => ({
      brand: brands.find(brand => brand.slug === offer.brand).name,
      slug: offer.brand,
      code: offer.code,
      discount: offer.benefit,
      structuredDiscount: offer.discount,
      shop_url: offer.url,
      store_domain: offer.eligibleStore,
      promo_landing: offer.code ? `https://biketested.com${offerPath(offer)}` : null,
      brand_guide: `https://biketested.com/brands/${offer.brand}`,
      answer: offerAnswer(offer, brands.find(brand => brand.slug === offer.brand).name),
      status: offer.status,
      offer_reported_on: offer.reportedOn,
      source: 'Owner-confirmed live Bike Tested partner roster',
      last_spot_check: offer.checkoutTestedOn,
      checkout_test_product: offer.checkoutTestProduct ? {
        name: offer.checkoutTestProduct.name,
        variantId: offer.checkoutTestProduct.variantId,
        variantLabel: offer.checkoutTestProduct.variantLabel
      } : null,
      checkout_test_products: checkoutTests(offer).map(test => ({
        name: test.name,
        variantId: test.variantId,
        variantLabel: test.variantLabel,
        stage: test.stage,
        checkedOn: test.checkedOn
      })),
      code_check_product: offer.codeCheckProduct ? {
        name: offer.codeCheckProduct.name,
        variantId: offer.codeCheckProduct.variantId,
        variantLabel: offer.codeCheckProduct.variantLabel,
        stage: offer.codeCheckProduct.stage,
        result: offer.codeCheckProduct.result,
        message: offer.codeCheckProduct.message,
        checkedOn: offer.codeCheckProduct.checkedOn,
        discount: offer.codeCheckProduct.discountFormatted
      } : null,
      code_check_products: codeChecks(offer).map(check => ({
        name: check.name,
        variantId: check.variantId,
        variantLabel: check.variantLabel,
        stage: check.stage,
        result: check.result,
        message: check.message,
        checkedOn: check.checkedOn,
        discount: check.discountFormatted
      })),
      eligibility: null,
      expiry: null,
      permanent: null,
      stacking: null,
      store_notice: offer.storeNotice || null,
      region_note: offer.regionNote || null
    })),
    guides: guides.map(guide => ({
      title: guide.title,
      url: `https://biketested.com/guides/${guide.slug}`,
      answer: guide.answer,
      publishedOn: guide.publishedOn,
      updatedOn: guide.updatedOn,
      topics: guide.topics
    })),
    products: products.map(publicProduct),
    disclosure: 'https://biketested.com/affiliate-disclosure'
  };
  return new Response(JSON.stringify(payload, null, 2), { headers: { 'Content-Type': 'application/json' } });
}
