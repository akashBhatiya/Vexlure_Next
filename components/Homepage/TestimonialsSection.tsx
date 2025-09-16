"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SplitText from "../Animation/SplitText";
import AnimatedSection from "../Animation/AnimatedSection";
import AnimatedCard from "../Animation/AnimatedCard";
import AnimatedCardMobile from "../Animation/AnimatedCardMobile";

interface Testimonial {
  name: string;
  company: string;
  feedback: string;
  avatar: string;
  cardStyle: string;  
  nameStyle: string;
}
const testimonials: Testimonial[] = [
  {
    name: "Susan Riley",
    company: "Vital Essence Organics - USA",
    feedback:
      "We've worked with several exporters, but Vexlure's turmeric and cumin are among the best—potent aroma, vivid color, and uniform grinding.",
    avatar: "/avatars/susan.png",
    cardStyle: "bg-[var(--white)]",
    nameStyle: "text-[var(--black)]",
  },
  {
    name: "James Thompson",
    company: "Nature's Pantry - Canada",
    feedback:
      "In addition to spices, we also trust Vexlure for their high-quality dried herbs that enhance our culinary products—freshness, vibrant flavor, and consistent quality.",
    avatar: "/avatars/jonathan.png",
    cardStyle: "bg-[var(--white)]",
    nameStyle: "text-[var(--black)]",
  },
  {
    name: "Maria Gonzalez",
    company: "Spice Route Foods - Mexico",
    feedback:
      "Vexlure's organic chili powders have become a staple in our recipes—they deliver heat and depth, perfectly ground for even distribution.",
    avatar: "/avatars/david.png",
    cardStyle: "bg-[var(--white)]",
    nameStyle: "text-[var(--black)]",
  },
  {
    name: "Oliver Chen",
    company: "Heritage Flavors - UK",
    feedback:
      "We appreciate Vexlure's saffron, which offers an unparalleled fragrance and color, a true game changer in our gourmet line.",
    avatar: "/avatars/henrik.jpg",
    cardStyle: "bg-[var(--white)]",
    nameStyle: "text-[var(--black)]",
  },
];

