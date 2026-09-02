import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { RouteChooser } from "@/components/landing/RouteChooser";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { Logos } from "@/components/landing/Logos";
import { Proceso } from "@/components/landing/Proceso";
import { Servicios } from "@/components/landing/Servicios";
import { Productos } from "@/components/landing/Productos";
import FAQ from "@/components/landing/FAQ";
import { Contacto } from "@/components/landing/Contacto";
import { Footer } from "@/components/landing/Footer";
import { BrandStamp } from "@/components/BrandStamp";
import { SectionReveal, DividerGlow } from "@/components/ui/animated";
import { PRIMARY_CTA } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";
import { DeferredAuditWidget } from "@/components/landing/DeferredAuditWidget";

export const metadata = createPageMetadata({
  title: "YAGO | Automatización de procesos con IA para empresas",
  description:
    "Automatizamos procesos, documentos e integraciones para equipos de operaciones, backoffice y finanzas en Chile.",
  path: "/",
});

export default function LandingIA() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
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
        <SectionReveal as="div" delay={0.1}>
          <CaseStudies />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.1} surface="soft">
          <Proceso />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.1} surface="strong">
          <Productos />
        </SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.13} surface="soft">
          <Servicios />
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
      <DeferredAuditWidget />
    </div>
  );
}
