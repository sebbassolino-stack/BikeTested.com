// Shared promo-page wording: "<Brand> Discount Code <CODE> (<Month Year>): <saving> Off", then the code, the saving
// and the dollar math right under the H1. Copied into each site's src/lib/ by scripts/promo-format/install.mjs.
import savings from '../data/code-savings.json' with { type: 'json' };

/** Build-month edition, New York time. Monthly rebuilds roll it over. */
export const promoMonth = () => new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'America/New_York' });

const num = (s) => Number(String(s).replace(/,/g, ''));

/** Parse a saving: { pct } or { amt }, plus { min } when the text states a minimum order. Null when no amount is stated. */
export function parseSaving(text) {
  const t = String(text ?? '');
  const min = t.match(/(?:over|above|orders? of|minimum(?: spend| order)?(?: of)?|spend)\s*\$\s?([\d,]+(?:\.\d+)?)\+?/i);
  const pct = t.match(/(\d+(?:\.\d+)?)\s*%/);
  if (pct) return { pct: num(pct[1]), min: min ? num(min[1]) : 0 };
  const amt = t.match(/\$\s?([\d,]+(?:\.\d+)?)\s*off/i);
  if (amt) return { amt: num(amt[1]), min: min ? num(min[1]) : 0 };
  return null;
}

/** The saving to show for a code: the site's own wording when it states an amount, otherwise the master deals file. */
export function savingFor(brand, code, siteText) {
  if (parseSaving(siteText)) return String(siteText).trim();
  const b = String(brand).toLowerCase();
  const row = savings[`${b}|${String(code ?? '').toUpperCase()}`] ?? savings[b];
  return row ?? (siteText ? String(siteText).trim() : '');
}

/** "15% Off" or "$20 Off", for titles and H1s. Empty when no amount is stated. */
export function savingShort(text) {
  const v = parseSaving(text);
  if (!v) return '';
  return v.pct ? `${v.pct}% Off` : `$${v.amt % 1 ? v.amt.toFixed(2) : v.amt} Off`;
}

/** "<Brand> Discount Code <CODE> (<Month Year>): <saving> Off", or without the saving when none is stated. */
export function promoHeadline(brand, code, savingText, word = 'Discount Code') {
  const s = savingShort(savingText);
  return `${brand} ${word} ${code} (${promoMonth()})${s ? `: ${s}` : ''}`;
}

const money = (n) => '$' + (Number.isInteger(n) ? n.toLocaleString('en-US') : n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
const r2 = (n) => Math.round(n * 100) / 100;

/** Saving and price paid on three round order totals that clear any minimum. */
export function mathRows(savingText) {
  const v = parseSaving(savingText);
  if (!v) return [];
  // $50, $100, $200 by default; start higher when a minimum order applies or a fixed saving would be over a quarter of the order.
  const start = Math.max(50, Math.ceil((v.min || 0) / 50) * 50, v.amt ? Math.ceil((v.amt * 4) / 50) * 50 : 0);
  const orders = start === 50 ? [50, 100, 200] : [start, start * 2, start * 4];
  return orders.map((order) => {
    const save = v.pct ? r2((order * v.pct) / 100) : v.amt;
    const pay = r2(order - save);
    return { order, save, pay, orderText: money(order), saveText: money(save), payText: money(pay) };
  });
}

/** "On a $100 order, CODE saves $15 and you pay $85." Empty when no amount is stated. */
export function mathSentence(code, savingText) {
  const rows = mathRows(savingText);
  const r = rows.find((x) => x.order === 100) ?? rows[0];
  return r ? `On a ${r.orderText} order, ${code} saves ${r.saveText} and you pay ${r.payText}.` : '';
}

const clean = (s) => String(s ?? '').replace(/^\s*save\s+/i, '').trim();

/** One quotable answer: code, saving, store and the worked example. */
export function codeAnswer(brand, code, savingText, store) {
  const s = parseSaving(savingText) ? ` for ${clean(savingText)}` : '';
  return `The ${brand} discount code is ${code}${s}${store ? ` at ${store}` : ''}. ${mathSentence(code, savingText)}`.trim();
}

/** Extra FAQ entry for the savings question, in { q, a } shape. Empty when no amount is stated. */
export function savingFaqs(brand, code, savingText) {
  const rows = mathRows(savingText);
  if (!rows.length) return [];
  return [{ q: `How much does the ${brand} code save?`, a: `${code} takes ${clean(savingText)}. ` + rows.map((r) => `On a ${r.orderText} order you save ${r.saveText} and pay ${r.payText}`).join('; ') + '.' }];
}
