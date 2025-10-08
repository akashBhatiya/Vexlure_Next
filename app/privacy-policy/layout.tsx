import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Vexlure International",
  description: "Privacy policy of Vexlure International. Learn how we collect, use, and protect your personal information in our agricultural export operations.",
  keywords: "privacy policy, data protection, Vexlure International, personal information, GDPR compliance",
  openGraph: {
    title: "Privacy Policy - Vexlure International",
    description: "Our commitment to protecting your personal information",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.vexlureinternational.com/"}/privacy-policy`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
