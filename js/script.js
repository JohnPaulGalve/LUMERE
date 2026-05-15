
/* ═══════════════ DATA ═══════════════ */
/* ═══════════════ DATA ═══════════════ */
const products=[
  {id:1,emoji:'💧',img:'images/product images/1.avif',name:'Vitamin C Brightening Serum',brand:'Lumière Essentials',cat:'skincare',subcat:'serums',price:1290,orig:null,badge:'best',rating:4.8,desc:'Potent 20% Vitamin C with ferulic acid and niacinamide. Brightens skin, fades dark spots and strengthens the skin barrier. Suitable for all skin types.'},
  {id:2,emoji:'🌿',img:'images/product images/2.jpeg',name:'Hydra Boost Moisturizer',brand:'Dew & Glow',cat:'skincare',subcat:'moisturizers',price:890,orig:null,badge:'new',rating:4.6,desc:'24-hour deep hydration with hyaluronic acid, ceramides and shea butter. Non-greasy formula for all skin types.'},
  {id:3,emoji:'💎',img:'images/product images/3.avif',name:'Retinol Renewal Serum',brand:'Lumière Essentials',cat:'skincare',subcat:'serums',price:1580,orig:1980,badge:'sale',rating:4.7,desc:'0.5% encapsulated retinol for overnight renewal. Reduces fine lines, evens skin tone and boosts collagen production.'},
  {id:4,emoji:'🌸',img:'images/product images/4.avif',name:'Rose Facial Mist',brand:'Bloom Beauty',cat:'skincare',subcat:'moisturizers',price:520,orig:700,badge:'sale',rating:4.2,desc:'Refreshing rose water mist infused with hyaluronic acid and niacinamide. Sets makeup and hydrates on the go.'},
  {id:5,emoji:'💄',img:'images/product images/5.webp',name:'Velvet Matte Lipstick',brand:'Lumière Couture',cat:'makeup',subcat:'lipstick',price:450,orig:600,badge:'sale',rating:4.5,desc:'Highly pigmented, transfer-proof matte lipstick in 24 shades. Comfortable formula with vitamin E for all-day color.'},
  {id:6,emoji:'✨',img:'images/product images/6.webp',name:'Luminous Foundation',brand:'Lumière Couture',cat:'makeup',subcat:'foundation',price:1150,orig:null,badge:'new',rating:4.3,desc:'Buildable coverage with a natural skin-like finish. Available in 30 shades with SPF 25 protection.'},
  {id:7,emoji:'👁️',img:'images/product images/7.jpg',name:'Lengthening Mascara',brand:'Eye Envy',cat:'makeup',subcat:'eye makeup',price:380,orig:null,badge:'best',rating:4.4,desc:'Volumizing and lengthening mascara with a curved wand. Long-wearing, smudge-proof formula with lash-strengthening peptides.'},
  {id:8,emoji:'🧴',img:'images/product images/8.jpg',name:'UV Shield SPF 50+',brand:'Soleil Protect',cat:'sunscreen',subcat:'sunscreen',price:680,orig:null,badge:'best',rating:4.7,desc:'Lightweight broad-spectrum sunscreen PA+++ protection. No white cast, perfect under makeup for daily use.'},
  {id:9,emoji:'🍃',img:'images/product images/9.avif',name:'Scalp Revival Shampoo',brand:'Mane Story',cat:'haircare',subcat:'shampoo',price:780,orig:null,badge:'new',rating:4.1,desc:'Charcoal and tea tree oil-infused shampoo that deeply cleanses the scalp, removes buildup and relieves itchiness.'},
  {id:10,emoji:'💫',img:'images/product images/10.webp',name:'Repair Conditioner',brand:'Mane Story',cat:'haircare',subcat:'conditioner',price:720,orig:null,badge:'best',rating:4.2,desc:'Protein-rich repair conditioner for damaged and color-treated hair. Restores strength, shine and smoothness.'},
  {id:11,emoji:'🌊',img:'images/product images/11.avif',name:'Argan Oil Hair Mask',brand:'Mane Story',cat:'haircare',subcat:'hair tools',price:950,orig:1200,badge:'sale',rating:4.6,desc:'Intensive overnight hair mask with argan oil and keratin. Repairs split ends, deeply moisturizes and adds brilliant shine.'},
  {id:12,emoji:'🌙',img:'images/product images/12.webp',name:'Niacinamide 10% Toner',brand:'Clear Skin Co.',cat:'skincare',subcat:'serums',price:640,orig:null,badge:'new',rating:4.5,desc:'10% niacinamide toner that minimizes pores, controls oil and evens skin tone. Gentle formula for daily use.'},
  {id:13,emoji:'🧴',img:'images/product images/13.avif',name:'Gentle Foaming Cleanser',brand:'PureSkin',cat:'skincare',subcat:'cleansers',price:450,orig:null,badge:'new',rating:4.3,desc:'Mild foaming cleanser that removes impurities and makeup without stripping moisture.'},
  {id:14,emoji:'🧪',img:'images/product images/14.avif',name:'Bakuchiol Night Serum',brand:'GlowLab',cat:'skincare',subcat:'serums',price:1390,orig:1790,badge:'sale',rating:4.6,desc:'A gentle retinol alternative that boosts radiance and reduces fine lines.'},
  {id:15,emoji:'🧴',img:'images/product images/15.avif',name:'Shea Body Lotion',brand:'LushAura',cat:'skincare',subcat:'moisturizers',price:520,orig:null,badge:null,rating:4.0,desc:'Rich body lotion with shea butter for deep hydration and a silky finish.'},
  {id:16,emoji:'🛁',img:'images/product images/16.webp',name:'Detox Clay Mask',brand:'SpaRitual',cat:'skincare',subcat:'masks',price:650,orig:850,badge:'sale',rating:4.2,desc:'Purifying clay mask that draws out impurities and refines pores.'},
  {id:17,emoji:'💧',img:'images/product images/17.webp',name:'AHA Resurfacing Toner',brand:'RenewCo',cat:'skincare',subcat:'toners',price:720,orig:null,badge:'new',rating:4.4,desc:'Mild AHA toner that exfoliates and brightens skin texture.'},
  {id:18,emoji:'💅',img:'images/product images/18.webp',name:'Quick Dry Top Coat',brand:'NailStudio',cat:'makeup',subcat:'nailcare',price:280,orig:null,badge:'best',rating:4.2,desc:'High-shine, quick-dry top coat for long-lasting manicure finishes.'},
  {id:19,emoji:'🖌️',img:'images/product images/19.webp',name:'Pro Brush Set',brand:'ProBrush',cat:'makeup',subcat:'brushes',price:890,orig:1100,badge:'new',rating:4.7,desc:'Set of professional synthetic brushes for flawless makeup application.'},
  {id:20,emoji:'🌞',img:'images/product images/20.jpg',name:'Mineral SPF 50',brand:'SunGuard',cat:'sunscreen',subcat:'sunscreen',price:720,orig:900,badge:'best',rating:4.5,desc:'Broad-spectrum mineral sunscreen with no white cast, ideal under makeup.'},
  {id:21,emoji:'💇',img:'images/product images/21.avif',name:'Thermal Protect Spray',brand:'HeatShield',cat:'haircare',subcat:'styling',price:560,orig:null,badge:null,rating:4.1,desc:'Lightweight heat protectant spray that shields hair up to 230°C.'},
  {id:22,emoji:'🌿',img:'images/product images/22.jpg',name:'Nourish Hair Elixir',brand:'Mane Story',cat:'haircare',subcat:'treatment',price:1190,orig:1400,badge:'sale',rating:4.6,desc:'Argan and jojoba oil blend to repair, smooth and add shine.'},
  {id:23,emoji:'🔧',img:'images/product images/23.avif',name:'Ceramic Straightener',brand:'SleekPro',cat:'haircare',subcat:'hair tools',price:2590,orig:3490,badge:'new',rating:4.3,desc:'Digital ceramic straightener with adjustable heat settings and auto shutoff.'},
  {id:24,emoji:'🎨',img:'images/product images/24.avif',name:'Eyeshadow Palette',brand:'Lumière Couture',cat:'makeup',subcat:'eye makeup',price:1550,orig:1990,badge:'best',rating:4.8,desc:'12-shade neutral palette with mattes and shimmers, highly pigmented.'},
  {id:25,emoji:'🧼',img:'images/product images/25.avif',name:'Exfoliating Body Scrub',brand:'GlowLab',cat:'skincare',subcat:'bodycare',price:650,orig:null,badge:null,rating:4.4,desc:'Sugar-based scrub that buffs away dead skin for smooth, glowing results.'},
  {id:26,emoji:'🧴',img:'images/product images/26.avif',name:'Hydrating Facial Moisturizer',brand:'Mild By Nature',cat:'skincare',subcat:'moisturizers',price:785,orig:null,badge:'new',rating:4.6,desc:'Unscented, lightweight daily moisturizer with Squalane, Avocado, Jojoba, and Kukui Nut Oil for soft, healthier-looking skin.'},
  {id:27,emoji:'🧴',img:'images/product images/27.avif',name:'Night Repair Cream',brand:'LunaCare',cat:'skincare',subcat:'moisturizers',price:850,orig:null,badge:'new',rating:4.5,desc:'Overnight repair'},
  {id:28,emoji:'🧴',img:'images/product images/28.webp',name:'Oil-Free Moisturizer',brand:'PureSkin',cat:'skincare',subcat:'moisturizers',price:550,orig:null,badge:null,rating:4.1,desc:'For oily skin'},
  {id:29,emoji:'🧴',img:'images/product images/29.avif',name:'Anti-Aging Cream',brand:'YouthGlow',cat:'skincare',subcat:'moisturizers',price:1200,orig:1500,badge:'best',rating:4.7,desc:'Reduces wrinkles'},
  {id:30,emoji:'💧',img:'images/product images/30.webp',name:'Charcoal Mask',brand:'CleanFace',cat:'skincare',subcat:'masks',price:450,orig:null,badge:null,rating:4.2,desc:'Deep cleansing'},
  {id:31,emoji:'💧',img:'images/product images/31.avif',name:'Hydrating Mask',brand:'AquaDerm',cat:'skincare',subcat:'masks',price:500,orig:600,badge:'sale',rating:4.4,desc:'Intense hydration'},
  {id:32,emoji:'💧',img:'images/product images/32.avif',name:'Brightening Mask',brand:'LumiMask',cat:'skincare',subcat:'masks',price:600,orig:null,badge:'new',rating:4.3,desc:'Even skin tone'},
  {id:33,emoji:'💧',img:'images/product images/33.webp',name:'Acne Treatment Mask',brand:'ClearSkin',cat:'skincare',subcat:'masks',price:550,orig:null,badge:null,rating:4.0,desc:'Fights acne'},
  {id:34,emoji:'💧',img:'images/product images/34.webp',name:'Collagen Mask',brand:'FirmFace',cat:'skincare',subcat:'masks',price:700,orig:900,badge:'best',rating:4.6,desc:'Boosts collagen'},
  {id:35,emoji:'💧',img:'images/product images/35.webp',name:'Calming Toner',brand:'SootheSkin',cat:'skincare',subcat:'toners',price:400,orig:null,badge:null,rating:4.1,desc:'Soothes irritation'},
  {id:36,emoji:'💧',img:'images/product images/36.jpg',name:'Pore Minimizing Toner',brand:'TightPore',cat:'skincare',subcat:'toners',price:450,orig:550,badge:'sale',rating:4.2,desc:'Tightens pores'},
  {id:37,emoji:'💧',img:'images/product images/37.avif',name:'Vitamin C Toner',brand:'BrightTone',cat:'skincare',subcat:'toners',price:500,orig:null,badge:'new',rating:4.4,desc:'Brightens skin'},
  {id:38,emoji:'💧',img:'images/product images/38.avif',name:'Hydrating Toner',brand:'MoistTone',cat:'skincare',subcat:'toners',price:380,orig:null,badge:null,rating:4.0,desc:'Adds moisture'},
  {id:39,emoji:'💧',img:'images/product images/39.avif',name:'Exfoliating Toner',brand:'SmoothSkin',cat:'skincare',subcat:'toners',price:420,orig:500,badge:'best',rating:4.3,desc:'Gentle exfoliation'},
  {id:40,emoji:'💧',img:'images/product images/40.avif',name:'Balancing Toner',brand:'pHBalance',cat:'skincare',subcat:'toners',price:360,orig:null,badge:null,rating:4.1,desc:'Balances pH'},
  {id:41,emoji:'🧴',img:'images/product images/41.webp',name:'Body Lotion',brand:'SoftBody',cat:'skincare',subcat:'bodycare',price:450,orig:550,badge:'sale',rating:4.2,desc:'Softens skin'},
  {id:42,emoji:'🧴',img:'images/product images/42.avif',name:'Body Oil',brand:'SilkOil',cat:'skincare',subcat:'bodycare',price:600,orig:null,badge:'new',rating:4.4,desc:'Nourishes deeply'},
  {id:43,emoji:'🧴',img:'images/product images/43.avif',name:'Body Scrub',brand:'Exfoliate',cat:'skincare',subcat:'bodycare',price:500,orig:null,badge:null,rating:4.0,desc:'Removes dead skin'},
  {id:44,emoji:'🧴',img:'images/product images/44.avif',name:'Body Butter',brand:'RichButter',cat:'skincare',subcat:'bodycare',price:700,orig:850,badge:'best',rating:4.5,desc:'Intense moisture'},
  {id:45,emoji:'🧴',img:'images/product images/45.jpeg',name:'Body Mist',brand:'FreshMist',cat:'skincare',subcat:'bodycare',price:350,orig:null,badge:null,rating:4.1,desc:'Refreshing spray'},
  {id:46,emoji:'💅',img:'images/product images/46.avif',name:'Nail Polish Remover',brand:'CleanNails',cat:'makeup',subcat:'nailcare',price:150,orig:null,badge:null,rating:4.0,desc:'Safe remover'},
  {id:47,emoji:'💅',img:'images/product images/47.webp',name:'Base Coat',brand:'StrongBase',cat:'makeup',subcat:'nailcare',price:200,orig:null,badge:null,rating:4.1,desc:'Protects nails'},
  {id:48,emoji:'💅',img:'images/product images/48.webp',name:'Top Coat',brand:'ShineTop',cat:'makeup',subcat:'nailcare',price:250,orig:300,badge:'sale',rating:4.3,desc:'Adds shine'},
  {id:49,emoji:'💅',img:'images/product images/49.webp',name:'Cuticle Oil',brand:'NourishCut',cat:'makeup',subcat:'nailcare',price:180,orig:null,badge:'new',rating:4.2,desc:'Softens cuticles'},
  {id:50,emoji:'💅',img:'images/product images/50.jpg',name:'Nail Strengthener',brand:'HardNails',cat:'makeup',subcat:'nailcare',price:300,orig:null,badge:null,rating:4.4,desc:'Strengthens nails'},
  {id:51,emoji:'💅',img:'images/product images/51.jpeg',name:'Color Polish',brand:'VividColor',cat:'makeup',subcat:'nailcare',price:220,orig:null,badge:'best',rating:4.5,desc:'Vibrant colors'},
  {id:52,emoji:'🖌️',img:'images/product images/52.jpg',name:'Foundation Brush',brand:'BlendPro',cat:'makeup',subcat:'brushes',price:400,orig:500,badge:'sale',rating:4.3,desc:'Smooth application'},
  {id:53,emoji:'🖌️',img:'images/product images/53.jpg',name:'Eyeshadow Brush',brand:'ShadowBlend',cat:'makeup',subcat:'brushes',price:250,orig:null,badge:null,rating:4.1,desc:'Blends shadows'},
  {id:54,emoji:'🖌️',img:'images/product images/54.webp',name:'Lip Brush',brand:'LipPerfect',cat:'makeup',subcat:'brushes',price:150,orig:null,badge:'new',rating:4.0,desc:'Precise lips'},
  {id:55,emoji:'🖌️',img:'images/product images/55.jpeg',name:'Blush Brush',brand:'CheekGlow',cat:'makeup',subcat:'brushes',price:300,orig:null,badge:null,rating:4.2,desc:'Applies blush'},
  {id:56,emoji:'🖌️',img:'images/product images/56.avif',name:'Powder Brush',brand:'SoftPowder',cat:'makeup',subcat:'brushes',price:350,orig:450,badge:'best',rating:4.4,desc:'Sets powder'},
  {id:57,emoji:'🖌️',img:'images/product images/57.avif',name:'Brush Set',brand:'AllInOne',cat:'makeup',subcat:'brushes',price:800,orig:1000,badge:'sale',rating:4.6,desc:'Complete set'},
  {id:58,emoji:'👁️',img:'images/product images/58.webp',name:'Mascara',brand:'LongLash',cat:'makeup',subcat:'eye makeup',price:350,orig:450,badge:'sale',rating:4.4,desc:'Lengthens lashes'},
  {id:59,emoji:'👁️',img:'images/product images/59.jpeg',name:'Eyeliner',brand:'SharpLine',cat:'makeup',subcat:'eye makeup',price:250,orig:null,badge:'new',rating:4.2,desc:'Defines eyes'},
  {id:60,emoji:'👁️',img:'images/product images/60.webp',name:'Eyeshadow',brand:'ColorEye',cat:'makeup',subcat:'eye makeup',price:400,orig:null,badge:null,rating:4.3,desc:'Colorful shadows'},
  {id:61,emoji:'👁️',img:'images/product images/61.webp',name:'Brow Pencil',brand:'BrowShape',cat:'makeup',subcat:'eye makeup',price:200,orig:null,badge:null,rating:4.1,desc:'Shapes brows'},
  {id:62,emoji:'👁️',img:'images/product images/62.webp',name:'Eye Primer',brand:'StayPut',cat:'makeup',subcat:'eye makeup',price:300,orig:400,badge:'best',rating:4.5,desc:'Holds makeup'},
  {id:63,emoji:'✂️',img:'images/product images/63.avif',name:'Hair Spray',brand:'HoldStyle',cat:'haircare',subcat:'styling',price:250,orig:300,badge:'sale',rating:4.2,desc:'Holds style'},
  {id:64,emoji:'✂️',img:'images/product images/64.avif',name:'Hair Gel',brand:'StrongGel',cat:'haircare',subcat:'styling',price:200,orig:null,badge:null,rating:4.0,desc:'Strong hold'},
  {id:65,emoji:'✂️',img:'images/product images/65.jpeg',name:'Hair Wax',brand:'Texturize',cat:'haircare',subcat:'styling',price:300,orig:null,badge:'new',rating:4.3,desc:'Adds texture'},
  {id:66,emoji:'✂️',img:'images/product images/66.avif',name:'Hair Mousse',brand:'VolumeUp',cat:'haircare',subcat:'styling',price:280,orig:null,badge:null,rating:4.1,desc:'Adds volume'},
  {id:67,emoji:'✂️',img:'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/rna/rna00634/l/17.jpg',name:'Hair Pomade',brand:'ShinePom',cat:'haircare',subcat:'styling',price:350,orig:450,badge:'best',rating:4.4,desc:'Shiny finish'},
  {id:68,emoji:'✂️',img:'images/product images/68.jpg',name:'Hair Clay',brand:'MatteClay',cat:'haircare',subcat:'styling',price:320,orig:null,badge:null,rating:4.2,desc:'Matte look'},
  {id:69,emoji:'🌿',img:'images/product images/69.avif',name:'Hair Mask',brand:'DeepTreat',cat:'haircare',subcat:'treatment',price:600,orig:750,badge:'sale',rating:4.5,desc:'Deep conditioning'},
  {id:70,emoji:'🌿',img:'images/product images/70.jpg',name:'Hair Serum',brand:'SmoothSerum',cat:'haircare',subcat:'treatment',price:450,orig:null,badge:'new',rating:4.3,desc:'Smooths hair'},
  {id:71,emoji:'🌿',img:'images/product images/71.avif',name:'Hair Oil',brand:'NourishOil',cat:'haircare',subcat:'treatment',price:500,orig:null,badge:null,rating:4.2,desc:'Nourishes scalp'},
  {id:72,emoji:'🌿',img:'images/product images/72.avif',name:'Hair Repair Cream',brand:'FixHair',cat:'haircare',subcat:'treatment',price:550,orig:700,badge:'best',rating:4.6,desc:'Repairs damage'},
  {id:73,emoji:'🌿',img:'images/product images/73.avif',name:'Scalp Treatment',brand:'CleanScalp',cat:'haircare',subcat:'treatment',price:400,orig:null,badge:null,rating:4.1,desc:'Treats scalp'},
  {id:74,emoji:'🌿',img:'images/product images/74.webp',name:'Hair Growth Serum',brand:'GrowHair',cat:'haircare',subcat:'treatment',price:650,orig:null,badge:null,rating:4.4,desc:'Promotes growth'},
  {id:75,emoji:'🔧',img:'images/product images/75.jpg',name:'Hair Dryer',brand:'QuickDry',cat:'haircare',subcat:'hair tools',price:1500,orig:2000,badge:'sale',rating:4.3,desc:'Fast drying'},
  {id:76,emoji:'🔧',img:'images/product images/76.avif',name:'Curling Iron',brand:'CurlPro',cat:'haircare',subcat:'hair tools',price:800,orig:null,badge:'new',rating:4.2,desc:'Perfect curls'},
  {id:77,emoji:'🔧',img:'images/product images/77.jpg',name:'Straightener',brand:'StraightHair',cat:'haircare',subcat:'hair tools',price:1200,orig:1500,badge:'best',rating:4.5,desc:'Smooth hair'},
  {id:78,emoji:'🔧',img:'images/product images/78.avif',name:'Hair Brush',brand:'BrushWell',cat:'haircare',subcat:'hair tools',price:250,orig:null,badge:null,rating:4.0,desc:'Detangles hair'},
  {id:79,emoji:'🔧',img:'images/product images/79.webp',name:'Diffuser',brand:'WaveDiff',cat:'haircare',subcat:'hair tools',price:300,orig:null,badge:null,rating:4.1,desc:'For waves'},
  {id:80,emoji:'🔧',img:'images/product images/80.webp',name:'Hair Clips',brand:'HoldClip',cat:'haircare',subcat:'hair tools',price:100,orig:null,badge:null,rating:4.0,desc:'Holds sections'},
  {id:81,emoji:'🌞',img:'images/product images/81.jpeg',name:'SPF 30 Lotion',brand:'SunSafe',cat:'sunscreen',subcat:'sunscreen',price:400,orig:500,badge:'sale',rating:4.2,desc:'Daily protection'},
  {id:82,emoji:'🌞',img:'images/product images/82.jpeg',name:'SPF 50 Spray',brand:'SpraySun',cat:'sunscreen',subcat:'sunscreen',price:450,orig:null,badge:'new',rating:4.3,desc:'Easy application'},
  {id:83,emoji:'🌞',img:'images/product images/83.jpeg',name:'SPF 40 Stick',brand:'StickSun',cat:'sunscreen',subcat:'sunscreen',price:350,orig:null,badge:null,rating:4.1,desc:'For face'},
];

