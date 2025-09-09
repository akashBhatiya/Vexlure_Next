import React from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import CertificateLogos from "../CertificateLogos";
import AnimatedSection from "../Animation/AnimatedSection";
const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      role="banner"
      aria-label="Vexlure International Hero Section"
      className="w-full flex flex-col items-center justify-center mt-0 md:mt-0 bg-[var(--white)] px-6 pt-20 pb-10 md:pt-20 md:pb-16"
    >
      {/* Main Hero Container */}
      <div
        className="relative w-full max-w-[1440px] rounded-3xl overflow-hidden shadow-2xl mx-2 md:mx-6 bg-[var(--white)]"
        style={{ minHeight: "clamp(637px, 76vh, 820px)" }}
      >
        {/* Background Image */}
        <Image
          src="/image/home.jpg"
          alt=""
          aria-hidden="true"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="transition-opacity duration-300 hover:opacity-95"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--black)]/75 via-[var(--black)]/50 to-transparent opacity-95" />

        {/* Content Container */}
        <div
          className="relative h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-45"
          style={{ zIndex: 2 }}
        >
          <AnimatedSection className="max-w-[930px] text-center sm:text-left mx-auto md:mx-0" delay={0.2} staggerDelay={0.3}>
            <h1 className="md:font-bold text-[var(--white)] mb-5 md:mb-7 tracking-normal leading-[44px] md:leading-[72px] text-[32px] font-semibold md:text-[56px]">
              Welcome to <br className="hidden sm:block" />
              Vexlure International
            </h1>

            <p className="font-medium text-base md:text-xl leading-[24px] md:leading-[32px] tracking-normal text-[var(--white)]/90 mb-9 max-w-[824px]">
              At Vexlure International, we are dedicated to bridging global
              markets and delivering quality products from India to the world.
              With a strong foundation in Surat, India, and an expanding
              presence in Munich, Germany, we specialize in bulk and container
              exports, catering to businesses worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center min-w-[140px] h-11 rounded-full px-7 py-2 text-sm md:text-base gap-2 leading-[22px] md:leading-[24px] font-medium tracking-tight bg-[var(--orange)] text-[var(--white)] hover:bg-orange-600 focus:outline-none focus:ring-0 "
              >
                About Us
                <HiArrowUpRight className="text-sm md:text-base font-medium"/>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Logo Marquee */}
<div className="flex justify-center w-full mt-9 md:mt-12">
  <div
    className="
      relative 
      bg-white 
      rounded-[16px] md:rounded-[24px] 
      flex items-center justify-center 
      -mt-20 md:-mt-28 lg:-mt-34 
      z-10 
      overflow-hidden 
      w-full 
      max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-[1200px]
      min-h-[92px] md:min-h-[120px] lg:max-h-[186px]
    "
  >
    <CertificateLogos />
  </div>
</div>

    </section>
  );
};

export default HeroSection;
