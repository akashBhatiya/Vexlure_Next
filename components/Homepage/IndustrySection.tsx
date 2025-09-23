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
      className="w-full bg-[var(--secondary-bg)] py-12 "
    >
      <div className="max-w-[1728px] flex flex-col gap-10 mx-auto">
        <AnimatedSection className="text-center max-w-[335px] md:max-w-[740px] mx-auto" delay={0.2} staggerDelay={0.3}>
          <span className="block text-product-label font-medium text-[var(--black)] mb-2 md:mb-3">
          • Our Product Range
          </span>
          <SplitText 
            text="From Indian Fields to Global Markets"
            className="text-product-title font-semibold text-[var(--black)] text-center mx-auto"
            delay={0.1}
            duration={0.06}
          />
        </AnimatedSection>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 py-4 px-6" style={{ width: 'max-content' }}>
              {/* All category cards for manual scrolling */}
              {CATEGORIES_DATA.map((cat, idx) => (
                <div
                  key={`${cat.slug}-${idx}`}
                  className="w-[290px] md:w-[340px] h-[360px] md:h-[420px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-300"
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
                    <h3 className="text-industry-card-title font-semibold mb-2 drop-shadow-lg">
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
                      <h3 className="text-industry-card-title mb-3 font-semibold">
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
                      <p className="text-industry-card-description text-white/90">
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
            }
            </div>
          </div>
      </div>
    </section>
  );
};

export default IndustrySection;
