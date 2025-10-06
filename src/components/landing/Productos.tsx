"use client";

import Link from "next/link";
import { SectionReveal } from "@/components/ui/animated";
import { PRODUCTS } from "@/config/productos";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@yago.cl";
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ""; // ej: 56912345678

function ProductosComponent() {
  return (
    <section id="productos" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
            Productos
          </h2>
        </SectionReveal>

        <SectionReveal>
          {/* Tarjetas compactas: fáciles de leer y entender */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => {
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
                  className="group bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6 hover:ring-white/20 transition flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                    {p.badge && p.badge !== "—" && (
                      <span className="rounded-full px-3 py-1 text-xs bg-white/10 text-white/90 ring-1 ring-white/15">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-gray-300">{p.tagline}</p>

                  <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                    {p.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="rounded-xl p-2 bg-white/5 ring-1 ring-white/10">
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex gap-2">
                    <Link
                      href={`/productos/${p.slug}`}
                      className="inline-flex items-center rounded-xl px-3 py-2 bg-white text-black hover:opacity-90 transition text-sm"
                      aria-label={`Ver más info sobre ${p.name}`}
                    >
                      Ver más info
                    </Link>

                    {waHref ? (
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl px-3 py-2 bg-emerald-500/90 hover:bg-emerald-500 transition text-white text-sm"
                      >
                        Contactar
                      </a>
                    ) : (
                      <a
                        href={mailHref}
                        className="inline-flex items-center rounded-xl px-3 py-2 bg-white/10 hover:bg-white/15 transition text-white text-sm"
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
    </section>
  );
}

export default ProductosComponent;
export { ProductosComponent as Productos };
