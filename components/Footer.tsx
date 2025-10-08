"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import SplitText from "./Animation/SplitText";
import AnimatedSection from "./Animation/AnimatedSection";
import AnimatedCard from "./Animation/AnimatedCard";

const NAV_LINKS: { name: string; path: string }[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Product", path: "/product" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact-us" },
];

const SOCIAL_LINKS: { href: string; icon: string; label: string }[] = [
  {
    href: "https://facebook.com/vexlureinternational", // Replace with  real link
    icon: "/face-book.svg",
    label: "Facebook",
  },
  {
    href: "https://x.com/vexlure", // Replace with  real link
    icon: "/x.svg",
    label: "X (Twitter)",
  },
  {
    href: "https://instagram.com/vexlureinternational/", // Replace with  real link
    icon: "/insta.svg",
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/company/vexlure-international", // Replace with  real link
    icon: "/linkedin.svg",
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/918320659236", // WhatsApp direct link
    icon: "/whatsapp.svg",
    label: "WhatsApp",
  },
];

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="relative w-full bg-[var(--secondary-bg)] pt-12  px-5 md:px-10 overflow-hidden ">
      <div
        className="relative z-10 max-w-[1440px] mx-auto w-full 
  pb-24 sm:pb-30 md:pb-40 lg:pb-[220px] 2xl:pb-[280px]"
      >
        {" "}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-25 w-full min-w-0 break-words">
          <AnimatedCard index={0} delay={0.2} className="flex flex-col gap-5 md:gap-6 text-base font-medium min-w-0 break-words ">
            <SplitText 
              text="Vexlure."
              className="text-[32px] leading-[44px] font-bold text-[var(--orange)] mb-2"
            />

            {/* India */}
            <div className="text-base leading-[22px]">
              <div className="font-semibold  text-[var(--black)] mb-3">India</div>
              <div className="flex gap-3 text-[var(--gray-text)] mb-3">
                <Image
                  src="/location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  className="mt-0.5"
                />{" "}
                Patel Chambers 108, 395006 Surat
              </div>
              <div className="flex items-center gap-3 text-[var(--gray-text)]">
                <Image
                  src="/call.svg"
                  alt="Call"
                  width={20}
                  height={20}
                  className="mt-0.5"
                />{" "}
                +91 83206-59236
              </div>
            </div>

            {/* Germany */}
            <div className="mt-3 text-base leading-[22px]">
              <div className="font-semibold  text-[var(--black)] mb-3">Germany</div>
              <div className="flex gap-3 text-[var(--gray-text)] mb-3">
                <Image
                  src="/location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  className="mt-0.5"
                />{" "}
                Heighlofstraße 66, 81377 Munich
              </div>
              <div className="flex items-center gap-3 text-[var(--gray-text)]">
                <Image
                  src="/call.svg"
                  alt="Call"
                  width={20}
                  height={20}
                  className="mt-0.5"
                />{" "}
                +49 15566-345594
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard index={1} delay={0.3} className="flex flex-col gap-4 md:gap-6 text-base font-medium items-start md:w-[500px] ">
            <div className="font-bold text-lg text-[var(--black)]">
              For Support
            </div>
            <div>
              <div className="font-bold text-[var(--black)] mb-2">Contact</div>
              <div className="flex items-center gap-3 text-[var(--gray-text)]">
                <Image
                  src="/mail.svg"
                  alt="Mail"
                  width={20}
                  height={20}
                  className="mt-0.5"
                />{" "}
                info@vexlureinternational.com
              </div>
            </div>
            <div>
              <div className="font-bold text-[var(--black)] mb-2">Sale</div>
              <div className="flex items-center gap-3 text-[var(--gray-text)]">
                <Image
                  src="/mail.svg"
                  alt="Mail"
                  width={20}
                  height={20}
                  className="mt-0.5"
                />{" "}
                sales@vexlureinternational.com
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard index={2} delay={0.4} className="flex flex-col gap-3 text-base font-medium  items-start pl-0 md:pl-20 md:w-[240px]">
            <div className="font-bold text-lg text-[var(--black)]">Company</div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  link.path === "/product"
                    ? pathname.startsWith("/product")
                      ? "text-[var(--orange)] font-bold"
                      : "text-[var(--gray-text)] hover:text-[var(--orange)]"
                    : pathname === link.path
                    ? "text-[var(--orange)] font-bold"
                    : "text-[var(--gray-text)] hover:text-[var(--orange)]"
                } focus:outline-none focus:ring-0`}
              >
                {link.name}
              </Link>
            ))}
          </AnimatedCard>
        </AnimatedSection>
        <AnimatedSection className="relative mt-10 z-10 max-w-7xl w-full flex flex-col md:flex-row justify-between gap-y-6 md:gap-8 text-base font-medium ">
          <AnimatedCard index={0} delay={0.2} className="flex gap-3">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--gray-text)] hover:text-white hover:bg-[var(--orange)] group transition focus:outline-none focus:ring-0"
              >
                <Image src={icon} alt={label} width={24} height={24} className="group-hover:brightness-0 group-hover:invert" />
              </a>
            ))}
          </AnimatedCard>
          <AnimatedCard index={1} delay={0.3} className="font-medium text-[var(--gray-text)] order-2 md:order-1">
            &copy; Copyright 2018 Vexlure International, All
            Rights Reserved.
          </AnimatedCard>
          <AnimatedCard index={2} delay={0.4} className="flex gap-10 order-1 md:order-2">
            <Link
              href="/privacy-policy"
              className="hover:text-[var(--orange)] text-[var(--gray-text)] focus:outline-none focus:ring-0 "
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-[var(--orange)] text-[var(--gray-text)]  focus:outline-none focus:ring-0"
            >
              Terms & Conditions
            </Link>
          </AnimatedCard>
        </AnimatedSection>
        <div
          className="flex absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/5 w-full justify-center items-center pointer-events-none select-none"
          style={{ zIndex: 0 }}
        >
          <span
            className="font-extrabold text-[#D9D9D9] leading-none select-none"
            style={{
              fontSize: "clamp(5rem, 22vw, 22rem)",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Vexlure.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
