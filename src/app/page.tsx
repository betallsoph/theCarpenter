import MinimalHeader from "@/components/MinimalHeader";
import DotNavigation from "@/components/DotNavigation";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <MinimalHeader />
      <DotNavigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <ContactSection />
      </main>
    </>
  );
}
