export const BEAN_ORIGINS = [
  {
    id: 'ethiopia-guji',
    name: 'Ethiopia Guji Uraga',
    region: 'Oromia, Guji Zone',
    altitude: '2,150 – 2,300m',
    process: 'Natural / Sun-Dried',
    roastLevel: 'Light Roast',
    roastScore: 2, // 1 to 5
    flavorNotes: ['Bergamot', 'Ripe Peach', 'Jasmine Blossom', 'Wild Honey'],
    description: 'Vibrant, tea-like body with sparkling citrus acidity and a lingering honeysuckle finish. Roasted specifically for delicate pour-overs.',
    pricePerBag: 21.00,
    bagWeight: '250g Whole Bean',
    harvest: 'Current Crop',
    producer: 'Uraga Smallholder Farmers',
  },
  {
    id: 'colombia-pink-bourbon',
    name: 'Colombia Huila Pink Bourbon',
    region: 'San Adolfo, Huila',
    altitude: '1,750 – 1,900m',
    process: 'Double Anaerobic Washed',
    roastLevel: 'Light-Medium',
    roastScore: 3,
    flavorNotes: ['Pink Grapefruit', 'Papaya', 'Brown Sugar', 'Crisp Red Apple'],
    description: 'Exceptional rare Pink Bourbon varietal featuring tropical stone fruit complexity, luminous balance, and silky cane sugar sweetness.',
    pricePerBag: 23.50,
    bagWeight: '250g Whole Bean',
    harvest: 'Spring Harvest',
    producer: 'Finca La Esperanza',
  },
  {
    id: 'guatemala-antigua',
    name: 'Guatemala Finca Medina',
    region: 'Antigua Valley',
    altitude: '1,600m',
    process: 'Washed, Patio Dried',
    roastLevel: 'Medium Roast',
    roastScore: 3.5,
    flavorNotes: ['Dark Chocolate Truffle', 'Roasted Almond', 'Mandarin Orange', 'Toffee'],
    description: 'Volcanic rich soil imparts velvety mouthfeel, deep cacao undertones, and a gentle citrus acidity that pairs sublimely with steamed oat milk.',
    pricePerBag: 19.50,
    bagWeight: '250g Whole Bean',
    harvest: 'Current Crop',
    producer: 'Medina Family Estate',
  },
  {
    id: 'sumatra-kerinci',
    name: 'Sumatra Kerinci Highlands',
    region: 'Mount Kerinci, Jambi',
    altitude: '1,500m',
    process: 'Wet-Hulled (Giling Basah)',
    roastLevel: 'Medium-Dark',
    roastScore: 4.5,
    flavorNotes: ['Cedar', 'Dark Forest Berry', 'Black Cardamom', 'Molasses'],
    description: 'Intense syrupy body with earthy herbal spice notes and lush dark molasses sweetness. Perfect for espresso and immersion brewing.',
    pricePerBag: 20.00,
    bagWeight: '250g Whole Bean',
    harvest: 'Autumn Crop',
    producer: 'ALKO Koerintji Cooperative',
  },
  {
    id: 'atelier-house-blend',
    name: 'Atelier Signature House Blend',
    region: 'Ethiopia Guji (40%) & Colombia Huila (60%)',
    altitude: '1,800m avg',
    process: 'Curated Dual Process',
    roastLevel: 'Medium Balanced',
    roastScore: 3,
    flavorNotes: ['Caramelized Fig', 'Milk Chocolate', 'Toasted Hazelnut', 'Sweet Orange'],
    description: 'Our everyday flagship espresso profile. Engineered for flawless balance: velvety crema, rich chocolate base, and subtle fruit aromatics.',
    pricePerBag: 18.00,
    bagWeight: '300g Whole Bean',
    harvest: 'Continuous Fresh Batch',
    producer: 'Atelier Roasting Lab',
  }
];

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Full Menu' },
  { id: 'espresso', label: 'Espresso Bar' },
  { id: 'pourover', label: 'Slow Pour-Over' },
  { id: 'cold', label: 'Cold Bar & Tonics' },
  { id: 'specialty', label: 'Signatures & Elixirs' },
  { id: 'bakery', label: 'Oven & Bakery' },
  { id: 'beans', label: 'Whole Bean Bags' }
];

