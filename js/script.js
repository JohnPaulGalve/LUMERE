
/* ═══════════════ DATA ═══════════════ */
const products=[
  {id:1,emoji:'💧',img:'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/mhl/mhl55460/y/19.jpg',name:'Vitamin C Brightening Serum',brand:'Lumière Essentials',cat:'skincare',subcat:'serums',price:1290,orig:null,badge:'best',rating:4.8,desc:'Potent 20% Vitamin C with ferulic acid and niacinamide. Brightens skin, fades dark spots and strengthens the skin barrier. Suitable for all skin types.'},
  {id:2,emoji:'🌿',img:'https://images.ctfassets.net/bcjr30vxh6td/7L1dBnEwzelXZCrKc8P7FV/ff498b7ad151961bab4abc54130535ae/6811047-202307-carousel-1-2',name:'Hydra Boost Moisturizer',brand:'Dew & Glow',cat:'skincare',subcat:'moisturizers',price:890,orig:null,badge:'new',rating:4.6,desc:'24-hour deep hydration with hyaluronic acid, ceramides and shea butter. Non-greasy formula for all skin types.'},
  {id:3,emoji:'💎',img:'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/rna/rna02107/l/85.jpg',name:'Retinol Renewal Serum',brand:'Lumière Essentials',cat:'skincare',subcat:'serums',price:1580,orig:1980,badge:'sale',rating:4.7,desc:'0.5% encapsulated retinol for overnight renewal. Reduces fine lines, evens skin tone and boosts collagen production.'},
  {id:4,emoji:'🌸',img:'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/frh/frh15031/y/8.jpg',name:'Rose Facial Mist',brand:'Bloom Beauty',cat:'skincare',subcat:'moisturizers',price:520,orig:700,badge:'sale',rating:4.2,desc:'Refreshing rose water mist infused with hyaluronic acid and niacinamide. Sets makeup and hydrates on the go.'},
  {id:5,emoji:'💄',img:'https://armafbeaute.com/cdn/shop/files/6294015177022-2_ebf008f5-e5fe-47b4-8895-79057e8e37f5.jpg?v=1766735794',name:'Velvet Matte Lipstick',brand:'Lumière Couture',cat:'makeup',subcat:'lipstick',price:450,orig:600,badge:'sale',rating:4.5,desc:'Highly pigmented, transfer-proof matte lipstick in 24 shades. Comfortable formula with vitamin E for all-day color.'},
  {id:6,emoji:'✨',img:'https://beautybar.com.ph/cdn/shop/files/4733269_luminousfoundation_200w-lightwarm_1_edd3f5f7-38ad-41d0-b644-034d87c26ee5_2048x.jpg?v=1685164810',name:'Luminous Foundation',brand:'Lumière Couture',cat:'makeup',subcat:'foundation',price:1150,orig:null,badge:'new',rating:4.3,desc:'Buildable coverage with a natural skin-like finish. Available in 30 shades with SPF 25 protection.'},
  {id:7,emoji:'👁️',img:'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/77/3120292/2.jpg?7020',name:'Lengthening Mascara',brand:'Eye Envy',cat:'makeup',subcat:'eye makeup',price:380,orig:null,badge:'best',rating:4.4,desc:'Volumizing and lengthening mascara with a curved wand. Long-wearing, smudge-proof formula with lash-strengthening peptides.'},
  {id:8,emoji:'🧴',img:'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/827884/1.jpg?9303',name:'UV Shield SPF 50+',brand:'Soleil Protect',cat:'sunscreen',subcat:'sunscreen',price:680,orig:null,badge:'best',rating:4.7,desc:'Lightweight broad-spectrum sunscreen PA+++ protection. No white cast, perfect under makeup for daily use.'},
  {id:9,emoji:'🍃',img:'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/bgo/bgo55841/l/10.jpg',name:'Scalp Revival Shampoo',brand:'Mane Story',cat:'haircare',subcat:'shampoo',price:780,orig:null,badge:'new',rating:4.1,desc:'Charcoal and tea tree oil-infused shampoo that deeply cleanses the scalp, removes buildup and relieves itchiness.'},
  {id:10,emoji:'💫',img:'https://thebodyshop.com.ph/cdn/shop/files/1042599_SHEA_INTENSE_REPAIR_CONDITIONER_250ML_SILVER_INAGRPS281_d9536f15-da2b-425c-be83-e22a333547c5_1200x1200.jpg?v=1756669241',name:'Repair Conditioner',brand:'Mane Story',cat:'haircare',subcat:'conditioner',price:720,orig:null,badge:'best',rating:4.2,desc:'Protein-rich repair conditioner for damaged and color-treated hair. Restores strength, shine and smoothness.'},
  {id:11,emoji:'🌊',img:'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/rna/rna02050/l/34.jpg',name:'Argan Oil Hair Mask',brand:'Mane Story',cat:'haircare',subcat:'hair tools',price:950,orig:1200,badge:'sale',rating:4.6,desc:'Intensive overnight hair mask with argan oil and keratin. Repairs split ends, deeply moisturizes and adds brilliant shine.'},
  {id:12,emoji:'🌙',img:'https://static.beautytocare.com/media/catalog/product/o/n/one-thing-niacinamide-10-toner-150ml.jpg',name:'Niacinamide 10% Toner',brand:'Clear Skin Co.',cat:'skincare',subcat:'serums',price:640,orig:null,badge:'new',rating:4.5,desc:'10% niacinamide toner that minimizes pores, controls oil and evens skin tone. Gentle formula for daily use.'},
  {id:13,emoji:'🧴',img:'https://picsum.photos/seed/p13/800/800',name:'Gentle Foaming Cleanser',brand:'PureSkin',cat:'skincare',subcat:'cleansers',price:450,orig:null,badge:'new',rating:4.3,desc:'Mild foaming cleanser that removes impurities and makeup without stripping moisture.'},
  {id:14,emoji:'🧪',img:'https://picsum.photos/seed/p14/800/800',name:'Bakuchiol Night Serum',brand:'GlowLab',cat:'skincare',subcat:'serums',price:1390,orig:1790,badge:'sale',rating:4.6,desc:'A gentle retinol alternative that boosts radiance and reduces fine lines.'},
  {id:15,emoji:'🧴',img:'https://picsum.photos/seed/p15/800/800',name:'Shea Body Lotion',brand:'LushAura',cat:'skincare',subcat:'moisturizers',price:520,orig:null,badge:null,rating:4.0,desc:'Rich body lotion with shea butter for deep hydration and a silky finish.'},
  {id:16,emoji:'🛁',img:'https://picsum.photos/seed/p16/800/800',name:'Detox Clay Mask',brand:'SpaRitual',cat:'skincare',subcat:'masks',price:650,orig:850,badge:'sale',rating:4.2,desc:'Purifying clay mask that draws out impurities and refines pores.'},
  {id:17,emoji:'💧',img:'https://picsum.photos/seed/p17/800/800',name:'AHA Resurfacing Toner',brand:'RenewCo',cat:'skincare',subcat:'toners',price:720,orig:null,badge:'new',rating:4.4,desc:'Mild AHA toner that exfoliates and brightens skin texture.'},
  {id:18,emoji:'💅',img:'https://picsum.photos/seed/p18/800/800',name:'Quick Dry Top Coat',brand:'NailStudio',cat:'makeup',subcat:'nailcare',price:280,orig:null,badge:'best',rating:4.2,desc:'High-shine, quick-dry top coat for long-lasting manicure finishes.'},
  {id:19,emoji:'🖌️',img:'https://picsum.photos/seed/p19/800/800',name:'Pro Brush Set',brand:'ProBrush',cat:'makeup',subcat:'brushes',price:890,orig:1100,badge:'new',rating:4.7,desc:'Set of professional synthetic brushes for flawless makeup application.'},
  {id:20,emoji:'🌞',img:'https://picsum.photos/seed/p20/800/800',name:'Mineral SPF 50',brand:'SunGuard',cat:'sunscreen',subcat:'sunscreen',price:720,orig:900,badge:'best',rating:4.5,desc:'Broad-spectrum mineral sunscreen with no white cast, ideal under makeup.'},
  {id:21,emoji:'💇',img:'https://picsum.photos/seed/p21/800/800',name:'Thermal Protect Spray',brand:'HeatShield',cat:'haircare',subcat:'styling',price:560,orig:null,badge:null,rating:4.1,desc:'Lightweight heat protectant spray that shields hair up to 230°C.'},
  {id:22,emoji:'🌿',img:'https://picsum.photos/seed/p22/800/800',name:'Nourish Hair Elixir',brand:'Mane Story',cat:'haircare',subcat:'treatment',price:1190,orig:1400,badge:'sale',rating:4.6,desc:'Argan and jojoba oil blend to repair, smooth and add shine.'},
  {id:23,emoji:'🔧',img:'https://picsum.photos/seed/p23/800/800',name:'Ceramic Straightener',brand:'SleekPro',cat:'haircare',subcat:'hair tools',price:2590,orig:3490,badge:'new',rating:4.3,desc:'Digital ceramic straightener with adjustable heat settings and auto shutoff.'},
  {id:24,emoji:'🎨',img:'https://picsum.photos/seed/p24/800/800',name:'Eyeshadow Palette',brand:'Lumière Couture',cat:'makeup',subcat:'eye makeup',price:1550,orig:1990,badge:'best',rating:4.8,desc:'12-shade neutral palette with mattes and shimmers, highly pigmented.'},
  {id:25,emoji:'🧼',img:'https://picsum.photos/seed/p25/800/800',name:'Exfoliating Body Scrub',brand:'GlowLab',cat:'skincare',subcat:'bodycare',price:650,orig:null,badge:null,rating:4.4,desc:'Sugar-based scrub that buffs away dead skin for smooth, glowing results.'},
  // Additional products for subcategories
  {id:26,emoji:'🧴',img:'https://picsum.photos/seed/p26/800/800',name:'Hydrating Face Cream',brand:'GlowEssence',cat:'skincare',subcat:'moisturizers',price:650,orig:800,badge:'sale',rating:4.3,desc:'Cream for dry skin'},
  {id:27,emoji:'🧴',img:'https://picsum.photos/seed/p27/800/800',name:'Night Repair Cream',brand:'LunaCare',cat:'skincare',subcat:'moisturizers',price:850,orig:null,badge:'new',rating:4.5,desc:'Overnight repair'},
  {id:28,emoji:'🧴',img:'https://picsum.photos/seed/p28/800/800',name:'Oil-Free Moisturizer',brand:'PureSkin',cat:'skincare',subcat:'moisturizers',price:550,orig:null,badge:null,rating:4.1,desc:'For oily skin'},
  {id:29,emoji:'🧴',img:'https://picsum.photos/seed/p29/800/800',name:'Anti-Aging Cream',brand:'YouthGlow',cat:'skincare',subcat:'moisturizers',price:1200,orig:1500,badge:'best',rating:4.7,desc:'Reduces wrinkles'},
  {id:30,emoji:'💧',img:'https://picsum.photos/seed/p30/800/800',name:'Charcoal Mask',brand:'CleanFace',cat:'skincare',subcat:'masks',price:450,orig:null,badge:null,rating:4.2,desc:'Deep cleansing'},
  {id:31,emoji:'💧',img:'https://picsum.photos/seed/p31/800/800',name:'Hydrating Mask',brand:'AquaDerm',cat:'skincare',subcat:'masks',price:500,orig:600,badge:'sale',rating:4.4,desc:'Intense hydration'},
  {id:32,emoji:'💧',img:'https://picsum.photos/seed/p32/800/800',name:'Brightening Mask',brand:'LumiMask',cat:'skincare',subcat:'masks',price:600,orig:null,badge:'new',rating:4.3,desc:'Even skin tone'},
  {id:33,emoji:'💧',img:'https://picsum.photos/seed/p33/800/800',name:'Acne Treatment Mask',brand:'ClearSkin',cat:'skincare',subcat:'masks',price:550,orig:null,badge:null,rating:4.0,desc:'Fights acne'},
  {id:34,emoji:'💧',img:'https://picsum.photos/seed/p34/800/800',name:'Collagen Mask',brand:'FirmFace',cat:'skincare',subcat:'masks',price:700,orig:900,badge:'best',rating:4.6,desc:'Boosts collagen'},
  {id:35,emoji:'💧',img:'https://picsum.photos/seed/p35/800/800',name:'Calming Toner',brand:'SootheSkin',cat:'skincare',subcat:'toners',price:400,orig:null,badge:null,rating:4.1,desc:'Soothes irritation'},
  {id:36,emoji:'💧',img:'https://picsum.photos/seed/p36/800/800',name:'Pore Minimizing Toner',brand:'TightPore',cat:'skincare',subcat:'toners',price:450,orig:550,badge:'sale',rating:4.2,desc:'Tightens pores'},
  {id:37,emoji:'💧',img:'https://picsum.photos/seed/p37/800/800',name:'Vitamin C Toner',brand:'BrightTone',cat:'skincare',subcat:'toners',price:500,orig:null,badge:'new',rating:4.4,desc:'Brightens skin'},
  {id:38,emoji:'💧',img:'https://picsum.photos/seed/p38/800/800',name:'Hydrating Toner',brand:'MoistTone',cat:'skincare',subcat:'toners',price:380,orig:null,badge:null,rating:4.0,desc:'Adds moisture'},
  {id:39,emoji:'💧',img:'https://picsum.photos/seed/p39/800/800',name:'Exfoliating Toner',brand:'SmoothSkin',cat:'skincare',subcat:'toners',price:420,orig:500,badge:'best',rating:4.3,desc:'Gentle exfoliation'},
  {id:40,emoji:'💧',img:'https://picsum.photos/seed/p40/800/800',name:'Balancing Toner',brand:'pHBalance',cat:'skincare',subcat:'toners',price:360,orig:null,badge:null,rating:4.1,desc:'Balances pH'},
  {id:41,emoji:'🧴',img:'https://picsum.photos/seed/p41/800/800',name:'Body Lotion',brand:'SoftBody',cat:'skincare',subcat:'bodycare',price:450,orig:550,badge:'sale',rating:4.2,desc:'Softens skin'},
  {id:42,emoji:'🧴',img:'https://picsum.photos/seed/p42/800/800',name:'Body Oil',brand:'SilkOil',cat:'skincare',subcat:'bodycare',price:600,orig:null,badge:'new',rating:4.4,desc:'Nourishes deeply'},
  {id:43,emoji:'🧴',img:'https://picsum.photos/seed/p43/800/800',name:'Body Scrub',brand:'Exfoliate',cat:'skincare',subcat:'bodycare',price:500,orig:null,badge:null,rating:4.0,desc:'Removes dead skin'},
  {id:44,emoji:'🧴',img:'https://picsum.photos/seed/p44/800/800',name:'Body Butter',brand:'RichButter',cat:'skincare',subcat:'bodycare',price:700,orig:850,badge:'best',rating:4.5,desc:'Intense moisture'},
  {id:45,emoji:'🧴',img:'https://picsum.photos/seed/p45/800/800',name:'Body Mist',brand:'FreshMist',cat:'skincare',subcat:'bodycare',price:350,orig:null,badge:null,rating:4.1,desc:'Refreshing spray'},
  {id:46,emoji:'💅',img:'https://picsum.photos/seed/p46/800/800',name:'Nail Polish Remover',brand:'CleanNails',cat:'makeup',subcat:'nailcare',price:150,orig:null,badge:null,rating:4.0,desc:'Safe remover'},
  {id:47,emoji:'💅',img:'https://picsum.photos/seed/p47/800/800',name:'Base Coat',brand:'StrongBase',cat:'makeup',subcat:'nailcare',price:200,orig:null,badge:null,rating:4.1,desc:'Protects nails'},
  {id:48,emoji:'💅',img:'https://picsum.photos/seed/p48/800/800',name:'Top Coat',brand:'ShineTop',cat:'makeup',subcat:'nailcare',price:250,orig:300,badge:'sale',rating:4.3,desc:'Adds shine'},
  {id:49,emoji:'💅',img:'https://picsum.photos/seed/p49/800/800',name:'Cuticle Oil',brand:'NourishCut',cat:'makeup',subcat:'nailcare',price:180,orig:null,badge:'new',rating:4.2,desc:'Softens cuticles'},
  {id:50,emoji:'💅',img:'https://picsum.photos/seed/p50/800/800',name:'Nail Strengthener',brand:'HardNails',cat:'makeup',subcat:'nailcare',price:300,orig:null,badge:null,rating:4.4,desc:'Strengthens nails'},
  {id:51,emoji:'💅',img:'https://picsum.photos/seed/p51/800/800',name:'Color Polish',brand:'VividColor',cat:'makeup',subcat:'nailcare',price:220,orig:null,badge:'best',rating:4.5,desc:'Vibrant colors'},
  {id:52,emoji:'🖌️',img:'https://picsum.photos/seed/p52/800/800',name:'Foundation Brush',brand:'BlendPro',cat:'makeup',subcat:'brushes',price:400,orig:500,badge:'sale',rating:4.3,desc:'Smooth application'},
  {id:53,emoji:'🖌️',img:'https://picsum.photos/seed/p53/800/800',name:'Eyeshadow Brush',brand:'ShadowBlend',cat:'makeup',subcat:'brushes',price:250,orig:null,badge:null,rating:4.1,desc:'Blends shadows'},
  {id:54,emoji:'🖌️',img:'https://picsum.photos/seed/p54/800/800',name:'Lip Brush',brand:'LipPerfect',cat:'makeup',subcat:'brushes',price:150,orig:null,badge:'new',rating:4.0,desc:'Precise lips'},
  {id:55,emoji:'🖌️',img:'https://picsum.photos/seed/p55/800/800',name:'Blush Brush',brand:'CheekGlow',cat:'makeup',subcat:'brushes',price:300,orig:null,badge:null,rating:4.2,desc:'Applies blush'},
  {id:56,emoji:'🖌️',img:'https://picsum.photos/seed/p56/800/800',name:'Powder Brush',brand:'SoftPowder',cat:'makeup',subcat:'brushes',price:350,orig:450,badge:'best',rating:4.4,desc:'Sets powder'},
  {id:57,emoji:'🖌️',img:'https://picsum.photos/seed/p57/800/800',name:'Brush Set',brand:'AllInOne',cat:'makeup',subcat:'brushes',price:800,orig:1000,badge:'sale',rating:4.6,desc:'Complete set'},
  {id:58,emoji:'👁️',img:'https://picsum.photos/seed/p58/800/800',name:'Mascara',brand:'LongLash',cat:'makeup',subcat:'eye makeup',price:350,orig:450,badge:'sale',rating:4.4,desc:'Lengthens lashes'},
  {id:59,emoji:'👁️',img:'https://picsum.photos/seed/p59/800/800',name:'Eyeliner',brand:'SharpLine',cat:'makeup',subcat:'eye makeup',price:250,orig:null,badge:'new',rating:4.2,desc:'Defines eyes'},
  {id:60,emoji:'👁️',img:'https://picsum.photos/seed/p60/800/800',name:'Eyeshadow',brand:'ColorEye',cat:'makeup',subcat:'eye makeup',price:400,orig:null,badge:null,rating:4.3,desc:'Colorful shadows'},
  {id:61,emoji:'👁️',img:'https://picsum.photos/seed/p61/800/800',name:'Brow Pencil',brand:'BrowShape',cat:'makeup',subcat:'eye makeup',price:200,orig:null,badge:null,rating:4.1,desc:'Shapes brows'},
  {id:62,emoji:'👁️',img:'https://picsum.photos/seed/p62/800/800',name:'Eye Primer',brand:'StayPut',cat:'makeup',subcat:'eye makeup',price:300,orig:400,badge:'best',rating:4.5,desc:'Holds makeup'},
  {id:63,emoji:'✂️',img:'https://picsum.photos/seed/p63/800/800',name:'Hair Spray',brand:'HoldStyle',cat:'haircare',subcat:'styling',price:250,orig:300,badge:'sale',rating:4.2,desc:'Holds style'},
  {id:64,emoji:'✂️',img:'https://picsum.photos/seed/p64/800/800',name:'Hair Gel',brand:'StrongGel',cat:'haircare',subcat:'styling',price:200,orig:null,badge:null,rating:4.0,desc:'Strong hold'},
  {id:65,emoji:'✂️',img:'https://picsum.photos/seed/p65/800/800',name:'Hair Wax',brand:'Texturize',cat:'haircare',subcat:'styling',price:300,orig:null,badge:'new',rating:4.3,desc:'Adds texture'},
  {id:66,emoji:'✂️',img:'https://picsum.photos/seed/p66/800/800',name:'Hair Mousse',brand:'VolumeUp',cat:'haircare',subcat:'styling',price:280,orig:null,badge:null,rating:4.1,desc:'Adds volume'},
  {id:67,emoji:'✂️',img:'https://picsum.photos/seed/p67/800/800',name:'Hair Pomade',brand:'ShinePom',cat:'haircare',subcat:'styling',price:350,orig:450,badge:'best',rating:4.4,desc:'Shiny finish'},
  {id:68,emoji:'✂️',img:'https://picsum.photos/seed/p68/800/800',name:'Hair Clay',brand:'MatteClay',cat:'haircare',subcat:'styling',price:320,orig:null,badge:null,rating:4.2,desc:'Matte look'},
  {id:69,emoji:'🌿',img:'https://picsum.photos/seed/p69/800/800',name:'Hair Mask',brand:'DeepTreat',cat:'haircare',subcat:'treatment',price:600,orig:750,badge:'sale',rating:4.5,desc:'Deep conditioning'},
  {id:70,emoji:'🌿',img:'https://picsum.photos/seed/p70/800/800',name:'Hair Serum',brand:'SmoothSerum',cat:'haircare',subcat:'treatment',price:450,orig:null,badge:'new',rating:4.3,desc:'Smooths hair'},
  {id:71,emoji:'🌿',img:'https://picsum.photos/seed/p71/800/800',name:'Hair Oil',brand:'NourishOil',cat:'haircare',subcat:'treatment',price:500,orig:null,badge:null,rating:4.2,desc:'Nourishes scalp'},
  {id:72,emoji:'🌿',img:'https://picsum.photos/seed/p72/800/800',name:'Hair Repair Cream',brand:'FixHair',cat:'haircare',subcat:'treatment',price:550,orig:700,badge:'best',rating:4.6,desc:'Repairs damage'},
  {id:73,emoji:'🌿',img:'https://picsum.photos/seed/p73/800/800',name:'Scalp Treatment',brand:'CleanScalp',cat:'haircare',subcat:'treatment',price:400,orig:null,badge:null,rating:4.1,desc:'Treats scalp'},
  {id:74,emoji:'🌿',img:'https://picsum.photos/seed/p74/800/800',name:'Hair Growth Serum',brand:'GrowHair',cat:'haircare',subcat:'treatment',price:650,orig:null,badge:null,rating:4.4,desc:'Promotes growth'},
  {id:75,emoji:'🔧',img:'https://picsum.photos/seed/p75/800/800',name:'Hair Dryer',brand:'QuickDry',cat:'haircare',subcat:'hair tools',price:1500,orig:2000,badge:'sale',rating:4.3,desc:'Fast drying'},
  {id:76,emoji:'🔧',img:'https://picsum.photos/seed/p76/800/800',name:'Curling Iron',brand:'CurlPro',cat:'haircare',subcat:'hair tools',price:800,orig:null,badge:'new',rating:4.2,desc:'Perfect curls'},
  {id:77,emoji:'🔧',img:'https://picsum.photos/seed/p77/800/800',name:'Straightener',brand:'StraightHair',cat:'haircare',subcat:'hair tools',price:1200,orig:1500,badge:'best',rating:4.5,desc:'Smooth hair'},
  {id:78,emoji:'🔧',img:'https://picsum.photos/seed/p78/800/800',name:'Hair Brush',brand:'BrushWell',cat:'haircare',subcat:'hair tools',price:250,orig:null,badge:null,rating:4.0,desc:'Detangles hair'},
  {id:79,emoji:'🔧',img:'https://picsum.photos/seed/p79/800/800',name:'Diffuser',brand:'WaveDiff',cat:'haircare',subcat:'hair tools',price:300,orig:null,badge:null,rating:4.1,desc:'For waves'},
  {id:80,emoji:'🔧',img:'https://picsum.photos/seed/p80/800/800',name:'Hair Clips',brand:'HoldClip',cat:'haircare',subcat:'hair tools',price:100,orig:null,badge:null,rating:4.0,desc:'Holds sections'},
  {id:81,emoji:'🌞',img:'https://picsum.photos/seed/p81/800/800',name:'SPF 30 Lotion',brand:'SunSafe',cat:'sunscreen',subcat:'sunscreen',price:400,orig:500,badge:'sale',rating:4.2,desc:'Daily protection'},
  {id:82,emoji:'🌞',img:'https://picsum.photos/seed/p82/800/800',name:'SPF 50 Spray',brand:'SpraySun',cat:'sunscreen',subcat:'sunscreen',price:450,orig:null,badge:'new',rating:4.3,desc:'Easy application'},
  {id:83,emoji:'🌞',img:'https://picsum.photos/seed/p83/800/800',name:'SPF 40 Stick',brand:'StickSun',cat:'sunscreen',subcat:'sunscreen',price:350,orig:null,badge:null,rating:4.1,desc:'For face'},
];

