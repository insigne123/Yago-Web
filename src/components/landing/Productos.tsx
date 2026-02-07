"use client";

import Link from "next/link";
import { SectionReveal } from "@/components/ui/animated";
import { PRODUCTS } from "@/config/productos";
import { Section } from "./Section";
import { ArrowRight, Bot, Megaphone, Target } from "lucide-react";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@yago.cl";
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ""; // ej: 56912345678

const PRODUCT_ICON: Record<string, any> = {
  sofia: Bot,
  antonia: Target,
  massimo: Megaphone,
};

function ProductosComponent() {
  return (
    <Section id="productos" className="z-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionReveal>
          <p className="text-xs tracking-[0.22em] text-muted-foreground">PRODUCTOS</p>
          <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-semibold text-white md:text-5xl">
              Paquetes listos para operar
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              Productos que aceleran adoption: panel, roles, logs y metricas. Se integran a tu stack y crecen por modulos.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-fuchsia-500/60 via-cyan-400/60 to-emerald-400/60 opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
                        <Icon className="h-5 w-5 text-emerald-200" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                        <div className="mt-0.5 text-xs text-muted-foreground">{p.slug.toUpperCase()}</div>
                      </div>
                    </div>

                    {p.badge && p.badge !== "—" && (
                      <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-foreground/85">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>

                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {p.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400"
                          aria-hidden="true"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <Link
                      href={`/productos/${p.slug}`}
                      className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15 plausible-event-name=Product+More+Info plausible-event-product=${p.slug} plausible-event-location=productos_section`}
                      aria-label={`Ver más info sobre ${p.name}`}
                    >
                      Ver mas info
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    {waHref ? (
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center rounded-xl bg-emerald-500/90 px-4 py-2 text-sm text-white transition hover:bg-emerald-500 plausible-event-name=Product+Contact plausible-event-method=whatsapp plausible-event-product=${p.slug} plausible-event-location=productos_section`}
                      >
                        Contactar
                      </a>
                    ) : (
                      <a
                        href={mailHref}
                        className={`inline-flex items-center rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white transition hover:bg-black/30 plausible-event-name=Product+Contact plausible-event-method=email plausible-event-product=${p.slug} plausible-event-location=productos_section`}
                      >
                        Contactar
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </Section>
  );
}

export default ProductosComponent;
export { ProductosComponent as Productos };
