// Robot repas : reconnaissance d'aliments sur l'appareil (CLIP, transformers.js), sans IA distante.
// [prompt anglais pour CLIP, recherche Ciqual en français, portion par défaut en grammes]
export const FOODS=[
["white rice","Riz blanc, cuit",180],["fried rice","Riz cantonais",250],["pasta","Pâtes sèches, standard, cuites",200],["spaghetti with tomato sauce","Spaghetti bolognaise",300],
["couscous semolina","Semoule de blé dur, cuite",180],["quinoa","Quinoa, cuit",150],["mashed potatoes","Purée de pomme de terre",200],["boiled potatoes","Pomme de terre, cuite à l'eau",200],
["french fries","Frites",150],["bread","Pain baguette",60],["lentils","Lentille verte, cuite",180],["chickpeas","Pois chiche, cuit",150],["kidney beans","Haricot rouge, cuit",150],
["grilled chicken breast","Poulet, filet sans peau grillé/poêlé",130],["roast chicken leg","Poulet, cuisse, rôti",150],["beef steak","Boeuf, steak, grillé",150],["hamburger patty","Steak haché 15% MG, cuit",120],
["meatballs","Boulettes de boeuf, cuites",150],["sausages","Saucisse de Toulouse, cuite",120],["pork chop","Porc, côte, grillée",150],["lamb","Agneau, gigot, rôti",150],["ham slices","Jambon cuit",50],
["salmon fillet","Saumon, cuit au four",130],["white fish fillet","Cabillaud, cuit à la vapeur",150],["tuna","Thon albacore, au naturel, appertisé",80],["shrimp","Crevette, cuite",100],
["fried eggs","Oeuf, au plat",100],["boiled eggs","Oeuf, dur",100],["omelette","Omelette nature",120],["tofu","Tofu, nature",120],
["broccoli","Brocoli, cuit",100],["green beans","Haricot vert, cuit",120],["green salad","Laitue, crue",50],["tomatoes","Tomate, crue",120],["carrots","Carotte, cuite",100],
["zucchini","Courgette, cuite",120],["spinach","Épinard, cuit",120],["cucumber","Concombre, cru",100],["peas","Petits pois, cuits",100],["corn","Maïs doux, appertisé",80],
["mushrooms","Champignon de Paris, cuit",80],["avocado","Avocat, pulpe, cru",80],["ratatouille","Ratatouille",200],["vegetable soup","Soupe aux légumes variés, préemballée à réchauffer",300],
["pizza","Pizza margherita",300],["burger sandwich","Hamburger",220],["sandwich","Sandwich jambon beurre",200],["tacos wrap","Wrap au poulet",220],["kebab","Sandwich grec ou kebab, pita, crudités",300],
["sushi","Sushi",200],["lasagna","Lasagnes bolognaise",300],["quiche","Quiche lorraine",150],["tajine stew","Tajine de poulet",350],["chili con carne","Chili con carne",300],["curry with rice","Curry de poulet",300],
["cheese","Emmental",30],["yogurt","Yaourt ou lait fermenté, nature",125],["milk","Lait demi-écrémé",250],
["banana","Banane, chair sans peau, crue",120],["apple","Pomme, chair et peau, crue",150],["orange","Orange, pulpe, crue",150],["strawberries","Fraise, crue",150],["grapes","Raisin blanc, cru",120],["mixed fruit salad","Salade de fruits",150],
["breakfast cereal","Céréales pour petit-déjeuner",50],["oatmeal porridge","Flocons d'avoine, cuits à l'eau",250],["pancakes","Crêpe, nature, préemballée, rayon frais",80],["croissant","Croissant au beurre",60],
["chocolate","Chocolat noir 50 % de cacao environ, tablette",20],["cake","Gâteau au chocolat",80],["chocolate chip cookie","Cookie au chocolat, préemballé",80],["ice cream","Crème glacée",100],
["nuts","Amande, avec peau, sans sel ajouté",30],["olive oil","Huile d'olive vierge extra",10],["mayonnaise sauce","Mayonnaise",20],["ketchup","Ketchup",20],["butter","Beurre à 80% MG minimum, doux",10]
];
let M=null, EMB=null;
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
async function textEmb(){
  if(EMB) return EMB;
  try{ const c=JSON.parse(localStorage.getItem('r6_clip_txt')||'null'); if(c&&c.n===FOODS.length&&c.v===2){ EMB=c.e; return EMB; } }catch(e){}
  const {tok,txt}=M, prompts=FOODS.map(f=>'a photo of '+f[0]+', a type of food.');
  const out=await txt(tok(prompts,{padding:true,truncation:true}));
  const d=out.text_embeds.data, k=d.length/FOODS.length; EMB=[];
  for(let i=0;i<FOODS.length;i++) EMB.push(norm(Array.from(d.slice(i*k,(i+1)*k))).map(x=>+x.toFixed(5)));
  try{ localStorage.setItem('r6_clip_txt',JSON.stringify({v:2,n:FOODS.length,e:EMB})); }catch(e){}
  return EMB;
}
async function scores(raw){
  const {proc,vis}=M, inp=await proc(raw), out=await vis(inp), v=norm(Array.from(out.image_embeds.data));
  const s=EMB.map(e=>e.reduce((a,x,i)=>a+x*v[i],0)*100), mx=Math.max(...s), ex=s.map(x=>Math.exp(x-mx)), sum=ex.reduce((a,b)=>a+b,0);
  return ex.map(x=>x/sum);
}
// Analyse : image entière + 4 quarts, pour repérer plusieurs aliments dans l'assiette
export async function analyze(blob,onProgress){
  await load(onProgress); await textEmb();
  const {T}=M, url=URL.createObjectURL(blob), full=await T.RawImage.fromURL(url); URL.revokeObjectURL(url);
  const W=full.width, H=full.height, crops=[full];
  for(const [x,y] of [[0,0],[1,0],[0,1],[1,1]]) crops.push(await full.crop([Math.round(x*W*.4),Math.round(y*H*.4),Math.round(x*W*.4+W*.6)-1,Math.round(y*H*.4+H*.6)-1]));
  const agg=new Array(FOODS.length).fill(0), best=new Array(FOODS.length).fill(0);
  for(let c=0;c<crops.length;c++){ const p=await scores(crops[c]); for(let i=0;i<p.length;i++){ agg[i]+=p[i]*(c?1:2); best[i]=Math.max(best[i],p[i]); } }
  const ranked=FOODS.map((f,i)=>({i,s:agg[i]/6,b:best[i]})).sort((a,b)=>b.s-a.s);
  // une seule proposition par famille d'aliments (deux pour les légumes), et un plat complet reste seul
  const G=i=>i<13?"feculent":i<22?"viande":i<26?"poisson":i<30?"oeuf":i<44?"legume":i<55?"plat":i<58?"laitier":i<64?"fruit":i<72?"sucre":"extra";
  const cand=ranked.filter((r,k)=>k===0||(r.b>=0.25&&r.s>=0.06)), seen={}, top=[];
  for(const r of cand){ const g=G(r.i); seen[g]=(seen[g]||0)+1; if(seen[g]>(g==="legume"?2:1)) continue; if(top.length&&G(top[0].i)==="plat"&&g!=="legume"&&g!=="extra") continue; top.push(r); if(top.length>=4) break; }
  return {items:top.map(r=>({en:FOODS[r.i][0],q:FOODS[r.i][1],gr:FOODS[r.i][2],conf:r.b})),alts:ranked.slice(0,10).map(r=>FOODS[r.i][1])};
}
