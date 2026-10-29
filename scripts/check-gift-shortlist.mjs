import fs from 'node:fs';
import path from 'node:path';
const picks=JSON.parse(fs.readFileSync('src/data/holiday-picks.json','utf8'));
const locate=p=>['dist'+p,'dist'+p+'.html',path.join('dist',p,'index.html')].find(f=>fs.existsSync(f)&&fs.statSync(f).isFile());
const guide=fs.readFileSync(locate('/holiday-gift-guide'),'utf8');
const fail=message=>{throw new Error('Gift shortlist: '+message)};
if(picks.length<4)fail('at least four selections required');
if(new Set(picks.map(p=>p.reviewPath)).size!==picks.length)fail('duplicate review');
for(const p of picks){
 if(!locate(p.reviewPath))fail('missing review '+p.reviewPath);
 if(!guide.includes('data-gift-pick="'+p.slug+'"')||!guide.includes(p.reviewPath))fail('unrendered selection '+p.slug);
 if(p.image&&(!fs.existsSync('public'+p.image)||!guide.includes(p.image)))fail('missing product image '+p.slug);
 if(p.offerPath&&!locate(p.offerPath))fail('missing offer page '+p.offerPath);
 if(!p.reason||!p.role)fail('buyer-fit reasoning missing '+p.slug);
}
console.log(`Gift shortlist: ${picks.length} unique selections, review routes, images and offer routes verified.`);
