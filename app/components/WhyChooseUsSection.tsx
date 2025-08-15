import Link from "next/link";
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

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
      className="w-full bg-[var(--white)] py-16 px-6 md:px-8"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
          <div>
            <span className="block text-sm text-[var(--black)] mb-1">
              • Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--black)] mb-2 tracking-tight max-w-2xl">
              Why Global Clients Trust Vexlure International
            </h2>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center max-w-[148px] justify-center rounded-full px-4 py-2 text-[16px] gap-2 tracking-[-0.01em] bg-[var(--orange)] hover:brightness-90 text-[var(--white)] font-medium shadow-[0_6px_32px_0_rgba(255,120,0,0.14)] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
          >
            Contact Us <HiArrowUpRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-13 gap-y-13">
          {features.map((f, i) => (
            <div key={i} className="">
              <h3 className="text-2xl font-semibold text-[var(--black)] mb-2">
                {f.title}
              </h3>
              <p className="text-lg text-[var(--gray-text)] leading-snug">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