export const MENU_ITEMS = [
  {
    id: 'atelier-flat-white',
    name: 'Atelier Velvet Flat White',
    category: 'espresso',
    categoryLabel: 'Espresso Bar',
    price: 5.25,
    description: 'Double ristretto shot pulled on our custom Synesso with glossy, micro-textured steamed whole or oat milk.',
    tastingNotes: ['Sweet Milk Chocolate', 'Roasted Praline', 'Silky Crema'],
    calories: '140 kcal',
    sizes: [
      { id: 'small', label: '6 oz Traditional', extra: 0 },
      { id: 'medium', label: '8 oz Standard', extra: 0.50 }
    ],
    defaultBean: 'atelier-house-blend',
    allowsCustomBeans: true,
    isPopular: true,
    badge: 'Signature Barista Craft'
  },
  {
    id: 'cortado-caramelo',
    name: 'Gibraltar Cortado',
    category: 'espresso',
    categoryLabel: 'Espresso Bar',
    price: 4.75,
    description: 'Equal parts single-origin espresso and lightly textured steamed milk served in a heavy Libbey Gibraltar faceted glass.',
    tastingNotes: ['Cacao Nibs', 'Toasted Almond', 'Warm Biscuit'],
    calories: '80 kcal',
    sizes: [
      { id: 'standard', label: '4.5 oz Glass', extra: 0 }
    ],
    defaultBean: 'guatemala-antigua',
    allowsCustomBeans: true,
    isPopular: false,
    badge: 'Single Origin'
  },
  {
    id: 'single-origin-espresso',
    name: 'Handcrafted Single Origin Espresso',
    category: 'espresso',
    categoryLabel: 'Espresso Bar',
    price: 4.00,
    description: 'Precision double shot extracted at 9 bars with 18g in, 38g out in 28 seconds. Served with sparkling mineral water palate cleanser.',
    tastingNotes: ['Stone Fruit', 'Luminous Brightness', 'Molasses Sweetness'],
    calories: '5 kcal',
    sizes: [
      { id: 'double', label: 'Double Ristretto 38g', extra: 0 }
    ],
    defaultBean: 'colombia-pink-bourbon',
    allowsCustomBeans: true,
    isPopular: false,
    badge: 'Rotated Weekly'
  },
  {
    id: 'cardamom-brown-sugar-latte',
    name: 'Cardamom & Brown Sugar Latte',
    category: 'espresso',
    categoryLabel: 'Espresso Bar',
    price: 6.50,
    description: 'House-crushed green cardamom pods infused with dark muscovado syrup, double espresso, and silky oat milk dusted with cinnamon.',
    tastingNotes: ['Warm Cardamom', 'Molasses', 'Caramelized Oat'],
    calories: '210 kcal',
    sizes: [
      { id: 'medium', label: '12 oz Hot', extra: 0 },
      { id: 'large', label: '16 oz Iced', extra: 0.75 }
    ],
    defaultBean: 'atelier-house-blend',
    allowsCustomBeans: true,
    isPopular: true,
    badge: 'Guest Favorite'
  },
  {
    id: 'v60-ethiopia-pourover',
    name: 'V60 Pour-Over · Ethiopia Guji Uraga',
    category: 'pourover',
    categoryLabel: 'Slow Pour-Over',
    price: 6.75,
    description: 'Hand-poured on Hario V60 ceramic dripper at 93°C with a 45-second bloom. Tea-like clarity with exquisite floral aromatics.',
    tastingNotes: ['White Peach', 'Jasmine Flower', 'Meyer Lemon'],
    calories: '2 kcal',
    sizes: [
      { id: 'standard', label: '300ml Decanter', extra: 0 }
    ],
    defaultBean: 'ethiopia-guji',
    allowsCustomBeans: true,
    isPopular: true,
    badge: 'Cup of Excellence'
  },
  {
    id: 'chemex-pink-bourbon',
    name: 'Chemex Pour-Over · Pink Bourbon Reserve',
    category: 'pourover',
    categoryLabel: 'Slow Pour-Over',
    price: 7.25,
    description: 'Thick bonded paper filter extraction yielding crystalline clarity, sparkling tropical fruit notes, and a round honey finish.',
    tastingNotes: ['Pink Grapefruit', 'Papaya', 'Golden Honeycomb'],
    calories: '2 kcal',
    sizes: [
      { id: 'standard', label: '350ml Serving', extra: 0 }
    ],
    defaultBean: 'colombia-pink-bourbon',
    allowsCustomBeans: true,
    isPopular: false,
    badge: 'Reserve Lot'
  },
  {
    id: 'french-press-sumatra',
    name: 'Immersion Pot · Sumatra Kerinci',
    category: 'pourover',
    categoryLabel: 'Slow Pour-Over',
    price: 6.25,
    description: 'Steeped for 4 minutes in borosilicate glass immersion pot. Full-bodied, rustic oils preserved for deep chocolate and cedar richness.',
    tastingNotes: ['Dark Chocolate', 'Earthy Cedar', 'Black Pepper'],
    calories: '5 kcal',
    sizes: [
      { id: 'pot', label: '400ml Pot to Share', extra: 0 }
    ],
    defaultBean: 'sumatra-kerinci',
    allowsCustomBeans: false,
    isPopular: false,
    badge: 'Full Bodied'
  },
  {
    id: 'kyoto-slow-drip-cold-brew',
    name: '18-Hour Kyoto Cold Drip',
    category: 'cold',
    categoryLabel: 'Cold Bar & Tonics',
    price: 5.75,
    description: 'Single drops of chilled alpine water filtered drop-by-drop through freshly roasted single-origin grounds over 18 hours in our glass tower.',
    tastingNotes: ['Cognac Astringency', 'Black Cherry', 'Dark Cacao'],
    calories: '5 kcal',
    sizes: [
      { id: 'standard', label: '12 oz over Clear Ice Cube', extra: 0 },
      { id: 'bottle', label: '250ml Amber Glass Flask', extra: 1.50 }
    ],
    defaultBean: 'ethiopia-guji',
    allowsCustomBeans: false,
    isPopular: true,
    badge: 'Limited Daily Brew'
  },
  {
    id: 'espresso-tonic-yuzu',
    name: 'Espresso Tonic with Japanese Yuzu',
    category: 'cold',
    categoryLabel: 'Cold Bar & Tonics',
    price: 6.25,
    description: 'Chilled Fever-Tree Mediterranean tonic poured over hand-carved ice, crowned with a floating shot of citrusy Ethiopian espresso and yuzu peel.',
    tastingNotes: ['Sparkling Citrus', 'Quinine Bitterness', 'Floral Crema'],
    calories: '65 kcal',
    sizes: [
      { id: 'standard', label: '12 oz Highball Glass', extra: 0 }
    ],
    defaultBean: 'ethiopia-guji',
    allowsCustomBeans: false,
    isPopular: true,
    badge: 'Refreshing'
  },
  {
    id: 'nitro-draft-oat-latte',
    name: 'Nitro Cold Draft Oat Latte',
    category: 'cold',
    categoryLabel: 'Cold Bar & Tonics',
    price: 6.00,
    description: 'Micro-nitrogen infused cold brew blended with organic Minor Figures oat milk, poured fresh from our stainless steel draft tap.',
    tastingNotes: ['Guinness-like Foam', 'Toasted Oats', 'Vanilla Cream'],
    calories: '150 kcal',
    sizes: [
      { id: 'pint', label: '14 oz Pint Glass', extra: 0 }
    ],
    defaultBean: 'atelier-house-blend',
    allowsCustomBeans: false,
    isPopular: false,
    badge: 'On Tap'
  },
  {
    id: 'ceremonial-uji-matcha-latte',
    name: 'Ceremonial Uji Matcha Latte',
    category: 'specialty',
    categoryLabel: 'Signatures & Elixirs',
    price: 6.75,
    description: 'First harvest stone-ground green tea from Kyoto, bamboo whisked to order with warm oat milk and delicate wildflower honey.',
    tastingNotes: ['Umami Creaminess', 'Sweet Spring Grass', 'Pistachio'],
    calories: '130 kcal',
    sizes: [
      { id: 'hot', label: '10 oz Chawan Bowl (Hot)', extra: 0 },
      { id: 'iced', label: '16 oz Ribbed Glass (Iced)', extra: 0.50 }
    ],
    defaultBean: null,
    allowsCustomBeans: false,
    isPopular: true,
    badge: 'Kyoto Import'
  },
  {
    id: 'golden-turmeric-ginger-elixir',
    name: 'Vedic Golden Milk & Ginger Elixir',
    category: 'specialty',
    categoryLabel: 'Signatures & Elixirs',
    price: 5.75,
    description: 'Fresh pressed organic Hawaiian turmeric, cracked tellicherry black pepper, ginger juice, steamed almond milk, and raw Ceylon cinnamon.',
    tastingNotes: ['Warming Spice', 'Earthy Glow', 'Gentle Honey'],
    calories: '110 kcal',
    sizes: [
      { id: 'standard', label: '10 oz Mug', extra: 0 }
    ],
    defaultBean: null,
    allowsCustomBeans: false,
    isPopular: false,
    badge: 'Caffeine-Free'
  },
  {
    id: 'slow-ferment-croissant',
    name: '48-Hour Laminate French Butter Croissant',
    category: 'bakery',
    categoryLabel: 'Oven & Bakery',
    price: 4.50,
    description: 'Baked fresh at 6:30 AM daily using Normandy AOP butter and wild sourdough poolish. 27 delicate shattering layers.',
    tastingNotes: ['Caramelized Crust', 'Sweet Cream Butter', 'Light Honey'],
    calories: '280 kcal',
    sizes: [
      { id: 'single', label: '1 Warm Pastry', extra: 0 }
    ],
    defaultBean: null,
    allowsCustomBeans: false,
    isPopular: true,
    badge: 'Baked Daily'
  },
  {
    id: 'swedish-cardamom-bullar',
    name: 'Artisan Swedish Cardamom Bun (Kardemummabulla)',
    category: 'bakery',
    categoryLabel: 'Oven & Bakery',
    price: 4.75,
    description: 'Traditional knotted brioche dough infused with freshly stone-ground green cardamom, brown butter filling, and pearl sugar crystals.',
    tastingNotes: ['Pungent Cardamom', 'Toasted Brioche', 'Craggy Pearl Sugar'],
    calories: '310 kcal',
    sizes: [
      { id: 'single', label: '1 Warm Bun', extra: 0 }
    ],
    defaultBean: null,
    allowsCustomBeans: false,
    isPopular: true,
    badge: 'House Specialty'
  },
  {
    id: 'valrhona-chocolate-olive-oil-cake',
    name: 'Valrhona Dark Chocolate Olive Oil Cake',
    category: 'bakery',
    categoryLabel: 'Oven & Bakery',
    price: 5.50,
    description: '70% Guanaja Valrhona chocolate paired with extra virgin Picual olive oil and flaky Maldon sea salt. Dense, fudgy, and gluten-conscious.',
    tastingNotes: ['Intense Cacao', 'Grassy Olive Oil', 'Flaky Sea Salt'],
    calories: '340 kcal',
    sizes: [
      { id: 'slice', label: 'Generous Slice', extra: 0 }
    ],
    defaultBean: null,
    allowsCustomBeans: false,
    isPopular: false,
    badge: 'Flourless'
  },
  {
    id: 'bag-ethiopia-guji-uraga',
    name: 'Ethiopia Guji Uraga · 250g Whole Bean',
    category: 'beans',
    categoryLabel: 'Whole Bean Bags',
    price: 21.00,
    description: 'Roasted on our Loring S15 Kestrel. Freshly roasted within 7 days. Nitrogen-flushed valve bag to lock in volatile floral aromatics.',
    tastingNotes: ['Bergamot', 'Peach Blossom', 'Meyer Lemon'],
    calories: '—',
    sizes: [
      { id: '250g', label: '250g Bag', extra: 0 },
      { id: '1kg', label: '1kg Cafe Bag (Save $8)', extra: 48.00 }
    ],
    defaultBean: 'ethiopia-guji',
    allowsCustomBeans: false,
    isPopular: true,
    badge: 'Light Roast'
  },
  {
    id: 'bag-colombia-pink-bourbon',
    name: 'Colombia Huila Pink Bourbon · 250g Whole Bean',
    category: 'beans',
    categoryLabel: 'Whole Bean Bags',
    price: 23.50,
    description: 'Limited micro-lot from San Adolfo. Exotic fruit profile with pristine sweetness. Recommended for V60 or espresso.',
    tastingNotes: ['Pink Grapefruit', 'Papaya', 'Brown Sugar'],
    calories: '—',
    sizes: [
      { id: '250g', label: '250g Bag', extra: 0 },
      { id: '1kg', label: '1kg Cafe Bag (Save $10)', extra: 54.00 }
    ],
    defaultBean: 'colombia-pink-bourbon',
    allowsCustomBeans: false,
    isPopular: false,
    badge: 'Micro-Lot'
  },
  {
    id: 'bag-atelier-house-blend',
    name: 'Atelier Signature House Blend · 300g Whole Bean',
    category: 'beans',
    categoryLabel: 'Whole Bean Bags',
    price: 18.00,
    description: 'Our most loved blend for moka pot, home espresso machines, and daily drip. Chocolate, praline, and warm caramel fig notes.',
    tastingNotes: ['Milk Chocolate', 'Caramelized Fig', 'Toasted Hazelnut'],
    calories: '—',
    sizes: [
      { id: '300g', label: '300g Bag', extra: 0 },
      { id: '1kg', label: '1kg Cafe Bag', extra: 38.00 }
    ],
    defaultBean: 'atelier-house-blend',
    allowsCustomBeans: false,
    isPopular: true,
    badge: 'Flagship Blend'
  }
];

