// Robot repas : reconnaissance d'aliments sur l'appareil (CLIP, transformers.js), sans IA distante.
// [prompt anglais pour CLIP, recherche Ciqual en français, portion par défaut en grammes]
export const FOODS=[
["white rice","Riz blanc, cuit",180,"feculent"],
["fried rice","Riz cantonais",250,"feculent"],
["pasta","Pâtes sèches, standard, cuites",200,"feculent"],
["spaghetti with tomato sauce","Spaghetti bolognaise",300,"feculent"],
["couscous semolina","Semoule de blé dur, cuite",180,"feculent"],
["quinoa","Quinoa, cuit",150,"feculent"],
["mashed potatoes","Purée de pomme de terre",200,"feculent"],
["boiled potatoes","Pomme de terre, cuite à l'eau",200,"feculent"],
["french fries","Frites",150,"feculent"],
["bread","Pain baguette",60,"feculent"],
["lentils","Lentille verte, cuite",180,"feculent"],
["chickpeas","Pois chiche, cuit",150,"feculent"],
["kidney beans","Haricot rouge, cuit",150,"feculent"],
["grilled chicken breast","Poulet, filet sans peau grillé/poêlé",130,"viande"],
["roast chicken leg","Poulet, cuisse, rôti",150,"viande"],
["beef steak","Boeuf, steak, grillé",150,"viande"],
["hamburger patty","Steak haché 15% MG, cuit",120,"viande"],
["meatballs","Boulettes de boeuf, cuites",150,"viande"],
["sausages","Saucisse de Toulouse, cuite",120,"viande"],
["pork chop","Porc, côte, grillée",150,"viande"],
["lamb","Agneau, gigot, rôti",150,"viande"],
["ham slices","Jambon cuit",50,"viande"],
["salmon fillet","Saumon, cuit au four",130,"poisson"],
["white fish fillet","Cabillaud, cuit à la vapeur",150,"poisson"],
["tuna","Thon albacore, au naturel, appertisé",80,"poisson"],
["shrimp","Crevette, cuite",100,"poisson"],
["fried eggs","Oeuf, au plat",100,"oeuf"],
["boiled eggs","Oeuf, dur",100,"oeuf"],
["omelette","Omelette nature",120,"oeuf"],
["tofu","Tofu, nature",120,"oeuf"],
["broccoli","Brocoli, cuit",100,"legume"],
["green beans","Haricot vert, cuit",120,"legume"],
["green salad","Laitue, crue",50,"legume"],
["tomatoes","Tomate, crue",120,"legume"],
["carrots","Carotte, cuite",100,"legume"],
["zucchini","Courgette, cuite",120,"legume"],
["spinach","Épinard, cuit",120,"legume"],
["cucumber","Concombre, cru",100,"legume"],
["peas","Petits pois, cuits",100,"legume"],
["corn","Maïs doux, appertisé",80,"legume"],
["mushrooms","Champignon de Paris, cuit",80,"legume"],
["avocado","Avocat, pulpe, cru",80,"legume"],
["ratatouille","Ratatouille",200,"legume"],
["vegetable soup","Soupe aux légumes variés, préemballée à réchauffer",300,"legume"],
["pizza","Pizza margherita",300,"plat"],
["burger sandwich","Hamburger",220,"plat"],
["sandwich","Sandwich jambon beurre",200,"plat"],
["tacos wrap","Wrap au poulet",220,"plat"],
["kebab","Sandwich grec ou kebab, pita, crudités",300,"plat"],
["sushi","Sushi",200,"plat"],
["lasagna","Lasagnes bolognaise",300,"plat"],
["quiche","Quiche lorraine",150,"plat"],
["tajine stew","Tajine de poulet",350,"plat"],
["chili con carne","Chili con carne",300,"plat"],
["curry with rice","Curry de poulet",300,"plat"],
["cheese","Emmental",30,"laitier"],
["yogurt","Yaourt ou lait fermenté, nature",125,"laitier"],
["milk","Lait demi-écrémé",250,"laitier"],
["banana","Banane, chair sans peau, crue",120,"fruit"],
["apple","Pomme, chair et peau, crue",150,"fruit"],
["orange","Orange, pulpe, crue",150,"fruit"],
["strawberries","Fraise, crue",150,"fruit"],
["grapes","Raisin blanc, cru",120,"fruit"],
["mixed fruit salad","Salade de fruits",150,"fruit"],
["breakfast cereal","Céréales pour petit-déjeuner",50,"sucre"],
["oatmeal porridge","Flocons d'avoine, cuits à l'eau",250,"sucre"],
["pancakes","Crêpe, nature, préemballée, rayon frais",80,"sucre"],
["croissant","Croissant au beurre",60,"sucre"],
["chocolate","Chocolat noir 50 % de cacao environ, tablette",20,"sucre"],
["cake","Gâteau au chocolat",80,"sucre"],
["chocolate chip cookie","Cookie au chocolat, préemballé",80,"sucre"],
["ice cream","Crème glacée",100,"sucre"],
["nuts","Amande, avec peau, sans sel ajouté",30,"extra"],
["olive oil","Huile d'olive vierge extra",10,"extra"],
["mayonnaise sauce","Mayonnaise",20,"extra"],
["ketchup","Ketchup",20,"extra"],
["butter","Beurre à 80% MG minimum, doux",10,"extra"],
["fried breaded chicken tenders","Nuggets ou croquette panée de volaille, préemballé",150,"viande"],
["chicken nuggets","Nuggets ou croquette panée de volaille, préemballé",120,"viande"],
["cordon bleu","Cordon bleu de volaille, préemballé",120,"viande"],
["breaded schnitzel","Escalope panée, viennoise ou milanaise, veau, cuite",150,"viande"],
["breaded fried fish","Poisson pané, frit",130,"poisson"],
["falafel","Falafel ou boulette de pois-chiche et/ou fève, vente à emporter",120,"viande"],
["potato gratin","Gratin dauphinois, préemballé",200,"feculent"],
["mixed salad with chicken","Salade composée à base de crudités, poulet et fromage, avec sauce, préemballée",250,"plat"]
];
// Produits emballés courants en France : [ce que CLIP doit reconnaître sur l'emballage, recherche Open Food Facts]
export const BRANDS=[
["Pitch Pasquier brioche with chocolate","Pitch Pasquier chocolat"],
["Pasquier pain au lait","Pain au lait Pasquier"],
["Harrys American Sandwich bread","Harrys American Sandwich"],
["Harrys brioche tranchée","Brioche tranchée Harrys"],
["Brioche Pasquier","Brioche Pasquier"],
["La Boulangère pains au lait","Pains au lait La Boulangère"],
["La Boulangère pains au chocolat","Pains au chocolat La Boulangère"],
["Bridor croissant","Croissant"],
["Jacquet pain de mie","Pain de mie Jacquet"],
["Jacquet hot dog buns","Pains hot dog Jacquet"],
["Mulino Bianco Baiocchi biscuits","Baiocchi Mulino Bianco"],
["Mulino Bianco Pan di Stelle","Pan di Stelle"],
["LU Petit Écolier chocolate biscuit","Petit Écolier LU"],
["LU Véritable Petit Beurre","Petit Beurre LU"],
["LU Prince chocolate biscuits","Prince LU chocolat"],
["LU Pépito","Pépito LU"],
["LU Mikado","Mikado"],
["LU Granola cookies","Granola LU"],
["LU Paille d'Or","Paille d'Or LU"],
["LU Barquettes","Barquettes LU"],
["LU TUC crackers","TUC LU"],
["BN biscuits","BN chocolat"],
["Oreo cookies","Oreo"],
["Prince de LU","Prince LU"],
["Belvita breakfast biscuits","Belvita"],
["Pim's","Pim's LU"],
["Choco BN","BN"],
["Gerblé biscuits","Gerblé"],
["St Michel galettes","Galettes St Michel"],
["Bonne Maman madeleines","Madeleines Bonne Maman"],
["Bonne Maman tartelettes","Tartelettes Bonne Maman"],
["Bonne Maman jam","Confiture Bonne Maman"],
["Savane Brossard cake","Savane Brossard"],
["Brownie Brossard","Brownie Brossard"],
["Kinder Bueno","Kinder Bueno"],
["Kinder Country","Kinder Country"],
["Kinder Délice","Kinder Délice"],
["Kinder Maxi chocolate bar","Kinder Maxi"],
["Kinder Pingui","Kinder Pingui"],
["Kinder Schoko-Bons","Kinder Schoko-Bons"],
["Kinder Surprise egg","Kinder Surprise"],
["Ferrero Rocher","Ferrero Rocher"],
["Nutella jar","Nutella"],
["Nutella B-ready","Nutella B-ready"],
["Twix chocolate bar","Twix"],
["Snickers chocolate bar","Snickers"],
["Mars chocolate bar","Mars"],
["Bounty chocolate bar","Bounty"],
["KitKat chocolate bar","KitKat"],
["Lion chocolate bar Nestlé","Lion Nestlé"],
["M&M's peanut","M&M's peanut"],
["Maltesers","Maltesers"],
["Milka chocolate bar","Milka chocolat au lait"],
["Milka Oreo","Milka Oreo"],
["Côte d'Or chocolate","Côte d'Or chocolat"],
["Lindt Excellence dark chocolate","Lindt Excellence"],
["Nestlé Dessert chocolate","Nestlé Dessert chocolat"],
["Poulain chocolate","Chocolat Poulain"],
["Toblerone","Toblerone"],
["Crunch Nestlé","Crunch"],
["Galak white chocolate","Galak"],
["Haribo Tagada","Tagada Haribo"],
["Haribo candy bag","Haribo"],
["Carambar","Carambar"],
["Michoko","Michoko"],
["Lay's chips","Lay's"],
["Pringles","Pringles"],
["Doritos","Doritos"],
["Bénénuts peanuts","Bénénuts cacahuètes"],
["Curly","Curly Vico"],
["Monster Munch","Monster Munch"],
["Croustillants Vico chips","Vico chips"],
["Kellogg's Special K","Special K"],
["Kellogg's Frosties","Frosties"],
["Kellogg's Miel Pops","Miel Pops"],
["Kellogg's Trésor","Trésor Kellogg's"],
["Chocapic","Chocapic"],
["Nesquik cereal","Nesquik céréales"],
["Lion cereal","Lion céréales"],
["Cruesli Quaker","Cruesli"],
["Quaker oats","Flocons d'avoine Quaker"],
["Danone yogurt","Danone yaourt nature"],
["Activia yogurt","Activia"],
["Skyr yogurt","Skyr"],
["Danette dessert","Danette chocolat"],
["La Laitière dessert","La Laitière"],
["Yop drinking yogurt","Yop"],
["Actimel","Actimel"],
["Petits Filous","Petits Filous"],
["Babybel cheese","Babybel"],
["La Vache qui rit","La Vache qui rit"],
["Kiri cheese","Kiri"],
["Président camembert","Camembert Président"],
["Emmental râpé","Emmental râpé"],
["Herta jambon","Jambon Herta"],
["Fleury Michon jambon","Jambon Fleury Michon"],
["Herta knacki","Knacki Herta"],
["Le Gaulois nuggets","Nuggets Le Gaulois"],
["Père Dodu cordon bleu","Cordon bleu Père Dodu"],
["Charal steak haché","Steak haché Charal"],
["Findus fish sticks","Bâtonnets de poisson Findus"],
["Petit Navire tuna can","Thon Petit Navire"],
["Barilla pasta","Pâtes Barilla"],
["Panzani pasta","Pâtes Panzani"],
["Lustucru","Lustucru"],
["Uncle Ben's rice","Riz Uncle Ben's"],
["Taureau Ailé rice","Riz Taureau Ailé"],
["William Saurin cassoulet can","Cassoulet William Saurin"],
["Buitoni pizza","Pizza Buitoni"],
["Sodebo pizza","Pizza Sodebo"],
["Sodebo sandwich","Sandwich Sodebo"],
["Daunat sandwich","Sandwich Daunat"],
["Marie lasagnes","Lasagnes Marie"],
["Picard frozen meal","Picard"],
["Knorr soup","Soupe Knorr"],
["Liebig soup","Soupe Liebig"],
["Bonduelle vegetables can","Bonduelle"],
["Cassegrain","Cassegrain"],
["Amora mayonnaise","Mayonnaise Amora"],
["Heinz ketchup","Ketchup Heinz"],
["Lesieur","Lesieur"],
["Philadelphia","Philadelphia"],
["Coca-Cola can","Coca-Cola"],
["Coca-Cola Zero","Coca-Cola zéro"],
["Pepsi","Pepsi"],
["Fanta","Fanta"],
["Sprite","Sprite"],
["Orangina","Orangina"],
["Oasis tropical","Oasis tropical"],
["Lipton Ice Tea","Lipton Ice Tea pêche"],
["Fuze Tea","Fuze Tea"],
["Red Bull","Red Bull"],
["Monster Energy","Monster Energy"],
["Tropicana orange juice","Tropicana"],
["Joker juice","Jus Joker"],
["Innocent smoothie","Innocent smoothie"],
["Capri-Sun","Capri-Sun"],
["Volvic water","Volvic"],
["Evian water","Evian"],
["Perrier","Perrier"],
["Gatorade","Gatorade"],
["Powerade","Powerade"],
["Isostar","Isostar"],
["Overstim's","Overstims"],
["Decathlon Aptonia energy bar","Aptonia barre"],
["protein bar","barre protéinée"],
["whey protein powder","whey protéine"],
["Grany cereal bar","Grany"],
["Nature Valley bar","Nature Valley"],
["Compote Andros","Compote Andros"],
["Pom'Potes","Pom'Potes"],
["Materne compote","Materne compote"],
["Ben & Jerry's ice cream","Ben & Jerry's"],
["Magnum ice cream","Magnum"],
["Häagen-Dazs","Häagen-Dazs"],
["Carte d'Or ice cream","Carte d'Or"],
["Cornetto","Cornetto"],
["Starbucks","Starbucks"],
["Nescafé","Nescafé"],
["Ricoré","Ricoré"],
["Banania","Banania"],
["Lactel milk","Lait Lactel"],
["Candia milk","Lait Candia"],
["Bjorg","Bjorg"],
["Alpro","Alpro"]
];

