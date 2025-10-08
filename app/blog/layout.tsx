import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Agricultural Export Insights & Market Analysis",
  description: "Latest insights on agricultural exports, market trends, spice knowledge, and trade strategies from Vexlure International. Expert analysis on Indian agricultural products.",
  keywords: "agricultural blog, export insights, market analysis India, spice knowledge, trade strategies, agricultural trends",
  openGraph: {
    title: "Blog - Vexlure International",
    description: "Expert insights on agricultural exports and market trends from India",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.vexlureinternational.com/"}/blog`,
  },
  twitter: {
    card: "summary",
    title: "Blog - Agricultural Export Insights",
    description: "Latest trends and insights in agricultural exports from India",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