export const MILK_OPTIONS = [
  { id: 'whole', label: 'Organic Whole Milk', extra: 0, tag: 'Standard' },
  { id: 'oat', label: 'Minor Figures Oat Milk', extra: 0.75, tag: 'Barista Favorite' },
  { id: 'almond', label: 'Artisanal Almond Milk', extra: 0.75, tag: 'Unsweetened' },
  { id: 'macadamia', label: 'House Macadamia Milk', extra: 1.00, tag: 'Ultra Rich' },
  { id: 'none', label: 'Black / No Milk', extra: 0, tag: 'Pure Extraction' }
];

export const SYRUP_OPTIONS = [
  { id: 'none', label: 'Unsweetened (Pure Flavor)', extra: 0 },
  { id: 'vanilla', label: 'Madagascar Vanilla Bean Caviar', extra: 0.75 },
  { id: 'cardamom', label: 'Wild Green Cardamom Syrup', extra: 0.75 },
  { id: 'lavender', label: 'Lavender Blossom Infused Honey', extra: 0.75 },
  { id: 'muscovado', label: 'Unrefined Dark Muscovado Sugar', extra: 0.50 }
];

export const BREW_METHODS = [
  {
    id: 'v60',
    name: 'Hario V60 (Ceramic Dripper)',
    ratio: 16, // 1:16
    temp: '93°C (200°F)',
    grind: 'Medium-Fine (Kosher salt texture)',
    totalTime: '3:00 min',
    bloomTime: '45s',
    bloomRatio: 3, // 3x coffee dose
    description: 'Clean, transparent cup highlighting bright floral notes, acidity, and delicate sweetness.',
    steps: [
      { name: 'Rinse & Warm', time: 'Pre-brew', instruction: 'Rinse paper filter with 100g hot water to eliminate paper taste and pre-heat ceramic dripper. Discard rinse water.' },
      { name: 'The Bloom', time: '0:00 – 0:45', instruction: 'Pour 3x coffee dose in spiral circles from inside out. Gently swirl once. Allow CO2 to off-gas.' },
      { name: 'First Continuous Pour', time: '0:45 – 1:30', instruction: 'Pour steadily up to 60% of total brew weight. Maintain a steady quarter-coin sized stream in center.' },
      { name: 'Second Finishing Pour', time: '1:30 – 2:15', instruction: 'Pour remaining water up to target weight in smooth circles. One gentle swirl to settle the coffee bed.' },
      { name: 'Final Drawdown', time: '2:15 – 3:00', instruction: 'Let all liquid filter down. You should have a flat, even coffee bed. Swirl decanter and serve.' }
    ]
  },
  {
    id: 'chemex',
    name: 'Chemex 6-Cup (Wood Collar)',
    ratio: 16.5,
    temp: '94°C (202°F)',
    grind: 'Medium-Coarse (Sea salt texture)',
    totalTime: '4:00 min',
    bloomTime: '45s',
    bloomRatio: 3,
    description: 'Ultra-clarified brew using heavy bonded triple-layer filters. Removes oils and micro-fines.',
    steps: [
      { name: 'Filter Prep', time: 'Pre-brew', instruction: 'Place 3-layer side against the spout. Rinse thoroughly with hot water and pour out water through the spout.' },
      { name: 'Bloom Phase', time: '0:00 – 0:45', instruction: 'Saturate coffee bed completely with 3x dose. Watch the aromatic bloom rise.' },
      { name: 'Central Pour', time: '0:45 – 2:00', instruction: 'Pour in steady spirals keeping water level 1 inch below the glass rim.' },
      { name: 'Secondary Pour', time: '2:00 – 3:00', instruction: 'Top up to exact total recipe weight. Gentle crust stir.' },
      { name: 'Drawdown Finish', time: '3:00 – 4:00', instruction: 'Allow gravity extraction to finish. Lift filter, swirl flask, enjoy aromas.' }
    ]
  },
  {
    id: 'aeropress',
    name: 'AeroPress (Inverted Method)',
    ratio: 13,
    temp: '88°C (190°F)',
    grind: 'Fine-Medium (Table salt texture)',
    totalTime: '2:00 min',
    bloomTime: '30s',
    bloomRatio: 2.5,
    description: 'High-pressure immersion brewing yielding rich texture, concentrated sweetness, and zero bitterness.',
    steps: [
      { name: 'Invert & Dose', time: 'Pre-brew', instruction: 'Set AeroPress inverted with plunger at #4 circle. Add freshly ground coffee.' },
      { name: 'Rapid Agitation', time: '0:00 – 0:30', instruction: 'Pour water up to the brim, stir vigorously 5 times with paddle.' },
      { name: 'Immersion Steep', time: '0:30 – 1:30', instruction: 'Fasten rinsed filter cap with hot water paper. Allow full flavor immersion.' },
      { name: 'The Flip & Press', time: '1:30 – 2:00', instruction: 'Carefully flip onto sturdy server. Press down smoothly with gentle forearm pressure for 30s.' }
    ]
  },
  {
    id: 'french-press',
    name: 'French Press (Immersion Pot)',
    ratio: 15,
    temp: '95°C (203°F)',
    grind: 'Coarse (Cracked pepper texture)',
    totalTime: '5:00 min',
    bloomTime: '0s',
    bloomRatio: 0,
    description: 'Classic full-immersion brewing that extracts natural coffee oils for heavy body and velvet mouthfeel.',
    steps: [
      { name: 'Initial Fill', time: '0:00', instruction: 'Pour all calculated hot water over coarse grounds all at once.' },
      { name: 'Rest & Steep', time: '0:00 – 4:00', instruction: 'Place lid on top with plunger raised. Do not plunge. Allow grinds to steep undisturbed.' },
      { name: 'Break the Crust', time: '4:00', instruction: 'Using a spoon, gently stir the floating crust. Scoop away white foam and floating chaff.' },
      { name: 'Gentle Press', time: '4:30 – 5:00', instruction: 'Insert mesh screen and depress plunger slowly. Decant immediately into cups to stop extraction.' }
    ]
  }
];

