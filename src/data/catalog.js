import { partners } from './partners.js';
import { discountLabel } from '../lib/pricing.js';
export const updated = '2026-10-23';
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
  }
];
for(const p of products){p.publishedOn??='2026-10-19';p.updatedOn??=p.publishedOn;p.specsCheckedOn??=p.publishedOn;}
const checkoutProductFor=brand=>products.find(p=>p.brand===brand&&p.checkoutObservation);
export const offers=partners.map(p=>{const tested=checkoutProductFor(p.slug);const discount=p.discount||null;const checkoutTestProduct=tested?{slug:tested.slug,name:tested.name,variantId:tested.price.variantId,variantLabel:tested.price.variantLabel}:null;const terms=checkoutTestProduct?`Checkout acceptance was observed for ${checkoutTestProduct.name}, ${checkoutTestProduct.variantLabel} only. ${p.stackingObservation||''} Eligibility for other models or variants, minimum spend, exclusions and expiry have not been supplied; confirm the current final total at this storefront.`:p.terms||'Product eligibility, minimum spend, exclusions, stacking and expiry have not been supplied. Confirm any discount in the final checkout total at this storefront.';return {...p,benefit:p.benefit??(discount?discountLabel(discount):null),discount,brand:p.slug,eligibleStore:new URL(p.url).hostname,terms,checkoutTestedOn:tested?.checkoutObservation?.checkedOn||p.checkoutTestedOn||null,checkoutTestProduct};});
export const comparisons=[{slug:'aventon-pace-5-rec-vs-ride1up-roadster-v3',a:products[0].slug,b:products[1].slug,title:'Pace 5 REC vs Roadster V3',description:'Relaxed cruiser or pared-back city bike? Start with how you want to ride.'},{slug:'lectric-xpress2-vs-ride1up-roadster-v3',a:products[2].slug,b:products[1].slug,title:'XPress2 vs Roadster V3',description:'A suspension-equipped commuter or a simpler urban setup: where each makes sense.'}];
export const categories=[{slug:'electric-bikes',name:'Electric bikes',text:'A little assistance. A lot more possibility.',guide:'choose-your-first-ebike'},{slug:'traditional-bikes',name:'Traditional bikes',text:'Road, gravel, hybrid, or mountain. Start with your route.',guide:'road-gravel-or-hybrid'},{slug:'electric-mobility',name:'Electric mobility',text:'Think through your last mile before choosing your next ride.',guide:'bike-or-electric-scooter'},{slug:'gear-and-tech',name:'Gear & tech',text:'The essentials that make every ride work better.',guide:'commuter-gear-checklist'},{slug:'components',name:'Components & upgrades',text:'Compatibility first. Better upgrades follow.',guide:'plan-your-bike-upgrades'},{slug:'cycling-technology',name:'Cycling technology',text:'Useful data, without losing sight of the ride.',guide:'choose-a-cycling-computer'}];
export const brandFor=p=>brands.find(b=>b.slug===p.brand);
export const offerFor=p=>offers.find(o=>o.brand===p.brand&&o.status==='active');
