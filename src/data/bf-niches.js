import {partners} from './partners.js';
import {products} from './catalog.js';

const money = (minor, currency) => {
  const amount = (minor / 100).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  if (currency === 'EUR') return `€${amount}`;
  if (currency === 'USD') return `$${amount}`;
  return `${amount} ${currency}`;
};

const scooterSlugs = ['gyroor', 'leoout', 'hiboy', 'ausom', 'zwheel', 'eahora', 'kugoo-eu', 'evercross-eu', 'joyor-eu', 'sigma-escooter'];

const pick = (slug, checked) => {
  const product = products.find((item) => item.slug === slug);
  const partner = partners.find((item) => item.slug === product.brand);
  const priceMoved = product.price.amountMinor !== checked.amountMinor;
  const sameVariant = product.checkoutObservation?.variantId === product.price.variantId && product.checkoutObservation.baseAmountMinor === checked.amountMinor;
  return {
    name: product.name,
    image: product.image,
    reviewPath: `/reviews/${product.slug}`,
    codePath: partner?.code ? `/promo/${partner.slug}` : null,
    variant: checked.variantLabel || product.price.variantLabel,
    priceLabel: `${money(checked.amountMinor, checked.currency)} ${checked.currency}`,
    checkedOn: checked.checkedOn,
    source: product.price.source,
    suits: checked.suits,
    afterLabel: !priceMoved && sameVariant
      ? `${money(product.checkoutObservation.afterAmountMinor, product.checkoutObservation.currency)} before tax and shipping`
      : null,
  };
};

export const niches = [
  {
    slug: 'e-bikes',
    label: 'E-bikes',
    title: 'E-Bike',
    partnerSlugs: partners.filter((item) => item.status === 'active' && item.category === 'electric-bikes' && item.code).map((item) => item.slug),
    giftHref: '/holiday-gift-guide#choose-your-first-ebike',
    giftLabel: 'first electric bike gifts',
    leadCodes: ['Mooncool', 'FinBike', 'Eunorau'],
    bestSaving: 'HiKNiGHT’s partner page records $100 off. Other codes on this page are a percent or a smaller fixed amount, so the better saving depends on the bike price and on what the store accepts.',
    buying: 'These are heavy machines. Mooncool lists the TK2 at about 90 lb and 29 inches wide, FinBike lists the EB8 at 32.3 kg with a folded size of 107 × 56 × 78.5 cm, and Eunorau lists the META275 2.0 at 68.4 lb. Check standover, storage, and the seller’s return terms before you order a bike for someone else.',
    faqs: [
      ['Which e-bike codes are on this page?', 'This page lists Bike Tested partner codes whose brand is in the electric-bikes category. The code, the recorded benefit, and the shop link match that brand’s partner page.'],
      ['Does a code apply to every bike from that brand?', 'No. A recorded cart check covers only the named variant. FinBike’s and Eunorau’s list prices moved after those checks, so this page does not reprint those older after-code totals.'],
      ['Are these Black Friday sale prices?', 'No. The prices are the merchant list prices checked on the date under each product. The codes are the standing partner codes, not a separate holiday price.'],
    ],
    picks: [
      pick('mooncool-tk2-folding-electric-trike', {
        amountMinor: 149999,
        currency: 'USD',
        variantLabel: 'Cyan Green-Matte',
        checkedOn: '2026-11-01',
        suits: 'Riders who want a low-step trike with baskets and can store a bike about 90 lb and 29 inches wide.',
      }),
      pick('finbike-eb8-electric-bike', {
        amountMinor: 104800,
        currency: 'EUR',
        variantLabel: 'Grey / Europe',
        checkedOn: '2026-11-01',
        suits: 'European riders who want a folding fat-tire e-bike and can handle a 32.3 kg folder.',
      }),
      pick('eunorau-meta275-2-electric-bike', {
        amountMinor: 152910,
        currency: 'USD',
        variantLabel: 'L / Deep Crimson',
        checkedOn: '2026-11-01',
        suits: 'Riders comparing a 500W torque-sensing 27.5-inch bike who can store a listed 68.4 lb bike.',
      }),
    ],
  },
  {
    slug: 'scooters',
    label: 'Scooters',
    title: 'Scooter',
    partnerSlugs: scooterSlugs,
    giftHref: '/holiday-gift-guide#bike-or-electric-scooter',
    giftLabel: 'electric scooter gifts',
    leadCodes: ['Ausom', 'Leoout', 'Zwheel'],
    bestSaving: 'Eahora’s partner page records $400 off, the largest stated amount in this scooter list. Leoout records $100 off and Ausom records $50 off. A cart check on this page confirms those last two only for the named variants.',
    buying: 'Ausom lists the Gosoul 2 at 61.5 lb and says it is for private-property use. Leoout’s T85 listing does not state battery capacity or scooter weight. Zwheel lists the D3-D at 32 kg net. Confirm local riding rules, storage, and the seller’s return policy before you buy.',
    faqs: [
      ['Which scooter brands have a code here?', 'Gyroor, Leoout, Hiboy, Ausom, Zwheel, Eahora, Kugoo EU, Evercross EU, Joyor EU, and Sigma eScooter. Dirt-bike brands are not on this page.'],
      ['Will the code work on every scooter from that brand?', 'Only where the brand page records a check. Ausom, Leoout, and Zwheel checks below name one variant each. '],
      ['Are these holiday-only codes?', 'The partner records do not describe these codes as holiday-only. Compare the code with the store’s own price at checkout.'],
    ],
    picks: [
      pick('ausom-gosoul-2-electric-scooter', {
        amountMinor: 59900,
        currency: 'USD',
        variantLabel: 'Default Title',
        checkedOn: '2026-11-01',
        suits: 'Riders with ground-level storage who have a suitable private-property route. Ausom lists this scooter for private-property use.',
      }),
      pick('leoout-t85-electric-scooter', {
        amountMinor: 129999,
        currency: 'USD',
        variantLabel: 'Scooter with Seat',
        checkedOn: '2026-11-01',
        suits: 'Experienced riders who have confirmed a permitted route and want the seat version of the T85.',
      }),
      pick('zwheel-d3-d-electric-scooter', {
        amountMinor: 67999,
        currency: 'USD',
        variantLabel: 'Red (D3-D / ZSB2)',
        checkedOn: '2026-11-01',
        suits: 'Riders who want a dual-motor scooter and can store a machine listed at 32 kg net.',
      }),
    ],
  },
];

export const nicheForPartner = (slug, category) => {
  if (category === 'electric-bikes') return niches.find((item) => item.slug === 'e-bikes');
  if (scooterSlugs.includes(slug)) return niches.find((item) => item.slug === 'scooters');
  return null;
};

export const offersFor = (niche) => partners
  .filter((item) => item.status === 'active' && item.code && niche.partnerSlugs.includes(item.slug))
  .map((item) => ({brand: item.name, code: item.code, benefit: item.benefit, url: item.url, path: `/promo/${item.slug}`}));
