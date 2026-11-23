import {partners as records} from './partners.js';
export const config={
  "name": "BikeTested",
  "domain": "biketested.com",
  "topic": "Cycling",
  "gifts": [
    [
      "For the daily commuter",
      "Choose a useful accessory",
      "Ask what the ride is missing: visibility, storage or a better data display. Check mounts and dimensions before buying an accessory for someone else\u2019s bike.",
      "commuter-gear-checklist"
    ],
    [
      "For a data-minded cyclist",
      "Match the device ecosystem",
      "A cycling computer or sensor needs the right connection protocol and mounting arrangement. Confirm the recipient\u2019s existing devices and included sensors before choosing a bundle.",
      "choose-a-cycling-computer"
    ],
    [
      "For a first electric bike",
      "Make fit the gift",
      "A bike is a major fit and ownership decision. Involve the recipient in geometry, storage, assembly and service choices before placing an order.",
      "choose-your-first-ebike"
    ],
    [
      "For a mobility upgrade",
      "Plan the whole journey",
      "Compare carrying weight, storage and local riding requirements before buying an electric scooter. A compact folded shape does not establish an easy lift.",
      "bike-or-electric-scooter"
    ],
    [
      "Cycling gifts under $50",
      "Small accessories that get used",
      "Lights, a lock, a repair kit or a pump, each reviewed here with its listed price and date.",
      "/best/cycling-gifts-under-50"
    ],
    [
      "Cycling gifts under $100",
      "A pump, computer or helmet",
      "Compact electric pumps, a GPS bike computer and protective gear from our reviews.",
      "/best/cycling-gifts-under-100"
    ],
    [
      "Cycling gifts under $250",
      "A main gift on a budget",
      "A kids bike, bike computers, a folding lock and more, with prices from each review.",
      "/best/cycling-gifts-under-250"
    ],
    [
      "For e-bike and scooter riders",
      "Visibility, security and storage",
      "Lights, turn signals, mirrors, locks and covers for riders who already own an electric bike or scooter.",
      "/best/gifts-for-ebike-and-scooter-riders"
    ]
  ]
};
export const offers=records.filter(p=>p.status==='active').map(p=>({brand:p.name,code:p.code,benefit:p.benefit,url:p.url,path:(p.code?'/promo/':'/brands/')+p.slug}));
