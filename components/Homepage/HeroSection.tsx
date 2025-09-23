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
      className="w-full h-screen flex flex-col items-center justify-start bg-[var(--white)] mt-19 px-6 md:px-16"
    >
      {/* Hero Background */}
      <div className="relative w-full max-w-[1440px] max-h-[880px] rounded-3xl overflow-hidden shadow-2xl bg-[var(--white)] h-[calc(100vh-50px)]">
        <Image
          src="/image/home.jpg"
          alt="home"
          fill
          priority
          className="object-cover transition-opacity duration-300 hover:opacity-95"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--black)]/75 via-[var(--black)]/50 to-transparent opacity-95" />

      {/* Content */}
<AnimatedSection
  className="relative h-full flex items-center px-6 sm:px-10 md:px-16 lg:px-20 z-10"
  delay={0.2}
  staggerDelay={0.3}
>
  <div className="flex flex-col gap-6 max-w-[930px] text-center sm:text-left mx-auto md:mx-0">
    <div className="flex flex-col gap-3">
      <h1 className="text-hero-title font-semibold md:font-bold text-[var(--white)] tracking-normal">
        Welcome to <br className="hidden sm:block" />
        Vexlure International
      </h1>
      <p className="text-hero-description font-medium tracking-normal text-[var(--white)]/90 max-w-[824px]">
        Rooted in India's farmlands and based in Surat with a presence
        in Munich, we understand agriculture from the seed to the global
        market. With our farming background and export expertise, we
        deliver authentic, high-quality agricultural products and spices
        trusted by businesses worldwide.
      </p>
    </div>
    <div>
      <Link
        href="/about-us"
        className="inline-flex items-center justify-center min-w-[140px] h-11 rounded-full px-7 py-2 text-hero-button gap-2 font-medium tracking-tight bg-[var(--orange)] text-[var(--white)] hover:bg-orange-600"
      >
        About Us
        <HiArrowUpRight />
      </Link>
    </div>
  </div>
</AnimatedSection>

      </div>

      {/* Logo Marquee */}
      <div className="flex justify-center w-full -mt-9 md:-mt-[60px] mb-14 ">
        <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl flex items-center justify-center z-10 overflow-hidden w-[70%] h-[70px] sm:h-[90px] md:h-[120px] ">
          <CertificateLogos />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