const services = [
  // Hair
  {emoji:'✂️', name:'Haircut & Styling', cat:'hair', price:'from ₱350', desc:'Any length · 45–60 min', refUrl: 'images/service images/hair.jpg'},
  {emoji:'✂️', name:'Hair Coloring', cat:'hair', price:'from ₱1,200', desc:'Single color or highlights · 90–120 min', refUrl: 'images/service images/hair.jpg'},
  {emoji:'✂️', name:'Keratin Treatment', cat:'hair', price:'from ₱2,500', desc:'Smoothing & frizz control · 120–180 min', refUrl: 'images/service images/hair.jpg'},
  {emoji:'✂️', name:'Hair Spa', cat:'hair', price:'from ₱800', desc:'Deep conditioning · 60 min', refUrl: 'images/service images/hair.jpg'},
  {emoji:'✂️', name:'Scalp Treatment', cat:'hair', price:'from ₱650', desc:'Hydrating & dandruff control · 45 min', refUrl: 'images/service images/hair.jpg'},
  
  // Facial
  {emoji:'🌸', name:'Classic Deep Cleanse', cat:'facial', price:'from ₱600', desc:'All skin types · 60 min', refUrl: 'images/service images/facial.jpeg'},
  {emoji:'🌸', name:'Brightening Vitamin C', cat:'facial', price:'from ₱950', desc:'Dull & uneven skin · 75 min', refUrl: 'images/service images/facial.jpeg'},
  {emoji:'🌸', name:'Anti-Aging Collagen', cat:'facial', price:'from ₱1,400', desc:'Mature skin · 90 min', refUrl: 'images/service images/facial.jpeg'},
  {emoji:'🌸', name:'Hydration Boost', cat:'facial', price:'from ₱800', desc:'Dry & sensitive skin · 60 min', refUrl: 'images/service images/facial.jpeg'},
  {emoji:'🌸', name:'Acne Control', cat:'facial', price:'from ₱750', desc:'Oily & acne-prone · 75 min', refUrl: 'images/service images/facial.jpeg'},
  
  // Nails
  {emoji:'💅', name:'Classic Manicure', cat:'nails', price:'from ₱250', desc:'Shape, buff & polish · 30 min', refUrl: 'images/service images/nails.jpg'},
  {emoji:'💅', name:'Gel Manicure', cat:'nails', price:'from ₱550', desc:'Long-lasting gel · 45 min', refUrl: 'images/service images/nails.jpg'},
  {emoji:'💅', name:'Pedicure & Foot Spa', cat:'nails', price:'from ₱400', desc:'Relaxing foot treatment · 60 min', refUrl: 'images/service images/nails.jpg'},
  {emoji:'💅', name:'Nail Art Design', cat:'nails', price:'from ₱150', desc:'Custom designs · 20–30 min add-on', refUrl: 'images/service images/nails.jpg'},
  {emoji:'💅', name:'Nail Extensions', cat:'nails', price:'from ₱900', desc:'Acrylic or gel · 90 min', refUrl: 'images/service images/nails.jpg'},
  
  // Spa
  {emoji:'🧖', name:'Swedish Massage', cat:'spa', price:'from ₱1,200', desc:'Full body · 60–90 min', refUrl: 'images/service images/spa.jpg'},
  {emoji:'🧖', name:'Aromatherapy', cat:'spa', price:'from ₱1,500', desc:'Essential oils · 90 min', refUrl: 'images/service images/spa.jpg'},
  {emoji:'🧖', name:'Body Scrub & Wrap', cat:'spa', price:'from ₱1,800', desc:'Exfoliate & nourish · 75 min', refUrl: 'images/service images/spa.jpg'},
  {emoji:'🧖', name:'Hot Stone Therapy', cat:'spa', price:'from ₱1,600', desc:'Deep muscle relief · 90 min', refUrl: 'images/service images/spa.jpg'}
];

let cart=[], checkoutCart=[], isBuyNowCheckout=false, currentPdp=null, bkSelectedServices = [], sFilterType='all', coStep=1, searchTimeout=null;
let productFilters = {cat:'all', sub:null, minPrice:null, maxPrice:null, minRating:0};

/* ═══════════════ NAVIGATION ═══════════════ */
const navIds={home:'nl-home',products:'nl-products',services:'nl-services',booking:'nl-booking',account:'nl-account'};
function go(page) {
  const currentUser = getCurrentUser();
  
  // 1. Require login for secure pages
  if ((page === 'account' || page === 'checkout' || page === 'booking') && !currentUser) {
    if (page === 'account') {
      toast('Please sign in to access your account.', 'error');
    } else {
      toast('Please sign in to continue with your transaction.', 'error');
    }
    page = 'login'; 
  }
  
  // 2. Enforce complete profile before checkout
  if (page === 'checkout' && currentUser) {
     if (!currentUser.first || !currentUser.last || !currentUser.phone) {
         toast('Please add your phone number in your profile before checking out.', 'error');
         page = 'account';
         setTimeout(() => showTab('profile'), 100); 
     } else {
         // Explicitly trigger Step 1 so the auto-fill actually runs!
         setTimeout(() => { if(typeof coGoto === 'function') coGoto(1); }, 50);
     }
  }

  // 3. Prevent logged-in users from seeing the login/register screens
  if ((page === 'login' || page === 'register') && currentUser) {
      page = 'home'; 
  }

  // FIX 3: Force a total data refresh the exact moment you enter the Account page!
    if (page === 'account' && currentUser) {
        if (typeof updateAccountCounts === 'function') updateAccountCounts();
        if (typeof renderWishlist === 'function') renderWishlist();
        setMinBookingDate();
  }

  // ADD THIS NEW FIX: Force Cart to refresh when opened
  if (page === 'cart') {
      if (typeof renderCartPage === 'function') renderCartPage();
  }

  // 4. Actual Page Routing
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById('page-' + page);
  if (targetPage) {
     targetPage.classList.add('active');
  }
  
  // 5. NEW: Update the Main Nav Bar "Active" Line
  document.querySelectorAll('.nl').forEach(link => link.classList.remove('active'));
  const activeNav = document.getElementById('nl-' + page);
  if (activeNav) {
      activeNav.classList.add('active');
  }
  
  window.scrollTo(0,0);
}
function toggleMob(){document.getElementById('mob-menu').classList.toggle('open');document.getElementById('burger').classList.toggle('open')}
function closeMob(){document.getElementById('mob-menu').classList.remove('open');document.getElementById('burger').classList.remove('open')}
function navSearch(){const q=document.getElementById('nav-q').value.trim();if(q){document.getElementById('s-input').value=q;go('search');executeSearch()}}
function mobSearch(){const q=document.getElementById('mob-q').value.trim();if(q){document.getElementById('s-input').value=q;go('search');executeSearch()}}

