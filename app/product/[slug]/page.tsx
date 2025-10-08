// @ts-nocheck
"use client";

import { notFound } from 'next/navigation';
import { GiCheckMark } from "react-icons/gi";
import { CATEGORIES_DATA } from "@/components/categoriesData";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import AnimatedCard from "@/components/Animation/AnimatedCard";
import SplitText from "@/components/Animation/SplitText";
import { use } from 'react';
import Image from 'next/image';

export default function ProductDetailsPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const product = CATEGORIES_DATA.find((p) => p.slug === slug);
  if (!product) return notFound();

  // Helper function to format feature text with colon styling
  const formatFeatureText = (text: string) => {
    const colonIndex = text.indexOf(':');
    if (colonIndex === -1) return text;
    
    const beforeColon = text.substring(0, colonIndex + 1);
    const afterColon = text.substring(colonIndex + 1);
    
    return (
      <>
        <span className="text-[var(--black)] text-product-detail-feature-label font-semibold">{beforeColon}</span>
        <span className="text-[var(--gray-text)] text-product-detail-feature-text font-medium">{afterColon}</span>
      </>
    );
  };

  // Only for agriculture-spices: show Figma-style detail

    return (
      <section className="w-full py-25 px-5 md:px-8 flex flex-col items-center bg-[var(--white)]">
        {/* Hero Image & Title */}
        <section className="w-full max-w-[1440px] relative flex flex-col items-center m-4">
          <div className="relative w-full h-[420px] md:h-[580px] rounded-2xl overflow-hidden shadow">
            <Image 
              src={product.image} 
              alt={product.title} 
              fill
              sizes="(max-width: 768px) 100vw, 1440px"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="w-full h-full absolute inset-0 rounded-2xl bg-[#18181880]" />
            <AnimatedCard className="relative max-w-[920px] z-10 flex flex-col items-center justify-center" delay={0.3} direction="fade">
              <span className="text-product-label font-medium text-white mb-3">• {product.title}</span>
              <h1 className="text-product-detail-hero-title font-semibold text-white mb-4">
                <SplitText text={product.subtitle} className="block" delay={0.05} duration={0.03} />
              </h1>
              <p className="text-white text-product-detail-hero-description mb-0 font-normal">{product.subdescription}</p>
            </AnimatedCard>
          </div>
        </section>

        {/* Agriculture Products Grid */}
        <section className="w-full max-w-[1440px] flex flex-col gap-8 mt-14 md:mt-25">
          {product.products?.map((item, idx) => (
            <AnimatedCard
              key={idx}
              index={idx}
              delay={0.1}
              direction={idx % 2 === 0 ? "left" : "right"}
              className={`flex flex-col md:flex-row ${idx % 2 !== 1 ? 'md:flex-row-reverse' : ''} items-stretch gap-4`}
            >
              {/* Image - no bg, just rounded */}
              <AnimatedSection className="w-full md:w-1/2 flex items-center justify-center relative" delay={0.3 + idx * 0.1}>
                <div className=" w-full h-[250px] md:h-[350px] lg:h-[400px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-2xl object-cover shadow-none"
                    priority={idx === 0}
                  />
                </div>
              </AnimatedSection>
              {/* Info Box - gray bg */}
              <AnimatedSection className="w-full md:w-1/2 bg-[var(--secondary-bg)] rounded-2xl shadow p-4 md:p-8 flex flex-col justify-center" delay={0.2 + idx * 0.1}>
                <h3 className="text-product-detail-card-title font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-product-detail-card-description text-gray-700 mb-4 font-normal">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((f, i) => (
                    <AnimatedCard key={i} index={i} delay={0.5 + idx * 0.1} direction="up">
                      <li className="flex items-center bg-[var(--white)] py-2.5 px-2 rounded">
                        {/* <GiCheckMark className="text-orange-500 mr-2 flex-shrink-0" />  */}
                        <span>{formatFeatureText(f)}</span>
                      </li>
                    </AnimatedCard>
                  ))}
                </ul>
              </AnimatedSection>
            </AnimatedCard>
          ))}
        </section>
      </section>
    );
}
