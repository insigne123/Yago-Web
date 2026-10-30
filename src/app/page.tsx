import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { HomeHero } from "@/components/home/HomeHero";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { HowWeWork } from "@/components/home/HowWeWork";
import { DecisionResources } from "@/components/home/DecisionResources";
import { CustomWork } from "@/components/home/CustomWork";
import { FeaturedCase } from "@/components/home/FeaturedCase";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { ContactSection } from "@/components/home/ContactSection";
import { Testimonials } from "@/components/cases/Testimonials";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "YAGO | Automatización e integración de IA en Chile",
  description:
    "Automatización de procesos, integración de IA, desarrollo de aplicaciones y software a medida, agentes y OCR para empresas en Chile. Agenda un diagnóstico con YAGO.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#070b13] text-white">
      <Navbar />
      <main id="main-content">
        <HomeHero />
        <CustomWork />
        <ProductsShowcase />
        <HowWeWork />
        <DecisionResources />
        <FeaturedCase />
        <Testimonials />
        <HomeFAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