/* ═══════════════ PRODUCT CARD ═══════════════ */
function pCard(p){
  const bdg = p.badge ? `<span class="pc-badge badge-${p.badge}">${p.badge}</span>` : '';
  const orig = p.orig ? `<span class="pc-orig">₱${p.orig}</span>` : '';
  const imgContent = p.img ? `<img src="${p.img}" alt="${p.name}">` : '';
  const rating = typeof p.rating === 'number' ? p.rating : 0;
  const rRounded = Math.round(rating);
  const stars = '★'.repeat(rRounded) + '☆'.repeat(5 - rRounded);
  const ratingHtml = `<div class="pc-stars">${stars}<span style="font-size:11px;color:var(--muted);margin-left:6px">${rating.toFixed(1)}</span></div>`;
  
  // Check if item is already in user's wishlist
  const user = getCurrentUser();
  const inWishlist = user && user.wishlist && user.wishlist.includes(p.id);
  const wishIcon = inWishlist ? '♥' : '♡';

  return `<div class="pc" onclick="openPdp(${p.id})">
    <div class="pc-img">${bdg}${imgContent}
      <div class="pc-actions">
        <button class="pca-cart" onclick="event.stopPropagation();quickAdd(${p.id})">Add to Cart</button>
        <button class="pca-wish" onclick="event.stopPropagation();toggleWishlist(${p.id})" title="Wishlist">${wishIcon}</button>
      </div>
    </div>
    <div class="pc-info">
      <div class="pc-cat">${p.subcat||p.cat}</div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-brand">${p.brand}</div>
      <div class="pc-price-row">${orig}<span class="pc-price">₱${p.price.toLocaleString()}</span></div>
      ${ratingHtml}
    </div>
  </div>`;
}
function updateCategoryCounts(){
  const counts = products.reduce((acc,p)=>{acc[p.cat]=(acc[p.cat]||0)+1;return acc},{})
    // Update sidebar counts (data-cat) and set minimum booking date
    setMinBookingDate();
  document.querySelectorAll('#cat-list .fo').forEach(el=>{
    const cat = el.getAttribute('data-cat');
    if(!cat || cat==='all'){ el.querySelector('.fo-cnt').textContent = products.length; }
    else { el.querySelector('.fo-cnt').textContent = (counts[cat]||0); }
  });
}

function renderProdGrid(id,cat){
  if(cat!==undefined) productFilters.cat = cat;
  const el=document.getElementById(id); if(!el) return;
  let list = products.slice();
  if(productFilters.cat && productFilters.cat!=='all') list = list.filter(p=>p.cat===productFilters.cat);
  if(productFilters.sub) list = list.filter(p=>p.subcat===productFilters.sub);
  if(productFilters.minPrice!=null){
    list = list.filter(p=> p.price >= (productFilters.minPrice||0) && (productFilters.maxPrice===Infinity? true : p.price <= productFilters.maxPrice));
  }
  if(productFilters.minRating) list = list.filter(p=> (p.rating||0) >= productFilters.minRating);
  el.innerHTML = list.map(pCard).join('');
  updateCategoryCounts();
  const cnt=document.getElementById('prod-count');
  if(cnt) cnt.textContent = `Showing ${list.length} product${list.length!==1?'s':''}`;
}

/* ═══════════════ PRODUCT DETAIL ═══════════════ */
function openPdp(id){
  const p=products.find(x=>x.id===id);if(!p)return;
  currentPdp=p;
  document.getElementById('pdp-bc-name').textContent=p.name;
  document.getElementById('pdp-cat').textContent=p.subcat||p.cat;
  document.getElementById('pdp-name').textContent=p.name;
  document.getElementById('pdp-brand').textContent='By '+p.brand;
  document.getElementById('pdp-price').textContent='₱'+p.price.toLocaleString();
  document.getElementById('pdp-desc').textContent=p.desc;
  document.getElementById('pdp-desc-full').textContent=p.desc;
  const mainImgEl=document.getElementById('pdp-main-img');if(p.img){mainImgEl.innerHTML='<img src="'+p.img+'" alt="'+p.name+'" style="width:100%;height:100%;object-fit:cover;" onerror="this.parentElement.textContent=p.emoji">'}else{mainImgEl.textContent=p.emoji};
  document.getElementById('pdp-qty').value=1;
  const og=document.getElementById('pdp-orig');
  if(p.orig){og.textContent='₱'+p.orig;og.classList.remove('hide')}else og.classList.add('hide');
  document.getElementById('pdp-related').innerHTML=products.filter(x=>x.id!==id&&x.cat===p.cat).slice(0,4).map(pCard).join('');
  
  // NEW: Instantly check if this product is in our wishlist when opening the page
  const user = getCurrentUser();
  const wishBtn = document.querySelector('.pdp-btns .btn-ghost');
  if (wishBtn) {
     const isWished = user && user.wishlist && user.wishlist.includes(p.id);
     wishBtn.innerHTML = isWished ? '♥ Saved to Wishlist' : '♡ Save to Wishlist';
     wishBtn.onclick = function() { toggleWishlist(p.id); };
  }
  
  go('pdp');
}
function setThumb(el,e){document.querySelectorAll('.pdp-thumb').forEach(t=>t.classList.remove('active'));el.classList.add('active');document.getElementById('pdp-main-img').textContent=e}
function adjQty(d){const i=document.getElementById('pdp-qty');i.value=Math.max(1,Math.min(99,+i.value+d))}
function pdpAddCart() {
  if (!currentPdp) return;
  const qty = +document.getElementById('pdp-qty').value;
  
  const ex = cart.find(i => i.id === currentPdp.id);
  if (ex) ex.qty += qty;
  else cart.push({ ...currentPdp, qty });
  
  updateBadge();
  renderCartPage(); // <--- This forces the main page to update immediately
  toast(`${currentPdp.name} added to cart!`, 'info'); 
  
  const b = document.getElementById('pdp-atc');
  b.textContent = '✓ Added!';
  setTimeout(() => b.textContent = 'Add to Cart', 1400);
}

function pdpBuyNow() {
  if (!currentPdp) return;
  const qty = +document.getElementById('pdp-qty').value;
  
  // 1. Isolate this specific item for checkout (Do NOT add to main cart)
  checkoutCart = [{ ...currentPdp, qty }];
  isBuyNowCheckout = true;
  
  go('checkout');
}
// NEW: Function for regular cart checkouts
function standardCheckout() {
  if (cart.length === 0) {
    toast('Your cart is empty!', 'error');
    return;
  }
  // 2. Copy all items from the main cart into the checkout cart
  checkoutCart = cart.map(i => ({ ...i }));
  isBuyNowCheckout = false;

  go('checkout');
}
function toggleAcc(hdr){hdr.closest('.acc-item').classList.toggle('open')}

/* ═══════════════ CATEGORY / FILTER ═══════════════ */
function catFilter(cat, el){
  productFilters.cat = cat;
  // clear any active subcategory when switching top-level category
  productFilters.sub = null;
  // clear tabs and category sidebar active
  document.querySelectorAll('.ct').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('#cat-list .fo').forEach(f=>f.classList.remove('active'));
  if(el && el.classList.contains('ct')) el.classList.add('active');
  else if(el && el.classList.contains('fo')) el.classList.add('active');
  else { document.querySelector(`.ct[data-cat="${cat}"]`)?.classList.add('active'); document.querySelector(`#cat-list .fo[data-cat="${cat}"]`)?.classList.add('active'); }
  renderProdGrid('prod-grid',cat);
}

function subCatFilter(subcat, el){
  // subcat may be 'all' to clear subcategory filter
  productFilters.sub = (subcat==='all' ? null : subcat);
  // when using subcat tabs, clear main category selection so subcat shows across cats
  productFilters.cat = 'all';
  // update active states on tabs
  document.querySelectorAll('.ct').forEach(t=>t.classList.remove('active'));
  if(el && el.classList && el.classList.contains('ct')){
    el.classList.add('active');
  } else {
    // try to find matching tab and mark active
    document.querySelector(`.ct[data-subcat="${subcat}"]`)?.classList.add('active');
  }
  // render results
  renderProdGrid('prod-grid','all');
}

function toggleMoreMenu(trigger){
  const menu = document.getElementById('more-menu');
  if(!menu) return;
  if(menu.style.display === 'block'){
    menu.style.display = 'none';
    return;
  }
  // position near trigger if provided
  if(trigger && trigger.getBoundingClientRect){
    const rect = trigger.getBoundingClientRect();
    menu.style.top = (rect.bottom + window.scrollY) + 'px';
    menu.style.left = (rect.left + window.scrollX) + 'px';
  }
  menu.style.display = 'block';
}

function priceFilter(range, el){
  document.querySelectorAll('#price-list .fo').forEach(f=>f.classList.remove('active'));
  if(range==='lt500'){ productFilters.minPrice=0; productFilters.maxPrice=499; }
  else if(range==='500-1000'){ productFilters.minPrice=500; productFilters.maxPrice=1000; }
  else if(range==='1000-2000'){ productFilters.minPrice=1000; productFilters.maxPrice=2000; }
  else if(range==='2000+'){ productFilters.minPrice=2000; productFilters.maxPrice=Infinity; }
  if(el) el.classList.add('active');
  renderProdGrid('prod-grid', productFilters.cat);
}

function ratingFilter(min, el){
  document.querySelectorAll('#rating-list .fo').forEach(f=>f.classList.remove('active'));
  productFilters.minRating = min;
  if(el) el.classList.add('active');
  renderProdGrid('prod-grid', productFilters.cat);
}

function clearFilters(){
  productFilters = {cat:'all', sub:null, minPrice:null, maxPrice:null, minRating:0};
  document.querySelectorAll('.filter-panel .fo').forEach(e=>e.classList.remove('active'));
  document.querySelector('#cat-list .fo[data-cat="all"]')?.classList.add('active');
  document.getElementById('min-price').value = '';
  document.getElementById('max-price').value = '';
  document.getElementById('min-rating').value = '';
  updateCategoryCounts();
  renderProdGrid('prod-grid','all');
  toast('Filters cleared','info');
}

/* ═══════════════ SEARCH ═══════════════ */
function executeSearch(){
  const q=(document.getElementById('s-input').value||'').toLowerCase().trim();
  const sortSelect=document.getElementById('s-sort');
  const sort=sortSelect ? sortSelect.value : 'default';
  
  // Added safety fallbacks (|| '') so it won't crash if a product is missing a property
  let prods=products.filter(p=>
    (p.name||'').toLowerCase().includes(q) ||
    (p.cat||'').toLowerCase().includes(q) ||
    (p.brand||'').toLowerCase().includes(q) ||
    (p.subcat||'').toLowerCase().includes(q)
  );
  let svcs=services.filter(s=>
    (s.name||'').toLowerCase().includes(q) ||
    (s.cat||'').toLowerCase().includes(q) ||
    (s.desc||'').toLowerCase().includes(q)
  );
  
  if(sFilterType==='products') svcs=[];
  if(sFilterType==='services') prods=[];
  
  if(sort==='price-asc') prods.sort((a,b)=>a.price-b.price);
  if(sort==='price-desc') prods.sort((a,b)=>b.price-a.price);
  if(sort==='name') prods.sort((a,b)=>a.name.localeCompare(b.name));
  
  const total=prods.length+svcs.length;
  const countEl=document.getElementById('s-count');
  if(countEl) countEl.textContent=q ? `${total} result${total!==1?'s':''}` : `${total} item${total!==1?'s':''}`;
  
  const prodWrap=document.getElementById('sr-products');
  if(prodWrap) prodWrap.innerHTML=prods.map(pCard).join('');
  
  const prodLabel=document.getElementById('sr-prod-label');
  if(prodLabel) prodLabel.classList.toggle('hide', prods.length===0); // Only hide if exactly 0 products
  
  const svcWrap=document.getElementById('sr-services');
  if(svcWrap) svcWrap.innerHTML=svcs.map(s=>
    `<div class="s-service-result" onclick="go('services');showPanel('${s.cat}')">
      <div class="ssr-icon">${s.emoji}</div>
      <div>
        <div class="ssr-name">${s.name}</div>
        <div class="ssr-meta">${s.desc}</div>
        <div class="ssr-tag">Service · ${s.cat}</div>
      </div>
      <div class="ssr-price">${s.price}</div>
    </div>`
  ).join('');
  
  const svcLabel=document.getElementById('sr-svc-label');
  if(svcLabel) svcLabel.classList.toggle('hide', svcs.length===0); // Only hide if exactly 0 services
  
  const emptyState=document.getElementById('s-empty');
  if(emptyState) emptyState.classList.toggle('hide', total>0);
}

function doSearch(){
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    executeSearch();
  }, 300);
}

function qs(term){
  document.getElementById('s-input').value=term;
  doSearch();
}

function clearSearch(){
  // Properly reset the search view instead of blanking out the HTML
  document.getElementById('s-input').value='';
  sFilterType='all';
  document.querySelectorAll('.f-chip').forEach(c=>c.classList.remove('active'));
  const firstChip = document.querySelector('.f-chip');
  if(firstChip) firstChip.classList.add('active'); 
  const sortSelect = document.getElementById('s-sort');
  if(sortSelect) sortSelect.value='default';
  
  doSearch(); 
}

