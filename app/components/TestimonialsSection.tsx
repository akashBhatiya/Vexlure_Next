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
    cardStyle: "bg-[var(--black)] text-[var(--white)]",
    nameStyle: "text-[var(--white)]",
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
        <div className="text-center mb-10">
          <span className="block text-sm text-[var(--black)] mb-1">
            • Testimonials
          </span>
          <h2 className="text-2xl  md:text-3xl font-extrabold text-[var(--black)] mb-12 text-center max-w-2xl mx-auto">
          Customer Feedback That Reflects Our Commitment to Excellence
          </h2>
        </div>

        {/* Desktop staggered grid */}
        <div className="hidden xl:flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between p-6 shadow-md rounded-2xl 
        ${t.cardStyle} w-[420px] sm:w-[340px] lg:w-full h-[400px]
        ${i % 2 ? "mt-0 mb-20" : "mt-20 mb-0"}`}
            >
              <p
                className={`text-xl font-medium  mb-6 ${
                  t.cardStyle.includes("text-[var(--white)]")
                    ? "text-[var(--white)]"
                    : "text-[var(--black)]"
                }`}
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
                  <div className={`font-semibold text-xl ${t.nameStyle}`}>
                    {t.name}
                  </div>
                  <div className={`text-sm text-[var(--gray-text)]`}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet scroll slider */}
        <div className="flex  xl:hidden gap-6 overflow-x-auto scroll-hidden snap-x snap-mandatory px-4 py-6 w-full">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between p-6 shadow-md rounded-2xl 
        ${t.cardStyle} min-w-[280px] sm:min-w-[320px] max-w-[340px] h-[340px] snap-center`}
            >
              <p
                className={`text-base font-medium mb-6 ${
                  t.cardStyle.includes("text-[var(--white)]")
                    ? "text-[var(--white)]"
                    : "text-[var(--black)]"
                }`}
              >
                {t.feedback}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className={`w-18 h-18 rounded-xl  overflow-hidden flex items-center justify-center`}
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
                  <div className={`font-semibold text-sm ${t.nameStyle}`}>
                    {t.name}
                  </div>
                  <div className={`text-xs text-[var(--gray-text)]`}>{t.company}</div>
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
