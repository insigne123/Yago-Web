"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { COMPANY, navLinks } from "@/config/site";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

export function Navbar() {
  const nav = useMemo(() => navLinks, []);

  const logoSrc = COMPANY.logo || "/logo-yago.png"; // fallback
  const logoAlt = `${COMPANY.name} logo`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-gradient-to-r from-fuchsia-500/5 via-cyan-400/5 to-emerald-400/5 border-b border-white/5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="#inicio" className="font-semibold tracking-tight">
          <span className="inline-flex items-center gap-2">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={28}
              height={28}
              priority
              className="rounded-md"
            />
            <span className={`text-xl ${gradientText}`}>{COMPANY.name}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {i.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400">
            <Link href="#contacto" className="text-white">
              Agendar demo
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menú">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur w-[240px]">
            <nav className="mt-8 grid gap-4">
              {nav.map((i) => (
                <SheetTrigger asChild key={i.href}>
                  <Link href={i.href} className="text-foreground/90 text-left py-1">
                    {i.name}
                  </Link>
                </SheetTrigger>
              ))}
              <Button asChild className="mt-4 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400">
                <Link href="#contacto" className="text-white">Agendar demo</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