function sFilter(type,btn){
  sFilterType=type;
  document.querySelectorAll('.f-chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  doSearch();
}
/* ═══════════════ SERVICES ═══════════════ */
function showPanel(id) {
  // 1. Clear cart to prevent stacking across categories
  if (typeof bkSelectedServices !== 'undefined') {
      bkSelectedServices = [];
      if (typeof updateBkTotal === 'function') updateBkTotal();
  }
  
  // 2. Remove highlights from all service rows
  document.querySelectorAll('.svc-mi').forEach(el => {
      el.classList.remove('selected');
      el.style.background = 'transparent';
      el.style.borderLeft = 'none';
      el.style.paddingLeft = '0';
  });
  
  // 3. Standard tab switching
  document.querySelectorAll('.svc-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.stab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-'+id)?.classList.add('active');
  document.getElementById('st-'+id)?.classList.add('active');
}

/* ═══════════════ CART — SIDE PANEL ═══════════════ */
function addToCart(p){const ex=cart.find(i=>i.id===p.id);if(ex)ex.qty++;else cart.push({...p,qty:1});updateBadge();renderCartPage();toast(`${p.name} added to cart!`,'info')}
function quickAdd(id){const p=products.find(x=>x.id===id);if(p)addToCart(p)}
function updateBadge(){const n=cart.reduce((s,i)=>s+i.qty,0);const b=document.getElementById('cart-badge');b.textContent=n;b.classList.add('pop');setTimeout(()=>b.classList.remove('pop'),400)}
function toggleCart(){document.getElementById('cart-panel').classList.toggle('open');document.getElementById('cart-overlay').classList.toggle('open');renderCartPanel()}

function renderCartPanel(){
  const body=document.getElementById('cart-panel-body');
  const ft=document.getElementById('cart-panel-ft');
  const hc=document.getElementById('cart-hd-count');
  const total=cart.reduce((s,i)=>s+i.qty,0);
  hc.textContent=total+' item'+(total!==1?'s':'');
  
  if(!cart.length){body.innerHTML=`<div class="cart-empty-state"><div class="ces-icon">🛍</div><div class="ces-title">Cart is empty</div><div class="ces-sub">Add something beautiful.</div><button class="btn btn-primary" onclick="toggleCart();go('products')">Shop Now</button></div>`;ft.style.display='none';return}
  
  ft.style.display='block';
  body.innerHTML=cart.map(i=>`<div class="ci">
    <div class="ci-img" style="overflow:hidden;"><img src="${i.img}" alt="${i.name}" style="width:100%;height:100%;object-fit:cover;"></div>
    <div class="ci-info">
      <div class="ci-name">${i.name}</div>
      <div class="ci-brand">${i.brand}</div>
      <div class="ci-row">
        <div class="ci-qty-ctrl">
          <button class="cqb" onclick="chQty(${i.id},-1)">−</button>
          <div class="cqn">${i.qty}</div>
          <button class="cqb" onclick="chQty(${i.id},1)">+</button>
        </div>
        <div class="ci-price">₱${(i.price*i.qty).toLocaleString()}</div>
      </div>
      <button class="ci-rm" onclick="rmCart(${i.id})">Remove</button>
    </div>
  </div>`).join('');
  
  const sub=cart.reduce((s,i)=>s+(i.price*i.qty),0);
  const ship=sub>=1500?0:150;
  document.getElementById('cp-sub2').textContent='₱'+sub.toLocaleString();
  document.getElementById('cp-ship2').textContent=ship===0?'Free':'₱150';
  document.getElementById('cp-total2').textContent='₱'+(sub+ship).toLocaleString();
}

function chQty(id,d){const it=cart.find(i=>i.id===id);if(it){it.qty+=d;if(it.qty<=0)cart=cart.filter(i=>i.id!==id)}updateBadge();renderCartPanel();renderCartPage();}
function rmCart(id){cart=cart.filter(i=>i.id!==id);updateBadge();renderCartPanel();renderCartPage();}

/* ═══════════════ CART PAGE (full page) ═══════════════ */
function renderCartPage(){
  const el=document.getElementById('cart-page-items');
  if(!cart.length){el.innerHTML=`<div style="text-align:center;padding:56px 20px;color:var(--muted)"><div style="font-size:40px;margin-bottom:12px">🛍</div><div style="font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:300;margin-bottom:8px">Your cart is empty</div><button class="btn btn-primary" onclick="go('products')" style="margin-top:8px">Start Shopping</button></div>`;document.getElementById('cp-sub').textContent='₱0';document.getElementById('cp-ship').textContent='₱150';document.getElementById('cp-total').textContent='₱150';return}
  
  el.innerHTML=cart.map(i=>`<div class="cpi-row">
    <div class="cpi-product">
      <div class="cpi-img" style="overflow:hidden;"><img src="${i.img}" alt="${i.name}" style="width:100%;height:100%;object-fit:cover;"></div>
      <div><div class="cpi-name">${i.name}</div><div class="cpi-brand">${i.brand}</div></div>
    </div>
    <div class="cpi-price">₱${i.price.toLocaleString()}</div>
    <div>
      <div class="cpi-qty2">
        <button class="cqb2" onclick="chQtyPage(${i.id},-1)">−</button>
        <div class="cqn2">${i.qty}</div>
        <button class="cqb2" onclick="chQtyPage(${i.id},1)">+</button>
      </div>
    </div>
    <div class="cpi-subtotal">₱${(i.price*i.qty).toLocaleString()}</div>
    <button class="cpi-rm" onclick="rmCartPage(${i.id})">✕</button>
  </div>`).join('');
  
  const sub=cart.reduce((s,i)=>s+(i.price*i.qty),0);const ship=sub>=1500?0:150;
  document.getElementById('cp-sub').textContent='₱'+sub.toLocaleString();
  document.getElementById('cp-ship').textContent=ship===0?'Free ✓':'₱150';
  document.getElementById('cp-total').textContent='₱'+(sub+ship).toLocaleString();
}

function chQtyPage(id,d){const it=cart.find(i=>i.id===id);if(it){it.qty+=d;if(it.qty<=0)cart=cart.filter(i=>i.id!==id)}updateBadge();renderCartPage();renderCartPanel();}
function rmCartPage(id){cart=cart.filter(i=>i.id!==id);updateBadge();renderCartPage();renderCartPanel();toast('Item removed','error')}

/* ═══════════════ CHECKOUT ═══════════════ */
// NEW: Calculates and draws the items on the final Review step
function renderReviewStep() {
  const list = document.getElementById('review-item-list');
  const subEl = document.getElementById('review-sub');
  const totEl = document.getElementById('review-total');

  if (!list || !subEl || !totEl) return;

  // Use checkoutCart instead of cart
  if (checkoutCart.length === 0) {
    list.innerHTML = '<div style="color: var(--muted); font-size: 14px;">No items to review</div>';
    subEl.textContent = '₱0';
    totEl.textContent = '₱150';
    return;
  }

  let subtotal = 0;
  let html = '';

  // Loop through checkoutCart to build the review list
  checkoutCart.forEach(item => {
    const itemTotal = (item.price || 0) * item.qty;
    subtotal += itemTotal;
    
    html += `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 16px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div>
            <div style="font-weight: 600; color: var(--ink); font-size: 16px;">${item.name}</div>
            <div style="color: var(--muted); font-size: 14px; margin-top: 4px;">Qty: ${item.qty}</div>
          </div>
        </div>
        <div style="font-weight: 600; color: var(--ink); font-size: 16px;">₱${itemTotal.toLocaleString()}</div>
      </div>
    `;
  });

  list.innerHTML = html;
  subEl.textContent = `₱${subtotal.toLocaleString()}`;
  totEl.textContent = `₱${(subtotal + 150).toLocaleString()}`;
}

// UPDATED: Triggers all the steps properly
// UPDATED: Triggers all steps and ALWAYS updates the right sidebar
// UPDATED: Now calls the correct "renderCheckoutSidebar" function
function coGoto(step) {
  coStep = step;
  
  [1, 2, 3, 4].forEach(s => {
    const stepEl = document.getElementById('co-step-' + s);
    if (stepEl) stepEl.classList.toggle('hide', s !== step);
    
    const cs = document.getElementById('cos-' + s);
    if (cs) {
      cs.classList.toggle('active', s === step);
      cs.classList.toggle('done', s < step);
    }
  });

  const user = getCurrentUser();

  // STEP 2: Enforce Address Rule & Render Choices
  if (step === 2) {
    if (!user.addresses || user.addresses.length === 0) {
        toast('Please add a shipping address before continuing.', 'error');
        go('account');
        setTimeout(() => showTab('addresses'), 100);
        return; // Stops them from going to step 2!
    }
    
    // If they DO have an address, draw the choices!
    if (typeof renderCheckoutAddresses === 'function') renderCheckoutAddresses();
  }

  // FIX: Calling the correct function name to update the Right Sidebar!
  if (typeof renderCheckoutSidebar === 'function') {
      renderCheckoutSidebar();
  }

  // STEP 1
  if (step === 1) {
    if (user) {
      const inputs = document.querySelectorAll('#co-step-1 .finput');
      if (inputs.length >= 4) {
        inputs[0].value = user.first || '';
        inputs[1].value = user.last || '';
        inputs[2].value = user.email || '';
        inputs[3].value = user.phone || '';
        inputs[2].readOnly = true;
        inputs[2].style.opacity = '0.6';
      }
    }
  }

  // STEP 3
  if (step === 3) {
    if (typeof renderCheckoutPayments === 'function') renderCheckoutPayments();
  }

  // STEP 4
  if (step === 4) {
    renderReviewStep();
  }
}
// NEW: Draws the saved addresses in Checkout Step 2
function renderCheckoutAddresses() {
  const user = getCurrentUser();
  const container = document.getElementById('co-step-2');
  if (!user || !container) return;

  let html = `<h2 style="font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 300; margin-bottom: 24px;">Shipping Address</h2>`;

  if (user.addresses && user.addresses.length > 0) {
    html += `<div style="display:flex; flex-direction:column; gap:12px; margin-bottom: 24px;">`;
    
    // Loop through the user's saved addresses
    user.addresses.forEach((a, i) => {
      // Auto-select the default address, or the first one if no default is set
      const isChecked = a.isDefault || (!user.addresses.some(addr => addr.isDefault) && i === 0);
      
      html += `
        <label class="pay-opt ${isChecked ? 'selected' : ''}" style="display:flex; align-items:flex-start; cursor:pointer;" onclick="selAddress(this)">
          <input type="radio" name="checkout_address" value="${a.id}" ${isChecked ? 'checked' : ''} style="margin-top: 4px; margin-right: 12px; accent-color: var(--ink);">
          <div style="flex: 1;">
            <div style="font-size: 14px; color: var(--ink); line-height: 1.6;">${a.text}</div>
            ${a.isDefault ? '<div style="font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); font-weight: 600; margin-top: 8px;">Default Address</div>' : ''}
          </div>
        </label>
      `;
    });
    
    html += `</div>`;
  }

  html += `
    <div class="co-step-btns">
      <button class="btn btn-ghost" onclick="coNext(1)">← Back</button>
      <button class="btn btn-primary btn-lg" onclick="coNext(3)">Continue to Payment →</button>
    </div>
  `;

  // This completely replaces the old HTML form!
  container.innerHTML = html;
}

// NEW: Helper to visually highlight the selected address
function selAddress(el) {
  document.querySelectorAll('#co-step-2 .pay-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector('input').checked = true;
}

function renderCheckoutPayments() {
  const user = getCurrentUser();
  const container = document.getElementById('co-step-3');
  if(!user || !container) return;

  // Split saved payments into categories
  const cards = (user.payments || []).filter(p => p.type === 'card' || (!p.type && !p.name.includes('GCash')));
  const gcash = (user.payments || []).filter(p => p.type === 'gcash' || (!p.type && p.name.includes('GCash')));

  let html = `<h2 style="font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 300; margin-bottom: 24px;">Payment Method</h2>`;

  // 1. Card Section
  html += `
    <label class="pay-opt" style="display:flex; cursor:pointer; align-items:center;" onclick="toggleCheckoutPay('card')">
       <input type="radio" name="pay_main" id="pay_main_card" style="margin-right:12px; accent-color: var(--ink);">
       <img src="images/atm-card.png" alt="Card" style="width: 24px; height: 24px; object-fit: contain; margin-right: 8px;"> 
       <span style="font-weight:600; color:var(--ink);">Credit / Debit Card</span>
    </label>
    <div id="co-cards-list" style="display:none; margin-left: 46px; margin-bottom: 24px; padding-top: 8px;">
  `;
  if (cards.length > 0) {
     html += cards.map((c, i) => `<label style="display:flex; cursor:pointer; margin-bottom:12px; align-items:center;"><input type="radio" name="pay_sub_card" ${i===0?'checked':''} style="margin-right:8px; accent-color: var(--ink);"><span style="font-size:14px; color:var(--ink);">${c.name}</span></label>`).join('');
  } else {
     html += `<div style="font-size:13px; color:var(--muted); font-style:italic;">No cards saved. Please add one in your account.</div>`;
  }
  html += `</div>`;

  // 2. GCash Section
  html += `
    <label class="pay-opt" style="display:flex; cursor:pointer; margin-top:12px; align-items:center;" onclick="toggleCheckoutPay('gcash')">
       <input type="radio" name="pay_main" id="pay_main_gcash" style="margin-right:12px; accent-color: var(--ink);">
       <img src="images/gcash.png" alt="GCash" style="width: 24px; height: 24px; object-fit: contain; margin-right: 8px;"> 
       <span style="font-weight:600; color:var(--ink);">GCash / Maya</span>
    </label>
    <div id="co-gcash-list" style="display:none; margin-left: 46px; margin-bottom: 24px; padding-top: 8px;">
  `;
  if (gcash.length > 0) {
     html += gcash.map((g, i) => `<label style="display:flex; cursor:pointer; margin-bottom:12px; align-items:center;"><input type="radio" name="pay_sub_gcash" ${i===0?'checked':''} style="margin-right:8px; accent-color: var(--ink);"><span style="font-size:14px; color:var(--ink);">${g.name}</span></label>`).join('');
  } else {
     html += `<div style="font-size:13px; color:var(--muted); font-style:italic;">No GCash accounts saved. Please add one in your account.</div>`;
  }
  html += `</div>`;

  // 3. Cash on Delivery (Default)
  html += `
    <label class="pay-opt selected" style="display:flex; cursor:pointer; margin-top:12px; align-items:center;" onclick="toggleCheckoutPay('cod')">
       <input type="radio" name="pay_main" id="pay_main_cod" checked style="margin-right:12px; accent-color: var(--ink);">
       <img src="images/cash-on-delivery.png" alt="COD" style="width: 24px; height: 24px; object-fit: contain; margin-right: 8px;"> 
       <span style="font-weight:600; color:var(--ink);">Cash on Delivery</span>
    </label>
  `;
  html += `
    <div class="co-step-btns" style="margin-top:32px;">
      <button class="btn btn-ghost" onclick="coNext(2)">← Back</button>
      <button class="btn btn-primary btn-lg" onclick="coNext(4)">Review Order →</button>
    </div>
  `;

  container.innerHTML = html;
}

// Function to handle the drop-down animations during checkout
function toggleCheckoutPay(type) {
   document.querySelectorAll('#co-step-3 .pay-opt').forEach(el => el.classList.remove('selected'));
   document.getElementById('pay_main_' + type).closest('.pay-opt').classList.add('selected');
   
   document.getElementById('pay_main_' + type).checked = true;
   document.getElementById('co-cards-list').style.display = (type === 'card') ? 'block' : 'none';
   document.getElementById('co-gcash-list').style.display = (type === 'gcash') ? 'block' : 'none';
}
function coNext(step){coGoto(step)}
// UPDATED: Cleaned up sidebar function
function renderCheckoutSidebar(){
  const el = document.getElementById('co-sidebar-items');
  if(!el) return;
  
  // Use checkoutCart instead of cart
  if(!checkoutCart.length){
      el.innerHTML='<p style="font-size:13px;color:var(--muted)">No items</p>';
      return;
  }
  
  el.innerHTML = checkoutCart.map(i => `
    <div class="os-item">
      <div class="os-img" style="overflow:hidden;">
        <img src="${i.img}" alt="${i.name}" style="width:100%;height:100%;object-fit:cover;">
      </div>
      <div>
        <div class="os-name">${i.name}</div>
        <div class="os-qty">×${i.qty}</div>
      </div>
      <div class="os-price">₱${(i.price * i.qty).toLocaleString()}</div>
    </div>
  `).join('');
  
  const sub = checkoutCart.reduce((s,i) => s + (i.price * i.qty), 0);
  const ship = sub >= 1500 ? 0 : 150;
  
  const subEl = document.getElementById('cos-sub');
  const totEl = document.getElementById('cos-total');
  
  if(subEl) subEl.textContent = '₱' + sub.toLocaleString();
  if(totEl) totEl.textContent = '₱' + (sub + ship).toLocaleString();
}
function selPay(el){document.querySelectorAll('.pay-opt').forEach(o=>o.classList.remove('selected'));el.classList.add('selected');el.querySelector('input').checked=true;document.getElementById('card-fields').style.display=el.textContent.includes('Card')?'block':'none'}
function placeOrder(){
  const user = getCurrentUser();
  if(!user) { 
    toast('Please sign in to place an order.', 'error'); 
    go('login'); 
    return; 
  }
  
  // Safely find the place order button and disable it
  const btn = document.getElementById('place-order-btn') || document.querySelector('button[onclick="placeOrder()"]');
  if(btn) {
      btn.textContent = 'Processing…';
      btn.disabled = true;
  }
  
  setTimeout(() => {
    // Use checkoutCart instead of cart
    const sub = checkoutCart.reduce((s, i) => s + (i.price * i.qty), 0);
    const ship = sub >= 1500 ? 0 : 150;
    
    const newOrder = {
       id: '#LUM-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
       date: new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'}),
       items: checkoutCart.map(i => `${i.name} (x${i.qty})`).join(', '),
       total: sub + ship,
       status: 'Processing' // <-- ADD THIS LINE
    };
    
    if(!user.orders) user.orders = [];
    user.orders.push(newOrder);
    saveUserData(user); 
    
    // Empty the checkout cart
    checkoutCart = []; 
    // ONLY empty the main shopping cart if we actually checked it out!
    if (!isBuyNowCheckout) {
        cart = []; 
    }
    
    updateBadge(); 
    if(btn) {
        btn.textContent = 'Place Order →'; 
        btn.disabled = false; 
    }
    
    toast('Order placed! Thank you 🎉', 'info');
    go('account');
    
    renderDynamicAccountData(user);
    setTimeout(() => showTab('orders'), 300);
  }, 1500);
}

/* ═══════════════ BOOKING ═══════════════ */

// bkSelectedServices (array) is declared globally and holds selected service objects

// 1. Prevent booking dates in the past
function setMinBookingDate() {
  const dateInput = document.getElementById('bk-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    if (dateInput.value && dateInput.value < today) dateInput.value = today;
  }
}

// 2. Render the specific services from the `services` data array
// A complete dictionary of your services to populate the tabs
const salonServicesMenu = {
  'hair': [
    {name: 'Haircut & Styling', price: 350, emoji: '✂️'},
    {name: 'Hair Coloring', price: 1200, emoji: '✂️'},
    {name: 'Keratin Treatment', price: 2500, emoji: '✂️'},
    {name: 'Hair Spa', price: 800, emoji: '✂️'},
    {name: 'Scalp Treatment', price: 650, emoji: '✂️'}
  ],
  'facial': [
    {name: 'Classic Deep Cleanse', price: 600, emoji: '🌸'},
    {name: 'Brightening Vitamin C', price: 950, emoji: '🌸'},
    {name: 'Anti-Aging Collagen', price: 1400, emoji: '🌸'},
    {name: 'Hydration Boost', price: 800, emoji: '🌸'},
    {name: 'Acne Control', price: 750, emoji: '🌸'}
  ],
  'nails': [
    {name: 'Classic Manicure', price: 250, emoji: '💅'},
    {name: 'Gel Manicure', price: 550, emoji: '💅'},
    {name: 'Pedicure & Foot Spa', price: 400, emoji: '💅'},
    {name: 'Nail Art Design', price: 150, emoji: '💅'},
    {name: 'Nail Extensions', price: 900, emoji: '💅'}
  ],
  'spa': [
    {name: 'Swedish Massage', price: 1200, emoji: '🧖'},
    {name: 'Aromatherapy', price: 1500, emoji: '🧖'},
    {name: 'Body Scrub & Wrap', price: 1800, emoji: '🧖'},
    {name: 'Hot Stone Therapy', price: 1600, emoji: '🧖'}
  ]
};

let currentBookingCategory = 'hair';

// 2. Toggle a service on or off
function toggleBkSvc(name, priceStr, icon, el) {
  const cleanName = name.replace(/^[^ ]+ /, ''); 
  const numPrice = parseInt(String(priceStr).replace(/[^0-9]/g, '')) || 0;
  
  const existingIndex = bkSelectedServices.findIndex(s => s.name === cleanName);
  
  if (existingIndex > -1) {
    bkSelectedServices.splice(existingIndex, 1); // Remove
    if(el) {
        el.classList.remove('selected');
        if(el.classList.contains('svc-mi')) {
            el.style.background = "transparent";
            el.style.borderLeft = "none";
            el.style.paddingLeft = "0";
        }
    }
  } else {
    bkSelectedServices.push({name: cleanName, price: numPrice, icon: icon}); // Add
    if(el) {
        el.classList.add('selected');
        if(el.classList.contains('svc-mi')) {
            el.style.background = "var(--pink-bg)";
            el.style.borderLeft = "3px solid var(--ink)";
            el.style.paddingLeft = "12px";
            el.style.transition = "all 0.2s ease";
        }
    }
  }
  
  updateBkTotal();
  // Re-render the grid if we are on the booking page
  if (document.getElementById('page-booking').classList.contains('active')) {
      renderBookingServicesByCategory(currentBookingCategory); 
  }
}

// 5. Render specific category in the Booking Grid
// 5. Render specific category in the Booking Grid
function renderBookingServicesByCategory(cat, el) {
  if (el) {
     // Swap active styling on tabs
     document.querySelectorAll('#bk-cat-tabs .stab').forEach(t => t.classList.remove('active'));
     el.classList.add('active');
  }
  
  currentBookingCategory = cat || 'hair';
  const grid = document.getElementById('bk-services-grid');
  if(!grid) return;
  
  const servicesToShow = salonServicesMenu[currentBookingCategory] || [];
  
  grid.innerHTML = servicesToShow.map(s => {
    // Check if the service is already in our cart array
    const isSelected = bkSelectedServices.some(item => item.name === s.name);
    return `
      <div class="svc-opt ${isSelected ? 'selected' : ''}" onclick="toggleBkSvc('${s.name}', '${s.price}', '${s.emoji}', this)">
        <div class="so-icon">${s.emoji}</div>
        <div class="so-name">${s.name}</div>
        <div class="so-price">₱${s.price.toLocaleString()}</div>
      </div>
    `;
  }).join('');
}
// 4. Update the running total
function updateBkTotal() {
  const total = bkSelectedServices.reduce((sum, s) => sum + (s.price || 0), 0);
  const totalEl = document.getElementById('bk-running-total');
  if (totalEl) totalEl.textContent = '₱' + total.toLocaleString();

  const cartList = document.getElementById('bk-cart-list');
  if (cartList) {
    if (bkSelectedServices.length === 0) {
      cartList.innerHTML = '<div style="color: var(--muted); font-size: 14px;">No services selected yet.</div>';
    } else {
      cartList.innerHTML = bkSelectedServices.map(s => `
        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--pink-soft);">
           <div style="font-weight: 600; color: var(--ink);">${s.icon} ${s.name}</div>
           <div style="color: var(--ink); font-weight: 500;">₱${s.price.toLocaleString()}</div>
        </div>
      `).join('');
    }
  }
}

// Proceed from Services page to Booking page with current selections
function proceedToBooking() {
  if (bkSelectedServices.length === 0) {
    toast('Please select at least one service first.', 'error');
    return;
  }
  go('booking');
  if (typeof renderBookingServices === 'function') renderBookingServices();
  bkNext(1);
}

// 5. Deep Link Handler (from the Services page)
function selectBkSvc(name, priceStr) {
  // Clear current selection and add this single item
  bkSelectedServices = [];
  const raw = String(name || '').trim();
  const cleanName = raw.replace(/^\s*[^\w\s]+\s*/, '');
  const numPrice = parseInt(String(priceStr).replace(/[^0-9]/g, '')) || 0;
  const icon = raw.match(/^\s*([^\w\s]+)/) ? raw.match(/^\s*([^\w\s]+)/)[1] : '✨';

  bkSelectedServices.push({name: cleanName, price: numPrice, icon: icon});

  renderBookingServices();
  bkNext(2);
}

// 6. Navigation between steps
function bkNext(step) {
  if (step === 2 && bkSelectedServices.length === 0) {
    toast('Please select at least one service', 'error');
    return;
  }
  
  if (step === 3) {
    const d = document.getElementById('bk-date').value;
    const t = document.getElementById('bk-time').value;
    const s = document.getElementById('bk-stylist').value; 
    const n = document.getElementById('bk-notes').value;
    
    if(!d) {
        toast('Please select a preferred date.', 'error');
        return;
    }
    
    // Stack the selected services neatly for the UI
    const svcHtml = bkSelectedServices.map(svc => `<div>${svc.icon} ${svc.name}</div>`).join('');
    const total = bkSelectedServices.reduce((sum, svc) => sum + (svc.price || 0), 0);
    
    document.getElementById('c-svc').innerHTML = svcHtml;
    document.getElementById('c-stylist').textContent = s; 
    document.getElementById('c-date').textContent = new Date(d).toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'});
    document.getElementById('c-time').textContent = t;
    document.getElementById('c-price').textContent = '₱' + total.toLocaleString();
    document.getElementById('c-notes').textContent = n || 'None';
  }
  
  [1, 2, 3].forEach(s => {
    const el = document.getElementById('bk-' + s);
    const bs = document.getElementById('bks-' + s);
    if(el) el.classList.toggle('hide', s !== step);
    if(bs) { bs.classList.toggle('active', s === step); bs.classList.toggle('done', s < step); }
  });
}

// 7. Save the Booking
function confirmBk() {
  const user = getCurrentUser();
  if(!user) { toast('Please sign in to book an appointment.', 'error'); go('login'); return; }
  
  const btn = document.getElementById('confirm-bk-btn');
  if(btn){ btn.textContent = 'Confirming…'; btn.disabled = true; }
  
  setTimeout(() => {
    const dateInput = document.getElementById('bk-date').value;
    const formattedDate = dateInput ? new Date(dateInput).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'}) : 'Not selected';
    const time = document.getElementById('bk-time').value || 'Not selected';
    const stylist = (document.getElementById('bk-stylist') || {}).value || 'No Preference';

    // Join names with a comma for the dashboard view
    const serviceNames = bkSelectedServices.map(s => s.name).join(', '); 
    const mainIcon = bkSelectedServices[0]?.icon || '✨';
    
    if(!user.bookings) user.bookings = [];
    user.bookings.push({ 
        icon: mainIcon, 
        service: serviceNames, 
        date: formattedDate, 
        time: time,
        stylist: stylist
    });
    saveUserData(user);
  
    if(btn){ btn.textContent = 'Confirm Appointment'; btn.disabled = false; }
    
    toast('Appointment confirmed! 🎉', 'info');
    go('account');
    
    renderDynamicAccountData(user);
    setTimeout(() => showTab('bookings'), 300);
    
    // Hard Reset
    bkSelectedServices = []; 
    renderBookingServices();
    const dateEl = document.getElementById('bk-date'); if(dateEl) dateEl.value = '';
    const notesEl = document.getElementById('bk-notes'); if(notesEl) notesEl.value = '';
    const bs = document.getElementById('bk-stylist'); if(bs) bs.value = 'No Preference';
    bkNext(1);
  }, 1500);
}
function toggleAccDrop(){const d=document.getElementById('acc-dropdown');const o=document.getElementById('acc-drop-overlay');const open=d.classList.toggle('open');o.classList.toggle('open',open)}
function closeAccDrop(){document.getElementById('acc-dropdown').classList.remove('open');document.getElementById('acc-drop-overlay').classList.remove('open')}
function doLogin(){closeAccDrop();go('account')}

const AUTH_USERS_KEY = 'lumere_users';
const AUTH_CURRENT_KEY = 'lumere_current_user';

function getUsers(){
  try{return JSON.parse(localStorage.getItem(AUTH_USERS_KEY)||'{}')}
  catch(e){return {}} 
}
function saveUsers(users){localStorage.setItem(AUTH_USERS_KEY,JSON.stringify(users))}
function setCurrentUser(email){localStorage.setItem(AUTH_CURRENT_KEY,email)}
function clearCurrentUser(){localStorage.removeItem(AUTH_CURRENT_KEY)}
function getCurrentUser(){
  const email=localStorage.getItem(AUTH_CURRENT_KEY);
  if(!email) return null;
  const users=getUsers();
  return users[email]||null;
}
function handleForgotPassword() {
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  
  if (!email) {
    toast('Please enter your email address first.', 'error');
    document.getElementById('login-email').focus();
    return;
  }
  
  const users = getUsers();
  if (!users[email]) {
    toast('No account found with that email.', 'error');
    return;
  }
  
  // Front-end simulation of an email reset flow
  const newPass = prompt(`Password Reset Request for: ${email}\n\n(In a real app, you would receive an email link. For this demo, please enter your new password below):\n\nMinimum 8 characters:`);
  
  if (newPass === null) return; // User clicked Cancel
  
  if (newPass.length < 8) {
    toast('Password must be at least 8 characters. Please try again.', 'error');
    return;
  }
  
  // Update password and save to local storage
  users[email].password = newPass;
  saveUsers(users);
  
  toast('Password reset successfully! You can now log in.', 'info');
  document.getElementById('login-password').value = ''; // Clear the password field
}
function loginUser(){
  const email=document.getElementById('login-email').value.trim().toLowerCase();
  const password=document.getElementById('login-password').value;
  if(!email||!password){toast('Please enter both email and password.','error');return;}
  const users=getUsers();
  const user=users[email];
  if(!user||user.password!==password){toast('Email or password is incorrect.','error');return;}
  setCurrentUser(email);
  updateAccountUI();
  toast(`Welcome back, ${user.first}!`,'info');
  go('account');
}
function registerUser(){
  const first=document.getElementById('register-first').value.trim();
  const last=document.getElementById('register-last').value.trim();
  const email=document.getElementById('register-email').value.trim().toLowerCase();
  const password=document.getElementById('register-password').value;
  if(!first||!last||!email||!password){toast('Please complete all fields.','error');return;}
  if(password.length<8){toast('Password must be at least 8 characters.','error');return;}
  const users=getUsers();
  if(users[email]){toast('An account with this email already exists.','error');return;}
  
  // Create empty arrays for a brand new user
  users[email]={first, last, email, password, phone:'', birthday:'', orders:[], bookings:[], payments:[], addresses:[]};
  saveUsers(users);
  setCurrentUser(email);
  updateAccountUI();
  toast('Account created successfully!','info');
  go('account');
}

function updateAccountUI(){
  const user=getCurrentUser();
  if(!user) return;
  const initials = user.first?.charAt(0).toUpperCase() || '👤';
  document.getElementById('acc-av').textContent = initials;
  document.getElementById('acc-uname').textContent = `${user.first} ${user.last}`;
  document.getElementById('acc-email').textContent = user.email;
  const profileFirst=document.getElementById('profile-first');
  const profileLast=document.getElementById('profile-last');
  const profileEmail=document.getElementById('profile-email');
  const profilePhone=document.getElementById('profile-phone');
  const profileBirthday=document.getElementById('profile-birthday');
  if(profileFirst) profileFirst.value = user.first;
  if(profileLast) profileLast.value = user.last;
  if(profileEmail) profileEmail.value = user.email;
  if(profilePhone) profilePhone.value = user.phone || '';
  if(profileBirthday) profileBirthday.value = user.birthday || '';
  
  // Trigger dynamic data render
  renderDynamicAccountData(user);
}

// NEW FUNCTION: Overwrites hardcoded HTML with actual user data
function renderDynamicAccountData(user) {
  const orders = user.orders || [];
  const bookings = user.bookings || [];
  const payments = user.payments || [];
  const addresses = user.addresses || [];
  const wishlist = user.wishlist || [];

  // 1. Update Stats
  const dashStats = document.querySelector('.dash-stats');
  if(dashStats) {
    dashStats.innerHTML = `
      <div class="ds"><div class="ds-num">${orders.length}</div><div class="ds-lbl">Total Orders</div></div>
      <div class="ds"><div class="ds-num">${bookings.length}</div><div class="ds-lbl">Upcoming Bookings</div></div>
      <div class="ds"><div class="ds-num">${wishlist.length}</div><div class="ds-lbl">Wishlist Items</div></div>
    `;
  }


  // 2. Update Orders
  const ordersTbody = document.querySelector('#tab-orders tbody');
  const dashTbody = document.querySelector('#tab-dashboard tbody');
  
  if(orders.length === 0) {
    if(ordersTbody) ordersTbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--muted)">No orders found.</td></tr>';
    if(dashTbody) dashTbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:30px;color:var(--muted)">No recent orders.</td></tr>';
  } else {
    // Logic for the main Orders table
    const rows = orders.map(o => {
      const status = o.status || 'Processing';
      let spClass = 'sp-proc';
      let actionHTML = '';

      if (status === 'Processing') {
        actionHTML = `<button class="btn btn-ghost btn-sm" onclick="cancelOrder('${o.id}')" style="color: var(--terra); padding: 4px 8px;">Cancel</button>`;
      } else if (status === 'Cancelled') {
        spClass = 'sp-ship'; 
        actionHTML = `<span style="font-size: 11px; color: var(--muted);">Cancelled</span>`;
      } else {
        spClass = 'sp-done';
        actionHTML = `<button class="reorder-btn" onclick="toast('Items added to cart!', 'info')">Re-order</button>`;
      }

      return `<tr><td style="font-weight: 500">${o.id}</td><td>${o.date}</td><td>${o.items}</td><td style="color: var(--terra)">₱${o.total.toLocaleString()}</td><td><span class="sp ${spClass}" ${status === 'Cancelled' ? 'style="background:var(--border);color:var(--muted);"' : ''}>${status.toUpperCase()}</span></td><td>${actionHTML}</td></tr>`;
    }).reverse().join('');
    
    if(ordersTbody) ordersTbody.innerHTML = rows;

    // FIXED: Dynamic status logic applied to the Dashboard table
    const dashRows = orders.slice(-2).reverse().map(o => {
      const status = o.status || 'Processing';
      let spClass = 'sp-proc';
      
      if (status === 'Cancelled') spClass = 'sp-ship';
      if (status === 'Delivered') spClass = 'sp-done';

      return `<tr><td style="font-weight: 500">${o.id}</td><td>${o.date}</td><td style="color: var(--terra)">₱${o.total.toLocaleString()}</td><td><span class="sp ${spClass}" ${status === 'Cancelled' ? 'style="background:var(--border);color:var(--muted);"' : ''}>${status.toUpperCase()}</span></td><td></td></tr>`;
    }).join('');
    
    if(dashTbody) dashTbody.innerHTML = dashRows;
  }

  // 3. Update Bookings
  const bookingsTab = document.getElementById('tab-bookings');
  if(bookingsTab) {
    if(bookings.length === 0) {
       bookingsTab.innerHTML = `<div class="acc-pg-title">My Bookings</div><div style="text-align:center;padding:40px 20px;color:var(--muted)"><div style="font-size:32px;margin-bottom:12px">📅</div><p style="margin-bottom:16px">You have no upcoming bookings.</p><button class="btn btn-primary" onclick="go('booking')">+ Book New Appointment</button></div>`;
    } else {
       const bkCards = bookings.map(b => `<div class="bk-card"><div class="bk-icon">${b.icon}</div><div class="bk-info"><div class="bk-name">${b.service}</div><div class="bk-meta">${b.date} · ${b.time}</div></div><span class="sp sp-proc">Upcoming</span><div class="bk-acts"><button class="btn btn-ghost btn-sm" onclick="toast('Booking cancelled', 'error')">Cancel</button></div></div>`).reverse().join('');
       bookingsTab.innerHTML = `<div class="acc-pg-title">My Bookings</div><h4 style="font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px;">Upcoming</h4>${bkCards}<br><button class="btn btn-primary" onclick="go('booking')">+ Book New Appointment</button>`;
    }
  }

  // 4. Update Payments
  const paymentTab = document.getElementById('tab-payment');
  if(paymentTab) {
     let html = `<div class="acc-pg-title">Payment Methods</div>`;
     if(payments.length === 0) {
        html += `<div style="padding:30px;text-align:center;color:var(--muted);border:1px dashed var(--pink-soft);border-radius:var(--r);margin-bottom:20px;">No payment methods saved.</div>`;
     } else {
        let hasDefaultCard = false;
        let hasDefaultGcash = false;
        
        html += payments.map((p) => {
           // Fallback for older saves that might not have a type
           const pType = p.type || (p.name.includes('GCash') ? 'gcash' : 'card');
           
           let isDef = false;
           if (pType === 'card' && !hasDefaultCard) { isDef = true; hasDefaultCard = true; }
           if (pType === 'gcash' && !hasDefaultGcash) { isDef = true; hasDefaultGcash = true; }
           
           // 1. Force the correct image based on the payment type
           const iconImg = pType === 'gcash' ? 'images/gcash.png' : 'images/atm-card.png';
           
           // 2. Render the card ignoring the old saved emoji
           return `<div class="pay-card"><div class="pay-icon"><img src="${iconImg}" alt="${pType}" style="width: 28px; height: 28px; object-fit: contain;"></div><div class="pay-info"><div class="pay-name">${p.name}</div>${isDef ? '<div class="pay-default">Default</div>' : ''}</div><div class="pay-acts">${!isDef ? `<button class="btn btn-ghost btn-sm" onclick="setAsDefault('payments', ${p.id})">Make Default</button>` : ''}<button class="btn btn-ghost btn-sm" onclick="removePayment(${p.id})">Remove</button></div></div>`;
        }).join('');
     }
     html += `<br><div style="background: var(--cream); padding: 24px; border-radius: var(--r); max-width: 420px; border: 1px solid var(--border);">
       <div style="font-size: 13px; font-weight: 500; color: var(--ink); margin-bottom: 16px;">Add New Payment</div>
       <div class="fg"><label class="flabel">Method</label>
         <select id="new-pay-type" class="finput" onchange="togglePayFields()">
           <option value="card">Bank / Credit Card</option>
           <option value="gcash">GCash</option>
         </select>
       </div>
       <div id="pay-card-fields">
         <div class="fg"><label class="flabel">Bank Name</label><input type="text" id="new-bank-name" class="finput" placeholder="BDO, BPI, UnionBank..."></div>
         <div class="fg"><label class="flabel">Card Number</label>
           <input type="text" id="new-card-num" class="finput" placeholder="16-digit card number" maxlength="16" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
         </div>
       </div>
       <div id="pay-gcash-fields" style="display:none;">
         <div class="fg"><label class="flabel">GCash Name</label><input type="text" id="new-gcash-name" class="finput" placeholder="Juan Dela Cruz"></div>
         <div class="fg"><label class="flabel">GCash Number</label>
           <input type="tel" id="new-gcash-num" class="finput" placeholder="09XXXXXXXXX" maxlength="11" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
         </div>
       </div>
       <button class="btn btn-primary btn-full" onclick="addPayment()" style="margin-top: 8px;">Save Payment Method</button>
     </div>`;
     paymentTab.innerHTML = html;
  }

    // 5. Update Addresses dynamically (Replaces the hardcoded HTML)
    const addressTab = document.getElementById('tab-addresses');
    if(addressTab) {
      let html = `<div class="acc-pg-title">My Addresses</div>`;
      if(!addresses || addresses.length === 0) {
        html += `<div style="padding:30px;text-align:center;color:var(--muted);border:1px dashed var(--pink-soft);border-radius:var(--r);margin-bottom:20px;">No addresses saved.</div>`;
      } else {
        html += addresses.map(a => `
          <div class="addr-card">
             ${a.isDefault ? '<div class="addr-default">Default Address</div>' : ''}
             <div class="addr-text">${a.text}</div>
             <div class="addr-acts">
                ${!a.isDefault ? `<button class="btn btn-ghost btn-sm" onclick="setAsDefault('addresses', ${a.id})">Make Default</button>` : ''}
                <button class="btn btn-ghost btn-sm" onclick="removeAddress(${a.id})">Remove</button>
             </div>
          </div>
        `).join('');
      }
     
      // Add the strict form at the bottom (numeric-only inputs + helpful placeholders)
      html += `
      <br><div style="background: var(--cream); padding: 24px; border-radius: var(--r); max-width: 480px; border: 1px solid var(--border);">
       <div style="font-size: 13px; font-weight: 500; color: var(--ink); margin-bottom: 16px;">Add New Address</div>
       <div class="fg"><label class="flabel">Full Name</label><input type="text" id="new-addr-name" class="finput" placeholder="e.g., Juan Dela Cruz"></div>
       <div class="fg"><label class="flabel">Street Address</label><input type="text" id="new-addr-street" class="finput" placeholder="House/Unit No., Street Name, Barangay"></div>
       <div class="frow">
        <div class="fg"><label class="flabel">City/Municipality</label><input type="text" id="new-addr-city" class="finput" placeholder="e.g., Quezon City"></div>
        <div class="fg"><label class="flabel">Postal Code</label>
          <input type="text" id="new-addr-zip" class="finput" placeholder="e.g., 1100" maxlength="4" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
        </div>
       </div>
       <div class="fg"><label class="flabel">Phone Number</label>
         <input type="tel" id="new-addr-phone" class="finput" placeholder="09XXXXXXXXX" maxlength="11" autocomplete="off" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
       </div>
       <button class="btn btn-primary btn-full" onclick="addAddress()" style="margin-top: 8px;">Save Address</button>
      </div>`;
      addressTab.innerHTML = html;
    }
}
function saveProfileDetails() {
  const user = getCurrentUser();
  if(!user){ toast('No user is currently signed in.', 'error'); return; }

  const first = document.getElementById('profile-first').value.trim();
  const last = document.getElementById('profile-last').value.trim();
  const phone = document.getElementById('profile-phone').value.trim();
  const birthday = document.getElementById('profile-birthday').value;

  if(!first || !last){ toast('Please enter your first and last name.', 'error'); return; }

  const users = getUsers();
  users[user.email] = { ...user, first, last, phone, birthday };
  saveUsers(users);
  setCurrentUser(user.email);
  updateAccountUI();

  toast('Profile details updated successfully!', 'info');
}

function updatePassword() {
  const user = getCurrentUser();
  if(!user){ toast('No user is currently signed in.', 'error'); return; }

  const currPass = document.getElementById('profile-curr-pass').value;
  const newPass = document.getElementById('profile-new-pass').value;
  const confPass = document.getElementById('profile-conf-pass').value;

  if (!currPass || !newPass || !confPass) { toast('Please fill in all password fields.', 'error'); return; }
  if (currPass !== user.password) { toast('Current password is incorrect.', 'error'); return; }
  if (newPass.length < 8) { toast('New password must be at least 8 characters.', 'error'); return; }
  if (newPass !== confPass) { toast('New passwords do not match.', 'error'); return; }

  const users = getUsers();
  users[user.email] = { ...user, password: newPass };
  saveUsers(users);
  setCurrentUser(user.email);

  document.getElementById('profile-curr-pass').value = '';
  document.getElementById('profile-new-pass').value = '';
  document.getElementById('profile-conf-pass').value = '';

  toast('Password updated successfully!', 'info');
}

/* ═══════════════ ACCOUNT ═══════════════ */
function showTab(tab) {
  document.querySelectorAll('.acc-pg').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.ani').forEach(n=>n.classList.remove('active'));
  document.getElementById('tab-'+tab)?.classList.add('active');
  document.getElementById('an-'+tab)?.classList.add('active');

  // FIX 2: Force a fresh data pull every time you click a sidebar tab!
  const user = getCurrentUser();
  if (user) {
      if (typeof renderDynamicAccountData === 'function') renderDynamicAccountData(user);
      if (tab === 'wishlist' && typeof renderWishlist === 'function') {
          renderWishlist();
      }
  }
}
function renderWishlist() {
  const el = document.getElementById('wishlist-grid');
  if(!el) return;
  const user = getCurrentUser();
  
  if(!user || !user.wishlist || user.wishlist.length === 0) {
    el.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted)">Your wishlist is empty. Browse our products to add some!</div>';
    return;
  }
  
  const wishProducts = user.wishlist.map(id => products.find(p => p.id === id)).filter(Boolean);
  
  el.innerHTML = wishProducts.map(p => {
    const bdg = p.badge ? `<span class="pc-badge badge-${p.badge}">${p.badge}</span>` : '';
    return `
    <div class="pc" onclick="openPdp(${p.id})">
      <div class="pc-img">
        ${bdg}${p.img ? `<img src="${p.img}" alt="${p.name}">` : ''}
        <div class="pc-actions">
          <button class="pca-cart" onclick="event.stopPropagation();quickAdd(${p.id})">Add to Cart</button>
          <button class="pca-wish" onclick="event.stopPropagation();toggleWishlist(${p.id})">✕ Remove</button>
        </div>
      </div>
      <div class="pc-info">
        <div class="pc-name">${p.name}</div>
        <div class="pc-price-row"><span class="pc-price">₱${p.price.toLocaleString()}</span></div>
      </div>
    </div>
    `;
  }).join('');
}

