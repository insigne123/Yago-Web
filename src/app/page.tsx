import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Logos } from "@/components/landing/Logos";
import { Nosotros } from "@/components/landing/Nosotros";
import { Servicios } from "@/components/landing/Servicios";
import { Productos } from "@/components/landing/Productos";
import { Tecnologia } from "@/components/landing/Tecnologia";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Contacto } from "@/components/landing/Contacto";
import { Footer } from "@/components/landing/Footer";
import { BrandStamp } from "@/components/BrandStamp";
import { SectionReveal, DividerGlow } from "@/components/ui/animated";

export default function LandingIA() {
  return (
    <div className="relative min-h-screen text-white">
      <Navbar />
      <main>
        <SectionReveal as="div"><Hero /></SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.05}><Logos /></SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.1}><Nosotros /></SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.1}><Servicios /></SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.12}><Productos /></SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.14}><Tecnologia /></SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.16}><FAQ /></SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.18}><CTA /></SectionReveal>
        <DividerGlow />
        <SectionReveal as="div" delay={0.2}><Contacto /></SectionReveal>
      </main>
      <BrandStamp />
      <Footer />
    </div>
  );
}
