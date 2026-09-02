import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { COMPANY, PRIMARY_CTA } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Términos de uso | YAGO",
  description: "Condiciones generales de uso del sitio web de YAGO y de su contenido informativo.",
  path: "/terminos",
});

export default function TermsPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <Navbar ctaHref={PRIMARY_CTA.href} ctaLabel={PRIMARY_CTA.label} />
      <main id="main-content" className="main-premium pb-24 pt-20 md:pt-24">
        <article className="mx-auto max-w-3xl px-4">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-700">Información legal</p>
          <h1 className="mt-4 font-headline text-4xl font-semibold text-slate-950 md:text-5xl">Términos de uso</h1>
          <p className="mt-4 text-sm text-slate-600">Última actualización: 1 de septiembre de 2026.</p>

          <div className="mt-10 space-y-9 text-base leading-7 text-slate-700">
            <section>
              <h2 className="text-2xl font-semibold text-slate-950">1. Alcance del sitio</h2>
              <p className="mt-3">
                Este sitio presenta información general sobre YAGO, sus productos y servicios. El contenido no constituye
                por sí solo una oferta contractual ni reemplaza una propuesta comercial, técnica o legal específica.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-slate-950">2. Uso permitido</h2>
              <p className="mt-3">
                Puedes utilizar el sitio para informarte y contactar a YAGO. No debes intentar afectar su disponibilidad,
                acceder sin autorización a sistemas relacionados ni reutilizar su contenido de forma engañosa.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-slate-950">3. Información y resultados</h2>
              <p className="mt-3">
                Tiempos, alcances y resultados dependen del proceso, los datos, las integraciones y las condiciones acordadas
                con cada cliente. Los compromisos aplicables se establecen en la propuesta o contrato correspondiente.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-slate-950">4. Sitios y servicios externos</h2>
              <p className="mt-3">
                Algunos enlaces dirigen a herramientas externas, como agenda o mensajería. Esos servicios operan bajo sus
                propias condiciones y políticas de privacidad.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-slate-950">5. Contacto</h2>
              <p className="mt-3">
                Para consultas sobre estas condiciones, escribe a{" "}
                <a className="font-semibold text-sky-800 underline underline-offset-4" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
                . Este documento debe revisarse junto con la identificación legal definitiva del responsable del sitio.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
