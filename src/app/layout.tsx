import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { COMPANY } from "@/config/site";
import { SEOJSONLD } from "@/components/SEOJSONLD";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Plausible } from "@/components/analytics/Plausible";
import { PlausiblePageview } from "@/components/analytics/PlausiblePageview";
import { AttributionTracker } from "@/components/analytics/AttributionTracker";
import { CloudflareWebAnalytics } from "@/components/analytics/CloudflareWebAnalytics";
import { DeferredAuditWidget } from "@/components/landing/DeferredAuditWidget";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

const headlineFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: `${COMPANY.name} — Automatizacion operativa con IA para backoffice y finanzas`,
  description:
    "Automatizacion de procesos, OCR e integraciones para equipos de operaciones, backoffice y finanzas que quieren reducir trabajo manual, errores y tiempos de ciclo.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Automatizacion operativa con IA para backoffice y finanzas`,
    description:
      "Automatizacion de procesos, OCR e integraciones para reducir trabajo manual, errores y tiempos operativos en operaciones, backoffice y finanzas.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Automatizacion operativa con IA para backoffice y finanzas`,
    description:
      "Automatizacion de procesos, OCR e integraciones para equipos que necesitan operar mejor sin depender de tanto trabajo manual.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [{ url: "/logo-yago.png", type: "image/png" }],
    apple: [{ url: "/logo-yago.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#e8edf4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <head>
        <Plausible />
        <CloudflareWebAnalytics />
      </head>
      <body className={`${bodyFont.variable} ${headlineFont.variable} font-body antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Ir al contenido principal
        </a>
        <BackgroundFX />
        <div className="relative z-10">
          <SEOJSONLD />
          <PlausiblePageview />
          <AttributionTracker />
          {children}
          <DeferredAuditWidget />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
