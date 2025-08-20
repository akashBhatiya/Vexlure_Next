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
    subtitle: 'Farm Fresh, Globally Delivered',
    slug: 'agriculture-spices',
    description: "At Vexlure International, agriculture isn't just a business it's in our roots.",
    subdescription: "At Vexlure International, agriculture is in our roots. With a farming legacy and global expertise, we deliver authentic, high-quality agricultural and spice products worldwide.",
    image: '/image/industry-agriculture.png',
    subcategories: [
      'Fresh Vegetables',
      'Oilseeds & NUTS',
      'Pulses & Legumes',
      'Grains & Rice',
      'Whole & Ground Spices',
      'Dry Fruits & Nuts',
      'Natural Fibers',
      'Natural Flavors',
    ],
    products: [
      {
        title: 'Fresh Vegetables',
        description: 'Sourced directly from trusted farms, our fresh vegetables bring unmatched flavor, nutrition, and quality to your table. From onions to moringa pods, we deliver nature’s best, handpicked for freshness.',
        image: '/agriculture/fresh_vegetables.png',
        features: [
          'Onions (Red, White, Pink)',
          'Green Chillis',
          'Garlic',
          'Ginger',
          'Drumsticks (Moringa Pods)',
        ],
      },
      {
        title: 'Oilseeds & Nuts',
        description: 'Carefully sourced from premium growers, our oilseeds and nuts are rich in flavor, nutrition, and quality. Perfectly processed to meet global standards, they bring natural goodness to every market.',
        image: '/agriculture/oilseeds_nuts.png',
        features: [
          'Peanuts (Raw, Blanched)',
          'Sesame Seeds (White, Black)',
          'Soybeans (Whole, Processed)',
          'Mustard Seeds (Yellow, Black)',
          'Castor Seeds',
        ],
      },
      {
        title: 'Pulses & Legumes',
        description: 'Packed with protein and essential nutrients, our pulses and legumes are sourced from trusted farms for superior taste and quality. Perfect for healthy, wholesome meals worldwide.',
        image: '/agriculture/pulses_legumes.png',
        features: [
          'Chickpeas (Kabuli, Desi)',
          'Pigeon Peas (Tur Dal)',
          'Green Gram (Whole, Split)',
          'Red Lentils (Whole, Split)',
          'Black Gram (Whole, Split)',
        ],
      },
      {
        title: 'Grains & Rice',
        description: 'Our premium grains and rice are carefully selected for their rich flavor, texture, and nutritional value bringing you quality and consistency in every grain.',
        image: '/agriculture/grains_rice.png',
        features: [
          'Basmati Rice (1121, 1509)',
          'Non-Basmati Rice (IR64, Parboiled)',
          'Non-Basmati Rice (IR64, Parboiled)',
          'Sorghum (Jowar - White, Yellow)',
          'Millets (Pearl, Finger, Foxtail, Little, Kodo)',
        ],
      },
      {
        title: 'Whole & Ground Spices',
        description: 'From vibrant whole spices to finely ground blends, we deliver authentic flavors that preserve freshness, aroma, and taste for kitchens worldwide.',
        image: '/agriculture/spices.png',
        features: [
          'Turmeric (Fingers, Powder)',
          'Cumin Seeds (Whole, Ground)',
          'Chilli (Whole, Powder)',
          'Coriander Seeds (Whole, Cracked)',
          'Cardamom (Green, Black)',
        ],
      },
      {
        title: 'Dry Fruits & Nuts',
        description: 'Premium dry fruits and nuts sourced from trusted growers, packed with nutrition and rich flavor. Perfect for healthy snacking or adding quality to your recipes.',
        image: '/agriculture/dryfruits.png',
        features: [
          'Cashews (W180, W240, W320)',
          'Almonds (Whole, Sliced - Imported & Re-exported)',
          'Raisins (Golden, Black)',
          'Walnuts (In Shell, Kernels)',
          'Dates (Dry, Wet)',
        ],
      },
      {
        title: 'Natural Fibers & Health Products',
        description: 'High-quality natural fibers and health products, sustainably sourced to support wellness and eco-friendly living. Combining tradition with modern quality standards.',
        image: '/agriculture/fibers.png',
        features: [
          'Psyllium Husk (Whole, Powder)',
          'Psyllium Seeds',
          'Moringa Powder',
          'Aloe Vera Products (Powder, Gel - if applicable)',
          'Stevia Leaves (Dried, Powdered)',
        ],
      },
      {
        title: 'Agro Derivatives & Additives',
        description: 'Premium agro derivatives and additives designed to enhance product quality and performance, sourced responsibly to meet global industry standards.',
        image: '/agriculture/agro.png',
        features: [
          'Guar Gum (Food Grade, Industrial Grade)',
          'Onion Powder',
          'Garlic Powder',
          'Dehydrated Ginger Powder',
          'Tamarind Concentrate',
        ],
      },
    ],
  },
  {
    title: 'Industrial Machinery & Equipment',
    subtitle: 'Hardware & Fasteners',
    slug: 'industrial-machinery',
    description: 'We deliver industrial-grade solutions built for reliability, strength, and consistent output.',
    subdescription: 'At Vexlure International, we provide industrial machinery and equipment to meet the highest standards of quality and performance.',
    image: '/image/industry-machinery.jpg',
    subcategories: [
      'Hardware & Fasteners',
      'Locks & Handles',
      'Industrial Hose Materials',
    ],
  },
  {
    title: 'Textiles & Garments',
    subtitle: 'Raw & Processed',
    slug: 'textiles-garments',
    description: 'Textiles are woven into the very fabric of our identity.',
    subdescription: 'At Vexlure International, we provide textiles and garments to meet the highest standards of quality and performance.',
    image: '/image/industry-textiles.jpg',
    subcategories: [
      'Raw & Processed',
      'Dyed & Printed',
      'Embroidered & Fancy',
      'Ready-Made Garments',
      'Home Textiles',
      'Industrial Textiles',
      'Industrial & Security',
    ],
  },
  {
    title: 'Paper & Packaging',
    subtitle: 'Packaging Materials',
    slug: 'paper-packaging',
    description: "Modern packaging is more than protection: it's presentation, performance, and purpose.",
    subdescription: 'At Vexlure International, we provide paper and packaging materials to meet the highest standards of quality and performance.',
    image: '/image/industry-packaging.jpg',
    subcategories: [
      'Packaging Materials',
      'Flexible Packaging',
      'Laminates',
      'Food & Industrial',
      'Eco-Friendly',
      'Stationery',
    ],
  },
  {
    title: 'Chemicals',
    subtitle: 'Acids & Reagents',
    slug: 'chemicals',
    description: 'Vexlure International leverages industry expertise and a strategic location near Ankleshwar, a global chemical hub.',
    subdescription: 'At Vexlure International, we provide chemicals to meet the highest standards of quality and performance.',
    image: '/image/industry-chemicals.jpg',
    subcategories: [
      'Acids & Reagents',
      'Water Treatment',
      'Cleaning Agents',
      'Fertilizer & Agriculture',
    ],
  },
];
