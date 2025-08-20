"use client";
import Image from "next/image";
import React from "react";

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
    company: "Vital Essence Organics · USA",
    feedback:
      "We've worked with several exporters, but Vexlure’s turmeric and cumin are among the best—potent aroma, vivid color, and uniform grinding.",
    avatar: "/avatars/susan.png",
    cardStyle: "bg-[var(--white)]",
    nameStyle: "text-[var(--black)]",
  },
  {
    name: "Jonathan Blake",
    company: "Blake Industrial Supply · United States",
    feedback:
      "We've worked with several exporters, but Vexlure’s turmeric and cumin are among the best—potent aroma, vivid color, and uniform grinding.",
    avatar: "/avatars/jonathan.png",
    cardStyle: "bg-[var(--white)]",
    nameStyle: "text-[var(--black)]",
  },
  {
    name: "David Mensah",
    company: "Ecolab Ghana Ltd. · Ghana",
    feedback:
      "We use PAC and bleaching agents from Vexlure in our water treatment projects. The purity and handling are excellent—perfect for municipal use.",
    avatar: "/avatars/david.png",
    cardStyle: "bg-[var(--white)]",
    nameStyle: "text-[var(--black)]",
  },
  {
    name: "Henrik Bergström",
    company: "Nordic AgroExport AB · Sweden",
    feedback:
      "Chickpeas and red lentils from Vexlure have become a staple in our trade. Clean lots, consistent sizes, and very reliable loading schedules.",
    avatar: "/avatars/henrik.jpg",
    cardStyle: "bg-[var(--white)]",
    nameStyle: "text-[var(--black)]",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-[var(--secondary-bg)] py-16"
    >
      <div className="max-w-[1728px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 max-w-[335px] md:max-w-2xl lg:max-w-[740px] mx-auto">
          <span className="block text-sm md:text-base font-medium leading-[22px] md:leading-[24px] text-[var(--black)] mb-2 md:mb-3">
            • Testimonials
          </span>
          <h2 className="text-2xl  md:text-[40px] font-semibold leading-[36px] md:leading-[52px] text-[var(--black)] mb-12 text-center  mx-auto">
          Customer Feedback That Reflects Our Commitment to Excellence
          </h2>
        </div>

        {/* Desktop staggered grid */}
        <div className="hidden xl:flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full h-[580px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between p-8 shadow-md rounded-2xl transition-colors duration-200 cursor-pointer
        ${t.cardStyle} w-[420px] sm:w-[340px] lg:w-full h-[480px]
        ${i % 2 ? "mt-0 mb-20" : "mt-20 mb-0"} hover:bg-[var(--black)] hover:text-white group`}
            >
              <p
                className={`text-2xl font-medium leading-[36px]  ${
                  t.cardStyle.includes("text-[var(--white)]")
                    ? "text-[var(--white)]"
                    : "text-[var(--black)]"
                } group-hover:text-white`}
              >
                {t.feedback}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div
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
                </div>
                <div>
                  <div className={`font-semibold text-xl leading-[30px] mb-2 text-[var(--black)] group-hover:text-white`}>
                    {t.name}
                  </div>
                  <div className={`text-sm font-normal leading-[22px] text-[var(--gray-text)] group-hover:text-white/80`}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet scroll slider */}
        <div className="flex  xl:hidden gap-6 overflow-x-auto scroll-hidden snap-x snap-mandatory p-4 w-full">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between p-4 shadow-md rounded-2xl transition-colors duration-200 cursor-pointer
        ${t.cardStyle} min-w-[335px] w-[335px] h-[412px] snap-center hover:bg-[var(--black)] hover:text-white group`}
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
                <div
                  className={`w-12 h-12 rounded-xl  overflow-hidden flex items-center justify-center`}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-cover "
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className={`font-semibold text-lg leading-[28px] text-[var(--black)] group-hover:text-white`}>
                    {t.name}
                  </div>
                  <div className={`text-xs leading-[20px] font-normal text-[var(--gray-text)] group-hover:text-white/80`}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
