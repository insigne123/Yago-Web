import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Check, CircleCheck, Clock3, MessageCircle, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { COMPANY, PRIMARY_CTA } from "@/config/site";
import { HeroField } from "@/components/motion/HeroField";
import { keepCodesTogether } from "@/lib/typography";

/* ---------------------------------------------------------------------------
   Piezas compartidas para las páginas internas de yago.cl.
   Todas usan las clases `y-*` definidas en globals.css.
   --------------------------------------------------------------------------- */

type NavbarProps = ComponentProps<typeof Navbar>;

export function PageShell({ children, navbar }: { children: ReactNode; navbar?: NavbarProps }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#070b13] text-white">
      <Navbar {...navbar} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export type Action = { label: string; href: string; event?: string };

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

/** Enlace con estilo de botón. Abre en pestaña nueva cuando es externo. */
export function ActionLink({
  action,
  variant = "primary",
  size,
  arrow = false,
  className = "",
}: {
  action: Action;
  variant?: "primary" | "glass" | "ink" | "outline";
  size?: "sm";
  arrow?: boolean;
  className?: string;
}) {
  const cls = `y-btn y-btn-${variant} ${size === "sm" ? "y-btn-sm" : ""} ${action.event ?? ""} ${className}`;
  const content = (
    <>
      {action.label}
      {arrow ? <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" /> : null}
    </>
  );
  if (isExternal(action.href)) {
    return (
      <a href={action.href} target="_blank" rel="noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  if (action.href.startsWith("#")) {
    return (
      <a href={action.href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={action.href} className={cls}>
      {content}
    </Link>
  );
}

export const BOOKING_ACTION: Action = {
  label: PRIMARY_CTA.label,
  href: PRIMARY_CTA.href,
  event: "plausible-event-name=CTA+Agendar+Sesion plausible-event-location=page",
};

export const WHATSAPP_ACTION: Action = {
  label: "Escribir por WhatsApp",
  href: COMPANY.whatsappLink,
  event: "plausible-event-name=CTA+WhatsApp plausible-event-location=page",
};

/* ------------------------------- Hero ------------------------------------ */

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  actions,
  top,
  aside,
  center = false,
  fx = false,
  children,
}: {
  /** Fondo 3D animado (WebGL) en lugar de la cuadrícula. */
  fx?: boolean;
  eyebrow?: string;
  title: string;
  /** Parte final del título que se destaca con degradado. */
  highlight?: string;
  description?: ReactNode;
  actions?: ReactNode;
  /** Contenido sobre el eyebrow (por ejemplo, migas de pan). */
  top?: ReactNode;
  /** Columna derecha opcional (maqueta, tarjeta, datos). */
  aside?: ReactNode;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <section id="inicio" className="y-dark y-grain relative overflow-hidden pb-24 pt-14 md:pb-28 md:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12%] top-[-25%] h-[40rem] w-[40rem] rounded-full bg-sky-400/[0.12] blur-[120px]" />
        <div className="absolute left-[-15%] top-[-30%] h-[28rem] w-[28rem] rounded-full bg-sky-300/[0.05] blur-[110px]" />
        {fx ? null : <div className="y-grid-bg" />}
      </div>
      {fx ? <HeroField /> : null}
      <div
        className={`y-container relative grid grid-cols-1 items-center gap-12 ${
          aside ? "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16" : ""
        }`}
      >
        <div className={`flex flex-col gap-6 ${center && !aside ? "mx-auto max-w-4xl items-center text-center" : "items-start"}`}>
          {top}
          {eyebrow ? <span className="y-eyebrow">{eyebrow}</span> : null}
          <h1 className={`y-display text-[clamp(2.4rem,5.2vw,4.4rem)] text-white ${aside ? "" : "max-w-5xl"}`}>
            {keepCodesTogether(title)}
            {highlight ? (
              <>
                {" "}
                <span className="y-gradient-text">{highlight}</span>
              </>
            ) : null}
          </h1>
          {description ? <div className="y-lead max-w-2xl">{description}</div> : null}
          {actions ? <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">{actions}</div> : null}
          {children}
        </div>
        {aside ? <div className="relative">{aside}</div> : null}
      </div>
    </section>
  );
}

/* ------------------------------ Secciones -------------------------------- */

export function PageSection({
  id,
  tone = "light",
  sheet = true,
  className = "",
  children,
}: {
  id?: string;
  tone?: "light" | "mist" | "dark";
  sheet?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`y-${tone} ${sheet ? "y-sheet" : "y-section"} ${tone === "dark" ? "y-grain overflow-hidden" : ""} ${className}`}
    >
      {tone === "dark" ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[24rem] w-[56rem] -translate-x-1/2 rounded-full bg-sky-400/[0.07] blur-[120px]" />
        </div>
      ) : null}
      <div className="y-container relative">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        center ? "mx-auto max-w-3xl items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={`flex max-w-3xl flex-col gap-5 ${center ? "items-center" : ""}`}>
        {eyebrow ? <span className="y-eyebrow">{eyebrow}</span> : null}
        <h2 className={`y-h2 ${dark ? "text-white" : "text-slate-950"}`}>{title}</h2>
        {description ? <div className="y-lead">{description}</div> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const external = isExternal(href);
  const inner = (
    <>
      {children}
      <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
    </>
  );
  if (external || href.startsWith("#")) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="y-link">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className="y-link">
      {inner}
    </Link>
  );
}

/* ------------------------------ Piezas ----------------------------------- */

export function IconTile({ icon: Icon, dark = false, size = "md" }: { icon: LucideIcon; dark?: boolean; size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-12 w-12" : "h-11 w-11";
  return (
    <span
      className={`grid ${box} shrink-0 place-items-center rounded-2xl ${
        dark
          ? "bg-gradient-to-b from-sky-300/20 to-sky-400/5 text-sky-200 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.22)]"
          : "bg-gradient-to-b from-sky-50 to-sky-100 text-sky-700 shadow-[inset_0_0_0_1px_rgba(14,165,233,0.18)]"
      }`}
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
    </span>
  );
}

export function CheckList({ items, dark = false, className = "" }: { items: string[]; dark?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className={`flex gap-2.5 text-[15.5px] leading-snug ${dark ? "text-slate-200" : "text-slate-700"}`}>
          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-sky-300" : "text-sky-600"}`} strokeWidth={2.4} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Tarjeta numerada para pasos sobre fondo oscuro. */
export function StepCard({ index, title, description, chips }: { index: number; title: string; description: string; chips?: string[] }) {
  return (
    <li className="y-glass y-reveal flex flex-col gap-4 p-7">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0b1220] font-mono text-[13px] font-medium text-sky-300 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.45),0_0_20px_rgba(56,189,248,0.25)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="y-h3 text-[1.3rem] text-white">{title}</h3>
      <p className="text-[15px] leading-relaxed text-slate-300">{description}</p>
      {chips?.length ? (
        <span className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {chips.map((chip) => (
            <span key={chip} className="rounded-full px-2.5 py-1 text-[12.5px] text-slate-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]">
              {chip}
            </span>
          ))}
        </span>
      ) : null}
    </li>
  );
}

export function FaqAccordion({ items, idPrefix = "faq" }: { items: { question: string; answer: string }[]; idPrefix?: string }) {
  return (
    <Accordion type="single" collapsible defaultValue={`${idPrefix}-0`}>
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`${idPrefix}-${index}`} className="border-slate-200 first:border-t">
          <AccordionTrigger className="gap-6 py-6 text-left font-headline text-[1.1rem] font-semibold tracking-[-0.01em] text-slate-950 hover:no-underline md:text-[1.2rem] [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-sky-600">
            <span className="flex-1">{item.question}</span>
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl pb-6 text-[16.5px] leading-relaxed text-slate-600">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

/** Sección de preguntas: título a la izquierda, acordeón a la derecha. */
export function FaqSection({
  id = "faq",
  title = "Preguntas frecuentes",
  items,
  aside,
}: {
  id?: string;
  title?: string;
  items: { question: string; answer: string }[];
  aside?: ReactNode;
}) {
  return (
    <PageSection id={id} tone="light">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start gap-5 lg:col-span-4">
          <span className="y-eyebrow">Preguntas</span>
          <h2 className="y-h2 text-slate-950 lg:text-[2.75rem]">{title}</h2>
          {aside}
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <FaqAccordion items={items} idPrefix={id} />
        </div>
      </div>
    </PageSection>
  );
}

/** Cierre oscuro con llamado a la acción. */
export function CtaBand({
  id,
  eyebrow = "Siguiente paso",
  title,
  text,
  primary = BOOKING_ACTION,
  secondary = WHATSAPP_ACTION,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  text?: string;
  primary?: Action;
  secondary?: Action | null;
}) {
  return (
    <section id={id} className="y-dark y-sheet y-grain overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-sky-400/[0.12] blur-[120px]" />
        <div className="y-grid-bg" />
      </div>
      <div className="y-container relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="y-eyebrow">{eyebrow}</span>
        <h2 className="y-h2 text-white">{title}</h2>
        {text ? <p className="y-lead max-w-2xl">{text}</p> : null}
        <div className="mt-2 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <ActionLink action={primary} arrow />
          {secondary ? (
            <ActionLink action={secondary} variant="glass" />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function WhatsAppLink({ label = "Escribir por WhatsApp", location = "page" }: { label?: string; location?: string }) {
  return (
    <a
      href={COMPANY.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className={`y-link plausible-event-name=CTA+WhatsApp plausible-event-location=${location}`}
    >
      <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
      {label}
    </a>
  );
}

/* --------------------------- Plantilla producto --------------------------- */

/** Hero claro (fondo mist) para páginas de producto: texto a la izquierda y maqueta a la derecha. */
export function ProductHero({
  top,
  pill,
  title,
  description,
  actions,
  facts,
  aside,
}: {
  top?: ReactNode;
  pill?: string;
  title: ReactNode;
  description: ReactNode;
  actions: ReactNode;
  facts?: { label: string; value: string }[];
  aside: ReactNode;
}) {
  return (
    <section id="inicio" className="y-mist relative overflow-hidden pb-24 pt-12 md:pb-28 md:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12%] top-[-20%] h-[40rem] w-[40rem] rounded-full bg-sky-300/25 blur-[120px]" />
        <div className="y-grid-bg y-grid-bg-light" />
      </div>
      <div className="y-container relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          {top}
          {pill ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium text-emerald-800 shadow-[0_0_0_1px_rgba(16,185,129,0.25)]">
              <span className="h-1.5 w-1.5 animate-y-pulse rounded-full bg-emerald-500" aria-hidden="true" />
              {pill}
            </span>
          ) : null}
          <h1 className="y-display text-[clamp(2.6rem,5.4vw,4.6rem)] text-slate-950">{title}</h1>
          <div className="y-lead max-w-xl">{description}</div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">{actions}</div>
          {facts?.length ? (
            <dl className="mt-3 grid w-full grid-cols-1 gap-5 border-t border-slate-200 pt-6 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1">
                  <dt className="text-[13px] text-slate-600">{fact.label}</dt>
                  <dd className="text-[15px] font-semibold leading-snug text-slate-950">{fact.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <div className="relative">{aside}</div>
      </div>
    </section>
  );
}

/** Tabla "Hoy, a mano" vs. "Con el producto". */
export function ComparisonCard({
  rows,
  productLabel,
  todayLabel = "Hoy, a mano",
}: {
  rows: { today: string; withProduct: string }[];
  productLabel: string;
  todayLabel?: string;
}) {
  return (
    <div className="y-card y-reveal overflow-hidden">
      <div className="hidden grid-cols-2 border-b border-slate-200 md:grid">
        <span className="flex items-center gap-2.5 bg-slate-50 px-8 py-4 text-[15px] font-semibold text-slate-600">
          <Clock3 className="h-[18px] w-[18px]" aria-hidden="true" />
          {todayLabel}
        </span>
        <span className="flex items-center gap-2.5 bg-sky-50 px-8 py-4 text-[15px] font-semibold text-sky-800">
          <CircleCheck className="h-[18px] w-[18px]" aria-hidden="true" />
          Con {productLabel}
        </span>
      </div>
      {rows.map((row, index) => (
        <div key={row.today} className={`grid grid-cols-1 md:grid-cols-2 ${index ? "border-t border-slate-100" : ""}`}>
          <p className="px-6 pb-2 pt-6 text-[16.5px] leading-relaxed text-slate-600 md:border-r md:border-slate-200 md:px-8 md:py-7">
            <span className="mb-1 block font-mono text-[11px] uppercase tracking-[0.1em] text-slate-600 md:hidden">Hoy</span>
            {row.today}
          </p>
          <p className="px-6 pb-6 pt-2 text-[16.5px] font-medium leading-relaxed text-slate-950 md:px-8 md:py-7">
            <span className="mb-1 block font-mono text-[11px] uppercase tracking-[0.1em] text-sky-700 md:hidden">Con {productLabel}</span>
            {row.withProduct}
          </p>
        </div>
      ))}
    </div>
  );
}

/** JSON-LD FAQPage a partir de pares pregunta/respuesta. */
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
