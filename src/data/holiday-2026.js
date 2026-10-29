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
    ]
  ]
};
export const offers=records.filter(p=>p.status==='active').map(p=>({brand:p.name,code:p.code,benefit:p.benefit,url:p.url,path:(p.code?'/promo/':'/brands/')+p.slug}));