const services=[
  {emoji:'✂️',name:'Haircut & Styling',cat:'hair',price:'from ₱350',desc:'Precision cuts by expert stylists'},
  {emoji:'🎨',name:'Hair Coloring',cat:'hair',price:'from ₱1,200',desc:'Single color, highlights & balayage'},
  {emoji:'🌸',name:'Classic Facial',cat:'facial',price:'from ₱600',desc:'Deep cleansing for all skin types'},
  {emoji:'✨',name:'Brightening Facial',cat:'facial',price:'from ₱950',desc:'Vitamin C brightening treatment'},
  {emoji:'💅',name:'Gel Manicure',cat:'nails',price:'from ₱550',desc:'Long-lasting gel color'},
  {emoji:'🦶',name:'Pedicure & Foot Spa',cat:'nails',price:'from ₱400',desc:'Relaxing foot treatment'},
  {emoji:'🧖',name:'Swedish Massage',cat:'spa',price:'from ₱1,200',desc:'Full body relaxation'},
  {emoji:'🛁',name:'Aromatherapy',cat:'spa',price:'from ₱1,500',desc:'Essential oil body treatment'},
];

let cart=[], currentPdp=null, bkSvc='', bkSvcPrice='', sFilterType='all', coStep=1;
let productFilters = {cat:'all', sub:null, minPrice:null, maxPrice:null, minRating:0};

