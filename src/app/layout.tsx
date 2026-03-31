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
import { AuditWidget } from "@/components/landing/AuditWidget";

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
  title: `${COMPANY.name} — Automatización con IA`,
  description:
    "Automatizamos tu empresa con IA: agentes, flujos y datos para acelerar tu operación.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Automatización con IA`,
    description:
      "Agentes, automatización de flujos y RAG para reducir costos y tiempos.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Automatización con IA`,
    description:
      "Agentes, automatización de flujos y RAG para reducir costos y tiempos.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#070b13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <Plausible />
        <CloudflareWebAnalytics />
      </head>
      <body className={`${bodyFont.variable} ${headlineFont.variable} font-body antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Ir al contenido principal
        </a>
        <BackgroundFX />
        <div className="relative z-10">
          <SEOJSONLD />
          <PlausiblePageview />
          <AttributionTracker />
          {children}
          <AuditWidget />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
