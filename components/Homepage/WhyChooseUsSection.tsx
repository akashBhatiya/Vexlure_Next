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
      className="w-full bg-[var(--white)] pt-5 md:pt-14 pb-14 px-5 md:px-16"
    >
      <div className="max-w-[1440px] mx-auto">
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-center lg:justify-between  gap-4 mb-5" delay={0.2} staggerDelay={0.3}>
          <div className="flex flex-col">
            <span className="block text-product-label font-medium text-[var(--black)]">
              • Why Choose Us
            </span>
            <SplitText 
              text="Why Global Clients Trust Vexlure International"
              className="text-product-title font-semibold text-[var(--black)]  tracking-tight max-w-2xl"
              delay={0.1}
              duration={0.06}
            />
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center max-w-[148px] justify-center rounded-full px-4 py-2 text-fluid-sm gap-2 tracking-[-0.01em] bg-[var(--orange)] hover:bg-orange-600 text-[var(--white)] font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
          >
            Contact Us <HiArrowUpRight />
          </Link>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedCard key={i} index={i} delay={0.4} className="flex flex-col gap-1.5">
              <h3 className="text-choose-title font-semibold text-[var(--black)]">
                {f.title}
              </h3>
              <p className="text-choose-description font-normal text-[var(--gray-text)]">
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
