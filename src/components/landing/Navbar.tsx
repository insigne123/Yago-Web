"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookA,
  ArrowRight,
  BookOpen,
  Bot,
  ChevronDown,
  FileCheck2,
  GraduationCap,
  LayoutDashboard,
  LayoutGrid,
  Menu,
  MessageCircle,
  PlugZap,
  Route,
  ScanSearch,
  ScanText,
  SearchCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { YagoLogo } from "@/components/brand/YagoLogo";
import { COMPANY, PRIMARY_CTA, navLinks, type NavIcon, type NavItem } from "@/config/site";

type SubnavLink = { name: string; href: string };

type NavbarProps = {
  /**
   * Enlaces propios de la página. Los que apuntan a anclas (#...) se muestran
   * como submenú fijo bajo el menú global (páginas de producto).
   */
  links?: { name: string; href: string }[];
  /** Nombre que encabeza el submenú (por ejemplo "SADT"). */
  subnavLabel?: string;
  ctaHref?: string;
  ctaLabel?: string;
  mobileDescription?: string;
  homeHref?: string;
};

const ICONS: Record<NavIcon, LucideIcon> = {
  audit: SearchCheck,
  sadt: FileCheck2,
  axis: ScanSearch,
  ocr: ScanText,
  flow: Workflow,
  integration: PlugZap,
  apps: LayoutDashboard,
  bot: Bot,
  cap: GraduationCap,
  book: BookOpen,
  route: Route,
  grid: LayoutGrid,
  glossary: BookA,
};

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

function SmartLink({
  href,
  className,
  children,
  ariaCurrent,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  ariaCurrent?: "page";
  ariaLabel?: string;
}) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} aria-current={ariaCurrent} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  if (isExternalHref(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer" aria-current={ariaCurrent} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} aria-current={ariaCurrent} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

function IconTile({ icon }: { icon?: NavIcon }) {
  const Icon = icon ? ICONS[icon] : ArrowRight;
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-b from-sky-300/20 to-sky-400/5 text-sky-200 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.22)]">
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden="true" />
    </span>
  );
}

function MegaPanel({ item, isCurrent }: { item: NavItem; isCurrent: (href: string) => boolean }) {
  const children = item.children ?? [];
  const wide = children.length > 3;

  return (
    <div className="pointer-events-none absolute left-1/2 top-full z-[60] pt-3 opacity-0 transition-[opacity,transform] duration-200 ease-out [transform:translate(-50%,6px)] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:[transform:translate(-50%,0)] group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:[transform:translate(-50%,0)]">
      <div
        className={`overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0b1220]/95 p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75)] backdrop-blur-xl ${wide ? "w-[40rem]" : "w-[26rem]"}`}
      >
        {item.eyebrow ? (
          <div className="flex items-center justify-between px-3 pb-2 pt-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky-300">{item.eyebrow}</span>
            {item.description ? <span className="text-xs text-slate-400">{item.description}</span> : null}
          </div>
        ) : null}
        <div className={`grid gap-1 ${wide ? "grid-cols-2" : ""}`}>
          {children.map((child) => (
            <SmartLink
              key={child.href + child.name}
              href={child.href}
              ariaCurrent={isCurrent(child.href) ? "page" : undefined}
              className="group/item flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06]"
            >
              <IconTile icon={child.icon} />
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline gap-2">
                  <span className="text-[15px] font-semibold text-white">{child.name}</span>
                  {child.eyebrow ? <span className="truncate text-xs text-slate-400">{child.eyebrow}</span> : null}
                </span>
                {child.description ? (
                  <span className="mt-0.5 block text-[13px] leading-snug text-slate-300">{child.description}</span>
                ) : null}
                {child.meta ? (
                  <span className="mt-2 inline-flex rounded-full bg-white/[0.06] px-2 py-0.5 font-mono text-[11px] text-sky-200">
                    {child.meta}
                  </span>
                ) : null}
              </span>
            </SmartLink>
          ))}
        </div>
        <SmartLink
          href={item.href}
          className="mt-1 flex items-center justify-between rounded-2xl bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <span>Ver todo en {item.name}</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </SmartLink>
      </div>
    </div>
  );
}