// emballage du commerce ou assiette ?
const PACK=["a photo of a packaged food product with a brand logo and printed text","a photo of a plastic food wrapper","a photo of a box or a bag of supermarket food","a photo of a product label with a barcode"];
const PLATE=["a photo of a meal on a plate","a photo of home cooked food","a photo of food in a bowl","a photo of fresh food on a table"];
let M=null, EMB=null, BEMB=null, PEMB=null;
const norm=v=>{ let s=0; for(const x of v) s+=x*x; s=Math.sqrt(s)||1; return v.map(x=>x/s); };
export async function load(onProgress){
  if(M) return M;
  const T=await import('./transformers.min.js');
  T.env.allowLocalModels=false; T.env.useBrowserCache=true;
  T.env.backends.onnx.wasm.wasmPaths=new URL('./',import.meta.url).href;
  const id='Xenova/clip-vit-base-patch32', o={dtype:'q8',progress_callback:p=>{ if(p.status==='progress'&&onProgress) onProgress(p.file,p.progress); }};
  const [tok,proc,txt,vis]=await Promise.all([T.AutoTokenizer.from_pretrained(id,o),T.AutoProcessor.from_pretrained(id,o),T.CLIPTextModelWithProjection.from_pretrained(id,o),T.CLIPVisionModelWithProjection.from_pretrained(id,o)]);
  M={T,tok,proc,txt,vis}; return M;
}
async function embed(prompts){ const {tok,txt}=M, out=await txt(tok(prompts,{padding:true,truncation:true})), d=out.text_embeds.data, k=d.length/prompts.length, r=[];
  for(let i=0;i<prompts.length;i++) r.push(norm(Array.from(d.slice(i*k,(i+1)*k))).map(x=>+x.toFixed(5))); return r; }
