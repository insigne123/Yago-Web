/* ---------------------------------------------------------------------------
   Estilos de lectura para el cuerpo de los artículos (fondo claro).
   Se aplican con variantes arbitrarias sobre un contenedor, así cualquier
   marcado semántico (h2, h3, p, listas, citas, tablas, código) queda estilado.
   --------------------------------------------------------------------------- */

export const ARTICLE_PROSE = [
  // base
  "text-[17px] leading-[1.75] text-slate-700 sm:text-[17.5px] [&>:first-child]:mt-0",
  // títulos
  "[&_h2]:mt-14 [&_h2]:scroll-mt-28 [&_h2]:text-balance [&_h2]:font-headline [&_h2]:text-[clamp(1.5rem,2.4vw,1.95rem)] [&_h2]:font-semibold [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.025em] [&_h2]:text-slate-950",
  "[&_h3]:mt-10 [&_h3]:scroll-mt-28 [&_h3]:font-headline [&_h3]:text-[1.25rem] [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:tracking-[-0.015em] [&_h3]:text-slate-950",
  "[&_h2+p]:mt-4 [&_h2+ul]:mt-4 [&_h2+ol]:mt-4 [&_h3+p]:mt-3 [&_h3+ul]:mt-3 [&_h3+ol]:mt-3",
  // párrafos y listas
  "[&_p]:mt-5 [&_p]:text-pretty",
  "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2.5 [&_ul]:pl-6 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2.5 [&_ol]:pl-6",
  "[&_li]:pl-1.5 [&_li::marker]:text-sky-600 [&_ol>li::marker]:font-mono [&_ol>li::marker]:text-[0.85em]",
  // enlaces y énfasis
  "[&_a]:font-medium [&_a]:text-sky-700 [&_a]:underline [&_a]:decoration-sky-300 [&_a]:decoration-1 [&_a]:underline-offset-4 [&_a:hover]:text-sky-900 [&_a:hover]:decoration-sky-600",
  "[&_strong]:font-semibold [&_strong]:text-slate-950",
  // citas
  "[&_blockquote]:mt-8 [&_blockquote]:border-l-2 [&_blockquote]:border-sky-500 [&_blockquote]:pl-5 [&_blockquote]:font-headline [&_blockquote]:text-[1.2rem] [&_blockquote]:leading-[1.5] [&_blockquote]:text-slate-900",
  // código
  "[&_code]:rounded-md [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.86em] [&_code]:text-slate-900",
  "[&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:bg-[#0b1220] [&_pre]:p-5 [&_pre]:text-[14px] [&_pre]:leading-relaxed [&_pre]:text-slate-200 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit",
  // tablas
  "[&_table]:mt-8 [&_table]:w-full [&_table]:border-collapse [&_table]:text-left [&_table]:text-[15px]",
  "[&_th]:border-b [&_th]:border-slate-300 [&_th]:py-2.5 [&_th]:pr-4 [&_th]:font-semibold [&_th]:text-slate-950 [&_td]:border-b [&_td]:border-slate-200 [&_td]:py-2.5 [&_td]:pr-4 [&_td]:align-top",
  // separadores
  "[&_hr]:my-12 [&_hr]:border-slate-200",
].join(" ");

/** Convierte un título en un id de ancla estable ("Qué es (en términos simples)" → "que-es-en-terminos-simples"). */
export function headingId(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
