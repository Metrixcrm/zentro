import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import EcosystemGrid from "@/components/ecosystem-grid";
import ProductCarousel3D from "@/components/product-carousel-3d";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-center text-gold-primary mb-8">
              The Collection, In The Round
            </h2>
            <ProductCarousel3D />
          </div>
        </section>
        <EcosystemGrid />
      </main>
      <Footer />
    </div>
  );
}
