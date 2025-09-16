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
      className="w-full py-12 md:py-16 px-5 md:px-8 flex flex-col items-center bg-[var(--white)]"
    >
      
        {/* Header */}      
        <AnimatedSection className="text-center mb-10 max-w-[335px] md:max-w-2xl lg:max-w-[740px] mx-auto" delay={0.2} staggerDelay={0.3}>
          <span className="block text-sm md:text-base font-medium leading-[22px] md:leading-[24px] text-[var(--black)] mb-2 md:mb-3">
          • Our Products
          </span>
          <SplitText 
            text="Supplying Industries with Reliable Global Products"
            className="text-2xl md:text-[40px] font-semibold leading-[36px] md:leading-[52px] text-[var(--black)] mb-12 text-center mx-auto"
            delay={0.1}
            duration={0.06}
          />
        </AnimatedSection>

      {/* Product Grid */}
      <div className="flex flex-wrap gap-5 justify-center max-w-[1440px] mx-auto">
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
              <div className="flex-shrink-0 p-5 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={320}
                  className="object-cover w-full rounded-2xl h-[190px] md:h-full md:w-[240px] transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between p-5">
                <div>
                  <h3 className="text-xl md:text-2xl leading-[30px] md:leading-[36px] font-semibold text-[var(--black)] mb-3 line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="text-sm md:text-lg leading-[22px] md:leading-[28px] font-normal text-[var(--gray-text)] mb-3 line-clamp-5">
                    {p.description}
                  </p>
                </div>
                <a
                  href={p.link}
                  className="inline-flex items-center text-[var(--orange)] font-semibold text-sm md:text-lg hover:underline focus:outline-none focus:ring-0"
                >
                  View Product{" "}
                  <LuMoveRight className="ml-2 align-middle text-xl  text-[var(--black)]" />
                </a>
              </div>
              </div>
            </AnimatedCardMobile>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="flex w-full justify-center mt-10">
        <Link
          href="/product"
          className="bg-[var(--orange)] font-medium hover:bg-[var(--orange)]/90 text-[var(--white)] px-7 py-2.5 rounded-full flex items-center gap-2 text-sm md:text-base leading-[22px] md:leading-[24px] transition-all justify-center focus:outline-none focus:ring-0"
        >
          View the Product <HiArrowUpRight />
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
