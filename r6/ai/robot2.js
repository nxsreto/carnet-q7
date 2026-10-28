// Robot repas v2 : reconnaissance d'aliments sur le téléphone (CLIP, transformers.js), sans IA distante.
// [description anglaise pour CLIP, nom exact de la table Ciqual, portion par défaut en grammes, famille]
export const FOODS=[
// féculents
["white rice","Riz blanc, cuit, sans sel ajouté",180,"feculent"],
["brown rice","Riz complet, cuit, sans sel ajouté",180,"feculent"],
["fried rice","Riz cantonais, préemballé",250,"feculent"],
["pasta","Pâtes sèches, standard, cuites, sans sel ajouté",200,"feculent"],
["penne pasta with tomato sauce","Pâtes sèches, standard, cuites, sans sel ajouté",250,"feculent"],
["spaghetti bolognese","Pâtes à la bolognaise (spaghetti, tagliatelles…), préemballées",300,"plat"],
["pasta carbonara","Pâtes à la carbonara (spaghetti, tagliatelles…), préemballées",300,"plat"],
["ravioli","Pâtes fraîches farcies (ex : raviolis, tortellinis), cuites (aliment moyen)",200,"feculent"],
["gnocchi","Gnocchi à la pomme de terre, cuit",200,"feculent"],
["asian noodles","Nouilles asiatiques cuisinées (boeuf, poulet, légumes…) non instantanées",300,"plat"],
["instant ramen noodles","Nouilles asiatiques instantanées, aromatisées, cuites",250,"feculent"],
["couscous semolina","Semoule ou graine de couscous, cuite, sans sel ajouté",180,"feculent"],
["quinoa","Quinoa, bouilli/cuit à l'eau, sans sel ajouté",150,"feculent"],
["mashed potatoes","Purée de pomme de terre (aliment moyen)",200,"feculent"],
["boiled potatoes","Pomme de terre, bouillie/cuite à l'eau",200,"feculent"],
["roasted potatoes","Pomme de terre, sans peau, rôtie/cuite au four",200,"feculent"],
["diced roasted potato cubes","Pomme de terre, sans peau, rôtie/cuite au four",200,"feculent"],
["potato wedges","Potatoes ou wedges ou quartiers de pommes de terre épicés, surgelées, cuites",180,"feculent"],
["french fries","Frites de pommes de terre, surgelées, cuites en friteuse",150,"feculent"],
["oven baked fries","Frites de pommes de terre, surgelées, rôties/cuites au four",150,"feculent"],
["sweet potato","Patate douce, cuite",180,"feculent"],
["potato gratin","Gratin dauphinois, préemballé",200,"feculent"],
["lentils","Lentille verte, bouillie/cuite à l'eau",180,"feculent"],
["chickpeas","Pois chiche, bouilli/cuit à l'eau",150,"feculent"],
["kidney beans","Haricot rouge, bouilli/cuit à l'eau",150,"feculent"],
// pains
["baguette bread","Pain blanc (par ex. : baguette, boule…)",60,"pain"],
["sliced multigrain bread","Pain de mie aux céréales et/ou graines, préemballé",50,"pain"],
["white sandwich bread slices","Pain de mie blanc, préemballé",50,"pain"],
["burger bun","Pain pour burger ou hot dog (bun), préemballé",60,"pain"],
["flour tortilla","Tortilla souple (à garnir), à base de blé",60,"pain"],
["bagel","Pain bagel",90,"pain"],
["brioche bread","Brioche nature, préemballée",60,"sucre"],
["toast with butter","Pain blanc (par ex. : baguette, boule…)",60,"pain"],
// viandes
["grilled chicken breast","Poulet, filet sans peau grillé/poêlé",130,"viande"],
["sliced chicken strips","Poulet, filet sans peau grillé/poêlé",130,"viande"],
["tandoori chicken","Poulet, filet sans peau grillé/poêlé",150,"viande"],
["roast chicken leg","Poulet, cuisse, viande et peau rôtie/cuite au four",150,"viande"],
["chicken wings","Poulet, aile, viande et peau rôties/cuites au four",150,"viande"],
["beef steak","Boeuf, entrecôte, partie maigre grillée/poêlée",150,"viande"],
["hamburger patty","Boeuf, steak haché 15% MG cuit",120,"viande"],
["ground beef","Boeuf, steak haché, cuit (aliment moyen)",120,"viande"],
["meatballs","Boulettes au boeuf, cuites",150,"viande"],
["kofta kebab","Boulettes au boeuf et à l'agneau (type kefta), préemballées, cuites",150,"viande"],
["merguez sausages","Merguez, boeuf et mouton, cuite",120,"viande"],
["sausages","Saucisse de Francfort",100,"viande"],
["lamb chop","Agneau, gigot grillé/poêlé",150,"viande"],
["turkey escalope","Dinde, escalope grillée/poêlée",130,"viande"],
["duck breast","Canard, magret grillé/poêlé",150,"viande"],
["beef stew","Boeuf bourguignon, préemballé",300,"plat"],
["ham slices","Jambon cuit, choix",50,"viande"],
["fried breaded chicken tenders","Nuggets ou croquette panée de poulet, préemballé",150,"viande"],
["chicken nuggets","Nuggets ou croquette panée de poulet, préemballé",120,"viande"],
["cordon bleu breaded cutlet","Cordon bleu de volaille, préemballé",100,"viande"],
["breaded schnitzel","Escalope panée, viennoise ou milanaise, dinde, cuite",150,"viande"],
// poissons
["salmon fillet","Saumon, cuit, sans précision (aliment moyen)",130,"poisson"],
["white fish fillet","Cabillaud, cuit, sans précision (aliment moyen)",150,"poisson"],
["breaded fried fish","Poisson pané, frit",130,"poisson"],
["fish sticks","Nuggets ou croquette panée de poisson, préemballé",120,"poisson"],
["canned tuna","Thon, au naturel, appertisé, égoutté",80,"poisson"],
["shrimp","Crevette, cuite",100,"poisson"],
["sardines","Sardine, à l'huile, appertisée, égouttée",80,"poisson"],
["mussels","Moule, bouillie/cuite à l'eau",200,"poisson"],
// oeufs
["omelette","Omelette, garnitures diverses : légumes, fromages, viandes... (aliment moyen)",150,"oeuf"],
["cheese omelette","Omelette au fromage, faite maison",150,"oeuf"],
["fried eggs","Oeuf au plat, sans matière grasse",100,"oeuf"],
["boiled eggs","Oeuf dur",100,"oeuf"],
["scrambled eggs","Oeuf brouillé, avec matière grasse",120,"oeuf"],
["tofu","Tofu nature, préemballé",120,"oeuf"],
// légumes
["broccoli","Brocoli, cuit (aliment moyen)",120,"legume"],
["green beans","Haricot vert, cuit",120,"legume"],
["green salad lettuce","Salade verte, crue, sans assaisonnement",50,"legume"],
["tomatoes","Tomate ronde, crue",120,"legume"],
["cherry tomatoes","Tomate cerise, crue",80,"legume"],
["carrots","Carotte, cuite (aliment moyen)",100,"legume"],
["grated carrots","Carotte, crue",100,"legume"],
["zucchini","Courgette, chair et peau, cuite",120,"legume"],
["sauteed bell peppers and onions","Poivron rouge, sauté/poêlé",100,"legume"],
["red bell pepper","Poivron rouge, cru",80,"legume"],
["onions","Oignon, cuit",60,"legume"],
["eggplant","Aubergine, cuite",120,"legume"],
["spinach","Épinard, cuit",120,"legume"],
["cauliflower","Chou-fleur, bouilli/cuit à l'eau",120,"legume"],
["cucumber","Concombre, chair et peau, cru",100,"legume"],
["peas","Petits pois, cuits",100,"legume"],
["corn","Maïs doux, appertisé, égoutté",80,"legume"],
["mushrooms","Champignon de Paris ou champignon de couche, sauté/poêlé, sans matière grasse",80,"legume"],
["avocado","Avocat, chair sans peau, sans noyau, cru",80,"legume"],
["mixed frozen vegetables stir fry","Poêlée de légumes assaisonnés grillée, méridionale ou méditerranéenne, surgelée, crue",200,"legume"],
["ratatouille","Ratatouille cuisinée, préemballée",200,"legume"],
["vegetable soup","Soupe aux légumes variés, préemballée à réchauffer",300,"legume"],
["onion soup with melted cheese","Soupe à l'oignon, préemballée à réchauffer",300,"plat"],
["bowl of soup","Soupe (aliment moyen)",300,"plat"],
["beetroot","Betterave rouge, cuite",80,"legume"],
// plats
["pizza","Pizza (aliment moyen)",300,"plat"],
["cheese pizza","Pizza au fromage ou pizza margherita, préemballée",300,"plat"],
["burger sandwich","Hamburger, de restauration rapide",220,"plat"],
["club sandwich","Sandwich pain de mie complet, jambon, préemballé",200,"plat"],
["macaroni and cheese","Gratin de pâtes au jambon, préemballé",300,"plat"],
["garlic bread","Pain blanc (par ex. : baguette, boule…)",80,"pain"],
["ham sandwich baguette","Sandwich baguette, jambon beurre, fait maison",200,"plat"],
["chicken wrap","Wrap poulet crudités",220,"plat"],
["french tacos","Wrap poulet crudités",350,"plat"],
["kebab sandwich","Sandwich grec ou kebab, pita, crudités",300,"plat"],
["hot dog","Hot-dog, préemballé",150,"plat"],
["panini","Sandwich panini, trois fromages",200,"plat"],
["croque monsieur","Croque-monsieur, jambon, fromage et beurre, fait maison",150,"plat"],
["sushi","Sushi ou maki aux produits de la mer",200,"plat"],
["lasagna","Lasagnes ou canellonis à la viande (bolognaise), préemballés",300,"plat"],
["quiche","Quiche lorraine, préemballée",150,"plat"],
["vegetable tart","Tarte aux légumes, préemballée",150,"plat"],
["savory tart","Tarte ou quiche salée (aliment moyen)",150,"plat"],
["tajine stew","Tajine de poulet, préemballé",350,"plat"],
["couscous with meat and vegetables","Couscous au poulet",400,"plat"],
["chili con carne","Chili con carne, préemballé",300,"plat"],
["chicken curry with rice","Poulet au curry et au lait de coco, préemballé",350,"plat"],
["paella","Paëlla (poulet fruit de mer, chorizo, colin), fait maison",350,"plat"],
["risotto","Risotto, aux fromages, préemballé",300,"plat"],
["shepherd's pie","Hachis parmentier à la viande, préemballé",300,"plat"],
["gratin of vegetables","Gratin de légumes, fait maison",250,"plat"],
["cassoulet","Cassoulet, appertisé",350,"plat"],
["samosa","Samoussa ou samossa ou brick garni, fait maison, cuit",80,"plat"],
["caesar salad","Salade César au poulet (salade verte, fromage, croûtons, sauce), préemballée",250,"plat"],
["mixed salad with chicken","Salade composée à base de crudités, poulet et fromage, avec sauce, préemballée",250,"plat"],
["pasta salad","Salade de pâtes au poulet et crudités, avec sauce, préemballée",250,"plat"],
["tabbouleh","Taboulé ou salade de semoule aux légumes, préemballé",200,"plat"],
["potato salad","Salade de pommes de terre, faite maison",200,"plat"],
["falafel","Falafel ou boulette de pois-chiche et/ou fève, préemballé",120,"viande"],
// laitiers
["cheese","Emmental ou emmenthal",30,"laitier"],
["grated cheese","Emmental ou emmenthal, râpé",30,"laitier"],
["mozzarella","Mozzarella au lait de vache",60,"laitier"],
["camembert","Camembert au lait pasteurisé",30,"laitier"],
["goat cheese","Fromage de chèvre bûche",30,"laitier"],
["yogurt","Yaourt ou lait fermenté, nature",125,"laitier"],
["a bowl of plain thick white yogurt","Yaourt à la grecque nature",150,"laitier"],
["cottage cheese fromage blanc","Fromage blanc, nature, 2-3% MG",150,"laitier"],
["glass of milk","Lait demi-écrémé (aliment moyen)",250,"laitier"],
// fruits
["banana","Banane, chair sans peau, crue",120,"fruit"],
["apple","Pomme, chair et peau, crue",150,"fruit"],
["orange","Orange, chair sans peau, sans pépins, crue",150,"fruit"],
["clementine","Clémentine ou mandarine, chair sans peau, sans pépins, crue",80,"fruit"],
["strawberries","Fraise, crue",150,"fruit"],
["grapes","Raisin cru (aliment moyen)",120,"fruit"],
["passion fruit","Fruit de la passion ou maracudja, chair sans peau, avec pépins, cru",40,"fruit"],
["kiwi","Kiwi, chair sans peau, avec pépins, cru",80,"fruit"],
["pear","Poire, chair et peau, crue",150,"fruit"],
["mango","Mangue, chair sans peau, sans noyau, crue",150,"fruit"],
["pineapple","Ananas, chair sans peau, cru",150,"fruit"],
["watermelon","Pastèque, chair sans peau, sans pépins, crue",250,"fruit"],
["melon","Melon cantaloup (par ex.: Charentais), chair sans peau, sans pépins, cru",200,"fruit"],
["fruit salad","Salade de fruits, crue",150,"fruit"],
["applesauce compote","Compote de pomme, préemballée",100,"fruit"],
// sucré
["chocolate breakfast cereal with milk","Céréales pour petit déjeuner chocolatées, non fourrées, enrichies en vitamines et minéraux",50,"sucre"],
["breakfast cereal","Céréales pour petit déjeuner (aliment moyen)",50,"sucre"],
["oatmeal porridge","Flocons d'avoine bouillis/cuits à l'eau",250,"sucre"],
["crepes","Crêpe, nature, préemballée, rayon frais",80,"sucre"],
["pancakes","Pancake (petite crêpe épaisse), sucrée, préemballée",80,"sucre"],
["croissant","Croissant pur beurre, préemballé",60,"sucre"],
["pain au chocolat","Pain au chocolat, préemballé",70,"sucre"],
["chocolate bar","Chocolat au lait, tablette",20,"sucre"],
["dark chocolate","Chocolat noir 50 % de cacao environ, tablette",20,"sucre"],
["chocolate cake","Gâteau au chocolat, préemballé",80,"sucre"],
["brownie","Brownie au chocolat, préemballé",60,"sucre"],
["muffin","Muffin, au chocolat, préemballé",80,"sucre"],
["donut","Beignet ou donut fourré ou nappé goût chocolat ou chocolat noisette, préemballé",70,"sucre"],
["chocolate chip cookie","Cookie au chocolat, préemballé",80,"sucre"],
["butter biscuits topped with a chocolate bar","Biscuit sec petit beurre au chocolat (tablette ou pépites)",50,"sucre"],
["churros","Beignet ou donut rond moelleux, sans fourrage, saupoudré de sucre",80,"sucre"],
["madeleine cakes","Madeleine ordinaire, préemballée",50,"sucre"],
["waffle","Gaufre bruxelloise ou liégeoise nature, artisanale",80,"sucre"],
["ice cream","Glace ou crème glacée, bac ou pot (aliment moyen)",100,"sucre"],
["ice cream cone","Glace ou crème glacée, cône (taille standard)",90,"sucre"],
["tiramisu","Tiramisu au café, rayon frais",100,"sucre"],
["chocolate mousse","Mousse au chocolat traditionnelle, rayon frais",100,"sucre"],
["flan custard","Flan pâtissier aux oeufs ou à la parisienne",120,"sucre"],
["candy","Bonbon gélifié",30,"sucre"],
["potato chips","Chips de pommes de terre nature ou aromatisées",40,"sucre"],
["chocolate hazelnut spread","Pâte à tartiner chocolat et noisette",20,"extra"],
// extras
["nuts","Amande, avec peau, sans sel ajouté",30,"extra"],
["peanuts","Cacahuète, grillée, salée",30,"extra"],
["olive oil","Huile d'olive vierge extra",10,"extra"],
["mayonnaise","Mayonnaise (70% MG min.), préemballée",20,"extra"],
["ketchup","Ketchup, préemballé",20,"extra"],
["mustard","Moutarde",10,"extra"],
["honey","Miel",10,"extra"],
["butter","Beurre à 80% MG minimum, doux",10,"extra"],
["cream sauce","Crème 12 à 25% MG, légère, semi-épaisse, UHT",30,"extra"],
["tomato sauce","Sauce tomate aux oignons, préemballée",80,"extra"],
// boissons
["glass of cola soda","Cola, sucré",330,"boisson"],
["orange juice","Jus d'orange, pur jus",200,"boisson"],
["coffee","Café, poudre soluble",2,"boisson"]
];

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
const PACK=["a photo of a packaged food product with a brand logo and printed text","a photo of a plastic food wrapper","a photo of a box or a bag of supermarket food","a photo of a product label with a barcode"];
const PLATE=["a photo of a meal on a plate","a photo of home cooked food","a photo of food in a bowl","a photo of fresh food on a table"];
const TPL=["a photo of {}, a type of food.","a close-up photo of {} on a plate.","a photo of a dish of {}."];
let MODEL='Xenova/clip-vit-base-patch16';
export function setModel(id){ if(id!==MODEL){ MODEL=id; M=null; EMB=null; } }
let M=null, EMB=null, BEMB=null, PEMB=null;
const norm=v=>{ let s=0; for(const x of v) s+=x*x; s=Math.sqrt(s)||1; return v.map(x=>x/s); };
export async function load(onProgress){
  if(M) return M;
  const T=await import('./transformers.min.js');
  T.env.allowLocalModels=false; T.env.useBrowserCache=true;
  T.env.backends.onnx.wasm.wasmPaths=new URL('./',import.meta.url).href;
  const id=MODEL, o={dtype:'q8',progress_callback:p=>{ if(p.status==='progress'&&onProgress) onProgress(p.file,p.progress); }};
  const [tok,proc,txt,vis]=await Promise.all([T.AutoTokenizer.from_pretrained(id,o),T.AutoProcessor.from_pretrained(id,o),T.CLIPTextModelWithProjection.from_pretrained(id,o),T.CLIPVisionModelWithProjection.from_pretrained(id,o)]);
  M={T,tok,proc,txt,vis}; return M;
}
async function embed(prompts){ const {tok,txt}=M, r=[];
  for(let i=0;i<prompts.length;i+=32){ const ch=prompts.slice(i,i+32), out=await txt(tok(ch,{padding:true,truncation:true})), d=out.text_embeds.data, k=d.length/ch.length;
    for(let j=0;j<ch.length;j++) r.push(norm(Array.from(d.slice(j*k,(j+1)*k)))); }
  return r; }
