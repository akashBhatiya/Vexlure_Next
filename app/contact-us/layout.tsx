import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Indian Spices Exporter | Surat Gujarat | Global Export",
  description: "Connect with leading spices exporters in India. Based in Surat, Gujarat. APEDA approved exporters. WhatsApp: +91-8320659236. Email: info@vexlureinternational.com",
  keywords: "contact spices exporters india, indian spices exporter surat, agriculture products exporter gujarat, APEDA approved exporters contact, bulk spices wholesale inquiry, turmeric exporter contact",
  openGraph: {
    title: "Contact Spices Exporters India - Vexlure International",
    description: "Get in touch with APEDA approved spices exporters. Offices in Surat, India & Munich, Germany.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.vexlureinternational.com/"}/contact-us`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