export function Navbar({
  links,
  subnavLabel,
  ctaHref = PRIMARY_CTA.href,
  ctaLabel = PRIMARY_CTA.label,
  mobileDescription = "Productos, servicios a medida, casos, precios y recursos de YAGO.",
  homeHref = "/",
}: NavbarProps = {}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const subnav: SubnavLink[] = (links ?? []).filter((link) => link.href.startsWith("#"));

  const matches = (href: string) =>
    href.startsWith("/") && !href.startsWith("/#") && (pathname === href || pathname.startsWith(`${href}/`));
  const isCurrent = (href: string) => href.startsWith("/") && !href.startsWith("/#") && pathname === href;
  const isActive = (item: NavItem) => matches(item.href) || Boolean(item.children?.some((child) => matches(child.href)));

  const ctaIsPrimary = ctaHref === PRIMARY_CTA.href;

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-white/[0.08] bg-[#070b13]/[0.93] shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-[#070b13]/55 backdrop-blur-md"
        }`}
      >
        <div className="y-container flex h-[4.5rem] items-center justify-between gap-6">
          <SmartLink
            href={homeHref}
            ariaLabel={`${COMPANY.name}, ir al inicio`}
            className="shrink-0 rounded-full text-white"
          >
            <YagoLogo />
          </SmartLink>

          <nav aria-label="Navegación principal" className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((item) => {
              const active = isActive(item);
              const section = item.href.replace(/^\/?#?/, "") || "inicio";
              return (
                <div key={item.name} className="group relative">
                  <SmartLink
                    href={item.href}
                    ariaCurrent={isCurrent(item.href) ? "page" : undefined}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors hover:bg-white/[0.06] hover:text-white xl:px-4 ${
                      active ? "text-white" : "text-slate-300"
                    } plausible-event-name=Nav+Click plausible-event-location=navbar plausible-event-section=${section}`}
                  >
                    {item.name}
                    {item.children?.length ? (
                      <ChevronDown
                        className="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-sky-300"
                        aria-hidden="true"
                      />
                    ) : null}
                    {active ? <span className="sr-only">(sección actual)</span> : null}
                  </SmartLink>
                  {item.children?.length ? <MegaPanel item={item} isCurrent={isCurrent} /> : null}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-[15px] font-medium text-slate-300 transition-colors hover:text-white xl:inline-flex plausible-event-name=CTA+WhatsApp plausible-event-location=navbar"
            >
              <MessageCircle className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden="true" />
              WhatsApp
            </a>
            <SmartLink
              href={ctaHref}
              className={`y-btn y-btn-primary y-btn-sm hidden sm:inline-flex plausible-event-name=${ctaIsPrimary ? "CTA+Agendar+Sesion" : "CTA+Solicitar+Demo"} plausible-event-location=navbar`}
            >
              {ctaLabel}
            </SmartLink>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Abrir menú"
                  className="grid h-11 w-11 place-items-center rounded-full text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)] transition-colors hover:bg-white/10 lg:hidden"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                data-lenis-prevent=""
                className="w-[min(24rem,calc(100vw-1rem))] overflow-y-auto border-white/10 bg-[#0b1220] p-0 text-white"
              >
                <SheetHeader className="border-b border-white/10 px-6 py-5 text-left">
                  <SheetTitle className="text-white">Navegación</SheetTitle>
                  <SheetDescription className="text-slate-400">{mobileDescription}</SheetDescription>
                </SheetHeader>

                <nav aria-label="Navegación principal móvil" className="flex flex-col gap-1 px-3 py-4">
                  {navLinks.map((item) => (
                    <div key={item.name} className="rounded-2xl">
                      <SheetClose asChild>
                        <SmartLink
                          href={item.href}
                          ariaCurrent={isCurrent(item.href) ? "page" : undefined}
                          className="flex items-center justify-between rounded-2xl px-4 py-3 text-[17px] font-semibold text-white transition-colors hover:bg-white/[0.06]"
                        >
                          {item.name}
                          <ArrowRight className="h-4 w-4 text-slate-500" aria-hidden="true" />
                        </SmartLink>
                      </SheetClose>
                      {item.children?.length ? (
                        <div className="mb-2 grid gap-1 pl-2">
                          {item.children.map((child) => (
                            <SheetClose asChild key={child.href + child.name}>
                              <SmartLink
                                href={child.href}
                                ariaCurrent={isCurrent(child.href) ? "page" : undefined}
                                className="flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
                              >
                                <IconTile icon={child.icon} />
                                <span className="min-w-0">
                                  <span className="block text-[15px] font-medium text-white">{child.name}</span>
                                  {child.eyebrow ? <span className="block text-xs text-slate-400">{child.eyebrow}</span> : null}
                                </span>
                              </SmartLink>
                            </SheetClose>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </nav>

                <div className="grid gap-2 border-t border-white/10 px-6 py-5">
                  <SheetClose asChild>
                    <SmartLink href={ctaHref} className="y-btn y-btn-primary w-full plausible-event-name=CTA+Agendar+Sesion plausible-event-location=navbar_mobile">
                      {ctaLabel}
                    </SmartLink>
                  </SheetClose>
                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="y-btn y-btn-glass w-full plausible-event-name=CTA+WhatsApp plausible-event-location=navbar_mobile"
                  >
                    <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                    WhatsApp {COMPANY.whatsapp}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {subnav.length ? (
        <nav aria-label={`Secciones de ${subnavLabel ?? "la página"}`} className="border-b border-slate-200 bg-white/90 backdrop-blur-xl">
          <div className="y-container flex h-12 items-center gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {subnavLabel ? (
              <span className="flex shrink-0 items-center gap-2 border-r border-slate-200 pr-5 font-mono text-[13px] font-medium text-slate-900">
                <span className="h-1.5 w-1.5 rounded-[2px] bg-sky-400" aria-hidden="true" />
                {subnavLabel}
              </span>
            ) : null}
            {subnav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 whitespace-nowrap text-[14.5px] font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
