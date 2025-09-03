"use client";

import Image from "next/image";
import { COMPANY } from "@/config/site";

export function BrandStamp() {
  const logo = COMPANY.logo || "/logo-yago.svg";
  const alt = `${COMPANY.name} logo`;

  return (
    <section aria-label="Marca Yago" className="py-12">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4">
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
          <Image
            src={logo}
            alt={alt}
            width={64}
            height={64}
            className="rounded-xl"
          />
          <div>
            <h3 className="text-lg font-semibold">{COMPANY.name}</h3>
            <p className="text-sm text-foreground/70">
              Automatización con IA: agentes, flujos y datos para acelerar tu operación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}