/* ═══════════════ NAVIGATION ═══════════════ */
const navIds={home:'nl-home',products:'nl-products',services:'nl-services',booking:'nl-booking',account:'nl-account'};
function go(page){
  const currentUser = getCurrentUser();
  if(page==='account' && !currentUser){
    toast('Please sign in to access your account.','error');
    page='login';
  }
  if((page==='login' || page==='register') && currentUser){
    toast('You are already signed in.','info');
    page='account';
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el=document.getElementById('page-'+page);
  if(el){el.classList.add('active');window.scrollTo({top:0,behavior:'smooth'})}
  document.querySelectorAll('.nl').forEach(l=>l.classList.remove('active'));
  if(navIds[page])document.getElementById(navIds[page])?.classList.add('active');
  if(page==='products')renderProdGrid('prod-grid','all');
  if(page==='cart')renderCartPage();
  if(page==='checkout'){renderCheckoutSidebar();coGoto(1);}
  if(page==='account'){renderWishlist();showTab('dashboard');updateAccountUI();}
  closeMob();
}
function toggleMob(){document.getElementById('mob-menu').classList.toggle('open');document.getElementById('burger').classList.toggle('open')}
function closeMob(){document.getElementById('mob-menu').classList.remove('open');document.getElementById('burger').classList.remove('open')}
function navSearch(){const q=document.getElementById('nav-q').value.trim();if(q){document.getElementById('s-input').value=q;go('search');doSearch()}}
function mobSearch(){const q=document.getElementById('mob-q').value.trim();if(q){document.getElementById('s-input').value=q;go('search');doSearch()}}

/* ═══════════════ PRODUCT CARD ═══════════════ */
function pCard(p){
  const bdg = p.badge ? `<span class="pc-badge badge-${p.badge}">${p.badge}</span>` : '';
  const orig = p.orig ? `<span class="pc-orig">₱${p.orig}</span>` : '';
  const imgContent = p.img ? `<img src="${p.img}" alt="${p.name}">` : '';
  const rating = typeof p.rating === 'number' ? p.rating : 0;
  const rRounded = Math.round(rating);
  const stars = '★'.repeat(rRounded) + '☆'.repeat(5 - rRounded);
  const ratingHtml = `<div class="pc-stars">${stars}<span style="font-size:11px;color:var(--muted);margin-left:6px">${rating.toFixed(1)}</span></div>`;
  return `<div class="pc" onclick="openPdp(${p.id})">
    <div class="pc-img">${bdg}${imgContent}
      <div class="pc-actions">
        <button class="pca-cart" onclick="event.stopPropagation();quickAdd(${p.id})">Add to Cart</button>
        <button class="pca-wish" onclick="event.stopPropagation();toast('Added to wishlist ♡','info')" title="Wishlist">♡</button>
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
  // Update sidebar counts (data-cat)
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
  go('pdp');
}
function setThumb(el,e){document.querySelectorAll('.pdp-thumb').forEach(t=>t.classList.remove('active'));el.classList.add('active');document.getElementById('pdp-main-img').textContent=e}
function adjQty(d){const i=document.getElementById('pdp-qty');i.value=Math.max(1,Math.min(99,+i.value+d))}
function pdpAddCart(){if(!currentPdp)return;const qty=+document.getElementById('pdp-qty').value;for(let i=0;i<qty;i++)addToCart(currentPdp);const b=document.getElementById('pdp-atc');b.textContent='✓ Added!';setTimeout(()=>b.textContent='Add to Cart',1400)}
function pdpBuyNow(){if(!currentPdp)return;addToCart(currentPdp);go('checkout')}
function toggleAcc(hdr){hdr.closest('.acc-item').classList.toggle('open')}

/* ═══════════════ CATEGORY / FILTER ═══════════════ */
function catFilter(cat, el){
  productFilters.cat = cat;
  // clear tabs and category sidebar active
  document.querySelectorAll('.ct').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('#cat-list .fo').forEach(f=>f.classList.remove('active'));
  if(el && el.classList.contains('ct')) el.classList.add('active');
  else if(el && el.classList.contains('fo')) el.classList.add('active');
  else { document.querySelector(`.ct[data-cat="${cat}"]`)?.classList.add('active'); document.querySelector(`#cat-list .fo[data-cat="${cat}"]`)?.classList.add('active'); }
  renderProdGrid('prod-grid',cat);
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
  productFilters = {cat:'all', minPrice:null, maxPrice:null, minRating:0};
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
function doSearch(){
  const q=(document.getElementById('s-input').value||'').toLowerCase().trim();
  const sort=document.getElementById('s-sort').value;
  let prods=products.filter(p=>p.name.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)||p.brand.toLowerCase().includes(q)||p.subcat.toLowerCase().includes(q));
  let svcs=services.filter(s=>s.name.toLowerCase().includes(q)||s.cat.toLowerCase().includes(q)||s.desc.toLowerCase().includes(q));
  if(sFilterType==='products')svcs=[];
  if(sFilterType==='services')prods=[];
  if(sort==='price-asc')prods.sort((a,b)=>a.price-b.price);
  if(sort==='price-desc')prods.sort((a,b)=>b.price-a.price);
  if(sort==='name')prods.sort((a,b)=>a.name.localeCompare(b.name));
  const total=prods.length+svcs.length;
  document.getElementById('s-count').textContent=q?`${total} result${total!==1?'s':''}`:' ';
  document.getElementById('sr-products').innerHTML=prods.map(pCard).join('');
  document.getElementById('sr-prod-label').classList.toggle('hide',prods.length===0||!q);
  document.getElementById('sr-services').innerHTML=svcs.map(s=>`<div class="s-service-result" onclick="go('services');showPanel('${s.cat}')"><div class="ssr-icon">${s.emoji}</div><div><div class="ssr-name">${s.name}</div><div class="ssr-meta">${s.desc}</div><div class="ssr-tag">Service · ${s.cat}</div></div><div class="ssr-price">${s.price}</div></div>`).join('');
  document.getElementById('sr-svc-label').classList.toggle('hide',svcs.length===0||!q);
  document.getElementById('s-empty').classList.toggle('hide',total>0||!q);
}
function qs(term){document.getElementById('s-input').value=term;doSearch()}
function clearSearch(){document.getElementById('s-input').value='';document.getElementById('s-count').textContent='';document.getElementById('sr-products').innerHTML='';document.getElementById('sr-services').innerHTML='';document.getElementById('sr-prod-label').classList.add('hide');document.getElementById('sr-svc-label').classList.add('hide');document.getElementById('s-empty').classList.add('hide')}
function sFilter(type,btn){sFilterType=type;document.querySelectorAll('.f-chip').forEach(c=>c.classList.remove('active'));btn.classList.add('active');doSearch()}

/* ═══════════════ SERVICES ═══════════════ */
function showPanel(id){
  document.querySelectorAll('.svc-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.stab').forEach(t=>t.classList.remove('active'));
  document.getElementById('panel-'+id)?.classList.add('active');
  document.getElementById('st-'+id)?.classList.add('active');
}

/* ═══════════════ CART ═══════════════ */
function addToCart(p){const ex=cart.find(i=>i.id===p.id);if(ex)ex.qty++;else cart.push({...p,qty:1});updateBadge();toast(`${p.name} added to cart!`,'info')}
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
  body.innerHTML=cart.map(i=>`<div class="ci"><div class="ci-img">${i.emoji}</div><div class="ci-info"><div class="ci-name">${i.name}</div><div class="ci-brand">${i.brand}</div>
    <!-- Product Info: Price, Quantity -->
    <div class="ci-row"><div class="ci-qty-ctrl"><button class="cqb" onclick="chQty(${i.id},-1)">−</button><div class="cqn">${i.qty}</div><button class="cqb" onclick="chQty(${i.id},1)">+</button></div><div class="ci-price">₱${(i.price*i.qty).toLocaleString()}</div></div>
    <!-- Remove -->
    <button class="ci-rm" onclick="rmCart(${i.id})">Remove</button></div></div>`).join('');
  const sub=cart.reduce((s,i)=>s+(i.price*i.qty),0);
  const ship=sub>=1500?0:150;
  document.getElementById('cp-sub2').textContent='₱'+sub.toLocaleString();
  document.getElementById('cp-ship2').textContent=ship===0?'Free':'₱150';
  document.getElementById('cp-total2').textContent='₱'+(sub+ship).toLocaleString();
}
function chQty(id,d){const it=cart.find(i=>i.id===id);if(it){it.qty+=d;if(it.qty<=0)cart=cart.filter(i=>i.id!==id)}updateBadge();renderCartPanel()}
function rmCart(id){cart=cart.filter(i=>i.id!==id);updateBadge();renderCartPanel();renderCartPage()}