async function embedAvg(labels){ const all=await embed(labels.flatMap(l=>TPL.map(t=>t.replace('{}',l)))), r=[];
  for(let i=0;i<labels.length;i++){ const v=new Array(all[0].length).fill(0); for(let t=0;t<TPL.length;t++) all[i*TPL.length+t].forEach((x,j)=>v[j]+=x); r.push(norm(v).map(x=>+x.toFixed(5))); }
  return r; }
const CK='r6_clip_v5';
async function textEmb(){
  if(EMB) return EMB;
  try{ const c=JSON.parse(localStorage.getItem(CK)||'null'); if(c&&c.m===MODEL&&c.n===FOODS.length&&c.nb===BRANDS.length){ EMB=c.e; BEMB=c.b; PEMB=c.p; return EMB; } }catch(e){}
  EMB=await embedAvg(FOODS.map(f=>f[0]));
  BEMB=(await embed(BRANDS.map(b=>'a photo of the packaging of '+b[0]+'.'))).map(v=>v.map(x=>+x.toFixed(5)));
  PEMB=(await embed([...PACK,...PLATE])).map(v=>v.map(x=>+x.toFixed(5)));
  try{ localStorage.removeItem('r6_clip_txt'); localStorage.setItem(CK,JSON.stringify({m:MODEL,n:FOODS.length,nb:BRANDS.length,e:EMB,b:BEMB,p:PEMB})); }catch(e){}
  return EMB;
}
const soft=(E,v,t=100)=>{ const s=E.map(e=>e.reduce((a,x,i)=>a+x*v[i],0)*t), mx=Math.max(...s), ex=s.map(x=>Math.exp(x-mx)), sum=ex.reduce((a,b)=>a+b,0); return ex.map(x=>x/sum); };
const cos=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
async function vec(raw){ const {proc,vis}=M, out=await vis(await proc(raw)); return norm(Array.from(out.image_embeds.data)); }
// Mémoire des corrections : le robot retient ce que tu as corrigé, sur ton téléphone
const LK='r6_learn';
function memory(){ try{ const m=JSON.parse(localStorage.getItem(LK)||'[]'); return m.filter(x=>x.m===MODEL); }catch(e){ return []; } }
export function learn(v,q,gr){ if(!v||!q) return; try{ const m=JSON.parse(localStorage.getItem(LK)||'[]').filter(x=>!(x.m===MODEL&&cos(x.e,v)>0.97&&x.q===q));
  m.push({m:MODEL,e:v.map(x=>+x.toFixed(4)),q,gr:gr||null}); localStorage.setItem(LK,JSON.stringify(m.slice(-150))); }catch(e){} }
