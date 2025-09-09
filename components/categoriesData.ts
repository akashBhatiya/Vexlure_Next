// categoriesData.ts
// Shared data structure for categories and products

export interface ProductFeature {
  title: string;
  description: string;
  image: string;
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
  products?: ProductFeature[];
}

export const CATEGORIES_DATA: CategoryData[] = [
  {
    title: 'Agriculture & Spices',
    subtitle: 'Fresh Vegetables',
    slug: 'agriculture-spices',
    description: "At Vexlure International, agriculture isn't just a business it's in our roots.",
    subdescription: "From onions and garlic to okra, brinjal, and drumsticks, our vegetables are grown with generations of farming expertise. Harvested carefully and packed for durability, they travel fresh and authentic. Vexlure ensures consistency, quality, and timely delivery to global markets.",
    image: '/agriculture/fresh_vegetables.png',
    subcategories: [
      'Fresh Vegetables',
      'Oilseeds & Nuts',
      'Pulses & Legumes',
      'Grains & Rice',
      'Whole & Ground Spices',
      'Dry Fruits & Nuts',
      'Natural Fibers',
      'Natural Health & Plant Products',
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
          'Applications: Widely used in cooking, processing, dehydration & food service industries.',
          'Quality: Export-grade bulbs, A–Grade & Commercial grade.',
        ],
      },
      {
        title: 'Garlic (White, Red, Elephant)',
        description: 'Cultivated in Madhya Pradesh & Gujarat, Indian garlic is prized for its strong flavor and medicinal value.',
        image: '/agriculture/Garlic.png',
        features: [
          'Size: 25 mm to 55 mm (Elephant garlic up to 70 mm)',
          'Color: White & Red varieties',
          'Packing: 5 kg / 10 kg mesh bags, cartons on request',
          'Applications: Culinary seasoning, dehydration, pickling, health & pharma uses.',
          'Quality: Bold cloves, strong aroma, clean & dry bulbs.',
        ],
      },
      {
        title: 'Chilli (Green, Red – Byadgi, Guntur, Kashmiri)',
        description: 'India is the world’s largest chilli exporter, with production concentrated in Andhra Pradesh, Karnataka & Rajasthan.',
        image: '/agriculture/Chilli.png',
        features: [
          'Varieties: Guntur (high heat), Byadgi (deep red color, less pungent), Kashmiri (mild, bright red)',
          'Packing: 5 kg / 10 kg / 25 kg jute & poly bags',
          'Applications: Curry powders, sauces, spice blends, oleoresins, pickles.',
          'Quality: A–Grade pods, sun-dried, strong color retention.',
        ],
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
          'Quality: Clean, mature rhizomes with rich aroma & high oleoresin content.',
        ],
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
    subtitle: 'Hardware & Fasteners',
    slug: 'oilseeds-nuts',
    description: 'We deliver industrial-grade solutions built for reliability, strength, and consistent output.',
    subdescription: 'At Vexlure International, we provide oilseeds and nuts to meet the highest standards of quality and performance.',
    image: '/products/Oilseeds-Nuts.png',
    subcategories: [
      'Hardware & Fasteners',
      'Lab & Scientific',
      'Industrial Raw Materials',
    ],
  },
  {
    title: 'Pulses & Legumes',
    subtitle: 'Raw & Processed',
    slug: 'pulses-legumes',
    description: 'Textiles are woven into the very fabric of our identity.',
    subdescription: 'At Vexlure International, we provide pulses and legumes to meet the highest standards of quality and performance.',
    image: '/products/Pulses-Legumes.png',
    subcategories: [
      'Raw & Processed',
      'Dyed & Printed',
      'Embroidered & Fancy',
      'Ready-Made Garments',
      'Ethnic Wear',
      'Home Textiles',
      'Industrial & Specialty',
    ],
  },
  {
    title: 'Grains & Cereals',
    subtitle: 'Packaging Materials',
    slug: 'grains-cereals',
    description: "Modern packaging is more than protection: it's presentation, performance, and purpose.",
    subdescription: 'At Vexlure International, we provide grains and cereals to meet the highest standards of quality and performance.',
    image: '/products/Grains-Cereals.png',
    subcategories: [
      'Packaging Materials',
      'Flexible Packaging',
      'Laminates',
      'Food & Industrial',
      'Eco-Friendly',
      'Sustainable',
    ],
  },
  {
    title: 'Whole & Ground Spices',
    subtitle: 'Acids & Reagents',
    slug: 'whole-ground-spices',
    description: 'Vexlure International leverages industry expertise and a strategic location near Ankleshwar, a global chemical hub.',
    subdescription: 'At Vexlure International, we provide whole and ground spices to meet the highest standards of quality and performance.',
    image: '/products/Whole-Ground_Spices.png',
    subcategories: [
      'Acids & Inorganic',
      'Water Treatment',
      'Cleaning Agents',
      'Fertilizer & Agriculture',
    ],
  },
  {
    title: 'Natural Health & Plant Products',
    subtitle: 'Natural Health',
    slug: 'natural-health-plant-products',
    description: "At Vexlure International, agriculture isn't just a business it's in our roots.",
    subdescription: 'At Vexlure International, we provide natural health and plant products to meet the highest standards of quality and performance.',
    image: '/products/Natural-Health.png',
    subcategories: [
      'Fresh Vegetables',
      'Oilseeds & Nuts',
      'Pulses & Legumes',
      'Grains & Rice',
      'Whole & Ground Spices',
      'Dry Fruits & Nuts',
      'Natural Fibers',
      'Natural Health & Plant Products',
    ],
  },
  {
    title: 'Agro Derivatives & Additives',
    subtitle: 'Agro Derivatives',
    slug: 'agro-derivatives-additives',
    description: 'We deliver industrial-grade solutions built for reliability, strength, and consistent output.',
    subdescription: 'At Vexlure International, we provide agro derivatives and additives to meet the highest standards of quality and performance.',
    image: '/agriculture/agro.png',
    subcategories: [
      'Hardware & Fasteners',
      'Lab & Scientific',
      'Industrial Raw Materials',
    ],
  },
  {
    title: 'Superfood & Nutraceutical Powders',
    subtitle: 'Superfood Powders',
    slug: 'superfood-nutraceutical-powders',
    description: 'Textiles are woven into the very fabric of our identity.',
    subdescription: 'At Vexlure International, we provide superfood and nutraceutical powders to meet the highest standards of quality and performance.',
    image: '/products/Superfood.png',
    subcategories: [
      'Raw & Processed',
      'Dyed & Printed',
      'Embroidered & Fancy',
      'Ready-Made Garments',
      'Ethnic Wear',
      'Home Textiles',
      'Industrial & Specialty',
    ],
  },
];