// Updated: Toggle Wishlist now updates UI everywhere instantly
function toggleWishlist(id) {
  const user = getCurrentUser();
  if (!user) { toast('Please sign in to save items.', 'error'); go('login'); return; }
  
  if (!user.wishlist) user.wishlist = [];
  const index = user.wishlist.indexOf(id);
  
  if (index > -1) {
    user.wishlist.splice(index, 1);
    toast('Removed from wishlist', 'error');
  } else {
    user.wishlist.push(id);
    toast('Added to wishlist ♥', 'info');
  }
  
  saveUserData(user);
  
  // FIX 1: ALWAYS update the Wishlist HTML in the background!
  if (typeof renderWishlist === 'function') renderWishlist();
  if (typeof renderDynamicAccountData === 'function') renderDynamicAccountData(user);
  
  // Instantly refresh all the product grids so the heart icon immediately turns black!
  renderProdGrid('prod-grid', productFilters.cat);
  const bs = document.getElementById('home-bestsellers');
  if (bs) bs.innerHTML = products.filter(p=>p.badge==='best').slice(0, 8).map(pCard).join('');
  const hf = document.getElementById('home-featured');
  if (hf) hf.innerHTML = products.filter(p=>p.badge==='new').slice(0, 8).map(pCard).join('');
  const dg = document.getElementById('deals-grid');
  if (dg) dg.innerHTML = products.filter(p=>p.badge==='sale'||p.orig).slice(0, 8).map(pCard).join('');
  
  // Update the button on the Product Detail Page if we are currently looking at it
  if (currentPdp && currentPdp.id === id) {
      const pdpBtn = document.querySelector('.pdp-btns .btn-ghost');
      if (pdpBtn) {
          const isWished = user.wishlist.includes(id);
          pdpBtn.innerHTML = isWished ? '♥ Saved to Wishlist' : '♡ Save to Wishlist';
      }
  }
}

