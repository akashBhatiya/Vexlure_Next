"use client";
import React from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import CertificateLogos from "@/components/CertificateLogos";

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full pt-20 px-5 md:px-8 flex flex-col items-center bg-[var(--white)]">
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-8">
          {/* Content */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
            {/* Left Content */}
            <div>
              <span className="text-sm md:text-base leading-[22px] md:leading-6 font-medium text-[var(--black)] mb-2 md:mb-3 block">
                • About Vexlure
              </span>
              <h1 className="text-[32px] md:text-5xl font-semibold text-[var(--black)] leading-[44px] md:leading-16">
                Delivering Premium Agricultural Products Worldwide
              </h1>
            </div>

            {/* Right Content */}
            <div className="md:pt-17 md:pl-14 ">
              <p className="text-base md:text-xl leading-6 md:leading-8 text-[var(--gray-text)] max-w-2xl">
                We connect farmers to global markets with trust and efficiency.
                Delivering premium agricultural products worldwide.
              </p>
            </div>
          </div>

          {/* Image Below */}
          <div className="w-full py-16">
            <Image
              src="/about-us/about-hero.png"
              alt="Agricultural products and farming"
              width={800}
              height={500}
              className="rounded-2xl w-full max-h-[580px] object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-16 px-5 md:px-8 bg-[var(--secondary-bg)]">
        <AnimatedSection className="w-full max-w-[1440px] mx-auto text-center" delay={0.2} staggerDelay={0.2}>
          <h2 className="text-xl md:text-[28px] font-semibold text-[var(--black)] mb-8 max-w-5xl mx-auto leading-[30px] md:leading-10">
            Vexlure International is more than an exporter — we are the bridge
            between India's farms and the world's markets.
          </h2>

          <div className="my-12 md:my-25">
            <p className="text-xs md:text-base leading-5 md:leading-6 text-[var(--gray-text)] mb-8 md:mb-16 max-w-2xl mx-auto">
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
              <h3 className="text-2xl md:text-[40px] font-semibold text-[var(--black)] mb-6 leading-9 md:leading-13">
                Connecting India's Harvests to Global Markets
              </h3>
              <p className="text-lg md:text-2xl text-[var(--gray-text)] font-medium leading-7 md:leading-9 mb-6">
                Rooted in Gujarat's farmlands and headquartered in Surat, with a
                base in Munich, we deliver authentic, high-quality agricultural
                products and spices that reflect India's farming tradition.
              </p>
              <blockquote className="text-sm md:text-lg leading-[22px] md:leading-7  text-[var(--black)] mb-6">
                "We exist for one purpose: to connect the dedication of Indian
                farmers with the needs of international businesses."
              </blockquote>
              <p className="text-sm md:text-lg leading-[22px] md:leading-7 text-[var(--black)]">
                - Vexlure International
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src="/about-us/about-second.png"
                alt="Indian spices and agricultural products"
                width={600}
                height={400}
                className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
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
                <span className="text-xs leading-5 font-medium text-[var(--black)]">
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
                <span className="text-xs leading-5 font-medium text-[var(--black)]">
                  Global Sourcing
                </span>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </section>

      <section className="w-full py-14 md:py-16 px-5 md:px-8 bg-[var(--white)]">
        <AnimatedSection className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-30 xl:gap-50">
            {/* Left Content */}
            <div className="space-y-2">
              <span className="text-sm md:text-base leading-[22px] md:leading-6 font-medium text-[var(--black)] block">
                • Our Story
              </span>
              <h1 className="text-2xl md:text-[40px] font-semibold text-[var(--black)] leading-9 md:leading-13">
                Rooted in Soil, Growing Globally with Heritage
              </h1>
            </div>

            {/* Right Content */}
            <div className="space-y-4 md:space-y-8 text-base md:text-xl text-[var(--gray-text)] leading-6 md:leading-8">
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
      <section className="w-full py-12 md:py-16 px-5 md:px-8 bg-[var(--secondary-bg)]">
        <AnimatedSection className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Right Content - Shows first on mobile */}
            <div className="lg:order-2">
              <span className="text-sm md:text-base leading-[22px] md:leading-6 font-medium text-[var(--black)] block">
                • Our Vision
              </span>
              <div className="space-y-6">

              <h2 className="text-2xl md:text-[40px] leading-9 md:leading-13 font-semibold text-[var(--black)] ">
                Representing India's Heritage, Quality, and Taste on the Global
                Stage
              </h2>
              <p className="text-base md:text-xl text-[var(--gray-text)] leading-6 md:leading-8">
                We dream big. Our vision is not limited to exporting commodities
                it's about representing the real Indian taste to the world. From
                Surat to Munich, and soon to the USA, Australia, and beyond, we
                are on a mission to ensure Indian products are recognized for
                their authenticity, quality, and global standards.
              </p>
              <blockquote className="text-xl md:text-2xl font-medium text-[var(--black)] leading-8 md:leading-9">
                "To make Indian agriculture and spices a trusted choice in every
                global market."
              </blockquote>
              </div>
            </div>

            {/* Left Image - Shows second on mobile */}
            <div className="relative lg:order-1">
              <Image
                src="/about-us/about-second.png"
                alt="Indian spices and herbs"
                width={600}
                height={760}
                className="rounded-2xl w-full h-[400px] md:h-[760px] object-cover shadow-lg"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-14  md:py-16 px-5 md:px-8 bg-[var(--white)]">
        <AnimatedSection className="w-full max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm md:text-base leading-[22px] md:leading-6 font-medium text-[var(--black)] mb-4 block">
              • Our Team
            </span>
            <h2 className="text-2xl md:text-[40px] font-semibold text-[var(--black)] leading-9 md:leading-13 mb-6">
              Our team is built on a rare combination
            </h2>
            <p className="text-base md:text-xl text-[var(--gray-text)] leading-6 md:leading-8 max-w-3xl mx-auto">
              Together, they build a system where every shipment carries both
              farming wisdom and trade expertise delivering reliability,
              consistency, and transparency to every client.
            </p>
          </div>

          {/* Team Cards */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8" delay={0.3} staggerDelay={0.1}>
            {/* Agricultural Specialists */}
            <div className="bg-[var(--secondary-bg)] rounded-2xl p-8">
              <div className="w-full h-[190px] rounded-2xl flex mb-6">
                <Image
                  src="/about-us/about-team.png"
                  alt="Authenticity"
                  width={625}
                  height={625}
                  className="rounded-2xl object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl leading-[30px] md:leading-9 font-semibold text-[var(--black)] mb-4">
                Agricultural Specialists
              </h3>
              <p className="text-sm md:text-lg text-[var(--gray-text)] leading-[22px] md:leading-7">
                Expert farmers and agri-engineers ensure quality from farm to
                export through precise crop selection, soil management, and
                harvest optimization.
              </p>
            </div>

            {/* Export Operations */}
            <div className="bg-[var(--secondary-bg)] rounded-2xl p-8">
              <div className="w-full h-[190px] rounded-2xl flex mb-6">
                <Image
                  src="/about-us/about-team.png"
                  alt="Authenticity"
                  width={625}
                  height={625}
                  className="rounded-2xl object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl leading-[30px] md:leading-9 font-semibold text-[var(--black)] mb-4">
                Export Operations
              </h3>
              <p className="text-sm md:text-lg text-[var(--gray-text)] leading-[22px] md:leading-7">
                Logistics coordinators ensure seamless international shipping
                through efficient supply chain management, customs clearance,
                and delivery optimization.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="bg-[var(--secondary-bg)] rounded-2xl p-8">
              <div className="w-full h-[190px] rounded-2xl flex mb-6">
                <Image
                  src="/about-us/about-team.png"
                  alt="Authenticity"
                  width={625}
                  height={625}
                  className="rounded-2xl object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl leading-[30px] md:leading-9 font-semibold text-[var(--black)] mb-4">
                Quality Assurance
              </h3>
              <p className="text-sm md:text-lg text-[var(--gray-text)] leading-[22px] md:leading-7">
                Certification experts ensure compliance with global standards
                through rigorous documentation, audits, and quality assurance.
              </p>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-16 px-5 md:px-8 bg-[var(--white)]">
        <AnimatedSection className="w-full max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className=" mb-12">
            <span className="text-sm md:text-base leading-[22px] md:leading-6 font-medium text-[var(--black)] mb-4 block">
              • Our Values
            </span>
            <h2 className="text-2xl md:text-[40px] font-semibold text-[var(--black)] leading-9 md:leading-13 max-w-2xl">
              Building Trust Through Purpose and Values
            </h2>
          </div>

          {/* Values Grid */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-[120px]" delay={0.3} staggerDelay={0.15}>
            {/* Authenticity */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center">
                <Image
                  src="/about-us/Authenticity.svg"
                  alt="Authenticity"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl md:text-2xl leading-[30px] md:leading-9 font-semibold text-[var(--black)]">
                Authenticity
              </h3>
              <p className="text-sm md:text-lg leading-[22px] md:leading-7 text-[var(--gray-text)]">
                Staying true to our farming roots and India's agricultural
                heritage.
              </p>
            </div>

            {/* Excellence */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image
                  src="/about-us/Excellence.svg"
                  alt="Excellence"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl md:text-2xl leading-[30px] md:leading-9 font-semibold text-[var(--black)]">
                Excellence
              </h3>
              <p className="text-sm md:text-lg leading-[22px] md:leading-7 text-[var(--gray-text)]">
                Staying true to our farming roots and India's agricultural
                heritage.
              </p>
            </div>

            {/* Sustainability */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image
                  src="/about-us/Sustainability.svg"
                  alt="Sustainability"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl md:text-2xl leading-[30px] md:leading-9 font-semibold text-[var(--black)]">
                Sustainability
              </h3>
              <p className="text-sm md:text-lg leading-[22px] md:leading-7 text-[var(--gray-text)]">
                Supporting farmers, promoting eco-friendly practices, and
                investing in ethical supply chains.{" "}
              </p>
            </div>

            {/* Trust */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image
                  src="/about-us/Trust.svg"
                  alt="Trust"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl md:text-2xl leading-[30px] md:leading-9 font-semibold text-[var(--black)]">
                Trust
              </h3>
              <p className="text-sm md:text-lg leading-[22px] md:leading-7 text-[var(--gray-text)]">
                Building long-term partnerships through transparency and
                reliability.
              </p>
            </div>

            {/* Innovation */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image
                  src="/about-us/Innovation.svg"
                  alt="Innovation"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl md:text-2xl leading-[30px] md:leading-9 font-semibold text-[var(--black)]">
                Innovation
              </h3>
              <p className="text-sm md:text-lg leading-[22px] md:leading-7 text-[var(--gray-text)]">
                Transforming traditional products into modern global solutions
                like superfoods and nutraceuticals.
              </p>
            </div>

            {/* Tailored Business Solutions */}
            <div className="flex flex-col items-start space-y-4 rounded-2xl">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image
                  src="/about-us/Solutions.svg"
                  alt="Tailored Business Solutions"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl md:text-2xl leading-[30px] md:leading-9 font-semibold text-[var(--black)]">
                Tailored Business Solutions
              </h3>
              <p className="text-sm md:text-lg leading-[22px] md:leading-7 text-[var(--gray-text)]">
                From packaging styles to shipment sizes, we adapt to your exact
                needs — ensuring cost efficiency without compromising quality.
              </p>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </section>
    </>
  );
}
