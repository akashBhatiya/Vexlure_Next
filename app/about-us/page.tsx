"use client";
import React from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import AnimatedFlexSection from "@/components/Animation/AnimatedFlexSection";
import CertificateLogos from "@/components/CertificateLogos";
import { valuesData } from "@/data/aboutUsData";
import { blockquote } from "framer-motion/client";

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full min-h-[calc(100vh-80px)] pt-25 px-5 md:px-16 flex flex-col items-center justify-center bg-[var(--white)]">
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-6 md:gap-8">
          {/* Content */}
          <AnimatedFlexSection className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2.5 md:gap-6">
            {/* Left Content */}
            <div>
              <span className="text-product-label font-medium text-[var(--black)] mb-2 md:mb-3 block">
                • About Vexlure
              </span>
              <h1 className="text-about-hero-title font-semibold text-[var(--black)]">
                Delivering Premium Agricultural Products Worldwide
              </h1>
            </div>

            {/* Right Content */}
            <div className="md:ml-auto md:self-end">
              <p className="text-about-hero-description text-[var(--gray-text)] max-w-2xl">
                We connect farmers to global markets with trust and efficiency.
                Delivering premium agricultural products worldwide.
              </p>
            </div>
          </AnimatedFlexSection>

          {/* Hero Image - Responsive Height */}
          <div className="w-full pb-8">
            <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[59vh] max-h-[580px]">
              <Image
                src="/about-us/about-hero.png"
                alt="Agricultural products and farming"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
                className="rounded-2xl object-cover shadow-lg"
                priority
              />
              </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12  px-5 md:px-16 bg-[var(--secondary-bg)]">
        <AnimatedSection className="w-full max-w-[1440px] mx-auto text-center" delay={0.2} staggerDelay={0.2}>
          <h2 className="text-about-section-title font-semibold text-[var(--black)] mb-8 max-w-5xl mx-auto">
            Vexlure International is more than an exporter — we are the bridge
            between India's farms and the world's markets.
          </h2>

          <div className="my-8">
            <p className="text-fluid-xs text-[var(--gray-text)] mb-8 md:mb-16 max-w-2xl mx-auto">
              WE FOLLOW THE HIGHEST GLOBAL STANDARDS AND CERTIFICATIONS.
            </p>

            {/* Certificates */}
            <div className="relative w-full overflow-hidden ">
              <CertificateLogos />
              <div className="absolute left-0 top-0 h-full w-25 md:w-60 bg-gradient-to-r from-[#F3F3F3] to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-25 md:w-60 bg-gradient-to-l from-[#F3F3F3] to-transparent pointer-events-none" />{" "}
            </div>
          </div>
          {/* Connecting India's Harvests Section */}
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-16" delay={0.3} staggerDelay={0.15}>
            {/* Left Content */}
            <div className="text-left">
              <h3 className="text-about-main-title font-semibold text-[var(--black)] mb-6">
                Connecting India's Harvests to Global Markets
              </h3>
              <p className="text-about-quote text-[var(--gray-text)] font-medium mb-6">
                Rooted in Gujarat's farmlands and headquartered in Surat, with a
                base in Munich, we deliver authentic, high-quality agricultural
                products and spices that reflect India's farming tradition.
              </p>
              <blockquote className="text-about-small-text text-[var(--black)] mb-6">
                "We exist for one purpose: to connect the dedication of Indian
                farmers with the needs of international businesses."
              </blockquote>
              <p className="text-about-small-text text-[var(--black)]">
                - Vexlure International
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src="/about-us/about-world-food.jpg"
                alt="Indian spices and agricultural products"
                width={600}
                height={400}
                className="rounded-2xl w-full h-[200px] md:h-[400px] object-cover shadow-lg"
              />
              {/* Quality Assured Badge */}
              <div className="absolute top-4 right-4 bg-white rounded-[8px] px-3 py-1 shadow-md flex items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-full">
                  <Image
                    src="/about-us/Frame.svg"
                    alt="Quality Assured"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-fluid-xs font-medium text-[var(--black)]">
                  Quality Assured
                </span>
              </div>
              {/* Global Sourcing Badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-[8px] px-3 py-1 shadow-md flex items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-full">
                  <Image
                    src="/about-us/Global.svg"
                    alt="Global Sourcing"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-fluid-xs font-medium text-[var(--black)]">
                  Global Sourcing
                </span>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </section>

      <section className="w-full py-14  px-5 md:px-16 bg-[var(--white)]">
        <AnimatedSection className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Title and Image */}
            <div>
              <div className="mb-8 md:mb-18">
                <span className="text-product-label font-medium text-[var(--black)] block mb-2">
                  • Our Story
                </span>
                <h1 className="text-about-main-title font-semibold text-[var(--black)]">
                  Rooted in Soil, Growing Globally with Heritage
                </h1>
              </div>
              
              <div className="relative">
                <Image
                  src="/about-us/community-people-working-together-agriculture-grow-food.jpg"
                  alt="Community working together in agriculture"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-[200px] md:h-[380px] object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-8 text-about-body-text text-[var(--gray-text)]">
              <p>
                The story of Vexlure International begins in the fields. Our
                founders, Jash Sarodiya and Vaidik Kakadiya, come from families
                where farming wasn't just an occupation — it was a way of life.
                Their parents, grandparents, and generations before them
                cultivated the soil with dedication, producing crops that fed
                communities and sustained livelihoods.
              </p>
              <p>
                Inspired by this legacy, Jash and Vaidik saw a larger vision.
                They realized that the authenticity and richness of Indian
                agriculture shouldn't remain bound to local markets. With deep
                roots in farming and a clear ambition to scale globally, they
                established Vexlure International — not only to trade products,
                but to carry forward the story of Indian farmers onto the world
                stage.
              </p>
              <p>
                Today, Vexlure represents the perfect blend of heritage and
                ambition: a business built on ancestral knowledge, enhanced by
                modern trade expertise, logistics networks, and global
                compliance standards.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Our Vision Section */}
      <section className="w-full py-12  px-5 md:px-16 bg-[var(--secondary-bg)]">
        <AnimatedSection className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Right Content - Shows first on mobile */}
            <div className="lg:order-2">
              <span className="text-product-label font-medium text-[var(--black)] block">
                • Our Vision
              </span>
              <div className="space-y-6">

              <h2 className="text-about-main-title font-semibold text-[var(--black)]">
                Representing India's Heritage, Quality, and Taste on the Global
                Stage
              </h2>
              <p className="text-about-body-text text-[var(--gray-text)]">
                We dream big. Our vision is not limited to exporting commodities
                it's about representing the real Indian taste to the world. From
                Surat to Munich, and soon to the USA, Australia, and beyond, we
                are on a mission to ensure Indian products are recognized for
                their authenticity, quality, and global standards.
              </p>
              <blockquote className="text-about-small-text font-medium text-[var(--black)]">
                "To make Indian agriculture and spices a trusted choice in every
                global market."
              </blockquote>
              </div>
            </div>

            {/* Left Image - Shows second on mobile */}
            <div className="relative lg:order-1">
              <Image
                src="/about-us/world-food-vision.jpg"
                alt="Indian spices and herbs"
                width={680}
                height={590}
                className="rounded-2xl w-full h-[200px] md:h-[590px] object-cover shadow-lg"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-14  px-5 md:px-16 bg-[var(--white)]">
        <AnimatedSection className="w-full max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-product-label font-medium text-[var(--black)] mb-4 block">
              • Our Team
            </span>
            <h2 className="text-about-main-title font-semibold text-[var(--black)] mb-6">
              Our team is built on a rare combination
            </h2>
            <p className="text-about-body-text text-[var(--gray-text)] max-w-3xl mx-auto">
              Together, they build a system where every shipment carries both
              farming wisdom and trade expertise delivering reliability,
              consistency, and transparency to every client.
            </p>
          </div>

          {/* Team Cards */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8" delay={0.3} staggerDelay={0.1}>
            {/* Agricultural Specialists */}
            <div className="bg-[var(--secondary-bg)] rounded-2xl p-6">
              <div className="w-full h-[190px] rounded-2xl flex mb-2">
                <Image
                  src="/about-us/adult-harvesting-coffee.jpg"
                  alt="Authenticity"
                  width={770}
                  height={625}
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">

              <h3 className="text-about-quote font-semibold text-[var(--black)]">
                Agricultural Specialists
              </h3>
              <p className="text-about-small-text text-[var(--gray-text)]">
                Expert farmers and agri-engineers ensure quality from farm to
                export through precise crop selection, soil management, and
                harvest optimization.
              </p>
              </div>
            </div>

            {/* Export Operations */}
            <div className="bg-[var(--secondary-bg)] rounded-2xl p-6">
              <div className="w-full h-[190px] rounded-2xl flex mb-2">
                <Image
                  src="/about-us/lifestyle-ecofriendly-people.jpg"
                  alt="Authenticity"
                  width={770}
                  height={625}
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">

              <h3 className="text-about-quote font-semibold text-[var(--black)]">
                Export Operations
              </h3>
              <p className="text-about-small-text text-[var(--gray-text)]">
                Logistics coordinators ensure seamless international shipping
                through efficient supply chain management, customs clearance,
                and delivery optimization.
              </p>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="bg-[var(--secondary-bg)] rounded-2xl p-6">
              <div className="w-full h-[190px] rounded-2xl flex mb-2">
                <Image
                  src="/about-us/female-agricultural-engineer.jpg"
                  alt="Authenticity"
                  width={770}
                  height={625}
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">

              <h3 className="text-about-quote font-semibold text-[var(--black)]">
                Quality Assurance
              </h3>
              <p className="text-about-small-text text-[var(--gray-text)]">
                Certification experts ensure compliance with global standards
                through rigorous documentation, audits, and quality assurance.
              </p>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-14  px-5 md:px-16 bg-[var(--white)]">
        <AnimatedSection className="w-full max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className=" mb-12">
            <span className="text-product-label font-medium text-[var(--black)] mb-4 block">
              • Our Values
            </span>
            <h2 className="text-about-main-title font-semibold text-[var(--black)] max-w-2xl">
              Building Trust Through Purpose and Values
            </h2>
          </div>

          {/* Values Grid - Data Driven Approach */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" delay={0.3} staggerDelay={0.15}>
            {valuesData.map((value) => (
              <div 
                key={value.id} 
                className="flex flex-col items-start space-y-4 rounded-2xl group hover:bg-[var(--lite-bg)] p-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={value.icon}
                    alt={`${value.title} icon`}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-about-quote font-semibold text-[var(--black)]">
                  {value.title}
                </h3>
                <p className="text-about-small-text text-[var(--gray-text)]">
                  {value.description}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </AnimatedSection>
      </section>
    </>
  );
}