export const WORKSHOPS = [
  {
    id: 'cupping-flight',
    title: 'Saturday Sensory Cupping & Flavor Flight',
    duration: '90 Minutes',
    price: 35.00,
    schedule: 'Every Saturday · 10:30 AM',
    seatsLeft: 4,
    description: 'Learn industry cupping protocols using SCA aroma wheels. Taste 6 rare microlots side-by-side with our Master Roaster. Includes 250g bag of your favorite origin.',
    level: 'All Enthusiasts'
  },
  {
    id: 'pour-over-mastery',
    title: 'Precision Pour-Over & Extraction Science',
    duration: '2 Hours',
    price: 55.00,
    schedule: 'Sundays · 2:00 PM',
    seatsLeft: 3,
    description: 'Dial in TDS refractometers, water mineral composition (calcium/magnesium ratios), grind particle distribution, and pouring agitation on V60 & Chemex.',
    level: 'Intermediate to Advanced'
  },
  {
    id: 'latte-art-dial-in',
    title: 'Microfoam Texturing & Free-Pour Latte Art',
    duration: '2 Hours',
    price: 65.00,
    schedule: 'Thursday Evenings · 6:30 PM',
    seatsLeft: 2,
    description: 'Hands-on practice on our commercial Synesso MVP Hydra espresso machines. Master milk whirlpool dynamics, heart, rosetta, and winged tulip designs.',
    level: 'Beginner to Intermediate'
  }
];

export const STORE_INFO = {
  name: 'Atelier Coffee Roasters',
  subname: 'Roastery Lab & Espresso Counter',
  address: '412 Artisan Alley, Historic Mill District',
  city: 'Portland, OR 97209',
  phone: '(503) 847-2914',
  email: 'hello@ateliercoffeeroasters.com',
  hours: [
    { days: 'Monday – Friday', open: '6:30 AM', close: '6:00 PM' },
    { days: 'Saturday', open: '7:30 AM', close: '6:30 PM' },
    { days: 'Sunday', open: '8:00 AM', close: '5:00 PM' }
  ],
  amenities: [
    { title: 'High-Speed Fiber Wi-Fi', desc: 'Dedicated gigabit connection with quiet workspaces' },
    { title: 'Hand-Turned Vinyl Audio', desc: 'Analog jazz and soul spinning through McIntosh tube amps' },
    { title: 'Local Meadow Pasture Milk', desc: 'Single-herd dairy from regional grass-fed farms' },
    { title: 'Sunlit Plant Courtyard', desc: 'Heated open-air garden seating for relaxed mornings' }
  ]
};