/* ═══════════════ TOAST ═══════════════ */
/* ═══════════════ TOAST ═══════════════ */
function toast(msg, type='info') {
  const c = document.getElementById('toast-wrap');
  if (!c) return;

  // 1. ANTI-SPAM: Check if this exact message is already on the screen
  const existingMessages = c.querySelectorAll('.toast-msg');
  for (let i = 0; i < existingMessages.length; i++) {
      if (existingMessages[i].textContent === msg) {
          // If it exists, just give the existing toast a tiny "shake" effect and cancel the new one
          const existingToast = existingMessages[i].closest('.toast');
          existingToast.style.transform = 'translateX(8px)';
          setTimeout(() => { existingToast.style.transform = 'translateX(0)'; }, 150);
          return; 
      }
  }

  // 2. MAX LIMIT: Only allow 3 toasts on the screen at a time
  if (c.children.length >= 3) {
      c.children[0].remove(); // Instantly remove the oldest one
  }

  // Create the new toast
  const t = document.createElement('div');
  t.className = `toast t-${type}`;
  t.innerHTML = `<span class="toast-ico">${type==='info'?'✓':type==='error'?'✕':'★'}</span><span class="toast-msg">${msg}</span><button class="toast-x" onclick="this.parentElement.remove()">×</button>`;
  
  c.appendChild(t);
  
  // Animate it in
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  
  // Remove it after 3.4 seconds
  setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.remove(), 400);
  }, 3400);
}

