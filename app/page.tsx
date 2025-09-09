import HeroSection from "@/components/Homepage/HeroSection";
import IndustrySection from "@/components/Homepage/IndustrySection";
import TestimonialsSection from "@/components/Homepage/TestimonialsSection";
import WhyChooseUsSection from "@/components/Homepage/WhyChooseUsSection";
import ProductsSection from "@/components/Homepage/ProductsSection";

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
