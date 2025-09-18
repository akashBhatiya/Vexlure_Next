"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SplitText from "../Animation/SplitText";
import AnimatedSection from "../Animation/AnimatedSection";
import { CATEGORIES_DATA } from "../categoriesData";

const IndustrySection: React.FC = () => {

  return (
    <section
      id="industry"
      className="w-full bg-[var(--secondary-bg)] py-12 md:py-16"
    >
      <div className="max-w-[1728px] mx-auto">
        <AnimatedSection className="text-center mb-10 max-w-[335px] md:max-w-2xl lg:max-w-[740px] mx-auto" delay={0.2} staggerDelay={0.3}>
          <span className="block text-sm md:text-base font-medium leading-[22px] md:leading-6 text-[var(--black)] mb-2 md:mb-3">
          • Our Product Range
          </span>
          <SplitText 
            text="From Indian Fields to Global Markets"
            className="text-2xl md:text-[40px] font-semibold leading-9 md:leading-[52px] text-[var(--black)] mb-4 text-center mx-auto"
            delay={0.1}
            duration={0.06}
          />
        </AnimatedSection>
        <div className="px-2 md:px-6 overflow-hidden">
          <div className="flex gap-6 py-4 auto-scroll">
            {/* Duplicate cards for seamless infinite scroll */}
            {[...CATEGORIES_DATA, ...CATEGORIES_DATA].map((cat, idx) => (
                <div
                  key={`${cat.slug}-${idx}`}
                  className="w-[290px] md:w-[360px] h-[360px] md:h-[464px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-300"
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={360}
                    height={464}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => { 
                      e.currentTarget.src = '/image/industry-agriculture.png'; 
                    }}
                  />
                  
                  {/* Default gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] group-hover:opacity-0 transition-opacity duration-300" />
                  
                  {/* Hover black overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Default title (top) */}
                  <div className="absolute top-0 left-0 right-0 p-6 text-white group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-[22px] md:text-[28px] leading-8 md:leading-9 font-semibold mb-2 drop-shadow-lg">
                      {cat.title.split(' & ').map((part, index, array) => (
                        <span key={index}>
                          {part}
                          {index < array.length - 1 && (
                            <>
                              {' & '}
                              <br />
                            </>
                          )}
                        </span>
                      ))}
                    </h3>
                  </div>
                  
                  {/* Hover content (full layout) */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Subtitle at top */}
                    <div className="flex-shrink-0">
                      <h3 className="text-[22px] md:text-[28px] mb-3 font-semibold leading-8 md:leading-9">
                        {cat.title.split(' & ').map((part, index, array) => (
                          <span key={index}>
                            {part}
                            {index < array.length - 1 && (
                              <>
                                {' & '}
                                <br />
                              </>
                            )}
                          </span>
                        ))}
                      </h3>
                      <div className="flex-grow flex items-center">
                      <p className="text-base md:text-lg text-white/90 leading-6 md:leading-7">
                        {cat.subdescription}
                      </p>
                    </div>
                    </div>
                    
                    {/* Arrow at bottom */}
                    <div className="flex-shrink-0 flex justify-start">
                      <Link href={`/product/${cat.slug}`}>
                        <div className="w-12 h-12 bg-[var(--orange)] rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors duration-200">
                          <Image
                            src="/arrow.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                            className="w-7 h-7 text-white" 
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
 } : (
              <div className="text-center w-full text-red-500 font-bold text-lg p-8 bg-red-50 rounded-lg border border-red-200">
                No categories found. CATEGORIES_DATA: {JSON.stringify(CATEGORIES_DATA?.length || 'undefined')}
              </div>
            )
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
