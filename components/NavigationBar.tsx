"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars2 } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const NavigationBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isProductDropdownOpen, setIsProductDropdownOpen] =
    useState<boolean>(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll and direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state
      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Set visibility based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 400) {
        // Scrolling down and past threshold
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when modal or dropdown is open
  useEffect(() => {
    document.body.style.overflow = isOpen || isProductDropdownOpen ? "hidden" : "auto";
  }, [isOpen, isProductDropdownOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".relative")) {
        setIsProductDropdownOpen(false);
      }
    };

    if (isProductDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProductDropdownOpen]);

  return (
    <>
      {/* Background Blur Overlay */}
      {isProductDropdownOpen && (
        <div
          className="fixed inset-0 bg-white/40 backdrop-blur-sm z-20"
          onClick={() => setIsProductDropdownOpen(false)}
        />
      )}

      {/* NAVIGATION BAR */}
      <nav
        className={`fixed top-0 w-full z-30 transition-all duration-700 ease-out ${
          scrolled ? "bg-none " : "bg-[var(--white)]"
        } ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div
          className={`${
            scrolled
              ? "w-[95%] max-w-[992px] h-[48px] md:h-[44px]"
              : "max-w-[1440px]"
          }  mx-auto px-7 transition-all duration-700 ease-out ${
            visible ? "my-4" : "my-6"
          }`}
        >
          <div
            className={`flex justify-between items-center transition-all duration-700 ease-out ${
              scrolled
                ? "bg-white/40 rounded-full px-6 py-3 shadow-lg backdrop-blur-md"
                : "bg-[var(--white)]"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 text-[32px] leading-[44px] font-bold text-[var(--orange)] cursor-pointer focus:outline-none focus:ring-0"
            >
              Vexlure.
            </Link>

            {/* Nav Links (Desktop) */}
            <div className="hidden md:flex gap-4 text-base leading-[24px] font-medium">
              <Link
                href="/"
                className={`${
                  pathname === "/" && !isProductDropdownOpen
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                } hover:text-[var(--orange)] px-3 py-[7px] transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-0`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`${
                  pathname === "/about-us" && !isProductDropdownOpen
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                } hover:text-[var(--orange)] px-3 py-[7px] transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-0`}
              >
                About Us
              </Link>
              <div className="relative">
                <button
                  onClick={() =>
                    setIsProductDropdownOpen(!isProductDropdownOpen)
                  }
                  className={`${
                    pathname.startsWith("/product") || isProductDropdownOpen
                      ? "text-[var(--orange)] font-bold"
                      : "text-[var(--black)]"
                  } hover:text-[var(--orange)] px-3 py-[7px] transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-0 flex items-center gap-1`}
                >
                  Product
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isProductDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Product Dropdown Menu */}
                {isProductDropdownOpen && (
                  
                  <div className="fixed top-[80px] left-1/2 transform -translate-x-1/2 w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[980px] max-w-[980px] backdrop-blur-md bg-white/40 rounded-2xl shadow-xl  p-3 sm:p-4 md:p-5 z-50">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                      {/* First Column */}
                      <div className="space-y-2 sm:space-y-3 md:space-y-4 col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div>
                          <div className="px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-[var(--lite-bg)] rounded-xl group relative">
                            <Link
                              href="/product/agriculture-spices"
                              className="flex items-start justify-between transition-colors"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div>
                                <h3 className="font-semibold text-[var(--black)] mb-[2px] text-sm sm:text-base">
                                  Fresh Vegetables
                                </h3>
                                <p className="text-xs sm:text-sm text-[var(--gray-text)]">
                                  Quality Green, Frozen Globally
                                </p>
                              </div>
                              <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--black)] mt-1 w-3 h-3 sm:w-4 sm:h-4" />
                            </Link>
                          </div>

                          <div className="px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-[var(--lite-bg)] rounded-xl group relative">
                            <Link
                              href="/product/oilseeds-nuts"
                              className="flex items-start justify-between transition-colors"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div>
                                <h3 className="font-semibold text-[var(--black)] mb-[2px] text-sm sm:text-base">
                                  Oilseeds & Nuts
                                </h3>
                                <p className="text-xs sm:text-sm text-[var(--gray-text)]">
                                  Premium Oilseeds, Global Impact
                                </p>
                              </div>
                              <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--black)] mt-1 w-3 h-3 sm:w-4 sm:h-4" />
                            </Link>
                          </div>

                          <div className="px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-[var(--lite-bg)] rounded-xl group relative">
                            <Link
                              href="/product/pulses-legumes"
                              className="flex items-start justify-between transition-colors"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div>
                                <h3 className="font-semibold text-[var(--black)] mb-[2px] text-sm sm:text-base">
                                  Pulses & Legumes
                                </h3>
                                <p className="text-xs sm:text-sm text-[var(--gray-text)]">
                                  Gram, Greens, Trusted Legumes
                                </p>
                              </div>
                              <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--black)] mt-1 w-3 h-3 sm:w-4 sm:h-4" />
                            </Link>
                          </div>

                          {/* Second Column */}
                          <div className="px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-[var(--lite-bg)] rounded-xl group relative">
                            <Link
                              href="/product/grains-cereals"
                              className="flex items-start justify-between transition-colors"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div>
                                <h3 className="font-semibold text-[var(--black)] mb-[2px] text-sm sm:text-base">
                                  Grains & Cereals
                                </h3>
                                <p className="text-xs sm:text-sm text-[var(--gray-text)]">
                                  Rice and Grains, Trusted Worldwide
                                </p>
                              </div>
                              <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--black)] mt-1 w-3 h-3 sm:w-4 sm:h-4" />
                            </Link>
                          </div>

                          <div className="px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-[var(--lite-bg)] rounded-xl group relative">
                            <Link
                              href="/product/whole-ground-spices"
                              className="flex items-start justify-between transition-colors"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div>
                                <h3 className="font-semibold text-[var(--black)] mb-[2px] text-sm sm:text-base">
                                  Whole & Ground Spices
                                </h3>
                                <p className="text-xs sm:text-sm text-[var(--gray-text)]">
                                  Heritage Spices, Modern Supply
                                </p>
                              </div>
                              <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--black)] mt-1 w-3 h-3 sm:w-4 sm:h-4" />
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-[var(--lite-bg)] rounded-xl group relative">
                            <Link
                              href="/product/natural-health-plant-products"
                              className="flex items-start justify-between transition-colors"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div>
                                <h3 className="font-semibold text-[var(--black)] mb-[2px] text-sm sm:text-base">
                                  Natural Health & Plant Products
                                </h3>
                                <p className="text-xs sm:text-sm text-[var(--gray-text)]">
                                  Natural Wellness, Trusted Worldwide
                                </p>
                              </div>
                              <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--black)] mt-1 w-3 h-3 sm:w-4 sm:h-4" />
                            </Link>
                          </div>

                          {/* Third Column - View All Products */}
                          <div className="px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-[var(--lite-bg)] rounded-xl group relative">
                            <Link
                              href="/product/agro-derivatives-additives"
                              className="flex items-start justify-between transition-colors"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div>
                                <h3 className="font-semibold text-[var(--black)] mb-[2px] text-sm sm:text-base">
                                  Agro Derivatives & Additives
                                </h3>
                                <p className="text-xs sm:text-sm text-[var(--gray-text)]">
                                  Consistent Quality, Processed Products
                                </p>
                              </div>
                              <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--black)] mt-1 w-3 h-3 sm:w-4 sm:h-4" />
                            </Link>
                          </div>

                          <div className="px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-[var(--lite-bg)] rounded-xl group relative">
                            <Link
                              href="/product/superfood-nutraceutical-powders"
                              className="flex items-start justify-between transition-colors"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div>
                                <h3 className="font-semibold text-[var(--black)] mb-[2px] text-sm sm:text-base">
                                  Superfood & Nutraceutical Powders
                                </h3>
                                <p className="text-xs sm:text-sm text-[var(--gray-text)]">
                                  Superfoods from India's Fields
                                </p>
                              </div>
                              <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--black)] mt-1 w-3 h-3 sm:w-4 sm:h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* View All Products Button */}
                      <div className="p-3 sm:p-4 bg-[var(--lite-bg)] rounded-2xl group col-span-1 sm:col-span-2 lg:col-span-1">
                          <Link
                            href="/product"
                            onClick={() => setIsProductDropdownOpen(false)}
                          >
                        <div className="hover:text-[var(--black)]">
                          <div className="flex justify-between font-semibold text-[var(--black)] text-sm sm:text-base">
                            View all Products
                          <BsArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--black)] mt-1 w-3 h-3 sm:w-4 sm:h-4" />
                          </div>
                          <p className="text-xs sm:text-sm text-[var(--gray-text)] mt-1">
                            Discover authentic products from our collection.
                          </p>
                        </div>

                        {/* Product Image */}
                        <div className="mt-3 sm:mt-4">
                          <Image
                            src="/agriculture/agro.png"
                            alt="Product showcase"
                            width={220}
                            height={204}
                            className="w-full h-[150px] sm:h-[180px] md:h-[204px] object-cover rounded-lg"
                            />
                        </div>
                      </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/blog"
                className={`${
                  pathname === "/blog" && !isProductDropdownOpen
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                } hover:text-[var(--orange)] px-3 py-[7px] transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-0`}
              >
                Blog
              </Link>
            </div>

            {/* Contact Button (Desktop) */}
            <div className="hidden md:flex">
              <Link
                href="/contact-us"
                className="bg-[#181818] text-white px-5 py-2 rounded-full hover:bg-black transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-0"
              >
                Contact Us
              </Link>
            </div>

            {/* Hamburger Icon (Mobile Only) */}
            {!isOpen && (
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-[var(--gray-text)] text-2xl flex items-center justify-center focus:outline-none focus:ring-0"
                >
                  <HiBars2 />
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MODAL MENU */}
      {isOpen && (
        <div
          className="fixed md:hidden inset-0 z-40"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute top-0 left-4 right-4 mx-auto rounded-3xl backdrop-blur-sm bg-white/40 shadow-xl p-6 z-50"
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
          >
            {/* Header with logo and close */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl leading-[32px] font-bold text-[var(--orange)]">
                Vexlure.
              </div>
              <button
                onClick={toggleMobileMenu}
                className="text-xl text-[var(--gray-text)]"
              >
                <RiCloseLargeFill />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-4 text-sm">
              <Link
                href="/"
                className={`focus:outline-none focus:ring-0 ${
                  pathname === "/" && !isProductDropdownOpen && !isMobileProductOpen
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`focus:outline-none focus:ring-0 ${
                  pathname === "/about-us" && !isMobileProductOpen
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div>
                <button
                  onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                  className={`flex items-center justify-between w-full focus:outline-none focus:ring-0 ${
                    pathname.startsWith("/product") || isMobileProductOpen
                      ? "text-[var(--orange)] font-bold"
                      : "text-[var(--black)]"
                  }`}
                >
                  Product
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileProductOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {/* Mobile Product Dropdown */}
                {isMobileProductOpen && (
                  <div className="mt-3 ml-4 space-y-3">
                    <Link
                              href="/product/agriculture-spices"
                              className="block text-sm text-[var(--gray-text)] hover:text-[var(--orange)] transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileProductOpen(false);
                      }}
                    >
                      Fresh Vegetables
                    </Link>
                    <Link
                      href="/product/oilseeds-nuts"
                      className="block text-sm text-[var(--gray-text)] hover:text-[var(--orange)] transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileProductOpen(false);
                      }}
                    >
                      Oilseeds & Nuts
                    </Link>
                    <Link
                      href="/product/pulses-legumes"
                      className="block text-sm text-[var(--gray-text)] hover:text-[var(--orange)] transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileProductOpen(false);
                      }}
                    >
                      Pulses & Legumes
                    </Link>
                    <Link
                      href="/product/grains-cereals"
                      className="block text-sm text-[var(--gray-text)] hover:text-[var(--orange)] transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileProductOpen(false);
                      }}
                    >
                      Grains & Cereals
                    </Link>
                    <Link
                      href="/product/whole-ground-spices"
                      className="block text-sm text-[var(--gray-text)] hover:text-[var(--orange)] transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileProductOpen(false);
                      }}
                    >
                      Whole & Ground Spices
                    </Link>
                    <Link
                      href="/product/natural-health-plant-products"
                      className="block text-sm text-[var(--gray-text)] hover:text-[var(--orange)] transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileProductOpen(false);
                      }}
                    >
                      Natural Health & Plant Products
                    </Link>
                    <Link
                      href="/product/agro-derivatives-additives"
                      className="block text-sm text-[var(--gray-text)] hover:text-[var(--orange)] transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileProductOpen(false);
                      }}
                    >
                      Agro Derivatives & Additives
                    </Link>
                    <Link
                      href="/product/superfood-nutraceutical-powders"
                      className="block text-sm text-[var(--gray-text)] hover:text-[var(--orange)] transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileProductOpen(false);
                      }}
                    >
                      Superfood & Nutraceutical Powders
                    </Link>
                    <Link
                      href="/product"
                      className="flex items-center gap-2 text-sm text-[var(--orange)] font-medium hover:underline mt-4"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileProductOpen(false);
                      }}
                    >
                      View all Products
                      <BsArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/blog"
                className={`focus:outline-none focus:ring-0 ${
                  pathname === "/blog" && !isProductDropdownOpen && !isMobileProductOpen
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="mt-2 bg-[#181818] text-white px-4 py-2 rounded-full text-center hover:bg-black transition focus:outline-none focus:ring-0"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
