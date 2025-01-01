import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ServicesSection } from "@/components/sections/services-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
