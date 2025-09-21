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

      {/* Product Grid */}
      <div className="flex flex-wrap gap-[clamp(1rem,2vw,1.25rem)] justify-center max-w-[1440px] mx-auto">
        {products.map((p, i) => {
          const isLarge = i % 4 === 0 || i % 4 === 3;

          return (
            <AnimatedCardMobile key={i} index={i} delay={0.2}>
              <div
                className={`w-full bg-[#F4F4F6] rounded-2xl overflow-hidden group
                    flex flex-col md:flex-row-reverse items-stretch h-full md:h-[328px]
                    transition-transform duration-300 hover:scale-105 cursor-pointer
                    ${
                      isLarge
                        ? "xl:max-w-[630px] 2xl:max-w-[820px]"
                        : "xl:max-w-[550px] 2xl:max-w-[590px]"
                    }`}
              >
              {/* Image */}
              <div className="flex-shrink-0 p-[clamp(1rem,2vw,1.25rem)] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={320}
                  className="object-cover w-full rounded-2xl h-[clamp(11.875rem,25vh,12.5rem)] md:h-full md:w-[clamp(14rem,20vw,15rem)] transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between p-[clamp(1rem,2vw,1.25rem)]">
                <div>
                  <h3 className="text-product-card-title font-semibold text-[var(--black)] mb-[clamp(0.5rem,1vw,0.75rem)]">
                    {p.title}
                  </h3>
                  <p className="text-product-description text-[var(--gray-text)] mb-[clamp(1rem,2vw,1.5rem)] line-clamp-7">
                    {p.description}
                  </p>
                </div>
                <Link
                  href={p.link}
                  className="inline-flex items-center clamp(0.875rem,1.3vw,1.125rem) font-semibold text-[var(--orange)] hover:text-orange-600 transition-colors duration-200 group/link"
                >
                  View Product
                  <LuMoveRight className="ml-2 w-[clamp(1rem,1.5vw,1.25rem)] h-[clamp(1rem,1.5vw,1.25rem)] transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
              </div>
            </AnimatedCardMobile>
          );
        })}
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
