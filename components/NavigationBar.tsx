"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars2 } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";

const NavigationBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* NAVIGATION BAR */}
      <nav className=" fixed top-0  w-full bg-[var(--white)] z-30">
        <div className=" my-3 px-7  max-w-[1440px] mx-auto ">
          <div className="flex justify-between h-11 items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 text-[32px] font-bold text-[var(--orange)] cursor-pointer focus:outline-none focus:ring-0">
              Vexlure.
            </Link>

            {/* Nav Links (Desktop) */}
            <div className="hidden md:flex gap-4 text-base font-medium space-x-6">
              <Link href="/" className={`${pathname === '/' ? 'text-[var(--orange)] font-bold' : 'text-[var(--black)]'} hover:text-[var(--orange)] active:text-[var(--orange)] focus:text-[var(--orange)] focus:outline-none focus:ring-0 `}>
                Home
              </Link>
              <Link href="/about-us" className={`${pathname === '/about-us' ? 'text-[var(--orange)] font-bold' : 'text-[var(--black)]'} hover:text-[var(--orange)] active:text-[var(--orange)] focus:text-[var(--orange)] focus:outline-none focus:ring-0`}>
                About Us
              </Link>
              <Link href="/product" className={`${pathname.startsWith('/product') ? 'text-[var(--orange)] font-bold' : 'text-[var(--black)]'} hover:text-[var(--orange)] active:text-[var(--orange)] focus:text-[var(--orange)] focus:outline-none focus:ring-0`}>
                Product
              </Link>
              <Link href="/blog" className={`${pathname === '/blog' ? 'text-[var(--orange)] font-bold' : 'text-[var(--black)]'} hover:text-[var(--orange)] active:text-[var(--orange)] focus:text-[var(--orange)] focus:outline-none focus:ring-0`}>
                Blog
              </Link>
            </div>

            {/* Contact Button (Desktop) */}
            <div className="hidden md:flex">
              <Link
                href="/contact-us"
                className="bg-[#181818]/95 text-base text-[var(--white)] px-4 py-2 rounded-4xl hover:bg-[var(--black)] focus:outline-none focus:ring-0 "
              >
                Contact Us
              </Link>
            </div>

            {/* Hamburger Icon (Mobile Only) */}
            {!isOpen && (
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-[var(--gray-text)] text-2xl mx-5 focus:outline-none"
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
    className="fixed md:hidden inset-0 z-30"
    onClick={() => setIsOpen(false)}
  >
    <div
      className="absolute top-0 left-4 right-4 mx-auto rounded-3xl backdrop-blur-sm bg-[var(--white)]/40 shadow-xl p-6 z-40"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
    >
      {/* Header with logo and close */}
      <div className="flex justify-between   items-center mb-4">
        <div className="text-2xl font-bold text-[var(--orange)]">
          Vexlure.
        </div>
        <button
          onClick={toggleMobileMenu}
          className="text-xl text-[var(--gray-text)] "
        >
          <RiCloseLargeFill />
        </button>
      </div>

      {/* Mobile Nav Links */}
      <div className="flex flex-col gap-4 text-sm">
        <Link href="/" className={`${pathname === '/' ? 'text-[var(--orange)] font-bold' : 'text-[var(--black)]'} hover:text-[var(--orange)] active:text-[var(--orange)] focus:text-[var(--orange)] focus:outline-none focus:ring-0`} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/about-us" className={`${pathname === '/about-us' ? 'text-[var(--orange)] font-bold' : 'text-[var(--black)]'} hover:text-[var(--orange)] active:text-[var(--orange)] focus:text-[var(--orange)] focus:outline-none focus:ring-0`} onClick={() => setIsOpen(false)}>
          About Us
        </Link>
        <Link href="/product" className={`${pathname === '/product' ? 'text-[var(--orange)] font-bold' : 'text-[var(--black)]'} hover:text-[var(--orange)] active:text-[var(--orange)] focus:text-[var(--orange)] focus:outline-none focus:ring-0`} onClick={() => setIsOpen(false)}>
          Product
        </Link>
        <Link href="/blog" className={`${pathname === '/blog' ? 'text-[var(--orange)] font-bold' : 'text-[var(--black)]'} hover:text-[var(--orange)] active:text-[var(--orange)] focus:text-[var(--orange)] focus:outline-none focus:ring-0`} onClick={() => setIsOpen(false)}>
          Blog
        </Link>
        <Link
          href="/contact-us"
          className="mt-2 bg-[#181818]/95 text-sm text-[var(--white)] px-4 py-2 rounded-full text-center hover:bg-[var(--black)] active:bg-[var(--black)] focus:bg-[var(--black)] h-10  focus:outline-none focus:ring-0"
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