const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    let isScrollPaused = false;
    const scrollSpeed = 0.6;
    
    const animate = () => {
      if (!isScrollPaused) {
        scrollPosition += scrollSpeed;
        
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after delay
    const timer = setTimeout(startAnimation, 2000);

    // Handle card hover events with better event management
    const handleCardMouseEnter = (e: Event) => {
      e.stopPropagation();
      isScrollPaused = true;
    };

    const handleCardMouseLeave = (e: Event) => {
      e.stopPropagation();
      isScrollPaused = false;
    };

    // Use setTimeout to ensure DOM is ready
    const setupEventListeners = () => {
      const cards = scrollContainer.querySelectorAll('.testimonial-card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', handleCardMouseEnter, { passive: true });
        card.addEventListener('mouseleave', handleCardMouseLeave, { passive: true });
      });
      
      return cards;
    };

    const eventTimer = setTimeout(() => {
      const cards = setupEventListeners();
      
      // Store cards reference for cleanup
      scrollContainer.setAttribute('data-cards-setup', 'true');
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(eventTimer);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      // Clean up event listeners
      const cards = scrollContainer.querySelectorAll('.testimonial-card');
      cards.forEach(card => {
        card.removeEventListener('mouseenter', handleCardMouseEnter);
        card.removeEventListener('mouseleave', handleCardMouseLeave);
      });
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full bg-[var(--secondary-bg)] py-12 md:py-16"
    >
      <div className="max-w-[1728px] mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-10 max-w-[335px] md:max-w-2xl lg:max-w-[740px] mx-auto" delay={0.2} staggerDelay={0.3}>
          <span className="block text-sm md:text-base font-medium leading-[22px] md:leading-[24px] text-[var(--black)] mb-2 md:mb-3">
            • Testimonials
          </span>
          <SplitText 
            text="Customer Feedback That Reflects Our Commitment to Excellence"
            className="text-2xl md:text-[40px] font-semibold leading-[36px] md:leading-[52px] text-[var(--black)] mb-12 text-center mx-auto"
            delay={0.1}
            duration={0.06}
          />
        </AnimatedSection>

        {/* Desktop staggered grid */}
        <div className="hidden xl:flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full h-[580px]">
          {testimonials.map((t, i) => (
            <AnimatedCard
              key={i}
              index={i}
              delay={0.3}
              className={`flex flex-col justify-between p-8 shadow-md rounded-2xl transition-colors duration-200 cursor-pointer
        ${t.cardStyle} w-[420px] sm:w-[340px] lg:w-full h-[480px]
        ${i % 2 ? "mt-0 mb-20" : "mt-20 mb-0"} hover:bg-[var(--black)] hover:text-white group`}
            >
              <p
                className={`text-xl font-medium leading-8  ${
                  t.cardStyle.includes("text-[var(--white)]")
                    ? "text-[var(--white)]"
                    : "text-[var(--black)]"
                } group-hover:text-white`}
              >
                {t.feedback}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                {/* <div
                  className={`w-18 h-18 rounded-xl overflow-hidden  flex items-center justify-center`}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={72}
                    height={72}
                    className="w-18 h-18 object-cover "
                    loading="lazy"
                  />
                </div> */}
                <div>
                  <div className={`font-semibold text-xl leading-[30px] mb-2 text-[var(--black)] group-hover:text-white`}>
                    {t.name}
                  </div>
                  <div className={`text-sm font-normal leading-[22px] text-[var(--gray-text)] group-hover:text-white/80`}>{t.company}</div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Mobile & Tablet scroll slider */}
        <div 
          ref={scrollRef}
          className="flex xl:hidden gap-6 overflow-x-auto scroll-hidden p-4 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* First set of testimonials */}
          {testimonials.map((t, i) => (
            <AnimatedCardMobile
              key={`first-${i}`}
              index={i}
              delay={0.4}
              className={`testimonial-card flex flex-col justify-between p-4 shadow-md rounded-2xl transition-all duration-300 cursor-pointer
        ${t.cardStyle} min-w-[335px] w-[335px] h-[412px] flex-shrink-0 hover:bg-[var(--black)] hover:text-white hover:-translate-y-2 hover:shadow-xl group`}
            >
              <p
                className={`text-base leading-6 font-medium  ${
                  t.cardStyle.includes("text-[var(--white)]")
                    ? "text-[var(--white)]"
                    : "text-[var(--black)]"
                } group-hover:text-white`}
              >
                {t.feedback}
              </p>
              <div className="flex items-center gap-3 mt-auto h-13">
                <div>
                  <div className={`font-semibold text-lg leading-[28px] text-[var(--black)] group-hover:text-white`}>
                    {t.name}
                  </div>
                  <div className={`text-xs leading-[20px] font-normal text-[var(--gray-text)] group-hover:text-white/80`}>{t.company}</div>
                </div>
              </div>
            </AnimatedCardMobile>
          ))}
          {/* Duplicate set for infinite loop */}
          {testimonials.map((t, i) => (
            <AnimatedCardMobile
              key={`second-${i}`}
              index={i}
              delay={0.4}
              className={`testimonial-card flex flex-col justify-between p-4 shadow-md rounded-2xl transition-all duration-300 cursor-pointer
        ${t.cardStyle} min-w-[335px] w-[335px] h-[412px] flex-shrink-0 hover:bg-[var(--black)] hover:text-white hover:-translate-y-2 hover:shadow-xl group`}
            >
              <p
                className={`text-lg leading-[28px] font-medium  ${
                  t.cardStyle.includes("text-[var(--white)]")
                    ? "text-[var(--white)]"
                    : "text-[var(--black)]"
                } group-hover:text-white`}
              >
                {t.feedback}
              </p>
              <div className="flex items-center gap-3 mt-auto h-13">
                <div>
                  <div className={`font-semibold text-lg leading-[28px] text-[var(--black)] group-hover:text-white`}>
                    {t.name}
                  </div>
                  <div className={`text-xs leading-[20px] font-normal text-[var(--gray-text)] group-hover:text-white/80`}>{t.company}</div>
                </div>
              </div>
            </AnimatedCardMobile>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
