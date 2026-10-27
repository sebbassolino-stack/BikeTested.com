import { guides } from '../data/guides.js';
export const sectionId = heading => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const sectionsFor = guide => guide.sections.map(section => Array.isArray(section) ? { heading: section[0], paragraphs: [section[1]] } : section);
export const dateLabel = date => new Intl.DateTimeFormat('en-US', {month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${date}T12:00:00Z`));
export function readingMinutes(guide) {
  const text = [guide.answer, ...sectionsFor(guide).flatMap(s => [s.heading, ...(s.paragraphs || []), ...(s.steps || []), ...(s.list || []), ...(s.table?.rows.flat() || [])]), ...(guide.faq || []).flat()].join(' ');
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 220));
}
export function relatedGuides(guide) {
  const explicit = (guide.related || []).map(slug => guides.find(g => g.slug === slug)).filter(Boolean);
  const candidates = guides.filter(g => g.slug !== guide.slug && g.topics?.some(t => guide.topics?.includes(t)));
  return [...new Map([...explicit, ...candidates].map(g => [g.slug,g])).values()].slice(0,3);
}
export const guideGroups = [
  {id:'choose-a-bike', name:'Choose your bike', description:'Frames, tires, drivetrains, and the way you want to ride.', slugs:['choose-your-first-ebike','road-gravel-or-hybrid','step-through-vs-step-over','folding-vs-full-size-ebike','fat-tire-vs-regular-tire-ebikes','belt-drive-vs-chain-drive','bike-or-electric-scooter','how-to-choose-a-budget-bike']},
  {id:'understand-your-ebike',name:'Understand your e-bike',description:'Make sense of assistance, motor systems, battery energy, and charging.',slugs:['torque-sensor-vs-cadence-sensor','mid-drive-vs-hub-motor','ebike-range-explained','cost-to-charge-an-ebike']},
  {id:'care-for-your-bike',name:'Care for your bike',description:'Clear starting points for pressure checks, chain care, and compatible upgrades.',slugs:['bike-tire-pressure','presta-vs-schrader','how-to-clean-lube-bike-chain','plan-your-bike-upgrades']},
  {id:'build-your-setup',name:'Build your everyday setup',description:'Luggage, useful technology, and the equipment behind a repeatable commute.',slugs:['commuter-gear-checklist','panniers-vs-backpack','choose-a-cycling-computer','scooter-and-bike-accessories-essentials','lights-signals-horn-and-alarm-for-scooters-and-e-bikes','helmet-and-gloves-for-scooter-and-e-bike-riding','tools-mounts-and-carry-gear-for-scooter-and-e-bike-commuting']}
];
