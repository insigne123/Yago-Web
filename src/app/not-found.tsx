import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function NotFound() {
  return (
    <div className="relative min-h-screen text-white">
      <Navbar />
      <main id="main-content" className="main-premium flex min-h-[65vh] items-center py-20">
        <div className="mx-auto w-full max-w-3xl px-4 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-slate-950 text-sky-200">
            <Search className="size-6" aria-hidden="true" />
          </div>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Error 404</p>
          <h1 className="mt-3 text-balance font-headline text-4xl font-semibold text-white md:text-6xl">
            Esta página no está disponible.
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-300">
            La dirección puede haber cambiado. Vuelve al inicio o revisa las soluciones para encontrar la ruta correcta.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#070b13]">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Volver al inicio
            </Link>
            <Link href="/soluciones" className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white">
              Ver soluciones
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
