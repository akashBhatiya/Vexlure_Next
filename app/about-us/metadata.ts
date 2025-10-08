import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Spices Exporter in Surat | FSSAI Certified Since 2018 | Vexlure",
  description: "Trusted spices exporters in India since 2018. APEDA approved exporters, FSSAI certified spice exporters. Offices in Surat, Gujarat & Munich. Quality agriculture products exporter.",
  keywords: "best spices exporter in surat, spices exporters in india, APEDA approved exporters india, FSSAI certified spice exporters, agriculture export company surat, organic spices suppliers india, gujarat spices exporter",
  openGraph: {
    title: "Best Spices Exporter in Surat - Vexlure International",
    description: "Leading spices exporters in India since 2018. APEDA & FSSAI certified. Surat, Gujarat.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.vexlureinternational.com/"}/about-us`,
  },
  twitter: {
    card: "summary",
    title: "About Vexlure International",
    description: "Premium agricultural exporter since 2018",
  },
};