/* ═══════════════ CART PAGE ═══════════════ */
function renderCartPage(){
  const el=document.getElementById('cart-page-items');
  if(!cart.length){el.innerHTML=`<div style="text-align:center;padding:56px 20px;color:var(--muted)"><div style="font-size:40px;margin-bottom:12px">🛍</div><div style="font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:300;margin-bottom:8px">Your cart is empty</div><button class="btn btn-primary" onclick="go('products')" style="margin-top:8px">Start Shopping</button></div>`;document.getElementById('cp-sub').textContent='₱0';document.getElementById('cp-ship').textContent='₱150';document.getElementById('cp-total').textContent='₱150';return}
  el.innerHTML=cart.map(i=>`<div class="cpi-row"><div class="cpi-product"><div class="cpi-img">${i.emoji}</div><div><div class="cpi-name">${i.name}</div><div class="cpi-brand">${i.brand}</div></div></div><div class="cpi-price">₱${i.price.toLocaleString()}</div><div><div class="cpi-qty2"><button class="cqb2" onclick="chQtyPage(${i.id},-1)">−</button><div class="cqn2">${i.qty}</div><button class="cqb2" onclick="chQtyPage(${i.id},1)">+</button></div></div><div class="cpi-subtotal">₱${(i.price*i.qty).toLocaleString()}</div><button class="cpi-rm" onclick="rmCartPage(${i.id})">✕</button></div>`).join('');
  const sub=cart.reduce((s,i)=>s+(i.price*i.qty),0);const ship=sub>=1500?0:150;
  document.getElementById('cp-sub').textContent='₱'+sub.toLocaleString();
  document.getElementById('cp-ship').textContent=ship===0?'Free ✓':'₱150';
  document.getElementById('cp-total').textContent='₱'+(sub+ship).toLocaleString();
}
function chQtyPage(id,d){const it=cart.find(i=>i.id===id);if(it){it.qty+=d;if(it.qty<=0)cart=cart.filter(i=>i.id!==id)}updateBadge();renderCartPage()}
function rmCartPage(id){cart=cart.filter(i=>i.id!==id);updateBadge();renderCartPage();toast('Item removed','error')}

