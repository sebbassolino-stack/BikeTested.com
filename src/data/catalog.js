import { partners } from './partners.js';
import { discountLabel, formatMinor, priceDateLabel } from '../lib/pricing.js';
export const updated = '2026-10-24';
const editorialBrands = [
 {slug:'aventon',name:'Aventon',url:'https://www.aventon.com',description:'Comfort-focused electric bikes with connected features and a broad range of riding styles.'},
 {slug:'ride1up',name:'Ride1Up',url:'https://ride1up.com',description:'Direct-to-consumer electric bikes, from understated city commuters to larger utility models.'},
 {slug:'lectric',name:'Lectric',url:'https://lectricebikes.com',description:'Electric bikes built around accessible everyday transport, commuting, and recreational riding.'}
];
export const brands = [...editorialBrands, ...partners.map(p=>({...p}))];
export const products = [
 {slug:'aventon-pace-5-rec',brand:'aventon',name:'Aventon Pace 5 REC',model:'Pace 5 REC',image:'/images/pace-5.webp',category:'electric-bikes',use:'weekend',label:'For relaxed everyday rides',headline:'Comfort, with a connected side.',description:'An upright electric cruiser for neighborhood loops, paved paths, and a more relaxed way to get around.',verdict:'We recommend the Pace 5 REC for riders who put an easy riding position ahead of a sporty cockpit. Its step-through design makes sense for leisurely rides and everyday errands; shoppers who carry a bike upstairs should look closely at the listed weight.',strengths:['Low step-through frame for easier mounting','Swept-back bars and an adjustable stem','Connected security features'],tradeoffs:['Listed bike weight makes stair storage a consideration','Check ongoing connectivity terms before buying','A relaxed cruiser is a different fit from a performance road bike'],specs:{'Motor':'750W hub drive','Battery':'733Wh, removable','Claimed range':'Up to 75 miles','Listed weight':'60.48 lb','Brakes':'Hydraulic disc','Riding position':'Upright cruiser'},source:'https://www.aventon.com/products/pace-5-rec-step-through-ebike',evidence:'Manufacturer specifications',sections:[['Why it makes the shortlist','The appeal of a cruiser is the invitation to ride more often. Start with the way you want to sit on the bike, then work outward to storage, luggage, and service. The Pace belongs on the shortlist when an accessible frame and an upright position matter more than an aggressive silhouette.'],['What to check before ordering','Make a realistic plan for where the bike will live. Measure doorways and your parking area, and check whether your rack can support the bike you order. Choose your frame size from the current geometry chart rather than treating height ranges as a complete fit assessment.'],['Our buying advice','Compare the complete ownership package: assembly, local service, replacement parts, and any recurring connected-service charges. If the frame feels right and your storage is convenient, this is an appealing direction for easygoing rides. If your commute involves carrying a bike, compare a more compact alternative first.']]},
 {slug:'ride1up-roadster-v3',brand:'ride1up',name:'Ride1Up Roadster V3',model:'Roadster V3',image:'/images/roadster-v3.webp',category:'electric-bikes',use:'city',label:'For the city minimalist',headline:'Less fuss. More everyday riding.',description:'A pared-back commuter with a torque sensor, a removable battery, and a familiar bicycle silhouette.',verdict:'The Roadster V3 is our starting point for riders who want an electric commuter with a conventional bike feel and shape. Choose the exact frame and fork configuration carefully: the rigid and suspension versions serve different priorities.',strengths:['Torque-sensing assistance','Removable battery','Hydraulic brakes and a clean commuter layout'],tradeoffs:['Compare frame and fork options before checkout','A smaller battery calls for realistic route planning','Confirm included accessories for the selected configuration'],specs:{'Motor':'500W Mivice hub, 50Nm','Battery':'360Wh, removable','Claimed range':'20–40 miles','Sensor':'Intui-Drive torque sensor','Brakes':'Tektro hydraulic disc','Drivetrain':'9-speed chain'},source:'https://ride1up.com/product/roadster-v3/',evidence:'Manufacturer specifications',sections:[['Why it makes the shortlist','Some riders want their next commuter to look and work like the bike they already know. The Roadster fits that brief. We would put it on a city shortlist before looking at bulkier designs, particularly when simple storage and a restrained silhouette are priorities.'],['Choose your configuration deliberately','Do not assume every picture on a product page represents the same build. Match the frame, fork, drivetrain, and accessory list to the configuration in your cart. A rigid fork keeps the setup simple; suspension introduces a different balance of comfort, maintenance, and weight.'],['Our buying advice','Plan your daily loop with enough battery margin for detours and charging gaps. If you expect longer outings, compare battery capacity and charging arrangements across your shortlist. For a straightforward urban routine, the Roadster is a compelling place to begin.']]},
 {slug:'lectric-xpress2',brand:'lectric',name:'Lectric XPress2 Commuter',model:'XPress2 Commuter',image:'/images/xpress2.webp',category:'electric-bikes',use:'commute',label:'For the daily commute',headline:'Give the commute an upgrade.',description:'A commuter-focused electric bike with front suspension and a choice of pedal-response settings.',verdict:'We would shortlist the XPress2 Commuter for a daily route where front suspension and flexible assistance settings are more useful than a minimalist build. Compare the complete bike and its storage needs before deciding on motor output alone.',strengths:['Switchable torque and cadence response','Front suspension for a commuter-focused setup','Removable battery and hydraulic brakes'],tradeoffs:['A full-size bike needs a practical storage plan','Advertised range is a ceiling, not a commute guarantee','Verify accessories and current variant details'],specs:{'Motor':'750W rear hub, 85Nm','Battery':'672Wh, removable','Claimed range':'Up to 60 miles','Fork':'SR Suntour, up to 80mm travel','Brakes':'Hydraulic disc, 180mm rotors','Drivetrain':'8-speed Shimano Altus'},source:'https://lectricebikes.com/products/xpress-750-high-step-black-ebike',evidence:'Manufacturer specifications',sections:[['Why it makes the shortlist','A commuter earns its place by fitting the routine around the ride. Think about where you park, how you carry a bag, and who will service it. We like the XPress2 brief for riders who want an everyday transport platform rather than a stripped-back city bike.'],['Look beyond the headline power','A bigger motor number is only one part of the buying decision. The fit, control layout, and ability to manage the bike when parked matter every day. Try lifting and maneuvering a comparable bike if your storage involves tight corners or steps.'],['Our buying advice','Build your shopping basket around the whole commute. Confirm whether your preferred luggage, lock, and weather protection are included or separate. Compare the final delivered cost and service options with the other bikes on your shortlist, then choose the setup you can comfortably use all week.']]},
 {"slug":"mooncool-tk2-folding-electric-trike","brand":"mooncool","name":"Mooncool TK2 Folding Electric Trike","model":"TK2 Folding Electric Trike","image":"/images/products/mooncool-tk2-folding-electric-trike.webp","imageAlt":"Mooncool TK2 Folding Electric Trike in Cyan Green-Matte","imageWidth":1200,"imageHeight":1200,"category":"electric-bikes","use":"utility","label":"For low-step neighborhood errands","headline":"A folding trike with room for the everyday load.","description":"A low-step electric trike with front and rear baskets, reverse, and a folding frame for measured storage.","verdict":"We recommend the Mooncool TK2 Folding Electric Trike for riders who want a low-step, basket-ready setup for neighborhood errands and relaxed rides. A 48V battery, five assist levels, reverse function, and folding frame cover a practical set of mobility needs. Its decisive trade-off is scale: the trike weighs about 90 lb and remains 29 inches wide when assembled, so it suits storage with roll-in access better than frequent lifting. The checked Cyan Green-Matte variant accepted the reader code.","strengths":["Low step-through access with front and rear baskets for everyday cargo","Five pedal-assist levels, a half-twist throttle, and a reverse mode for low-speed maneuvering","Hydraulic disc brakes, a rear differential, parking brake, and 20 × 3-inch tires","Folding frame and removable 48V 15Ah battery for more flexible storage and charging"],"tradeoffs":["At about 90 lb and 29 inches wide, it needs a roll-in storage plan; folding does not make it light to carry","A three-wheel layout is wider and handles turns differently from a conventional bicycle; practice in an open space","Manufacturer pages differ on weight and warranty details, so confirm the exact terms for your order"],"specs":{"Motor":"500W nominal, 1,092W peak, 65Nm (manufacturer-listed)","Battery":"48V 15Ah removable","Claimed range":"35–75 miles in product highlights; up to 75 miles in specifications","Assistance":"Cadence sensor, 5 pedal-assist levels, half-twist throttle","Brakes":"Front and rear hydraulic discs, 180mm rotors","Wheels":"20 × 3.0 inches","Maximum payload":"450 lb (manufacturer-listed)","Listed weight":"41kg in specifications (about 90.4 lb); product FAQ says 89.9 lb","Seat height":"30.3–39 inches","Folded dimensions":"39.4 × 28.7 × 26.8 inches","Unfolded dimensions":"66 inches long × 29 inches wide","Top speed":"15.5 mph (manufacturer-listed)"},"source":"https://www.mooncool.com/products/tk2-electric-trike","evidence":"Manufacturer specification evaluation; exact-variant US checkout observation","sections":[["Everyday cargo in a low-step package","The TK2 makes its case through access and carrying room. A step-through frame, front basket, and rear basket create an errand-friendly setup without asking you to balance a load across one rack. The manufacturer lists a 450 lb maximum payload, a 48V 15Ah removable battery, and a rear differential. Five assist levels, a half-twist throttle, and reverse add useful low-speed control options. The single-speed drivetrain keeps the controls simple; riders looking for bicycle-like cornering or a compact lifting weight should compare a two-wheel model."],["Make room for the full-size trike","Folding helps with storage, but the TK2 remains substantial. Mooncool lists a folded footprint of 39.4 × 28.7 × 26.8 inches, an unfolded width of 29 inches, and a weight of 41kg (about 90.4 lb). Its FAQ gives 89.9 lb, so plan around roughly 90 lb and confirm the current shipping configuration. The recommended rider-height range is 5 ft to 6 ft 3 in, with a listed seat-height range of 30.3–39 inches. Measure the doorway, storage area, ramp, and vehicle space before ordering; frequent lifting is a poor match."],["What the range and support details mean","Mooncool lists a 500W nominal motor, 1,092W peak output, 65Nm, hydraulic disc brakes, and a top speed of 15.5 mph. The product highlights give a 35–75-mile range while the specifications say up to 75 miles. Treat range as a manufacturer estimate that varies with load, assistance, temperature, tires, and route. The product page describes a lifetime frame, two-year battery, and one-year parts warranty; the manual describes one year on main parts. Confirm the warranty that applies to your order. Check the brakes and folding lock before each ride, learn the reverse control at walking pace, and check local rules for an electric trike."]],"publishedOn":"2026-10-22","updatedOn":"2026-10-22","specsCheckedOn":"2026-10-22","faqs":[["How much space does the TK2 take when folded?","Mooncool lists folded dimensions of 39.4 × 28.7 × 26.8 inches. The trike is 29 inches wide when unfolded, so measure the entire route into your storage area, not only the final parking space."],["How far can the TK2 travel on a charge?","Mooncool gives 35–75 miles in product highlights and up to 75 miles in its specifications. These are manufacturer claims, not Bike Tested range measurements; rider load, temperature, terrain, tire pressure, and assistance level affect actual distance."],["What is the TK2’s weight and rider fit?","The specifications list 41kg (about 90.4 lb), while the product FAQ says 89.9 lb. Mooncool recommends rider heights from 5 ft to 6 ft 3 in and lists a 30.3–39-inch seat-height range. Check reach and storage access before buying."],["Does the Mooncool code apply to the TK2?","SEBASTIANBASSOL was accepted for the Cyan Green-Matte TK2 variant in US checkout on October 22, 2026. The item price changed from $1,499.99 to $1,425.00 before tax and shipping. Other colors and models were not checked."]],"price":{"amountMinor":149999,"currency":"USD","region":"US","variantId":"46144887226540","variantLabel":"Cyan Green-Matte","source":"https://www.mooncool.com/products/tk2-electric-trike","checkedOn":"2026-10-22","isSalePrice":true},"eligibility":{"status":"eligible","variantId":"46144887226540","evidence":"docs/evidence/mooncool-tk2-folding-electric-trike.md#checkout"},"checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"46144887226540","baseAmountMinor":149999,"discountMinor":7499,"afterAmountMinor":142500,"currency":"USD","checkedOn":"2026-10-22","exclusions":"Before shipping and tax; no address entered."}},
 {"slug":"ausom-gosoul-2-electric-scooter","brand":"ausom","name":"Ausom Gosoul 2 Electric Scooter","model":"Gosoul 2","image":"/images/products/ausom-gosoul-2-electric-scooter.webp","imageAlt":"Ausom Gosoul 2 single-motor electric scooter, three-quarter view","imageWidth":1200,"imageHeight":1200,"category":"electric-mobility","use":"private","label":"For private-property routes","headline":"A folding scooter that still asks for room to live.","description":"A 624Wh single-motor scooter with adjustable suspension. At 61.5 lb, it needs measured storage; Ausom lists it for private-property use only.","verdict":"We would consider the Ausom Gosoul 2 for riders with ground-level storage and a suitable private-property route. Its suspension, lighting, and 624Wh battery make a substantial feature list, but the 61.5 lb weight limits the appeal of its folding design. Ausom’s page markets commuting yet says the scooter is for private property only. Confirm your intended use and the written warranty terms before ordering.","strengths":["Adjustable dual-swingarm suspension, front and rear disc brakes, and E-ABS","48V 13Ah battery (624Wh) and a single motor rated at 1,100W peak","Tubeless 10 × 2.5-inch tires, lights, turn signals, and NFC or passcode access","The supplied Bike Tested code was accepted on the listed US configuration"],"tradeoffs":["At 61.5 lb and 49 inches long when folded, it remains difficult to carry and needs measured storage","The product page states “For use on private property only” despite marketing that discusses commuting","The 44-mile maximum is based on a narrow, ideal-condition manufacturer test, not a Bike Tested ride","The manual says to avoid rain, puddles, and wet conditions; IP54 is not a wet-weather invitation","The product page’s two-year warranty headline differs from the manual’s shorter component-specific terms"],"specs":{"Motor":"Single motor, 1,100W peak (manufacturer-listed)","Battery":"48V 13Ah, 624Wh","Claimed range":"Up to 44 miles under specified ideal conditions","Top speed":"Up to 28 mph (manufacturer-listed)","Brakes":"E-ABS plus front and rear mechanical disc brakes","Tires":"10 × 2.5-inch tubeless; manual recommends 44–50 PSI","Suspension":"Adjustable dual swingarms with springs","Maximum load":"287 lb","Listed weight":"61.5 lb","Folded dimensions":"49 × 28.3 × 21.3 inches","Charger / charge time":"54.6V, 2A / 6.5 hours","Water-resistance listing":"IP54; manual advises avoiding wet conditions"},"source":"https://ausomstore.com/products/ausom-gosoul-2-electric-scooter","evidence":"Manufacturer-specification editorial evaluation; exact-variant US checkout observation; no ride testing","sections":[["Check the intended route before the power figures","Ausom lists a single motor with 1,100W peak output, up to 28 mph, and a 20% climbing grade. Those are manufacturer specifications, not measured Bike Tested results. The product page also carries a “For use on private property only” notice, even as its marketing describes commuting. Treat that notice as the relevant limitation: do not assume public-road permission from the speed, lights, or turn signals. Check local rules and get clear written guidance for the route you have in mind."],["Folding changes the shape more than the carrying weight","The Gosoul 2 folds to 49 × 28.3 × 21.3 inches, but it weighs 61.5 lb and remains nearly four feet long. The fold can help it fit a measured storage bay; it does not make a practical stair carry for most riders. Check the full path through doors, ramps, trunk openings, and the final storage space. If you will need to lift it regularly, compare a lighter scooter before choosing this one."],["Read the range, weather, and warranty details together","The 44-mile maximum uses a 165 lb load, single-motor mode, steady 9.3 mph, mild weather, low wind, and flat, dry pavement. Expect real distance to depend on speed, stops, temperature, tire pressure, and route. Ausom lists IP54, but the manual says to avoid puddles, wet ground, and rainy or snowy days; wet braking distances also increase. The product page advertises a two-year worry-free warranty, while the Gosoul 2 manual lists one year for several core components and six months for the battery and many parts. Ask Ausom for the written coverage that applies to the exact scooter."]],"publishedOn":"2026-10-22","updatedOn":"2026-10-22","specsCheckedOn":"2026-10-22","faqs":[["Does the Gosoul 2 really travel 44 miles?","Ausom advertises up to 44 miles, but its manual conditions that maximum on a 165 lb load, single-motor mode, 9.3 mph steady speed, mild weather, low wind, and flat, dry pavement. That is a manufacturer estimate, not a Bike Tested range measurement."],["How heavy and large is the Gosoul 2 when folded?","The manufacturer lists 61.5 lb and folded dimensions of 49 × 28.3 × 21.3 inches. Measure the storage route and vehicle opening; the folded scooter is still long and heavy to lift."],["Can I ride the Gosoul 2 on public roads?","Ausom’s product page says “For use on private property only.” The manual separately tells owners to check local rules and any required equipment. Do not treat the commuting marketing or speed claim as road-use approval; confirm your local rules and the seller’s guidance before buying."],["Is the Gosoul 2 suitable for wet weather?","The listing says IP54, but the manual advises avoiding puddles, wet surfaces, rain, storms, and snow. It also warns that braking distances increase when the surface is wet. We would not treat the IP54 listing as permission for wet-weather riding."],["Was SEBASTIANBASSOL tested on this scooter?","Yes. On October 22, 2026, it was accepted for the US Default Title variant (SKU 1297008). The $50 code reduced the $599 item price to $549 before shipping and tax, replacing the store’s automatic $20 promotion rather than stacking with it. Other models and variants were not checked."]],"price":{"amountMinor":59900,"currency":"USD","region":"US","variantId":"52314547912983","variantLabel":"Default Title","source":"https://ausomstore.com/products/ausom-gosoul-2-electric-scooter","checkedOn":"2026-10-22","isSalePrice":true},"eligibility":{"status":"eligible","variantId":"52314547912983","evidence":"docs/evidence/ausom-gosoul-2-electric-scooter.md#checkout"},"checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"52314547912983","baseAmountMinor":59900,"discountMinor":5000,"afterAmountMinor":54900,"currency":"USD","checkedOn":"2026-10-22","exclusions":"Before tax and shipping; replaced the automatic $20 checkout promotion. "}},
 {"slug":"cycplus-as2-pro-max-tiny-e-pump","brand":"cycplus","name":"CYCPLUS AS2 Pro Max Tiny E-Pump for Bike","model":"AS2 Pro Max","image":"/images/products/cycplus-as2-pro-max-tiny-e-pump.webp","imageAlt":"CYCPLUS AS2 Pro Max electric bicycle pump with its pressure display and controls visible","imageWidth":1200,"imageHeight":1200,"category":"cycling-technology","use":"commute","label":"For quick roadside top-ups","headline":"Take less room. Keep pressure in view.","description":"A 205 g portable electric bicycle pump with an integrated display, auto-stop and a 120 PSI ceiling; an included hose supports higher-pressure and resin-valve inflation.","verdict":"We recommend the CYCPLUS AS2 Pro Max to road and gravel riders who want a compact electric pump for a pressure check or roadside flat. Its 205 g body, live pressure display and preset auto-stop make quick top-ups easier to manage than an unmeasured hand pump. The 120 PSI ceiling covers common high-pressure needs, while the included hose is essential above 100 PSI and for resin valves.","strengths":["The 81 × 60 × 32 mm, 205 g pump body is easy to pack as a backup.","An integrated display shows pressure and battery level, with an adjustable target and automatic shutoff.","The nozzle supports Presta and Schrader setups; the box includes a hose, Presta converter and ball needle.","USB-C charging, a silicone case and a splashproof pouch make a useful portable kit."],"tradeoffs":["The manual’s full-charge reference gives three 29 × 2.2-inch tire inflations from 0 to 50 PSI, each taking about 130–140 seconds; treat those figures as manufacturer data, not Bike Tested measurements.","The manual calls for the hose above 100 PSI and with resin valves; the valve can be hot after inflation, and the pump needs cooling breaks after sustained use.","The listing describes a splashproof pouch but gives no pump IP rating; CYCPLUS’s limited warranty excludes water ingress."],"specs":{"Maximum pressure":"120 PSI (manufacturer-listed)","Gauge and controls":"1 PSI high-precision gauge claim; adjustable target; automatic shutoff; live PSI/BAR and battery display","Pump dimensions and weight":"81 × 60 × 32 mm; 205 g (manufacturer-listed)","Battery":"600 mAh, 11.1 V, 6.66 Wh","Charging":"USB-C; the product page advertises a one-hour full charge, while the product graphic and manual list different input ratings","Valve compatibility":"Presta and Schrader via nozzle adjustment; hose supports compatible Presta, Schrader and ball-valve adapters","Included":"Inflator, hose, Presta converter, silicone case, splashproof pouch, seal part, charging cable and ball needle","Manufacturer inflation reference":"Fully charged: 700 × 25 tire, 0–120 PSI in 75–85 sec (4 inflations); 700 × 28, 0–120 PSI in 95–105 sec (3); 29 × 2.2, 0–50 PSI in 130–140 sec (3). The manual labels these experimental reference data."},"source":"https://www.cycplus.com/products/tiny-pump-as2-pro-max","evidence":"Manufacturer specification evaluation; official manual reference data; exact-variant US checkout observation","sections":[["A useful shortcut for carrying less","The AS2 Pro Max makes sense as a compact backup for a ride, not as a replacement for every pump in the workshop. CYCPLUS lists a 205 g body measuring 81 × 60 × 32 mm, small enough to keep with a saddlebag or travel kit. Its display shows live pressure and battery level, lets you select PSI or BAR, and stops when the preset target is reached. That is more reassuring than inflating by feel on the shoulder of a road. CYCPLUS lists a maximum of 120 PSI and describes a 1 PSI high-precision gauge; those are manufacturer claims, not Bike Tested calibration results. Set pressure from guidance for the exact tire, rim, rider load and route. Maximum pressure is a limit, not the right target for every ride."],["Set up the valve before inflation","The nozzle can be configured for Presta or Schrader. The manual shows the pump ready for Presta with the smaller opening facing outward; for Schrader, reverse the included nozzle insert. CYCPLUS recommends the extension hose for Schrader valves, and the box includes a Presta converter plus a hose with adapters for a ball valve. Use the hose whenever the target is above 100 PSI to reduce air leakage at the nozzle. For a TPU inner tube with a resin valve, the manual says to connect the hose before inflating because direct heat may melt the valve. It also warns that the valve can become hot after a fill. Take the small setup step, keep your hand clear of the hot connection, and use the tire maker’s pressure guidance rather than the pump’s maximum as a target."],["Plan for a compact pump’s duty cycle","The manual lists reference fill times and counts from a full battery: a 700 × 25 tire from 0 to 120 PSI in 75–85 seconds, with four inflations; a 700 × 28 tire to the same pressure in 95–105 seconds, with three; and a 29 × 2.2 tire from 0 to 50 PSI in 130–140 seconds, with three. CYCPLUS labels the results experimental reference data, so treat them as a planning guide rather than a guarantee. The pump also shuts down after three minutes of continuous inflation and pauses if it overheats; the manual says to let it cool before continuing. That is reasonable for an occasional roadside fix, but a floor pump remains the easier choice for frequent home inflation or repeated large-volume tires."],["Check charging and weather details","CYCPLUS advertises a one-hour USB-C charge. Its product graphic and AS2 Pro Max manual list different input ratings, so confirm your charger and expected charge time with the seller if that detail matters. The included pouch is described as splashproof, but the listing does not give the pump an IP water-resistance rating. Keep the inflator protected from rain and water; the seller’s limited two-year warranty excludes water ingress. The kit includes a silicone case, hose, Presta converter, seal part, cable and ball needle, which makes the package more complete than the pump body alone. Check the current listing for the exact contents and written warranty terms before ordering."]],"publishedOn":"2026-10-22","updatedOn":"2026-10-22","specsCheckedOn":"2026-10-22","faqs":[["Does the AS2 Pro Max work with Presta and Schrader valves?","Yes. The manual shows the nozzle configured directly for Presta and adjusted for Schrader by reversing the included nozzle insert. CYCPLUS recommends the hose for Schrader; the hose and included converter also support the listed adapters for Presta, Schrader and ball valves. Use the hose above 100 PSI and with resin valves."],["Can I inflate a bike tire to 120 PSI with the AS2 Pro Max?","CYCPLUS lists 120 PSI as the pump’s maximum. Choose a pressure recommended for your exact tire, rim and load, and stay within every applicable limit. The manual says to use the hose above 100 PSI; the pump’s maximum is not a universal riding target."],["How many tires can it inflate on one charge?","The manufacturer manual gives reference results from a full charge: four 700 × 25 inflations from 0 to 120 PSI, three 700 × 28 inflations to 120 PSI, or three 29 × 2.2 fills from 0 to 50 PSI. CYCPLUS calls these experimental reference data; actual results can vary with conditions and use."],["Can I use the AS2 Pro Max in the rain?","The product page describes a splashproof pouch, but does not list an IP water-resistance rating for the pump. The limited warranty excludes water ingress. Keep the pump protected from rain and water, and confirm the current seller guidance before relying on it in wet conditions."],["What comes with the AS2 Pro Max?","CYCPLUS lists the inflator, hose, Presta converter, silicone case, splashproof pouch, seal part, charging cable and ball needle. Check the selected listing for the package that will ship with your order."]],"price":{"amountMinor":8999,"currency":"USD","region":"US","variantId":"43708211495070","variantLabel":"AS2 Pro Max","source":"https://www.cycplus.com/products/tiny-pump-as2-pro-max","checkedOn":"2026-10-22","isSalePrice":true},"eligibility":{"status":"eligible","variantId":"43708211495070","evidence":"docs/evidence/cycplus-as2-pro-max-tiny-e-pump.md#checkout"},"checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"43708211495070","baseAmountMinor":8999,"discountMinor":449,"afterAmountMinor":8550,"currency":"USD","checkedOn":"2026-10-22","exclusions":"Before shipping and tax; no address entered."}},
  {
    "slug":"finbike-eb8-electric-bike",
    "brand":"finbike",
    "name":"FinBike EB8 Folding Fat-Tire Electric Bike",
    "model":"EB8",
    "image":"/images/products/finbike-eb8-electric-bike.webp",
    "imageAlt":"FinBike EB8 Grey folding electric bike with 20-inch fat tires and rear rack",
    "imageWidth":1200,
    "imageHeight":1200,
    "category":"electric-bikes",
    "use":"commute",
    "label":"For compact storage and mixed-surface rides",
    "headline":"Fat tires, a folding frame, and room for the daily load.",
    "description":"A European-market folding e-bike with 20 × 4.0-inch tires, torque sensing, dual suspension, hydraulic disc brakes, and a removable 48V battery.",
    "verdict":"We recommend the FinBike EB8 for European riders who want a folding electric bike with wide tires, a rack, and torque-sensing assistance for commutes and recreational routes. Its 48V 15Ah battery, front fork, rear shock, and hydraulic disc brakes give it a useful everyday brief. Folding helps reduce the storage footprint, but the complete bike weighs 32.3 kg; measure the folded space and confirm the frame fit before buying.",
    "strengths":[
      "The torque sensor is designed to vary assistance with pedal pressure, giving shoppers a more responsive setup to consider than a simple cadence-only claim.",
      "The removable 48V 15Ah battery is listed at 720Wh by calculation, and the manual describes five assistance speed levels up to 25 km/h.",
      "A suspension fork, rear shock, hydraulic disc brakes, and 20 × 4.0-inch tires make a broad equipment package for paved routes and light mixed surfaces.",
      "The folding frame, handlepost and pedals pair with a rear rack, fenders, lights, and a brake light with turn signals."
    ],
    "tradeoffs":[
      "At 32.3 kg, this is a folder for reducing storage size, not for easy stair carrying; its folded dimensions are still 107 × 56 × 78.5 cm.",
      "The listing offers color and region variants but no geometry chart. The manual requires at least one inch of standover clearance, so check fit in person if possible.",
      "FinBike’s product page advertises 250 W rated and 1,000 W peak motor power, while its EU manual lists 250 W without a peak figure. Confirm the exact configuration and local class before riding on public routes.",
      "The product page says not to operate the bike in wet conditions even though the manual lists IPX4; ask FinBike for written guidance before planning wet-weather use."
    ],
    "specs":{
      "Motor":"250 W in the EU manual; product page also advertises 1,000 W peak",
      "Battery":"48 V, 15 Ah (720 Wh calculated); removable",
      "Claimed range":"144+ km in manufacturer laboratory reference data; real distance varies",
      "Assistance":"Torque sensor; manual lists five speed levels up to 25 km/h",
      "Wheels and tires":"20 × 4.0 inches",
      "Suspension":"Front fork and rear shock",
      "Brakes":"Hydraulic disc brakes (manufacturer-listed)",
      "Listed weight":"32.3 kg",
      "Folded dimensions":"107 × 56 × 78.5 cm",
      "Unfolded dimensions":"174.5 × 68.5 × 131 cm",
      "Maximum load":"150 kg",
      "Charging":"7–8 hours; 54.6 V, 2 A charger output"
    },
    "source":"https://www.finbike.com/products/finbike-eb8-electric-bike",
    "evidence":"Manufacturer specifications; exact-variant Europe checkout observation",
    "sections":[
      ["A folding layout for useful everyday equipment","The EB8 folds at the frame and handlepost, and the pedals fold down too. That gives the bike a smaller footprint for a hallway, vehicle, or storage corner, while its rear rack, fenders, headlight, and rear light keep the commuter setup practical. The 20 × 4.0-inch tires, front suspension fork, and rear shock add more cushioning hardware than a slim-tire city folder. We would still think of the EB8 as a large e-bike that can fold, rather than a portable bike: the listed 32.3 kg weight and folded dimensions matter every time it has to move through a doorway or into a car."],
      ["A torque sensor and a large battery claim","FinBike describes the EB8’s torque sensor as responding to pedal force. That can make assistance follow rider input, but the actual feel depends on tuning and the selected assistance level; the feature name alone does not predict how the bike will start or climb. Its 48 V, 15 Ah battery works out to 720 Wh by calculation, and the manual gives a 7–8 hour charging time. FinBike advertises up to 144 km, while the manual labels its range data as a full-charge laboratory result affected by load, wind, humidity, and riding habits. Use that figure as a best-case reference, then plan your route around the battery margin you need."],
      ["Fit and carrying deserve more attention than the fold","The manufacturer provides folded and unfolded dimensions but no geometry chart or size range for the listed color variants. The manual asks riders to maintain at least one inch of clearance between the top tube and inseam while standing over the bike, and it allows the saddle and handlebar heights to be adjusted. Check reach, standover, and control position for your body rather than using the folding hinge as a proxy for fit. The EB8’s 32.3 kg weight also means removing the battery will not turn it into a light stair carry. Measure the folded bike against your storage opening and consider practicing the folding sequence before relying on it for transit or car loading."],
      ["Resolve the motor and weather details for your country","FinBike’s product page lists a 250 W rated motor and also promotes a 1,000 W peak figure. The EU manual’s specification table lists 250 W but does not state peak output. The manual lists a 25 km/h maximum speed; neither that value nor a CE badge settles how a particular build is classified on your local roads. Check the exact vehicle rules where you plan to ride. There is a similar mismatch in the wet-weather guidance: the manual lists IPX4, while the product page warns against operation in wet conditions and says moisture can affect electronics and warranty coverage. We would get the seller’s written answer before planning regular rainy rides."],
      ["Our buying advice","The EB8 makes most sense when you have a real use for fat tires, a folding frame, a rear rack, and a removable high-capacity battery. Before ordering, confirm that its one listed frame presentation fits you, that the folded package works in your storage space, and that a local mechanic can support its brakes and electrical system. The store page also shows both a 14-day return answer and a 30-day return badge, so verify the return terms for your delivery country. The Bike Tested code was accepted on the single Grey / Europe EB8 variant; if that is your configuration, check that the same discount remains on the item subtotal before completing checkout."]
    ],
    "publishedOn":"2026-10-22",
    "updatedOn":"2026-10-22",
    "specsCheckedOn":"2026-10-22",
    "faqs":[
      ["Can the EB8 really travel 144 km on one charge?","FinBike advertises up to 144 km, and the EU manual labels its range data as a full-charge laboratory reference. It also says distance varies with load, humidity, wind, and riding habits. Treat 144 km as a manufacturer claim rather than a Bike Tested measurement or a guaranteed commute distance."],
      ["Is the folded EB8 easy to carry upstairs?","The EU manual lists a complete-bike weight of 32.3 kg and folded dimensions of 107 × 56 × 78.5 cm. Folding reduces the bike’s footprint, but the listed weight makes it a substantial lift. Measure your route and storage space before ordering."],
      ["How do I check the EB8 frame fit?","The product listing does not provide a geometry chart or size options beyond color and region. The manual asks for at least one inch of clearance between the top tube and inseam and shows adjustable saddle and handlebar heights. Check reach and standover on the exact bike before buying."],
      ["Can I ride the EB8 in the rain?","FinBike’s EU manual lists IPX4, while the product page tells riders not to operate the bike in wet conditions and warns moisture can damage its electronics or affect warranty coverage. Ask the seller for written guidance for the exact configuration; do not assume the rating overrides the product-page warning."]
    ],
    "relatedReviews":[
      {"slug":"lectric-xpress2","reason":"If you want a conventional full-size commuter setup rather than the EB8’s folding frame and 20 × 4.0-inch tires, see our Lectric XPress2 review."}
    ],
    "price":{"amountMinor":124900,"currency":"EUR","region":"Europe","variantId":"46371984277561","variantLabel":"Grey / Europe","source":"https://www.finbike.com/products/finbike-eb8-electric-bike","checkedOn":"2026-10-22","isSalePrice":false},
    "eligibility":{"status":"eligible","variantId":"46371984277561","evidence":"docs/evidence/finbike-eb8-electric-bike.md#checkout"},
    "checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"46371984277561","baseAmountMinor":124900,"discountMinor":9992,"afterAmountMinor":114908,"currency":"EUR","checkedOn":"2026-10-22","exclusions":"Before shipping; no delivery address entered."}
  },
  {
    "slug":"hiknight-h2-pro-off-road-ebike",
    "brand":"hiknight",
    "name":"HiKNiGHT H2 Pro Off-Road E-Bike",
    "model":"H2 Pro",
    "image":"/images/products/hiknight-h2pro-off-road-electric-bike.webp",
    "imageAlt":"HiKNiGHT H2 Pro Grey dual-motor fat-tire e-bike with rear rack",
    "imageWidth":1200,
    "imageHeight":1200,
    "category":"electric-bikes",
    "use":"weekend",
    "label":"For high-output off-road riding",
    "headline":"Dual-motor power, with a heavy-bike footprint.",
    "description":"A 26 × 4.0-inch step-through platform with dual motors and a removable 52V battery. HiKNiGHT advertises speeds up to 40 mph, so check the intended riding area, local rules and storage before ordering.",
    "verdict":"We recommend the HiKNiGHT H2 Pro only for riders who specifically want a high-output off-road e-bike and have the space and strength to manage a bike listed at 36 kg. Its dual-motor setup, 26 × 4.0-inch tires, removable 52V 20Ah battery and hydraulic brakes make an ambitious trail-oriented package. The seller's 40 mph top-speed claim puts it outside a routine commuter brief; check the rules for your intended roads and trails. The Grey US variant accepted the Bike Tested code in checkout.",
    "strengths":[
      "A removable 52V 20Ah battery supports flexible charging and contains 1,040Wh by calculation from the listed voltage and capacity.",
      "Dual motors, 26 × 4.0-inch tires and a suspension fork are aimed at demanding off-road use.",
      "The seller lists hydraulic disc brakes, a seven-speed Shimano drivetrain and a step-through frame.",
      "A US Grey variant accepted the supplied $100 code in checkout, reducing the item subtotal from $1,349 to $1,249 before shipping and tax."
    ],
    "tradeoffs":[
      "At 36 kg (about 79 lb), it is a substantial bike to lift, store or maneuver in tight spaces.",
      "The advertised 40 mph top speed calls for careful checks of local vehicle rules and where the bike may be ridden; do not assume it belongs on ordinary bike routes.",
      "The product page gives different motor and range descriptions in separate sections; treat these as seller claims and confirm the exact configuration.",
      "HiKNiGHT's listed rider-height and seat measurements vary slightly across page sections, so confirm reach and fit before ordering."
    ],
    "specs":{
      "Motor":"Dual motors; product description says 1,500W × 2, while the page separately claims 4,000W peak",
      "Peak torque":"140 N·m (seller-listed)",
      "Battery":"52V 20Ah removable; 1,040Wh calculated from listed voltage and capacity",
      "Top speed":"Up to 40 mph (seller claim)",
      "Claimed range":"60–90 miles in the specification table; another product-page feature says 80+ miles",
      "Wheels and tires":"26 × 4.0 inches",
      "Brakes":"Hydraulic disc; 180 mm rotors (seller-listed)",
      "Drivetrain":"Shimano 7-speed",
      "Listed bike weight":"36 kg (about 79.4 lb)",
      "Maximum payload":"380 lb (seller-listed)",
      "Recommended rider height":"5 ft 5 in–6 ft 5 in (seller-listed; measurements vary between page sections)"
    },
    "source":"https://hiknightebike.com/products/hiknight-h2pro-dual-motor-fat-tire-electric-bike?variant=46697841885404",
    "evidence":"Manufacturer specification evaluation; exact Grey US variant checkout observation; no Bike Tested riding or speed test",
    "sections":[
      ["A high-output off-road brief","The H2 Pro is built around two motors, 26 × 4.0-inch tires and a removable 52V 20Ah battery. HiKNiGHT advertises 4,000W peak output, 140 N·m peak torque and speeds up to 40 mph. Those are seller claims, not Bike Tested measurements. Start with the terrain and riding areas you can use, then confirm the bike's local class, access rules and required equipment before buying. A high advertised speed does not make this a sensible default commuter."],
      ["Plan for the complete 36 kg bike","HiKNiGHT lists the H2 Pro at 36 kg, roughly 79.4 lb, with a recommended rider-height range of 5 ft 5 in to 6 ft 5 in. The page gives slightly different height and seat measurements in separate sections. Check reach, saddle adjustment, control access and mounting movement on the exact build. Make a roll-in storage plan and consider the weight before choosing a garage, apartment or vehicle carrier; this is not a convenient bike to lift repeatedly."],
      ["Read the motor and range claims carefully","The page describes the motors as 1,500W × 2 and elsewhere advertises 4,000W peak output. Its specification table gives 60–90 miles of range, while another page section says 80+ miles. HiKNiGHT says performance varies with load, terrain, weather and riding mode; neither range figure has been measured by Bike Tested. Use battery capacity as one comparison point, plan conservatively, and ask the seller to confirm the exact motor configuration and written support terms. The Grey US variant accepted the supplied code at checkout; recheck the code and item subtotal before ordering." ]
    ],
    "publishedOn":"2026-10-22",
    "updatedOn":"2026-10-22",
    "specsCheckedOn":"2026-10-22",
    "faqs":[
      ["How fast does the HiKNiGHT H2 Pro go?","HiKNiGHT advertises a top speed of up to 40 mph. Actual speed depends on riding conditions, and the product page does not establish where this vehicle may legally be used. Check the requirements for your location and intended roads or trails before ordering."],
      ["How far can the H2 Pro travel on one charge?","The specification table claims 60–90 miles, while another product-page feature says 80+ miles. HiKNiGHT notes that load, terrain, weather and riding mode affect performance. These are manufacturer claims, not Bike Tested range measurements; leave a reserve for your own route."],
      ["How heavy is the H2 Pro, and who does it fit?","HiKNiGHT lists a weight of 36 kg (about 79.4 lb) and a rider-height range of 5 ft 5 in to 6 ft 5 in. Separate page sections show slightly different measurements. Confirm reach and saddle range on the exact configuration, and plan for ground-level storage if you cannot lift a heavy bike."],
      ["Can I use the H2 Pro on public roads or trails?","The seller positions the H2 Pro as an off-road e-bike and advertises speeds up to 40 mph. Rules and access vary by location and route. Confirm the vehicle class, registration or equipment requirements, and trail access with the relevant local authority before riding in public areas."]
    ],
    "relatedReviews":[
      {"slug":"lectric-xpress2","reason":"If the H2 Pro is more power and weight than your routine calls for, compare a commuter-focused electric bike with a conventional riding brief."}
    ],
    "price":{"amountMinor":134900,"currency":"USD","region":"US","variantId":"46697841885404","variantLabel":"Grey","source":"https://hiknightebike.com/products/hiknight-h2pro-dual-motor-fat-tire-electric-bike?variant=46697841885404","checkedOn":"2026-10-22","isSalePrice":true},
    "eligibility":{"status":"eligible","variantId":"46697841885404","evidence":"docs/evidence/hiknight-h2-pro-off-road-ebike.md#checkout"},
    "checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"46697841885404","baseAmountMinor":134900,"discountMinor":10000,"afterAmountMinor":124900,"currency":"USD","checkedOn":"2026-10-22","exclusions":"Before shipping and tax; no delivery address entered; checkout displayed an estimated tax that was not final."}
  },
  {
    "slug":"ekx-x21-max-electric-dirt-bike",
    "brand":"ekx",
    "name":"EKX X21 Max Electric Dirt Bike",
    "model":"X21 Max",
    "image":"/images/products/ekx-x21-max-electric-dirt-bike.webp",
    "imageAlt":"Grey and black EKX X21 Max electric dirt bike, US 8000W peak and 60V 30Ah configuration",
    "imageWidth":1200,
    "imageHeight":1200,
    "category":"electric-mobility",
    "use":"private",
    "label":"For permitted off-road riding",
    "headline":"An electric dirt bike with a 60 mph claim.",
    "description":"A high-output electric dirt bike with a 3,000W rated motor, an 8,000W peak claim and 19-inch off-road tires. Confirm fit, local classification, permitted routes and storage before treating it as a daily e-bike.",
    "verdict":"We recommend the EKX X21 Max for riders who want a high-output electric dirt bike for permitted off-road routes, with 19-inch wheels and adjustable suspension to match. Its removable 60V 30Ah battery and 8,000W peak claim make the performance brief clear. The 60 mph seller-listed top speed, 106 lb weight and location-specific access rules make this a deliberate powersports purchase rather than an ordinary commuter e-bike.",
    "strengths":[
      "A removable 60V 30Ah battery is listed at 1,800Wh, paired with a 3,000W rated and 8,000W peak motor claim.",
      "The 19-inch off-road tires, adjustable inverted fork and adjustable rear shock suit a trail-focused setup.",
      "The listing specifies two-piston hydraulic disc brakes, a 330 lb payload, color LCD and NFC start.",
      "SEBASTIANBASSOL was accepted on the exact US variant, reducing the item subtotal by $150 to $1,799 before shipping and tax.",
      "The battery is removable for separate charging, and EKX lists a model-specific X21 Max manual and assembly video."
    ],
    "tradeoffs":[
      "At 106 lb, it calls for ground-level or roll-in storage and a deliberate transport plan; frequent lifting is a poor fit.",
      "EKX recommends riders from 5 ft 5 in to 6 ft 5 in, but the listing has no geometry chart or seat-height measurement to confirm fit.",
      "The 60 mph and 3,000W rated figures call for local vehicle-class and route-access checks; a seller's broad street-legal claim does not settle every jurisdiction.",
      "Range figures conflict: the specification table says 60 miles while one image caption says 55; both remain seller claims, not Bike Tested measurements.",
      "The seller's buyer-remorse return policy lists $150–$250 return shipping plus a 10–15% restocking fee."
    ],
    "specs":{
      "Motor":"3,000W rated / 8,000W peak (manufacturer-listed)",
      "Peak torque":"240 N·m (manufacturer-listed)",
      "Battery":"60V 30Ah removable lithium battery; 1,800Wh (manufacturer-listed)",
      "Claimed top speed":"Up to 60 mph (manufacturer claim)",
      "Claimed range":"Up to 60 miles in the specification table; one product image caption says 55 miles",
      "Transmission":"7 speeds; sensor type and pedal-assist behavior are not specified on the selected listing",
      "Suspension":"Adjustable inverted front fork and adjustable rear spring shock",
      "Brakes":"Two-piston hydraulic disc brakes; 203 mm rotors are described elsewhere on the product page",
      "Tires":"70/100-19 off-road tires",
      "Listed weight":"48.2 kg (106 lb)",
      "Recommended rider height":"5 ft 5 in–6 ft 5 in; no geometry chart or saddle-height range listed",
      "Maximum payload":"150 kg (330 lb)",
      "Charging":"67.2V 3A charger; seller lists 6–12 hours"
    },
    "source":"https://ekxbike.com/products/ekx-x21-max-electric-dirt-bike?variant=46552269914299",
    "sourceLinks":[
      {"label":"X21 Max manual and assembly guide","url":"https://ekxbike.com/pages/user-guides"},
      {"label":"Warranty terms","url":"https://ekxbike.com/pages/warranty-policy"},
      {"label":"Returns and FAQ","url":"https://ekxbike.com/pages/frequently-asked-questions"}
    ],
    "evidence":"Manufacturer specification evaluation; exact US variant checkout observation; no Bike Tested riding, speed or range test",
    "sections":[
      ["Built around big power and rough ground","The X21 Max is sold as an electric dirt bike, and its configuration reads that way: 19-inch off-road tires, full suspension, a 3,000W rated motor and an 8,000W peak claim. EKX also lists up to 240 N·m of torque, two-piston hydraulic disc brakes and a 330 lb maximum payload. Those headline figures make it an appealing option for a rider who has suitable private or otherwise permitted routes and wants a purpose-built off-road machine. They do not tell us how it rides; Bike Tested has not measured its speed, range, braking or handling."],
      ["Check fit and controls before ordering","EKX gives a recommended rider-height range of 5 ft 5 in to 6 ft 5 in, but does not publish a frame-geometry chart or saddle-height range on the selected listing. Treat that height band as an initial filter, then check reach, stand-over, control access and stopping position on the exact build. At 106 lb, the X21 Max also needs a storage and transport plan that does not depend on lifting it repeatedly. The battery is removable, which makes charging away from the bike easier; it does not make the complete bike lighter to maneuver. The page lists a seven-speed transmission and mentions pedal-assist levels on the display, but does not identify a torque or cadence sensor or explain the pedal-assist behavior. Ask EKX to confirm those details if pedaling is part of your intended use."],
      ["Confirm where it can be used and what ownership costs","EKX's FAQ describes the X21 Max as street legal, but its product page lists a 3,000W rated motor and a top speed of up to 60 mph. Do not assume that seller wording establishes the vehicle class, registration, equipment or road and trail access rules where you live. Check with the relevant local authority and use the X21 Max manual and assembly guide for setup. EKX lists a one-year limited warranty; original-battery coverage ends at one year or 300 charging cycles, whichever comes first, subject to its terms, and common wear items such as tires, brake pads and chains are excluded. Its return FAQ limits a full buyer-remorse refund to a new bike in its factory packaging with under 10 odometer miles, and lists $150–$250 return shipping plus a 10–15% restocking fee. Read the warranty terms before ordering. The October 23 checkout observation applies only to the US 8000W / 60V 30Ah variant, before shipping and tax." ]
    ],
    "publishedOn":"2026-10-23",
    "updatedOn":"2026-10-23",
    "specsCheckedOn":"2026-10-23",
    "faqs":[
      ["How fast and how far does the EKX X21 Max go?","EKX lists a top speed of up to 60 mph and a range of up to 60 miles. One product image caption says 55 miles, so the manufacturer's own page is inconsistent. These are seller claims, not Bike Tested measurements; actual distance and speed depend on use and conditions."],
      ["How heavy is the X21 Max, and who does it fit?","EKX lists the bike at 48.2 kg (106 lb) and recommends rider heights from 5 ft 5 in to 6 ft 5 in. The product page does not provide a geometry chart or saddle-height range. Confirm reach, stand-over and control access on the exact build, and plan for ground-level storage."],
      ["Is the EKX X21 Max street legal?","EKX's FAQ describes the X21 Max as street legal, while the product listing gives a 3,000W rated motor and a top speed of up to 60 mph. That seller statement does not establish the vehicle class or permissions in every location. Confirm local registration, equipment and road or trail access requirements before riding."],
      ["Does the X21 Max use a torque or cadence sensor?","The selected product listing mentions pedal-assist levels on its display and a seven-speed transmission, but does not identify a torque or cadence sensor or explain how pedal assist behaves. Ask EKX to confirm the exact controls and assist setup for the US configuration before relying on it for a particular riding style."]
    ],
    "relatedReviews":[
      {"slug":"hiknight-h2-pro-off-road-ebike","reason":"If you want a conventional 26 × 4-inch fat-tire setup with a lower seller-listed top speed, compare our HiKNiGHT H2 Pro review; its local classification and access still need checking."}
    ],
    "price":{"amountMinor":194900,"currency":"USD","region":"US","variantId":"46552269914299","variantLabel":"8000W(Peak) / 60V 30Ah / United States","source":"https://ekxbike.com/products/ekx-x21-max-electric-dirt-bike?variant=46552269914299","checkedOn":"2026-10-23","isSalePrice":true},
    "eligibility":{"status":"eligible","variantId":"46552269914299","evidence":"docs/evidence/ekx-x21-max-electric-dirt-bike.md#checkout"},
    "checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"46552269914299","baseAmountMinor":194900,"discountMinor":15000,"afterAmountMinor":179900,"currency":"USD","checkedOn":"2026-10-23","exclusions":"Before shipping and tax; no address entered and no order placed."}
  },
  {
    "slug":"leoout-t85-electric-scooter",
    "brand":"leoout",
    "name":"Leoout T85 Electric Scooter",
    "model":"T85",
    "image":"/images/products/leoout-t85-electric-scooter.webp",
    "imageAlt":"Black and gold Leoout T85 electric scooter with the seat-equipped configuration",
    "imageWidth":1200,
    "imageHeight":1200,
    "category":"electric-mobility",
    "use":"private",
    "label":"For permitted off-road routes",
    "headline":"A dual-drive scooter with an 85 km/h claim.",
    "description":"The T85 pairs a seller-listed 5,600W dual-drive system with 11-inch off-road tires, hydraulic brakes and a seat-equipped version. Leoout lists an 85 km/h top speed and says its factory default speed limit is 17 mph.",
    "verdict":"We would consider the Leoout T85 for an experienced rider who has already confirmed a suitable, permitted route and has the space to store a substantial scooter. Its published equipment list includes 11-inch off-road tires, hydraulic brakes, dual shock absorbers, NFC unlocking and a seat-equipped option. The listing's 85 km/h top-speed claim and much lower 17 mph factory default limit need clarification before purchase. Battery capacity, vehicle weight and dimensions are also missing, which makes it difficult to plan range, transport and storage. Read the short warranty and restrictive return terms alongside the hardware.",
    "strengths":[
      "The listing combines 11-inch off-road tires, dual shock absorbers and hydraulic brakes in a route-focused package.",
      "A seat-equipped configuration is offered, and the product page lists NFC unlocking.",
      "Leoout claims 5,600W across dual drive motors and a range of 80–100 km; these are manufacturer claims, not Bike Tested measurements.",
      "SEBASTIANBASSOL was accepted on the exact Scooter with Seat variant, lowering its item amount by $100 at checkout."
    ],
    "tradeoffs":[
      "Leoout lists up to 85 km/h but says the factory default speed limit is 17 mph; the selected page does not explain the modes or conditions behind those figures.",
      "The listing does not specify battery capacity, scooter weight, dimensions or a charging time, limiting route, fit and storage planning.",
      "The 80–100 km range claim has no stated test conditions. The store also describes city routes as well as off-road riding, so verify local access for the exact scooter before choosing a route.",
      "Leoout's US/Europe limited warranty lasts six months for the original online-store purchaser and excludes normal wear and several other conditions.",
      "The return policy says returns within 30 days are limited to quality issues; it lists $300 shipping and a $250 restocking fee for a scooter returned with wear."
    ],
    "specs":{
      "Drive system":"5,600W dual-drive motors (manufacturer-listed; output not independently measured)",
      "Battery":"Capacity not listed on the selected product page",
      "Claimed top speed":"Up to 85 km/h; Leoout says the factory default speed limit is 17 mph",
      "Claimed range":"80–100 km (manufacturer-listed; test conditions not stated)",
      "Tires":"11-inch off-road tires",
      "Suspension":"Dual shock absorbers (manufacturer-listed)",
      "Brakes":"Hydraulic brake system (manufacturer-listed)",
      "Maximum load":"330 lb (manufacturer-listed)",
      "Access":"NFC unlocking (manufacturer-listed)",
      "Selected version":"Scooter with Seat"
    },
    "source":"https://www.leoout.com/products/leoout-t85?variant=53358973976889",
    "sourceLinks":[
      {"label":"Warranty information","url":"https://www.leoout.com/pages/warranty-information"},
      {"label":"Return and refund terms","url":"https://www.leoout.com/pages/shipping-policy-1"},
      {"label":"Shipping policy","url":"https://www.leoout.com/pages/shipping-policy"}
    ],
    "evidence":"Manufacturer-specification editorial evaluation; exact US variant checkout observation; no Bike Tested ride, speed or range test",
    "sections":[
      ["A route-specific scooter, not a generic commuter","Leoout presents the T85 as an off-road scooter but also refers to city riding. The specification sheet lists dual drive motors, 11-inch off-road tires, hydraulic brakes, dual shocks and an NFC display. That is a distinct setup from a compact last-mile scooter. We would shortlist it only after identifying where this exact model can be used and where it can be stored. Bike Tested has not ridden it or measured its braking, acceleration, handling or range."],
      ["Resolve speed and battery questions first","The product page lists a maximum speed of 85 km/h and separately says the factory default limit is 17 mph. It does not explain which setting produces the higher figure or how the riding modes work. Ask Leoout to clarify the delivered setting and the equipment needed to change it; do not treat the headline speed as a verified riding result. The same page advertises 80–100 km of range without explaining its test conditions, and it does not state battery capacity. Get the battery specification and a realistic range estimate for your route before relying on the number."],
      ["Plan for missing fit and ownership details","The selected listing does not provide the scooter's weight, dimensions or charging time. Those omissions matter if you need to carry it, fit it into a lift or vehicle, or charge it away from home. Leoout lists a 330 lb maximum load and offers a seat-equipped version, but gives no seat-height or cockpit-fit measurements on the selected page. Measure the intended storage space and ask the seller for the missing specifications before ordering."],
      ["Read the support terms before you buy","Leoout's limited warranty covers eligible material and workmanship defects for six months for an original owner who bought through its online store in the US or Europe; the policy excludes normal wear, consumables, water damage and several other causes. Its return page says the 30-day return window is limited to quality issues. It also lists $300 shipping and a $250 restocking fee when a returned scooter shows wear. Read the current written terms and confirm support for your location before making a high-output scooter your regular transport." ]
    ],
    "publishedOn":"2026-10-23",
    "updatedOn":"2026-10-23",
    "specsCheckedOn":"2026-10-23",
    "faqs":[
      ["How far does the Leoout T85 travel on a charge?","Leoout lists an 80–100 km range but does not state the test conditions on the selected product page, and it does not list battery capacity there. This is a seller claim, not a Bike Tested range measurement. Ask for the battery specification and plan around your load, speed, route and conditions."],
      ["How fast is the Leoout T85?","The product page lists a top speed of up to 85 km/h and also says the factory default speed limit is 17 mph. It does not explain the settings behind those figures. Confirm the delivered limit and mode behavior with Leoout; Bike Tested has not measured the scooter's speed."],
      ["Does the Leoout T85 fold for storage?","The selected product page does not state whether the T85 folds or provide folded dimensions. Ask Leoout for the vehicle dimensions and a storage or transport guide before relying on a car trunk, lift or small storage space."],
      ["What warranty and return terms apply to the Leoout T85?","Leoout's limited warranty is six months for the original owner who bought from its online store in the US or Europe, subject to its terms and exclusions. Its return policy limits the 30-day window to quality issues and lists $300 shipping plus a $250 restocking fee for a returned scooter with wear. Read the current terms before ordering."]
    ],
    "relatedReviews":[
      {"slug":"ausom-gosoul-2-electric-scooter","reason":"If you are comparing scooter formats and want a lower seller-listed top speed with stated weight and folded dimensions, see our Ausom Gosoul 2 review; Ausom limits that model to private-property use."}
    ],
    "price":{"amountMinor":129999,"currency":"USD","region":"US","variantId":"53358973976889","variantLabel":"Scooter with Seat","source":"https://www.leoout.com/products/leoout-t85?variant=53358973976889","checkedOn":"2026-10-23","isSalePrice":true},
    "eligibility":{"status":"eligible","variantId":"53358973976889","evidence":"docs/evidence/leoout-t85-electric-scooter.md#checkout"},
    "checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"53358973976889","baseAmountMinor":129999,"discountMinor":10000,"afterAmountMinor":119999,"currency":"USD","checkedOn":"2026-10-23","exclusions":"shipping and destination-based charges not established because no delivery address was entered; no order placed."}
  },
  {
    "slug":"voltrover-m5-electric-dirt-bike",
    "brand":"voltrover",
    "name":"Voltrover M5 48V21Ah Electric Dirt Bike",
    "model":"M5 48V21Ah",
    "image":"/images/products/voltrover-m5-electric-dirt-bike.webp",
    "imageAlt":"Black and orange Voltrover M5 48V21Ah electric dirt bike, side view",
    "imageWidth":1200,
    "imageHeight":1200,
    "category":"electric-mobility",
    "use":"private",
    "label":"For youth-focused off-road riding",
    "headline":"A 37 mph claim, with fit and range questions.",
    "description":"Voltrover's M5 pairs a 48V 21Ah battery with a seller-listed 2,000W motor and up-to-37 mph claim. The brand positions it for teen riders and off-road routes.",
    "verdict":"We would consider the M5 for a teen rider whose family has already identified an appropriate off-road place to ride and space to store the bike. Voltrover lists a 48V 21Ah battery, a 2,000W motor, three gear settings and a top speed of up to 37 mph. That speed claim makes fit, supervision and riding area central; the seller's own refund policy says the bike is for off-road use only. Its 32M range notation is unexplained, and basic fit measurements are missing. The store code was accepted on this exact variant, but Voltrover's product page also displays a separate Amazon offer at $999. Compare the exact listing and confirm the written warranty and return terms before choosing where to buy.",
    "strengths":[
      "Voltrover specifies a 48V 21Ah lithium battery and lists a 2,000W motor.",
      "Three gear settings are listed, though the page does not state each setting's speed limit.",
      "SEBASTIANBASSOL was accepted on the exact M5 48V21Ah variant at Voltrover's store."
    ],
    "tradeoffs":[
      "The seller claims a top speed of up to 37 mph and says the bike is for off-road use only. Prioritize rider fit, supervision, protective equipment and an appropriate riding area.",
      "The page lists a maximum range of 32M without defining the unit or test conditions; Bike Tested did not measure range.",
      "The reviewed listing does not state the bike's weight, wheel size, seat height or charging time, so check fit, storage and transport details with Voltrover.",
      "The store advertises a two-year warranty, but coverage detail was not found in the checked policies. The refund policy also lists discounted products as non-returnable and names $300 return shipping plus a 10% restocking fee for customer-reason returns.",
      "The product page displays a separate $999 Amazon offer. We did not verify that listing or apply the Voltrover code there; compare the exact model, seller and support terms."
    ],
    "specs":{
      "Motor":"2,000W (manufacturer-listed)",
      "Battery":"48V, 21Ah lithium (manufacturer-listed)",
      "Claimed top speed":"Up to 37 mph (not measured by Bike Tested)",
      "Speed settings":"3 gear settings; speeds per setting are not listed",
      "Claimed maximum range":"32M (unit and test conditions not explained)",
      "Intended use":"Off-road only per Voltrover's refund policy",
      "Rider positioning":"Marketed for teens; the homepage says ages 14+",
      "Fit details":"Weight, wheel size and seat height are not listed on the reviewed page"
    },
    "source":"https://voltrover.shop/products/voltrover-electric-bike-m5?variant=47402576675064",
    "sourceLinks":[
      {"label":"Returns and refund policy","url":"https://voltrover.shop/policies/refund-policy"},
      {"label":"Shipping policy","url":"https://voltrover.shop/policies/shipping-policy"}
    ],
    "evidence":"Manufacturer-specification editorial evaluation; exact variant checkout observation; seller-hosted customer comments reviewed, not independently verified; no Bike Tested ride, speed or range test",
    "sections":[
      ["An off-road bike with youth-oriented marketing","Voltrover markets the M5 to teens and young riders, and its refund policy says the bike is for off-road use only. The listed 37 mph top speed makes the question less about finding the highest motor figure and more about who will ride, where, and with what supervision. Confirm fit, protective equipment and access for the exact vehicle before considering a route. Bike Tested has not ridden the M5 or measured its speed."],
      ["Ask what the range figure means","The product page labels its maximum range as 32M but does not define the unit or testing conditions. The 48V 21Ah battery is useful context, not a range guarantee. Ask Voltrover for a realistic estimate at the intended rider weight, speed and terrain, and for the charging time before planning around the headline."],
      ["Check fit and maintenance details","The reviewed listing does not give the bike's weight, wheel size, seat height or charging time. Those details matter for a young rider as well as for transport and storage. The seller-hosted review section includes individual reports of charging or motor problems, as well as one report of a warranty motor replacement. These are buyer accounts, not a measured failure or service rate; ask about diagnostic support and replacement parts for your region."],
      ["Read the return terms before using the code","Voltrover advertises a two-year warranty in its store banner, but the checked policy pages do not explain its coverage. Its refund policy begins with a 30-day period, then says returns are limited to quality issues and lists sale or discounted products among non-returnable items. This M5 is listed at a sale price. The same policy lists $300 return shipping and a 10% restocking fee for customer-reason returns, so ask the seller how the terms apply to this exact sale unit."],
      ["Compare the store offer with the linked Amazon option","The Voltrover cart accepted SEBASTIANBASSOL on the $1,299.00 sale price and showed $129.90 off, for an estimated $1,169.10 total before taxes and shipping. The product page also advertises an Amazon option for $999. We did not verify that retailer listing or test the Bike Tested code there; compare the exact version and seller terms before choosing a channel."]
    ],
    "publishedOn":"2026-10-23",
    "updatedOn":"2026-10-23",
    "specsCheckedOn":"2026-10-23",
    "faqs":[
      ["How fast is the Voltrover M5?","Voltrover lists a top speed of up to 37 mph and three gear settings but does not state the speed for each setting. This is a manufacturer claim, not a Bike Tested measurement. Confirm the delivered settings and intended rider fit before use."],
      ["What range does the Voltrover M5 get?","The product page lists a maximum range of 32M but does not define the unit or test conditions. The 48V 21Ah battery specification does not establish real-world range. Ask for an estimate for the rider, speed and terrain you expect."],
      ["Is the Voltrover M5 intended for public roads?","Voltrover's refund policy describes its electric dirt bikes as off-road only. Check access for your exact vehicle and intended location; the Bike Tested review does not make a legal classification."],
      ["Does the Voltrover code work on the M5?","SEBASTIANBASSOL was accepted for the M5 48V21Ah variant (47402576675064) in Voltrover's cart on October 23, 2026. It reduced the $1,299.00 sale price by $129.90 to an estimated $1,169.10 total before taxes and shipping. Other products and variants were not tested."],
      ["What are the M5 warranty and return terms?","Voltrover advertises a two-year warranty in its store banner, but the checked pages do not detail the coverage. Its refund policy lists discounted products among non-returnable items and says returns are limited to quality issues; customer-reason returns can involve $300 shipping and a 10% restocking fee. Confirm current written terms for this sale listing before buying."]
    ],
    "relatedReviews":[
      {"slug":"ekx-x21-max-electric-dirt-bike","reason":"Compare the EKX X21 Max if you are considering another electric dirt bike with a larger seller-listed battery and different motor claims; intended rider fit and access still need to be checked."}
    ],
    "price":{"amountMinor":129900,"currency":"USD","region":"US","variantId":"47402576675064","variantLabel":"M5 48V21Ah","source":"https://voltrover.shop/products/voltrover-electric-bike-m5?variant=47402576675064","checkedOn":"2026-10-23","isSalePrice":true},
    "eligibility":{"status":"eligible","variantId":"47402576675064","evidence":"docs/evidence/voltrover-m5-electric-dirt-bike.md#checkout-observation"},
    "checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"47402576675064","baseAmountMinor":129900,"discountMinor":12990,"afterAmountMinor":116910,"currency":"USD","checkedOn":"2026-10-23","exclusions":"taxes and shipping remained uncalculated because no delivery address was entered; no order placed."}
  },
  {
    "slug":"young-electric-tire-press-2-ebike-rack",
    "brand":"young-electric",
    "name":"Young Electric Tire-Press 2 E-Bike Rack with Ramp and Brake Light",
    "model":"Tire-Press 2, item 10104186",
    "image":"/images/products/young-electric-tire-press-2-ebike-rack.webp",
    "imageAlt":"Young Electric Tire-Press 2 two-bike hitch rack with ramp, brake lights and lock",
    "imageWidth":1200,
    "imageHeight":1200,
    "category":"components",
    "use":"utility",
    "label":"For transporting two e-bikes",
    "headline":"A loading ramp, with a 90-pound handling question.",
    "description":"A two-bike tire-clamp hitch rack with a ramp, folding trays and a seller-listed 200 lb load capacity. At 90 lb before bikes, it needs a realistic vehicle, storage and handling plan.",
    "verdict":"We would consider the Tire-Press 2 for riders moving two heavy e-bikes who have a 2-inch hitch and can manage a 90 lb carrier. Its wheel trays, tire clamps and loading ramp address the bike-loading step, and Young Electric lists support for tires up to 5 inches wide. The trade-offs are physical: the rack does not tilt, measures 44 × 57 × 16.5 inches, and the seller limits RV use to 160 lb. Match the rack and bike setup with the vehicle and hitch instructions before buying. The code was accepted for the selected Missouri Warehouse / with Lock and Brake Light configuration, though one product-page bullet says the brake light is sold separately; confirm the included parts.",
    "strengths":[
      "Two wheel trays, tire clamps and front-wheel holders are designed for two bikes without touching their frames; the seller lists tires up to 5 inches wide.",
      "An included ramp and folding trays reduce lifting at the bike-loading step; the official manual shows the assembly and loading sequence.",
      "Young Electric lists a 200 lb maximum load and a lower 160 lb maximum for RV use.",
      "SEBASTIANBASSOL was accepted for the exact selected configuration at checkout."
    ],
    "tradeoffs":[
      "The product page lists the rack at 90 lb. Its 44 × 57 × 16.5 inch dimensions are substantial, and no folded dimensions are given.",
      "The seller's specification says the rack does not tilt. Check rear-hatch access with the rack loaded rather than assuming the tailgate will clear.",
      "It requires a 2-inch receiver. Check the vehicle and hitch instructions against the carrier and loaded-bike setup; ask Young Electric how its 200 lb and 160 lb limits should be applied.",
      "The page title and selected option say 'with Lock and Brake Light,' while a feature bullet says the brake light is sold separately. Confirm the exact box contents for this SKU.",
      "The manual recommends 5 mm and 6 mm Allen keys and 13 mm, 17 mm and 24 mm wrenches; it labels these assembly tools as not included.",
      "The current personal-preference return policy allows an unopened request within 3 calendar days and deducts 35% of the purchase price plus a $35 return-label fee. For opened or installed items, it caps the refund at 50% before a separate $35 label fee."
    ],
    "specs":{
      "Selected configuration":"With Lock and Brake Light / Missouri Warehouse",
      "Variant / SKU":"45170442535120 / 10104186BL-M",
      "Bike capacity":"2 bikes (manufacturer-listed)",
      "Maximum load":"200 lb; 160 lb maximum for RV use (manufacturer-listed)",
      "Rack weight":"90 lb (seller-listed)",
      "Maximum tire width":"5 inches (manufacturer-listed)",
      "Hitch receiver":"2 inches",
      "Tilt / fold":"Does not tilt; folds",
      "Dimensions":"44 × 57 × 16.5 inches (official manual)",
      "Materials":"Alloy steel and aluminum (seller-listed)",
      "Warranty":"One-year limited warranty under the current store policy for eligible new products"
    },
    "source":"https://youngelectricbikes.com/products/200lbs-capacity-tire-clamp-e-bike-rack-with-ramp-adn-brake-light?variant=45170442535120",
    "sourceLinks":[
      {"label":"Tire-Press 2 user manual","url":"https://cdn.shopify.com/s/files/1/0614/3262/7408/files/10104186_user_manual.pdf?v=1767937350"},
      {"label":"Shipping policy","url":"https://youngelectricbikes.com/policies/shipping-policy"},
      {"label":"Return and warranty policy","url":"https://youngelectricbikes.com/policies/refund-policy"}
    ],
    "evidence":"Manufacturer-specification editorial evaluation; official assembly manual reviewed; exact-variant checkout observation; no installation or loading test",
    "sections":[
      ["The ramp helps at the bike-loading step","The Tire-Press 2 pairs two wheel trays with tire clamps and front-wheel holders. Young Electric says its design avoids frame contact and accepts tires up to 5 inches wide. Its manual shows rolling a bike up the ramp, positioning the wheel and securing the tire clamp. We have not loaded a bike on this rack, so check tire width, fenders, wheelbase and the seller's instructions for your exact bike before relying on fit."],
      ["Count the rack before checking the load","Young Electric lists a 90 lb rack weight and a 200 lb maximum load, with a separate 160 lb maximum for RV use. The product page does not explain how the load figures should be applied to every vehicle and installation. Confirm the carrier's rating with the seller and compare the whole setup with the vehicle and hitch maker's instructions. A 2-inch receiver is required."],
      ["Plan around the rack's size and movement","The official manual lists dimensions of 44 × 57 × 16.5 inches. The product page says it folds but does not give folded dimensions, and its specification table says it does not tilt. Measure the storage space and check whether the loaded rack will block a hatch. Assembly calls for 5 mm and 6 mm Allen keys plus 13 mm, 17 mm and 24 mm wrenches, which the manual marks as not included."],
      ["Confirm the light, shipping and return terms","The current product option selector reads 'with Lock and Brake Light,' and the product title includes a brake light; a feature bullet also says brake-light compatibility is optional and the light is sold separately. The hero image shows the rack, two lamps and a lock. Confirm the exact contents of SKU 10104186BL-M before ordering. The shipping policy lists free standard shipping for U.S. orders over $99, while the product page says shipping is calculated at checkout; no address was entered to verify a destination rate. The current return policy gives just 3 calendar days for unopened personal-preference requests, with a 35% deduction plus $35 return-label fee; opened or installed items have a 50% refund cap before that label fee. It also describes a one-year limited warranty for eligible new products."],
      ["What the Bike Tested code changed","At checkout, SEBASTIANBASSOL reduced the $669.99 sale price for this exact configuration by $15, to a $654.99 item subtotal. Shipping remained uncalculated without an address; checkout displayed an estimated $43.39 tax before address details. No order was placed. Other Young Electric products and variants were not tested."
      ]
    ],
    "publishedOn":"2026-10-23",
    "updatedOn":"2026-10-23",
    "specsCheckedOn":"2026-10-23",
    "faqs":[
      ["How many bikes can the Tire-Press 2 carry?","Young Electric's product specifications list two bikes and a maximum load of 200 lb, reduced to 160 lb for RV use. Confirm with the seller how those limits apply to your vehicle and use, then check both the bike and hitch maker's ratings."],
      ["Will the rack fit a fat-tire e-bike?","Young Electric lists a maximum tire width of 5 inches. Check the width and shape of your exact tire, fender clearance and wheelbase against the carrier instructions; this review does not include a physical fit test."],
      ["Does the selected version include brake lights and a lock?","The selected option is labeled 'with Lock and Brake Light' and the product image shows both, but a feature bullet says brake-light compatibility is optional and sold separately. Ask the seller to confirm the package for SKU 10104186BL-M."],
      ["Does SEBASTIANBASSOL work on this rack?","The code was accepted at checkout for variant 45170442535120, SKU 10104186BL-M, selected as Missouri Warehouse / with Lock and Brake Light, on October 23, 2026. It reduced the $669.99 sale price by $15 to a $654.99 item subtotal before delivery charges. No address was entered or order placed; other variants and products were not tested."],
      ["What should I know about returns and warranty?","The current store policy allows unopened personal-preference return requests within 3 calendar days, with a 35% deduction and $35 return-label fee. For opened or installed items, it caps the refund at 50% before a separate $35 label fee. The policy describes a one-year limited warranty for eligible new products; review the current terms before ordering."]
    ],
    "price":{"amountMinor":66999,"currency":"USD","region":"US","variantId":"45170442535120","variantLabel":"Missouri Warehouse / with Lock and Brake Light","source":"https://youngelectricbikes.com/products/200lbs-capacity-tire-clamp-e-bike-rack-with-ramp-adn-brake-light?variant=45170442535120","checkedOn":"2026-10-23","isSalePrice":true},
    "eligibility":{"status":"eligible","variantId":"45170442535120","evidence":"docs/evidence/young-electric-tire-press-2-ebike-rack.md#checkout-observation"},
    "checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"45170442535120","baseAmountMinor":66999,"discountMinor":1500,"afterAmountMinor":65499,"currency":"USD","checkedOn":"2026-10-23","exclusions":"Shipping was not calculated because no address was entered; checkout displayed a $43.39 estimated tax before address details; no order placed."}
  },
  {
    "slug": "gebike-g01-compact-folding-electric-bike",
    "brand": "gebike",
    "name": "GEBIKE G01 Compact Folding Electric Bike",
    "model": "G01 Gray / Standard Edition (EU)",
    "image": "/images/products/gebike-g01-compact-folding-electric-bike.webp",
    "imageAlt": "Gray GEBIKE G01 compact folding electric bike with orange accents, 14-inch wheels and black saddle",
    "imageWidth": 1200,
    "imageHeight": 1200,
    "category": "electric-bikes",
    "use": "commute",
    "label": "For compact city commutes",
    "headline": "A small-wheel folder with fit and storage details to check.",
    "description": "GEBIKE lists 14 × 2.1-inch tires, a 36V 13.5Ah battery, and a 52 lb complete-bike weight. The seller calls the G01 compact and folding but does not publish a folded footprint.",
    "verdict": "We recommend considering the G01 for short city trips when a compact folding format solves a real storage problem and you can park it without carrying it far. Its 36V 13.5Ah battery, 14 × 2.1-inch wheels and advertised 250W rated motor suit a modest utility brief on paper, with a manufacturer-listed 30–70 km range. At 23.7 kg / 52 lb it is too heavy for many stair-carry routines, and the listing gives no folded dimensions or rider-height range. Get those measurements and check the one-size fit before ordering; GEBIKE’s €10 code was tested on the G03 only, so exact G01 eligibility and sale-price stacking remain unconfirmed.",
    "strengths": [
      "The 14 × 2.1-inch wheels and folding format give the G01 a smaller-format option to compare for city storage and short trips; ask for its exact folded footprint before measuring a space.",
      "The seller lists a 36V 13.5Ah battery, 42V 2A charger and five-to-six-hour charge time, making the charging arrangement straightforward to plan.",
      "A 30–33.5-inch saddle-height range, 120 kg maximum load and overall dimensions give buyers useful starting points for fit and storage checks.",
      "GEBIKE describes a front shock and soft-tail rear suspension, and lists a 250W rated motor with 750W peak output."
    ],
    "tradeoffs": [
      "At a listed 23.7 kg (52 lb), the G01 may be awkward to carry up stairs or lift into a car even when its folding design helps with storage.",
      "The page does not give the folded length, width and height or a rider-height range. It lists a 30–33.5-inch saddle height; check reach and folded clearance with the seller before buying.",
      "GEBIKE’s dimension graphic gives an inconsistent width conversion, while its technical table lists 120 × 58 × 100 cm. Confirm measurements if a doorway, vehicle or storage space is tight.",
      "The advertised 30–70 km range depends on assist setting, rider weight, terrain and wind; Bike Tested has not measured the G01’s range.",
      "The listing markets the 250W / 25 km/h configuration as EU/UK compliant, but destination-specific paperwork and local rules still need to be checked. The page also leaves the assist-sensor type and drivetrain details unspecified.",
      "The GEBIKE reader code is reported as €10 off, but the recorded checkout observation is for the G03 Gray / Standard only. G01 eligibility and stacking with its sale price are unresolved; do not assume a discounted G01 total."
    ],
    "specs": {
      "Configuration / SKU": "Gray / Standard Edition (EU); variant 52002247475521; SKU E001-G01-G-EU",
      "Motor": "250 W rated / 750 W peak (manufacturer-listed)",
      "Top speed": "25 km/h (15.5 mph; manufacturer-listed)",
      "Battery": "36 V, 13.5 Ah removable (manufacturer-listed)",
      "Claimed range": "30–70 km (18–43 mi), depending on pedal-assist setting, rider weight, terrain and wind (seller estimate)",
      "Wheels / tires": "14 × 2.1 in (manufacturer-listed)",
      "Bike weight": "23.7 kg / 52 lb (manufacturer-listed)",
      "Maximum load": "120 kg / 265 lb (manufacturer-listed)",
      "Saddle height": "30–33.5 in / 76.2–85.1 cm; no rider-height range listed",
      "Overall dimensions": "47.24 × 22.83 × 39.37 in / 120 × 58 × 100 cm (manufacturer-listed; dimension graphic conflicts on width conversion)",
      "Folded dimensions": "Not published on the official product page",
      "Assist / drivetrain": "Pedal-assist range claim; assist-sensor type and drivetrain details not specified",
      "Suspension": "Front shock and soft-tail rear suspension (seller-described)",
      "Charging": "42 V, 2 A charger; 5–6 hours (manufacturer-listed)",
      "Water rating": "IPX4 (seller-listed)",
      "Warranty": "Two-year limited coverage advertised; confirm written terms for your destination"
    },
    "source": "https://gebikeglobal.com/products/g01-compact-folding-electric-bike?variant=52002247475521",
    "sourceLinks": [
      {
        "label": "GEBIKE shipping policy",
        "url": "https://gebikeglobal.com/policies/shipping-policy"
      },
      {
        "label": "GEBIKE return and refund policy",
        "url": "https://gebikeglobal.com/policies/refund-policy"
      }
    ],
    "evidence": "Manufacturer-specification editorial evaluation; exact EU Gray / Standard Edition feed variant and official listing price checked; G01 code eligibility and sale stacking untested; no Bike Tested ride or range test",
    "sections": [
      [
        "A compact format needs a real folded measurement",
        "GEBIKE markets the G01 as a compact folding bike and publishes overall dimensions of 120 × 58 × 100 cm, but the product page does not provide a folded footprint. Its measurement graphic also pairs a 22.8-inch width with an inconsistent 7.91 cm conversion; the technical table lists 58 cm. Before treating it as a closet, car or transit option, ask for the folded length, width and height and measure the tightest point on your storage route."
      ],
      [
        "Check the one-size fit at the saddle and bars",
        "The listing gives a saddle-height range of 30 to 33.5 inches and no rider-height chart. That range is useful, but it does not tell you whether the handlebar reach and standing position will suit you. The small 14-inch wheels make it a different-feeling option from a full-size commuter; confirm the cockpit position and how the bike behaves at the speeds and surfaces you expect to ride."
      ],
      [
        "Plan around the battery, not the top of the range band",
        "GEBIKE lists a 36V 13.5Ah battery, a 42V 2A charger and a five-to-six-hour charge time. The 30–70 km range is a seller estimate whose conditions include pedal-assist level, rider weight, terrain and wind. Plan for your complete return route with margin rather than treating 70 km as a dependable daily distance; we have not measured G01 range."
      ],
      [
        "Ask for the paperwork and service details for your area",
        "The product page lists 250W rated power, 750W peak output and a 25 km/h top speed, and markets the configuration as EU/UK compliant. Check the manual and conformity documents for the exact bike supplied to your destination, along with who can service its electrical system and what the two-year limited warranty covers. The page does not identify the assist sensor or drivetrain details."
      ],
      [
        "Confirm the G01 code before relying on a saving",
        "The Bike Tested partner roster reports `SEBASTIANBASSOL` for €10 off at GEBIKE. Our recorded checkout result applies only to the G03 Gray / Standard variant; we have not tested the code on the G01 or confirmed that it stacks with this G01 sale price. Ask GEBIKE to confirm the exact Gray / Standard EU variant at checkout. We show the listed €349.99 price and the code, without a lower after-code amount."
      ]
    ],
    "publishedOn": "2026-10-24",
    "updatedOn": "2026-10-24",
    "specsCheckedOn": "2026-10-24",
    "faqs": [
      [
        "What folded dimensions does the GEBIKE G01 have?",
        "GEBIKE describes the G01 as a compact folding bike and lists overall dimensions of 47.24 × 22.83 × 39.37 inches, but the official page does not give a folded footprint. Ask for folded length, width and height before checking a car, closet or transit space."
      ],
      [
        "How much does the GEBIKE G01 weigh?",
        "The seller lists the Gray / Standard Edition at 23.7 kg (52 lb). Folding can help with storage, but plan around the complete-bike weight if you need to carry it."
      ],
      [
        "What range does GEBIKE claim for the G01?",
        "The product page lists 30–70 km (about 18–43 miles), depending on pedal-assist level, rider weight, terrain and wind. This is a seller estimate, not a Bike Tested range measurement."
      ],
      [
        "What rider size does the G01 fit?",
        "GEBIKE lists a 30–33.5-inch saddle-height range but no rider-height chart. Check the handlebar reach and your riding position with the exact bike before ordering."
      ]
    ],
    "price": {
      "amountMinor": 34999,
      "currency": "EUR",
      "region": "EU",
      "variantId": "52002247475521",
      "variantLabel": "Gray / Standard Edition (EU)",
      "source": "https://gebikeglobal.com/products/g01-compact-folding-electric-bike?variant=52002247475521",
      "checkedOn": "2026-10-24",
      "isSalePrice": true
    },
    "eligibility": {
      "status": "unresolved",
      "variantId": "52002247475521",
      "evidence": "docs/evidence/gebike-g01-compact-folding-electric-bike.md#partner-offer"
    }
  },
  {
    "slug":"gebike-g03-city-commuter-ebike",
    "brand":"gebike",
    "name":"GEBIKE G03 City Commuter & Everyday E-Bike",
    "model":"G03, Gray / Standard",
    "image":"/images/products/gebike-g03-city-commuter-ebike.webp",
    "imageAlt":"Gray GEBIKE G03 step-through electric bicycle with front suspension and rear rack",
    "imageWidth":1200,
    "imageHeight":1200,
    "category":"electric-bikes",
    "use":"commute",
    "label":"For low-step everyday rides",
    "headline":"A low step-through, with 29 kg to move.",
    "description":"The G03 combines a step-through frame, removable 36V 13Ah battery, front suspension and rear rack. Its listed 29 kg weight matters when storing or carrying a city e-bike.",
    "verdict":"We would look at the G03 for low-step city or everyday rides when the removable battery and rear rack match your routine. Its 29 kg listed weight is a practical drawback: this is a large bike to carry up stairs or load into a car. GEBIKE lists a 36V 13Ah battery and range up to 88.5 km, but that distance is an ideal-condition claim rather than a measured result. Check frame fit, weight handling and the exact version's intended use before ordering.",
    "strengths":[
      "The low-step frame suits riders who prefer a lower opening when mounting and stopping; the seller positions this version for city and everyday use.",
      "GEBIKE lists a removable 36V 13Ah battery, front suspension, a rear rack, Shimano 7-speed gearing, mechanical disc brakes and an LED display for day-to-day errands.",
      "The product page gives a 120 kg maximum load, 29 kg bike weight and overall dimensions, which are useful for planning fit and storage.",
      "SEBASTIANBASSOL was accepted on the exact Gray / Standard G03 for €10 off at checkout."
    ],
    "tradeoffs":[
      "At 29 kg (63.9 lb), the G03 is heavy to carry indoors or lift onto a vehicle rack; its 1,730 mm length also needs real storage space.",
      "The stated range is up to 88.5 km under ideal pedal-assist conditions. The brand homepage rounds this to 89 km; neither figure is a Bike Tested range measurement.",
      "The product title calls this a City Commuter bike, its URL calls it a trekking model, and the homepage describes G03 as all-terrain. Ask the seller to confirm the intended use and exact equipment before buying; do not infer trail capability from the homepage label.",
      "The seller lists 250W rated power, up to 750W peak output and 25 km/h. Check the delivered model label and the rules for your destination rather than relying on the store's general road-use wording.",
      "The listing does not identify the pedal-assist sensor type or a local repair network. Ask how the assist responds and who can service the electrical system or source a replacement battery where you live.",
      "The current return policy makes the customer responsible for change-of-mind return shipping. It also allows a small handling fee for extended day-15-to-30 returns if the bike shows wear beyond normal inspection. Confirm the region-specific terms and warranty coverage."
    ],
    "specs":{
      "Configuration / SKU":"Gray / Standard; variant 51947256611137; SKU E001-G03-G",
      "Rated / peak motor":"250 W rated / up to 750 W peak (manufacturer-listed)",
      "Top speed":"25 km/h (manufacturer-listed)",
      "Battery":"36V 13Ah removable (manufacturer-listed)",
      "Maximum range":"Up to 88.5 km under ideal pedal-assist conditions (seller estimate)",
      "Maximum load":"120 kg / 264 lb (manufacturer-listed payload)",
      "Bike weight":"29 kg / 63.9 lb (manufacturer-listed)",
      "Assist behavior":"Pedal assist (seller-listed); sensor type not specified in the product details",
      "Frame and equipment":"Step-through frame; front suspension; rear rack; Shimano 7-speed gearing; mechanical disc brakes; LED display",
      "Dimensions":"1,730 × 750 × 1,135 mm (68.1 × 29.5 × 44.7 in)",
      "Water rating":"IPX4 (manufacturer-listed)",
      "Included / assembly":"Toolkit, two battery keys, zip ties, charger and manual; seller says some parts require assembly",
      "Shipping":"Seller advertises free shipping from an EU warehouse; destination charges not checked",
      "Warranty":"Product page advertises 2-year coverage; confirm the written terms for this variant"
    },
    "source":"https://gebikeglobal.com/products/gebikeglobal-g03-trekking-electric-bike?variant=51947256611137",
    "sourceLinks":[
      {"label":"GEBIKE shipping policy","url":"https://gebikeglobal.com/policies/shipping-policy"},
      {"label":"GEBIKE return and refund policy","url":"https://gebikeglobal.com/policies/refund-policy"},
      {"label":"GEBIKE official homepage","url":"https://gebikeglobal.com/"}
    ],
    "evidence":"Manufacturer-specification editorial evaluation; exact Gray / Standard variant and code observed in cart; no Bike Tested ride, range or road-use test",
    "sections":[
      ["A step-through that still weighs 29 kg","The G03's lower frame opening is its clearest fit-led feature. GEBIKE lists front suspension, a rear rack and an upright everyday position, but a frame style does not establish a comfortable fit. Its published overall dimensions are 1,730 × 750 × 1,135 mm; the listing does not give a rider-height range or a full geometry chart. At 29 kg, try the size and plan how you will move it between storage and the street."],
      ["Treat the range as a planning estimate","GEBIKE lists a removable 36V 13Ah battery and up to 88.5 km with pedal assist under ideal conditions. Its homepage rounds that figure to 89 km. Weather, route, rider and assistance settings change actual distance, and Bike Tested has not measured a G03 range. Use the figure as an optimistic comparison point, not as the length of a route you can count on."],
      ["Confirm which G03 this listing describes","The product title calls the bike a City Commuter, the product URL uses Trekking, and the homepage calls G03 an all-terrain model. The listing gives 250W rated power, up to 750W peak output and a 25 km/h top speed, but those figures do not establish the delivered bike's local classification or trail suitability. Ask GEBIKE to confirm the exact equipment and model labeling for your destination."],
      ["Check delivery, returns and warranty terms","The listing advertises free delivery from an EU warehouse in 3–7 days and displays a two-year warranty badge. The current return policy describes a 14-day withdrawal period for EU buyers and voluntary returns through day 30; customers pay change-of-mind return shipping, and a handling fee may apply during days 15–30 if the bike shows wear beyond normal inspection. The product's 30-day price-protection terms exclude coupons and personalized discounts. Review the written terms for your region before ordering."],
      ["What the GEBIKE code changed","The cart accepted SEBASTIANBASSOL for the Gray / Standard G03 variant (51947256611137; SKU E001-G03-G). It reduced the listed €599.99 item price by €10 to €589.99 before taxes and shipping. Checkout showed that delivery and tax are calculated later; no address was entered and no order was placed. Other G03 colors, bundles and GEBIKE products were not tested."]
    ],
    "publishedOn":"2026-10-23",
    "updatedOn":"2026-10-23",
    "specsCheckedOn":"2026-10-23",
    "faqs":[
      ["Is the G03 a step-through e-bike?","Yes. The product page shows and describes a low-step frame. Check reach, saddle adjustment, control access and the actual bike dimensions to determine personal fit; the listing does not supply a rider-height range."],
      ["How heavy is the GEBIKE G03?","GEBIKE lists the G03 at 29 kg (63.9 lb). Consider whether you can move that weight through your home, up stairs or onto your vehicle rack."],
      ["What range does GEBIKE claim for the G03?","The product page lists up to 88.5 km (55 miles) under ideal pedal-assist conditions; the homepage rounds this to 89 km. These are seller estimates, not Bike Tested measurements, and real range depends on the route, rider, weather and assistance setting."],
      ["Can the G03 battery be removed?","GEBIKE lists a removable 36V 13Ah battery for the Gray / Standard G03. The product page also lists a 42V 2A charger and a 6–7 hour charge time."],
      ["Does the G03 include a rear rack and what is its load limit?","The seller describes an integrated rear rack and lists a maximum payload of 120 kg (264 lb) for the bike. Confirm how rider and cargo weight count toward that limit and check the rack's own instructions before loading it."]
    ],
    "price":{"amountMinor":59999,"currency":"EUR","region":"DE","variantId":"51947256611137","variantLabel":"Gray / Standard","source":"https://gebikeglobal.com/products/gebikeglobal-g03-trekking-electric-bike?variant=51947256611137","checkedOn":"2026-10-23","isSalePrice":true},
    "eligibility":{"status":"eligible","variantId":"51947256611137","evidence":"docs/evidence/gebike-g03-city-commuter-ebike.md#checkout-observation"},
    "checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"51947256611137","baseAmountMinor":59999,"discountMinor":1000,"afterAmountMinor":58999,"currency":"EUR","checkedOn":"2026-10-23","exclusions":"Taxes and shipping were shown as calculated at checkout; no delivery address was entered and no order was placed. Result applies only to Gray / Standard SKU E001-G03-G."}
  },
  {
    "slug":"ancheer-hummer-electric-bike",
    "brand":"ancheer",
    "name":"ANCHEER Hummer Electric Bike",
    "model":"Hummer, Blue / One Size",
    "image":"/images/products/ancheer-hummer-electric-bike.webp",
    "imageAlt":"Blue ANCHEER Hummer electric bicycle, Blue / One Size configuration",
    "imageWidth":1200,
    "imageHeight":1200,
    "category":"electric-bikes",
    "use":"recreation",
    "label":"For everyday rides and light off-road routes",
    "headline":"A removable 499 Wh battery, with fit to verify.",
    "description":"The Hummer adds Shimano 21-speed gearing, a lockable fork and a 750W peak claim. Its Blue / One Size frame needs a careful fit check.",
    "verdict":"We would shortlist the ANCHEER Hummer for a rider who wants a removable 499 Wh battery, a lockable fork and conventional 21-speed gearing for everyday trips and the occasional smooth dirt path. The 27.5 × 2.1-inch tires are not a substitute for a trail-specific setup, and the One Size listing leaves rider fit unclear. Ask Ancheer to confirm reach and sizing before ordering. Its advertised 50-mile range and 22 mph top speed are seller claims, not Bike Tested measurements; check local e-bike rules for the exact model and route.",
    "strengths":[
      "The seller lists a removable 48V 10.4Ah battery (499 Wh), which can be taken indoors for charging.",
      "A 750W peak rear hub motor and 73 Nm torque claim are paired with five pedal-assist levels, a throttle and cruise control.",
      "The lockable suspension fork, 27.5 × 2.1-inch tires, dual mechanical disc brakes and Shimano 21-speed drivetrain give the Hummer a familiar bicycle-style equipment mix.",
      "The Blue / One Size variant accepted SEBASTIANBASSOL at checkout for $33.99 off its $679.99 item price."
    ],
    "tradeoffs":[
      "Ancheer lists this configuration as One Size but does not give a clear rider-height range or a full geometry chart. Ask about reach, stand-over and saddle adjustment before buying.",
      "The product page advertises up to 50 miles and 22 mph. Those are manufacturer claims rather than Bike Tested measurements, and the page does not state enough test conditions to plan a dependable route from them.",
      "A 750W peak output and 22 mph speed claim do not by themselves establish how the bike is classified where you live. Confirm the delivered model and local road or path rules.",
      "The seller lists a 265 lb maximum load but does not clearly state the complete bike weight on the selected product page. Ask for both figures if lifting or carrying the bike is part of your routine.",
      "Ancheer limits shipping to the lower 48 states. Its return policy describes a 30-day request window but also says sale items are non-refundable; this listing is discounted, so confirm in writing whether the standard return window applies. Customers pay return shipping on free-shipping orders.",
      "The warranty policy lists one-year coverage for core e-bike components for the original purchaser, with shorter periods for some components. Confirm how those terms apply to the exact order."
    ],
    "specs":{
      "Configuration / SKU":"Blue / One Size; variant 48841960390898; SKU US01+AMAK00009_P00_CA_BU",
      "Motor":"750W peak rear hub motor; 73 Nm torque (seller-listed)",
      "Battery":"48V 10.4Ah removable battery; 499 Wh (seller-listed)",
      "Claimed top speed":"Up to 22 mph (manufacturer claim)",
      "Claimed range":"Up to 50 miles (manufacturer claim; conditions not specified on the listing)",
      "Tires":"27.5 × 2.1 inches",
      "Fork":"Lockable suspension fork",
      "Brakes":"Dual mechanical disc brakes",
      "Drivetrain":"Shimano 21-speed gearing",
      "Assist and controls":"Five pedal-assist levels, throttle and cruise control (seller-listed)",
      "Display":"LCD digital display",
      "Maximum load":"265 lb (manufacturer-listed)",
      "Water-resistance claim":"IPX5 (manufacturer-listed)",
      "Fit information":"One Size; no clear rider-height range or full geometry chart on the selected listing"
    },
    "source":"https://www.ancheer.shop/products/ancheer-hummer-ebike?variant=48841960390898",
    "sourceLinks":[
      {"label":"Shipping information","url":"https://www.ancheer.shop/pages/shipping-information"},
      {"label":"Return and refund policy","url":"https://www.ancheer.shop/pages/return-and-refund-policy"},
      {"label":"Warranty policy","url":"https://www.ancheer.shop/pages/warranty-policy"}
    ],
    "evidence":"Manufacturer-specification review; exact Blue / One Size checkout observed",
    "sections":[
      ["A useful everyday equipment mix","The Hummer combines a removable battery with a lockable suspension fork, Shimano 21-speed gearing and dual mechanical disc brakes. That gives it a familiar bicycle layout, while the seller's 750W peak and 73 Nm figures describe a stronger assist claim than the equipment list alone can explain. We would consider it for paved trips, neighborhood errands and the occasional smooth dirt path, then verify the fit and delivered configuration before choosing a route."],
      ["Resolve the one-size question before comparing deals","The selected variant is Blue / One Size. The product page does not provide a rider-height band or a complete geometry chart, so the label is not enough to establish comfortable reach or stand-over. Ask Ancheer for those measurements and compare them with a bike you already fit. The listing also gives a 265 lb maximum load but does not clearly state the complete bike's weight; ask for it if you will carry the bike up stairs or lift it onto a rack."],
      ["Use the range and speed as seller estimates","Ancheer advertises a 50-mile maximum range, 22 mph top speed and IPX5 water-resistance rating. The page does not give route, load or assist conditions for the range claim, and Bike Tested has not measured this bike. A 499 Wh battery is a useful comparison point, not a guarantee of distance. Plan with a charging margin, and check how the delivered model is classified under the rules for the roads and paths you intend to use."],
      ["Check the full ownership terms","The official store says it ships free within the lower 48 states and estimates three to seven business days in transit after processing. Its return policy describes a 30-day request window, yet also says sale items are non-refundable; because this Hummer listing is discounted, ask the seller to confirm in writing whether the standard return window applies. Customers pay return shipping on free-shipping orders. The warranty policy lists one-year coverage for the frame, fork, battery, motor, controller and charger for the original purchaser, with shorter coverage for some other components. Read the current regional terms and ask about local service before ordering."],
      ["What the reader code changed","On October 23, 2026, the cart accepted SEBASTIANBASSOL for the Blue / One Size Hummer (variant 48841960390898; SKU US01+AMAK00009_P00_CA_BU). The listed $679.99 item price fell by $33.99 to $646.00 before shipping and tax. The cart indicated free-shipping eligibility, but no delivery address was entered, no shipping or tax was calculated, and no order was placed. This observation covers only the selected variant; other colors and models were not tested. A separate storefront promotion was not tested or stacked."]
    ],
    "publishedOn":"2026-10-23",
    "updatedOn":"2026-10-23",
    "specsCheckedOn":"2026-10-23",
    "faqs":[
      ["What rider height does the ANCHEER Hummer fit?","The selected Blue / One Size listing does not give a clear rider-height range or full geometry chart. Ask Ancheer for reach, stand-over and saddle-adjustment measurements, then compare them with a bike that fits you."],
      ["How far can the Hummer travel on one charge?","Ancheer advertises up to 50 miles from the Hummer's removable 48V 10.4Ah / 499 Wh battery. That is a seller estimate without clear test conditions on the selected listing, not a Bike Tested measurement. Rider load, route, weather and assist use affect real distance."],
      ["What is the ANCHEER Hummer's maximum load?","The product page lists a 265 lb maximum load. It does not clearly state the bike's complete weight on the selected listing, so ask the seller if carrying or lifting the bike is important to your setup."],
      ["Does the ANCHEER code apply to the Hummer?","SEBASTIANBASSOL was accepted for the Blue / One Size Hummer variant 48841960390898 on October 23, 2026. It reduced the $679.99 item price by $33.99 to $646.00 before shipping and tax. Other Hummer colors and models were not checked."],
      ["Can I ride the Hummer on public roads?","Ancheer lists a 750W peak motor and a top speed of up to 22 mph. Those seller specifications do not establish the vehicle class or access rules in every location; check the requirements for the model delivered to you and the routes you plan to ride."]
    ],
    "relatedReviews":[
      {"slug":"gebike-g03-city-commuter-ebike","reason":"If fit guidance and an everyday low-step frame matter more, compare the GEBIKE G03 and its listed dimensions before choosing a one-size bike."}
    ],
    "price":{"amountMinor":67999,"currency":"USD","region":"US","variantId":"48841960390898","variantLabel":"Blue / One Size","source":"https://www.ancheer.shop/products/ancheer-hummer-ebike?variant=48841960390898","checkedOn":"2026-10-23","isSalePrice":true},
    "eligibility":{"status":"eligible","variantId":"48841960390898","evidence":"docs/evidence/ancheer-hummer-electric-bike.md#checkout-observation"},
    "checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"48841960390898","baseAmountMinor":67999,"discountMinor":3399,"afterAmountMinor":64600,"currency":"USD","checkedOn":"2026-10-23","exclusions":"Before shipping and tax; cart indicated free-shipping eligibility but no address was entered; no order placed. Result applies only to Blue / One Size SKU US01+AMAK00009_P00_CA_BU."}
  },
  {
    "slug":"burchda-u8-step-thru-electric-bike",
    "brand":"burchda",
    "name":"Burchda U8 Step-Thru Electric Bike",
    "model":"U8 2026 Upgrade, Champagne Gold / 1000W / 48V31.5Ah",
    "image":"/images/products/burchda-u8-step-thru-electric-bike.webp",
    "imageAlt":"Champagne Gold Burchda U8 2026 Upgrade step-through electric bike with front basket and rear rack cushion",
    "imageWidth":1200,
    "imageHeight":1200,
    "category":"electric-bikes",
    "use":"utility",
    "label":"For low-step utility rides",
    "headline":"A big battery and useful carrying setup, with fit to confirm.",
    "description":"The U8 2026 Upgrade pairs a step-through frame with 20 × 4-inch tires, a removable 48V 31.5Ah battery, front basket and rear rack.",
    "verdict":"We recommend the Burchda U8 2026 Upgrade for riders who want an easy-to-mount frame, wide tires and a ready-to-use basket and rear rack for neighborhood errands. The selected 48V 31.5Ah battery is a substantial capacity, and the model adds a suspension fork, hydraulic brakes and Shimano seven-speed gearing. Its listed 43 kg weight makes storage and lifting the deciding fit check; confirm the exact ready-to-ride weight and frame measurements before ordering.",
    "strengths":[
      "The low step-through opening makes frequent stops and mounting easier to manage; check reach and saddle range for your own fit.",
      "Burchda lists a removable 48V 31.5Ah battery, a useful capacity for longer days between charging opportunities.",
      "A front basket, rear rack with cushion, fenders and 20 × 4-inch tires give the U8 an errand-ready, comfort-oriented layout.",
      "The selected 1000W configuration is listed with up to 95 Nm of torque, a hydraulic suspension fork, hydraulic disc brakes and Shimano seven-speed gearing."
    ],
    "tradeoffs":[
      "The product page lists 43 kg and 180 × 70 × 117 cm. An older U8 manual separately lists a 36 kg bike and 8.3 kg battery; ask Burchda for the complete weight of this 2026 configuration and plan storage around a heavy full-size bike.",
      "Range claims conflict across the product page: the feature section gives 70–80 km electric-only and 80–100 km pedal-assist, while other sections say 100–160 km, up to 140 km and 100–120 km. Treat every figure as a manufacturer estimate and plan a route with charging margin.",
      "The listing does not give a rider-height range or full geometry chart. A low frame opening does not establish a comfortable reach or saddle position; request frame measurements and compare the bike with one that fits.",
      "The selected motor setting is 1000W, with a throttle and adjustable 25/45 km/h speed claim. Confirm the delivered configuration and the rules for your intended roads and paths before choosing a route.",
      "In the tested cart, the code did not apply while the automatic free riding-package promotion was active. The U8 code applied after the gift package was removed; confirm which offer the store accepts with your exact basket."
    ],
    "specs":{
      "Configuration / variant":"Champagne Gold / 1000W / 48V31.5Ah; variant 50464726483219",
      "Frame":"6061 aluminum alloy, step-through",
      "Motor":"1000W; up to 95 Nm torque (manufacturer-listed; power classification is not specified consistently)",
      "Battery":"48V 31.5Ah removable lithium pack (about 1,512 Wh from the listed nominal values)",
      "Range claims":"Conflicting manufacturer figures: 70–80 km electric-only, 80–100 km pedal-assist, 100–120 km pedal-assist, 100–160 km, and up to 140 km",
      "Riding modes":"Pedal, pedal assist and throttle; cruise control listed",
      "Speed":"Adjustable 25 / 45 km/h (manufacturer-listed)",
      "Tires":"20 × 4.0 inches",
      "Fork":"Hydraulic suspension fork",
      "Brakes":"Hydraulic disc brakes (manufacturer feature description)",
      "Drivetrain":"Shimano seven-speed gearing",
      "Display and lighting":"LCD display, LED headlight and red rear warning light",
      "Listed maximum payload":"396 lb in feature copy; 400 lb in page highlights",
      "Listed bike weight":"43 kg on the current product page; an older U8 manual lists 36 kg plus an 8.3 kg battery",
      "Dimensions":"180 × 70 × 117 cm",
      "Charging time":"8–10 hours (manufacturer-listed)",
      "Water-resistance claim":"IP65 (manufacturer-listed)"
    },
    "source":"https://www.burchda-ebike.com/products/burchda-u8-step-thru-electric-bike?variant=50464726483219",
    "sourceLinks":[
      {"label":"Burchda warranty policy","url":"https://www.burchda-ebike.com/pages/warranty"},
      {"label":"Burchda return and refund policy","url":"https://www.burchda-ebike.com/policies/refund-policy"},
      {"label":"Earlier U8 user manual","url":"https://cdn.shopify.com/s/files/1/0793/8667/3427/files/U8.pdf?v=1721101882"}
    ],
    "evidence":"Manufacturer-specification editorial review; exact Champagne Gold / 1000W / 48V31.5Ah cart and code observation",
    "sections":[
      ["Low-step access with an errand-ready layout","The U8 brings together a low step-through, a front basket, a rear rack with cushion, fenders and 20 × 4-inch tires. Burchda also lists a hydraulic suspension fork and Shimano seven-speed gearing. That combination makes the bike an appealing option for riders who want to carry everyday items and prefer a lower frame opening. Before adding bags or other cargo, ask Burchda for the rack’s own load limit; the bike’s listed maximum payload does not establish the rack rating."],
      ["Treat the battery and range as separate questions","The selected configuration has a removable 48V 31.5Ah pack. Burchda lists pedal, pedal-assist and throttle modes, but its range figures vary across sections: 70–80 km electric-only, 80–100 km pedal-assist, 100–120 km pedal-assist, 100–160 km and up to 140 km. These are seller claims rather than Bike Tested measurements. Compare the battery capacity with your route, then plan with a margin and ask which estimate applies to this exact motor and speed setting."],
      ["Measure the bike and plan how to move it","The low frame opening helps at mounting, while the listed 180 × 70 × 117 cm dimensions and 43 kg weight make storage the bigger daily question. An earlier U8 manual lists a 36 kg bike plus an 8.3 kg battery, so the information may describe a different configuration or weigh-in method. The product page does not provide a rider-height band or full geometry chart. Ask for this upgrade’s complete ready-to-ride weight, reach and saddle-height range, then measure doors, storage and any vehicle carrier before buying."],
      ["Confirm the delivered speed setting and support","The selected page lists a 1000W motor, up to 95 Nm, throttle control and an adjustable 25/45 km/h speed setting. It also gives two slightly different payload figures: 396 lb in feature copy and 400 lb in a page highlight. Confirm the delivered setup, load definition and local route rules with the seller. The product page advertises a 30-day return window, while the formal policy requires under 10 km, original packaging and prior approval; confirm return freight. The warranty table lists 12 months for core parts such as frame, motor and battery, with shorter or no coverage for several wear items."],
      ["What the Burchda code changed","On October 23, 2026, the German storefront cart accepted SEBASTIANBASSOL for the Champagne Gold / 1000W / 48V31.5Ah U8 (variant 50464726483219). It reduced the €1,289.00 item price by €38.67 to a €1,250.33 item subtotal. The code did not apply while the automatic free riding-package promotion was active; removing that gift package allowed the code to apply to the bike alone. No delivery address was entered, shipping was not calculated and no order was placed. Other variants and models were not checked."
      ]
    ],
    "publishedOn":"2026-10-23",
    "updatedOn":"2026-10-23",
    "specsCheckedOn":"2026-10-23",
    "faqs":[
      ["How far can the Burchda U8 travel on one charge?","Burchda publishes several different figures: 70–80 km electric-only, 80–100 km and 100–120 km in pedal-assist sections, 100–160 km in the title, and up to 140 km in a feature headline. These are manufacturer estimates, not Bike Tested measurements. Ask which claim applies to your exact setting and plan a shorter route with charging margin."],
      ["How heavy is the U8 2026 Upgrade?","The current product page lists 43 kg and dimensions of 180 × 70 × 117 cm. An earlier U8 manual lists 36 kg for the bike plus an 8.3 kg battery. Confirm the complete weight of the selected 2026 configuration before planning stairs, vehicle loading or storage."],
      ["Can I remove the U8 battery to charge it?","Burchda describes the selected 48V 31.5Ah battery as removable. Confirm the charging location, battery handling instructions and the exact pack included with your order."],
      ["What should I confirm about U8 fit and speed?","The product page does not provide a rider-height range or complete geometry chart. Ask for reach and saddle-height measurements. The selected listing also states a 1000W motor, throttle and adjustable 25/45 km/h settings; check the delivered setup and rules for the roads or paths you intend to use."],
      ["Did the Burchda code work with the automatic free package?","No. SEBASTIANBASSOL was rejected while the store’s automatic free riding-package promotion was active. After the package was removed, the code applied to the U8 alone. The observation covers only Champagne Gold / 1000W / 48V31.5Ah, variant 50464726483219, on October 23, 2026." ]
    ],
    "relatedReviews":[
      {"slug":"gebike-g03-city-commuter-ebike","reason":"Compare the GEBIKE G03 if you want another step-through for everyday rides and would rather prioritize a lighter listed weight over the U8’s fat tires and large battery."},
      {"slug":"finbike-eb8-electric-bike","reason":"Compare the folding FinBike EB8 if storage footprint matters more than the U8’s non-folding utility layout."}
    ],
    "price":{"amountMinor":128900,"currency":"EUR","region":"DE","variantId":"50464726483219","variantLabel":"Champagne Gold / 1000W / 48V31.5Ah","source":"https://www.burchda-ebike.com/products/burchda-u8-step-thru-electric-bike?variant=50464726483219","checkedOn":"2026-10-23","isSalePrice":true},
    "eligibility":{"status":"eligible","variantId":"50464726483219","evidence":"docs/evidence/burchda-u8-step-thru-electric-bike.md#checkout-observation"},
    "checkoutObservation":{"code":"SEBASTIANBASSOL","variantId":"50464726483219","baseAmountMinor":128900,"discountMinor":3867,"afterAmountMinor":125033,"currency":"EUR","checkedOn":"2026-10-23","exclusions":"exact bike only, no delivery address or order; shipping not calculated; product page marks price tax included; code did not apply while the automatic free riding-package promotion was active; code applied after package removal."}
  },
  {
    "slug":"eunorau-meta275-2-electric-bike",
    "brand":"eunorau",
    "name":"Eunorau META275 2.0 Electric Bike",
    "model":"META275 2.0",
    "image":"/images/products/eunorau-meta275-2-electric-bike.webp",
    "imageAlt":"Deep Crimson Eunorau META275 2.0 electric commuter bike with front suspension and rear rack",
    "imageWidth":1200,
    "imageHeight":1200,
    "category":"electric-bikes",
    "use":"commute",
    "label":"For torque-sensing daily rides",
    "headline":"A commuter with a torque sensor and a battery bundle.",
    "description":"The META275 2.0 pairs a 500W rear hub, torque sensing and 27.5 × 2.6-inch tires with a removable 48V 15Ah battery. The current listing includes a separate 5Ah battery as a free gift.",
    "verdict":"We would shortlist the Eunorau META275 2.0 for riders who want a full-size commuter with torque-sensing assist, front suspension, hydraulic brakes and everyday fittings. The 48V 15Ah battery, 27.5 × 2.6-inch tires and adjustable stem make a practical starting point for mixed city routes. At a listed 68.4 lb, it needs a ground-level storage plan, and the seller’s 100-mile claim depends on a larger second battery than the free 5Ah gift. The October 23 cart accepted the reader code on the Large / Deep Crimson configuration.",
    "strengths":[
      "A torque sensor is listed with the 500W rear hub motor, hydraulic disc brakes and front suspension.",
      "The removable 48V 15Ah LG battery works out to about 720Wh from the manufacturer’s nominal values; a thumb throttle, fenders and lights are also listed.",
      "The current product cart included a separate 48V 5Ah secondary battery as a free gift, and the reader code remained accepted with that gift in the cart.",
      "The store lists a 10-year frame warranty and 24 months for the battery, motor and electrical components, subject to registration and exclusions."
    ],
    "tradeoffs":[
      "At 68.4 lb, the listed bike is heavy to carry up stairs or load onto a vehicle; plan storage and transport before ordering.",
      "The up-to-100-mile range claim is tied to dual batteries, and the detailed specification names a 17Ah second battery. The included gift is 5Ah, so do not treat the headline range as the expected result with the free gift.",
      "The component list says the Shimano shifter is seven-speed but separately calls the freewheel nine-speed. Confirm the delivered drivetrain and usable gear count.",
      "Eunorau recommends the L frame for riders around 5 ft 6 in to 6 ft 1 in; the page does not provide the complete fit measurements needed to judge reach and stand-over.",
      "Returns must be requested within seven calendar days and the bike must remain unused, unassembled and resellable in its original packaging. The policy assigns return freight to the buyer for customer-requested returns."
    ],
    "specs":{
      "Selected configuration":"L / Deep Crimson; variant 47313067737344",
      "Motor":"48V 500W rear hub, up to 55Nm (manufacturer-listed)",
      "Sensor":"Torque sensor",
      "Battery":"48V 15Ah LG lithium-ion, removable (about 720Wh from listed nominal values)",
      "Second battery":"Optional 15Ah or 17Ah; current cart gift is a separate 48V 5Ah battery",
      "Claimed range":"Up to 100 miles with dual batteries; detailed specification pairs the 15Ah main battery with a 17Ah second battery",
      "Seller class and speed":"Listed as Class 2, speed-limited and unlockable; maximum speed 20mph",
      "Tires":"27.5 × 2.6 inches",
      "Brakes":"Hydraulic disc, 180mm rotors",
      "Drivetrain":"Page lists Shimano 7-speed shifter and 9-speed freewheel; confirm exact delivered gearing",
      "Suspension":"Front suspension fork",
      "Controls and fittings":"Thumb throttle, adjustable stem, BC182 LCD with EUNORAU GO app support, front and rear lights, fenders, tool",
      "Listed rider height":"5 ft 6 in–6 ft 1 in",
      "Listed maximum payload":"286 lb",
      "Listed bike weight":"68.4 lb",
      "Charging time":"5–7 hours with the listed US 2.0A charger"
    },
    "source":"https://eunorau-ebike.com/products/meta275-2?variant=47313067737344",
    "sourceLinks":[
      {"label":"Eunorau warranty policy","url":"https://eunorau-ebike.com/pages/warranty"},
      {"label":"Eunorau return policy","url":"https://eunorau-ebike.com/pages/return-policy"}
    ],
    "evidence":"Manufacturer-specification editorial review; exact L / Deep Crimson cart and code observation",
    "sections":[
      ["Torque sensing in an everyday setup","The META275 2.0 brings a torque sensor to a conventional commuter layout. Eunorau lists a 48V 500W rear hub motor with up to 55Nm, a thumb throttle and an adjustable stem. The sensor should make rider effort part of the assist input, while the controller and chosen mode still shape how power arrives. Front suspension, hydraulic discs, 27.5 × 2.6-inch tires, fenders and lights give it a broad everyday brief. These are listed components, not results from a Bike Tested ride or braking test."],
      ["Separate the free battery from the range headline","The selected product page lists a removable 48V 15Ah LG battery, about 720Wh using the nominal voltage and capacity. Eunorau advertises up to 100 miles with two batteries; its detailed specification describes the combination as the main 15Ah pack plus a 17Ah second battery. The cart’s free gift was a different 48V 5Ah battery. It may add capacity, but the store’s 100-mile figure does not establish the distance available with that smaller gift. Treat every range figure as a seller estimate, match it to the actual pack you receive and plan a route with a reserve."],
      ["Check the drivetrain and fit before choosing the L frame","The current component list names a Shimano seven-speed shifter and, separately, a Shimano nine-speed freewheel. That mismatch leaves the actual gear count unclear, so ask Eunorau to confirm the delivered drivetrain. The selected L frame is within the seller’s suggested 5 ft 6 in–6 ft 1 in range, but height alone cannot establish reach, stand-over or control access. Request the geometry for the exact frame size and compare it with a bike that already fits. The listed 68.4 lb weight also makes stairs and vehicle loading a meaningful part of the decision."],
      ["Understand the purchase terms and code scope","Eunorau’s policy gives the original purchaser a 10-year frame warranty and 24 months for the battery, motor and electrical parts. It requires product registration and excludes labor and ordinary wear items. The return policy allows a request within seven calendar days, provided the bike is unused, unassembled, resellable and returned in its original packaging; buyer-requested returns carry a shipping deduction. On October 23, 2026, EUNORSEBASTIAN60 was accepted in the cart with the free 48V 5Ah battery still included. It reduced the selected bike’s $1,699.00 price by $33.98 to a $1,665.02 bike item subtotal. No delivery address, shipping or tax was calculated, and no order was placed. The result applies only to L / Deep Crimson, variant 47313067737344."]
    ],
    "publishedOn":"2026-10-23",
    "updatedOn":"2026-10-23",
    "specsCheckedOn":"2026-10-23",
    "faqs":[
      ["How far can the Eunorau META275 2.0 go on one charge?","Eunorau advertises up to 100 miles with two batteries. Its detailed specification ties that claim to a 48V 15Ah main battery and a 17Ah second battery. The current cart gift is a smaller 5Ah battery, so the published maximum should not be read as the expected range with that gift. These are seller estimates, not Bike Tested measurements."],
      ["How much does the META275 2.0 weigh, and who does it fit?","Eunorau lists 68.4 lb and recommends rider heights from 5 ft 6 in to 6 ft 1 in. Height is only a starting point. Ask for reach, stand-over and saddle-height measurements for the L frame, and plan for the weight if your storage involves stairs."],
      ["Does the META275 2.0 have seven or nine gears?","The product component list names a Shimano seven-speed shifter and also a Shimano nine-speed freewheel. Because the listing conflicts, confirm the exact drivetrain supplied with the bike."],
      ["Did EUNORSEBASTIAN60 work on the META275 2.0?","Yes. In the October 23, 2026 cart observation it took $33.98 off the $1,699.00 L / Deep Crimson variant (47313067737344), leaving a $1,665.02 bike item subtotal. The free 48V 5Ah gift remained in the cart. Shipping and tax were not calculated and no order was placed. Other variants and models were not checked."],
      ["What are the META275 2.0 warranty and return terms?","Eunorau lists a 10-year frame warranty and 24 months for the battery, motor and electrical components, with registration required and labor and normal wear excluded. Its return policy requires a request within seven calendar days; the bike must remain unused, unassembled and resellable in its original packaging. The policy assigns return shipping costs to the customer for customer-attributable returns. Read the linked policies before ordering."]
    ],
    "relatedReviews":[
      {"slug":"ride1up-roadster-v3","reason":"Compare the Ride1Up Roadster V3 if you want a lighter, more minimalist commuter with torque-sensing assistance and a different fork setup."},
      {"slug":"gebike-g03-city-commuter-ebike","reason":"Compare the GEBIKE G03 if you prefer a low-step city bike and want to weigh its frame layout and listed storage weight against the META275."}
    ],
    "price":{"amountMinor":169900,"currency":"USD","region":"US","variantId":"47313067737344","variantLabel":"L / Deep Crimson","source":"https://eunorau-ebike.com/products/meta275-2?variant=47313067737344","checkedOn":"2026-10-23","isSalePrice":false},
    "eligibility":{"status":"eligible","variantId":"47313067737344","evidence":"docs/evidence/eunorau-meta275-2-electric-bike.md#checkout-observation"},
    "checkoutObservation":{"code":"EUNORSEBASTIAN60","variantId":"47313067737344","baseAmountMinor":169900,"discountMinor":3398,"afterAmountMinor":166502,"currency":"USD","checkedOn":"2026-10-23","exclusions":"Bike item subtotal only. Code applied with the free 48V 5Ah battery gift still in the cart. No delivery address, shipping or tax calculation, or order. Exact L / Deep Crimson variant only; other models and variants are untested."}
  },
{
  "slug": "gyroor-c5-electric-trike",
  "brand": "gyroor",
  "name": "Gyroor C5 Electric Trike",
  "model": "C5 Electric Trike",
  "image": "/images/products/gyroor-c5-electric-trike.webp",
  "imageAlt": "Gyroor C5 Black electric trike with front and rear cargo baskets",
  "imageWidth": 1200,
  "imageHeight": 1200,
  "category": "electric-mobility",
  "use": "utility",
  "label": "For steady neighborhood errands",
  "headline": "A basket-ready trike with a sizeable footprint.",
  "description": "The C5 pairs a seated three-wheel layout and dual removable baskets with reverse and a 48V battery. Gyroor lists about 30 miles of range under ideal conditions; the battery is not removable.",
  "verdict": "We recommend the Gyroor C5 for riders who want a seated, three-wheel electric runabout with useful basket capacity and reverse for errands. Its listed 650W motor, rear suspension, 12-inch pneumatic tires, and front disc / rear drum brakes make an equipment-rich short-trip package. The Black variant accepted our partner code in the cart. At 84 lb, with a non-removable battery and a 300 lb combined rider-and-cargo limit, the C5 is better suited to roll-in storage than frequent lifting. Its sale-item return terms also need clarification before ordering.",
  "strengths": [
    "Front and rear removable baskets give groceries and everyday cargo a dedicated place, while reverse helps reposition the trike in close quarters.",
    "A front disc brake, rear drum brake, hill-hold, headlight, and taillight are included in the listed equipment.",
    "The folding frame, 12-inch pneumatic tires, rear suspension, and seated format target neighborhood errands and short paved trips.",
    "The exact Black variant accepted SEBASTIANBASSOL: $44.99 off the $899.99 sale price, leaving an $855.00 item subtotal before tax and shipping."
  ],
  "tradeoffs": [
    "At 84 lb and 53.46 × 26.45 × 43.30 inches unfolded, it is a large vehicle to lift or fit into a small storage area; folding does not make it light.",
    "The battery is not removable, so charging and service planning need to account for the whole trike.",
    "The 300 lb maximum includes rider and cargo together. Check your actual combined load, especially when carrying groceries or a pet.",
    "Gyroor’s page advertises a 30-day return window but its sales-item terms say sale items cannot be refunded. The current listing is on sale, so get the applicable return terms in writing.",
    "The manufacturer’s roughly 30-mile range is a conditional estimate, not a Bike Tested measurement; terrain, temperature, rider weight, and riding habits affect distance."
  ],
  "specs": {
    "Selected configuration": "Black; variant 54135309304101 (SKU Trike-C5-Black)",
    "Motor": "650W nominal, 1,000W peak (manufacturer-listed)",
    "Battery": "48V 13.5Ah; manufacturer FAQ says it is not removable",
    "Claimed range": "About 30 miles; manufacturer estimate under favorable conditions",
    "Top speed": "About 15 mph (manufacturer-listed)",
    "Wheels": "12-inch pneumatic tires",
    "Brakes": "Front disc; rear drum (manufacturer-listed)",
    "Suspension": "Rear suspension (manufacturer-listed)",
    "Controls and features": "Reverse mode, hill-hold, headlight, taillight",
    "Frame": "Folding; seller says 90% assembled",
    "Dimensions": "53.46 × 26.45 × 43.30 inches unfolded",
    "Listed weight": "84 lb",
    "Recommended rider height": "4 ft 9 in–6 ft 1 in",
    "Maximum combined load": "300 lb including rider and cargo",
    "Water rating": "Mainframe IPX4 (manufacturer-listed)",
    "Charging time": "About 5 hours (manufacturer-listed)",
    "Warranty": "6 months for battery; 1 year for other parts (manufacturer-listed)"
  },
  "source": "https://gyroorboard.com/products/gyroor-c5-electric-trike-with-removable-dual-baskets-1000wpeak-30miles?variant=54135309304101",
  "evidence": "Manufacturer-specification editorial evaluation; exact Black-variant cart observation",
  "sections": [
    [
      "Cargo and reverse suit short local trips",
      "Gyroor gives the C5 front and rear removable baskets, a reverse mode, hill-hold, and a seated three-wheel layout. The listed 650W nominal / 1,000W peak motor, 12-inch pneumatic tires, rear suspension, front disc brake, and rear drum brake make it a purpose-built errand trike rather than a compact carry-on scooter. These are manufacturer-listed parts and functions; Bike Tested did not perform a ride, braking, range, or load test."
    ],
    [
      "Make a storage and charging plan first",
      "The seller lists the C5 at 84 lb and 53.46 × 26.45 × 43.30 inches in its unfolded form. The frame folds, but the listing does not give folded dimensions, and the weight still makes lifting a substantial job. Measure the route through doors and the actual storage spot before ordering. Gyroor’s FAQ says the 48V 13.5Ah battery is not removable, so plan to charge the complete trike near an outlet. Its height guide is 4 ft 9 in to 6 ft 1 in, and the 300 lb maximum is for rider plus cargo together."
    ],
    [
      "Use the range claim as a planning reference",
      "Gyroor lists about 30 miles and says actual range depends on rider weight, terrain, weather, and riding habits; its FAQ describes the figure under ideal conditions. Treat it as a seller estimate and leave a reserve for hills, cold weather, cargo, and aging battery capacity. Gyroor recommends smooth roads and says the trike is not intended for off-road riding."
    ],
    [
      "Confirm the return rule and check the exact code",
      "Gyroor’s product page shows a 30-day return period for unused items in original packaging and says the buyer pays return shipping for non-defective returns. A separate sales-item clause says sale items cannot be refunded, which conflicts with the broad return language. Because the C5 is listed at a sale price, ask the seller to confirm the terms for this exact order. The same page lists a one-year warranty on parts and six months on the battery; its warranty terms make coverage for the original purchaser and assign shipping costs to the customer. On October 23, 2026, SEBASTIANBASSOL was accepted for the Black C5, variant 54135309304101, reducing the $899.99 item price by $44.99 to $855.00. Shipping and tax were not calculated, no address was entered, and no order was placed. The result applies to this exact variant only."
    ]
  ],
  "publishedOn": "2026-10-23",
  "updatedOn": "2026-10-23",
  "specsCheckedOn": "2026-10-23",
  "faqs": [
    [
      "How far can the Gyroor C5 go on one charge?",
      "Gyroor lists about 30 miles under favorable conditions. It says actual distance changes with rider weight, terrain, weather, and riding habits. This is a manufacturer estimate, not a Bike Tested range measurement."
    ],
    [
      "Can I remove the C5 battery to charge it indoors?",
      "Gyroor’s product FAQ says the 48V 13.5Ah battery is not removable. Plan to charge the complete trike near a suitable outlet."
    ],
    [
      "What rider and cargo weight does the C5 support?",
      "Gyroor lists a maximum combined load of 300 lb for the rider and cargo together, and recommends rider heights from 4 ft 9 in to 6 ft 1 in. Check the load you intend to carry against the combined limit."
    ],
    [
      "Did SEBASTIANBASSOL work on the Black C5?",
      "Yes. In the October 23, 2026 cart observation, the code took $44.99 off the $899.99 sale price for Black variant 54135309304101, leaving an $855.00 item subtotal before shipping and tax. No address or order was entered. Other models and variants were not tested."
    ],
    [
      "Can a sale-priced C5 be returned?",
      "Gyroor’s product page gives a 30-day return window for unused goods in original packaging and says buyers pay return shipping for non-defective returns. A separate sales-item clause says sale items cannot be refunded. The C5 is listed at a sale price, so ask Gyroor to confirm the exact return terms in writing before ordering."
    ]
  ],
  "relatedReviews": [
    {
      "slug": "mooncool-tk2-folding-electric-trike",
      "reason": "Compare the Mooncool TK2 if you want a pedal-assist folding trike with a removable battery and a higher listed payload; its cycling layout and storage needs differ from the C5."
    }
  ],
  "price": {
    "amountMinor": 89999,
    "currency": "USD",
    "region": "US",
    "variantId": "54135309304101",
    "variantLabel": "Black",
    "source": "https://gyroorboard.com/products/gyroor-c5-electric-trike-with-removable-dual-baskets-1000wpeak-30miles?variant=54135309304101",
    "checkedOn": "2026-10-23",
    "isSalePrice": true
  },
  "eligibility": {
    "status": "eligible",
    "variantId": "54135309304101",
    "evidence": "docs/evidence/gyroor-c5-electric-trike.md#exact-variant-cart-observation"
  },
  "checkoutObservation": {
    "code": "SEBASTIANBASSOL",
    "stage": "cart",
    "variantId": "54135309304101",
    "baseAmountMinor": 89999,
    "discountMinor": 4499,
    "afterAmountMinor": 85500,
    "currency": "USD",
    "checkedOn": "2026-10-23",
    "exclusions": "Exact Black C5 variant only. Item subtotal before shipping and tax; no delivery address entered and no order placed."
  }
},
{
  "slug": "hycline-code-bones-fat-tire-set",
  "brand": "hycline",
  "name": "Hycline Code: Bones 20×4 Fat Tire Set",
  "model": "Code: Bones 20×4 Fat Tire Set",
  "image": "/images/products/hycline-code-bones-fat-tire-set.webp",
  "imageAlt": "Hycline Code: Bones 20×4 fat tires with two inner tubes and two tire levers",
  "imageWidth": 1200,
  "imageHeight": 1200,
  "category": "components",
  "use": "recreation",
  "label": "For 20×4 fat-bike replacements",
  "headline": "A matched pair with the basics for a full tire refresh.",
  "description": "The 20×4 Code: Bones set pairs two 102-406 clincher tires with two inner tubes and two tire levers. Its pronounced tread is aimed at riders who split time between pavement and loose surfaces.",
  "verdict": "We recommend the Hycline Code: Bones 20×4 Fat Tire Set to owners already running 20×4 wheels who want a matched replacement pair plus tubes and levers in one order. Its blocky tread is an appealing fit for a fat bike that moves between pavement and loose ground, and the $105.99 two-pack accepted our Bike Tested code in the US cart. At 2.05 kg per tire, and with an exact 102-406 fit, weight and compatibility are the deciding checks.",
  "strengths": [
    "The selected set includes two tires and two tubes; Hycline’s package graphic also shows two tire levers, reducing separate parts shopping for a paired replacement.",
    "The 20×4 size is identified as ETRTO 102-406, giving owners a precise sidewall and rim reference before they order.",
    "A symmetrical center tread and pronounced side knobs give the pattern a clear mixed-surface purpose; Hycline describes it for loose terrain and urban pavement.",
    "The exact 20×4 two-pack variant accepted SEBASTIANBASSOL in the US cart for $5.29 off, leaving a $100.70 item subtotal before shipping and tax."
  ],
  "tradeoffs": [
    "At 2.05 kg per tire, the pair adds substantial rotating weight; riders prioritizing a light, quick-feeling setup may prefer a narrower or lighter replacement.",
    "This is a 20×4 tire for a 406 mm bead-seat diameter, not a universal 20-inch replacement. Confirm rim approval and clearance at the frame, fork, fenders, and any nearby hardware.",
    "Hycline lists 40 PSI as the tire maximum. A wheel or rim may impose a lower limit, and the maximum is not a target pressure for every rider or route.",
    "The listing confirms two tubes but does not identify their valve standard. Check the current tube and valve details against your rims before relying on the included pair."
  ],
  "specs": {
    "Selected configuration": "20×4 / 40 PSI / two-pack tires with tubes; variant 44651812684001; SKU SHP-EbFT905_204BLK_2TR2TB",
    "Tire size": "20×4.0 inches; ETRTO 102-406",
    "Tire type": "Clincher",
    "Maximum pressure": "40 PSI (manufacturer-listed)",
    "Construction": "30 TPI; folding bead; dual layer (manufacturer-listed)",
    "Listed weight": "2.05 kg per tire",
    "Package contents": "Two tires and two inner tubes; Hycline’s package graphic shows two tire levers",
    "Tube valve": "Valve standard not identified on the product listing"
  },
  "source": "https://hyclinebike.com/products/code-bones-all-terrain-fat-tire-20-x-4-0?variant=44651812684001",
  "evidence": "Manufacturer-specification editorial evaluation; exact US two-pack cart observation",
  "sections": [
    [
      "A matched pair for a complete refresh",
      "The selected configuration makes sense when both wheels need new rubber. Hycline lists two Code: Bones tires with two inner tubes, while its package-contents graphic also shows two tire levers. That is a more useful starting point than buying a single tire and discovering that the opposite wheel or old tubes need attention as well. The tires are clinchers, so confirm that your wheel is designed for a compatible clincher tire and tube setup. The included tubes’ valve standard is not stated on the listing, so check that detail with Hycline against your rims before checkout."
    ],
    [
      "Size and clearance come before tread choice",
      "Hycline lists this version as 20×4.0 with an ETRTO marking of 102-406. Read the existing tire sidewall and verify the wheel’s bead-seat diameter; a familiar 20-inch label alone does not establish fit. Then check the rim maker’s approved tire-width range and measure clearance at the frame, fork, fenders, and any rack or wiring near the wheel. A four-inch casing can be a poor match even when the nominal wheel diameter is right. If the markings or approved width are unclear, confirm them with the bike and wheel makers before installing a replacement."
    ],
    [
      "A blocky tread for changing surfaces",
      "The Code: Bones pattern uses a symmetrical center row and larger side knobs. Hycline says the center is intended to support braking stability and the side tread to add cornering bite, with the blocky layout aimed at loose, rocky ground as well as pavement. We like that the tread brief is specific: it targets riders who want one fat-bike setup for a mix of routes instead of a smooth commuter tire. Those are manufacturer descriptions, not Bike Tested grip or braking measurements. The product page also markets puncture resistance, but it does not provide a comparable test result or a puncture-free guarantee."
    ],
    [
      "Plan for tire weight and a suitable pressure",
      "Hycline lists each 20×4 tire at 2.05 kg, so a pair is a substantial replacement set before the tubes are added. That is worth factoring into a build where lighter wheels and a nimble feel matter most. The seller lists 40 PSI as the maximum; the rim may carry a lower limit, and a suitable operating pressure depends on the full wheel, load, and surface. Use the lower applicable limit and pressure guidance for your exact setup rather than treating 40 PSI as a universal target. On October 23, 2026, the US two-pack variant accepted SEBASTIANBASSOL for $5.29 off, from $105.99 to $100.70 before shipping and tax. No address was entered and no order was placed."
    ]
  ],
  "publishedOn": "2026-10-23",
  "updatedOn": "2026-10-23",
  "specsCheckedOn": "2026-10-23",
  "faqs": [
    [
      "Which bike fits the 20×4 Code: Bones tire?",
      "This configuration is listed as 20×4.0 and ETRTO 102-406. Match both the existing tire and wheel markings, then confirm the rim’s approved width and clearance at the frame, fork, and fenders. A shared nominal diameter is not enough to prove fit."
    ],
    [
      "What comes in the Code: Bones two-pack?",
      "Hycline labels the selected variant as two tires with tubes. Its package-contents graphic shows two tires, two inner tubes, and two tire levers. The product listing does not identify the tubes’ valve standard, so confirm that detail for your rims."
    ],
    [
      "Should I inflate the Code: Bones to 40 PSI?",
      "No. Hycline lists 40 PSI as the tire maximum, not a universal riding target. Check the rim’s limit and pressure guidance for your tire, wheel, load, and route; follow the lowest applicable limit."
    ],
    [
      "Does the Code: Bones tire guarantee puncture protection?",
      "Hycline advertises dual-layer construction and puncture resistance, but the product page does not provide a comparable puncture test result or a puncture-free guarantee. Choose it for the published size and tread design, and keep a repair plan for any tire setup."
    ]
  ],
  "price": {
    "amountMinor": 10599,
    "currency": "USD",
    "region": "US",
    "variantId": "44651812684001",
    "variantLabel": "20×4 / 40 PSI / Buy 2-pack tires with tubes",
    "source": "https://hyclinebike.com/products/code-bones-all-terrain-fat-tire-20-x-4-0?variant=44651812684001",
    "checkedOn": "2026-10-23",
    "isSalePrice": true
  },
  "eligibility": {
    "status": "eligible",
    "variantId": "44651812684001",
    "evidence": "docs/evidence/hycline-code-bones-fat-tire-set.md#exact-variant-cart-observation"
  },
  "checkoutObservation": {
    "code": "SEBASTIANBASSOL",
    "stage": "cart",
    "variantId": "44651812684001",
    "baseAmountMinor": 10599,
    "discountMinor": 529,
    "afterAmountMinor": 10070,
    "currency": "USD",
    "checkedOn": "2026-10-23",
    "exclusions": "exact 20×4 two-pack-with-tubes variant only, before shipping and tax; no address was entered or order placed, and the isolated test cart was cleared."
  }
},
{
  "slug": "hiboy-ex11-full-suspension-electric-bike",
  "brand": "hiboy",
  "name": "Hiboy EX11 Full Suspension Electric Bike",
  "model": "EX11 Navy Blue (US; variant 47395627794681; SKU EX11-NB-20070014)",
  "image": "/images/products/hiboy-ex11-full-suspension-electric-bike.webp",
  "imageAlt": "Navy Blue Hiboy EX11 full-suspension electric bike with 26 × 4-inch fat tires and rear rack",
  "imageWidth": 1200,
  "imageHeight": 1200,
  "category": "electric-bikes",
  "use": "weekend",
  "label": "For rough routes and cargo days",
  "headline": "Full suspension and a torque sensor, at 99.2 lb.",
  "description": "Hiboy pairs a 750W rated motor, 864Wh removable battery, 26 × 4-inch tires and full suspension on the EX11. It lists a 300 lb payload, a 55 lb rear rack limit and a 99.2 lb bike weight.",
  "verdict": "We recommend the EX11 for riders who want full suspension, fat tires and rear-rack capacity for longer mixed-surface rides, and have room to store and handle a 99.2 lb bike. Hiboy lists a removable 864Wh battery, torque sensor, Shimano 1 × 7 gearing, an 80mm lockout fork and a four-link rear suspension. The 100-mile pedal-assist and 53-mile throttle figures are seller claims at 165 lb, not a route guarantee. Fit needs confirmation too: the product page gives one recommended-height range through 6 ft 3 in and a geometry chart through 6 ft 5 in. Ask Hiboy which guidance applies to the Navy Blue model, then check the complete bike’s fit and handling before ordering.",
  "strengths": [
    "A torque sensor, 750W rated / 880W peak motor, listed 90 N·m torque and Shimano 1 × 7 gearing make a capable on-paper setup for varied terrain.",
    "An 80mm lockout dual-crown fork and four-link rear suspension are paired with 26 × 4-inch puncture-resistant tires for rough paths and broken pavement.",
    "The removable 48V 18Ah (864Wh) battery, 300 lb payload rating and 55 lb rear-rack limit give riders useful capacity for longer outings and gear.",
    "Hiboy lists dual-piston hydraulic disc brakes with 180mm rotors, fenders, a front light and a color display."
  ],
  "tradeoffs": [
    "At 99.2 lb before cargo, the EX11 is difficult to lift, load into a vehicle or manage in a tight storage space. Plan for its 76.9-inch length as well as its weight.",
    "Hiboy gives conflicting fit guidance: the specifications recommend riders from 5 ft 3 in to 6 ft 3 in, while the geometry chart extends to 6 ft 5 in. Confirm the correct range and compare the 35.5–44.8-inch saddle adjustment and reach with your fit.",
    "The seller advertises up to 100 miles in pedal-assist and 53 miles on throttle for a 165 lb rider, but does not provide a full range-test protocol on the product page. Treat these as optimistic manufacturer figures, not dependable route distances.",
    "The default throttle setting is listed at 20 mph, with pedal assist switchable to 28 mph where permitted. Confirm the shipped settings and rules for the places you ride before using the higher mode.",
    "The included charger is listed at 9–10 hours for a full charge, and Hiboy advertises a one-year warranty. Check the warranty terms and local service process for your purchase.",
    "Hiboy supplies the reader code SEBASTIANBASSOL without a stated discount amount. A separate EX6F cart check did not apply it; that result does not establish EX11 eligibility. No EX11 savings or after-code price is claimed."
  ],
  "specs": {
    "Configuration / SKU": "Navy Blue / US; variant 47395627794681; SKU EX11-NB-20070014",
    "Motor": "750 W rated / 880 W peak; 90 N·m torque (manufacturer-listed)",
    "Assist sensor": "Torque sensor (manufacturer-listed)",
    "Battery": "Removable 48 V, 18 Ah (864 Wh)",
    "Claimed range": "Up to 100 miles pedal assist and 53 miles throttle at 165 lb (seller claims; test protocol not provided on the product page)",
    "Riding modes and speed": "20 mph throttle default; pedal assist switchable to 28 mph where permitted (manufacturer-listed settings; check local rules)",
    "Drivetrain": "Shimano 1 × 7",
    "Recommended rider height": "5 ft 3 in–6 ft 3 in in specifications; 5 ft 3 in–6 ft 5 in in geometry chart (seller-page conflict)",
    "Front / rear suspension": "80mm lockout dual-crown fork / four-link rear suspension",
    "Brakes": "Dual-piston hydraulic disc brakes; 180mm rotors",
    "Tires": "26 × 4.0 in puncture-resistant fat tires with reflective sidewalls",
    "Bike weight": "99.2 lb (manufacturer-listed)",
    "Maximum payload": "300 lb (manufacturer-listed)",
    "Rear rack capacity": "55 lb (manufacturer-listed)",
    "Bike dimensions": "76.9 × 27.2 × 43.3 in; 76.9 in total length",
    "Saddle height": "35.5–44.8 in; geometry chart also gives 22 in handlebar reach",
    "Charging": "9–10 hours with included charger (manufacturer-listed)",
    "Warranty": "One year (manufacturer-listed)"
  },
  "source": "https://hiboy.com/products/hiboy-ex11-full-suspension-electric-bike?variant=47395627794681",
  "sourceLinks": [
    {
      "label": "Hiboy warranty policy",
      "url": "https://hiboy.com/pages/warranty"
    }
  ],
  "evidence": "Manufacturer-specification editorial evaluation; exact Navy Blue US variant and listing price checked; no EX11 code test, Bike Tested ride or range measurement",
  "sections": [
    [
      "A full-suspension bike that needs a full-bike plan",
      "The 80mm lockout fork, four-link rear suspension and 26 × 4-inch tires give the EX11 a useful equipment list for rough pavement, gravel and similar mixed surfaces. The weight changes the ownership plan: at 99.2 lb and 76.9 inches long, it is not a convenient stair carry or casual vehicle load. Measure storage and loading access, and check whether you can move the bike safely before choosing it for a daily commute."
    ],
    [
      "Resolve the size chart before choosing a frame",
      "The product specifications recommend riders from 5 ft 3 in to 6 ft 3 in, while Hiboy’s geometry chart extends the top end to 6 ft 5 in. The chart lists a 35.5–44.8-inch saddle height, a 22-inch handlebar reach and 13.9-inch standover height. These numbers help with a first fit check, but the conflicting height limits make seller confirmation worthwhile; a long seat adjustment alone does not establish comfortable reach."
    ],
    [
      "Plan rides around the battery, not the headline range",
      "Hiboy lists a removable 48V 18Ah battery and claims up to 100 miles of pedal-assist range or 53 miles on throttle for a 165 lb rider. The product page does not provide enough test conditions to treat either maximum as a dependable route estimate. The 864Wh battery and nine-to-ten-hour charge time are useful planning details; leave room for hills, cargo, speed and weather on a return trip."
    ],
    [
      "Check the modes and load limits for your use",
      "Hiboy lists a 20 mph throttle default and a pedal-assist mode that can be switched to 28 mph where permitted. Confirm the delivered configuration and the rules where you plan to ride. The 300 lb maximum payload and 55 lb rear rack rating are separate limits to check against the rider, gear and cargo plan; ask Hiboy how the total payload is counted for the exact setup."
    ],
    [
      "What to expect from the Hiboy code",
      "The partner roster supplies SEBASTIANBASSOL for Hiboy but does not state a discount amount. On October 23, the code did not reduce the separate EX6F variant’s cart price. That one result does not decide EX11 eligibility, and sale-price stacking is untested. Check the code on the exact Navy Blue EX11 before relying on a saving; the review shows no after-code total."
    ]
  ],
  "publishedOn": "2026-10-24",
  "updatedOn": "2026-10-24",
  "specsCheckedOn": "2026-10-24",
  "faqs": [
    [
      "What suspension does the Hiboy EX11 have?",
      "Hiboy lists an 80mm lockout dual-crown front fork and four-link rear suspension. The bike also uses 26 × 4-inch fat tires; these are manufacturer specifications, not a Bike Tested trail or comfort test."
    ],
    [
      "How heavy is the Hiboy EX11?",
      "Hiboy lists the EX11 at 99.2 lb before cargo. Plan for lifting, vehicle loading and storage around the complete-bike weight."
    ],
    [
      "What range does Hiboy claim for the EX11?",
      "The product page claims up to 100 miles with pedal assist and 53 miles with throttle for a 165 lb rider. The listing does not give a full test protocol, so treat both as seller claims rather than guaranteed route distances."
    ],
    [
      "What rider height does the EX11 fit?",
      "The product page is inconsistent: its specifications recommend 5 ft 3 in–6 ft 3 in, while its geometry chart lists 5 ft 3 in–6 ft 5 in. Ask Hiboy which guidance applies to the Navy Blue version and compare the geometry with your fit."
    ],
    [
      "Can the EX11 reach 28 mph?",
      "Hiboy lists a 20 mph throttle default and pedal assist switchable up to 28 mph where permitted. Confirm the shipped mode and local rules before using a higher setting."
    ]
  ],
  "price": {
    "amountMinor": 129999,
    "currency": "USD",
    "region": "US",
    "variantId": "47395627794681",
    "variantLabel": "Navy Blue / US",
    "source": "https://hiboy.com/products/hiboy-ex11-full-suspension-electric-bike?variant=47395627794681",
    "checkedOn": "2026-10-24",
    "isSalePrice": true
  },
  "eligibility": {
    "status": "unresolved",
    "variantId": "47395627794681",
    "evidence": "docs/evidence/hiboy-ex11-full-suspension-electric-bike.md#partner-offer"
  },
  "relatedReviews": [
    {
      "slug": "hiboy-ex6f-foldable-electric-bike",
      "reason": "Compare the EX6F if a low-step folding frame matters more than the EX11’s full suspension and trail focus."
    }
  ]
},
{
  "slug": "hiboy-ex6f-foldable-electric-bike",
  "brand": "hiboy",
  "name": "Hiboy EX6F Low-Step Foldable Electric Bike",
  "model": "EX6F",
  "image": "/images/products/hiboy-ex6f-foldable-electric-bike.webp",
  "imageAlt": "Hiboy EX6F Navy low-step folding e-bike with 20 × 4-inch tires and rear rack",
  "imageWidth": 1200,
  "imageHeight": 1200,
  "category": "electric-bikes",
  "use": "commute",
  "label": "For folding-bike commuters",
  "headline": "Low-step access and fat tires, with a heavy-bike fold.",
  "description": "A low-step 20 × 4-inch folder with a removable 48V battery, front suspension, hydraulic brakes, and a rear rack. Its 71.43 lb listed weight makes folding a storage aid rather than a frequent-carry solution.",
  "verdict": "We recommend the Hiboy EX6F to riders who want a low-step, fat-tire e-bike with a removable battery, front suspension, rack, and folding frame for a more flexible storage plan. Its 20 × 4-inch tires, hydraulic discs, and Shimano 7-speed drivetrain make a useful everyday package, while two distinct assistance modes suit mixed commutes and weekend loops. At 71.43 lb, folding is a storage aid rather than a carrying solution; measure the space and confirm the load limit before ordering. Our cart check showed no savings from the supplied Bike Tested code on the Navy variant.",
  "strengths": [
    "The low-step frame and adjustable cockpit give riders more setup options than a fixed-height commuter layout; check the listed standover and your own fit before ordering.",
    "A removable 48V 14.5Ah battery can be taken indoors for charging, while the manufacturer lists both throttle and pedal-assist riding modes.",
    "Front suspension, 20 × 4-inch tires, and front and rear hydraulic disc brakes give the equipment package a clear comfort-and-control brief for everyday routes.",
    "A Shimano 7-speed drivetrain, front and rear lighting, fenders, and a rear rack arrive in the listed commuter configuration; confirm exact contents for the selected variant.",
    "The three-point folding design can help when the bike needs a smaller storage footprint, provided the actual folded dimensions fit the space you have."
  ],
  "tradeoffs": [
    "Hiboy lists the complete bike at 71.43 lb. Removing the battery helps with charging but does not make the remaining bike a light stair carry.",
    "The product page gives 41 miles in pure-electric mode and up to 75 miles with pedal assist at a 143 lb rider weight. These are manufacturer claims, not Bike Tested range measurements.",
    "The product specifications list a 265 lb / 120 kg maximum load, while the geometry section lists 330 lb total effective load. Confirm the written limit for the exact bike and how it counts rider and cargo.",
    "The seller describes the bike as foldable but does not publish a folded-size measurement on the product page. Do not treat the shipping-box dimensions as the folded-bike footprint."
  ],
  "specs": {
    "Selected configuration": "Navy / US; Shopify variant 46519631053049; SKU EX6F-N-20080013",
    "Motor": "500W rated / 750W peak (manufacturer-listed)",
    "Battery": "48V 14.5Ah removable",
    "Claimed range": "41 miles pure electric; up to 75 miles pedal assist, both at 143 lb rider weight (manufacturer-listed)",
    "Assistance and speed": "Throttle up to 20 mph; pedal assist up to 25 mph (manufacturer-listed). Sensor type is not identified on the product page.",
    "Drivetrain": "Shimano 7-speed",
    "Wheels and tires": "20 × 4.0 inches",
    "Brakes": "Front and rear hydraulic disc brakes",
    "Fork": "50mm front suspension (manufacturer-listed)",
    "Frame and fit": "Low-step frame; listed standover 21.06 inches; recommended rider height 4 ft 9 in–6 ft 5 in",
    "Listed weight": "71.43 lb / 32 kg",
    "Maximum load": "265 lb / 120 kg in specification table; 330 lb total effective load in geometry section (conflicting manufacturer figures)",
    "Rear rack": "110 lb maximum listed on product graphic; confirm rack and total-bike limits before carrying cargo",
    "Folded dimensions": "Not provided on the product page",
    "Shipping-box dimensions": "52.7 × 11.81 × 28.78 inches; not the folded-bike dimensions",
    "Other listed equipment": "Front headlight, rear light, fenders, kickstand, adjustable handlebar and seat"
  },
  "source": "https://www.hiboy.com/products/hiboy-ex6f-foldable-low-step-electric-bike?variant=46519631053049",
  "sourceLinks": [
    {"label": "Hiboy warranty policy", "url": "https://www.hiboy.com/pages/warranty"},
    {"label": "Hiboy return policy", "url": "https://www.hiboy.com/pages/return-refund"}
  ],
  "evidence": "Manufacturer specification evaluation; exact-variant US cart observation",
  "sections": [
    [
      "A step-through folder built around everyday equipment",
      "The EX6F combines a low-step frame, 20 × 4-inch tires, a front suspension fork, hydraulic disc brakes, full fenders, lighting, and a rear rack. That is a broad commuter kit for riders who want an upright, practical e-bike for errands, mixed pavement, and recreational loops. A step-through opening can make getting on and off easier, but the manufacturer’s 4 ft 9 in–6 ft 5 in recommendation is only a starting point. Hiboy also lists a 21.06-inch standover measurement in its geometry section; check reach, saddle adjustment, handlebar position, and clearance for your own body rather than treating the low-step label as a fit guarantee."
    ],
    [
      "Measure the storage job before relying on the fold",
      "Hiboy describes a three-point folding mechanism, but the product page does not give a folded length, width, and height. Its 52.7 × 11.81 × 28.78-inch figure is the shipping-box size, not a measurement of the folded bike. The complete bike is listed at 71.43 lb, so the folding joints may help you move it into a closet or vehicle only if that footprint works; they do not solve frequent carrying up stairs. The removable battery is useful for indoor charging, but it does not remove most of the bike’s weight. Measure your doorway, trunk opening, elevator, and storage space, and ask Hiboy for the folded dimensions of the exact Navy build before ordering."
    ],
    [
      "Read the motor and range claims by riding mode",
      "The listed system pairs a 500W rated, 750W peak motor with a removable 48V 14.5Ah battery and a Shimano 7-speed drivetrain. Hiboy separates its range table into 41 miles in pure-electric mode and up to 75 miles with pedal assist, both under a stated 143 lb rider weight. Those are manufacturer claims, not a Bike Tested route result; load, hills, temperature, tire pressure, assist selection, stops, and wind can change real distance. The product page lists throttle speed up to 20 mph and pedal-assist speed up to 25 mph, but does not identify the pedal-assist sensor type. If sensor response or local vehicle classification is important to your ride, get the exact US configuration details from Hiboy and check the rules for your route."
    ],
    [
      "Resolve the load limit and support terms",
      "The manufacturer’s specification table sets a 265 lb / 120 kg maximum load, while its geometry section says 330 lb total effective load. A product graphic separately labels the rear rack for up to 110 lb. These figures are not interchangeable; ask Hiboy for the written rider-plus-cargo limit for this exact bike before relying on the rack. Hiboy’s current policy pages also differ on battery and motor warranty duration, and the return page lists substantial shipping deductions for no-longer-needed e-bikes. Read the current terms and confirm the cost of a return and the support path for replacement parts before you buy a 71 lb machine."
    ],
    [
      "Our buying advice for the EX6F",
      "The EX6F belongs on a shortlist when low-step access, fat tires, a removable battery, and a folding frame solve a real daily need. It is a poor match for regular stair carries or storage plans that depend on an unverified folded footprint. Confirm the frame fit, the exact load limit, local service, and written return and warranty terms. The US Navy item was listed at $949.99 on October 23, 2026. We entered the supplied Bike Tested code in an isolated cart for that exact variant and saw $0.00 allocated, so we show no after-code price. Hiboy also displayed a separate store code on its product page, but that code did not change the cart total in our check; confirm any promotion in the final checkout total."
    ]
  ],
  "publishedOn": "2026-10-23",
  "updatedOn": "2026-10-23",
  "specsCheckedOn": "2026-10-23",
  "faqs": [
    [
      "Is the Hiboy EX6F easy to carry when folded?",
      "Hiboy lists the complete bike at 71.43 lb and does not provide folded dimensions on the product page. Folding can reduce its storage footprint, but it does not make the bike light to carry. Measure your space and ask Hiboy for the exact folded size before relying on it for a car trunk, stairwell, or transit plan."
    ],
    [
      "How far can the EX6F travel on one charge?",
      "Hiboy lists 41 miles in pure-electric mode and up to 75 miles with pedal assist, both at a 143 lb rider weight. Those are manufacturer claims, not Bike Tested measurements. Route, hills, cargo, temperature, tire pressure, speed, and assist use can change real distance."
    ],
    [
      "What is the EX6F maximum load?",
      "Hiboy’s product specification table says 265 lb / 120 kg, while its geometry section lists 330 lb total effective load. The rear-rack graphic separately lists 110 lb. Confirm the written rider-plus-cargo limit for your exact bike before ordering or carrying cargo."
    ],
    [
      "Does the Hiboy EX6F use a cadence or torque sensor?",
      "The product page describes pedal-assist modes and a Shimano 7-speed drivetrain but does not identify the pedal-assist sensor type. Ask Hiboy to confirm the exact US configuration if sensor response is important to your ride."
    ],
    [
      "What warranty and return terms apply to the EX6F?",
      "Hiboy’s warranty page describes a 12-month warranty for new e-bikes, while its return page lists 12 months for scooters and 6 months for batteries and motors. The return page also says unused, undamaged bikes may be returned within 30 days, with return shipping or deductions that can be substantial. Confirm the exact battery coverage and return cost with Hiboy before ordering."
    ]
  ],
  "relatedReviews": [
    {"slug": "ancheer-hummer-electric-bike", "reason": "For another folding 20 × 4-inch e-bike, compare the ANCHEER Hummer review and its exact US configuration."}
  ],
  "price": {
    "amountMinor": 94999,
    "currency": "USD",
    "region": "US",
    "variantId": "46519631053049",
    "variantLabel": "Navy / US (SKU EX6F-N-20080013)",
    "source": "https://www.hiboy.com/products/hiboy-ex6f-foldable-low-step-electric-bike?variant=46519631053049",
    "checkedOn": "2026-10-23",
    "isSalePrice": true
  },
  "eligibility": {
    "status": "unresolved",
    "variantId": "46519631053049",
    "evidence": "docs/evidence/hiboy-ex6f-foldable-electric-bike.md#partner-code-cart-check"
  },
  "codeCheckObservation": {
    "code": "SEBASTIANBASSOL",
    "stage": "cart",
    "result": "no-discount",
    "variantId": "46519631053049",
    "baseAmountMinor": 94999,
    "discountMinor": 0,
    "afterAmountMinor": 94999,
    "currency": "USD",
    "checkedOn": "2026-10-23",
    "exclusions": "Exact Navy / US SKU EX6F-N-20080013 only; no shipping or tax was calculated, no address was entered, and no order was placed. The test cart was cleared."
  }
},
{
  "slug": "tomofree-t1max-folding-ebike",
  "brand": "tomofree",
  "name": "Tomofree T1MAX Folding E-Bike",
  "model": "T1MAX",
  "image": "/images/products/tomofree-t1max-folding-ebike.webp",
  "imageAlt": "Black Tomofree T1MAX folding electric bike with compact folded frame and wide tires",
  "imageWidth": 1200,
  "imageHeight": 1200,
  "category": "electric-bikes",
  "use": "commute",
  "label": "For short trips and measured storage",
  "headline": "A feature-rich folder with a very small package.",
  "description": "The 16 × 3-inch T1MAX folds to a listed footprint around 33 × 16 × 24 inches, with a removable battery, suspension and turn signals. Its 68–70 lb listing makes the fold more useful for storage than carrying.",
  "verdict": "We recommend the Tomofree T1MAX Folding E-Bike for riders who want a compact folded footprint, wide tires, a removable battery and a broad feature set for neighborhood trips. The $499 20Ah configuration is compelling when measured storage—not stair carrying—is the problem. Its three-step fold, suspension listing, lights and turn signals make the appeal clear, while the roughly 70-pound listing points to roll-in storage. Confirm the speed, voltage and weight details for your exact bike before ordering.",
  "strengths": [
    "The three-step fold has a listed footprint of about 33.1 × 15.7 × 24.4 inches, a useful size to compare against a closet, vehicle opening or apartment storage space.",
    "Tomofree lists 16 × 3-inch tires, full suspension, dual mechanical disc brakes, a headlight, rear lighting and turn signals in one compact-wheel package.",
    "The removable battery is offered in 20Ah and 22.5Ah versions; the exact 20Ah configuration we checked was listed at $499 and accepted the Bike Tested code.",
    "The manufacturer lists a 330 lb maximum load and a recommended rider-height range of 5 ft to 6 ft 3 in; check fit and how the load limit applies to your riding setup.",
    "The official return and warranty pages make the support terms available before purchase, including one-year coverage for the battery and motor."
  ],
  "tradeoffs": [
    "The complete-bike weight is listed as 70.11 lb in the specification section and 68 lb in the comparison table. Either figure makes this a roll-in storage choice, not a practical regular stair carry.",
    "The product-page body says 28 mph while its title says 30 mph. The only linked manual is identified as T1PRO, so request current T1MAX documentation and its exact road-use classification before relying on the speed or certification claims.",
    "Tomofree lists 48V in one section and 48.1V in another; folded width also varies slightly between sections. Confirm the exact configuration and dimensions if either figure affects your buying decision.",
    "The page advertises a 1,000W peak motor but does not identify rated output, pedal-assist sensor type or a conventional drivetrain specification. Ask the seller if those details matter to your route or control preferences."
  ],
  "specs": {
    "Selected configuration": "US 20Ah; Shopify variant 51294483775628; SKU T1MAX-20AH",
    "Motor": "1,000W peak (manufacturer-listed); rated output not stated",
    "Battery": "Removable; 20Ah or 22.5Ah options. Product sections list 48V and 48.1V",
    "Claimed range": "20–40 miles with pedal assist (manufacturer claim)",
    "Speed": "28 mph in product details; 30 mph in page title (conflict)",
    "Assistance": "Twist throttle with PAS button; sensor type and drivetrain not specified",
    "Suspension and brakes": "Full suspension; dual mechanical disc brakes (manufacturer-listed)",
    "Wheels and tires": "16 × 3.0-inch integrated tires",
    "Frame": "High-carbon steel in specifications; Shopify feed description says stainless steel",
    "Listed weight": "70.11 lb in specifications; 68 lb in comparison table",
    "Maximum load": "330 lb (manufacturer-listed); confirm how rider and cargo are counted",
    "Folded dimensions": "33.1 × 15.75 × 24.41 in in product overview; geometry section lists width as 15.72 in",
    "Assembled dimensions": "57 × 23.6 × 46.5 in (manufacturer comparison table)",
    "Suggested rider height": "5 ft–6 ft 3 in (manufacturer-listed)",
    "Charger and charge time": "54.6V / 2A; 7–8 hours in comparison table, 8 hours in specifications"
  },
  "source": "https://tomofree.com/products/t1max-ebike?variant=51294483775628",
  "sourceLinks": [
    {"label": "Tomofree warranty policy", "url": "https://tomofree.com/pages/warranty-policy"},
    {"label": "Tomofree return and refund policy", "url": "https://tomofree.com/pages/return-refund"}
  ],
  "evidence": "Manufacturer-specification editorial evaluation; exact-variant checkout observation; no ride test",
  "sections": [
    [
      "A broad equipment list in a small-wheel package",
      "The T1MAX combines 16 × 3-inch integrated tires with a removable battery, suspension, mechanical disc brakes, lighting and turn signals. Tomofree describes a three-step fold, and the published measurements put the folded bike at roughly 33 inches long and 24 inches high. That gives the design a clear role for apartment storage, a vehicle or an RV when a full-size bike takes too much room. The equipment list is broad, but the small wheels and tall adjustable setup are choices to assess in person; specifications alone cannot tell you whether the riding position or handling will suit your routes."
    ],
    [
      "Use the fold to solve storage, not frequent lifting",
      "Tomofree publishes a 70.11 lb weight in its specification section and 68 lb in the comparison table. The difference is unresolved, so plan around a roughly 70 lb bike. The battery is removable, but the seller does not state its separate weight; removing it cannot be assumed to make the remaining frame manageable on stairs. The listed folded width also varies between 15.72 and 15.75 inches. Measure the whole path into your storage space—including doors, vehicle openings and corners—and confirm the exact folded package before treating it as a compact carry-on option."
    ],
    [
      "Choose the battery size and read the performance claims carefully",
      "The selected 20Ah version is the lower-priced configuration; a 22.5Ah option is also listed. Tomofree advertises 20–40 miles with pedal assist, but that is a seller range claim rather than a Bike Tested ride result. The product details list a 1,000W peak motor, twist throttle and PAS button without identifying rated output, sensor type or a conventional drivetrain. The page describes a 28 mph maximum in its body while its title says 30 mph. It also lists both 48V and 48.1V battery figures. Ask for the current exact-variant specifications if speed, operating class or battery details are important to your decision."
    ],
    [
      "Get T1MAX documentation and fit details for your use",
      "Tomofree recommends riders from 5 ft to 6 ft 3 in and lists a 330 lb maximum load. Treat that as a published maximum, not evidence that the bike is approved for a passenger or that cargo can be added on top; ask how the figure is defined. The product page calls the bike TÜV Standard Certified but does not link a model-specific certificate there. Its manual download is labeled T1PRO, so it does not resolve T1MAX speed, assembly or classification questions. Confirm the exact documentation and local rules for your intended route. Tomofree's policy lists 12 months for the battery and motor, three months for the display, and shorter coverage for some wear parts."
    ],
    [
      "The 20Ah offer and our buying advice",
      "The exact 20Ah variant (SKU T1MAX-20AH) was listed at $499 on October 23, 2026. In the merchant checkout, SEBASTIANBASSOL was accepted for $29.94 off, leaving a $469.06 bike-item subtotal before shipping and tax. That observation applies only to this variant; the 22.5Ah option and other Tomofree products have not been checked. No address was entered, no order was placed, and the test cart was cleared. The product page showed Sold out while the Shopify feed marked the variant available, so check current pricing and availability on the official listing. A 30-day change-of-mind return carries a 12% restocking fee and customer-paid shipping under the published policy."
    ]
  ],
  "publishedOn": "2026-10-23",
  "updatedOn": "2026-10-23",
  "specsCheckedOn": "2026-10-23",
  "faqs": [
    ["How small does the Tomofree T1MAX fold?", "Tomofree lists a folded size of 33.1 × 15.75 × 24.41 inches in one section and a 15.72-inch width in its geometry section. The full bike weighs about 70 lb according to its own conflicting listings, so folding is more useful for storage than repeated carrying."],
    ["Does the T1MAX reach 28 or 30 mph?", "Tomofree's product details say 28 mph, while the page title says 30 mph. The linked manual identifies itself as T1PRO rather than T1MAX. Ask Tomofree for the exact T1MAX speed and classification documentation, then check the rules where you plan to ride."],
    ["What range does the T1MAX 20Ah claim?", "Tomofree lists 20–40 miles with pedal assist. That is a manufacturer claim, not a Bike Tested route measurement. Rider load, hills, speed, assistance, temperature, tire pressure and stops can change actual distance."],
    ["What support terms apply to the T1MAX?", "Tomofree's warranty page lists 12 months for the battery and motor, three months for the display, and one month for tires and several other parts. Its return policy allows 30-day change-of-mind returns with a 12% restocking fee and customer-paid shipping. Confirm the current terms for your exact order before buying."]
  ],
  "relatedReviews": [
    {"slug": "hiboy-ex6f-foldable-electric-bike", "reason": "Compare the T1MAX with another folding e-bike, the Hiboy EX6F, and its exact configuration and equipment."},
    {"slug": "ancheer-hummer-electric-bike", "reason": "For another compact fat-tire folder, compare the ANCHEER Hummer review and its US configuration."}
  ],
  "price": {
    "amountMinor": 49900,
    "currency": "USD",
    "region": "US",
    "variantId": "51294483775628",
    "variantLabel": "20Ah (SKU T1MAX-20AH)",
    "source": "https://tomofree.com/products/t1max-ebike?variant=51294483775628",
    "checkedOn": "2026-10-23",
    "isSalePrice": true
  },
  "eligibility": {
    "status": "eligible",
    "variantId": "51294483775628",
    "evidence": "docs/evidence/tomofree-t1max-folding-ebike.md#exact-variant-checkout"
  },
  "checkoutObservation": {
    "code": "SEBASTIANBASSOL",
    "stage": "checkout",
    "variantId": "51294483775628",
    "baseAmountMinor": 49900,
    "discountMinor": 2994,
    "afterAmountMinor": 46906,
    "currency": "USD",
    "checkedOn": "2026-10-23",
    "exclusions": "Exact US 20Ah variant 51294483775628 / SKU T1MAX-20AH only; $499.00 bike-item price before shipping and tax. No address was entered and no order was placed; the test cart was cleared."
  }
},
{
  "slug": "zwheel-d3-d-electric-scooter",
  "brand": "zwheel",
  "name": "Zwheel D3-D (ZSB2) Dual-Motor Electric Scooter",
  "model": "D3-D (ZSB2)",
  "image": "/images/products/zwheel-d3-d-electric-scooter.webp",
  "imageAlt": "Red and black Zwheel D3-D dual-motor electric scooter in a front three-quarter view",
  "imageWidth": 1200,
  "imageHeight": 1200,
  "category": "electric-mobility",
  "use": "weekend",
  "label": "For ground-level storage and rougher routes",
  "headline": "Dual drive and big tires, with real carry weight.",
  "description": "The D3-D pairs a dual-drive 48V system with 10-inch tubeless tires and front and rear spring suspension. Its 32 kg net listing and conflicting motor, range, speed, and model markings call for a careful exact-variant check.",
  "verdict": "We recommend the Zwheel D3-D (ZSB2) for riders who want a substantial dual-motor scooter for rougher routes and have ground-level storage plus a suitable place to ride under local rules. Its 10-inch tubeless tires, spring suspension, and listed 48V 20Ah pack point toward an adventure-focused setup. The 32 kg net weight makes daily carrying unrealistic, while conflicting motor, range, speed, and model markings call for written confirmation before checkout.",
  "strengths": [
    "The 10-inch tubeless off-road tires and independent front and rear spring suspension give the design a clear brief for broken pavement and mixed surfaces.",
    "Zwheel lists a 48V 20Ah battery and dual-drive configuration for the selected D3-D, with lighting, turn signals, and a brake light in the equipment list.",
    "The seller lists a 150 kg maximum load and a 32 kg net weight for the dual-drive version, useful figures to compare with rider needs and storage plans.",
    "The supplied Bike Tested code was accepted on the exact US Red variant in checkout."
  ],
  "tradeoffs": [
    "At 32 kg net and 36 kg boxed, the dual-drive version is a ground-level storage choice; the listing does not provide folded scooter dimensions.",
    "The listing conflicts on motor output: its headline and specification table say 1,200W per motor, while feature copy says dual 500W motors.",
    "The specification table claims 60 km for dual drive, while feature copy says up to 70 km. Neither figure is a Bike Tested range measurement.",
    "A 25 km/h speed limit appears alongside 45–50 km/h maximum-speed claims and a 25-to-45 km/h unlock description. Confirm the exact configuration and local access rules.",
    "The product title identifies D3-D (ZSB2), but several official gallery angles show K5 or K16 arm markings. Confirm the exact model and brake version for the Red variant before ordering."
  ],
  "specs": {
    "Selected configuration": "US Red; Shopify variant 48219169783962; title D3-D (ZSB2)",
    "Motor": "Dual drive: 1,200W × 2 in the specification table; feature copy elsewhere says dual 500W",
    "Battery": "48V 20Ah for dual drive (manufacturer-listed)",
    "Claimed range": "60 km dual-drive specification; up to 70 km in feature copy (conflict)",
    "Speed": "25 km/h speed limit listed; dual-drive maximum 50 km/h; unlock text says 25 to 45 km/h",
    "Wheels and tires": "10-inch tubeless off-road tires",
    "Suspension": "Independent front and rear spring suspension",
    "Brakes": "Oil disc or hydraulic disc version; the Red variant's brake version is not identified",
    "Frame": "Aluminum alloy (manufacturer-listed)",
    "Listed weight": "32 kg net / 36 kg gross for dual drive",
    "Maximum load": "150 kg (manufacturer-listed)",
    "Vehicle dimensions": "1,250 × 645 × 1,310 mm (manufacturer-listed)",
    "Package dimensions": "1,250 × 245 × 575 mm; folded vehicle dimensions not stated",
    "Water-resistance claim": "IPX54 in marketing copy; exact rating and use limits need model-specific confirmation",
    "Controls": "Tuya app unlock, cruise control, gear control, KM/mile switch, and lighting system"
  },
  "source": "https://zwheelsport.com/products/zwheel-d3-d?variant=48219169783962",
  "evidence": "Manufacturer-specification editorial evaluation; exact-variant checkout observation; no ride testing",
  "sections": [
    [
      "A dual-drive scooter with a clear route and storage brief",
      "Zwheel presents the D3-D as an all-terrain dual-motor scooter, listing 10-inch tubeless off-road tires, independent spring suspension at both ends, and lighting with turn signals. Those parts make it worth considering for riders whose routes include rougher pavement and who have room to store a full-size standing scooter. They do not establish ride comfort, traction, or braking performance; Bike Tested has not ridden or measured this model."
    ],
    [
      "Treat folding as a storage aid, not a carrying solution",
      "The dual-drive version is listed at 32 kg net and 36 kg gross. Zwheel describes the scooter as foldable, but it does not publish a folded vehicle size on this product page. The listed package dimensions are shipping measurements, not proof of the folded scooter's dimensions. Plan for ground-level storage and ask for the actual folded size before deciding whether it will fit a closet, trunk, or elevator."
    ],
    [
      "Ask which motor, speed, and range figures apply to the Red unit",
      "The D3-D page's dual-drive specification table says 1,200W × 2, 60 km, and up to 50 km/h. Elsewhere, feature copy calls the motors dual 500W and claims up to 70 km. A 25 km/h speed limit and a button unlock from 25 to 45 km/h add another unresolved distinction. These are manufacturer claims rather than test results. Request the Red unit's current manual, rated and peak output, range conditions, and delivered speed configuration, then check local vehicle rules."
    ],
    [
      "Confirm the model label and the version of the hardware",
      "The title identifies the scooter as D3-D (ZSB2), and the specification section also refers to D3D-S. Several other images in the official gallery show K5 or K16 markings on the swingarms. The listing names both oil-disc and hydraulic-disc versions without tying the Red variant to one. Ask Zwheel to confirm the model code, brake type, and pictured configuration for variant 48219169783962 before you rely on those details."
    ],
    [
      "The exact Red variant and reader-code observation",
      "The Zwheel D3-D Red variant was listed at $679.99 on October 23, 2026. In checkout, SEBASTIANBASSOL was accepted for $20.00 off, leaving a $659.99 item subtotal before shipping; the store states that tax is included in listed prices. This applies only to Red variant 48219169783962. No address was entered, shipping was not calculated, no order was placed, and the test cart was cleared. The product page showed both Many In Stock and a negative remaining-stock count, so this review makes no availability claim."
    ]
  ],
  "publishedOn": "2026-10-23",
  "updatedOn": "2026-10-23",
  "specsCheckedOn": "2026-10-23",
  "faqs": [
    ["How fast does the Zwheel D3-D go?", "The product page lists a 25 km/h speed limit, a 50 km/h dual-drive maximum, and a button unlock description from 25 to 45 km/h. Zwheel does not clearly reconcile these figures for the Red unit. Confirm its delivered configuration and check the rules where you intend to ride."],
    ["What range does the D3-D claim?", "The specification table lists 60 km for dual drive; marketing copy says up to 70 km. Zwheel does not provide enough test conditions in those statements to make them comparable. They are seller claims, not Bike Tested range results."],
    ["Is the D3-D easy to carry or store?", "Zwheel lists the dual-drive scooter at 32 kg net and describes it as foldable, but the product page does not give folded vehicle dimensions. The 1,250 × 245 × 575 mm figure is package size, not folded scooter size. Measure the storage route and ask the seller for the folded dimensions."],
    ["Which brakes come on the Red D3-D?", "The listing mentions oil-disc and hydraulic-disc versions without identifying which applies to Red variant 48219169783962. Ask Zwheel to confirm the delivered brake hardware and model code before ordering."]
  ],
  "relatedReviews": [
    {"slug": "ausom-gosoul-2-electric-scooter", "reason": "Compare another folding electric scooter and its exact single-motor configuration."},
    {"slug": "leoout-t85-electric-scooter", "reason": "Compare the D3-D with a seat-equipped scooter and review its exact variant evidence."}
  ],
  "price": {
    "amountMinor": 67999,
    "currency": "USD",
    "region": "US",
    "variantId": "48219169783962",
    "variantLabel": "Red (D3-D / ZSB2)",
    "source": "https://zwheelsport.com/products/zwheel-d3-d?variant=48219169783962",
    "checkedOn": "2026-10-23",
    "isSalePrice": false
  },
  "eligibility": {
    "status": "eligible",
    "variantId": "48219169783962",
    "evidence": "docs/evidence/zwheel-d3-d-electric-scooter.md#exact-variant-checkout"
  },
  "checkoutObservation": {
    "code": "SEBASTIANBASSOL",
    "stage": "checkout",
    "variantId": "48219169783962",
    "baseAmountMinor": 67999,
    "discountMinor": 2000,
    "afterAmountMinor": 65999,
    "currency": "USD",
    "checkedOn": "2026-10-23",
    "exclusions": "Exact US Red variant 48219169783962 only; $679.99 item price less $20.00 code discount, before shipping. Store states listed tax is included; shipping was not calculated because no address was entered. No order was placed; the test item was removed from the cart."
  }
},
{
  "slug": "happyrun-g300-se-ultra-electric-dirt-bike",
  "brand": "happyrun",
  "name": "HappyRun G300 SE Ultra Electric Dirt Bike",
  "model": "G300 SE Ultra",
  "image": "/images/products/happyrun-g300-se-ultra-electric-dirt-bike.webp",
  "imageAlt": "Black and orange HappyRun G300 SE Ultra electric dirt bike in a front three-quarter view",
  "imageWidth": 1200,
  "imageHeight": 1200,
  "category": "electric-mobility",
  "use": "weekend",
  "label": "For off-road riding with private ground access",
  "headline": "A fast dirt-bike setup with figures to verify.",
  "description": "A motorcycle-style electric dirt bike with a 60V battery, peak mid-drive claim, full suspension and hydraulic brakes. Conflicting weight, payload and fit figures call for an exact check before ordering.",
  "verdict": "We recommend the HappyRun G300 SE Ultra for riders seeking a high-speed, motorcycle-style electric dirt bike for off-road use on private property or designated OHV routes. Its 60V 31Ah battery, peak mid-drive claim, full suspension and hydraulic brakes point to a focused trail setup. It is not an everyday commuter: HappyRun claims 44 mph, and its own weight, payload and rider-height figures conflict. Confirm the delivered configuration and local access rules before buying.",
  "strengths": [
    "The 60V 31Ah battery and 6,000W peak mid-drive claims give the G300 SE Ultra a clear off-road performance brief.",
    "A hydraulic front fork, rear spring shock and hydraulic disc brakes are listed alongside full suspension.",
    "The 17-inch front and 14-inch rear off-road tires, 31.9-inch seat height and motorcycle-style controls distinguish it from a pedal-assist commuter e-bike.",
    "The product page describes the model for off-road use and directs riders to check local rules before using public streets."
  ],
  "tradeoffs": [
    "HappyRun claims speeds up to 44 mph and says the G300 SE Ultra is for off-road use; it is not presented as a street-legal commuter.",
    "The published weight figures do not reconcile: a specification line pairs 138 lb excluding the battery with 140 lb and a 21.8 lb battery, while the Shopify variant feed lists 58.967 kg.",
    "Maximum payload appears as both 330 lb and 350 lb, and rider-height guidance starts at 4 ft 1 in in the summary but 3 ft 11 in in the geometry section.",
    "The supplied code was rejected as invalid in checkout for the selected variant, so no code saving is confirmed."
  ],
  "specs": {
    "Selected configuration": "Default Title; Shopify variant 48049109500004; SKU G300se-ult-black",
    "Motor": "6,000W peak mid-drive (manufacturer-listed)",
    "Battery": "60V 31Ah lithium (1,860Wh calculated from listed voltage and capacity)",
    "Claimed range": "56–65 miles in the FAQ; up to 65 miles in product highlights and comparison copy",
    "Claimed top speed": "44 mph (manufacturer-listed; not independently measured)",
    "Peak torque": "240 N·m (manufacturer-listed)",
    "Suspension": "Full suspension; hydraulic front fork and rear spring shock (manufacturer-listed)",
    "Brakes": "Hydraulic; 190 × 3.4 mm rotors (manufacturer-listed)",
    "Wheels and tires": "17-inch front / 14-inch rear off-road tires",
    "Seat height": "31.9 inches (manufacturer-listed)",
    "Recommended rider height": "4 ft 1 in–6 ft 1 in in summary; 3 ft 11 in–6 ft 1 in in geometry",
    "Maximum payload": "330 lb in the summary; 350 lb in detailed specifications and comparison",
    "Listed weight": "Conflicting page figures of 138 lb excluding battery and 140 lb with a 21.8 lb battery; Shopify variant feed lists 58.967 kg",
    "Water resistance": "IPX5 (manufacturer claim)"
  },
  "source": "https://happyrunsports.com/products/g300se-ultra-electric-dirt-bike?variant=48049109500004",
  "evidence": "Manufacturer-specification editorial evaluation; exact-variant checkout code rejection; no ride testing",
  "sections": [
    [
      "An electric dirt bike, not a city e-bike",
      "HappyRun describes the G300 SE Ultra as an electric dirt bike for off-road riding on private property, designated trails and OHV areas. The page claims a 44 mph top speed and a 6,000W peak mid-drive motor, with a full-twist throttle and motorcycle-style controls. That makes local access rules, protective gear and a suitable riding area central buying questions. The seller does not present this model as a street-legal commuter; check local rules before riding anywhere public."
    ],
    [
      "The equipment list favors dirt, but performance remains a seller claim",
      "HappyRun lists a 60V 31Ah battery, 240 N·m peak torque, hydraulic front fork, rear spring shock and hydraulic brakes with 190 × 3.4 mm rotors. The staggered 17-inch front and 14-inch rear tires reinforce its dirt-bike layout. These are manufacturer specifications, not measured acceleration, range, braking or durability results. The advertised range spans 56–65 miles in the FAQ and reaches 65 miles in the product highlights; actual distance will depend on conditions and use."
    ],
    [
      "Get a reliable weight, load limit and fit answer",
      "The product page gives conflicting payload limits of 330 and 350 lb, and its rider-height range starts at 4 ft 1 in in the summary but 3 ft 11 in in geometry. Weight is less clear: one line pairs 138 lb without the battery with a 140 lb figure and a 21.8 lb battery, while the Shopify variant feed lists 58.967 kg. Treat the bike as a substantial machine and ask HappyRun to confirm the ready-to-ride weight, exact payload limit and fit range for the delivered G300 SE Ultra."
    ],
    [
      "The current listing and exact reader-code check",
      "On October 23, 2026, HappyRun listed the G300 SE Ultra default variant (48049109500004; SKU G300se-ult-black) at $1,189.00 USD. At checkout, the supplied Bike Tested code SEBASTIANBASSOL23 was rejected with “Enter a valid discount code.” The item remained $1,189.00 before shipping; no saving is confirmed for this variant. No address was entered, no order was placed and the test item was removed. This check does not establish whether the code works on other models or configurations."
    ]
  ],
  "publishedOn": "2026-10-23",
  "updatedOn": "2026-10-23",
  "specsCheckedOn": "2026-10-23",
  "faqs": [
    ["Is the HappyRun G300 SE Ultra street legal?", "HappyRun describes the G300 SE Ultra as an electric dirt bike for off-road use on private property, designated trails and OHV areas. Its page claims speeds up to 44 mph and advises checking local rules. Bike Tested does not determine whether it can be registered or used on public roads in your area."],
    ["How far does the G300 SE Ultra go on one charge?", "HappyRun's FAQ gives a 56–65-mile range, while product highlights and comparison copy say up to 65 miles. These are manufacturer claims, not Bike Tested measurements; speed, terrain, rider load and conditions affect actual range."],
    ["How heavy is the G300 SE Ultra, and what can it carry?", "HappyRun's page gives conflicting figures: 138 lb excluding the battery, a 140 lb figure, and a 21.8 lb battery. The Shopify variant feed lists 58.967 kg. Payload is listed as both 330 and 350 lb. Ask HappyRun to confirm the delivered bike's weight and payload before planning transport or riding."],
    ["Does SEBASTIANBASSOL23 discount the G300 SE Ultra?", "On October 23, 2026, checkout rejected SEBASTIANBASSOL23 as an invalid discount code for the Default Title variant (48049109500004; SKU G300se-ult-black). The listed $1,189.00 item price remained unchanged, so no saving is confirmed for this configuration. Other models and variants were not tested."]
  ],
  "relatedReviews": [
    {"slug": "voltrover-m5-electric-dirt-bike", "reason": "Compare another high-power electric dirt bike and check how its speed and motor claims are documented."},
    {"slug": "ekx-x21-max-electric-dirt-bike", "reason": "Compare the G300 SE Ultra with another off-road electric dirt bike and its exact-variant price evidence."}
  ],
  "price": {
    "amountMinor": 118900,
    "currency": "USD",
    "region": "US",
    "variantId": "48049109500004",
    "variantLabel": "Default Title (SKU G300se-ult-black)",
    "source": "https://happyrunsports.com/products/g300se-ultra-electric-dirt-bike?variant=48049109500004",
    "checkedOn": "2026-10-23",
    "isSalePrice": true
  },
  "eligibility": {
    "status": "unresolved",
    "variantId": "48049109500004",
    "evidence": "docs/evidence/happyrun-g300-se-ultra-electric-dirt-bike.md#exact-variant-checkout"
  },
  "codeCheckObservation": {
    "code": "SEBASTIANBASSOL23",
    "stage": "checkout",
    "result": "invalid-code",
    "variantId": "48049109500004",
    "baseAmountMinor": 118900,
    "discountMinor": 0,
    "afterAmountMinor": 118900,
    "currency": "USD",
    "checkedOn": "2026-10-23",
    "message": "Enter a valid discount code",
    "exclusions": "Exact Default Title variant 48049109500004 / SKU G300se-ult-black only; checkout rejected the code as invalid and the $1,189.00 item price remained unchanged before shipping. No address was entered and no order was placed; the test cart was cleared."
  }
},
{
  "slug": "eskute-nova-rr-5500w-electric-dirt-bike",
  "brand": "eskute",
  "name": "Eskute NOVA RR 5500W Electric Dirt Bike",
  "model": "NOVA RR 5500W",
  "image": "/images/products/eskute-nova-rr-5500w-electric-dirt-bike.webp",
  "imageAlt": "Black Eskute NOVA RR 5500W electric dirt bike, side view",
  "imageWidth": 1200,
  "imageHeight": 1200,
  "category": "electric-mobility",
  "use": "private",
  "label": "For off-road riding with private-ground access",
  "headline": "A full-size dirt-bike setup with one fit detail to confirm.",
  "description": "The NOVA RR pairs a seller-listed 60V 30Ah battery and 5,500W peak output with full suspension and hydraulic brakes. Its high-speed dirt-bike format calls for a suitable route, measured storage, and a fit check before purchase.",
  "verdict": "We recommend the Eskute NOVA RR for riders seeking a full-size electric dirt bike for off-road use on a suitable private property or permitted course. Eskute lists a 5,500W peak output, 60V 30Ah battery, full suspension and hydraulic brakes, giving the build a clear performance brief. The product page claims speeds up to 50 mph, so treat it as a dirt-bike platform rather than a commuter bicycle. Confirm rider fit and local access before ordering.",
  "strengths": [
    "The 60V 30Ah battery stores 1,800Wh by calculation from Eskute's listed voltage and capacity, a substantial specification for an off-road machine.",
    "Full suspension, dual hydraulic brakes and staggered 17 × 3.0-inch front / 14 × 3.0-inch rear tires suit the dirt-bike format on paper.",
    "Eskute lists a 350 lb maximum payload and a recommended rider-height range, giving buyers useful starting points for a fit conversation.",
    "SEBASTIANBASSOL was accepted in checkout for the exact Black / 5500W / 60V 30Ah variant; the cart showed a $15 order-level discount."
  ],
  "tradeoffs": [
    "The seller lists a 35–50 mph speed range. Confirm where this exact vehicle may be ridden and what registration, equipment and access rules apply locally; the page does not establish road legality.",
    "At a listed 143 lb, the bike needs ground-level storage and a realistic plan for moving, loading and servicing it.",
    "The recommended 5 ft 6 in–6 ft 7 in rider range conflicts with a sizing widget that displays `5.7`, so ask Eskute to confirm the geometry and rider fit for this configuration.",
    "One visible seller-hosted review entry is a template prompt requesting `30 authentic-sounding` comments. We do not use that widget as independent rider-use evidence."
  ],
  "specs": {
    "Selected configuration": "Black / Bike(5500W，60V 30Ah); variant 58555389149558; SKU NOVA-RR-BK",
    "Motor listing": "5,500W peak; product page field is labeled `Hub MotorPeak`, so placement/rating terminology is unclear",
    "Battery": "60V 30Ah (1,800Wh calculated from listed voltage and capacity)",
    "Claimed range": "40–60 miles in specifications; up to 60 miles in product highlights",
    "Claimed top speed": "35–50 mph (manufacturer-listed; not measured by Bike Tested)",
    "Suspension": "Full suspension; heavy-duty front fork and hydraulic rear suspension (manufacturer-listed)",
    "Brakes": "Dual hydraulic brakes with 185mm rotors (manufacturer-listed)",
    "Wheels and tires": "17 × 3.0-inch front / 14 × 3.0-inch rear off-road tires",
    "Maximum payload": "350 lb (manufacturer-listed)",
    "Listed weight": "143 lb (manufacturer-listed; not weighed by Bike Tested)",
    "Recommended rider height": "5 ft 6 in–6 ft 7 in on product page; sizing widget also displays `5.7`, which needs seller clarification"
  },
  "source": "https://eskute.com/products/eskute%C2%AE-nova-rr-5500w-electric-dirt-bike?variant=58555389149558",
  "evidence": "Manufacturer-specification editorial evaluation; exact-variant checkout code-acceptance observation; no ride testing",
  "sections": [
    ["A dirt-bike brief, not a city e-bike setup", "Eskute lists a 5,500W peak output and speeds from 35 to 50 mph, with a 60V 30Ah battery. The product page calls the NOVA RR an electric dirt bike and presents motorcycle-style equipment rather than a conventional commuter layout. Those are seller specifications, not Bike Tested speed or range measurements. Choose a permitted riding area first, then confirm local classification and access for this exact vehicle; the listing does not establish street legality."],
    ["Suspension and braking are specified for rougher ground", "The listing pairs full suspension with a heavy-duty front fork, hydraulic rear suspension, dual hydraulic brakes and 185mm rotors. Eskute also lists 17 × 3.0-inch front and 14 × 3.0-inch rear off-road tires. That is a coherent equipment list for buyers comparing dirt-bike formats. It does not establish traction, comfort, stopping distance or durability in use, so treat each performance figure as a manufacturer claim and plan an appropriate introduction to the machine."],
    ["Confirm fit and storage before you commit", "Eskute lists a 143 lb bike, a 350 lb maximum payload and a recommended rider-height range of 5 ft 6 in to 6 ft 7 in. The same page's sizing widget displays `5.7`, which does not resolve to a clear rider-height range. Ask the seller to confirm the measurement, seat height and reach for the exact NOVA RR, then compare those details with the rider and protective equipment. The weight also favors a roll-in storage and loading plan over frequent lifting."],
    ["The reader code was accepted, but checkout showed an order discount", "On October 23, 2026, checkout accepted SEBASTIANBASSOL for the Black / Bike(5500W，60V 30Ah) variant (58555389149558; SKU NOVA-RR-BK). The cart contained one $1,299.00 bike and an automatically added $0 helmet; checkout applied a $15 order-level discount and showed a $1,284.00 subtotal. Because the reduction was allocated at cart level, we do not present $1,284.00 as a line-item bike price. No delivery address was entered, shipping was not calculated, and the checkout's New Jersey tax estimate was provisional. No order was placed; the test cart was cleared."],
    ["Read the seller-hosted comments cautiously", "One entry visible in Eskute's review widget reads like a prompt asking for 30 `authentic-sounding` comments based on the product page. We therefore do not use that widget as independent rider testimony or as evidence of reliability. The listed specifications can help narrow a comparison, but ask Eskute for written fit, warranty and service details before purchase."]
  ],
  "publishedOn": "2026-10-23",
  "updatedOn": "2026-10-23",
  "specsCheckedOn": "2026-10-23",
  "faqs": [
    ["Is the Eskute NOVA RR street legal?", "Eskute presents the NOVA RR as an electric dirt bike and lists speeds up to 50 mph. Its product page does not establish road legality or permission in a particular location. Confirm the vehicle's classification, registration and route requirements with local authorities before riding outside a permitted private area or course."],
    ["What range does the NOVA RR claim?", "Eskute's specifications list 40–60 miles, while product highlights say up to 60 miles. These are manufacturer estimates, not Bike Tested range measurements. Rider load, speed, terrain, temperature and riding mode affect actual distance."],
    ["How heavy is the NOVA RR, and who does it fit?", "Eskute lists 143 lb, a 350 lb maximum payload and a recommended rider-height range of 5 ft 6 in–6 ft 7 in. The sizing widget also displays `5.7`, so ask the seller to clarify the measurement and confirm seat height and reach for the exact configuration."],
    ["Was SEBASTIANBASSOL accepted for the NOVA RR?", "Checkout accepted SEBASTIANBASSOL on October 23, 2026, for Black / Bike(5500W，60V 30Ah), variant 58555389149558 (SKU NOVA-RR-BK). It applied a $15 order-level discount to a cart with the $1,299 bike and an automatically added $0 helmet. The $1,284 subtotal is not reported as a bike line price because checkout did not allocate the discount to an item. Shipping was uncalculated; no address or order was entered, and the test cart was cleared."]
  ],
  "relatedReviews": [
    {"slug": "voltrover-m5-electric-dirt-bike", "reason": "Compare another compact electric dirt bike with a lower seller-listed top speed and different fit details; check its off-road access and current store terms."},
    {"slug": "ekx-x21-max-electric-dirt-bike", "reason": "Compare another high-output electric dirt bike and review how its manufacturer documents speed, range and exact-variant checkout."}
  ],
  "price": {
    "amountMinor": 129900,
    "currency": "USD",
    "region": "US",
    "variantId": "58555389149558",
    "variantLabel": "Black / Bike(5500W，60V 30Ah) (SKU NOVA-RR-BK)",
    "source": "https://eskute.com/products/eskute%C2%AE-nova-rr-5500w-electric-dirt-bike?variant=58555389149558",
    "checkedOn": "2026-10-23",
    "isSalePrice": true
  },
  "eligibility": {
    "status": "eligible",
    "variantId": "58555389149558",
    "evidence": "docs/evidence/eskute-nova-rr-5500w-electric-dirt-bike.md#exact-variant-checkout"
  },
  "codeCheckObservation": {
    "code": "SEBASTIANBASSOL",
    "stage": "checkout",
    "result": "accepted-order-discount",
    "variantId": "58555389149558",
    "baseAmountMinor": 129900,
    "discountMinor": 1500,
    "afterAmountMinor": 128400,
    "currency": "USD",
    "checkedOn": "2026-10-23",
    "message": "Checkout accepted the code and applied a $15.00 order-level discount to a cart containing the $1,299.00 bike and an automatically added $0 helmet. The $1,284.00 cart subtotal is not treated as a bike line-item price because the checkout did not allocate the order discount to an item.",
    "exclusions": "Exact Black / Bike(5500W，60V 30Ah) variant 58555389149558 / SKU NOVA-RR-BK only; shipping was uncalculated because no delivery address was entered. A provisional New Jersey tax estimate appeared before address details. No order was placed; the test cart was cleared."
  }
  },
  {
    "slug": "actbest-cozy-wide-tire-step-through-electric-bike",
    "brand": "actbest",
    "name": "Actbest Cozy Wide-Tire Step-Through Electric Bike",
    "model": "Cozy, Dark Gray / US (variant 52286186291482; SKU AT21US00HP-V)",
    "image": "/images/products/actbest-cozy-wide-tire-step-through-electric-bike.webp",
    "imageAlt": "Dark Gray Actbest Cozy step-through electric bike with wide tires, front suspension, fenders, and a rear rack",
    "imageWidth": 1200,
    "imageHeight": 1200,
    "category": "electric-bikes",
    "use": "commute",
    "label": "For low-step, comfort-first commutes",
    "headline": "Easy access and wide tires, with 72 lb to handle.",
    "description": "The Cozy pairs a low step-through frame, adjustable handlebar, 24 × 3.0-inch tires, removable battery and rear rack. Its 72.2 lb listed weight and unusually high speed claim deserve a close look before you choose it for daily city riding.",
    "verdict": "We recommend the Cozy for riders who want an easy step-through, an adjustable upright cockpit and 24 × 3.0-inch tires for errands and comfort-first paved routes. Its removable 48V 15.6Ah battery, adjustable front fork, fenders, lights and rear rack make the equipment list practical for everyday use. At 72.2 lb, it is heavy to lift or store; its 35+ mph claim also sits beside a Class 3 label, so confirm the delivered speed setting, local rules, fit and load limit before buying.",
    "strengths": [
      "The 17.32-inch step-through height and seller-suggested 5 ft 1 in–6 ft 2 in rider range give shoppers useful starting points for fit; the low opening can make frequent mounting and dismounting easier.",
      "The handlebar angle adjusts from 10° to 40°, so riders can tune reach and posture instead of being locked into one cockpit position.",
      "The 24 × 3.0-inch tires, adjustable front fork with lockout, front and rear lights, fenders and Shimano 7-speed drivetrain make a useful everyday equipment package on paper.",
      "The removable 48V 15.6Ah battery, LCD/app display and 120 lb rated rear rack support a practical commute and errand setup; Actbest lists five pedal-assist levels.",
      "Actbest's exact Dark Gray US configuration accepted the supplied 3% Bike Tested code in checkout, with the item-level reduction recorded below."
    ],
    "tradeoffs": [
      "At 72.2 lb and 70.47 inches long, the Cozy takes real space and is a substantial bike to lift. Measure storage access and plan how you will move it before ordering.",
      "The specification table labels it Class 3 while also claiming a 35+ mph top speed. Those statements do not tell you the delivered configuration's speed limit or local classification; confirm both with Actbest and check the rules for your route.",
      "Actbest lists 360 lb total payload and a separate 120 lb rear-rack capacity. Confirm how the seller defines total load and whether your rider, cargo and accessories fit within its limits.",
      "The up-to-80-mile pedal-assist range is a manufacturer claim, not a Bike Tested ride result. Plan with a margin for hills, speed, assist level, cargo, temperature and tire pressure.",
      "The Cozy manual download linked from Actbest's manuals page returned 404 when checked. The product listing says a manual is included in the box; ask for a current copy and delivered speed-setting details before relying on the missing download."
    ],
    "specs": {
      "Configuration / SKU": "Dark Gray / US; variant 52286186291482; SKU AT21US00HP-V",
      "Motor": "1,800 W peak; 110 N·m torque (manufacturer-listed)",
      "Class / top-speed claims": "Class 3 and 35+ mph are both listed by Actbest; confirm the delivered setup and applicable local rules",
      "Battery": "Removable 48 V / 15.6 Ah (manufacturer-listed)",
      "Claimed range": "Up to 80 miles with pedal assist (manufacturer claim; not independently measured)",
      "Pedal assist": "Five levels; LCD display with app connectivity (manufacturer-listed)",
      "Drivetrain and brakes": "Shimano 7-speed drivetrain; disc brakes (brake type not specified)",
      "Tires and fork": "24 × 3.0-inch tires; adjustable front suspension with lockout",
      "Listed weight": "72.2 lb",
      "Rider height and seat": "Seller suggests 5 ft 1 in–6 ft 2 in; seat height 29.5–38.58 in",
      "Step-through height": "17.32 in",
      "Dimensions": "70.47 × 26.69 × 45.98 in; 44.09 in wheelbase",
      "Load limits": "360 lb total payload; 120 lb rear rack capacity (manufacturer-listed)",
      "Charger / charging time": "54.6 V / 2 A; 7–8 hours (manufacturer-listed)",
      "Water rating": "IPX5 (manufacturer-listed)"
    },
    "source": "https://actbestbike.com/products/cozy-wide-tire-step-through-commuter-electric-bike?variant=52286186291482",
    "sourceLinks": [
      {
        "label": "Actbest user manuals",
        "url": "https://actbestbike.com/pages/user-manuals"
      }
    ],
    "evidence": "Manufacturer-specification editorial evaluation; exact Dark Gray US variant and code observed at checkout; no Bike Tested ride, range, speed or fit test",
    "sections": [
      [
        "An easy step-through with room to adjust your reach",
        "The Cozy's 17.32-inch step-through height is its clearest everyday fit feature. Actbest suggests riders from 5 ft 1 in to 6 ft 2 in and lists a 29.5–38.58-inch seat-height range. The handlebar angle adjusts from 10° to 40°, which gives you more choice in hand position and posture. Use those figures to screen the bike, then confirm that the actual saddle height, reach and control position work for you; a published rider range cannot settle personal fit on its own."
      ],
      [
        "Wide tires and a useful commuter equipment list",
        "The 24 × 3.0-inch tires, adjustable front fork with lockout and front/rear lighting point toward pavement, neighborhood roads and rougher paths. A Shimano 7-speed drivetrain gives you gearing choices, while disc brakes and full fenders round out the listed equipment. The LCD connects to Actbest's app for ride data and settings. These are seller specifications; they do not establish how the bike rides, brakes or handles on a particular route."
      ],
      [
        "Plan for the size and load before you bring it home",
        "Actbest lists the Cozy at 72.2 lb and 70.47 inches long. That is a full-size bike to store and move, even with a removable battery. Measure doorways, storage space and any vehicle rack, and confirm the carrier's approved load. The seller lists a 360 lb total payload and a 120 lb rear rack, but the bike's own documentation should clarify how those limits apply to the rider, accessories and cargo you plan to carry."
      ],
      [
        "Treat the long-range and speed figures as seller claims",
        "The removable 48V 15.6Ah battery is listed for up to 80 miles of pedal-assist range. That is an advertised maximum, not a Bike Tested measurement; speed, hills, assist level, rider and cargo load, temperature, wind and tire pressure can change actual distance. The same specification table labels Cozy Class 3 and gives a 35+ mph top speed. Ask Actbest to confirm the speed limit and delivered configuration, then check the rules for your route instead of assuming the label resolves the difference."
      ],
      [
        "The exact Dark Gray code result and Cozy manual",
        "On October 23, 2026, Actbest listed the Dark Gray US Cozy (variant 52286186291482; SKU AT21US00HP-V) at $749.00. Checkout accepted SEBASTIAN3% and reduced the single-bike amount by $22.47 to a $726.53 item subtotal before shipping and tax. A provisional tax estimate appeared before address details; no delivery address was entered and no order was placed. Actbest lists a Cozy manual as included in the package, but the manual-download link returned 404 when checked. Request a current copy and exact speed-setting details before ordering if those documents will affect your decision."
      ]
    ],
    "publishedOn": "2026-10-23",
    "updatedOn": "2026-10-23",
    "specsCheckedOn": "2026-10-23",
    "faqs": [
      [
        "Is the Actbest Cozy easy to step onto?",
        "Actbest lists a 17.32-inch step-through height and suggests a rider-height range of 5 ft 1 in–6 ft 2 in. The seat adjusts from 29.5 to 38.58 inches. Treat those as screening measurements and confirm reach, stand-over clearance and control access for your own fit."
      ],
      [
        "Can the Cozy really travel 80 miles on a charge?",
        "Actbest advertises up to 80 miles with pedal assist. That is a manufacturer estimate, not a Bike Tested measurement. Speed, assist level, hills, rider and cargo weight, temperature, wind and tire pressure affect actual range, so plan with a margin."
      ],
      [
        "Is the Cozy a Class 3 e-bike?",
        "Actbest labels the Cozy Class 3 and also lists a 35+ mph top speed. The product page does not resolve that difference for every regional configuration. Confirm the delivered speed limit and model labeling with Actbest, then check local rules for the roads or paths you plan to use."
      ],
      [
        "How much can the Cozy carry?",
        "Actbest lists a 360 lb total payload and a 120 lb rear-rack capacity. Ask the seller how the total payload applies to rider, cargo and accessories, and keep every load within the published limits for the exact configuration."
      ]
    ],
    "relatedReviews": [
      {
        "slug": "gebike-g03-city-commuter-ebike",
        "reason": "Compare another step-through city bike with narrower tires and a lower listed weight."
      },
      {
        "slug": "burchda-u8-step-thru-electric-bike",
        "reason": "Compare a different step-through fat-tire setup, battery size and exact-variant code result."
      }
    ],
    "price": {
      "amountMinor": 74900,
      "currency": "USD",
      "region": "US",
      "variantId": "52286186291482",
      "variantLabel": "Dark Gray (SKU AT21US00HP-V)",
      "source": "https://actbestbike.com/products/cozy-wide-tire-step-through-commuter-electric-bike?variant=52286186291482",
      "checkedOn": "2026-10-23",
      "isSalePrice": true
    },
    "eligibility": {
      "status": "eligible",
      "variantId": "52286186291482",
      "evidence": "docs/evidence/actbest-cozy-wide-tire-step-through-electric-bike.md#exact-variant-checkout"
    },
    "checkoutObservation": {
      "code": "SEBASTIAN3%",
      "stage": "checkout",
      "variantId": "52286186291482",
      "baseAmountMinor": 74900,
      "discountMinor": 2247,
      "afterAmountMinor": 72653,
      "currency": "USD",
      "checkedOn": "2026-10-23",
      "exclusions": "Dark Gray / US variant only; before shipping and tax; no delivery address or order."
    }
  },
  {
    "slug": "actbest-striker-max-awd-moped-ebike",
    "brand": "actbest",
    "name": "Actbest Striker Max AWD Electric Bike",
    "model": "Striker Max, Red / US (variant 51857948770586; SKU AT59MaxUS01HP-11)",
    "image": "/images/products/actbest-striker-max-awd-moped-ebike.webp",
    "imageAlt": "Black Actbest Striker Max moped-style e-bike with red decals, 20 by 4 inch tires and dual rear shocks",
    "imageWidth": 1200,
    "imageHeight": 1200,
    "category": "electric-mobility",
    "use": "private",
    "label": "For private-property routes with switchable dual motors",
    "headline": "Twin batteries and full suspension, with a substantial footprint to plan around.",
    "description": "The Striker Max pairs switchable dual motors with two removable 52 V batteries, 20 × 4-inch tires and full suspension. At 109.8 lb, with conflicting speed, class and length details, it calls for a careful fit, storage and route check.",
    "verdict": "We recommend the Actbest Striker Max for riders with private-property or other permitted routes who want switchable dual-motor drive, two removable batteries and a moped-style full-suspension frame. Actbest lists 3,000 W peak output, 20 × 4-inch tires and hydraulic brakes, while its up-to-120-mile pedal-assist range is an ideal-condition claim. At 109.8 lb, with conflicting speed and length figures plus unconfirmed code eligibility, confirm fit, transport and the exact setup before choosing it.",
    "strengths": [
      "Actbest lists switchable single- or dual-motor AWD with up to 3,000 W peak output, giving the rider two stated drive modes without requiring both motors for every use.",
      "Two removable 52 V 20 Ah batteries provide 40 Ah of combined capacity. Actbest advertises up to 120 miles with pedal assist under ideal conditions; actual range varies with speed, terrain, load, motor mode and assist use.",
      "The 20 × 4-inch tires, hydraulic front fork, dual rear shocks and hydraulic brakes make a substantial equipment list for rougher private-property routes on paper.",
      "A Shimano 7-speed drivetrain, PAS levels 0–5, 360 lb listed payload and suggested rider height of 5 ft 3 in–6 ft 3 in provide useful details to compare with your routes, fit and load."
    ],
    "tradeoffs": [
      "At 109.8 lb, this is a heavy vehicle to lift or store. Actbest's specification table lists 67.7 inches of length, while its geometry chart gives 64.96 inches; measure your actual storage and transport space and confirm the relevant figure with the seller.",
      "Actbest's page title says 37 mph, while the product heading and specification table say 38+ mph; the table also labels it Class 3. Ask Actbest to confirm the delivered US speed setting and model documentation, then check the rules for your intended route.",
      "The up-to-120-mile figure is Actbest's ideal-condition pedal-assist claim, not a Bike Tested range result. Expect distance to depend on route, rider and cargo load, temperature, assist level, throttle use and motor mode.",
      "The supplied SEBASTIAN3% code and 3% brand benefit are available to check, but the exact Red / US variant did not produce a verifiable model discount during our cart attempt. No after-code amount or eligibility is confirmed."
    ],
    "specs": {
      "Configuration / SKU": "Red / US; variant 51857948770586; SKU AT59MaxUS01HP-11",
      "Drive system": "Switchable dual-motor AWD; dual hub motors, up to 3,000 W peak (manufacturer-listed)",
      "Top-speed and class claims": "37 mph in the page title; 38+ mph in the heading and specifications; Class 3 label in the specification table",
      "Battery": "Two removable 52 V 20 Ah batteries; 40 Ah combined capacity (manufacturer-listed)",
      "Claimed range": "Up to 120 miles with pedal assist under ideal conditions (Actbest claim; not measured by Bike Tested)",
      "Pedal assist": "PAS levels 0–5 (manufacturer-listed)",
      "Drivetrain": "Shimano 7-speed (manufacturer-listed)",
      "Brakes": "Hydraulic brakes (manufacturer-listed)",
      "Tires and wheels": "20 × 4.0-inch fat tires (manufacturer-listed)",
      "Suspension": "Hydraulic front fork and dual rear shock absorbers (manufacturer-listed)",
      "Rider height and seat": "Suggested rider height 5 ft 3 in–6 ft 3 in; seat height 27.56–31.50 inches",
      "Listed weight": "109.8 lb",
      "Dimensions": "67.7 × 26.8 × 41.3 inches in the product table; geometry lists 64.96 inches total length, 41.34-inch wheelbase and 27.56-inch handlebar length",
      "Maximum payload": "360 lb (manufacturer-listed)",
      "Charging": "58.8 V / 2 A charger; 9–10 hours (manufacturer-listed)",
      "Water rating": "IPX5 (manufacturer-listed)"
    },
    "source": "https://actbestbike.com/products/striker-max?variant=51857948770586",
    "evidence": "Manufacturer-specification editorial evaluation. Exact Red / US variant and listing price recorded; the Bike Tested code route did not produce an exact-model acceptance or a usable discount result. No Bike Tested ride, speed, braking or range test.",
    "sections": [
      [
        "Switchable dual-motor drive and two removable batteries",
        "Actbest builds the Striker Max around two hub motors with switchable single- or dual-motor drive, listing up to 3,000 W peak output. The second battery gives the package a total listed capacity of two 52 V 20 Ah packs, both removable. Actbest advertises up to 120 miles with pedal assist under ideal conditions and says range changes with speed, load, terrain, assist, temperature and motor mode. Treat the distance as a seller claim rather than a route guarantee; frequent dual-motor or throttle use is among the reasons to plan with a charging margin."
      ],
      [
        "A complete equipment list for rougher routes",
        "The 20 × 4-inch tires sit alongside a hydraulic front fork and dual rear shocks. The page also lists hydraulic brakes, a Shimano 7-speed drivetrain and PAS levels 0–5. Those parts make the Striker Max look well-equipped on paper, but specifications do not establish how the bike accelerates, brakes or feels on a particular surface. Its weight and moped-style frame point toward planned private-property use and storage, rather than a light bicycle you casually carry upstairs."
      ],
      [
        "Check rider fit, weight and transport together",
        "Actbest suggests riders from 5 ft 3 in to 6 ft 3 in and gives a 27.56–31.50-inch seat-height range. Use those numbers as a starting screen, then check inseam, reach and control position against the exact bike. At 109.8 lb, the Striker Max needs a realistic ground-level storage and transport plan. The product table says it is 67.7 inches long, but the geometry chart says 64.96 inches; ask which measurement applies to the Red / US configuration before buying a rack or confirming a tight storage space."
      ],
      [
        "Resolve the speed label and route fit before buying",
        "Actbest's page title describes a 37 mph model, while the page heading and specification table use 38+ mph; the same table labels it Class 3. Those seller statements do not establish the delivered speed setting or where the exact vehicle may be used. Ask Actbest to confirm the Red / US configuration in writing and check the rules for your roads, trails or property. The 360 lb payload is also a seller figure; confirm how it applies to rider, cargo and accessories."
      ],
      [
        "Check the exact code and final cart amount",
        "The Actbest partner listing supplies the Bike Tested code SEBASTIAN3% for a stated 3% brand-level benefit. We added the Red / US Striker Max variant to a fresh cart, but applying the code route redirected to an empty cart. The cart did not show exact-model acceptance or savings, so this review does not calculate a discounted price. Use the code from the buy box and check the final item subtotal for your exact configuration before ordering."
      ]
    ],
    "publishedOn": "2026-10-24",
    "updatedOn": "2026-10-24",
    "specsCheckedOn": "2026-10-24",
    "faqs": [
      [
        "How far does the Actbest Striker Max go on one charge?",
        "Actbest advertises up to 120 miles with pedal assist under ideal conditions from its two removable 52 V 20 Ah batteries. That is a manufacturer claim, not a Bike Tested range result. Terrain, rider and cargo weight, speed, assist level, throttle use, temperature and single- or dual-motor mode affect actual distance."
      ],
      [
        "Is the Striker Max a 37 mph or 38+ mph model?",
        "Actbest's page title says 37 mph, while its product heading and specification table say 38+ mph. The same table labels the bike Class 3. Ask Actbest to confirm the delivered US speed setting and documentation, then check the rules for the exact route or property where you intend to ride."
      ],
      [
        "What rider size and storage space should I plan for?",
        "Actbest suggests a 5 ft 3 in–6 ft 3 in rider height and lists a 27.56–31.50-inch seat range. The bike weighs 109.8 lb. Its product table gives a 67.7-inch length, while the geometry chart says 64.96 inches, so confirm the exact dimensions and check reach, inseam, doorway clearance and transport capacity before ordering."
      ],
      [
        "How much can the Striker Max carry?",
        "Actbest lists a 360 lb maximum payload. Confirm how that limit applies to the rider, cargo and accessories for the Red / US configuration, and keep any carrier within its own stated load limits."
      ]
    ],
    "relatedReviews": [
      {
        "slug": "happyrun-g300-se-ultra-electric-dirt-bike",
        "reason": "Compare another moped-style high-power electric bike with a single-battery setup and different speed claims; confirm its exact configuration and route fit."
      },
      {
        "slug": "voltrover-m5-electric-dirt-bike",
        "reason": "Compare a private-property electric dirt bike with a single-motor design and a different battery and fit brief."
      }
    ],
    "price": {
      "amountMinor": 149900,
      "currency": "USD",
      "region": "US",
      "variantId": "51857948770586",
      "variantLabel": "Red / US (SKU AT59MaxUS01HP-11)",
      "source": "https://actbestbike.com/products/striker-max?variant=51857948770586",
      "checkedOn": "2026-10-24",
      "isSalePrice": true
    },
    "eligibility": {
      "status": "unresolved",
      "variantId": "51857948770586",
      "evidence": "docs/evidence/actbest-striker-max-awd-moped-ebike.md#exact-variant-code-check"
    }
  },
 {"slug":"lankeleisi-mg740plus-dual-motor-electric-bike","brand":"lankeleisi","name":"Lankeleisi MG740Plus Dual Motor Electric Bike","model":"MG740Plus Grey / US (variant 43058170495175; SKU MG740-Grey / US)","image":"/images/products/lankeleisi-mg740plus-dual-motor-electric-bike.webp","imageAlt":"Gray Lankeleisi MG740Plus electric bike with dual hub motors and 26 by 4 inch fat tires","imageWidth":1200,"imageHeight":1200,"category":"electric-bikes","use":"weekend","label":"For taller riders considering dual-motor power","headline":"Two hub motors and wide tires, with fit and weight to plan around.","description":"The MG740Plus pairs two 48V 1,000W hub motors with a removable 48V 20Ah Samsung battery and 26 × 4.0-inch tires. At a listed 34kg, with conflicting range, torque and speed details, it calls for a careful fit, storage and route check.","verdict":"We recommend the Lankeleisi MG740Plus for taller riders who want a fat-tire e-bike with selectable front and rear hub-motor drive. Its removable 48V 20Ah Samsung battery, 26 × 4.0-inch tires, front suspension and hydraulic brakes make a broad equipment package for mixed surfaces on paper. At a listed 34kg, with a 74-inch frame and an unclassified 45–51km/h speed claim, it needs careful fit, storage and route planning. Confirm the setup, written support terms and code eligibility before ordering.","strengths":["Two 48V 1,000W hub motors and a display that can switch between single- and dual-motor output give riders a choice of drive configuration; Lankeleisi does not detail that control behavior further.","The removable 48V 20Ah Samsung battery is rated at 960Wh from its nominal voltage and capacity. Lankeleisi lists up to 70km in pure-electric mode and 150km with pedal assist.","A 100mm lockable front fork, 26 × 4.0-inch Chaoyang tires, hydraulic disc brakes, front lighting and a Shimano seven-speed drivetrain create a substantial mixed-surface equipment list.","The geometry chart gives a 170–195cm recommended height, 31.4–37.4-inch saddle range, 74-inch overall length and 180kg maximum load as useful starting points for fit and carrying plans."],"tradeoffs":["At 34kg (74.95lb) and 74 inches long, the MG740Plus needs ground-level storage and a realistic lifting or loading plan; the listing does not describe a folding design.","Lankeleisi lists a 45–51km/h maximum-speed claim but does not state an e-bike class on the product page. Confirm the configured speed and classification for your intended routes.","The description states up to 95Nm of torque while the specification table lists 90Nm. The page calls the bike full suspension but specifies a 100mm front fork without detailing rear travel or shock setup; confirm the exact build.","The product page lists a 12-point Hall speed sensor rather than describing a torque sensor. Riders who want power to track pedal force should ask how assistance responds before choosing it."],"specs":{"Motor":"Dual 48V 1,000W brushless hub motors (manufacturer-listed as a 2,000W dual-motor system)","Torque":"Up to 95Nm in the description; 90Nm in the specification table","Battery":"Removable 48V 20Ah Samsung lithium pack using 18650 cells; 960Wh calculated from nominal volts × amp-hours","Claimed range":"60–70km pure electric and 120–150km pedal assist in the table; the feature copy says up to 70km and 150km","Assist sensor and display":"12-point Hall speed sensor; color LCD with speed, trip, battery, assist level and single/dual motor output selection","Drivetrain":"Shimano seven-speed; TX50 shifter, M310 derailleur and KMC 7-speed chain (manufacturer-listed)","Brakes":"DYISLAND de-energized hydraulic disc brakes (manufacturer-listed)","Tires and wheels":"26 × 4.0-inch Chaoyang fat tires; aluminum-alloy rims","Front suspension":"Lockable oil-spring fork with 100mm travel (manufacturer-listed)","Top-speed claim":"45–51km/h (about 28–32mph); product page does not state an e-bike class","Recommended rider height":"170–195cm (about 5ft 7in–6ft 5in; manufacturer geometry chart)","Saddle height":"31.4–37.4 inches (manufacturer geometry chart)","Listed weight":"34kg (74.95lb; manufacturer-listed)","Dimensions":"74 inches overall length; 46-inch wheelbase; 28.3-inch handlebar width; 27.9-inch standover (manufacturer geometry chart)","Maximum load":"180kg on the geometry chart; the specification table rounds this to 400lb","Warranty page":"One year for listed components, two years for battery and motors, three years for frame; original-owner terms apply, subject to exclusions"},"source":"https://lankeleisi.com/products/mg740plus-dual-motor-electric-bike?variant=43058170495175","sourceLinks":[{"label":"MG740Plus geometry chart","url":"https://lankeleisi.com/cdn/shop/files/mg740_cf72de16-5fc7-41c1-9142-4818fccff27c_1.webp?v=1755155452"},{"label":"LANKELEISI warranty terms","url":"https://lankeleisi.com/pages/warranty"},{"label":"MG740PLUS English owner manual","url":"https://cdn.shopify.com/s/files/1/0549/7172/7933/files/MG740PLUS_Manual.pdf?v=1705637136"}],"evidence":"Manufacturer-specification editorial evaluation; current product listing and exact Grey / US variant observed; partner-supplied reader code amount and model eligibility are unspecified and checkout was not possible while the variants were listed sold out; no Bike Tested ride or range test.","sections":[["Dual hub motors for riders who can use the extra setup","The MG740Plus is built around two 48V 1,000W hub motors, one at each wheel. Lankeleisi says the color display can switch between single- and dual-motor output, giving riders a way to choose the listed drive configuration. The page does not explain how assist levels, throttle response or motor switching behave in practice, so treat the power figures as specifications rather than a promise of hill speed or traction. The 26 × 4.0-inch tires, hydraulic brakes and lockable front fork suit a mixed-surface brief. The top-speed claim reaches 45–51km/h, and the product page does not state an e-bike class; confirm the delivered setup and the rules that apply to your route."],["Compare the battery and range claims with your actual route","The removable Samsung pack is listed at 48V and 20Ah, or 960Wh when calculated from those nominal values. Lankeleisi gives 60–70km in pure-electric mode and 120–150km with pedal assist in its specification table; the feature copy says up to 70km and 150km, while a separate highlight says 70–130km per charge. The specification table says its figures come from a 60kg load, 25°C and 20km/h average on a flat road. These are manufacturer-reported conditions, not Bike Tested measurements. Speed, assist level, terrain, temperature, rider and cargo load, and tire pressure affect distance. Use the battery figure to compare capacity, then plan with a comfortable charging margin instead of treating the longest claim as a route guarantee."],["Fit and storage are part of the decision","Lankeleisi recommends the MG740Plus for riders 170–195cm tall and lists a 31.4–37.4-inch saddle range. Its geometry chart also gives a 27.9-inch standover, 28.3-inch handlebar, 46-inch wheelbase and 74-inch total length. Check your inseam, reach and control position against the full diagram; the height range alone cannot settle fit. At 34kg (74.95lb), it is a substantial bike to carry. Measure storage access and vehicle-rack limits, and plan for a ground-level parking space rather than frequent stair lifting."],["Resolve the specification details before choosing a setup","The product description claims up to 95Nm of torque while the specification table says 90Nm. Lankeleisi calls the MG740Plus full suspension, but the table specifies a 100mm front fork and does not give rear-shock travel or configuration. The geometry chart and table also express the 180kg load limit as roughly 396lb and 400lb respectively. Those differences are small or unresolved, but they matter when comparing specifications. Ask Lankeleisi to confirm the exact torque figure, rear suspension and payload interpretation for the US Grey variant. The page lists a 12-point Hall speed sensor; riders seeking torque-sensor response should confirm how the assist reacts to pedal input."],["Check support coverage, availability and the supplied code","The warranty page, last updated September 2023, lists one year for specified components, two years for motors and battery, and three years for the frame. It limits coverage to the original owner and lists exclusions; read the current written terms before ordering. On October 23, 2026, the official US listing showed both Grey and Blue variants as sold out, so checkout and code acceptance could not be checked. The Bike Tested partner roster supplies SEBASTIANBASSOL but gives no discount amount or model eligibility. Copy it from the buy box if you want to check the exact terms when the Grey / US variant becomes orderable; no saving is confirmed."]],"publishedOn":"2026-10-23","updatedOn":"2026-10-23","specsCheckedOn":"2026-10-23","faqs":[["How far does the MG740Plus go on a charge?","Lankeleisi lists 60–70km in pure-electric mode and 120–150km with pedal assist, while a separate page highlight says 70–130km per charge. The specification table states a 60kg load, 25°C and 20km/h average on a flat road. These are manufacturer-reported conditions, not Bike Tested range results; rider load, speed, terrain, temperature and assist level change actual distance."],["What rider height does the MG740Plus fit?","The manufacturer geometry chart recommends 170–195cm and lists a 31.4–37.4-inch saddle height, 27.9-inch standover and 22.5–26.3-inch seat-to-handlebar spacing. Check the complete geometry against your inseam and preferred reach rather than treating the height range as a guarantee."],["Does the MG740Plus have full suspension?","Lankeleisi calls it full suspension and lists a 100mm lockable front fork, but its specification table does not describe rear-shock travel or setup. Confirm the rear suspension details for the Grey / US configuration before ordering."],["What does the MG740Plus warranty cover?","Lankeleisi’s warranty page, last updated September 2023, lists one year for specified components, two years for motors and battery, and three years for the frame. The terms are limited to the original owner and include exclusions, so confirm the current policy and local service process before buying."]],"relatedReviews":[{"slug":"hiknight-h2-pro-off-road-ebike","reason":"Compare another 26 × 4.0-inch dual-motor e-bike with a different frame, battery and listed speed claims."},{"slug":"actbest-cozy-wide-tire-step-through-electric-bike","reason":"Compare a step-through fat-tire commuter if your main routes are paved and easy access matters more than dual-motor drive."}],"price":{"amountMinor":99900,"currency":"USD","region":"US","variantId":"43058170495175","variantLabel":"Grey / US (SKU MG740-Grey / US)","source":"https://lankeleisi.com/products/mg740plus-dual-motor-electric-bike?variant=43058170495175","checkedOn":"2026-10-23","isSalePrice":true},"eligibility":{"status":"unresolved","variantId":"43058170495175","evidence":"docs/evidence/lankeleisi-mg740plus-dual-motor-electric-bike.md#offer-and-availability"}},
  {
    slug: 'cycplus-as2-ultra-tiny-e-pump',
    brand: 'cycplus',
    name: 'CYCPLUS AS2 Ultra Tiny E-Pump for Bike',
    model: 'AS2 Ultra, US (variant 45372870623390; SKU AS2 Ultra)',
    image: '/images/products/cycplus-as2-ultra-tiny-e-pump.webp',
    imageAlt: 'Black CYCPLUS AS2 Ultra compact electric bicycle pump with its pressure display and controls visible',
    imageWidth: 1200,
    imageHeight: 1200,
    category: 'cycling-technology',
    use: 'commute',
    label: 'For the smallest roadside kit',
    headline: 'Pocket-size inflation with a pressure display.',
    description: 'An 87 g USB-C inflator with a live pressure display, target auto-stop and 120 PSI manufacturer-listed maximum. Its small battery makes the maker’s full-charge reference count especially important.',
    verdict: 'We recommend the CYCPLUS AS2 Ultra for riders who want a pressure-controlled emergency inflator that takes very little room in a jersey pocket or frame bag. At a manufacturer-listed 87 g and 65 × 47.5 × 28 mm, it is easy to pack; the display, adjustable target and automatic shutoff offer more control than a basic hand pump. Its 400 mAh battery is the defining compromise: CYCPLUS’s manual lists just one 700 × 25 fill or one 700 × 28 fill from 0 to 120 PSI on a full charge. Treat it as a compact roadside backup, keep it charged, and use the included hose above 100 PSI. The US cart accepted the reader code on the $94.99 sale price for this exact variant.',
    strengths: [
      'At 87 g and 65 × 47.5 × 28 mm (manufacturer-listed), the pump is exceptionally easy to carry as a backup.',
      'The LED screen shows live pressure and battery level; the target adjusts with plus/minus buttons and inflation stops automatically at the set pressure.',
      'The manual supports direct Presta use, a reversible nozzle insert for Schrader, and an included hose with adapters for Schrader, Presta and ball valves.',
      'The package includes a silicone case, waterproof bag, hose, Presta converter, ball needle, cable and spare seal part.'
    ],
    tradeoffs: [
      'The 400 mAh battery is small. CYCPLUS’s full-charge reference lists one 700 × 25 fill from 0 to 120 PSI in 120–140 seconds, or one 700 × 28 fill in 190–210 seconds; the manual labels these experimental data for reference only.',
      'CYCPLUS says to use the hose above 100 PSI to prevent leakage. For TPU inner tubes with resin valves, the manual says the hose is required to prevent overheating; the valve may be hot immediately after inflation.',
      'The manual lists a waterproof bag but does not specify an ingress-protection rating for the pump itself. Keep the inflator protected from water.'
    ],
    specs: {
      'Maximum pressure': '120 PSI (manufacturer-listed)',
      'Display and controls': 'LED screen with live pressure and battery level; adjustable target; PSI/BAR selection; automatic shutoff at target',
      'Dimensions': '65 × 47.5 × 28 mm (manufacturer-listed)',
      'Weight': '87 g (manufacturer-listed)',
      'Battery': '400 mAh, 7.4 V, 2.96 Wh (manufacturer-listed)',
      'Charging': 'USB Type-C; manual lists 5 V / 2 A or 7 V / 1.5 A input',
      'Inflation current': '2.5–7.5 A (manual)',
      'Valve compatibility': 'Presta-ready nozzle; reverse the included insert for Schrader. Hose and supplied adapters support Presta, Schrader and ball valves.',
      'Included': 'Inflator, silicone case, waterproof bag, spare seal part, hose, ball needle, Presta valve converter and charging cable (manual)',
      'Full-charge reference': '700 × 25: one 0–120 PSI fill in 120–140 sec; 700 × 28: one 0–120 PSI fill in 190–210 sec. Manufacturer experimental reference data, not Bike Tested measurements.'
    },
    source: 'https://www.cycplus.com/products/as2ultra?variant=45372870623390',
    sourceLinks: [
      { label: 'CYCPLUS AS2 Ultra user manual', url: 'https://cdn.shopify.com/s/files/1/0413/9597/8398/files/BZ-4141010202-04_AS2ULTRA_-_1.pdf?v=1755507491' },
      { label: 'CYCPLUS × Team Bahrain Victorious', url: 'https://www.cycplus.com/pages/team-bahrain-victorious' }
    ],
    evidence: 'Manufacturer specification evaluation; official manual reference data; exact-variant US cart observation',
    sections: [
      ['A pump that can stay in the pocket', 'The AS2 Ultra’s case is its strongest practical argument. CYCPLUS lists a 65 × 47.5 × 28 mm body at 87 g, small enough to keep in a jersey pocket or a compact repair kit. It is a convenience-first backup for a roadside flat, not a reason to retire a floor pump for routine home inflation. The official 2026 Team Bahrain Victorious page also presents the model as newly launched kit for the team; those are manufacturer claims, not independent test results.'],
      ['Set a pressure instead of guessing', 'The manual shows an LED display for current pressure and battery level. Riders can switch PSI and BAR, set a target with the plus and minus buttons, then start inflation; the pump automatically stops when it reaches that target. The set pressure remains on screen for three seconds before the display returns to the live reading. A readable gauge and cutoff are useful for roadside top-ups, provided the target comes from the tire and rim makers rather than the pump’s maximum.'],
      ['Plan around one high-pressure fill', 'The listed 120 PSI ceiling is not a promise of repeated full-pressure inflations. On a full charge, CYCPLUS’s English manual gives one 700 × 25 tire fill from 0 to 120 PSI in 120–140 seconds, and one 700 × 28 fill in 190–210 seconds. It also lists three 700 × 25 fills from 0 to 80 PSI and two 700 × 28 fills at that same pressure. The manual calls these experimental reference data only, so use them as a guide to the battery’s limits rather than a guarantee for every tire or condition.'],
      ['The hose matters at higher pressure', 'The nozzle is ready for Presta, and the manual shows how to reverse its insert for Schrader. It recommends the hose for Schrader setups and requires it above 100 PSI to prevent leakage at the nozzle. For TPU inner tubes with resin valves, CYCPLUS warns that the hose is needed to avoid overheating; a valve can also be hot just after use. The box includes a hose, a Presta converter, a ball needle, a silicone case, a waterproof bag, a cable and a spare seal part.'],
      ['A code checked against the sale price', 'The US product page listed the single AS2 Ultra variant at $94.99, down from $119.00, on October 24, 2026. In the cart, SEBASTIANBASSOL applied another $4.74 to that $94.99 sale price, leaving a $90.25 item subtotal before shipping and tax. The result is specific to variant 45372870623390 (SKU AS2 Ultra); the cart was cleared without entering an address or placing an order.']
    ],
    relatedReviews: [
      { slug: 'cycplus-as2-pro-max-tiny-e-pump', reason: 'Compare the Ultra’s 87 g carry weight with the larger AS2 Pro Max and its higher manufacturer-stated full-charge fill counts.' }
    ],
    faqs: [
      ['How many bicycle tires can the AS2 Ultra inflate on a charge?', 'CYCPLUS’s manual lists, on a full charge, three 700 × 25 fills from 0 to 80 PSI, two from 0 to 110 PSI, and one from 0 to 120 PSI. For 700 × 28 tires it lists two from 0 to 80 PSI and one each at 0–110 and 0–120 PSI. A 29 × 2.2 tire is listed for two 0–40 PSI fills or one 0–50 PSI fill. The manufacturer labels these experimental reference data, not guarantees.'],
      ['Can the AS2 Ultra inflate both Presta and Schrader valves?', 'Yes. The manual shows the nozzle set for Presta by default and reversed for Schrader. It recommends the hose for Schrader, and says to use the hose above 100 PSI. For TPU inner tubes with resin valves, it warns that the hose is required to prevent overheating.'],
      ['Is 120 PSI the right pressure for my tire?', 'Not automatically. CYCPLUS lists 120 PSI as the pump’s maximum. Use pressure guidance for your exact tire, rim, load and riding conditions, and stay within the lowest applicable component limit.'],
      ['What comes with the AS2 Ultra?', 'CYCPLUS’s manual lists the inflator, silicone case, waterproof bag, spare seal part, hose, ball needle, Presta valve converter and charging cable. Check the current listing for the package attached to your order.'],
      ['Did SEBASTIANBASSOL work on the AS2 Ultra?', 'Yes. On October 24, 2026, the US cart accepted the 5% code on the exact AS2 Ultra variant, reducing its $94.99 sale price by $4.74 to $90.25 before shipping and tax. This was a cart check only; no address was entered and no order was placed.']
    ],
    publishedOn: '2026-10-24',
    updatedOn: '2026-10-24',
    specsCheckedOn: '2026-10-24',
    price: {
      amountMinor: 9499,
      currency: 'USD',
      region: 'US',
      variantId: '45372870623390',
      variantLabel: 'AS2 Ultra, US (SKU AS2 Ultra)',
      source: 'https://www.cycplus.com/products/as2ultra?variant=45372870623390',
      checkedOn: '2026-10-24',
      isSalePrice: true
    },
    eligibility: {
      status: 'eligible',
      variantId: '45372870623390',
      evidence: 'docs/evidence/cycplus-as2-ultra-tiny-e-pump.md#exact-variant-cart-check'
    },
    checkoutObservation: {
      code: 'SEBASTIANBASSOL',
      stage: 'cart',
      variantId: '45372870623390',
      baseAmountMinor: 9499,
      discountMinor: 474,
      afterAmountMinor: 9025,
      currency: 'USD',
      checkedOn: '2026-10-24',
      exclusions: 'US Default Title variant only; before shipping and tax; no address entered or order.'
    }
  },
  {
    slug: 'cycplus-t7-smart-bike',
    brand: 'cycplus',
    name: 'CYCPLUS T7 Smart Bike',
    model: 'T7, US (variant 45853562110110; SKU T7)',
    image: '/images/products/cycplus-t7-smart-bike.webp',
    imageAlt: 'Black and orange CYCPLUS T7 smart indoor bike with integrated resistance unit',
    imageWidth: 1200,
    imageHeight: 1200,
    publishedOn: '2026-10-24',
    updatedOn: '2026-10-24',
    specsCheckedOn: '2026-10-24',
    category: 'cycling-technology',
    use: 'recreation',
    label: 'For connected indoor training',
    headline: 'An integrated smart bike with broad fit adjustment and a premium price.',
    description: 'The T7 combines electronic shifting, app and computer connectivity, and eight selectable crank lengths in a dedicated indoor-bike format. Its $1,499 listing, 28 kg weight and large floor footprint make space, fit and budget part of the decision.',
    verdict: 'We recommend the CYCPLUS T7 for riders planning a dedicated indoor-training setup who want an integrated bike with broad fit adjustment and support for common training connections. Its eight crank-length settings and adjustable stack and reach offer useful setup range on paper, while the product page lists BLE, ANT+, ANT+ FE-C and FTMS. At $1,499 and 28 kg, it calls for a considered space and budget plan. The supplied code did not apply to the exact US cart variant, and the power, gradient and noise figures remain manufacturer claims rather than Bike Tested measurements.',
    strengths: [
      'The listed 150–175 mm crank range offers eight selectable lengths, alongside adjustable stack, reach and saddle height. That gives riders several fit points to check before choosing a permanent indoor bike.',
      'BLE 5.0, ANT+, ANT+ FE-C and FTMS support connection to a range of training apps and cycling computers. CYCPLUS lists power, cadence and speed outputs, with left-right balance and pedal smoothness available through compatible devices when the T7 is used as a power meter.',
      'Electronic shifting offers 24 virtual gear combinations and three speed settings, with Shimano and SRAM shifting logic listed. The handlebar buttons are also described as Zwift steering controls.',
      'The dedicated smart-bike format does not require removing a rear wheel or mounting a separate bicycle on a trainer, according to CYCPLUS. The package includes pedals, a phone holder, cycling-computer mount, cushioning mat and setup tools.'
    ],
    tradeoffs: [
      'At 28 kg and 1,065 × 717 mm across its floor dimensions, the T7 needs a planned training spot. Transport wheels help reposition it, but it is not a compact trainer to lift and store after every ride.',
      'Check the listed stack, reach, saddle range and 700 mm minimum inseam against your own fit before ordering. CYCPLUS also says it fits riders 155 cm and taller; that height guidance cannot replace checking the contact points and adjustment limits.',
      'CYCPLUS lists up to 2,200 W sprint output, ±1% power accuracy and 52 dB at 200 W and 90 rpm. These are manufacturer specifications and a stated noise condition, not measurements by Bike Tested.',
      'The $1,499 US cart did not accept the supplied SEBASTIANBASSOL code for variant 45853562110110. The brand-level 5% offer was accepted on two other exact CYCPLUS variants, but that does not establish T7 eligibility.'
    ],
    specs: {
      'Sprint output': 'Up to 2,200 W (manufacturer-listed; not independently measured)',
      'Power accuracy': '±1% claimed; CYCPLUS says no spindown calibration is required',
      'Simulated gradient': '−10% to +20% (manufacturer-listed)',
      'Torque figures': '244 N·m maximum bottom-bracket torque and 85 N·m motor peak torque, listed separately by CYCPLUS',
      'Noise claim': '52 dB at 200 W and 90 rpm (manufacturer-stated condition; not measured by Bike Tested)',
      'Connectivity': 'BLE 5.0, ANT+, ANT+ FE-C and FTMS',
      'Data outputs': 'Power, cadence, speed, left-right balance and pedal smoothness; balance and smoothness require a compatible computer or app with the T7 connected as a power meter',
      'Electronic shifting': '24 virtual gear combinations, three speed settings, Shimano/SRAM shifting logic and handlebar controls listed for Zwift steering',
      'Cranks and Q-factor': 'Eight selectable crank lengths from 150–175 mm; 149 mm Q-factor',
      'Fit adjustment': 'Stack 485–680 mm; reach 365–480 mm; saddle height 565–880 mm; minimum inseam 700 mm; CYCPLUS recommends riders 155 cm and taller',
      'Maximum rider weight': '120 kg (manufacturer-listed)',
      'Weight and dimensions': '28 kg; 1,065 × 717 × 875 mm; listed floor footprint 0.77 m²',
      'Warranty': 'Two-year full-device warranty listed by CYCPLUS',
      'Included': 'T7 with seat post and steerer, handlebar assembly, front support with transport wheels, rear support, power adapter and cable, pedals, Z7 phone holder, cycling-computer mount, cushioning mat, hex wrenches, 15 mm open wrench and four M8 screws'
    },
    source: 'https://www.cycplus.com/products/t7-smart-bike?variant=45853562110110',
    sourceLinks: [],
    evidence: 'Manufacturer-specification evaluation; official US product listing and exact-variant cart observation; no Bike Tested performance testing.',
    sections: [
      ['An indoor bike that keeps the fit adjustments on the bike', 'The T7 gives indoor riders a purpose-built frame rather than asking them to mount an outdoor bike on a separate trainer. CYCPLUS lists eight crank-length options from 150 to 175 mm, plus stack from 485 to 680 mm, reach from 365 to 480 mm and saddle height from 565 to 880 mm. Those ranges make the adjustment chart a central part of the purchase: compare your current position, inseam and handlebar reach before committing to a heavy indoor setup.'],
      ['Connect it to the training system you already use', 'CYCPLUS lists BLE 5.0, ANT+, ANT+ FE-C and FTMS. The page says the bike can send power, cadence and speed, while left-right balance and pedal smoothness depend on a compatible computer or app and the T7 being connected as a power meter. Confirm your preferred software and computer support the needed profile before buying; a list of connection standards does not by itself establish every app feature or data display.'],
      ['Treat the power and noise numbers as listing claims', 'The manufacturer lists up to 2,200 W sprint output, ±1% power accuracy, no spindown calibration, and simulated gradients from −10% to +20%. It also lists 52 dB at 200 W and 90 rpm. Those figures describe CYCPLUS’s product claims and stated noise condition, not Bike Tested testing. The page gives both 244 N·m maximum bottom-bracket torque and 85 N·m motor peak torque; they are separate specifications and should not be compared as if they describe the same measurement.'],
      ['Plan the space and complete package', 'The listed 28 kg frame measures 1,065 × 717 × 875 mm and occupies 0.77 m². The front support has transport wheels, but the bike still needs a stable place to live and enough room for a fan, screen and safe movement around the pedals. The listed box includes pedals, a phone holder, a computer mount, a mat and basic tools, so check the included-item list against any extra setup accessories you want.'],
      ['The code result is specific to the T7 cart', 'CYCPLUS listed the US T7 variant 45853562110110 (SKU T7) at $1,499 on October 24, 2026. In the cart, SEBASTIANBASSOL showed “Discount code cannot be applied to your cart”; the item remained $1,499. The brand’s supplied 5% code has separate accepted cart observations for AS2 Pro Max and AS2 Ultra, but neither establishes T7 eligibility. The cart was cleared without an address or order, so use the listed T7 price and check any current merchant promotion directly.']
    ],
    faqs: [
      ['Does the CYCPLUS T7 work with indoor-training apps?', 'CYCPLUS lists BLE 5.0, ANT+, ANT+ FE-C and FTMS. It lists power, cadence and speed output, with balance and pedal-smoothness data dependent on a compatible app or computer and a power-meter connection. Confirm the profile and features supported by your own training app.'],
      ['How should I check the T7 fit?', 'Compare your position with the listed stack (485–680 mm), reach (365–480 mm), saddle height (565–880 mm), 700 mm minimum inseam and eight crank options from 150 to 175 mm. CYCPLUS recommends riders 155 cm and taller, but your contact points and inseam are the more useful checks.'],
      ['How loud is the CYCPLUS T7?', 'CYCPLUS lists 52 dB at 200 W and 90 rpm. That is the manufacturer’s stated condition, not an independent Bike Tested measurement; room acoustics and riding conditions can change perceived noise.'],
      ['Does the CYCPLUS code apply to the T7?', 'The exact US T7 cart at $1,499 did not apply SEBASTIANBASSOL on October 24, 2026. The code has been accepted on two other exact CYCPLUS pump variants, which does not establish eligibility for the T7.']
    ],
    price: {
      amountMinor: 149900,
      currency: 'USD',
      region: 'US',
      variantId: '45853562110110',
      variantLabel: 'Default Title / US (SKU T7)',
      source: 'https://www.cycplus.com/products/t7-smart-bike?variant=45853562110110',
      checkedOn: '2026-10-24',
      isSalePrice: false
    },
    eligibility: {
      status: 'unresolved',
      variantId: '45853562110110',
      evidence: 'docs/evidence/cycplus-t7-smart-bike.md#exact-variant-cart-check'
    },
    codeCheckObservation: {
      code: 'SEBASTIANBASSOL',
      stage: 'cart',
      result: 'no-discount',
      variantId: '45853562110110',
      baseAmountMinor: 149900,
      discountMinor: 0,
      afterAmountMinor: 149900,
      currency: 'USD',
      checkedOn: '2026-10-24',
      message: 'Discount code cannot be applied to your cart',
      exclusions: 'Exact US variant 45853562110110 / SKU T7 only; shipping/tax not calculated; no address or order; test cart cleared.'
    }
  },
  {
    slug: 'eahora-m1ps-ironbone-horse',
    brand: 'eahora',
    name: 'Eahora M1PS Ironbone Horse Electric Motorcycle',
    model: 'Ironbone Horse, 2026 US (variant 55761854169256; SKU MSK1172)',
    image: '/images/products/eahora-m1ps-ironbone-horse.webp',
    imageAlt: 'Black Eahora M1PS Ironbone Horse electric motorcycle in side profile',
    imageWidth: 1200,
    imageHeight: 1200,
    publishedOn: '2026-10-24',
    updatedOn: '2026-10-24',
    specsCheckedOn: '2026-10-24',
    category: 'electric-mobility',
    use: 'recreation',
    label: 'For motorcycle-style electric cruising',
    headline: 'A long chopper cruiser with a motorcycle-scale footprint.',
    description: 'A manufacturer-listed 4,000W hub motor and 72V 40Ah battery sit in a distinctive chopper-style frame. At 238.1 lb, 80.7 inches long and 37.4 inches wide, the Ironbone Horse calls for measured storage, transport and route planning.',
    verdict: 'We recommend the Eahora M1PS Ironbone Horse for buyers who want a chopper-style electric vehicle and have room for its 238.1 lb, 80.7-inch-long frame. The 72V 40Ah battery, girder fork and dual rear shocks give it a distinctive specification package, while 318 mm hydraulic disc rotors are listed at both ends. Eahora describes the model as an electric motorcycle in its US FAQ, so confirm the vehicle’s classification and any riding requirements with your local motor vehicle authority before buying. The advertised range has no stated test conditions, several product-page specifications conflict, and the exact US cart did not apply the supplied reader code.',
    strengths: [
      'The 72V 40Ah (2,880Wh) Samsung battery is a substantial listed capacity for a large electric cruiser.',
      'A steel girder fork with parallelogram linkage and adjustable dual hydraulic rear shocks distinguish the chassis from a conventional bicycle-style fork and rigid rear end.',
      'Eahora lists 318 mm hydraulic disc rotors at the front and rear, plus integrated lighting and turn signals.',
      'Three throttle gears, a 150A controller and a 440 lb maximum combined rider, equipment and cargo load are listed for the exact model family.'
    ],
    tradeoffs: [
      'At 238.1 lb and 80.7 inches long by 37.4 inches wide, this is a large vehicle to store, maneuver or transport. Measure every doorway and the full loading route; frequent lifting is not a realistic plan.',
      'Eahora’s FAQ says the M1PS is typically treated as an electric motorcycle in most US states because of its speed and power. Confirm the classification, licensing, registration, equipment and route rules that apply where you plan to ride.',
      'The 34–74 mile range is a manufacturer claim without test conditions on the product page. Treat it as an estimate, not a Bike Tested range result or a route-planning guarantee.',
      'The page gives 170 N·m in its technical table and 178 N·m in promotional copy; charging is described as both 3–4 hours and 4–6 hours. Its display is called IPX6 and IP66 in different sections while the whole scooter is listed as IPX5.',
      'The geometry chart recommends riders from 5 ft 4 in, while another page section says 5 ft 2 in. The listed size guidance cannot replace checking the exact controls and riding position in person.'
    ],
    specs: {
      'Motor': '4,000W brushless geared hub motor (manufacturer-listed)',
      'Maximum torque': '170 N·m in the technical table; promotional copy says 178 N·m (conflicting manufacturer figures)',
      'Battery': '72V 40Ah (2,880Wh) Samsung lithium battery (manufacturer-listed)',
      'Advertised range': '34–74 miles per charge; manufacturer claim with no stated test conditions',
      'Throttle': 'Three gears; 72V 150A integrated controller listed',
      'Weight and dimensions': '238.1 lb with battery; 80.7 in long × 37.4 in wide; 47.2 in handlebar height',
      'Seat and clearance': '25.6 in seat height; 8.07 in ground clearance; 60.24 in wheelbase',
      'Recommended rider height': '5 ft 4 in–6 ft 6 in in geometry chart; another product section says 5 ft 2 in–6 ft 6 in',
      'Payload': '440 lb maximum for rider, equipment and cargo combined (manufacturer-listed)',
      'Brakes': 'Hydraulic disc brakes with 318 mm front and rear rotors (manufacturer-listed)',
      'Suspension': 'Steel girder front fork with parallelogram linkage; adjustable dual hydraulic rear shocks',
      'Tires': 'Front 120/40-14; rear 215/40-13; tubeless (manufacturer-listed)',
      'Charging': '72V ~15A charger, 100–240V input; product copy says 3–4 hours while FAQ says 4–6 hours',
      'Water-resistance claims': 'Whole scooter IPX5 in the technical table; display is described as IP66 there and IPX6 elsewhere',
      'Lighting': 'Headlamp, front and rear turn signals, brake light and plate light (manufacturer-listed)'
    },
    source: 'https://eahoraescooter.com/products/2026-eahora-m1ps-ironbone-horse?variant=55761854169256',
    sourceLinks: [],
    evidence: 'Manufacturer-specification evaluation; official US product listing and exact-variant cart observation; no Bike Tested performance testing.',
    sections: [
      ['A chopper-style electric vehicle with a large footprint', 'The Ironbone Horse stands out through its long frame, ape-hanger bars and girder fork. Eahora lists a 4,000W brushless geared hub motor, a 72V 40Ah (2,880Wh) battery and three throttle gears. The ride character and performance figures remain manufacturer claims; Bike Tested has not measured acceleration, hill climbing, braking distance or range. This format is best considered by buyers specifically seeking a large cruiser-style electric vehicle, rather than a bicycle substitute for everyday errands.'],
      ['Plan for its weight before considering the ride', 'Eahora lists the scooter at 238.1 lb with the battery and gives dimensions of 80.7 inches long, 37.4 inches wide and 47.2 inches to the handlebars. Its 25.6-inch seat and 60.24-inch wheelbase add to the full-size motorcycle-like proportions. Map the route from delivery point to storage, including turns, gates and ramps. The 440 lb payload includes rider, equipment and cargo together; do not treat it as a cargo allowance on top of rider weight.'],
      ['Treat range and charging figures as unresolved claims', 'The product page gives a 34–74 mile range but does not state a rider weight, speed, temperature, terrain or assistance setting for that figure. The page also lists a roughly 15A charger, describes a 3–4-hour full charge in marketing copy and says 4–6 hours in its FAQ. These figures do not establish a dependable range or charge schedule for a particular route. Ask Eahora for the conditions and charger configuration tied to the exact variant if either figure affects your decision.'],
      ['Read the safety and fit details as a checklist', 'Hydraulic disc brakes with 318 mm rotors are listed at both wheels, along with a girder fork and adjustable dual rear shocks. Those specifications do not replace an inspection or braking test. The page gives 170 N·m in its technical table and 178 N·m in promotional material. It also calls the display IP66 in one section and IPX6 in another, while listing the whole scooter as IPX5. Rider-height guidance differs between sections as well. Ask the seller to confirm the specifications that apply to the shipped configuration, and check the actual controls and fit before relying on a suggested height range.'],
      ['Confirm local vehicle requirements and your route', 'Eahora’s US FAQ describes the M1PS as an electric motorcycle in most states because of its speed and power, and says a motorcycle license and registration are typically required. Vehicle classes and access rules depend on location and the exact vehicle. Check with the motor vehicle authority and land manager for your intended route before treating this as a road or trail vehicle. Do not infer bicycle-lane, sidewalk or public-trail access from its electric motor or the product listing.'],
      ['The supplied code did not reduce this exact cart', 'On October 24, 2026, the official US Ironbone Horse variant 55761854169256 (SKU MSK1172) was listed at $5,180. The isolated cart showed the product at that price, but SEBASTIANBASSOL was not marked applicable and the item price did not change. Bike Tested does not report the partner-listed $400 benefit for this configuration. The cart was cleared without entering an address; shipping, tax and an order were not evaluated.']
    ],
    faqs: [
      ['How far does the Eahora M1PS Ironbone Horse go on a charge?', 'Eahora lists 34–74 miles per charge but does not give test conditions alongside that range. It is a manufacturer estimate, not a Bike Tested result. Ask which speed, rider load, terrain, temperature and configuration the estimate assumes.'],
      ['How heavy and large is the Ironbone Horse?', 'Eahora lists 238.1 lb with the battery, 80.7 inches in length and 37.4 inches in width. Measure the complete route into storage and any ramp or vehicle used to move it; the listed weight makes routine lifting impractical.'],
      ['Does the M1PS need a motorcycle license?', 'Eahora’s FAQ says the M1PS is typically classified as an electric motorcycle in most US states and says licensing and registration are typically required. Requirements depend on your location and exact vehicle. Confirm them with your state or local motor vehicle authority before riding.'],
      ['Why do the M1PS torque and charging specifications differ?', 'The product page lists 170 N·m in the technical table and 178 N·m in promotional copy. It describes a 3–4-hour charge in one section and 4–6 hours in its FAQ. Treat both as unresolved manufacturer information and ask Eahora which specification applies to the selected configuration.'],
      ['Does the Eahora code apply to the Ironbone Horse?', 'The exact US variant 55761854169256 (SKU MSK1172) was $5,180 on October 24, 2026. In an isolated cart, SEBASTIANBASSOL was not marked applicable and the item price remained unchanged. The cart was cleared without an address or order, so no saving is confirmed for this variant.']
    ],
    price: {
      amountMinor: 518000,
      currency: 'USD',
      region: 'US',
      variantId: '55761854169256',
      variantLabel: 'Ironbone Horse / US (SKU MSK1172)',
      source: 'https://eahoraescooter.com/products/2026-eahora-m1ps-ironbone-horse?variant=55761854169256',
      checkedOn: '2026-10-24',
      isSalePrice: false
    },
    eligibility: {
      status: 'unresolved',
      variantId: '55761854169256',
      evidence: 'docs/evidence/eahora-m1ps-ironbone-horse.md#exact-variant-cart-check'
    },
    codeCheckObservation: {
      code: 'SEBASTIANBASSOL',
      stage: 'cart',
      result: 'no-discount',
      variantId: '55761854169256',
      baseAmountMinor: 518000,
      discountMinor: 0,
      afterAmountMinor: 518000,
      currency: 'USD',
      checkedOn: '2026-10-24',
      exclusions: 'Exact US variant 55761854169256 / SKU MSK1172 only; shipping/tax not calculated; no address or order; isolated test cart cleared.'
    }
  },
  {
    slug: 'mooncool-tk2-pro-electric-trike',
    brand: 'mooncool',
    name: 'Mooncool TK2 Pro Electric Trike',
    model: 'TK2 PRO, Burgundy-Matte / US (variant 46361523617964; SKU TP2-20JH)',
    image: '/images/products/mooncool-tk2-pro-electric-trike.webp',
    imageAlt: 'Burgundy Mooncool TK2 Pro electric trike with front and rear cargo baskets, shown in side profile',
    imageWidth: 1200,
    imageHeight: 1200,
    publishedOn: '2026-10-24',
    updatedOn: '2026-10-24',
    specsCheckedOn: '2026-10-24',
    category: 'electric-bikes',
    use: 'utility',
    label: 'For low-step cargo trips and roll-in storage',
    headline: 'A folding, basket-ready trike with a full-size footprint.',
    description: 'The TK2 Pro pairs a low-step folding frame, two cargo baskets and a 48V 20Ah battery. At 45 kg and 29 inches wide when assembled, it is easier to plan as a roll-in utility trike than as a lift-and-carry folder.',
    verdict: 'We recommend the Mooncool TK2 Pro to riders who want a low-step electric trike with front and rear baskets and have a practical route into storage. The 750W motor, torque and cadence sensing, parking brake and folding frame give it a useful everyday feature set on paper. Its 45 kg weight and 29-inch assembled width still call for a measured parking and maneuvering plan. Mooncool’s page gives different range figures, and the exact Burgundy-Matte cart accepted SEBASTIANBASSOL for $99.99 off the listed $1,999.99 sale price, leaving a $1,900.00 cart item subtotal before shipping and tax.',
    strengths: [
      'A low-step frame, 20 × 3-inch tires and a front basket plus a larger rear basket suit errands that need stable cargo space.',
      'The 48V 20Ah battery pairs with a 750W motor rated at 90 N·m and a torque and cadence sensor; Mooncool lists five pedal-assist levels and a half-twist throttle.',
      'Hydraulic disc brakes, a parking brake, reverse, a differential, turn signals and a horn are listed for low-speed utility riding.',
      'The frame folds to a listed 39.4 × 28.7 × 26.8 inches, which can help with storage when the space and access route are wide enough.'
    ],
    tradeoffs: [
      'At 45 kg (about 99 lb) and 29 inches wide assembled, folding does not make this trike convenient to lift. Measure doorways, turning space, ramp width and the route to its parking spot.',
      'Mooncool’s product description says 45–75 miles, while its highlights and specifications say up to 100 miles. The page gives no shared test conditions for the higher figure, so treat range as an unverified manufacturer estimate.',
      'The page lists a 3A charger and 6–8 hours to charge, while describing a 5A fast charger as an option. Confirm which charger is included with the selected listing if charging time matters.',
      'The 450 lb maximum load is a manufacturer limit; confirm how Mooncool defines rider, passenger and cargo loading for the exact configuration. Three-wheel handling differs from a two-wheel bicycle, so practice turns and braking in a clear area before carrying a load.'
    ],
    specs: {
      'Motor': '750W rated, 1,310W peak, 90 N·m (manufacturer-listed)',
      'Battery': '48V 20Ah (manufacturer-listed)',
      'Advertised range': '45–75 miles in the product description; up to 100 miles in highlights and specifications; no test conditions supplied for the higher figure',
      'Top speed and class': '15.5 mph top safe speed; Mooncool labels the trike Class 2',
      'Weight and load': '45 kg / about 99 lb; 450 lb maximum load (manufacturer-listed)',
      'Assembled dimensions': '66 in long × 29 in wide; 30.3–39 in seat height; recommended rider height 5 ft–6 ft 3 in',
      'Folded dimensions': '39.4 × 28.7 × 26.8 in',
      'Wheels and tires': '20 × 3.0 in CST tires',
      'Assistance and drivetrain': 'Torque and cadence sensor; five pedal-assist levels; half-twist throttle; Shimano 6-speed Tourney drivetrain',
      'Brakes': 'Hydraulic disc brakes with 180 mm rotors; parking brake and motor cutoff listed',
      'Utility features': 'Front and rear baskets, reverse, differential, turn signals, horn and lights',
      'Charging': '3A charger listed with 6–8 hour charge time; 5A fast charger described as an option',
      'Certification claim': 'Mooncool says SGS certified to UL 2849 and UL 2271; not independently verified by Bike Tested',
      'Warranty': 'Lifetime frame, two-year battery and one-year parts coverage listed; check full exclusions and terms'
    },
    source: 'https://www.mooncool.com/products/tk2-pro-electric-trike?variant=46361523617964',
    sourceLinks: [],
    evidence: 'Manufacturer-specification evaluation; official US product listing and exact-variant cart observation; no Bike Tested ride or range testing.',
    relatedReviews: [
      { slug: 'mooncool-tk2-folding-electric-trike', reason: 'Compare the separately listed TK2 model; confirm the exact feature and battery differences with Mooncool.' }
    ],
    sections: [
      ['A utility trike for buyers who want three wheels', 'The TK2 Pro is built around a low-step frame, front and rear baskets, 20 × 3-inch tires and a folding structure. Mooncool lists a 750W motor, 90 N·m torque and a torque and cadence sensor, with five pedal-assist levels and a six-speed Shimano Tourney drivetrain. These are manufacturer specifications; Bike Tested has not ridden the trike or measured its handling, braking, range or hill performance. Start with whether a three-wheel layout and the full-width cargo format suit your route.'],
      ['Check the complete path into storage', 'The trike measures 66 inches long and 29 inches wide assembled. Mooncool lists a folded size of 39.4 × 28.7 × 26.8 inches and a net weight of 45 kg (about 99 lb). Folding may help it fit a planned space, but does not make it easy to carry. Measure the narrowest doorway, turning area, ramp, lift or vehicle opening on the way to storage. Its 450 lb maximum load is a manufacturer limit; ask Mooncool how that limit applies to the rider and the cargo you plan to carry.'],
      ['Read the range claim as a wide estimate', 'Mooncool’s product description says 45–75 miles per charge, while the highlights and technical section give up to 100 miles. The page does not state matching rider-load, speed, terrain, temperature or assistance conditions for the highest figure. Treat both as manufacturer estimates rather than a Bike Tested result. For a regular route, confirm the assumptions behind the figure and plan with a reserve rather than relying on the 100-mile headline.'],
      ['Plan charging and controls around the listed package', 'The product page lists a 3A charger and a 6–8-hour charging time, then describes a 5A fast charger as an option. Confirm whether the optional charger is part of the selected package. Mooncool also lists reverse, a differential, turn signals, a horn and a parking brake. Learn the reverse and brake controls in an open area and practice turns at low speed before carrying cargo. The page labels the trike Class 2 and lists a 15.5 mph top safe speed; confirm the rules for your location and route.'],
      ['The code result is specific to Burgundy-Matte', 'On October 24, 2026, the official US listing showed the Burgundy-Matte variant 46361523617964 (SKU TP2-20JH) at $1,999.99, marked down from $2,599.99. In a cart containing only that trike, SEBASTIANBASSOL was accepted and the cart showed $99.99 off, leaving a $1,900.00 item subtotal before shipping and tax. This is an exact-variant cart observation, not a completed order; no delivery address was entered, and the cart was cleared. Other colors and Mooncool models were not checked by this observation.']
    ],
    faqs: [
      ['How far can the Mooncool TK2 Pro travel on a charge?', 'Mooncool’s product description says 45–75 miles, while its highlights and specifications say up to 100 miles. The page does not provide comparable test conditions for the higher number. Treat the range as an estimate, not a Bike Tested measurement, and ask which rider, speed and route conditions the estimate assumes.'],
      ['How much space does the TK2 Pro need?', 'Mooncool lists an assembled footprint of 66 inches long by 29 inches wide and a folded size of 39.4 × 28.7 × 26.8 inches. Measure the whole route to storage, including turns and ramps; the listed weight is 45 kg (about 99 lb).'],
      ['What is the Mooncool TK2 Pro weight limit?', 'Mooncool lists a 450 lb maximum load. Confirm with the seller how the limit applies to rider and cargo for your selected configuration, and leave margin for any accessories or carried items.'],
      ['Which charger comes with the TK2 Pro?', 'The product page lists a 3A charger and a 6–8-hour charge time, while describing a 5A fast charger as an option. Check the package attached to your exact order and ask whether the optional charger is included.'],
      ['Does the Mooncool code apply to the TK2 Pro?', 'The Burgundy-Matte US variant 46361523617964 (SKU TP2-20JH) was listed at $1,999.99 on October 24, 2026. In a cart containing one trike, SEBASTIANBASSOL was accepted for $99.99 off, leaving a $1,900.00 item subtotal before shipping and tax. No address or order was entered; other variants were not checked.']
    ],
    price: {
      amountMinor: 199999,
      currency: 'USD',
      region: 'US',
      variantId: '46361523617964',
      variantLabel: 'Burgundy-Matte / US (SKU TP2-20JH)',
      source: 'https://www.mooncool.com/products/tk2-pro-electric-trike?variant=46361523617964',
      checkedOn: '2026-10-24',
      isSalePrice: true
    },
    eligibility: {
      status: 'eligible',
      variantId: '46361523617964',
      evidence: 'docs/evidence/mooncool-tk2-pro-electric-trike.md#exact-variant-cart-check'
    },
    checkoutObservation: {
      code: 'SEBASTIANBASSOL',
      stage: 'cart',
      variantId: '46361523617964',
      baseAmountMinor: 199999,
      discountMinor: 9999,
      afterAmountMinor: 190000,
      currency: 'USD',
      checkedOn: '2026-10-24',
      exclusions: 'Exact Burgundy-Matte US variant 46361523617964 / SKU TP2-20JH only; cart showed $99.99 off and $1,900.00 item subtotal before shipping and tax; no address or order; test cart cleared.'
    }
  },
  {
    slug: 'mooncool-ft1-fat-tire-electric-trike',
    brand: 'mooncool',
    name: 'Mooncool FT1 Fat Tire Electric Trike',
    model: 'FT1, Peacock Green-Matte / US (variant 46134256894124; SKU FT1-20KQL)',
    image: '/images/products/mooncool-ft1-fat-tire-electric-trike.webp',
    imageAlt: 'Peacock Green-Matte Mooncool FT1 fat-tire electric trike with front basket and rear backrest',
    imageWidth: 1200,
    imageHeight: 1200,
    publishedOn: '2026-10-24',
    updatedOn: '2026-10-24',
    specsCheckedOn: '2026-10-24',
    category: 'electric-bikes',
    use: 'utility',
    label: 'For wide-tire cargo trips',
    headline: 'A folding trike with room for the everyday load.',
    description: 'Mooncool pairs the FT1’s 20 × 4-inch tires and rear-drive differential with front and rear baskets. The foldable frame helps with planned storage, but its 48 kg listed weight and 30.7-inch width still call for a roll-in parking spot.',
    verdict: 'We recommend the Mooncool FT1 for riders who want a step-through, three-wheel setup with 20 × 4-inch tires and front and rear baskets for neighborhood errands. Its 48V battery, seven-speed drivetrain, differential and folding frame make a useful utility package on paper. The fit condition is space: at a listed 48 kg and 30.7 inches wide assembled, it belongs in storage you can roll into, not a stairwell where you must lift it. The Peacock Green-Matte US variant accepted SEBASTIANBASSOL in the cart.',
    strengths: [
      'Wide 20 × 4-inch tires, a step-through frame and backrest-equipped seat suit a relaxed, cargo-minded trike setup.',
      'Mooncool pairs a listed 500W rear-drive motor with a differential, plus front and rear baskets for errands.',
      'A 48V 14.5Ah battery, three pedal-assist levels, thumb throttle and Shimano seven-speed drivetrain give riders several ways to manage the route.',
      'The frame folds, and Mooncool lists a 400 lb maximum load and rider-height guidance from 5 ft to 6 ft 3 in.'
    ],
    tradeoffs: [
      'At 48 kg (about 106 lb) and 30.7 inches wide assembled, the FT1 needs a measured path to storage. Its folded 41.3 × 33.5 × 50.4-inch footprint is still substantial.',
      'The technical table lists mechanical disc brakes. Riders seeking hydraulic brakes should compare the exact braking setup before buying.',
      'Mooncool gives a 35–60-mile range in product copy and 60 miles in the technical table without stating matching test conditions; treat it as a manufacturer estimate, not a route guarantee.'
    ],
    specs: {
      'Motor': '500W rated rear-drive, 1,092W peak, 45 N·m (manufacturer-listed)',
      'Battery': '48V 14.5Ah lithium (manufacturer-listed)',
      'Advertised range': '35–60 miles in product copy; technical table lists 60 miles; test conditions not supplied',
      'Top speed and class': '15.5 mph top safe speed; Mooncool labels it Class 2',
      'Weight and load': '48 kg / about 106 lb; 400 lb maximum load (manufacturer-listed)',
      'Dimensions and fit': '70.9 in long × 30.7 in wide assembled; 41.3 × 33.5 × 50.4 in folded; recommended height 5 ft–6 ft 3 in; seat height 30–40 in',
      'Wheels and tires': '20 × 4.0 in',
      'Assistance and drivetrain': 'Three pedal-assist levels; thumb throttle; Shimano seven-speed drivetrain; differential',
      'Brakes and controls': 'Mechanical disc brakes; parking brake, brake motor cutoff, turn signals and horn listed',
      'Cargo': 'Front basket 12.2 × 11.8 × 5.5 in; rear basket 18.9 × 14.2 × 5.9 in',
      'Charging': '2A charger; 7–9 hour charge time; no fast-charging support listed',
      'Warranty': 'Mooncool lists lifetime frame, two-year battery and one-year accessories/parts coverage; check full terms and exclusions'
    },
    source: 'https://www.mooncool.com/products/ft1-electric-trike?variant=46134256894124',
    evidence: 'Manufacturer-specification evaluation; official US product listing and exact-variant cart observation; no Bike Tested ride or range testing.',
    relatedReviews: [
      { slug: 'mooncool-tk2-pro-electric-trike', reason: 'Compare Mooncool’s TK2 Pro if you want a larger 48V 20Ah battery, hydraulic disc brakes and a higher listed maximum load; confirm the features of the selected model.' },
      { slug: 'mooncool-tk2-folding-electric-trike', reason: 'Compare the separately listed TK2 for its narrower 20 × 3-inch tires and reverse function; check the current weight and storage dimensions against your route.' }
    ],
    sections: [
      ['A fat-tire trike built around useful cargo space', 'The FT1 makes sense for riders who want a three-wheel platform for short errands and recreational loops, with room for bags in both the front and rear baskets. The low step-through layout and padded seat with backrest support an upright riding position, while a 20 × 4-inch tire package sets it apart from narrower-tire utility trikes. Mooncool lists a 400 lb maximum load; confirm how the seller applies that limit to rider, cargo and accessories before planning a regular load.'],
      ['Read the motor and drivetrain as a complete setup', 'Mooncool describes a 500W rear-drive motor with 1,092W peak output and 45 N·m torque, paired with a differential. The product table lists three pedal-assist levels, a thumb throttle and a Shimano seven-speed drivetrain. That mix gives riders both motor assistance and gearing to work with, while the differential is part of the seller’s rear-wheel design. The listing also includes turn signals, a horn and a parking brake. Practice starts, stops and turns with no cargo before using the baskets on a regular route.'],
      ['Measure the route to storage before choosing a folding trike', 'Mooncool lists the FT1 at 48 kg (about 106 lb), 70.9 inches long and 30.7 inches wide when assembled. Its folded dimensions are 41.3 × 33.5 × 50.4 inches. Folding can help it fit a planned parking area, but the weight and folded height make frequent lifting a poor fit. Measure doorways, ramps, turns and the final storage footprint, and check that your vehicle or rack is designed for a three-wheel vehicle of this size. The recommended rider-height range is 5 ft to 6 ft 3 in, with a 30–40-inch seat-height adjustment listed; treat those as starting points and verify control reach.'],
      ['Keep the range and braking claims in context', 'Mooncool gives a 35–60-mile range in its product copy and lists 60 miles in the technical table. It does not provide matching rider, speed, terrain or assistance conditions beside those figures, so use them as manufacturer estimates and plan with a reserve. The listing pairs a 48V 14.5Ah battery with a 2A charger and a 7–9-hour charge time; it says fast charging is not supported. The technical table lists mechanical disc brakes, a parking brake and a brake motor cutoff. Check the delivered setup and follow the manual’s inspection and adjustment guidance before riding.'],
      ['The code result is specific to Peacock Green-Matte', 'On October 24, 2026, Mooncool listed the Peacock Green-Matte US variant 46134256894124 (SKU FT1-20KQL) at $1,349.99, beside a $1,899.99 regular price. In a cart containing only that trike, SEBASTIANBASSOL was accepted for $67.49 off; the cart page showed a $1,282.50 item subtotal before shipping and tax. No address or order was entered, and the test cart was cleared. This observation applies to the selected variant on the checked date; it does not establish code eligibility for every Mooncool model or color.']
    ],
    faqs: [
      ['How far does the Mooncool FT1 go on a charge?', 'Mooncool’s product copy gives a 35–60-mile range, while its technical table lists 60 miles. It does not supply comparable test conditions with the figures. Treat the range as a manufacturer estimate and plan for rider load, route, weather and assistance level.'],
      ['What are the FT1’s folded dimensions and weight?', 'Mooncool lists a 48 kg (about 106 lb) net weight and a folded size of 41.3 × 33.5 × 50.4 inches. Measure the full route into storage; folding does not make the trike easy to carry.'],
      ['What rider height does Mooncool recommend?', 'Mooncool recommends riders from 5 ft to 6 ft 3 in and lists a seat-height adjustment from 30 to 40 inches. Use those figures as a starting point, then check your reach to the bars, mounting comfort and ability to operate the controls.'],
      ['Does the FT1 have hydraulic brakes?', 'The technical table lists mechanical disc brakes, along with a parking brake and brake motor cutoff. Confirm the delivered specification and ask Mooncool about adjustment and replacement parts if brake type is important to you.']
    ],
    price: {
      amountMinor: 134999,
      currency: 'USD',
      region: 'US',
      variantId: '46134256894124',
      variantLabel: 'Peacock Green-Matte / US (SKU FT1-20KQL)',
      source: 'https://www.mooncool.com/products/ft1-electric-trike?variant=46134256894124',
      checkedOn: '2026-10-24',
      isSalePrice: true
    },
    eligibility: {
      status: 'eligible',
      variantId: '46134256894124',
      evidence: 'docs/evidence/mooncool-ft1-fat-tire-electric-trike.md#exact-variant-cart-check'
    },
    checkoutObservation: {
      code: 'SEBASTIANBASSOL',
      stage: 'cart',
      variantId: '46134256894124',
      baseAmountMinor: 134999,
      discountMinor: 6749,
      afterAmountMinor: 128250,
      currency: 'USD',
      checkedOn: '2026-10-24',
      exclusions: 'Exact Peacock Green-Matte US variant only; item subtotal before shipping and tax; no address or order; other variants untested.'
    }
  },
  {
    slug: 'mooncool-pop-folding-electric-bike',
    brand: 'mooncool',
    name: 'Mooncool POP Folding Electric Bike',
    model: 'POP Folding Electric Bike, Cyan Green-Matte / US (variant 46685427564716; SKU POP-QL)',
    image: '/images/products/mooncool-pop-folding-electric-bike.webp',
    imageAlt: 'Mooncool POP folding electric bike in Cyan Green-Matte with 20-inch wheels, full fenders and an integrated rear rack',
    imageWidth: 1200,
    imageHeight: 1200,
    category: 'electric-bikes',
    use: 'commute',
    label: 'For compact storage and mixed-surface commutes',
    headline: 'A folding setup with full suspension and a useful carry package.',
    description: 'The POP pairs 20 × 3.0-inch tires, front and rear suspension, hydraulic brakes and an integrated rear rack on a folding frame. Its 67 lb listed weight and inconsistent speed and range details make storage and exact setup worth checking.',
    verdict: 'We recommend the Mooncool POP for commuters and errand riders who need a folding bike with full suspension, an integrated rack and a broad manufacturer-listed fit range. A removable 48 V battery, switchable torque and cadence assistance, hydraulic disc brakes and five color options make a versatile equipment list on paper. At 67 lb, it remains a substantial lift; confirm the delivered speed setting and a useful range for your route before buying.',
    strengths: [
      'The 20 × 3.0-inch tires, 60 mm front fork, rear coil suspension and hydraulic disc brakes with 180 mm rotors give the POP a substantial equipment list for daily pavement and mixed-surface routes.',
      'Mooncool lists a removable 48 V 13.6 Ah battery, five pedal-assist levels, a removable thumb throttle and a switchable torque/cadence sensor setup.',
      'An integrated rear rack, front light, turn-signal and brake-highlight rear light, and a manufacturer-listed 330 lb maximum load support practical errands; the rack has its own 120 lb limit.',
      'A 16.9-inch listed standover, 29.5–39.4-inch saddle range and recommended rider height of 4 ft 9 in–6 ft 5 in provide useful fit measurements to check in person.',
      'The exact Cyan Green-Matte US variant accepted SEBASTIANBASSOL in the October 24, 2026 cart check.'
    ],
    tradeoffs: [
      'Mooncool lists the complete bike at 67 lb. Folding reduces its storage footprint, but this is still a substantial bike to lift regularly; compare the folded size with your doorway, trunk or storage space.',
      'The product page gives a folded length of 34.7 inches in its size table and 34.6 inches in its geometry and parameter sections. Confirm the measurement that matters for your storage plan.',
      'Mooncool labels the POP Class 2 with a 20 mph top safe speed, while its speed section also lists an adjustable 12–28 mph range. Confirm the delivered US speed setting and check rules for your intended roads and paths.',
      'Mooncool advertises 30–60 miles of range, but its page gives differing throttle and PAS1 figures across sections. These are manufacturer claims without a comparable Bike Tested route result.',
      'The Bike Tested code applied in the checked Cyan Green-Matte cart; that exact result does not establish eligibility for other POP variants or Mooncool models.'
    ],
    specs: {
      'Selected configuration': 'Cyan Green-Matte / US; Shopify variant 46685427564716; SKU POP-QL',
      'Frame': 'Aluminum alloy folding frame (manufacturer-listed)',
      'Motor': '48 V 750 W hub motor, 1,200 W peak and 85 N·m torque (manufacturer-listed)',
      'Battery': 'Removable 48 V 13.6 Ah / 652.8 Wh (manufacturer-listed)',
      'Assistance': 'Five pedal-assist levels; removable thumb throttle; switchable torque/cadence sensor modes',
      'Speed and class': '20 mph top safe speed and Class 2 label; speed section also lists a 12–28 mph adjustable range',
      'Claimed range': '30–60 miles in highlights; other product-page sections list 28 or 30 miles throttle and 40 or 60 miles PAS1',
      'Drivetrain': 'Shimano 7-speed rear derailleur with L-TWOO shifter (manufacturer-listed)',
      'Brakes': 'Front and rear hydraulic disc brakes; 180 mm rotors (manufacturer-listed)',
      'Suspension': '60 mm front fork and rear coil suspension (manufacturer-listed)',
      'Wheels and tires': '20 × 3.0-inch tires (manufacturer-listed)',
      'Listed weight': '67 lb / 30.4 kg',
      'Maximum load': '330 lb listed bike load; 120 lb rear-rack capacity',
      'Fit': 'Recommended rider height 4 ft 9 in–6 ft 5 in; 16.9-inch standover; 29.5–39.4-inch seat height',
      'Dimensions': '66.5 inches long; folded size listed as 34.6 or 34.7 × 16.9 × 29.5 inches in different page sections',
      'Lighting': 'Adjustable integrated front LED; rear light with brake highlight and turn signals',
      'Charging': '2 A charger; about 7 hours listed; 5 A fast-charger option',
      'Certification claim': 'Mooncool says SGS certified to UL 2849 and UL 2271 standards',
      'Warranty summary': 'Product page lists lifetime frame, two-year battery and one-year parts coverage; see full terms'
    },
    source: 'https://www.mooncool.com/products/pop-folding-electric-bike?variant=46685427564716',
    sourceLinks: [
      {label: 'Mooncool POP introduction', url: 'https://www.mooncool.com/blogs/journey/meet-the-mooncool-pop-the-ultimate-folding-electric-bike-for-city-and-trail'},
      {label: 'Mooncool warranty policy', url: 'https://www.mooncool.com/pages/warranty-policy'}
    ],
    evidence: 'Manufacturer-specification editorial evaluation; exact Cyan Green-Matte US variant price and cart code observation recorded October 24, 2026. No Bike Tested ride, speed, braking or range measurement.',
    sections: [
      [
        'A folding bike with a real-size lift',
        'The POP combines 20-inch wheels and a folding frame with a listed 67 lb complete-bike weight. Its folded size can help with a closet, car or workplace storage plan, but the bike is still a substantial lift for stairs or regular carrying. Mooncool gives 34.6 inches as the folded length in its geometry and parameter sections and 34.7 inches in the size table. Measure your actual storage opening and confirm the figure that matters before ordering.'
      ],
      [
        'Suspension and braking are part of the commuter package',
        'Mooncool lists a 60 mm front suspension fork, rear coil suspension and hydraulic disc brakes with 180 mm rotors. The 20 × 3.0-inch tires, full fenders, integrated lights and Shimano seven-speed drivetrain add practical detail for a commute that includes imperfect pavement. These are manufacturer specifications, not Bike Tested comfort, braking or traction results; rider fit, tire pressure and the route still matter.'
      ],
      [
        'Confirm the speed and range claims for your setup',
        'The page describes a 750 W rated hub motor with 1,200 W peak output, 85 N·m torque and a 48 V 13.6 Ah removable battery. Mooncool lists a 20 mph top safe speed and Class 2 classification, but its speed section also gives an adjustable range up to 28 mph. Range is similarly inconsistent: page sections show 30–60 miles, 28 or 30 miles in throttle mode, and 40 or 60 miles for PAS1. Treat these as seller claims and ask Mooncool to confirm the delivered US setup and applicable range figure for the exact bike.'
      ],
      [
        'Check fit and cargo limits before planning errands',
        'The manufacturer recommends riders from 4 ft 9 in to 6 ft 5 in and lists a 16.9-inch standover plus a 29.5–39.4-inch seat-height range. Use these as screening measurements, then check reach, saddle position and control access for your own fit. Mooncool lists a 330 lb maximum load and a separate 120 lb rack capacity; plan rider, bags and accessories within the applicable limits.'
      ],
      [
        'The current listing and exact code result',
        'On October 24, 2026, Mooncool listed the Cyan Green-Matte US variant 46685427564716 (SKU POP-QL) for $1,199.99 USD. In the cart, SEBASTIANBASSOL applied $59.99 off, leaving a $1,140.00 subtotal for one bike before shipping and tax. A not-for-sale free-gift package was also in the cart. No address was entered and no order was placed; the cart was cleared afterward. This result applies to the selected variant and date.'
      ]
    ],
    publishedOn: '2026-10-24',
    updatedOn: '2026-10-24',
    specsCheckedOn: '2026-10-24',
    faqs: [
      [
        'Is the Mooncool POP easy to carry when folded?',
        'Mooncool lists the POP at 67 lb and gives folded dimensions of about 34.6–34.7 × 16.9 × 29.5 inches. Folding can reduce storage space, but it does not make the bike light to lift. Check the folded footprint and handling points for your own storage routine.'
      ],
      [
        'How far can the Mooncool POP travel on one charge?',
        'Mooncool advertises 30–60 miles, but different page sections list 28 or 30 miles for throttle use and 40 or 60 miles for PAS1. These are manufacturer claims, not Bike Tested measurements. Rider and cargo load, route, speed, temperature and assist use affect real distance.'
      ],
      [
        'What speed and class does the Mooncool POP use?',
        'Mooncool labels the POP Class 2 and lists a 20 mph top safe speed, while its speed section also shows an adjustable range up to 28 mph. Confirm the delivered US setting and check the rules for the roads and paths where you plan to ride.'
      ],
      [
        'How much can the POP carry?',
        'Mooncool lists a 330 lb maximum load and a separate 120 lb rear-rack capacity. Keep rider, cargo and accessories within the applicable limits, and ask Mooncool how the total-load figure applies to your planned setup.'
      ],
      [
        'Did SEBASTIANBASSOL work on the POP?',
        'On October 24, 2026, the code was accepted in the cart for the Cyan Green-Matte US variant 46685427564716 / SKU POP-QL. It reduced the $1,199.99 listing by $59.99 to a $1,140.00 one-bike cart subtotal before shipping and tax. Other POP variants and Mooncool models were not tested.'
      ]
    ],
    relatedReviews: [
      {slug: 'tomofree-t1max-folding-ebike', reason: 'Compare another folding e-bike with a wider 20 × 4-inch setup and its exact-variant code result.'},
      {slug: 'finbike-eb8-electric-bike', reason: 'Compare a compact folding fat-tire bike and a different battery and fit package.'}
    ],
    price: {
      amountMinor: 119999,
      currency: 'USD',
      region: 'US',
      variantId: '46685427564716',
      variantLabel: 'Cyan Green-Matte (SKU POP-QL)',
      source: 'https://www.mooncool.com/products/pop-folding-electric-bike?variant=46685427564716',
      checkedOn: '2026-10-24',
      isSalePrice: true
    },
    eligibility: {
      status: 'eligible',
      variantId: '46685427564716',
      evidence: 'docs/evidence/mooncool-pop-folding-electric-bike.md#exact-variant-code-observation'
    },
    checkoutObservation: {
      code: 'SEBASTIANBASSOL',
      stage: 'cart',
      variantId: '46685427564716',
      baseAmountMinor: 119999,
      discountMinor: 5999,
      afterAmountMinor: 114000,
      currency: 'USD',
      checkedOn: '2026-10-24',
      exclusions: 'Exact Cyan Green-Matte US variant only; one-bike cart subtotal before shipping and tax; one free not-for-sale gift was included; no address or order; other variants untested.'
    }
  },
  {
    slug: 'cycplus-r200-smart-trainer',
    brand: 'cycplus',
    name: 'CYCPLUS R200 Smart Trainer',
    model: 'R200 Smart Trainer, HG freehub (variant 45979103527070; SKU R200 (HG))',
    image: '/images/products/cycplus-r200-smart-trainer.webp',
    imageAlt: 'CYCPLUS R200 direct-drive smart trainer with a dark circular resistance housing, carry arch and support feet',
    imageWidth: 1200,
    imageHeight: 1200,
    category: 'cycling-technology',
    use: 'recreation',
    label: 'For indoor training with a compatible road bike',
    headline: 'A self-powered direct-drive trainer with drivetrain checks to settle first.',
    description: 'The CYCPLUS R200 adds direct-drive resistance and app connectivity to a compact 13.6 kg frame. Its self-powered mode can remove the wall outlet from ordinary sessions, but the listing limits downhill simulation to plug-in use and offers a single HG freehub configuration.',
    verdict: 'We recommend the R200 for riders who already own a compatible road bike and want direct-drive indoor training without a wall outlet for ordinary sessions. CYCPLUS lists up to 2,200 W output, simulated grades to 19%, ±1% power accuracy, and ANT+ FE-C and BLE FTMS connections. Those are manufacturer specifications, not Bike Tested measurements. The 13.6 kg trainer is easier to place than a full indoor bike, but its HG freehub, cassette requirements and plug-in-only downhill simulation need to match your setup. CYCPLUS’s 5% Bike Tested code has not been checked on this exact R200 variant, so we do not show a code-adjusted price.',
    strengths: [
      'CYCPLUS says the R200 generates its operating power while pedaling, so ordinary training does not need a wall outlet.',
      'The product listing specifies up to 2,200 W output, an 80 N·m maximum torque and simulated gradients up to 19%, with factory calibration and no manual spindown claimed by the manufacturer.',
      'Listed frame standards cover 130/135 mm quick release and 12 × 142 / 12 × 148 mm thru-axle spacing, making the fit check clear for many road-bike setups.',
      'ANT+ FE-C and BLE FTMS provide two common smart-trainer connection profiles to check against your preferred training app or computer.',
      'At 517 × 520 × 465 mm and 13.6 kg, the R200 has a compact listed footprint and an integrated carry arch.'
    ],
    tradeoffs: [
      'The current listing offers an HG freehub configuration. CYCPLUS lists Shimano 8–12 speed and SRAM 8–11 speed cassette compatibility; SRAM 12-speed XDR requires a separately sold hub. Confirm which cassette and adapters are included before ordering.',
      'The trainer weighs 13.6 kg. Its carry arch helps with handling, but it is still a substantial item to move between floors or pack for frequent travel.',
      'CYCPLUS says downhill simulation works in plug-in mode only, so the self-powered setup does not cover every listed training feature without an outlet.',
      'The 2,200 W, 19% grade and ±1% accuracy figures are manufacturer specifications, not Bike Tested power or gradient measurements.',
      'The Bike Tested 5% code is part of the CYCPLUS partner offer, but its eligibility for the R200 HG variant has not been verified. No after-code saving is claimed.'
    ],
    specs: {
      'Selected configuration': 'HG freehub; variant 45979103527070; SKU R200 (HG)',
      'Trainer type': 'Direct-drive magnetic resistance (manufacturer-listed)',
      'Power output': 'Up to 2,200 W (manufacturer-listed)',
      'Power accuracy': '±1% with factory calibration claimed by CYCPLUS; not independently measured',
      'Simulated grade': 'Up to 19% (manufacturer-listed)',
      'Maximum torque': '80 N·m (manufacturer-listed)',
      'Power source': 'Self-powered while pedaling for ordinary operation; downhill simulation is listed for plug-in mode only',
      'Frame spacing': '130/135 mm quick release; 12 × 142 mm and 12 × 148 mm thru-axle',
      'Cassette compatibility': 'Shimano 8–12 speed; SRAM 8–11 speed; SRAM 12-speed XDR hub sold separately',
      'Connectivity': 'ANT+ FE-C and BLE FTMS',
      'Weight and dimensions': '13.6 kg / 30 lb; 517 × 520 × 465 mm',
      'Listed price': '$399 USD on the CYCPLUS storefront, checked October 24, 2026; shipping calculated at checkout',
      'Partner offer': 'SEBASTIANBASSOL is the supplied CYCPLUS 5% Bike Tested code; R200 HG eligibility is unconfirmed'
    },
    source: 'https://www.cycplus.com/products/r200-smart-trainer?variant=45979103527070',
    sourceLinks: [],
    evidence: 'Manufacturer-specification editorial evaluation; official R200 listing and product feed checked October 24, 2026. No exact R200 cart test or Bike Tested performance test was performed.',
    sections: [
      [
        'A direct-drive trainer for a bike you already own',
        'The R200 replaces the rear wheel with a direct-drive resistance unit, so its usefulness starts with your current bike and its rear-end standards. CYCPLUS lists 130/135 mm quick release and 12 × 142 / 12 × 148 mm thru-axle compatibility. Check your frame, axle and drivetrain against the exact trainer configuration before ordering; the published standards do not confirm clearance for every frame or accessory.'
      ],
      [
        'Self-powered for ordinary sessions, with one plug-in exception',
        'CYCPLUS says the trainer generates its operating power while you pedal, which can simplify a warmup or a home setup without an outlet beside the bike. The same page says downhill simulation works in plug-in mode only. If that feature matters to your training plan, include a nearby outlet and power cable in the layout.'
      ],
      [
        'Match the cassette and freehub before buying',
        'The product page shows one HG freehub variant and lists Shimano 8–12 speed plus SRAM 8–11 speed cassette compatibility. It says SRAM 12-speed XDR needs a separately sold hub. The page does not establish that your cassette is included in the $399 configuration, so confirm the package contents and any extra parts for your drivetrain.'
      ],
      [
        'Treat the power and grade figures as product claims',
        'CYCPLUS lists up to 2,200 W, 80 N·m maximum torque, simulated grades up to 19%, and ±1% accuracy with factory calibration. These are manufacturer specifications; Bike Tested has not measured the R200’s power, calibration, noise or road feel. ANT+ FE-C and BLE FTMS are listed, but check whether your chosen training app uses the profile and features you need.'
      ],
      [
        'The listing price and CYCPLUS code status',
        'On October 24, 2026, CYCPLUS listed the R200 HG variant 45979103527070 / SKU R200 (HG) for $399 USD, with shipping calculated at checkout. The Bike Tested partner code SEBASTIANBASSOL carries a supplied 5% benefit, but its eligibility for this trainer variant has not been checked. We do not quote a reduced R200 price.'
      ]
    ],
    publishedOn: '2026-10-24',
    updatedOn: '2026-10-24',
    specsCheckedOn: '2026-10-24',
    faqs: [
      [
        'Does the CYCPLUS R200 need a power outlet?',
        'CYCPLUS says the R200 generates power as you pedal for ordinary operation. Its product page lists downhill simulation as available in plug-in mode only, so plan for an outlet if you want that feature.'
      ],
      [
        'Will the R200 fit my bike?',
        'CYCPLUS lists 130/135 mm quick release and 12 × 142 / 12 × 148 mm thru-axle standards. Confirm your bike’s rear spacing, axle and frame clearance with the seller before ordering.'
      ],
      [
        'Which cassette works with the R200?',
        'CYCPLUS lists Shimano 8–12 speed and SRAM 8–11 speed cassettes. SRAM 12-speed XDR needs a separately sold hub. The live product listing shows an HG freehub option, so confirm whether your cassette is included or needs to be purchased separately.'
      ],
      [
        'Does SEBASTIANBASSOL apply to the R200?',
        'The supplied CYCPLUS code is listed as a 5% Bike Tested partner offer, but it was not tested on the R200 HG variant 45979103527070. We do not claim eligibility or a discounted price for this model.'
      ]
    ],
    relatedReviews: [
      {slug: 'cycplus-t7-smart-bike', reason: 'Compare the R200 wheel-off trainer with CYCPLUS’s dedicated indoor smart-bike setup.'}
    ],
    price: {
      amountMinor: 39900,
      currency: 'USD',
      region: 'US',
      variantId: '45979103527070',
      variantLabel: 'HG freehub (SKU R200 (HG))',
      source: 'https://www.cycplus.com/products/r200-smart-trainer?variant=45979103527070',
      checkedOn: '2026-10-24',
      isSalePrice: false
    },
    eligibility: {
      status: 'unresolved',
      variantId: '45979103527070',
      evidence: 'docs/evidence/cycplus-r200-smart-trainer.md#code-eligibility'
    }
  },

  {
    slug: 'ausom-l2-max-dual-electric-scooter',
    brand: 'ausom',
    name: 'Ausom L2 Max Dual Motor Electric Scooter',
    model: 'L2 Max Dual Motor',
    image: '/images/products/ausom-l2-max-dual-electric-scooter.webp',
    imageAlt: 'Ausom L2 Max Dual Motor electric scooter in side profile',
    imageWidth: 1200,
    imageHeight: 1200,
    category: 'electric-mobility',
    use: 'private',
    label: 'For spacious private-property routes',
    headline: 'Two motors for a full-size, open-route setup.',
    description: 'The L2 Max pairs dual motors with a 48V 20.8Ah battery, adjustable swingarm suspension and 10 × 3-inch tubeless tires. The selected US variant has a 38 mph preset and deserves a measured route and storage plan.',
    verdict: 'We recommend the Ausom L2 Max Dual Motor for experienced riders with a spacious private-property route, room to store a full-size scooter and a reason to use its dual-motor hardware. The 998.4Wh battery, adjustable suspension and 10 × 3-inch tires give it a substantial feature set. Its 73.4 lb listed weight and 38 mph US preset are decisive fit conditions; Ausom states that the scooter is for private-property use only.',
    strengths: [
      'Two brushless motors and a manufacturer-listed 2,688W combined peak output suit a larger, performance-focused scooter brief.',
      'The 48V 20.8Ah (998.4Wh) battery, dual swingarm suspension and 10 × 3-inch tubeless tires are a well-equipped package for private-property routes.',
      'Front and rear disc brakes with E-ABS, turn signals, an NFC lock and USB-A / USB-C outputs add useful built-in equipment.',
      'A folding stem and a listed 50.4 × 27.1 × 22-inch folded size help define a storage footprint before purchase.'
    ],
    tradeoffs: [
      'At a listed 73.4 lb, this is not a convenient scooter to carry up stairs or lift into a vehicle; folding changes its shape, not its weight.',
      'Ausom says the L2 Max is for private-property use only. The selected US version is preset to 38 mph, so confirm that your intended route and storage setting fit the manufacturer’s stated use.',
      'The 56-mile maximum is tied to low-speed, single-motor, flat-road test conditions; one included charger takes about 12 hours for a full charge.'
    ],
    specs: {
      'Selected configuration': 'US Version, preset maximum speed 38 mph (variant 50223037219095; SKU 1297492)',
      'Motor system': 'Two 1,000W brushless motors; manufacturer lists 1,344W × 2 peak output / 2,688W combined peak',
      'Top speed': 'Up to 38 mph for this selected US preset',
      'Battery': '48V, 20.8Ah, 998.4Wh (manufacturer-listed)',
      'Claimed range': 'Up to 56 miles under the manufacturer’s specified single-motor, 9.3 mph test conditions',
      'Brakes': 'E-ABS plus front and rear disc brakes',
      'Tires': '10 × 3-inch tubeless; Ausom lists 50 PSI as the best tire pressure',
      'Suspension': 'Adjustable dual swingarm suspension',
      'Maximum load': '287 lb (manufacturer-listed)',
      'Listed weight': '73.4 lb',
      'Folded dimensions': '50.4 × 27.1 × 22 inches',
      'Unfolded dimensions': '50.4 × 27.1 × 56.5 inches',
      'Charging': '54.6V, 2A; about 12 hours with one included charger or 5.5 hours with two 2A chargers; second charger sold separately',
      'Water-resistance listing': 'IP54 (manufacturer-listed); no wet-weather performance was assessed',
      'Manufacturer use note': 'For private-property use only; follow applicable local laws and regulations'
    },
    source: 'https://ausomstore.com/products/ausom-l2-max-dual-electric-scooter?variant=50223037219095',
    evidence: 'Manufacturer-specification editorial evaluation; exact variant code eligibility untested; no ride testing',
    sections: [
      [
        'A dual-motor setup for a defined route',
        'The L2 Max has a clear appeal for riders who have room to use a wide, powerful scooter on private property. Ausom lists two 1,000W brushless motors and describes 1,344W peak output per motor, or 2,688W combined. Its page also advertises climbs up to 34%. These are manufacturer figures, not Bike Tested measurements of power, speed, braking or hill performance. The same product page says the scooter is for private-property use only. Treat that stated use as part of the buying decision and verify your intended setting before ordering; the speed claim, lighting and turn signals do not establish public-road permission.'
      ],
      [
        'Put the maximum range in context',
        'Ausom advertises up to 56 miles, but its stated test conditions are unusually specific: a fully charged battery, a 165 lb load, single-motor mode, steady 9.3 mph speed, mild 68–77°F temperatures, low wind, correctly inflated tires and a dry, flat, paved route longer than 0.6 mile. That is a manufacturer maximum, not a Bike Tested range result or an expectation for dual-motor riding. If your route uses higher speed, repeated stops, hills or a heavier load, plan around the route and ask the seller for realistic guidance rather than relying on the headline figure.'
      ],
      [
        'Measure the folded scooter and charging routine',
        'The published folded footprint is 50.4 × 27.1 × 22 inches, and the listed weight is 73.4 lb. Measure doorways, storage bays and vehicle openings, then decide how the scooter will move between them. A fold can help it fit a space while still being awkward to lift. The standard package lists one 2A charger: Ausom estimates about 12 hours for a full charge with one, or about 5.5 hours with two 2A chargers. The second charger is sold separately. Ausom lists 50 PSI as the tire-pressure target; check pressure regularly and confirm which replacement tires and brake parts fit this version. A seat is also an optional purchase rather than standard equipment.'
      ],
      [
        'The checked price and Ausom reader code',
        'On October 24, 2026, Ausom’s US product feed listed the selected 38 mph preset variant, 50223037219095 / SKU 1297492, at $869.00, with shipping calculated at checkout. The supplied Bike Tested code is SEBASTIANBASSOL for a partner-reported $50 off, but eligibility for this exact L2 Max variant has not been checked. The listing is a sale price, and code stacking is unconfirmed, so we do not calculate a discounted L2 Max price. Check the variant, code and final item total at checkout.'
      ]
    ],
    publishedOn: '2026-10-24',
    updatedOn: '2026-10-24',
    specsCheckedOn: '2026-10-24',
    faqs: [
      [
        'Can the L2 Max travel 56 miles on one charge?',
        'Ausom advertises up to 56 miles under a specific test using a 165 lb load, single-motor mode, steady 9.3 mph speed, mild temperatures, low wind and dry, flat pavement. It is a manufacturer maximum, not a Bike Tested range measurement; higher speed, dual-motor use, hills and stops change the conditions.'
      ],
      [
        'How large and heavy is the Ausom L2 Max when folded?',
        'Ausom lists a 73.4 lb weight and folded dimensions of 50.4 × 27.1 × 22 inches. The fold can reduce the footprint, but it remains heavy to lift; check your full storage and transport path.'
      ],
      [
        'What top-speed version is covered in this review?',
        'This review covers the US variant with the 38 mph preset, SKU 1297492. Ausom’s feed also lists a separate US version with a 15 mph preset. Confirm the exact option shown in the product selector before ordering; the two variants are not treated as interchangeable here.'
      ],
      [
        'Does the L2 Max include a seat and a fast charger?',
        'Ausom says a seat is not included by default. The standard package lists one 2A charger; the seller estimates about 12 hours to charge with one or 5.5 hours with two, and the second charger is sold separately.'
      ],
      [
        'Is the Ausom L2 Max intended for public roads?',
        'Ausom’s product page says the scooter is for private-property use only and tells buyers to follow applicable local laws. Check the rules for your exact location and planned setting; the product’s speed or lighting claims do not establish permission to use it on public roads.'
      ]
    ],
    relatedReviews: [
      {slug: 'ausom-gosoul-2-electric-scooter', reason: 'Prefer a single-motor Ausom scooter with a lower listed top speed and weight? Compare the Gosoul 2 review; Ausom also states that model is for private-property use only.'}
    ],
    price: {
      amountMinor: 86900,
      currency: 'USD',
      region: 'US',
      variantId: '50223037219095',
      variantLabel: 'US 38 mph preset (SKU 1297492)',
      source: 'https://ausomstore.com/products/ausom-l2-max-dual-electric-scooter?variant=50223037219095',
      checkedOn: '2026-10-24',
      isSalePrice: true
    },
    eligibility: {
      status: 'unresolved',
      variantId: '50223037219095',
      evidence: 'docs/evidence/ausom-l2-max-dual-electric-scooter.md#code-eligibility'
    }
  }
];
for(const p of products){p.publishedOn??='2026-10-19';p.updatedOn??=p.publishedOn;p.specsCheckedOn??=p.publishedOn;}
const checkoutProductsFor=brand=>products.filter(p=>p.brand===brand&&p.checkoutObservation);
const codeCheckProductsFor=brand=>products.filter(p=>p.brand===brand&&p.codeCheckObservation).sort((a,b)=>a.codeCheckObservation.checkedOn.localeCompare(b.codeCheckObservation.checkedOn));
export const offers=partners.map(p=>{
  const testedProducts=checkoutProductsFor(p.slug).sort((a,b)=>a.checkoutObservation.checkedOn.localeCompare(b.checkoutObservation.checkedOn));
  const tested=testedProducts.at(-1)||null;
  const codeCheckedProducts=codeCheckProductsFor(p.slug);
  const discount=p.discount||null;
  const checkoutTestProducts=testedProducts.map(t=>({slug:t.slug,name:t.name,variantId:t.price.variantId,variantLabel:t.price.variantLabel,stage:t.checkoutObservation.stage||null,checkedOn:t.checkoutObservation.checkedOn}));
  const checkoutTestProduct=checkoutTestProducts.at(-1)||null;
  const codeCheckProducts=codeCheckedProducts.map(codeChecked=>({slug:codeChecked.slug,name:codeChecked.name,variantId:codeChecked.codeCheckObservation.variantId,variantLabel:codeChecked.price.variantLabel,stage:codeChecked.codeCheckObservation.stage,result:codeChecked.codeCheckObservation.result,checkedOn:codeChecked.codeCheckObservation.checkedOn,message:codeChecked.codeCheckObservation.message||null,discountFormatted:formatMinor(codeChecked.codeCheckObservation.discountMinor,codeChecked.codeCheckObservation.currency),baseFormatted:formatMinor(codeChecked.codeCheckObservation.baseAmountMinor,codeChecked.codeCheckObservation.currency)}));
  const codeCheckProduct=codeCheckProducts.at(-1)||null;
  const acceptanceLocation=checkoutTestProducts.length&&checkoutTestProducts.every(t=>t.stage==='cart')?' in the cart':'';
  const acceptanceSummary=checkoutTestProducts.map(t=>`${t.name}, ${t.variantLabel} (${t.stage||'checkout'} on ${t.checkedOn})`).join('; ');
  const codeCheckSummaries=codeCheckProducts.map(check=>{
    const surface=check.stage==='checkout'?'checkout':'cart';
    if(check.result==='invalid-code')return `On ${priceDateLabel(check.checkedOn)}, ${surface} rejected ${p.code} as invalid for ${check.name}, ${check.variantLabel}. The ${check.baseFormatted} item price remained unchanged, so no saving is confirmed for that configuration.`;
    if(check.result==='accepted-order-discount')return `On ${priceDateLabel(check.checkedOn)}, ${surface} accepted ${p.code} for ${check.name}, ${check.variantLabel}, and applied ${check.discountFormatted} as an order-level discount to a cart containing the bike and an automatically added $0 helmet. The discount was not allocated to an item, so no after-code bike price is reported.`;
    return `On ${priceDateLabel(check.checkedOn)}, ${surface} did not apply ${p.code} to ${check.name}, ${check.variantLabel}. The ${check.baseFormatted} item price remained unchanged, so no saving is confirmed for that configuration.`;
  });
  const terms=checkoutTestProducts.length||codeCheckProducts.length
    ?[checkoutTestProducts.length?`Code acceptance${acceptanceLocation} was recorded for ${acceptanceSummary}.`:null,...codeCheckSummaries,p.stackingObservation||null,'Eligibility for other models or variants, minimum spend, exclusions and expiry have not been supplied; confirm the current final total at this storefront.'].filter(Boolean).join(' ')
    :p.terms||'Product eligibility, minimum spend, exclusions, stacking and expiry have not been supplied. Confirm any discount in the final checkout total at this storefront.';
  const checkedDates=[...testedProducts.map(t=>t.checkoutObservation.checkedOn),...codeCheckedProducts.map(t=>t.codeCheckObservation.checkedOn)].sort();
  return {...p,benefit:p.benefit??(discount?discountLabel(discount):null),discount,brand:p.slug,eligibleStore:new URL(p.url).hostname,terms,checkoutTestedOn:checkedDates.at(-1)||p.checkoutTestedOn||null,checkoutTestProduct,checkoutTestProducts,codeCheckProduct,codeCheckProducts};
});
export const comparisons=[{slug:'aventon-pace-5-rec-vs-ride1up-roadster-v3',a:products[0].slug,b:products[1].slug,title:'Pace 5 REC vs Roadster V3',description:'Relaxed cruiser or pared-back city bike? Start with how you want to ride.'},{slug:'lectric-xpress2-vs-ride1up-roadster-v3',a:products[2].slug,b:products[1].slug,title:'XPress2 vs Roadster V3',description:'A suspension-equipped commuter or a simpler urban setup: where each makes sense.'}];
export const categories=[{slug:'electric-bikes',name:'Electric bikes',text:'A little assistance. A lot more possibility.',guide:'choose-your-first-ebike'},{slug:'traditional-bikes',name:'Traditional bikes',text:'Road, gravel, hybrid, or mountain. Start with your route.',guide:'road-gravel-or-hybrid'},{slug:'electric-mobility',name:'Electric mobility',text:'Think through your last mile before choosing your next ride.',guide:'bike-or-electric-scooter'},{slug:'gear-and-tech',name:'Gear & tech',text:'The essentials that make every ride work better.',guide:'commuter-gear-checklist'},{slug:'components',name:'Components & upgrades',text:'Compatibility first. Better upgrades follow.',guide:'plan-your-bike-upgrades'},{slug:'cycling-technology',name:'Cycling technology',text:'Useful data, without losing sight of the ride.',guide:'choose-a-cycling-computer'}];
export const brandFor=p=>brands.find(b=>b.slug===p.brand);
export const offerFor=p=>offers.find(o=>o.brand===p.brand&&o.status==='active');
