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
  try{ const c=JSON.parse(localStorage.getItem('r6_clip_txt')||'null'); if(c&&c.n===FOODS.length&&c.v===3){ EMB=c.e; return EMB; } }catch(e){}
  const {tok,txt}=M, prompts=FOODS.map(f=>'a photo of '+f[0]+', a type of food.');
  const out=await txt(tok(prompts,{padding:true,truncation:true}));
  const d=out.text_embeds.data, k=d.length/FOODS.length; EMB=[];
  for(let i=0;i<FOODS.length;i++) EMB.push(norm(Array.from(d.slice(i*k,(i+1)*k))).map(x=>+x.toFixed(5)));
  try{ localStorage.setItem('r6_clip_txt',JSON.stringify({v:3,n:FOODS.length,e:EMB})); }catch(e){}
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
  const G=i=>FOODS[i][3];
  const cand=ranked.filter((r,k)=>k===0||(r.b>=0.25&&r.s>=0.06)), seen={}, top=[];
  for(const r of cand){ const g=G(r.i); seen[g]=(seen[g]||0)+1; if(seen[g]>(g==="legume"?2:1)) continue; if(top.length&&G(top[0].i)==="plat"&&g!=="legume"&&g!=="extra") continue; top.push(r); if(top.length>=4) break; }
  return {items:top.map(r=>({en:FOODS[r.i][0],q:FOODS[r.i][1],gr:FOODS[r.i][2],conf:r.b})),alts:ranked.slice(0,10).map(r=>FOODS[r.i][1])};
}
