/** Existing receivers only. No account IDs, visitor IDs or destination URLs. */
// Anonymous first-party count for the reader-events Worker: event, page, brand, placement, item only. No cookies or visitor IDs.
const readerBeacon=(e:string,b?:unknown,pl?:unknown,s?:unknown)=>{try{if(e!=='affiliate_click'&&e!=='promo_code_copy')return;const body=JSON.stringify({e,p:location.pathname,b:String(b||''),pl:String(pl||''),s:String(s||'')});if(navigator.sendBeacon)navigator.sendBeacon('/e/c',new Blob([body],{type:'text/plain'}))}catch{}};
function emit(name: string, el: HTMLElement, code?: string) {
  const detail = {brand:el.dataset.brand||'',product_slug:el.dataset.product||'',placement:el.dataset.placement||'holiday',page_path:location.pathname,...(code?{promo_code:code}:{})};
  try { window.dispatchEvent(new CustomEvent(name,{detail})); } catch {}
  readerBeacon(name,detail.brand,detail.placement,detail.product_slug);
  const receiver=(window as Window & {gtag?:(...args:unknown[])=>void}).gtag;
  if(typeof receiver==='function')try{receiver('event',name,detail)}catch{}
}
document.querySelectorAll<HTMLButtonElement>('[data-holiday-code]').forEach(button=>button.addEventListener('click',async()=>{
  try{const code=button.dataset.holidayCode||'';await navigator.clipboard.writeText(code);button.textContent='Copied';emit('promo_code_copy',button,code);setTimeout(()=>{button.textContent='Copy'},2000)}catch{button.textContent='Select code above'}
}));
const shopClick=(e:MouseEvent)=>{if(e.type==='auxclick'&&e.button!==1)return;const el=e.target instanceof Element?e.target.closest<HTMLElement>('[data-commerce-shop]'):null;if(el)emit('affiliate_click',el)};
document.addEventListener('click',shopClick);document.addEventListener('auxclick',shopClick);
