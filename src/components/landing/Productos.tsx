import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/config/productos";
import { Section } from "./Section";
import { ArrowRight, Bot, FileCheck2, Megaphone, Target } from "lucide-react";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@yago.cl";
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ""; // ej: 56912345678

const PRODUCT_ICON: Record<string, any> = {
  sofia: Bot,
  antonia: Target,
  massimo: Megaphone,
  procedura: FileCheck2,
};

function ProductosComponent() {
  return (
    <Section id="productos" className="z-10">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-xs tracking-[0.22em] text-muted-foreground">PRODUCTOS</p>
        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Productos listos para integrarse a tu operación.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            Ahorra meses de desarrollo con soluciones paquetizadas que ya consideran panel,
            permisos, analítica, flujos y puntos de integración para negocio real.
          </p>
        </div>

        {/* Orbe Atmosférico Background */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-12 blur-[84px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/70 via-cyan-400/60 to-fuchsia-400/55" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.map((p) => {
            const Icon = PRODUCT_ICON[p.slug] || Bot;

            const baseMsg = `Hola YAGO, me interesa ${p.name}. ¿Podemos agendar una conversación?`;
            const waHref = WHATSAPP_PHONE
              ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(baseMsg)}`
              : undefined;
            const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              `Interés en ${p.name}`
            )}&body=${encodeURIComponent(baseMsg)}`;

            return (
              <div
                key={p.slug}
                className="group hover-lift relative flex flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.84),rgba(10,16,25,0.96))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition hover:border-white/14"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/55 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative mb-6 aspect-[16/9] w-full shrink-0 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/40">
                  <Image
                    src={`/images/product_${p.slug}.png`}
                    alt={`Visualización de ${p.name}`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <Icon className="h-5 w-5 text-sky-100" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                    </div>
                  </div>

                  {p.badge && p.badge !== "—" && (
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.14em] text-slate-300">
                      {p.badge}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">{p.tagline}</p>

                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {p.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-200"
                        aria-hidden="true"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <Link
                    href={`/productos/${p.slug}`}
                    className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white transition hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 plausible-event-name=Product+More+Info plausible-event-product=${p.slug} plausible-event-location=productos_section`}
                    aria-label={`Ver más info sobre ${p.name}`}
                  >
                    Ver más info
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {waHref ? (
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] px-4 py-2 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 plausible-event-name=Product+Contact plausible-event-method=whatsapp plausible-event-product=${p.slug} plausible-event-location=productos_section`}
                    >
                      Contactar
                    </a>
                  ) : (
                    <a
                      href={mailHref}
                      className={`inline-flex items-center rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white transition hover:bg-black/30 plausible-event-name=Product+Contact plausible-event-method=email plausible-event-product=${p.slug} plausible-event-location=productos_section`}
                    >
                      Contactar
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default ProductosComponent;
export { ProductosComponent as Productos };
