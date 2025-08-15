import React from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
}
const products: Product[] = [
  {
    title: "Activated Charcoal",
    description:
      "Activated charcoal is a fine, black powder made from carbon-rich materials like wood or coconut shells, processed to increase its absorbency. It is commonly used for detoxification, poison treatment, and digestive health, as it binds toxins and gases in the body.",
    image: "/image/product-charcoal.jpg",
    link: "#",
  },
  {
    title: "Psyllium Husk",
    description:
      "Activated charcoal is a fine, black powder made from carbon-rich materials like wood or coconut shells, processed to increase its absorbency. It is commonly used for detoxification, poison treatment, and digestive health, as it binds toxins and gases in the body.",
    image: "/image/product-psyllium.png",
    link: "#",
  },
  {
    title: "Pipette Tips",
    description:
      "Activated charcoal is a fine, black powder made from carbon-rich materials like wood or coconut shells, processed to increase its absorbency. It is commonly used for detoxification, poison treatment, and digestive health, as it binds toxins and gases in the body.",
    image: "/image/product-pipette.png",
    link: "#",
  },
  {
    title: "Moringa Powder",
    description:
      "Activated charcoal is a fine, black powder made from carbon-rich materials like wood or coconut shells, processed to increase its absorbency. It is commonly used for detoxification, poison treatment, and digestive health, as it binds toxins and gases in the body.",
    image: "/image/product-moringa.png",
    link: "#",
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section
      id="products"
      className="w-full py-16 px-6 md:px-8 flex flex-col items-center bg-[var(--white)]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Subtitle */}
        <span className="block text-sm text-[var(--black)] mb-1 font-medium tracking-wide text-center">
          • Our Products
        </span>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--black)] mb-12 text-center max-w-2xl mx-auto">
          Supplying Industries with Reliable Global Products
        </h2>

        {/* Product Grid */}
        <div className="flex flex-wrap gap-5 justify-center w-full">
          {products.map((p, i) => {
            const isLarge = i % 4 === 0 || i % 4 === 3;

            return (
              <div
                key={i}
                className={`w-full bg-[var(--secondary-bg)] rounded-2xl shadow-md overflow-hidden
                  flex flex-col md:flex-row-reverse items-stretch
                  ${
                    isLarge
                      ? "xl:max-w-[630px] 2xl:max-w-[820px]"
                      : "xl:max-w-[550px] 2xl:max-w-[590px]"
                  }`}
              >
                {/* Image */}
                <div className="flex-shrink-0 p-5 ">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={320}
                    className="object-cover w-full rounded-2xl h-[400px] md:h-full md:w-[240px] "
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between p-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--black)] mb-1 line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="text-base md:text-lg text-[var(--gray-text)] mb-3 line-clamp-5">
                      {p.description}
                    </p>
                  </div>
                  <a
                    href={p.link}
                    className="inline-flex items-center text-[var(--orange)] font-semibold text-sm md:text-lg hover:underline focus:outline-none focus:ring-0"
                  >
                    View Product{" "}
                        <Image src="/right-arrow-black.svg" alt="Right Arrow" width={20} height={20} className="ml-1 text-sm" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex w-full justify-center mt-10">
          <Link
            href="/product"
            className="bg-[var(--orange)] hover:bg-[var(--orange)]/90 text-[var(--white)] px-7 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-md text-base md:text-lg transition-all justify-center focus:outline-none focus:ring-0"
          >
            View the Product <HiArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
