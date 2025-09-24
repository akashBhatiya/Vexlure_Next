"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

// List of all certificate logos (add all your logo image paths here)
interface Logo {
  src: string;
  alt: string;
}
const logos: Logo[] = [
  { src: "/logo/msme.png", alt: "MSME" },
  { src: "/logo/apeda.png", alt: "APEDA" },
  { src: "/logo/spicesborder.png", alt: "SEA" },
  { src: "/logo/fssai.png", alt: "FSSAI" },
  { src: "/logo/iso.png", alt: "ISO" },
  { src: "/logo/haccp.png", alt: "HACCP" },
  { src: "/logo/kosher.png", alt: "Kosher" },
  { src: "/logo/halal.png", alt: "Halal" },
  { src: "/logo/usda-organic.png", alt: "USDA Organic" },
  { src: "/logo/india-organic.png", alt: "India Organic" },
  { src: "/logo/brcgs.png", alt: "BRCGS" },
  { src: "/logo/fssc22000.png", alt: "FSSC 22000" },
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

    // Responsive scroll speed based on screen size
    const getScrollSpeed = () => {
      const width = window.innerWidth;
      if (width < 768) return 0.2; // Mobile - very slow
      if (width < 1024) return 0.25; // Tablet - slow
      return 0.5; // Desktop - moderate
    };

    let scrollSpeed = getScrollSpeed();

    const scroll = () => {
      if (!marquee) return;
      scrollPos += scrollSpeed;
      if (scrollPos >= marquee.scrollWidth / 2) {
        scrollPos = scrollPos - marquee.scrollWidth / 2;
      }
      marquee.scrollLeft = scrollPos;
      animationFrame = requestAnimationFrame(scroll);
    };

    // Update scroll speed on resize
    const handleResize = () => {
      scrollSpeed = getScrollSpeed();
    };

    window.addEventListener('resize', handleResize);
    animationFrame = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
  className=" w-full "
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
          <div className="inline-flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
            {marqueeLogos.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center 
                           h-[6vh] sm:h-[7vh] md:h-[8vh] lg:h-[9vh] xl:h-[10vh]
                           min-h-[35px] max-h-[110px]
                           px-1 sm:px-2 md:px-3 lg:px-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={90}
                  className="
                    h-[6vh] sm:h-[7vh] md:h-[8vh] lg:h-[9vh] xl:h-[10vh]
                    min-h-[35px] max-h-[110px]
                    w-auto object-contain 
                    opacity-90 group-hover:opacity-100 transition-opacity duration-300
                  "
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
