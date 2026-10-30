import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import EcosystemGrid from "@/components/ecosystem-grid";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <EcosystemGrid />
      </main>
      <Footer />
    </div>
  );
}
