import HeroSection from "@/components/HeroSection";
import IndustrySection from "@/components/IndustrySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <>

      <main className="flex flex-col mt-6 ">
        <HeroSection />
        <IndustrySection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ProductsSection />
      </main>
      
    </>
  );
}