/* ═══════════════ INIT ═══════════════ */
// Limit homepage grids to 8 items max
const hb = document.getElementById('home-bestsellers');
if (hb) hb.innerHTML = products.filter(p=>p.badge==='best').slice(0, 8).map(pCard).join('');
const hfInit = document.getElementById('home-featured');
if (hfInit) hfInit.innerHTML = products.filter(p=>p.badge==='new').slice(0, 8).map(pCard).join('');
const dgInit = document.getElementById('deals-grid');
if (dgInit) dgInit.innerHTML = products.filter(p=>p.badge==='sale'||p.orig).slice(0, 8).map(pCard).join('');

// Setup Filters
const minPriceEl = document.getElementById('min-price');
if (minPriceEl) minPriceEl.oninput = function() { productFilters.minPrice = this.value ? +this.value : null; renderProdGrid('prod-grid'); };

const maxPriceEl = document.getElementById('max-price');
if (maxPriceEl) maxPriceEl.oninput = function() { productFilters.maxPrice = this.value ? +this.value : Infinity; renderProdGrid('prod-grid'); };

const minRatingEl = document.getElementById('min-rating');
if (minRatingEl) minRatingEl.onchange = function() { productFilters.minRating = this.value ? +this.value : 0; renderProdGrid('prod-grid'); };

// Boot up initial data
updateCategoryCounts();
renderProdGrid('prod-grid','all');
renderCartPage();
renderWishlist();
updateAccountUI();

// Ensure booking date cannot be set in the past and render booking services
try {
    if(typeof setMinBookingDate === 'function') setMinBookingDate();
    if(typeof renderBookingServicesByCategory === 'function') renderBookingServicesByCategory('hair');
} catch(e) { console.error("Booking Init Error:", e); }

// Phone input masking for profile phone (09XX-XXX-XXXX)
const phoneInput = document.getElementById('profile-phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let v = e.target.value.replace(/\D/g,'');
        let x = v.match(/(\d{0,4})(\d{0,3})(\d{0,4})/);
        if(!x) return;
        if(!x[2]) e.target.value = x[1];
        else e.target.value = x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
    });
}

// Pre-fill homepage review form if logged in
const homeNameInput = document.getElementById('new-home-name');
if (homeNameInput) {
  const usr = getCurrentUser();
  homeNameInput.value = usr ? `${usr.first} ${usr.last}` : '';
}

// Render the initial home reviews
setTimeout(() => {
  updateStoreStats(); // <-- ADD THIS HERE
  if (typeof renderHomeReviews === 'function') {
    renderHomeReviews('all');
  }
}, 100);

// BACK TO TOP LISTENER: Make the arrow appear when scrolling down
window.addEventListener('scroll', () => {
  const btt = document.getElementById('btt');
  if (btt) {
    if (window.scrollY > 400) {
      btt.classList.add('visible');
    } else {
      btt.classList.remove('visible');
    }
  }
});
/* ═══════════════ DYNAMIC ACCOUNT HANDLERS ═══════════════ */
function saveUserData(user) {
  const users = getUsers();
  users[user.email] = user;
  saveUsers(users);
}


function cancelOrder(orderId) {
  if (!confirm('Are you sure you want to cancel this order?')) return;
  
  const user = getCurrentUser();
  if (!user || !user.orders) return;
  
  const orderIndex = user.orders.findIndex(o => o.id === orderId);
  if (orderIndex > -1) {
    user.orders[orderIndex].status = 'Cancelled';
    saveUserData(user);
    toast('Order cancelled successfully.', 'info');
    renderDynamicAccountData(user); // Refresh the table instantly
  }
}
// Payment Handlers
// NEW: Toggles between Bank and GCash fields
function togglePayFields() {
  const type = document.getElementById('new-pay-type').value;
  document.getElementById('pay-card-fields').style.display = (type === 'card') ? 'block' : 'none';
  document.getElementById('pay-gcash-fields').style.display = (type === 'gcash') ? 'block' : 'none';
}

function addPayment() {
  const user = getCurrentUser();
  if(!user) return;
  const type = document.getElementById('new-pay-type').value;
  
  if(!user.payments) user.payments = [];
  
  if(type === 'card') {
    const bank = document.getElementById('new-bank-name').value.trim();
    const rawNum = document.getElementById('new-card-num').value.trim();
    if(!bank || !rawNum) { toast('Please enter Bank Name and Card Number', 'error'); return; }
    if(rawNum.length < 13) { toast('Please enter a valid card number', 'error'); return; }
    const num = rawNum.slice(-4);
    
    // Notice the new type property added here
    user.payments.push({ id: Date.now(), type: 'card', name: `${bank} ending in ${num}`, icon: '<img src="images/atm-card.png" alt="Card" style="width: 28px; height: 28px; object-fit: contain;">' });
    
  } else {
    const gname = document.getElementById('new-gcash-name').value.trim();
    const rawGnum = document.getElementById('new-gcash-num').value.trim();
    if(!gname || !rawGnum) { toast('Please enter GCash Name and Number', 'error'); return; }
    if(rawGnum.length !== 11 || !rawGnum.startsWith('09')) { toast('Enter a valid 11-digit GCash number starting with 09', 'error'); return; }
    const gnum = rawGnum.slice(-4);
    
    // Notice the new type property added here
    user.payments.push({ id: Date.now(), type: 'gcash', name: `GCash ending in ${gnum}`, icon: '<img src="images/gcash.png" alt="GCash" style="width: 28px; height: 28px; object-fit: contain;">' });
  }
  
  saveUserData(user);
  toast('Payment method saved!', 'info');
  
  // Clear inputs
  document.getElementById('new-bank-name').value = '';
  document.getElementById('new-card-num').value = '';
  document.getElementById('new-gcash-name').value = '';
  document.getElementById('new-gcash-num').value = '';
  
  renderDynamicAccountData(user);
}
function removePayment(id) {
  const user = getCurrentUser();
  user.payments = user.payments.filter(p => p.id !== id);
  saveUserData(user);
  toast('Card removed', 'error');
  renderDynamicAccountData(user);
}

// Address Handlers
function addAddress() {
  const user = getCurrentUser();
  if(!user) return;
  
  // Grab values from our dynamically generated form
  const name = (document.getElementById('new-addr-name') || {}).value?.trim() || '';
  const street = (document.getElementById('new-addr-street') || {}).value?.trim() || '';
  const city = (document.getElementById('new-addr-city') || {}).value?.trim() || '';
  const zip = (document.getElementById('new-addr-zip') || {}).value?.trim() || '';
  const phone = (document.getElementById('new-addr-phone') || {}).value?.trim() || '';
  
  // 1. STRICT: All fields are required
  if(!name || !street || !city || !zip || !phone) { 
      toast('Please fill in all address fields.', 'error'); 
      return; 
  }

  // 2. STRICT: Postal Code must be exactly 4 digits
  if(!/^[0-9]{4}$/.test(zip)) {
      toast('Postal Code must be exactly 4 digits.', 'error');
      return;
  }

  // 3. STRICT: Phone must be exactly 11 digits and start with 09
  if(!/^09[0-9]{9}$/.test(phone)) {
      toast('Phone must be an 11-digit number starting with 09.', 'error');
      return;
  }
  
  if(!user.addresses) user.addresses = [];
  
  // Make the first address the default automatically
  const isFirst = user.addresses.length === 0;
  
  user.addresses.push({ 
    id: Date.now(), 
    isDefault: isFirst, 
    text: `${escapeHtml(name)}<br>${escapeHtml(street)}<br>${escapeHtml(city)} ${escapeHtml(zip)}<br>${escapeHtml(phone)}` 
  });
  
  saveUserData(user);
  toast('Address saved successfully!', 'info');
  renderDynamicAccountData(user);
}

// Small helper to avoid accidental HTML injection from inputs
function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function removeAddress(id) {
  const user = getCurrentUser();
  user.addresses = user.addresses.filter(a => a.id !== id);
  
  // FIX: Auto-assign a new default if the old default was deleted
  if (user.addresses.length > 0 && !user.addresses.some(a => a.isDefault)) {
      user.addresses[0].isDefault = true;
  }
  
  saveUserData(user);
  toast('Address removed', 'error');
  renderDynamicAccountData(user);
}