/* ═══════════════ CHECKOUT ═══════════════ */
function coGoto(step){
  coStep=step;
  [1,2,3,4].forEach(s=>{
    document.getElementById('co-step-'+s)?.classList.toggle('hide',s!==step);
    const cs=document.getElementById('cos-'+s);if(!cs)return;
    cs.classList.toggle('active',s===step);cs.classList.toggle('done',s<step);
  });
}
function coNext(step){coGoto(step)}
function renderCheckoutSidebar(){
  const el=document.getElementById('co-sidebar-items');
  if(!cart.length){el.innerHTML='<p style="font-size:13px;color:var(--muted)">No items</p>';return}
  el.innerHTML=cart.map(i=>`<div class="os-item"><div class="os-img">${i.emoji}</div><div><div class="os-name">${i.name}</div><div class="os-qty">×${i.qty}</div></div><div class="os-price">₱${(i.price*i.qty).toLocaleString()}</div></div>`).join('');
  const sub=cart.reduce((s,i)=>s+(i.price*i.qty),0);const ship=sub>=1500?0:150;
  document.getElementById('cos-sub').textContent='₱'+sub.toLocaleString();
  document.getElementById('cos-total').textContent='₱'+(sub+ship).toLocaleString();
  // review step
  const rv=document.getElementById('co-review-items');if(rv)rv.innerHTML=cart.map(i=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);font-size:14px"><span>${i.emoji} ${i.name} ×${i.qty}</span><span style="color:var(--terra);font-weight:500">₱${(i.price*i.qty).toLocaleString()}</span></div>`).join('');
  const rs=document.getElementById('co-rev-sub');const rt=document.getElementById('co-rev-total');
  if(rs)rs.textContent='₱'+sub.toLocaleString();if(rt)rt.textContent='₱'+(sub+150).toLocaleString();
}
function selPay(el){document.querySelectorAll('.pay-opt').forEach(o=>o.classList.remove('selected'));el.classList.add('selected');el.querySelector('input').checked=true;document.getElementById('card-fields').style.display=el.textContent.includes('Card')?'block':'none'}
function placeOrder(){
  const btn=document.getElementById('place-order-btn');btn.textContent='Processing…';btn.disabled=true;
  setTimeout(()=>{cart=[];updateBadge();btn.textContent='Place Order';btn.disabled=false;toast('Order placed! Thank you 🎉','info');go('account');setTimeout(()=>showTab('orders'),300)},1800);
}

