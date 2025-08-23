import Link from "next/link";
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import SplitText from "./SplitText";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./AnimatedCard";

interface Feature {
  title: string;
  desc: string;
}
const features: Feature[] = [
  {
    title: "Quality Assurance",
    desc: "We source and distribute agricultural products to our clients' efficient supply chain. We prioritize top-grade quality.",
  },
  {
    title: "Global Network",
    desc: "With a strong presence in Surat, India, and Munich, Germany, our extensive network spans multiple countries.",
  },
  {
    title: "Timely Delivery",
    desc: "We understand the value of time in the international market. Our efficient logistics and supply chain management.",
  },
  {
    title: "Compliance Expertise",
    desc: "We strictly adhere to all necessary export documentation, certifications, and international trade regulations.",
  },
  {
    title: "Secure Payments",
    desc: "To safeguard your investments, we offer secure payment options like: Letter of Credit (LC) and Advance Payments.",
  },
  {
    title: "Customized Solutions",
    desc: "We adapt to your business needs, offering tailored solutions for specific product requirements, packaging, and shipping preferences.",
  },
  {
    title: "Dedicated Support",
    desc: "Our experienced team provides dedicated support to guide you through the process from inquiry to delivery ensuring a seamless experience.",
  },
  {
    title: "24/7 Support",
    desc: "Dedicated customer service team providing round-the-clock assistance and trade support.",
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      id="why-choose-us"
      className="w-full bg-[var(--white)] py-16 px-5 md:px-8"
    >
      <div className="max-w-[1440px] mx-auto">
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4" delay={0.2} staggerDelay={0.3}>
          <div>
            <span className="block text-sm md:text-base font-medium leading-[22px] text-[var(--black)] mb-1">
              • Why Choose Us
            </span>
            <SplitText 
              text="Why Global Clients Trust Vexlure International"
              className="text-2xl md:text-[40px] font-semibold leading-[36px] md:leading-[52px] text-[var(--black)] mb-2 tracking-tight max-w-2xl"
              delay={0.1}
              duration={0.06}
            />
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center max-w-[148px] justify-center rounded-full px-4 py-2 text-sm md:text-base gap-2 leading-[22px] tracking-[-0.01em] bg-[var(--orange)] hover:bg-orange-600 text-[var(--white)] font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
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
