import { Navbar } from "@/components/ui/navbar";
import { FooterSection } from "@/components/sections/footer-section";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-background to-muted">
        {children}
      </main>
      <FooterSection />
    </div>
  );
}