async function textEmb(){
  if(EMB) return EMB;
  try{ const c=JSON.parse(localStorage.getItem('r6_clip_txt')||'null'); if(c&&c.n===FOODS.length&&c.nb===BRANDS.length&&c.v===4){ EMB=c.e; BEMB=c.b; PEMB=c.p; return EMB; } }catch(e){}
  EMB=await embed(FOODS.map(f=>'a photo of '+f[0]+', a type of food.'));
  BEMB=await embed(BRANDS.map(b=>'a photo of the packaging of '+b[0]+'.'));
  PEMB=await embed([...PACK,...PLATE]);
  try{ localStorage.setItem('r6_clip_txt',JSON.stringify({v:4,n:FOODS.length,nb:BRANDS.length,e:EMB,b:BEMB,p:PEMB})); }catch(e){}
  return EMB;
}
const soft=(E,v)=>{ const s=E.map(e=>e.reduce((a,x,i)=>a+x*v[i],0)*100), mx=Math.max(...s), ex=s.map(x=>Math.exp(x-mx)), sum=ex.reduce((a,b)=>a+b,0); return ex.map(x=>x/sum); };
async function vec(raw){ const {proc,vis}=M, out=await vis(await proc(raw)); return norm(Array.from(out.image_embeds.data)); }
// Analyse : image entière + 4 quarts, pour repérer plusieurs aliments dans l'assiette
export async function analyze(blob,onProgress){
  await load(onProgress); await textEmb();
  const {T}=M, url=URL.createObjectURL(blob), full=await T.RawImage.fromURL(url); URL.revokeObjectURL(url);
  const W=full.width, H=full.height, crops=[full];
  for(const [x,y] of [[0,0],[1,0],[0,1],[1,1]]) crops.push(await full.crop([Math.round(x*W*.4),Math.round(y*H*.4),Math.round(x*W*.4+W*.6)-1,Math.round(y*H*.4+H*.6)-1]));
  const agg=new Array(FOODS.length).fill(0), best=new Array(FOODS.length).fill(0);
  let v0=null;
  for(let c=0;c<crops.length;c++){ const v=await vec(crops[c]); if(!c) v0=v; const p=soft(EMB,v); for(let i=0;i<p.length;i++){ agg[i]+=p[i]*(c?1:2); best[i]=Math.max(best[i],p[i]); } }
  const ranked=FOODS.map((f,i)=>({i,s:agg[i]/6,b:best[i]})).sort((a,b)=>b.s-a.s);
  // une seule proposition par famille d'aliments (deux pour les légumes), et un plat complet reste seul
  const G=i=>FOODS[i][3];
  const cand=ranked.filter((r,k)=>k===0||(r.b>=0.25&&r.s>=0.06)), seen={}, top=[];
  for(const r of cand){ const g=G(r.i); seen[g]=(seen[g]||0)+1; if(seen[g]>(g==="legume"?2:1)) continue; if(top.length&&G(top[0].i)==="plat"&&g!=="legume"&&g!=="extra") continue; top.push(r); if(top.length>=4) break; }
  const pk=soft(PEMB,v0), packaged=pk.slice(0,PACK.length).reduce((a,b)=>a+b,0);
  const bs=soft(BEMB,v0), brands=bs.map((x,i)=>({q:BRANDS[i][1],s:x})).sort((a,b)=>b.s-a.s).slice(0,4);
  return {packaged,brands,items:top.map(r=>({en:FOODS[r.i][0],q:FOODS[r.i][1],gr:FOODS[r.i][2],conf:r.b})),alts:ranked.slice(0,10).map(r=>FOODS[r.i][1])};
}

// Code-barres (EAN) : lecture sur le téléphone avec zxing, sans réseau
let ZX=null;
export async function barcode(blob){
  if(!ZX){ ZX=await import('./zx/reader/index.js'); ZX.prepareZXingModule({overrides:{locateFile:(f,pre)=>f.endsWith('.wasm')?new URL('./zx/zxing_reader.wasm',import.meta.url).href:pre+f}}); }
  const img=await createImageBitmap(blob), opts={formats:['EAN-13','EAN-8','UPC-A','UPC-E'],tryHarder:true,maxNumberOfSymbols:1};
  for(const side of [1600,2600,1000]){
    const k=Math.min(1,side/Math.max(img.width,img.height)), c=document.createElement('canvas'); c.width=Math.round(img.width*k); c.height=Math.round(img.height*k);
    const g=c.getContext('2d',{willReadFrequently:true}); g.drawImage(img,0,0,c.width,c.height);
    const r=await ZX.readBarcodes(g.getImageData(0,0,c.width,c.height),opts); if(r&&r.length&&r[0].text) return r[0].text;
    if(k===1) break;
  }
  return null;
}
