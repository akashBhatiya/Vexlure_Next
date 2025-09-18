import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES_DATA } from "./categoriesData";
import SplitText from "./Animation/SplitText";
import AnimatedSection from "./Animation/AnimatedSection";
import AnimatedCardMobile from "./Animation/AnimatedCardMobile";

const ProductCategoriesSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 flex flex-col items-center bg-[var(--white)]">
      {/* Header */}
      <AnimatedSection className="max-w-[900px] md:w-full mx-auto mb-18 md:mb-25">
        <span className="block text-sm md:text-base text-[var(--black)] mb-2 md:mb-3 leading-[22px] md:leading-6 font-medium tracking-wide text-center">
          • Our Products
        </span>
        <SplitText
          text="Global-Grade Offerings"
          className="text-[32px] md:text-5xl leading-[44px] md:leading-16 font-semibold text-[var(--black)] mb-2 md:mb-4 text-center"
        />
        <p className="text-center text-base md:text-xl leading-[24px] md:leading-[32px] text-[var(--gray-text)] font-normal max-w-[698px] mx-auto">
          Engineered for reliability and efficiency, our products drive
          performance across chemicals, machinery, and packaging. Designed to
          meet evolving industrial demands with precision.
        </p>
      </AnimatedSection>
      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-14 w-full max-w-[1240px]">
        {CATEGORIES_DATA.map((cat, idx) => {
          // 1st card full width, rest in 2x2 grid
          if (idx === 0 || idx === 5) {
            return (
              <AnimatedCardMobile
                key={cat.slug}
                index={idx}
                delay={0.2}
                className="md:col-span-2"
              >
                <Link
                  href={`/product/${cat.slug}`}
                  className="bg-[var(--white)] rounded-2xl overflow-hidden flex flex-col h-full group/card"
                >
                  <div className="relative w-full min-h-[220px] md:h-[520px] aspect-[2.2/1] bg-white overflow-hidden rounded-2xl group">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="w-full h-full object-cover transition-opacity duration-200 group-hover/image:opacity-80"
                      sizes="100vw"
                      priority
                    />
                    <div className="absolute left-0 bottom-0 w-full hidden md:flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible gap-3 px-3 pb-3 pt-2 bg-gradient-to-t from-black/60 via-black/10 to-transparent scrollbar-hide opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      {cat.subcategories?.map((sub, i) => (
                        <span
                          key={i}
                          className="bg-[#999999]/50 text-xs leading-[20px] text-[var(--white)] font-medium rounded-full shadow-sm backdrop-blur border border-[var(--boarder)] flex items-center justify-center min-w-[120px] h-[34px] px-4 focus:outline-none focus:ring-0"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-1 mt-6 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-[28px] leading-[32px] md:leading-[42px] font-medium text-[var(--black)] mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-sm md:text-lg leading-[22px] md:leading-[28px] text-[var(--gray-text)] mb-2">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </AnimatedCardMobile>
            );
          } else {
            return (
              <AnimatedCardMobile key={cat.slug} index={idx} delay={0.2}>
                <Link
                  href={`/product/${cat.slug}`}
                  className="bg-white rounded-2xl overflow-hidden flex flex-col h-full group/card"
                >
                  <div className="relative w-full min-h-[220px] md:h-[440px] aspect-[2.2/1] bg-white overflow-hidden rounded-2xl group">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="w-full h-full object-cover transition-opacity duration-200 group-hover/image:opacity-80"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute left-0 bottom-0 w-full hidden md:flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible gap-3 px-3 pb-3 pt-2 bg-gradient-to-t from-black/60 via-black/10 to-transparent scrollbar-hide opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      {cat.subcategories?.map((sub, i) => (
                        <span
                          key={i}
                          className="bg-[#999999]/50 text-xs leading-[20px] text-[var(--white)] font-medium rounded-full shadow-sm backdrop-blur border border-[var(--boarder)] flex items-center justify-center min-w-[120px] h-[34px] px-4 focus:outline-none focus:ring-0"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-1 mt-6 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-[28px] leading-[32px] md:leading-[42px] font-medium text-[var(--black)] mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-sm md:text-lg leading-[22px] md:leading-[28px] text-[var(--gray-text)] mb-2">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </AnimatedCardMobile>
            );
          }
        })}
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
