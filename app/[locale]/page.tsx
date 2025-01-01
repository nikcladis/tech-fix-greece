import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <FooterSection />
    </main>
  );
}
