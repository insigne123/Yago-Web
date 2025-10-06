"use client";

import Link from "next/link";
import { SectionReveal } from "@/components/ui/animated";
import { PRODUCTS } from "@/config/productos";

function ProductosComponent() {
  if (PRODUCTS.length === 0) {
    return null; // Don't render the section if there are no products
  }

  return (
    <section id="productos" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
            Productos
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.slug}
                className="group bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6 hover:ring-white/20 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">{p.name}</h3>
                  {p.badge && p.badge !== "—" && (
                    <span className="rounded-full px-3 py-1 text-xs bg-white/10 text-white/90 ring-1 ring-white/15">
                      {p.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-gray-300">{p.tagline}</p>

                <ul className="mt-4 space-y-2 text-gray-300">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-xl p-3 bg-white/5 ring-1 ring-white/10"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                {p.cta && (
                  <div className="mt-6">
                    {p.cta.external ? (
                      <a
                        href={p.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-black hover:opacity-90 transition"
                        aria-label={`${p.cta.label} (${p.name})`}
                      >
                        {p.cta.label}
                      </a>
                    ) : (
                      <Link
                        href={p.cta.href}
                        className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-black hover:opacity-90 transition"
                        aria-label={`${p.cta.label} (${p.name})`}
                      >
                        {p.cta.label}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export default ProductosComponent;
export { ProductosComponent as Productos };
