import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";

/* ---------------------------------------------------------------------------
   Piezas para las páginas de catálogo (/productos y /servicios).
   Se apoyan en las clases `y-*` de globals.css y complementan PageKit.
   --------------------------------------------------------------------------- */

/** Ilustración enmarcada (bisel blanco o vidrio oscuro) para columnas de hero. */
export function FramedImage({
  src,
  alt,
  sizes,
  priority = false,
  dark = false,
  aspect = "aspect-[5/4]",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  dark?: boolean;
  aspect?: string;
}) {
  return (
    <div
      className={`relative rounded-[1.75rem] p-2 ${
        dark
          ? "bg-white/[0.06] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),0_40px_90px_-40px_rgba(0,0,0,0.85)]"
          : "bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.07),0_40px_80px_-40px_rgba(15,23,42,0.35)]"
      }`}
    >
      <div className={`relative ${aspect} overflow-hidden rounded-[1.35rem] bg-[#eef3f9]`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-slate-900/5" />
      </div>
    </div>
  );
}

/** Tarjeta clicable con imagen arriba, para grillas de productos y servicios sobre fondo claro. */
export function ImageLinkCard({
  href,
  image,
  imageAlt = "",
  title,
  description,
  tag,
  meta,
  cta = "Ver detalle",
  sizes = "(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw",
  large = false,
  className = "",
}: {
  href: string;
  image: string;
  /** Descripción cuando la ilustración aporta información; vacío para imágenes decorativas. */
  imageAlt?: string;
  title: string;
  description: string;
  tag?: string;
  meta?: string;
  cta?: string;
  sizes?: string;
  large?: boolean;
  /** Clases extra (por ejemplo, eventos de Plausible). */
  className?: string;
}) {
  return (
    <Link href={href} className={`y-spot y-card y-card-hover y-reveal group flex flex-col overflow-hidden ${className}`}>
      <div className={`relative overflow-hidden border-b border-slate-200/70 bg-[#eef3f9] ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className={`flex flex-1 flex-col gap-3 ${large ? "p-7 sm:p-8" : "p-6 sm:p-7"}`}>
        {tag ? <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-sky-700">{tag}</span> : null}
        <h3 className={`y-h3 text-slate-950 ${large ? "text-[1.5rem] sm:text-[1.65rem]" : "text-[1.25rem]"}`}>{title}</h3>
        <p className={`leading-relaxed text-slate-600 ${large ? "text-[16px]" : "text-[15px]"}`}>{description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
          {meta ? (
            <span className="rounded-full bg-mist px-3 py-1.5 font-mono text-xs text-slate-700 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)]">
              {meta}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-sky-700">
            {cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Lista en una sola tarjeta blanca, con filas numeradas o con check. */
export function ListCard({ items, numbered = false }: { items: string[]; numbered?: boolean }) {
  const List = numbered ? "ol" : "ul";
  return (
    <List className="y-card y-reveal overflow-hidden">
      {items.map((item, index) => (
        <li
          key={item}
          className={`flex gap-4 px-6 py-5 sm:gap-5 sm:px-8 sm:py-6 ${index ? "border-t border-slate-100" : ""}`}
        >
          {numbered ? (
            <span className="mt-0.5 shrink-0 font-mono text-[13px] text-sky-700">{String(index + 1).padStart(2, "0")}</span>
          ) : (
            <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" strokeWidth={1.8} aria-hidden="true" />
          )}
          <span className="min-w-0 text-[16.5px] font-medium leading-relaxed text-slate-900">{item}</span>
        </li>
      ))}
    </List>
  );
}

/** Pastillas pequeñas (tecnologías, integraciones, entregables). */
export function ChipList({ items, dark = false, className = "" }: { items: string[]; dark?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full px-3 py-1.5 text-[13px] ${
            dark
              ? "text-slate-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]"
              : "bg-mist text-slate-700 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.07)]"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Clases de grilla según cantidad de pasos (siempre con base de una columna). */
export function stepGridClass(count: number) {
  if (count <= 3) return "grid grid-cols-1 gap-5 md:grid-cols-3";
  if (count === 4) return "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4";
  return "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]";
}

/** Bloque de encabezado de columna izquierda (eyebrow + h2 + texto + extra). */
export function ColumnHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-5">
      <span className="y-eyebrow">{eyebrow}</span>
      <h2 className="y-h2 text-slate-950">{title}</h2>
      {description ? <div className="y-lead">{description}</div> : null}
      {children}
    </div>
  );
}
