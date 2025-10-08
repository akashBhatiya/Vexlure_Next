import { Metadata } from "next";
import HeroSection from "@/components/Homepage/HeroSection";
import IndustrySection from "@/components/Homepage/IndustrySection";
import TestimonialsSection from "@/components/Homepage/TestimonialsSection";
import WhyChooseUsSection from "@/components/Homepage/WhyChooseUsSection";
import ProductsSection from "@/components/Homepage/ProductsSection";

export const metadata: Metadata = {
  title: "Indian Spices Exporter | APEDA Approved | Vexlure International",
  description: "Leading spices exporters in India. APEDA & FSSAI certified. Export turmeric powder, cumin seeds, coriander from Surat. Trusted agriculture products exporter India.",
  keywords: "spices exporters in india, indian spices exporter, agriculture products exporter india, turmeric powder exporter, cumin seeds exporter, APEDA approved exporters, FSSAI certified",
  openGraph: {
    title: "Indian Spices Exporter - Vexlure International",
    description: "Premium spices exporters in India. APEDA & FSSAI certified. Export from Surat, Gujarat.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vexlureinternational.com/",
  },
};

export default function Home() {
  return (
    <>

      <main className="flex flex-col  ">
        <HeroSection />
        <IndustrySection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ProductsSection />
      </main>
      
    </>
  );
}
