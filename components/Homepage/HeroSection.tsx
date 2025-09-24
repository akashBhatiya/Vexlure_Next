"use client";
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
      className="w-full min-h-screen flex flex-col items-center justify-start bg-[var(--white)] mt-19 px-4 sm:px-6 md:px-16"
    >
      {/* Hero Background Container */}
      <div className="relative w-full max-w-[1440px] rounded-2xl sm:rounded-3xl shadow-2xl bg-[var(--white)] h-[calc(100vh-130px)] max-h-[880px] z-10 overflow-visible">
        <Image
          src="/image/home.jpg"
          alt="home"
          fill
          priority
          className="object-cover transition-opacity duration-300 hover:opacity-95 rounded-2xl sm:rounded-3xl"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--black)]/75 via-[var(--black)]/50 to-transparent opacity-95 rounded-2xl sm:rounded-3xl" />

        {/* Content */}
        <AnimatedSection
          className="relative h-full flex items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 z-20"
          delay={0.2}
          staggerDelay={0.3}
        >
          <div className="flex flex-col gap-4 sm:gap-6 max-w-[930px] text-center sm:text-left mx-auto">
            <div className="flex flex-col gap-2 sm:gap-3">
              <h1 className="text-hero-title font-semibold md:font-bold text-[var(--white)] tracking-normal">
                Welcome to <br className="hidden sm:block" />
                Vexlure International
              </h1>
              <p className="text-hero-description font-medium tracking-normal text-[var(--white)]/90 max-w-[824px] mx-auto sm:mx-0">
                Rooted in India's farmlands and based in Surat with a presence
                in Munich, we understand agriculture from the seed to the global
                market. With our farming background and export expertise, we
                deliver authentic, high-quality agricultural products and spices
                trusted by businesses worldwide.
              </p>
            </div>
            <div className="flex justify-center sm:justify-start">
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center min-w-[140px] h-10 sm:h-11 rounded-full px-6 sm:px-7 py-2 text-hero-button gap-2 font-medium tracking-tight bg-[var(--orange)] text-[var(--white)] hover:bg-orange-600 transition-colors duration-200"
              >
                About Us
                <HiArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Certificate Logos - Properly Visible */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl flex items-center justify-center overflow-hidden h-[8vh] sm:h-[9vh] md:h-[10vh] lg:h-[11vh] xl:h-[12vh] min-h-[60px] max-h-[140px]">
            <CertificateLogos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
