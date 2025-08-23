"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars2 } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";

const NavigationBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

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

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* NAVIGATION BAR */}
      <nav
        className={`fixed top-0 w-full z-30 transition-all duration-500 ${
          scrolled ? "bg-none " : "bg-[var(--white)]"
        } ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div
          className={`${scrolled ? "w-[95%] max-w-[992px] h-[48px] md:h-[44px]" :"max-w-[1440px]"}  mx-auto px-7 transition-all duration-500 ${visible ? "my-4" : "my-6"}`}
        >
          <div
            className={`flex justify-between items-center transition-all duration-500 ${
              scrolled
                ? "bg-[#F3F3F3CC] rounded-full px-6 py-3 shadow-md"
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
                  pathname === "/"
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                } hover:text-[var(--orange)] px-3 py-[7px] focus:outline-none focus:ring-0`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`${
                  pathname === "/about-us"
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                } hover:text-[var(--orange)] px-3 py-[7px] focus:outline-none focus:ring-0`}
              >
                About Us
              </Link>
              <Link
                href="/product"
                className={`${
                  pathname.startsWith("/product")
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                } hover:text-[var(--orange)] px-3 py-[7px] focus:outline-none focus:ring-0`}
              >
                Product
              </Link>
              <Link
                href="/blog"
                className={`${
                  pathname === "/blog"
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                } hover:text-[var(--orange)] px-3 py-[7px] focus:outline-none focus:ring-0`}
              >
                Blog
              </Link>
            </div>

            {/* Contact Button (Desktop) */}
            <div className="hidden md:flex">
              <Link
                href="/contact-us"
                className="bg-[#181818] text-white px-5 py-2 rounded-full hover:bg-black transition focus:outline-none focus:ring-0"
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
                  pathname === "/"
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
                  pathname === "/about-us"
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/product"
                className={`focus:outline-none focus:ring-0 ${
                  pathname === "/product"
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--black)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Product
              </Link>
              <Link
                href="/blog"
                className={`focus:outline-none focus:ring-0 ${
                  pathname === "/blog"
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
