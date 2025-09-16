import Link from "next/link";
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import SplitText from "../Animation/SplitText";
import AnimatedSection from "../Animation/AnimatedSection";
import AnimatedCard from "../Animation/AnimatedCard";

interface Feature {
  title: string;
  desc: string;
}
const features: Feature[] = [
  {
    title: "Quality Assurance",
    desc: "We deliver only the finest agricultural products, backed by rigorous quality checks, trusted processors, and global compliance standards.",
  },
  {
    title: "Global Reach",
    desc: "Headquartered in Surat, India with a strategic base in Munich, Germany, we connect farms to businesses across continents.",
  },
  {
    title: "On-Time, Every Time",
    desc: "In global trade, timing is everything. Our robust logistics ensure your consignments arrive as promised — reliably and consistently.",
  },
  {
    title: "Compliance & Certification Expertise",
    desc: "We manage all export documentation, phytosanitary checks, and certifications (APEDA, FSSAI, HACCP, ISO) so your imports are seamless and risk-free.",
  },
  {
    title: "Secure & Transparent Transactions",
    desc: "We safeguard your business with trusted payment methods like Letter of Credit (LC), bank transfers, and structured advance terms.",
  },
  {
    title: "Tailored Business Solutions",
    desc: "From packaging styles to shipment sizes, we adapt to your exact needs — ensuring cost efficiency without compromising quality.",
  },
  {
    title: "Dedicated Partnership",
    desc: "More than a supplier, we act as your long-term trade partner, offering expert guidance from initial inquiry to final delivery.",
  },
  {
    title: "24/7 Global Support",
    desc: "Our multilingual trade team is available round-the-clock, ensuring smooth communication across time zones.",
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      id="why-choose-us"
      className="w-full bg-[var(--white)] pt-5 pb-14 md:py-16 px-5 md:px-8"
    >
      <div className="max-w-[1440px] mx-auto">
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4" delay={0.2} staggerDelay={0.3}>
          <div>
            <span className="block text-sm md:text-base font-medium leading-[22px] md:leading-6 text-[var(--black)] mb-1">
              • Why Choose Us
            </span>
            <SplitText 
              text="Why Global Clients Trust Vexlure International"
              className="text-2xl md:text-[40px] font-semibold leading-9 md:leading-[52px] text-[var(--black)] mb-2 tracking-tight max-w-2xl"
              delay={0.1}
              duration={0.06}
            />
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center max-w-[148px] justify-center rounded-full px-4 py-2 text-sm md:text-base gap-2 leading-[22px] md:leading-6 tracking-[-0.01em] bg-[var(--orange)] hover:bg-orange-600 text-[var(--white)] font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
          >
            Contact Us <HiArrowUpRight />
          </Link>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-14">
          {features.map((f, i) => (
            <AnimatedCard key={i} index={i} delay={0.4} className="">
              <h3 className="text-xl md:text-2xl font-semibold leading-[30px] md:leading-[36px] text-[var(--black)] mb-3">
                {f.title}
              </h3>
              <p className="text-sm md:text-lg font-normal  text-[var(--gray-text)] leading-[22px] md:leading-[28px]">
                {f.desc}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