// Analyse : image entière, centre et 4 quarts qui se chevauchent, pour repérer plusieurs aliments
export async function analyze(blob,onProgress,opt={}){
  await load(onProgress); await textEmb();
  const {T}=M, url=URL.createObjectURL(blob), full=await T.RawImage.fromURL(url); URL.revokeObjectURL(url);
  const W=full.width, H=full.height, crops=[full];
  crops.push(await full.crop([Math.round(W*.2),Math.round(H*.2),Math.round(W*.8)-1,Math.round(H*.8)-1]));
  if(!opt.fast) for(const [x,y] of [[0,0],[1,0],[0,1],[1,1]]) crops.push(await full.crop([Math.round(x*W*.4),Math.round(y*H*.4),Math.round(x*W*.4+W*.6)-1,Math.round(y*H*.4+H*.6)-1]));
  const n=FOODS.length, agg=new Array(n).fill(0), best=new Array(n).fill(0), V=[], peaks=[];
  for(let c=0;c<crops.length;c++){ const v=await vec(crops[c]); V.push(v); const p=soft(EMB,v); const w=c===0?2:c===1?1.5:1;
    let am=0; for(let i=0;i<n;i++){ agg[i]+=p[i]*w; best[i]=Math.max(best[i],p[i]); if(p[i]>p[am]) am=i; }
    if(c>=2) peaks.push({i:am,p:p[am]}); }
  const v0=V[0], tw=2+1.5+(crops.length-2);
  const ranked=FOODS.map((f,i)=>({i,s:agg[i]/tw,b:best[i]})).sort((a,b)=>b.s-a.s);
  const G=i=>FOODS[i][3], thB=opt.thB??0.22, thS=opt.thS??0.04, thP=opt.thP??0.3;
  // 1) le plus probable sur toute la photo, 2) ce que chaque zone voit nettement, 3) le reste au-dessus des seuils
  const byI=i=>ranked.find(r=>r.i===i);
  const cand=[ranked[0], ...peaks.filter(x=>x.p>=thP).sort((a,b)=>b.p-a.p).map(x=>Object.assign({},byI(x.i),{peak:x.p})), ...ranked.slice(1).filter(r=>r.b>=thB&&r.s>=thS)];
  const seen={}, seenQ={}, top=[];
  for(const r of cand){ const g=G(r.i), q=FOODS[r.i][1]; if(seenQ[q]) continue;
    if((seen[g]||0)>=(g==="legume"?2:1)) continue;
    if(top.length&&G(top[0].i)==="plat"&&!["legume","extra","boisson","pain"].includes(g)&&!(r.peak>=0.5)) continue;
    seen[g]=(seen[g]||0)+1; seenQ[q]=1; top.push(r); if(top.length>=5) break; }
  let items=top.map(r=>({en:FOODS[r.i][0],q:FOODS[r.i][1],gr:FOODS[r.i][2],conf:r.b}));
  // ce que tu as déjà corrigé sur une photo très proche passe en premier
  const mem=memory().map(x=>({x,s:cos(x.e,v0)})).filter(o=>o.s>0.9).sort((a,b)=>b.s-a.s);
  if(mem.length){ const k=mem[0].x; items=[{en:'(souvenir)',q:k.q,gr:k.gr||items[0]?.gr||100,conf:mem[0].s,learned:true},...items.filter(it=>it.q!==k.q)].slice(0,5); }
  const pk=soft(PEMB,v0), packaged=pk.slice(0,PACK.length).reduce((a,b)=>a+b,0);
  const bs=soft(BEMB,v0), brands=bs.map((x,i)=>({q:BRANDS[i][1],s:x})).sort((a,b)=>b.s-a.s).slice(0,4);
  return {packaged,brands,items,alts:ranked.slice(0,12).map(r=>FOODS[r.i][1]),vec:v0.map(x=>+x.toFixed(4))};
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
