import { Metadata } from "next";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";

export const metadata: Metadata = {
  title: "Agriculture Products Exporter India | Bulk Spices Wholesale | Vexlure",
  description: "Bulk spices wholesale India. Export quality turmeric powder, cumin seeds exporter, coriander seeds india export. APEDA approved exporters with global shipping.",
  keywords: "agriculture products exporter india, bulk spices wholesale india, turmeric powder exporter india, cumin seeds exporter india, coriander seeds india export, red chilli powder export, fennel seeds india, APEDA approved",
  openGraph: {
    title: "Agriculture Products & Spices Export - Vexlure International",
    description: "Premium bulk spices wholesale from India. Turmeric, cumin, coriander export. APEDA certified.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.vexlureinternational.com/"}/product`,
  },
};

export default function ProductPage() {
  return (
    <>
      <main className="flex flex-col">
        <ProductCategoriesSection />
      </main>
    </>
  );
}
