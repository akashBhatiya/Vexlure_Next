"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import SplitText from "../Animation/SplitText";
import AnimatedSection from "../Animation/AnimatedSection";
import { CATEGORIES_DATA } from "../categoriesData";

const CARD_WIDTH_MOBILE = 290; // w-[290px]
const CARD_WIDTH_DESKTOP = 340; // md:w-[340px]
const CARD_GAP = 24;    // gap-6 = 1.5rem = 24px
const EXTRA_PADDING = 48; // last card visible extra padding

const IndustrySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [sectionHeight, setSectionHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Motion values - responsive spring settings
  const targetX = useMotionValue(0);
  const smoothX = useSpring(targetX, {
    stiffness: isMobile ? 100 : 120,
    damping: isMobile ? 30 : 25,
    mass: isMobile ? 0.8 : 0.5,
  });

  // Check if mobile and calculate section height
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const calculateHeight = () => {
      if (!scrollContainerRef.current) return;

      const currentCardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
      const totalWidth = CATEGORIES_DATA.length * currentCardWidth + 
                        (CATEGORIES_DATA.length - 1) * CARD_GAP + 
                        EXTRA_PADDING;
      
      const viewportWidth = window.innerWidth;
      const scrollableWidth = Math.max(0, totalWidth - viewportWidth);
      
      // Section height = viewport height + scrollable width for smooth scrolling
      setSectionHeight(window.innerHeight + scrollableWidth * 1.5);
    };

    checkMobile();
    calculateHeight();

    window.addEventListener('resize', () => {
      checkMobile();
      calculateHeight();
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Handle vertical scroll to control horizontal scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !scrollContainerRef.current || sectionHeight === 0) {
            ticking = false;
            return;
          }

          const section = sectionRef.current;
          const sectionRect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Check if section is in viewport
          if (sectionRect.top <= 0 && sectionRect.bottom >= windowHeight) {
            const scrollableHeight = sectionHeight - windowHeight;
            const scrollProgress = Math.abs(sectionRect.top) / scrollableHeight;
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

            // Calculate max scroll based on current device
            const currentCardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
            const totalWidth = CATEGORIES_DATA.length * currentCardWidth + 
                              (CATEGORIES_DATA.length - 1) * CARD_GAP + 
                              EXTRA_PADDING;
            
            const maxScrollLeft = Math.max(0, totalWidth - window.innerWidth);

            // Apply horizontal scroll
            const target = -clampedProgress * maxScrollLeft;
            targetX.set(Math.max(-maxScrollLeft, Math.min(0, target)));
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionHeight, targetX, isMobile]);

  // Total motion div width - responsive
  const currentCardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
  const totalWidth = CATEGORIES_DATA.length * currentCardWidth + 
                    (CATEGORIES_DATA.length - 1) * CARD_GAP;

  return (
    <section
      ref={sectionRef}
      id="industry"
      className="w-full bg-[var(--secondary-bg)]"
      style={{ height: sectionHeight  }} // fallback height
    >
      <div className="w-full flex flex-col gap-10 mx-auto sticky top-0  bg-[var(--secondary-bg)] py-12">
        <AnimatedSection
          className="text-center max-w-[740px] mx-auto"
          delay={0.2}
          staggerDelay={0.3}
        >
          <span className="block text-product-label font-medium text-[var(--black)] mb-3">
            • Our Product Range
          </span>
          <SplitText
            text="From Indian Fields to Global Markets"
            className="text-product-title font-semibold text-[var(--black)] text-center mx-auto"
            delay={0.1}
            duration={0.06}
          />
        </AnimatedSection>

        {/* Horizontal scroll container */}
        <div ref={scrollContainerRef} className="overflow-hidden scrollbar-hide">
          <motion.div
            style={{ 
              x: smoothX, 
              width: `${totalWidth + EXTRA_PADDING}px`,
              willChange: 'transform'
            }}
            className="flex gap-6 pl-4 sm:pl-6"
          >
            {CATEGORIES_DATA.map((cat, idx) => (
              <div
                key={`${cat.slug}-${idx}`}
                className="w-[290px] md:w-[340px] h-[380px] md:h-[420px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-300"
                style={{
                  marginRight: idx === CATEGORIES_DATA.length - 1 ? `${EXTRA_PADDING}px` : '0px'
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={360}
                  height={464}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/image/industry-agriculture.png";
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] group-hover:opacity-0 transition-opacity duration-300" />

                {/* Hover black overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Default title */}
                <div className="absolute top-0 left-0 right-0 p-6 text-white group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-industry-card-title font-semibold mb-2 drop-shadow-lg">
                    {cat.title.split(" & ").map((part, index, array) => (
                      <span key={index}>
                        {part}
                        {index < array.length - 1 && (
                          <>
                            {" & "}
                            <br />
                          </>
                        )}
                      </span>
                    ))}
                  </h3>
                </div>

                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex-shrink-0">
                    <h3 className="text-industry-card-title mb-3 font-semibold">
                      {cat.title.split(" & ").map((part, index, array) => (
                        <span key={index}>
                          {part}
                          {index < array.length - 1 && (
                            <>
                              {" & "}
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
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
