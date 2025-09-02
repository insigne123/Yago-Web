import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Logos } from "@/components/landing/Logos";
import { Servicios } from "@/components/landing/Servicios";
import { Productos } from "@/components/landing/Productos";
import { Tecnologia } from "@/components/landing/Tecnologia";
import { Testimonios } from "@/components/landing/Testimonios";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Contacto } from "@/components/landing/Contacto";
import { Footer } from "@/components/landing/Footer";

export default function LandingIA() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Servicios />
        <Productos />
        <Tecnologia />
        <Testimonios />
        <FAQ />
        <CTA />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
