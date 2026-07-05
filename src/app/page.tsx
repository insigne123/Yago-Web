import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { RouteChooser } from "@/components/landing/RouteChooser";
import { OperationsFit } from "@/components/landing/OperationsFit";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { Logos } from "@/components/landing/Logos";
import { SolutionsPreview } from "@/components/landing/SolutionsPreview";
import { Proceso } from "@/components/landing/Proceso";
import { Servicios } from "@/components/landing/Servicios";
import { OcrPreview } from "@/components/landing/OcrPreview";
import FAQ from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Contacto } from "@/components/landing/Contacto";
import { Footer } from "@/components/landing/Footer";
import { BrandStamp } from "@/components/BrandStamp";
import { SectionReveal, DividerGlow } from "@/components/ui/animated";
import { PRIMARY_CTA } from "@/config/site";

export default function LandingIA() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-white">
      <Navbar ctaHref={PRIMARY_CTA.href} ctaLabel={PRIMARY_CTA.label} />
      <main id="main-content" className="main-premium">
        <Hero />
        <DividerGlow />
        <SectionReveal as="div" delay={0.03} surface="strong">
          <RouteChooser />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.04} surface="soft">
          <Logos />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.05} surface="strong">
          <OperationsFit />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.1}>
          <CaseStudies />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.1} surface="soft">
          <SolutionsPreview />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.1} surface="strong">
          <CTA />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.1} surface="soft">
          <Proceso />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.13} surface="soft">
          <Servicios />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.13} surface="strong">
          <OcrPreview />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.18} surface="strong">
          <FAQ />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.18} surface="strong">
          <Contacto />
        </SectionReveal>
      </main>
      <BrandStamp />
      <Footer />
    </div>
  );
}