/* ═══════════════ BOOKING ═══════════════ */
function selectBkSvc(name,price){bkSvc=name;bkSvcPrice=price;document.querySelectorAll('.svc-opt').forEach(o=>o.classList.remove('selected'));document.querySelectorAll('.svc-opt').forEach(o=>{if(o.querySelector('.so-name').textContent===name.replace(/^[^ ]+ /,''))o.classList.add('selected')});bkNext(2)}
function selOpt(el,name,price){document.querySelectorAll('.svc-opt').forEach(o=>o.classList.remove('selected'));el.classList.add('selected');bkSvc=name;bkSvcPrice=price}
function bkNext(step){
  if(step===2&&!bkSvc){toast('Please select a service','error');return}
  if(step===3){const d=document.getElementById('bk-date').value;const t=document.getElementById('bk-time').value;const n=document.getElementById('bk-notes').value;document.getElementById('c-svc').textContent=bkSvc;document.getElementById('c-date').textContent=d||'Not selected';document.getElementById('c-time').textContent=t;document.getElementById('c-price').textContent=bkSvcPrice;document.getElementById('c-notes').textContent=n||'None'}
  [1,2,3].forEach(s=>{document.getElementById('bk-'+s).classList.toggle('hide',s!==step);const bs=document.getElementById('bks-'+s);bs.classList.toggle('active',s===step);bs.classList.toggle('done',s<step)});
}
function confirmBk(){
  const btn=document.getElementById('confirm-bk-btn');btn.textContent='Confirming…';btn.disabled=true;
  setTimeout(()=>{btn.textContent='Confirm Appointment';btn.disabled=false;toast('Appointment confirmed! 🎉','info');go('account');setTimeout(()=>showTab('bookings'),300);bkSvc='';bkSvcPrice='';document.querySelectorAll('.svc-opt').forEach(o=>o.classList.remove('selected'));bkNext(1)},1500);
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
  users[email]={first,last,email,password,phone:'',birthday:''};
  saveUsers(users);
  setCurrentUser(email);
  updateAccountUI();
  toast('Account created successfully!','info');
  go('account');
}
function logout(){
  clearCurrentUser();
  toast('You have been logged out.','info');
  go('login');
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
}
function saveProfileChanges(){
  const user=getCurrentUser();
  if(!user){toast('No user is currently signed in.','error');return;}
  const first=document.getElementById('profile-first').value.trim();
  const last=document.getElementById('profile-last').value.trim();
  const phone=document.getElementById('profile-phone').value.trim();
  const birthday=document.getElementById('profile-birthday').value;
  if(!first||!last){toast('Please enter your first and last name.','error');return;}
  const users=getUsers();
  users[user.email] = {...user,first,last,phone,birthday};
  saveUsers(users);
  setCurrentUser(user.email);
  updateAccountUI();
  toast('Profile updated successfully!','info');
}

