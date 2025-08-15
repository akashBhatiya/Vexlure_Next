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

const NAV_LINKS: { name: string; path: string }[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Product", path: "/product" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact-us" },
];

const SOCIAL_LINKS: { href: string; icon: string; label: string }[] = [
  {
    href: "https://facebook.com/", // Replace with your real link
    icon: "/face-book.svg",
    label: "Facebook",
  },
  {
    href: "https://twitter.com/", // Replace with your real link
    icon: "/x.svg",
    label: "X (Twitter)",
  },
  {
    href: "https://instagram.com/", // Replace with your real link
    icon: "/insta.svg",
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/", // Replace with your real link
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
    <footer className="relative w-full bg-[var(--secondary-bg)] pt-12  px-4 md:px-10 overflow-hidden ">
      <div
        className="relative z-10 max-w-[1440px] mx-auto w-full 
  pb-28 md:pb-40 lg:pb-[220px] 2xl:pb-[280px]"
      >
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-25 w-full min-w-0 break-words">
          <div className="flex flex-col gap-3 text-base font-medium min-w-0 break-words">
            <div className="text-3xl font-bold text-[var(--orange)] mb-2">
              Vexlure.
            </div>

            {/* India */}
            <div>
              <div className="font-bold text-[var(--black)] mb-1">India</div>
              <div className="flex gap-2 text-[var(--gray-text)]">
                <Image
                  src="/location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  className="mt-0.5"
                />{" "}
                Patel Chambers 108, 395006 Surat
              </div>
              <div className="flex items-center gap-2 text-[var(--gray-text)]">
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
            <div className="mt-3">
              <div className="font-bold text-[var(--black)] mb-1">Germany</div>
              <div className="flex gap-2 text-[var(--gray-text)]">
                <Image
                  src="/location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  className="mt-0.5"
                />{" "}
                Heighlofstraße 66, 81377 Munich
              </div>
              <div className="flex items-center gap-2 text-[var(--gray-text)]">
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
          </div>

          <div className="flex flex-col gap-3 text-base font-medium items-start ">
            <div className="font-bold text-lg text-[var(--black)]">
              For Support
            </div>
            <div>
              <div className="font-bold text-[var(--black)] mb-1">Contact</div>
              <div className="flex items-center gap-2 text-[var(--gray-text)]">
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
              <div className="font-bold text-[var(--black)] mb-1">Sale</div>
              <div className="flex items-center gap-2 text-[var(--gray-text)]">
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
          </div>

          <div className="flex flex-col gap-2 text-base font-medium items-start pl-0 md:pl-20">
            <div className="font-bold text-lg text-[var(--black)]">Company</div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  link.path === '/product'
                    ? (pathname.startsWith('/product')
                      ? "text-[var(--orange)] font-bold"
                      : "text-[var(--gray-text)] hover:text-[var(--orange)]")
                    : (pathname === link.path
                      ? "text-[var(--orange)] font-bold"
                      : "text-[var(--gray-text)] hover:text-[var(--orange)]")
                } focus:outline-none focus:ring-0`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative mt-10 z-10 max-w-7xl w-full flex flex-col md:flex-row justify-between gap-y-6 md:gap-8 text-base font-medium ">
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full  border flex items-center justify-center text-[var(--gray-text)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition focus:outline-none focus:ring-0"
              >
                <Image src={icon} alt={label} width={24} height={24} />
              </a>
            ))}
          </div>
          <div className="font-medium text-[var(--gray-text)] order-2 md:order-1">
            &copy; copy {new Date().getFullYear()} Vexlure International, All Rights
            Reserved.
          </div>
          <div className="flex gap-10 order-1 md:order-2">
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
          </div>
        </div>
      </div>
      <div
        className="flex absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/5 w-full justify-center items-end pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        <span
          className="font-extrabold text-[#D9D9D9] opacity-40 leading-none select-none"
          style={{
            fontSize: "clamp(7rem, 22vw, 25rem)",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          Vexlure.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
