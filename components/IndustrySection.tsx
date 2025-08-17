"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Industry {
  title: string;
  description: string;
  image: string;
  link: string;
}
const industries: Industry[] = [
  {
    title: "Agriculture & Spices",
    description:
      "At Vexlure International, agriculture isn't just a business; it's in our roots.",
    image: "/image/industry-agriculture.png",
    link: "#",
  },
  {
    title: "Textiles & Garments",
    description: "Textiles are woven into the very fabric of our identity.",
    image: "/image/industry-textiles.jpg",
    link: "#",
  },
  {
    title: "Industrial Machinery & Equipment",
    description:
      "We deliver industrial-grade solutions built for reliability, strength, and consistent output.",
    image: "/image/industry-machinery.jpg",
    link: "#",
  },
  {
    title: "Chemicals",
    description:
      "Vexlure International leverages industry expertise and a strategic location near Ankleshwar, a global chemical hub.",
    image: "/image/industry-chemicals.jpg",
    link: "#",
  },
  {
    title: "Paper & Packaging",
    description:
      "Modern packaging is more than protection: it's presentation, performance, and purpose.",
    image: "/image/industry-packaging.jpg",
    link: "#",
  },
];

const CARD_WIDTH = 340 + 32; // md:w-[340px] + md:gap-8 (32px)

const IndustrySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [maxScroll, setMaxScroll] = useState<number>(0);

  // Update maxScroll on mount and resize
  React.useEffect(() => {
    const update = () => {
      if (scrollRef.current) {
        setMaxScroll(
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        );
        setScrollPos(scrollRef.current.scrollLeft);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // // Listen to manual scroll
  const handleScroll = () => {
    if (scrollRef.current) setScrollPos(scrollRef.current.scrollLeft);
  };

  const scrollBy = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth =
      scrollRef.current.querySelector("div")?.clientWidth || 340;
    const gap = parseInt(
      getComputedStyle(scrollRef.current).columnGap || "32",
      10
    );
    const scrollAmount = 372;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="industry"
      className="w-full bg-[var(--secondary-bg)] py-16"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-7 flex items-center px-0  justify-between ">
          <div className="px-6">
            <span className="block text-sm text-[var(--black)] mb-1 font-medium tracking-wide">
              • Our Industry
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--black)] mb-2 max-w-2xl tracking-tight">
              Customized Business Solutions for Your Industry
            </h2>
          </div>
  
          <div className="hidden md:flex gap-2 mx-2 mr-16">
            <button
              aria-label="Scroll left"
              onClick={() => scrollBy("left")}
              disabled={scrollPos <= 0}
              className={`w-9 h-9 rounded-full cursor-pointer flex items-center justify-center shadow-md border  border-gray-200 bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition disabled:opacity-40 disabled:bg-gray-200 focus:outline-none focus:ring-0`}
            >
              <FaArrowLeft />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollBy("right")}
              disabled={scrollPos >= maxScroll - 4}
              className={`w-9 h-9 rounded-full cursor-pointer flex items-center justify-center shadow-md border  border-gray-200 bg-orange-500 text-white hover:bg-orange-600 transition disabled:opacity-40 disabled:bg-orange-500 focus:outline-none focus:ring-0`}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="ml-6">
 
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-hidden py-8 snap-x snap-mandatory w-full"
        >
          {/* Start Spacer */}
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className=" w-xs md:w-[420px] 
                 h-[400px] md:h-[560px] rounded-2xl overflow-hidden 
                 shadow-lg relative bg-gray-100 snap-start flex-shrink-0"
            >
              <Image
                src={ind.image}
                alt={ind.title}
                fill
                className="absolute inset-0 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 m-4 rounded-2xl backdrop-blur-2xl bg-white/8 border border-white/16 p-5 h-[180px] flex flex-col justify-between">
  <div>
    <h3 className="text-lg sm:text-2xl font-semibold text-white mb-1 drop-shadow-lg line-clamp-1">
      {ind.title}
    </h3>
    <p className="text-xs sm:text-base text-white/90 mb-3 drop-shadow-md line-clamp-2">
      {ind.description}
    </p>
  </div>
  <a
    href={ind.link}
    className="inline-flex items-center text-white font-semibold text-sm hover:underline focus:outline-none focus:ring-0"
  >
    Read more
    <Image src="/right-arrow.svg" alt="Right Arrow" width={20} height={20} className="ml-2 text-sm" />
  </a>
</div>

            </div>
          ))}
          {/* End Spacer */}
          <div className="flex-shrink-0 w-1" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
