import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Logos } from "@/components/landing/Logos";
import { QueHacemos } from "@/components/landing/QueHacemos";
import { CasosExito } from "@/components/landing/CasosExito";
import { Proceso } from "@/components/landing/Proceso";
import { OcrPreview } from "@/components/landing/OcrPreview";
import { BlogDestacado } from "@/components/landing/BlogDestacado";
import FAQ from "@/components/landing/FAQ";
import { Contacto } from "@/components/landing/Contacto";
import { Footer } from "@/components/landing/Footer";
import { BrandStamp } from "@/components/BrandStamp";
import { SectionReveal } from "@/components/ui/animated";
import { PRIMARY_CTA } from "@/config/site";

export default function LandingIA() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-white">
      <Navbar ctaHref={PRIMARY_CTA.href} ctaLabel={PRIMARY_CTA.label} />
      <main id="main-content" className="main-premium">
        {/* 1. Hero (dark) */}
        <Hero />

        {/* 2. Prueba social compacta (dark) */}
        <SectionReveal as="div" delay={0.03}>
          <Logos />
        </SectionReveal>

        {/* 3. Qué hacemos: rutas + servicios fusionados (light) */}
        <SectionReveal as="div" delay={0.04}>
          <QueHacemos />
        </SectionReveal>

        {/* 4. Casos de éxito (light) */}
        <SectionReveal as="div" delay={0.05}>
          <CasosExito />
        </SectionReveal>

        {/* 5. Proceso resumido (dark) */}
        <SectionReveal as="div" delay={0.05}>
          <Proceso />
        </SectionReveal>

        {/* 6. OCR demo teaser (dark) */}
        <SectionReveal as="div" delay={0.05}>
          <OcrPreview />
        </SectionReveal>

        {/* 7. Blog destacado (light) */}
        <SectionReveal as="div" delay={0.05}>
          <BlogDestacado />
        </SectionReveal>

        {/* 8. FAQ + Contacto (dark) */}
        <SectionReveal as="div" delay={0.06}>
          <FAQ />
        </SectionReveal>
        <SectionReveal as="div" delay={0.06}>
          <Contacto />
        </SectionReveal>
      </main>
      <BrandStamp />
      <Footer />
    </div>
  );
}
