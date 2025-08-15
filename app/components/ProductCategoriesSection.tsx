import React from "react";
import Image from "next/image";
import Link from "next/link";


interface Category {
  title: string;
  description: string;
  image: string;
  subcategories: string[];
  slug: string;
}

const categories: Category[] = [
  {
    title: "Agriculture & Spices",
    slug: "agriculture-spices",
    description: "At Vexlure International, agriculture isn't just a business; it's in our roots.",
    image: "/image/industry-agriculture.png",
    subcategories: [
      "Fresh Vegetables",
      "Oilseeds & NUTS",
      "Pulses & Legumes",
      "Grains & Rice",
      "Whole & Ground Spices",
      "Dry Fruits & Nuts",
      "Natural Fibers",
      "Natural Flavors",
    ],
  },
  {
    title: "Industrial Machinery & Equipment",
    slug: "industrial-machinery",
    description: "We deliver industrial-grade solutions built for reliability, strength, and consistent output.",
    image: "/image/industry-machinery.jpg",
    subcategories: [
      "Hardware & Fasteners",
      "Locks & Handles",
      "Industrial Hose Materials",
    ],
  },
  {
    title: "Textiles & Garments",
    slug: "textiles-garments",
    description: "Textiles are woven into the very fabric of our identity.",
    image: "/image/industry-textiles.jpg",
    subcategories: [
      "Raw & Processed",
      "Dyed & Printed",
      "Embroidered & Fancy",
      "Ready-Made Garments",
      "Home Textiles",
      "Industrial Textiles",
      "Industrial & Security",
    ],
  },
  {
    title: "Paper & Packaging",
    slug: "paper-packaging",
    description: "Modern packaging is more than protection: it's presentation, performance, and purpose.",
    image: "/image/industry-packaging.jpg",
    subcategories: [
      "Packaging Materials",
      "Flexible Packaging",
      "Laminates",
      "Food & Industrial",
      "Stationery",
    ],
  },
  {
    title: "Chemicals",
    description: "Vexlure International leverages industry expertise and a strategic location near Ankleshwar, a global chemical hub.",
    image: "/image/industry-chemicals.jpg",
    subcategories: [
      "Acids & Reagents",
      "Water Treatment",
      "Cleaning Agents",
      "Fertilizer & Agriculture",
    ],
    slug: "chemicals",
  },
];

const ProductCategoriesSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 flex flex-col items-center bg-[var(--white)]">
      {/* Header */}
      <div className="max-w-[900px] mx-auto mb-10">
        <span className="block text-sm md:text-base text-[var(--black)] mb-3 font-medium tracking-wide text-center">• Our Products</span>
        <h2 className="text-3xl md:text-5xl font-semibold text-[var(--black)] mb-4 text-center">Global-Grade Offerings</h2>
        <p className="text-center text-base md:text-xl text-[var(--gray-text)] font-medium max-w-2xl mx-auto">
          Engineered for reliability and efficiency, our products drive performance across chemicals, machinery, and packaging. Designed to meet evolving industrial demands with precision.
        </p>
      </div>
      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-[1240px]">
        {categories.map((cat, idx) => {
          // 1st card full width, rest in 2x2 grid
          if (idx === 0) {
            return (
              <Link key={cat.slug} href={`/product/${cat.slug}`} className="bg-[var(--white)] rounded-2xl overflow-hidden flex flex-col h-full md:col-span-2 group/card">
  <div className="relative w-full aspect-[2.2/1] bg-white overflow-hidden rounded-2xl group">
    <Image
      src={cat.image}
      alt={cat.title}
      fill
      style={{ objectFit: 'cover' }}
      className="w-full h-full object-cover transition-opacity duration-200 group-hover/image:opacity-80"
      sizes="100vw"
      priority
    />
    <div className="absolute left-0 bottom-0 w-full hidden md:flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible gap-3 px-3 pb-3 pt-2 bg-gradient-to-t from-black/60 via-black/10 to-transparent scrollbar-hide group-hover/card:hidden">
      {cat.subcategories.map((sub, i) => (
        <span
          key={i}
          className="bg-[#999999]/50 text-xs text-[var(--white)] font-medium rounded-full shadow-sm backdrop-blur border border-[var(--boarder)] flex items-center justify-center min-w-[120px] h-[34px] px-4 focus:outline-none focus:ring-0"
        >
          {sub}
        </span>
      ))}
    </div>
  </div>
  <div className="p-5 flex-1 flex flex-col">
    <h3 className="text-xl md:text-3xl font-medium text-[var(--black)] mb-1">{cat.title}</h3>
    <p className="text-sm md:text-lg text-[var(--gray-text)] mb-2">{cat.description}</p>
  </div>
</Link>
            );
          } else {
            return (
              <Link key={cat.slug} href={`/product/${cat.slug}`} className="bg-white rounded-2xl overflow-hidden flex flex-col h-full group/card">
  <div className="relative w-full aspect-[1.6/1] bg-white overflow-hidden rounded-2xl group">
    <Image
      src={cat.image}
      alt={cat.title}
      fill
      style={{ objectFit: 'cover' }}
      className="w-full h-full object-cover transition-opacity duration-200 group-hover/image:opacity-80"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
    <div className="absolute left-0 bottom-0 w-full hidden md:flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible gap-3 px-3 pb-3 pt-2 bg-gradient-to-t from-black/60 via-black/10 to-transparent scrollbar-hide group-hover/card:hidden">
      {cat.subcategories.map((sub, i) => (
        <span
          key={i}
          className="bg-[#999999]/50 text-xs text-[var(--white)] font-medium rounded-full py-1 shadow-sm backdrop-blur border border-[var(--boarder)] flex items-center justify-center h-[34px] px-3 focus:outline-none focus:ring-0"
        >
          {sub}
        </span>
      ))}
    </div>
  </div>
  <div className="p-5 flex-1 flex flex-col">
    <h3 className="text-xl md:text-3xl font-medium text-[var(--black)] mb-1">{cat.title}</h3>
    <p className="text-sm md:text-lg text-[var(--gray-text)] mb-2">{cat.description}</p>
  </div>
</Link>
            );
          }
        })}
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
