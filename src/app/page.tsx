import MinimalHeader from "@/components/MinimalHeader";
import DotNavigation from "@/components/DotNavigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <MinimalHeader />
      <DotNavigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
      </main>
    </>
  );
}