// Set Default Function
function setAsDefault(type, id) {
  const user = getCurrentUser();
  
  // FIX: Handle addresses correctly by toggling the "isDefault" flag
  if (type === 'addresses') {
      user.addresses.forEach(a => a.isDefault = (a.id === id));
  } else {
      const index = user[type].findIndex(item => item.id === id);
      if (index > -1) {
        const item = user[type].splice(index, 1)[0];
        user[type].unshift(item);
      }
  }
  
  saveUserData(user);
  toast('Default updated!', 'info');
  renderDynamicAccountData(user);
}
// NEW & UPGRADED LOGOUT FUNCTION
function logout() {
  clearCurrentUser();
  
  // Empty the shopping cart
  cart = [];
  updateBadge();
  if (typeof renderCartPanel === 'function') renderCartPanel();
  
  // Reset the sidebar UI back to default
  const av = document.getElementById('acc-av');
  const uname = document.getElementById('acc-uname');
  const email = document.getElementById('acc-email');
  
  if(av) av.textContent = '👤';
  if(uname) uname.textContent = 'Guest';
  if(email) email.textContent = 'guest@lumiere.com';
  
  // Show confirmation and send to login screen
  toast('You have been logged out.', 'info');
  go('login');
}


/* ═══════════════ REVIEWS & REACTIONS ═══════════════ */
let productReviewsData = {};

function generateRevId() { return 'rev_' + Math.random().toString(36).substr(2, 9); }

let homeReviewsData = [
  { id: generateRevId(), stars: 5, text: "Absolutely in love with my facial treatment. My skin has never looked this radiant. The staff were so professional and welcoming — I'll be back every month!", author: "Sofia Reyes", authorEmail: null, verified: true, interactedBy: {} },
  { id: generateRevId(), stars: 5, text: "The haircare products arrived beautifully packaged and the results are incredible. My hair feels healthier than ever. Already ordered again!", author: "Camille Torres", authorEmail: null, verified: true, interactedBy: {} },
  { id: generateRevId(), stars: 5, text: "Booking my nail appointment online was so easy. The nail art is incredibly detailed. This is my go-to salon now!", author: "Anisa Mendoza", authorEmail: null, verified: true, interactedBy: {} },
  { id: generateRevId(), stars: 4, text: "Lumière offers such a serene and luxurious environment. Purchasing my favorite skincare lines directly from their website after a spa day is incredibly convenient.", author: "Elena Cruz", authorEmail: null, verified: true, interactedBy: {} },
  { id: generateRevId(), stars: 5, text: "Their customer service is unmatched. I had a question about which serum to use for my sensitive skin, and the team guided me perfectly.", author: "Diana Lim", authorEmail: null, verified: true, interactedBy: {} }
];

function getStarsHtml(rating) {
  const rounded = Math.round(Number(rating));
  return '★'.repeat(rounded) + '☆'.repeat(5 - rounded);
}

// Automatically update the hero stats based on real reviews
function updateStoreStats() {
  const satEl = document.getElementById('hero-sat-rate');
  const avgEl = document.getElementById('hero-avg-rating');
  
  if (!homeReviewsData || homeReviewsData.length === 0) return;

  // Add up all the stars
  let totalStars = 0;
  homeReviewsData.forEach(r => { totalStars += r.stars; });

  // Calculate average out of 5 (e.g., 4.8)
  const average = (totalStars / homeReviewsData.length).toFixed(1);
  
  // Calculate percentage (e.g., 4.8 / 5 = 96%)
  const percentage = Math.round((totalStars / (homeReviewsData.length * 5)) * 100);

  // Update the HTML
  if (satEl) satEl.textContent = percentage + '%';
  if (avgEl) avgEl.textContent = average + '★';
}

function getReviewsForProduct(id) {
  if (!productReviewsData[id]) {
    const p = products.find(x => x.id === id);
    if (!p) return [];

    const type = p.subcat || p.cat || 'product';
    const brand = p.brand || 'this brand';
    const name = p.name || 'item';

    const reviewTemplates = {
      skincare: [
        { stars: 5, text: `My skin has never felt better since using this ${name}. The texture is amazing, it absorbs perfectly, and it really delivers on its promises.`, author: "Mae Santos" },
        { stars: 5, text: `I highly recommend this from ${brand}. I have noticed a visible difference in my complexion and overall skin health.`, author: "Claire Lim" },
        { stars: 4, text: `A bit pricey, but this ${type} is absolutely worth it for the glowing results. It has become a permanent part of my routine.`, author: "Dina Cruz" }
      ],
      makeup: [
        { stars: 5, text: `The pigmentation and finish on this ${name} are incredible. It lasts all day without fading or settling into fine lines.`, author: "Liza Perez" },
        { stars: 5, text: `Beautiful application and very easy to blend. ${brand} really outdid themselves with this specific formula.`, author: "Chloe Garcia" },
        { stars: 4, text: `This has become a staple in my daily makeup routine. The quality of this ${type} easily rivals high-end luxury brands.`, author: "Mia Tolentino" }
      ],
      haircare: [
        { stars: 5, text: `This ${type} completely transformed my hair. It feels so much softer, manageable, and noticeably healthier after just a few uses.`, author: "Anna Bautista" },
        { stars: 4, text: `Smells amazing and does not weigh my hair down at all. An absolute must-have product from ${brand}.`, author: "Sarah Reyes" },
        { stars: 5, text: `I always struggle with frizz and dryness, but the ${name} smoothed everything out beautifully. Highly recommended!`, author: "Bea Villanueva" }
      ],
      sunscreen: [
        { stars: 5, text: `Finally a ${type} that leaves absolutely no white cast! It feels so light on the face and blends seamlessly.`, author: "Katrina Ocampo" },
        { stars: 5, text: `I wear this ${name} under my makeup every single day and it never pills or feels greasy.`, author: "Nina Alcantara" },
        { stars: 4, text: `Great sun protection and it does not break out my sensitive skin. ${brand} is definitely my new go-to for SPF.`, author: "Pia Martinez" }
      ],
      default: [
        { stars: 5, text: `Absolutely love this ${name}! It has completely exceeded my expectations and the overall quality is fantastic.`, author: "Verified Buyer" },
        { stars: 4, text: `Very good ${type}. It works exactly as described and feels very premium, though delivery took a day longer than expected.`, author: "Happy Customer" },
        { stars: 5, text: `This is my third time repurchasing this item from ${brand}. I cannot recommend it enough to my friends and family.`, author: "Loyal Client" }
      ]
    };

    const categoryReviews = reviewTemplates[p.cat] || reviewTemplates.default;
    
    productReviewsData[id] = categoryReviews.map(template => ({
      id: generateRevId(),
      stars: template.stars,
      text: template.text,
      author: template.author,
      authorEmail: null,
      verified: true,
      interactedBy: {}
    }));
  }
  return productReviewsData[id];
}

function buildReviewCardHTML(r, context, productId = null) {
  const user = getCurrentUser();
  let likes = 0, dislikes = 0, myReaction = null;

  if (r.interactedBy) {
    for (let email in r.interactedBy) {
      if (r.interactedBy[email] === 'up') likes++;
      if (r.interactedBy[email] === 'down') dislikes++;
      if (user && email === user.email) myReaction = r.interactedBy[email];
    }
  }

  const isOwner = user && user.email === r.authorEmail;

  return `
    <div class="rev-card" style="position: relative;">
      ${isOwner ? `<button onclick="deleteReview('${r.id}', '${context}', ${productId})" style="position:absolute; top:16px; right:16px; background:none; border:none; cursor:pointer; color:var(--muted); font-size:16px;" title="Delete Review">🗑️</button>` : ''}
      <div class="rev-stars">${getStarsHtml(r.stars)}</div>
      <p class="rev-text">"${r.text}"</p>
      <div class="rev-author" style="margin-bottom: 16px;">
        <div class="rev-av">${r.author.charAt(0).toUpperCase()}</div>
        <div>
          <div class="rev-name">${r.author}</div>
          ${r.verified ? '<div class="rev-verified">✓ Verified</div>' : ''}
        </div>
      </div>
      <div style="display:flex; gap:12px; border-top: 1px solid var(--pink-soft); padding-top: 12px;">
         <button onclick="handleReaction('${r.id}', 'up', '${context}', ${productId})" style="background:none; border:none; cursor:pointer; font-size:13px; color: ${myReaction === 'up' ? 'var(--ink)' : 'var(--muted)'}; font-weight: ${myReaction === 'up' ? '600' : '400'}; transition: color 0.2s;">👍 ${likes}</button>
         <button onclick="handleReaction('${r.id}', 'down', '${context}', ${productId})" style="background:none; border:none; cursor:pointer; font-size:13px; color: ${myReaction === 'down' ? 'var(--ink)' : 'var(--muted)'}; font-weight: ${myReaction === 'down' ? '600' : '400'}; transition: color 0.2s;">👎 ${dislikes}</button>
      </div>
    </div>
  `;
}

function handleReaction(reviewId, type, context, productId) {
  const user = getCurrentUser();
  if (!user) { toast('Please sign in to react to reviews.', 'error'); return; }

  let reviews = context === 'home' ? homeReviewsData : productReviewsData[productId];
  let review = reviews.find(r => r.id === reviewId);
  if (!review) return;

  if (!review.interactedBy) review.interactedBy = {};
  
  if (review.interactedBy[user.email] === type) {
    delete review.interactedBy[user.email]; 
  } else {
    review.interactedBy[user.email] = type; 
  }

  if (context === 'home') renderHomeReviews(document.getElementById('home-review-filter').value);
  else renderProductReviews(productId, document.getElementById('pdp-review-filter').value);
}

function deleteReview(reviewId, context, productId) {
  if (!confirm("Are you sure you want to delete your review?")) return;

  if (context === 'home') {
    homeReviewsData = homeReviewsData.filter(r => r.id !== reviewId);
    renderHomeReviews(document.getElementById('home-review-filter').value);
    updateStoreStats(); // <-- ADD THIS HERE
  } else {
    productReviewsData[productId] = productReviewsData[productId].filter(r => r.id !== reviewId);
    renderProductReviews(productId, document.getElementById('pdp-review-filter').value);
  }
  toast('Review deleted successfully.', 'info');
}

function filterProductReviews() {
  if (!currentPdp) return;
  renderProductReviews(currentPdp.id, document.getElementById('pdp-review-filter').value);
}

function renderProductReviews(id, filterStar = 'all') {
  const container = document.getElementById('pdp-reviews-container');
  if (!container) return;
  
  let reviews = getReviewsForProduct(id);
  if (filterStar !== 'all') reviews = reviews.filter(r => Math.round(r.stars) === Number(filterStar));
  
  if (reviews.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--muted); padding: 20px;">No reviews match this rating.</div>';
    return;
  }
  container.innerHTML = reviews.map(r => buildReviewCardHTML(r, 'product', id)).join('');
}

function submitProductReview() {
  if (!currentPdp) return;
  const user = getCurrentUser();
  
  if (!user) { 
    toast('Please sign in to leave a review.', 'error'); 
    return; 
  }

  const existing = getReviewsForProduct(currentPdp.id).find(r => r.authorEmail === user.email);
  if (existing) { 
    toast('You have already reviewed this product. You can delete your old review to post a new one.', 'error'); 
    return; 
  }

  let name = document.getElementById('new-pdp-name').value.trim();
  const isAnon = document.getElementById('new-pdp-anon').checked;
  const rating = document.getElementById('new-pdp-rating').value;
  const text = document.getElementById('new-pdp-text').value.trim();
  
  if (!text) { toast('Please write a review before submitting.', 'error'); return; }
  
  const displayName = isAnon ? 'Anonymous' : (name || `${user.first} ${user.last}`);
  
  const reviews = getReviewsForProduct(currentPdp.id);
  reviews.unshift({ 
    id: generateRevId(), 
    stars: Number(rating), 
    text: text, 
    author: displayName, 
    authorEmail: user.email, 
    verified: true, 
    interactedBy: {} 
  });
  
  document.getElementById('new-pdp-name').value = `${user.first} ${user.last}`;
  document.getElementById('new-pdp-anon').checked = false;
  document.getElementById('new-pdp-rating').value = '5';
  document.getElementById('new-pdp-text').value = '';
  document.getElementById('pdp-review-filter').value = 'all';
  
  renderProductReviews(currentPdp.id, 'all');
  toast('Thank you for your product review!', 'info');
}

function filterHomeReviews() { renderHomeReviews(document.getElementById('home-review-filter').value); }

function renderHomeReviews(filterStar = 'all') {
  const container = document.getElementById('home-reviews-container');
  if (!container) return;
  
  let reviews = homeReviewsData;
  if (filterStar !== 'all') reviews = reviews.filter(r => Math.round(r.stars) === Number(filterStar));
  
  if (reviews.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--muted); padding: 20px;">No store reviews match this rating.</div>';
    return;
  }
  
  container.innerHTML = reviews.map(r => buildReviewCardHTML(r, 'home', null)).join('');
}

function submitHomeReview() {
  const user = getCurrentUser();
  
  if (!user) { 
    toast('Please sign in to leave a store review.', 'error'); 
    return; 
  }

  const existing = homeReviewsData.find(r => r.authorEmail === user.email);
  if (existing) { 
    toast('You have already left a store review. You can delete your old review to post a new one.', 'error'); 
    return; 
  }

  let name = document.getElementById('new-home-name').value.trim();
  const isAnon = document.getElementById('new-home-anon').checked;
  const rating = document.getElementById('new-home-rating').value;
  const text = document.getElementById('new-home-text').value.trim();
  
  if (!text) { toast('Please write your feedback before submitting.', 'error'); return; }
  
  const displayName = isAnon ? 'Anonymous' : (name || `${user.first} ${user.last}`);
  
  homeReviewsData.unshift({ 
    id: generateRevId(), 
    stars: Number(rating), 
    text: text, 
    author: displayName, 
    authorEmail: user.email, 
    verified: true, 
    interactedBy: {} 
  });
  
  document.getElementById('new-home-name').value = `${user.first} ${user.last}`;
  document.getElementById('new-home-anon').checked = false;
  document.getElementById('new-home-rating').value = '5';
  document.getElementById('new-home-text').value = '';
  document.getElementById('home-review-filter').value = 'all';
  
  renderHomeReviews('all');
  updateStoreStats(); // <-- PASTE IT RIGHT HERE
  toast('Thank you for sharing your experience!', 'info');
}

const originalOpenPdp = openPdp;
openPdp = function(id) {
  originalOpenPdp(id);
  document.getElementById('pdp-review-filter').value = 'all';
  renderProductReviews(id, 'all');
  
  const user = getCurrentUser();
  const nameInput = document.getElementById('new-pdp-name');
  if (nameInput) nameInput.value = user ? `${user.first} ${user.last}` : '';
  const anonCheck = document.getElementById('new-pdp-anon');
  if (anonCheck) anonCheck.checked = false;
};