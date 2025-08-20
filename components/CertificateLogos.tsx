"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

// List of all certificate logos (add all your logo image paths here)
interface Logo {
  src: string;
  alt: string;
}
const logos: Logo[] = [
  { src: "/image/apeda.png", alt: "APEDA" },
  { src: "/image/efsa.png", alt: "EFSA" },
  { src: "/image/fda.png", alt: "FDA" },
  { src: "/image/fieo.png", alt: "FIEO" },
  { src: "/image/fssai.png", alt: "FSSAI" },
  { src: "/image/iso.png", alt: "ISO" },
  { src: "/image/makeinindia.png", alt: "Make in India" },
  { src: "/image/msme.png", alt: "MSME" },
  { src: "/image/sgs.png", alt: "SGS" },
  { src: "/image/sea.png", alt: "SEA" },
];

// To create infinite loop, repeat the logos
const marqueeLogos = [...logos, ...logos];

const CertificateLogos: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let scrollPos = 0;
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const scroll = () => {
      if (!marquee) return;
      scrollPos += 0.5; // px per frame
      if (scrollPos >= marquee.scrollWidth / 2) {
        scrollPos = scrollPos - marquee.scrollWidth / 2;
      }
      marquee.scrollLeft = scrollPos;
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
  className=" w-full max-w-6xl"
>
      <div
  className="w-full overflow-x-hidden"
>
        <div
          ref={marqueeRef}
          className="relative flex overflow-x-hidden group"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="inline-flex gap-6 items-center">
            {marqueeLogos.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center h-8 md:h-12 lg:h-[90px] px-2 md:px-6"
                style={{ width: "auto" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={90}
                  className="h-8 md:h-12 lg:h-[90px] w-auto object-contain opacity-90 group-hover:opacity-100 transition"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateLogos;
