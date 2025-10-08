import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Vexlure International",
  description: "Terms and conditions for using Vexlure International's services. Guidelines for agricultural product exports, shipping, and business operations.",
  keywords: "terms and conditions, legal terms, export terms, Vexlure International, business terms",
  openGraph: {
    title: "Terms and Conditions - Vexlure International",
    description: "Legal terms for using our agricultural export services",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.vexlureinternational.com/"}/terms-and-conditions`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