/* ═══════════════ ACCOUNT ═══════════════ */
function showTab(tab){document.querySelectorAll('.acc-pg').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.ani').forEach(n=>n.classList.remove('active'));document.getElementById('tab-'+tab)?.classList.add('active');document.getElementById('an-'+tab)?.classList.add('active')}
function renderWishlist(){
  const el=document.getElementById('wishlist-grid');
  if(!el) return;
  el.innerHTML = products.slice(0,6).map(p => {
    const bdg = p.badge ? `<span class="pc-badge badge-${p.badge}">${p.badge}</span>` : '';
    return `
    <div class="pc" onclick="openPdp(${p.id})">
      <div class="pc-img">
        ${bdg}${p.img ? `<img src="${p.img}" alt="${p.name}">` : ''}
        <div class="pc-actions">
          <button class="pca-cart" onclick="event.stopPropagation();quickAdd(${p.id})">Add to Cart</button>
          <button class="pca-wish" onclick="event.stopPropagation();this.closest('.pc').remove();toast('Removed from wishlist','error')">✕</button>
        </div>
      </div>
      <div class="pc-info">
        <div class="pc-name">${p.name}</div>
        <div class="pc-price-row"><span class="pc-price">₱${p.price.toLocaleString()}</span></div>
      </div>
    </div>
  `;}).join('');
}

/* ═══════════════ TOAST ═══════════════ */
function toast(msg,type='info'){
  const c=document.getElementById('toast-wrap');
  const t=document.createElement('div');t.className=`toast t-${type}`;
  t.innerHTML=`<span class="toast-ico">${type==='info'?'✓':type==='error'?'✕':'★'}</span><span class="toast-msg">${msg}</span><button class="toast-x" onclick="this.parentElement.remove()">×</button>`;
  c.appendChild(t);requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add('show')));
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),400)},3400);
}

/* ═══════════════ INIT ═══════════════ */
document.getElementById('home-bestsellers').innerHTML=products.filter(p=>p.badge==='best').map(pCard).join('');
document.getElementById('min-price').oninput = function() { productFilters.minPrice = this.value ? +this.value : null; renderProdGrid('prod-grid'); };
document.getElementById('max-price').oninput = function() { productFilters.maxPrice = this.value ? +this.value : Infinity; renderProdGrid('prod-grid'); };
document.getElementById('min-rating').onchange = function() { productFilters.minRating = this.value ? +this.value : 0; renderProdGrid('prod-grid'); };
document.getElementById('home-featured').innerHTML=products.filter(p=>p.badge==='new').map(pCard).join('');
document.getElementById('deals-grid').innerHTML=products.filter(p=>p.badge==='sale'||p.orig).map(pCard).join('');
updateCategoryCounts();
renderProdGrid('prod-grid','all');
renderCartPage();
renderWishlist();
updateAccountUI();
