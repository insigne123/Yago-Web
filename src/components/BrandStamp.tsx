"use client";

import Image from "next/image";
import { COMPANY } from "@/config/site";

export function BrandStamp() {
  const logo = COMPANY.logo || "/logo-yago.svg";
  const alt = `${COMPANY.name} logo`;

  return (
    <section aria-label="Marca Yago" className="py-12">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4">
        <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(700px 260px at 12% 20%, rgba(16,185,129,.14), transparent 60%), radial-gradient(720px 280px at 88% 80%, rgba(217,70,239,.14), transparent 60%)",
            }}
          />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={logo}
                alt={alt}
                width={64}
                height={64}
                className="rounded-xl"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">{COMPANY.name}</h3>
                <p className="mt-1 text-sm text-foreground/70">
                  Automatizacion con IA: agentes, flujos y datos para acelerar tu operacion.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
              {["Agentes IA", "Automatizacion", "RAG", "Integraciones", "Analitica"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
