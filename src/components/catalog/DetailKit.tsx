import type { ReactNode } from "react";
import { FramedImage } from "@/components/catalog/CatalogKit";
import { COMPANY } from "@/config/site";

/* ---------------------------------------------------------------------------
   Piezas para las páginas de detalle (/productos/[slug] y /servicios/[slug]).
   Complementan PageKit y CatalogKit.
   --------------------------------------------------------------------------- */

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || COMPANY.email;
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "";

/** Enlaces de contacto con mensaje prellenado (correo y WhatsApp). */
export function contactLinks({ subject, message }: { subject: string; message: string }) {
  const text = encodeURIComponent(message);
  const waBase = WHATSAPP_PHONE ? `https://wa.me/${WHATSAPP_PHONE}` : COMPANY.whatsappLink;
  return {
    mailHref: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${text}`,
    waHref: `${waBase}?text=${text}`,
  };
}

const COUNT_WORDS: Record<number, string> = { 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 6: "seis", 7: "siete" };

/** 3 -> "tres" (para títulos del tipo "en tres etapas"). */
export function countWord(count: number) {
  return COUNT_WORDS[count] ?? String(count);
}

/** Columna derecha del hero oscuro: ilustración enmarcada y una ficha superpuesta. */
export function DetailHeroAside({ src, alt, card }: { src: string; alt: string; card?: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <FramedImage src={src} alt={alt} sizes="(min-width: 1024px) 42vw, (min-width: 640px) 36rem, 100vw" priority dark />
      {card ? (
        <div className="relative z-[1] mx-2 -mt-12 rounded-2xl bg-[#0b1220] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),0_30px_60px_-30px_rgba(0,0,0,0.9)] sm:mx-8">
          {card}
        </div>
      ) : null}
    </div>
  );
}

/** Cifras cortas en fila (por ejemplo "4 módulos · 4 integraciones · 3 etapas"). */
export function StatRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="flex divide-x divide-white/[0.08]">
      {items.map((item) => (
        <div key={item.label} className="flex min-w-0 flex-1 flex-col-reverse gap-1 px-3 py-4 sm:px-6 sm:py-5">
          <dt className="hyphens-auto text-[12.5px] leading-snug text-slate-400 sm:text-[13px]">{item.label}</dt>
          <dd className="font-headline text-[1.6rem] font-semibold leading-none tracking-[-0.02em] text-white">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
