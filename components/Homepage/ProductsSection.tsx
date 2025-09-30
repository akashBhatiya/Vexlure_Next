import React from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";
import SplitText from "../Animation/SplitText";
import AnimatedSection from "../Animation/AnimatedSection";
import AnimatedCardMobile from "../Animation/AnimatedCardMobile";

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
}
const products: Product[] = [
  {
    title: "Guar Gum",
    description:
      "Supplying nearly 80% of the world’s demand, guar gum is more than just an export it is a backbone for industries from food to oil drilling. Consistency, viscosity control, and reliability make it one of the strongest global commodities.",
    image: "/products/Guar-Gum.png",
    link: "#",
  },
  {
    title: "Psyllium Husk",
    description:
      "Recognized worldwide for purity and swelling index, psyllium husk remains unmatched in dietary fiber and pharmaceutical applications. With steady production bases, it secures a dominant position in international wellness supply chains.",
    image: "/products/Psyllium-Husk.png",
    link: "#",
  },
  {
    title: "Peanuts",
    description:
      "With high oil content and uniform grading, peanuts remain one of the most versatile exports from snacks and confectionery to edible oils. Reliable sourcing and strict aflatoxin control ensure trust across bulk food markets.",
    image: "/products/Peanuts.png",
    link: "#",
  },
  {
    title: "Garlic Powder",
    description:
      "Dehydrated garlic stands out for its pungency and long shelf life, serving as a staple for seasoning blends, ready meals, and industrial food production. Clean processing and consistent aroma make it a quiet global essential.",
    image: "/products/Garlic-Powder.png",
    link: "#",
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section
      id="products"
      className="w-full py-12  px-5 md:px-8 flex flex-col items-center bg-[var(--white)]"
    >
      
        {/* Header */}      
        <AnimatedSection className="text-center  max-w-[clamp(335px,90vw,740px)] mx-auto" delay={0.2} staggerDelay={0.3}>
          <span className="block text-product-label font-medium text-[var(--black)] mb-[clamp(0.5rem,1vw,0.75rem)]">
          • Our Products
          </span>
          <SplitText 
            text="Supplying Industries with Reliable Global Products"
            className="text-product-title font-semibold text-[var(--black)] mb-[clamp(2rem,4vw,3rem)] text-center mx-auto"
            delay={0.1}
            duration={0.06}
          />
        </AnimatedSection>

      {/* Product Grid - Responsive Layout */}
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Mobile: Single column */}
        <div className="grid grid-cols-1 md:hidden gap-6">
          {products.map((p, i) => (
            <AnimatedCardMobile key={i} index={i} delay={0.2}>
              <div className="w-full bg-[#F4F4F6] rounded-2xl overflow-hidden group flex flex-col items-stretch h-full transition-transform duration-300 hover:scale-105 cursor-pointer">
                {/* Mobile Content - Single Container */}
                <div className="flex-1 flex flex-col p-5 gap-3">
                  {/* Mobile Image */}
                  <div className="flex-shrink-0 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={400}
                      height={200}
                      className="object-cover w-full rounded-2xl h-48 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Mobile Text Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-product-card-title font-semibold text-[var(--black)]">
                      {p.title}
                    </h3>
                    <p className="text-product-description text-[var(--gray-text)] line-clamp-4">
                      {p.description}
                    </p>
                  </div>
                  
                  {/* Mobile Link */}
                  <Link
                    href={p.link}
                    className="inline-flex items-center text-sm font-semibold text-[var(--orange)] hover:text-orange-600 transition-colors duration-200 group/link mt-auto"
                  >
                    View Product
                    <LuMoveRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimatedCardMobile>
          ))}
        </div>

        {/* Tablet: Two columns */}
        <div className="hidden md:grid xl:hidden grid-cols-2 gap-6">
          {products.map((p, i) => (
            <AnimatedCardMobile key={i} index={i} delay={0.2}>
              <div className="w-full bg-[#F4F4F6] rounded-2xl overflow-hidden group flex flex-col items-stretch h-full transition-transform duration-300 hover:scale-105 cursor-pointer">
                {/* Tablet Content - Single Container */}
                <div className="flex-1 flex flex-col p-5 gap-3">
                  {/* Tablet Image */}
                  <div className="flex-shrink-0 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={400}
                      height={220}
                      className="object-cover w-full rounded-2xl h-52 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Tablet Text Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-product-card-title font-semibold text-[var(--black)]">
                      {p.title}
                    </h3>
                    <p className="text-product-description text-[var(--gray-text)] line-clamp-3">
                      {p.description}
                    </p>
                  </div>
                  
                  {/* Tablet Link */}
                  <Link
                    href={p.link}
                    className="inline-flex items-center text-sm font-semibold text-[var(--orange)] hover:text-orange-600 transition-colors duration-200 group/link mt-auto"
                  >
                    View Product
                    <LuMoveRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimatedCardMobile>
          ))}
        </div>

        {/* Large Screen: Flex layout with different sizes */}
        <div className="hidden xl:flex flex-wrap gap-5 justify-center">
          {products.map((p, i) => {
            const isLarge = i % 4 === 0 || i % 4 === 3;

            return (
              <AnimatedCardMobile key={i} index={i} delay={0.2}>
                <div
                  className={`bg-[#F4F4F6] rounded-2xl overflow-hidden
                      flex flex-row-reverse items-stretch h-[328px]
                      transition-transform duration-300  cursor-pointer
                      ${
                        isLarge
                          ? "w-full max-w-[630px] 2xl:max-w-[820px]"
                          : "w-full max-w-[550px]  2xl:max-w-[590px]"
                      }`}
                >
                {/* Large Screen Image */}
                <div className="flex-shrink-0 p-5 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={320}
                    className="object-cover w-full rounded-2xl h-full max-w-[240px] transition-transform duration-300 "
                  />
                </div>

                {/* Large Screen Content */}
                <div className="flex-1 flex flex-col justify-between p-5">
                  <div>
                    <h3 className="text-product-card-title font-semibold text-[var(--black)] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-product-description text-[var(--gray-text)] mb-6 line-clamp-5">
                      {p.description}
                    </p>
                  </div>
                  <Link
                    href={p.link}
                    className="inline-flex items-center text-base font-semibold text-[var(--orange)] hover:text-orange-600 transition-colors duration-200 group/link"
                  >
                    View Product
                    <LuMoveRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
                </div>
              </AnimatedCardMobile>
            );
          })}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex w-full justify-center mt-[clamp(2rem,4vw,2.5rem)]">
        <Link
          href="/product"
          className="bg-[var(--orange)] font-medium hover:bg-[var(--orange)]/90 text-[var(--white)] px-[clamp(1.5rem,3vw,1.75rem)] py-[clamp(0.625rem,1.5vw,0.75rem)] rounded-full flex items-center gap-[clamp(0.5rem,1vw,0.75rem)] text-fluid-sm transition-all justify-center focus:outline-none focus:ring-0"
        >
          View the Product <HiArrowUpRight className="w-[clamp(1rem,1.5vw,1.25rem)] h-[clamp(1rem,1.5vw,1.25rem)]" />
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
