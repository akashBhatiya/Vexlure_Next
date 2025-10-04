// categoriesData.ts
// Shared data structure for categories and products

export interface ProductFeature {
  title: string;
  description: string;
  image: string | null;
  features?: string[];
}

export interface CategoryData {
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  subdescription: string;
  image: string;
  subcategories?: string[];
  products?: ProductFeature[] | null;
}

export const CATEGORIES_DATA: CategoryData[] = [
  {
    title: 'Fresh Vegetables',
    subtitle: 'Fresh Vegetables',
    slug: 'agriculture-spices',
    description: "From onions and garlic to okra, brinjal, and drumsticks, our vegetables are grown with generations of farming expertise. Harvested carefully and packed for durability, they travel fresh and authentic. Vexlure ensures consistency, quality, and timely delivery to global markets.",
    subdescription: "From onions and garlic to okra, brinjal, and drumsticks, our vegetables are grown with generations of farming expertise. Harvested carefully and packed for durability, they travel fresh and authentic. Vexlure ensures consistency, quality, and timely delivery to global markets.",
    image: '/agriculture/fresh_vegetables.png',
    subcategories: [
      'Onions',
      'Garlic', 
      'Chilli',
      'Ginger',
      'Drumsticks',
      'Okra',
      'Brinjal/Eggplant',
      'Potato',
      'Carrot',
      'Yam',
      'Beans',
      'Peas'
    ],
    products: [
      {
        title: 'Onions (Red, White, Yellow, Pink, Shallots)',
        description: 'Sourced mainly from Maharashtra & Gujarat, our onions are known for strong aroma and firm texture.',
        image: '/agriculture/Onions.png',
        features: [
          'Size: 25 mm to 70 mm',
          'Color: Red, White, Yellow, Pink',
          'Packing: 5 kg / 10 kg / 25 kg mesh & jute bags',
          'Applications: Cooking, processing, dehydration & food service',
          'Quality: Export-grade bulbs, A–Grade & Commercial grade'
        ]
      },
      {
        title: 'Garlic (White, Red, Elephant)',
        description: 'Cultivated in Madhya Pradesh & Gujarat, Indian garlic is prized for its strong flavor and medicinal value.',
        image: '/agriculture/Garlic.png',
        features: [
          'Size: 25 mm to 55 mm (Elephant garlic up to 70 mm)',
          'Color: White & Red varieties',
          'Packing: 5 kg / 10 kg mesh bags, cartons on request',
          'Applications: Culinary seasoning, dehydration, pickling, health & pharma',
          'Quality: Bold cloves, strong aroma, clean & dry bulbs'
        ]
      },
      {
        title: 'Chilli (Green, Red – Byadgi, Guntur, Kashmiri)',
        description: 'India is the world\'s largest chilli exporter, with production concentrated in Andhra Pradesh, Karnataka & Rajasthan.',
        image: '/agriculture/Chilli.png',
        features: [
          'Varieties: Guntur (high heat), Byadgi (deep red color), Kashmiri (mild, bright red)',
          'Packing: 5 kg / 10 kg / 25 kg jute & poly bags',
          'Applications: Curry powders, sauces, spice blends, oleoresins, pickles',
          'Quality: A–Grade pods, sun-dried, strong color retention'
        ]
      },
      {
        title: 'Ginger (Fresh, Baby)',
        description: 'Primarily sourced from Northeast India, Karnataka & Kerala, Indian ginger is known for its pungent taste and high oil content.',
        image: '/agriculture/Ginger.jpg',
        features: [
          'Size: 50 mm+ (baby ginger smaller tender roots)',
          'Color: Pale brown outer skin, fibrous flesh',
          'Packing: 5 kg / 10 kg cartons or jute bags',
          'Applications: Culinary use, herbal medicine, tea blends, dehydration & powdering.',
          'Quality: Clean, mature rhizomes with rich aroma & high oleoresin content.'
        ]
      },
      {
        title: 'Drumsticks (Moringa Pods)',
        description: 'Cultivated in Southern India & Gujarat, drumsticks are nutrient-rich pods with high export demand.',
        image: '/agriculture/Drumsticks.jpg',
        features: [
          'Length: 30 cm to 50 cm',
          'Color: Fresh green pods',
          'Packing: 5 kg / 10 kg cartons with ventilation holes',
          'Applications: Culinary use (curries, soups), nutraceutical extraction, frozen/processed foods.',
          'Quality: Fresh, tender, pesticide-free pods.',
        ],
      },
      {
        title: 'Okra (Lady’s Finger)',
        description: 'Widely grown in Gujarat, Maharashtra & Karnataka, Indian okra is valued for its freshness and shelf life.',
        image: '/agriculture/Okra.jpg',
        features: [
          'Length: 8 cm to 12 cm',
          'Color: Glossy deep green',
          'Packing: 5 kg / 10 kg ventilated cartons',
          'Applications: Fresh consumption, frozen okra exports, curries, soups & food service industry.',
          'Quality: Tender pods, pesticide-free, uniform sizing.',
        ],
      },
      {
        title: 'Brinjal / Eggplant (Long, Round, Baby)',
        description: 'Grown mainly in Maharashtra, Gujarat, Karnataka, Indian brinjals are known for their glossy skin and tender pulp.',
        image: '/agriculture/Brinjal.jpg',
        features: [
          'Length: Long 12–20 cm | Round 6–8 cm | Baby 3–5 cm',
          'Color: Deep purple, light purple, and green striped varieties',
          'Packing: 5 kg / 10 kg ventilated cartons',
          'Applications: Used in curries, grilling, pickling, and frozen vegetable packs.',
          'Quality: Uniform size, pesticide-free, glossy skin, firm flesh.',
        ],
      },
      {
        title: 'Potato (White, Red, Russet, Sweet Potato)',
        description: 'India is among the top potato producers, with key cultivation in Uttar Pradesh, Gujarat, Punjab',
        image: '/agriculture/Potato.png',
        features: [
          'Size: 45 mm to 90 mm (depending on variety)',
          'Varieties: White, Red, Russet, Sweet Potato',
          'Packing: 25 kg / 50 kg jute or mesh bags',
          'Applications: Table consumption, French fries, chips, starch & frozen processing.',
          'Quality: A–Grade tubers, firm texture, minimal sprouting.',
        ],
      },
      {
        title: 'Carrot (Orange, Red, Black)',
        description: 'Indian carrots, grown in Haryana, Punjab, Maharashtra, are valued for sweetness and vibrant colors.',
        image: '/agriculture/Carrot.jpg',
        features: [
          'Size: 10 cm to 25 cm length',
          'Varieties: Orange (universal), Red (Delhi carrot), Black (rare, high anthocyanin)',
          'Packing: 5 kg / 10 kg perforated cartons',
          'Applications: Fresh market, juices, pickles, frozen packs, confectionery.',
          'Quality: Crisp roots, smooth skin, pesticide-free, vibrant color.',
        ],
      },
      {
        title: 'Yam (Elephant Foot, White, Purple)',
        description: 'Cultivated in Andhra Pradesh, West Bengal, Kerala, Indian yams are popular for their starchy flesh and long shelf life.',
        image: '/agriculture/Yam.jpg',
        features: [
          'Size: 500 g to 2 kg tubers',
          'Color: Brown outer skin, white or purple flesh',
          'Packing: 20 kg / 25 kg jute or mesh bags',
          'Applications: Curries, flour production, chips, animal feed in some regions.',
          'Quality: Clean, mature tubers, high starch content, good shelf stability.',
        ],
      },
      {
        title: 'Beans (French, Cluster, Broad)',
        description: 'Indian beans are widely grown in Karnataka, Maharashtra, Tamil Nadu with high export demand.',
        image: '/agriculture/Beans.jpg',
        features: [
          'Size: 8 cm to 15 cm pods',
          'Varieties: French beans, Cluster beans (Guar), Broad beans',
          'Packing: 5 kg / 10 kg ventilated cartons',
          'Applications: Fresh use, frozen vegetables, soups, stir-fries, pickling.',
          'Quality: Tender, uniform pods, pesticide-free, natural green sheen.',
        ],
      },
      {
        title: 'Peas (Green, Snow, Sugar Snap)',
        description: 'Primarily grown in Uttar Pradesh, Punjab, Himachal Pradesh, Indian peas are known for sweetness and high protein.',
        image: '/agriculture/Peas.jpg',
        features: [
          'Size: 8 mm to 12 mm diameter',
          'Varieties: Green peas, Snow peas, Sugar snap peas',
          'Packing: 5 kg / 10 kg cartons or bulk frozen packs',
          'Applications: Fresh consumption, frozen processing, soups, snacks.',
          'Quality: Uniform pods, vibrant green color, naturally sweet taste.',
        ],
      },
    ],
  },
  {
    title: 'Oilseeds & Nuts',
    subtitle: 'Oilseeds & Nuts',
    slug: 'oilseeds-nuts',
    description: "India's oilseeds power global food and industrial needs. We supply premium peanuts, sesame, soybeans, mustard, castor, and coconuts directly from sourcing regions. Every shipment delivers oil-rich quality, scale, and international compliance.",
    subdescription: "India's oilseeds power global food and industrial needs. We supply premium peanuts, sesame, soybeans, mustard, castor, and coconuts directly from sourcing regions. Every shipment delivers oil-rich quality, scale, and international compliance.",
    image: '/products/Oilseeds-Nuts.png',
    subcategories: [
      'Peanuts',
      'Sesame Seeds',
      'Soybeans',
      'Mustard Seeds',
      'Castor Seeds',
      'Coconut',
    ],
    products: [
      {
        title: 'Peanuts (Raw, Blanched)',
        description: 'India is one of the top peanut exporters, mainly cultivated in Gujarat, Rajasthan, Andhra Pradesh.',
        image: '/agriculture/Peanuts.jpg',
        features: [
          'Varieties: Bold, Java, Red Skin, Blanched',
          'Size: 35/40, 38/42, 40/50, 50/60 counts per ounce',
          'Packing: 25 kg / 50 kg jute or PP bags, vacuum packs on request',
          'Applications: Snacks, peanut butter, oil extraction, confectionery',
          'Quality: A–Grade kernels, uniform size, low aflatoxin, strong shelf life'
        ]
      },
      {
        title: 'Sesame Seeds (White, Black, Hulled, Unhulled)',
        description: 'India is a leading global supplier of sesame, grown across Gujarat, West Bengal, Madhya Pradesh.',
        image: '/agriculture/Sesame.jpg',
        features: [
          'Varieties: White, Black, Brown, Hulled & Unhulled',
          'Purity: 99% to 99.99%',
          'Packing: 25 kg / 50 kg PP bags, 1 MT jumbo bags',
          'Applications: Tahini, bakery, oil pressing, spice blends',
          'Quality: High oil content, natural aroma, export-grade cleaning & sorting'
        ]
      },
      {
        title: 'Soybeans (Whole, Soymeal, Processed)',
        description: 'Soybeans are a vital Indian export, cultivated mainly in Madhya Pradesh, Maharashtra.',
        image: '/agriculture/Soybeans.jpg',
        features: [
          'Forms: Whole beans, Soymeal (de-oiled cake), Protein concentrates',
          'Packing: 25 kg / 50 kg PP bags, bulk containerized',
          'Applications: Animal feed, edible oil, protein powders, industrial use',
          'Quality: High-protein beans, non-GMO supply possible, clean & graded'
        ]
      },
      {
        title: 'Mustard Seeds (Yellow, Black, Brown)',
        description: 'Grown widely in Rajasthan, Uttar Pradesh, Madhya Pradesh, Indian mustard is known for pungency & oil content.',
        image: '/agriculture/Mustard-oil.jpg',
        features: [
          'Varieties: Yellow (mild), Black & Brown (pungent)',
          'Packing: 25 kg / 50 kg PP/jute bags',
          'Applications: Mustard oil, pickling, condiments, spice mixes',
          'Quality: A–Grade seeds, strong aroma, high oil yield'
        ]
      },
      {
        title: 'Castor Seeds (India = World\'s No.1 exporter)',
        description: 'India supplies over 80% of global castor exports, primarily from Gujarat.',
        image: '/agriculture/Castor.jpg',
        features: [
          'Size: 8 mm to 12 mm',
          'Packing: 25 kg / 50 kg PP bags, bulk jumbo bags',
          'Applications: Castor oil extraction, lubricants, cosmetics, pharma, industrial resins',
          'Quality: Uniform seeds, high oil content, export-grade purity'
        ]
      },
      {
        title: 'Coconut (Whole, Copra, Desiccated)',
        description: 'Coconuts are cultivated in Kerala, Tamil Nadu, Karnataka, Andhra Pradesh.',
        image: '/agriculture/Coconut.jpg',
        features: [
          'Forms: Fresh whole nuts, Copra (dried kernel), Desiccated coconut powder',
          'Packing: Whole nuts in mesh bags | Copra/Desiccated in 25 kg PP bags',
          'Applications: Food processing, bakery, confectionery, cosmetics, oil extraction',
          'Quality: Mature nuts, clean processing, sweet aroma, long shelf life'
        ]
      }
    ],
  },
  {
    title: 'Pulses & Legumes',
    subtitle: 'Pulses & Legumes',
    slug: 'pulses-legumes',
    description: 'Indian pulses are trusted worldwide as a natural source of protein. From chickpeas and pigeon peas to moong and urad, we deliver clean, graded, and compliant legumes. Our network ensures reliable supply for food processors and traders.',
    subdescription: 'Indian pulses are trusted worldwide as a natural source of protein. From chickpeas and pigeon peas to moong and urad, we deliver clean, graded, and compliant legumes. Our network ensures reliable supply for food processors and traders.',
    image: '/products/Pulses-Legumes.png',
    subcategories: [
      'Chickpeas',
      'Pigeon Peas',
      'Green Gram',
      'Black Gram',
      'Horse Gram',
      'Moth Beans',
    ],
    products: [
      {
        title: 'Chickpeas (Kabuli, Desi)',
        description: 'India is among the largest producers of chickpeas, grown extensively in Madhya Pradesh, Maharashtra, Rajasthan.',
        image: '/agriculture/Chickpeas.jpg',
        features: [
          'Varieties: Kabuli (large, cream-colored), Desi (smaller, brown)',
          'Size: 6 mm to 12 mm (Kabuli grades: 40/42, 44/46, 58/60 counts per ounce)',
          'Packing: 25 kg / 50 kg PP bags, bulk containerized',
          'Applications: Hummus, salads, curries, snacks, flour (besan)',
          'Quality: Machine-cleaned, uniform grains, moisture-controlled, export-grade'
        ]
      },
      {
        title: 'Pigeon Peas (Tur / Arhar Dal)',
        description: 'Primarily cultivated in Maharashtra, Gujarat, Karnataka, India is the world\'s largest producer of pigeon peas.',
        image: '/agriculture/PigeonPeas.jpg',
        features: [
          'Form: Whole, split (polished & unpolished)',
          'Packing: 25 kg / 50 kg PP bags',
          'Applications: Widely used in dals, stews, soups, ready-to-eat mixes',
          'Quality: High-protein content, clean grains, fumigated and compliant with global standards'
        ]
      },
      {
        title: 'Green Gram (Moong)',
        description: 'Moong is a premium Indian pulse, cultivated in Rajasthan, Maharashtra, Karnataka.',
        image: '/agriculture/GreenGram.jpg',
        features: [
          'Varieties: Whole green gram, Split (yellow moong dal)',
          'Size: 3 mm to 5 mm',
          'Packing: 25 kg / 50 kg PP bags',
          'Applications: Dal, sprouts, noodles, soups, flour for snacks and sweets',
          'Quality: Uniform size, natural green shine, free from impurities'
        ]
      },
      {
        title: 'Black Gram (Urad)',
        description: 'Urad is widely grown in Madhya Pradesh, Uttar Pradesh, Tamil Nadu and exported to South & Southeast Asia.',
        image: '/agriculture/BlackGram.jpg',
        features: [
          'Forms: Whole (black skin), Split (white interior, polished/unpolished)',
          'Packing: 25 kg / 50 kg PP bags',
          'Applications: Idli, dosa batter, dal makhni, papad, fermented food products',
          'Quality: Bold grains, moisture-controlled, machine-cleaned for export'
        ]
      },
      {
        title: 'Horse Gram',
        description: 'A traditional legume grown in Karnataka, Tamil Nadu, Andhra Pradesh, known for high protein and medicinal value.',
        image: '/agriculture/HorseGram.jpg',
        features: [
          'Size: Small oval grains, 3 mm to 4 mm',
          'Packing: 25 kg / 50 kg PP bags',
          'Applications: Soups, sprouts, flour, Ayurvedic & animal feed uses',
          'Quality: Nutrient-rich, strong earthy aroma, clean and graded'
        ]
      },
      {
        title: 'Moth Beans',
        description: 'Mainly cultivated in the arid regions of Rajasthan and Gujarat, moth beans are resilient and protein-rich.',
        image: '/agriculture/MothBeans.jpg',
        features: [
          'Size: 3 mm to 4 mm small round grains',
          'Packing: 25 kg / 50 kg PP bags',
          'Applications: Sprouts, curries, traditional Rajasthani dishes (e.g., "Matki"), animal feed',
          'Quality: Naturally dried, machine-cleaned, suitable for both food & feed markets'
        ]
      }
    ],
  },
  {
    title: 'Grains & Cereals',
    subtitle: 'Grains & Cereals',
    slug: 'grains-cereals',
    description: 'Basmati rice for fine dining, parboiled rice for mass supply, maize and sorghum for industries, and millets for health markets — India grows it all. We connect these staples and superfoods to global buyers with consistency and scale.',
    subdescription: 'Basmati rice for fine dining, parboiled rice for mass supply, maize and sorghum for industries, and millets for health markets — India grows it all. We connect these staples and superfoods to global buyers with consistency and scale.',
    image: '/products/Grains-Cereals.png',
    subcategories: [
      'Basmati Rice',
      'Non-Basmati Rice',
      'Maize (Corn)',
      'Sorghum (Jowar)',
      'Millets',
    ],
    products: [
      {
        title: 'Basmati Rice (1121, 1509, Pusa, Traditional)',
        description: 'Basmati rice, grown in the fertile plains of Punjab, Haryana, Uttar Pradesh, is India\'s most premium grain export.',
        image: '/agriculture/BasmatiRice.jpg',
        features: [
          'Varieties: 1121 (long grain), 1509 (slender), Pusa, Traditional Basmati',
          'Length: 7.40 mm to 8.40 mm (extra-long slender kernels)',
          'Packing: 5 kg / 10 kg / 25 kg / 50 kg PP bags, jute bags, or private-label pouches',
          'Applications: Fine dining, biryani, pilaf, gourmet cooking',
          'Quality: Aromatic, aged rice with elongation ratio >2.0 on cooking, export grade'
        ]
      },
      {
        title: 'Non-Basmati Parboiled Rice (IR64, Sona Masoori, Parboiled, Broken)',
        description: 'India is the world\'s leading exporter of parboiled rice, grown across Andhra Pradesh, Chhattisgarh, Odisha, West Bengal.',
        image: '/agriculture/ParboiledRice.jpg',
        features: [
          'Varieties: IR64, Sona Masoori, 100% Broken, Parboiled White & Golden',
          'Packing: 25 kg / 50 kg PP bags, bulk containerized shipments',
          'Applications: Staple consumption in Africa & Asia, bulk food service, breweries',
          'Quality: High yield, firm texture, less sticky, suitable for bulk cooking'
        ]
      },
      {
        title: 'Maize (Corn) (Yellow, White, Sweet Corn)',
        description: 'Maize is cultivated widely in Karnataka, Andhra Pradesh, Maharashtra, Bihar.',
        image: '/agriculture/Maize.jpg',
        features: [
          'Forms: Feed-grade yellow maize, white maize, and sweet corn',
          'Packing: 25 kg / 50 kg PP bags, bulk container loads',
          'Applications: Animal feed, starch industry, ethanol production, snack food',
          'Quality: Moisture <14%, aflatoxin-controlled, graded kernels'
        ]
      },
      {
        title: 'Sorghum (Jowar) (White, Yellow, Red)',
        description: 'Sorghum is grown in dryland regions of Maharashtra, Karnataka, Rajasthan, making India a steady supplier.',
        image: '/agriculture/Sorghum.jpg',
        features: [
          'Varieties: White sorghum (human consumption), Yellow & Red (feed/industrial)',
          'Packing: 25 kg / 50 kg PP bags, bulk',
          'Applications: Staple food in Africa & Asia, livestock feed, ethanol production',
          'Quality: Bold grains, naturally dried, moisture-controlled'
        ]
      },
      {
        title: 'Millets (Pearl/Bajra, Finger/Ragi, Foxtail, Kodo, Little, Proso, Barnyard)',
        description: 'India is the global leader in millet production, particularly in Rajasthan, Karnataka, Andhra Pradesh.',
        image: '/agriculture/Millets.jpg',
        features: [
          'Types: Pearl (Bajra), Finger (Ragi), Foxtail, Kodo, Little, Proso, Barnyard',
          'Packing: 25 kg / 50 kg PP or jute bags',
          'Applications: Superfoods for health foods, bakery, breakfast cereals, gluten-free diets',
          'Quality: Cleaned, machine-graded grains, certified as per global millet export standards'
        ]
      }
    ],
  },
  {
    title: 'Whole & Ground Spices',
    subtitle: 'Whole & Ground Spices',
    slug: 'whole-ground-spices',
    description: 'Spices are India\'s heritage and our strength. Turmeric, cumin, chilli, coriander, and cardamom define cuisines across the world. At Vexlure, we supply both whole and ground spices, quality-checked and ready for global kitchens.',
    subdescription: 'Spices are India\'s heritage and our strength. Turmeric, cumin, chilli, coriander, and cardamom define cuisines across the world. At Vexlure, we supply both whole and ground spices, quality-checked and ready for global kitchens.',
    image: '/products/Whole-Ground_Spices.png',
    subcategories: [
      'Turmeric',
      'Cumin Seeds',
      'Chilli',
      'Coriander Seeds',
      'Cardamom',
      'Fenugreek',
      'Fennel Seeds',
      'Mustard Seeds',
      'Ginger',
      'Garlic Powder',
      'Onion Powder',
    ],
    products: [
      {
        title: 'Turmeric (Fingers, Powder)',
        description: 'India is the world\'s largest producer of turmeric, mainly from Andhra Pradesh, Tamil Nadu, Maharashtra, Odisha.',
        image: '/agriculture/Turmeric.jpg',
        features: [
          'Forms: Whole fingers, ground powder',
          'Curcumin Content: 2% to 5% (variety-based)',
          'Packing: 25 kg / 50 kg PP bags, bulk or private-label pouches',
          'Applications: Spices, food coloring, nutraceuticals, cosmetics, Ayurveda',
          'Quality: Bold fingers, deep yellow-orange color, strong aroma'
        ]
      },
      {
        title: 'Cumin Seeds (Whole, Ground)',
        description: 'Grown in Rajasthan & Gujarat, India accounts for ~70% of global cumin exports.',
        image: '/agriculture/Cumin.jpg',
        features: [
          'Forms: Whole seeds, ground powder',
          'Purity: 98%–99.9% machine-cleaned',
          'Packing: 25 kg / 50 kg PP/jute bags',
          'Applications: Spice blends, bakery, flavoring, medicinal uses',
          'Quality: A–Grade seeds, natural earthy aroma, export-certified'
        ]
      },
      {
        title: 'Chilli (Whole, Powder – Guntur, Byadgi, Kashmiri)',
        description: 'India leads the world in chilli exports, with major growing regions in Andhra Pradesh, Karnataka, Madhya Pradesh.',
        image: '/agriculture/Chilli.jpg',
        features: [
          'Varieties: Guntur (high heat), Byadgi (deep red color), Kashmiri (mild, bright red)',
          'Packing: 25 kg / 50 kg jute/PP bags',
          'Applications: Curries, sauces, oleoresins, food processing',
          'Quality: Sun-dried pods, strong color retention, moisture-controlled'
        ]
      },
      {
        title: 'Coriander Seeds (Whole, Ground)',
        description: 'Cultivated in Rajasthan, Gujarat, Madhya Pradesh, coriander is one of India\'s core spice exports.',
        image: '/agriculture/Coriander.jpg',
        features: [
          'Forms: Whole seeds, cracked, ground powder',
          'Packing: 25 kg / 50 kg PP bags',
          'Applications: Curry powders, seasonings, pickles, flavoring oils',
          'Quality: Lemon-scented aroma, light green seeds, purity >99%'
        ]
      },
      {
        title: 'Cardamom (Green – selective, premium branding)',
        description: 'Premium-quality cardamom is grown in the Western Ghats of Kerala & Karnataka.',
        image: '/agriculture/Cardamom.jpg',
        features: [
          'Size: 6 mm to 8 mm capsules',
          'Packing: 5 kg / 10 kg cartons or pouches (vacuum-packed for freshness)',
          'Applications: Confectionery, beverages, bakery, perfumery',
          'Quality: Intense aroma, bright green pods, graded as per AGEB/AGB standards'
        ]
      },
      {
        title: 'Fenugreek (Seeds, Powder, Kasuri Methi)',
        description: 'Widely cultivated in Rajasthan & Gujarat, fenugreek is valued for culinary and medicinal uses.',
        image: '/agriculture/Fenugreek.jpg',
        features: [
          'Forms: Seeds, ground powder, dried leaves (Kasuri Methi)',
          'Packing: 25 kg / 50 kg PP bags (seeds/powder), 5 kg cartons (leaves)',
          'Applications: Curry blends, pickling, bakery, health supplements',
          'Quality: Bitter-sweet aroma, golden seeds, clean & graded'
        ]
      },
      {
        title: 'Fennel Seeds (Whole, Ground)',
        description: 'Primarily produced in Rajasthan & Gujarat, Indian fennel has sweet aroma and cooling effect.',
        image: '/agriculture/Fennel.jpg',
        features: [
          'Forms: Whole seeds, ground powder',
          'Packing: 25 kg / 50 kg PP/jute bags',
          'Applications: Confectionery, mouth fresheners, spice blends, tea',
          'Quality: Green color, sweet anise flavor, purity >99%'
        ]
      },
      {
        title: 'Mustard Seeds (Yellow, Black, Brown)',
        description: 'Grown in Rajasthan, Uttar Pradesh, Madhya Pradesh, mustard is used for oil and spice blends.',
        image: '/agriculture/Mustard.jpg',
        features: [
          'Varieties: Yellow (mild), Black & Brown (pungent)',
          'Packing: 25 kg / 50 kg PP bags',
          'Applications: Mustard oil, pickles, condiments, curry powders',
          'Quality: Bold seeds, high oil content, strong pungency'
        ]
      },
      {
        title: 'Ginger (Dry, Powder)',
        description: 'Dried ginger comes from Kerala, Karnataka, Northeast India.',
        image: '/agriculture/Ginger.jpg',
        features: [
          'Forms: Sun-dried rhizomes, ground powder',
          'Packing: 25 kg / 50 kg PP bags, cartons',
          'Applications: Bakery, beverages, spice blends, herbal medicine',
          'Quality: Fibrous texture, strong aroma, high oleoresin content'
        ]
      },
      {
        title: 'Garlic Powder',
        description: 'Made from dehydrated garlic cloves sourced in Madhya Pradesh & Gujarat.',
        image: '/agriculture/Garlic.png',
        features: [
          'Forms: Granules, flakes, fine powder',
          'Packing: 20 kg / 25 kg cartons, PP-lined bags',
          'Applications: Seasonings, sauces, ready-to-eat mixes, pharma uses',
          'Quality: Strong aroma, white color, low moisture content'
        ]
      },
      {
        title: 'Onion Powder',
        description: 'Produced from dehydrated onions mainly in Maharashtra & Gujarat.',
        image: '/agriculture/Onions.png',
        features: [
          'Forms: Flakes, kibbled, fine powder',
          'Packing: 20 kg / 25 kg cartons with inner poly liner',
          'Applications: Soups, sauces, fast food, seasonings',
          'Quality: Pure white/off-white, pungent aroma, free-flowing powder'
        ]
      }
    ],
  },
  {
    title: 'Natural Health & Plant Products',
    subtitle: 'Natural Health & Plant Products',
    slug: 'natural-health-plant-products',
    description: 'India\'s wellness heritage meets global demand in psyllium, moringa, aloe vera, stevia, neem, tulsi, ashwagandha, and amla. We process and export these with modern compliance, supplying nutraceutical and health industries worldwide.',
    subdescription: 'India\'s wellness heritage meets global demand in psyllium, moringa, aloe vera, stevia, neem, tulsi, ashwagandha, and amla. We process and export these with modern compliance, supplying nutraceutical and health industries worldwide.',
    image: '/products/Natural-Health.png',
    subcategories: [
      'Psyllium Husk & Seeds',
      'Moringa',
      'Aloe Vera',
      'Stevia',
      'Neem',
      'Tulsi (Holy Basil)',
      'Ashwagandha',
      'Giloy (Guduchi)',
      'Amla',
    ],
    products: [
      {
        title: 'Psyllium Husk & Seeds (India = world\'s #1 supplier, >80% share)',
        description: 'Psyllium is cultivated almost exclusively in Gujarat and Rajasthan, making India the global leader.',
        image: '/agriculture/Psyllium.jpg',
        features: [
          'Forms: Psyllium Husk (whole, powder), Psyllium Seeds',
          'Size: Husk mesh sizes 30# to 100#',
          'Packing: 25 kg / 50 kg HDPE bags with inner liner, bulk jumbo bags',
          'Applications: Dietary fiber, pharma formulations, colon cleansers, bakery, animal feed',
          'Quality: Swelling index 35–45 ml/g, moisture <10%, A–Grade export quality'
        ]
      },
      {
        title: 'Moringa (Powder, Tea Cut)',
        description: 'Moringa, often called the "Miracle Tree," is widely grown in Southern India & Gujarat.',
        image: '/agriculture/Moringa.jpg',
        features: [
          'Forms: Powder (fine green), Tea cut (dried leaves, flakes)',
          'Packing: 10 kg / 25 kg cartons with inner liners',
          'Applications: Nutraceuticals, herbal teas, dietary supplements, cosmetics',
          'Quality: Chlorophyll-rich deep green color, pesticide-free, high nutrient retention'
        ]
      },
      {
        title: 'Aloe Vera (Powder, Extract, Gel)',
        description: 'Aloe vera is cultivated on large scales in Rajasthan, Gujarat, Uttar Pradesh.',
        image: '/agriculture/AloeVera.jpg',
        features: [
          'Forms: Spray-dried powder, Extract (200:1 concentration), Gel (stabilized)',
          'Packing: 25 kg HDPE drums (powder), 1–5 kg retail packs on request',
          'Applications: Cosmetics, beverages, skincare, pharma, nutraceuticals',
          'Quality: High polysaccharide content, processed under hygienic & GMP conditions'
        ]
      },
      {
        title: 'Stevia Leaves & Powder',
        description: 'Stevia is an emerging Indian crop, cultivated in Madhya Pradesh, Karnataka.',
        image: '/agriculture/Stevia.jpg',
        features: [
          'Forms: Dried stevia leaves, Stevia extract powder (Rebaudioside A >97%)',
          'Packing: 10 kg / 20 kg cartons with poly liners',
          'Applications: Natural sweetener for beverages, bakery, health products',
          'Quality: High sweetness index (200–300x sugar), non-GMO, food-grade certified'
        ]
      },
      {
        title: 'Neem (Powder, Dried Leaves)',
        description: 'Neem is a traditional Ayurvedic herb, grown abundantly in Rajasthan, Uttar Pradesh, Andhra Pradesh.',
        image: '/agriculture/Neem.jpg',
        features: [
          'Forms: Dried neem leaves, Neem powder',
          'Packing: 20 kg / 25 kg PP bags or cartons with poly liner',
          'Applications: Herbal medicine, cosmetics, bio-pesticides, oral care, nutraceuticals',
          'Quality: Strong bitter aroma, green powder, GMP-compliant drying'
        ]
      },
      {
        title: 'Tulsi (Holy Basil – Dried Leaves, Powder, Tea Cut)',
        description: 'Tulsi, known as the "Queen of Herbs," is widely cultivated in Uttar Pradesh, Madhya Pradesh, Rajasthan.',
        image: '/agriculture/Tulsi.jpg',
        features: [
          'Forms: Dried whole leaves, Tea cut, Fine powder',
          'Packing: 10 kg / 20 kg cartons with poly liner',
          'Applications: Herbal teas, nutraceuticals, Ayurvedic medicine, immunity boosters',
          'Quality: Strong aromatic leaves, pesticide-free, rich in eugenol'
        ]
      },
      {
        title: 'Ashwagandha (Root Powder)',
        description: 'Ashwagandha, a powerful adaptogen, is primarily grown in Madhya Pradesh, Rajasthan.',
        image: '/agriculture/Ashwagandha.jpg',
        features: [
          'Forms: Dried roots, Root powder',
          'Packing: 25 kg PP bags, bulk cartons with liners',
          'Applications: Nutraceuticals, herbal supplements, stress relief, stamina & energy boosters',
          'Quality: Root extract standardized up to 5% withanolides, beige powder, GMP-processed'
        ]
      },
      {
        title: 'Giloy (Guduchi – Ayurvedic Immunity Booster)',
        description: 'Giloy is a climbing shrub harvested across Central & South India.',
        image: '/agriculture/Giloy.jpg',
        features: [
          'Forms: Dried stems, Stem powder',
          'Packing: 25 kg PP bags or fiber drums',
          'Applications: Herbal supplements, Ayurveda (immunity booster, anti-inflammatory)',
          'Quality: Clean, naturally dried stems, high phytochemical content, export-certified'
        ]
      },
      {
        title: 'Amla (Powder, Dried)',
        description: 'Amla (Indian Gooseberry) is cultivated in Uttar Pradesh, Gujarat, Madhya Pradesh and valued for its Vitamin C.',
        image: '/agriculture/Amla.jpg',
        features: [
          'Forms: Dried whole, Dehydrated flakes, Powder',
          'Packing: 25 kg PP bags, HDPE drums with poly liner',
          'Applications: Nutraceuticals, herbal teas, cosmetics, hair oils, Ayurveda',
          'Quality: High Vitamin C retention, light green powder, strong sour-tangy aroma'
        ]
      }
    ],
  },
  {
    title: 'Agro Derivatives & Additives',
    subtitle: 'Agro Derivatives & Additives',
    slug: 'agro-derivatives-additives',
    description: 'Beyond raw crops, we offer value-added derivatives like guar gum, tamarind concentrate, and dehydrated onion, garlic, and ginger. These products deliver efficiency and consistency to food and industrial supply chains.',
    subdescription: 'Beyond raw crops, we offer value-added derivatives like guar gum, tamarind concentrate, and dehydrated onion, garlic, and ginger. These products deliver efficiency and consistency to food and industrial supply chains.',
    image: '/agriculture/agro.png',
    subcategories: [
      'Guar Gum',
      'Tamarind Concentrate',
      'Dehydrated Vegetables',
    ],
    products: [
      {
        title: 'Guar Gum (Food Grade, Industrial Grade – India = world\'s #1 supplier)',
        description: 'Guar gum is India\'s most powerful agro derivative, with cultivation concentrated in Rajasthan, Gujarat, Haryana. India contributes ~80% of global guar exports.',
        image: '/agriculture/GuarGum.jpg',
        features: [
          'Forms: Food-grade powder, Industrial-grade powder',
          'Viscosity: 2000–8000 cps (variety-dependent)',
          'Packing: 25 kg / 50 kg HDPE laminated bags with inner liner, bulk jumbo bags',
          'Applications: Food thickener, ice creams, bakery, sauces, oil drilling, mining, textiles, paper industry',
          'Quality: Free-flowing white to off-white powder, mesh sizes 100# to 300#, globally certified'
        ]
      },
      {
        title: 'Tamarind Concentrate (India = global leader in tamarind-based exports)',
        description: 'India is the largest producer of tamarind, mainly in Tamil Nadu, Andhra Pradesh, Karnataka. Tamarind concentrate is derived from pulp, offering high tanginess.',
        image: '/agriculture/TamarindConcentrate.jpg',
        features: [
          'Forms: Tamarind pulp concentrate (65–72° Brix)',
          'Packing: 5 kg / 20 kg aseptic bags in drums, 250 kg HDPE barrels',
          'Applications: Sauces, chutneys, curries, beverages, marinades, food processing',
          'Quality: Deep brown, tangy-sour flavor, free from seeds & fiber, shelf-stable'
        ]
      },
      {
        title: 'Dehydrated Vegetables (Onion Flakes, Garlic Flakes, Ginger Flakes)',
        description: 'India is a top global supplier of dehydrated vegetables, with production hubs in Maharashtra & Gujarat.',
        image: '/agriculture/DehydratedVegetables.jpg',
        features: [
          'Products: Onion (flakes, kibbled, powder), Garlic (flakes, powder), Ginger (flakes, powder)',
          'Packing: 20 kg / 25 kg cartons lined with food-grade poly bags',
          'Applications: Soups, sauces, ready-to-eat meals, spice blends, seasonings, frozen foods',
          'Quality: Low moisture (<6%), strong natural aroma, free-flowing, long shelf life'
        ]
      }
    ],
  },
  {
    title: 'Superfood & Nutraceutical Powders',
    subtitle: 'Superfood & Nutraceutical Powders',
    slug: 'superfood-nutraceutical-powders',
    description: 'From banana and beetroot powders to turmeric curcumin and moringa protein, India\'s farms now fuel global health trends. Vexlure supplies authentic superfoods that meet certifications, helping brands innovate confidently.',
    subdescription: 'From banana and beetroot powders to turmeric curcumin and moringa protein, India\'s farms now fuel global health trends. Vexlure supplies authentic superfoods that meet certifications, helping brands innovate confidently.',
    image: '/products/Superfood.png',
    subcategories: [
      'Banana Powder',
      'Beetroot Powder',
      'Spinach Powder',
      'Pumpkin Powder',
      'Mango Powder',
      'Papaya Powder',
      'Turmeric Curcumin Extract',
      'Ashwagandha Powder',
      'Moringa Protein Powder',
    ],
    products: [
      {
        title: 'Banana Powder (Growing Demand – Baby Foods, Bakery)',
        description: 'Banana powder is produced mainly in Tamil Nadu, Maharashtra, Kerala using fully ripened bananas.',
        image: '/agriculture/BananaPowder.jpg',
        features: [
          'Forms: Spray-dried fine powder',
          'Packing: 20 kg / 25 kg food-grade cartons or HDPE drums with liners',
          'Applications: Baby foods, bakery, smoothies, dietary supplements, flavoring',
          'Quality: Light cream color, fine mesh 80–100#, moisture <6%, natural banana aroma'
        ]
      },
      {
        title: 'Beetroot Powder (Health & Nutraceutical Markets)',
        description: 'Beetroot powder is widely processed in Maharashtra, Gujarat, Karnataka, meeting global superfood demand.',
        image: '/agriculture/BeetrootPowder.jpg',
        features: [
          'Forms: Spray-dried powder, dehydrated flakes, fine powder',
          'Packing: 20 kg cartons, HDPE drums with poly liners',
          'Applications: Nutraceutical supplements, juices, natural food coloring, performance boosters',
          'Quality: Deep red color (betanin-rich), strong earthy aroma, moisture <7%'
        ]
      },
      {
        title: 'Spinach Powder (Superfood Blends)',
        description: 'Spinach is dehydrated and processed into powder, mainly sourced from Uttar Pradesh, Maharashtra.',
        image: '/agriculture/SpinachPowder.jpg',
        features: [
          'Forms: Fine dehydrated powder, flakes',
          'Packing: 20 kg cartons with inner liner',
          'Applications: Superfood blends, bakery, soups, sauces, nutritional supplements',
          'Quality: Rich green color, high iron & chlorophyll, pesticide-free leaves'
        ]
      },
      {
        title: 'Pumpkin Powder (Functional Foods)',
        description: 'Pumpkins grown in Uttar Pradesh, Madhya Pradesh, Karnataka are processed into fine powder.',
        image: '/agriculture/PumpkinPowder.jpg',
        features: [
          'Forms: Spray-dried powder, flakes',
          'Packing: 20 kg food-grade cartons or fiber drums',
          'Applications: Baby food, bakery, soups, functional food ingredients, health drinks',
          'Quality: Orange-yellow powder, natural sweetness, rich in beta-carotene, moisture <6%'
        ]
      },
      {
        title: 'Mango Powder (Amchur & Fruit Powder)',
        description: 'Produced from raw and ripe mangoes in Uttar Pradesh, Gujarat, Maharashtra, India is a leading supplier.',
        image: '/agriculture/MangoPowder.jpg',
        features: [
          'Forms: Amchur (raw mango powder), Spray-dried ripe mango powder',
          'Packing: 20 kg cartons, HDPE drums with liners',
          'Applications: Spice blends, confectionery, beverages, bakery, seasoning',
          'Quality: Golden-yellow color, strong tangy or sweet aroma (variety-based), free-flowing powder'
        ]
      },
      {
        title: 'Papaya Powder (Digestive & Nutraceuticals)',
        description: 'Papaya is cultivated widely in Maharashtra, Gujarat, Andhra Pradesh, and processed into powder for global nutraceutical demand.',
        image: '/agriculture/PapayaPowder.jpg',
        features: [
          'Forms: Spray-dried papaya powder, enzyme-rich papain extract',
          'Packing: 20 kg / 25 kg cartons, HDPE drums with food-grade liners',
          'Applications: Digestive supplements, baby foods, bakery, health drinks, enzyme preparations',
          'Quality: Light orange powder, enzyme-rich (papain), moisture <6%, free-flowing'
        ]
      },
      {
        title: 'Turmeric Curcumin Extract (High-Value Nutraceutical Export)',
        description: 'Curcumin is extracted from turmeric roots grown in Andhra Pradesh, Tamil Nadu, Maharashtra.',
        image: '/agriculture/Turmeric.jpg',
        features: [
          'Forms: Standardized extracts (Curcumin 95%), oleoresins, powders',
          'Packing: 25 kg fiber drums, vacuum-sealed bags',
          'Applications: Nutraceutical supplements, cosmetics, pharma, functional foods',
          'Quality: Bright yellow-orange extract, high purity curcumin content, solvent-free'
        ]
      },
      {
        title: 'Ashwagandha Powder (Adaptogen – Huge Global Demand)',
        description: 'Ashwagandha, an adaptogenic herb, is cultivated in Madhya Pradesh & Rajasthan.',
        image: '/agriculture/Ashwagandha2.jpg',
        features: [
          'Forms: Root powder, standardized extracts (withanolides 2.5%–5%)',
          'Packing: 25 kg PP bags, fiber drums with poly liner',
          'Applications: Stress relief supplements, energy boosters, nutraceuticals, Ayurveda',
          'Quality: Beige fine powder, earthy aroma, moisture <7%, GMP-compliant'
        ]
      },
      {
        title: 'Moringa Protein Powder (Plant-Based Protein, Trending Worldwide)',
        description: 'Moringa, sourced from Tamil Nadu, Andhra Pradesh, Gujarat, is processed into high-protein powder.',
        image: '/agriculture/Moringa.jpg',
        features: [
          'Forms: Protein-rich leaf powder, concentrates',
          'Packing: 20 kg cartons, HDPE drums with liners',
          'Applications: Plant-based protein shakes, nutritional bars, superfood blends',
          'Quality: Deep green fine powder, protein content 25–30%, pesticide-free'
        ]
      }
    ],
  },
];
