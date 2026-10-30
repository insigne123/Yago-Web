import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { COMPANY } from "@/config/site";
import { SEOJSONLD } from "@/components/SEOJSONLD";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Plausible } from "@/components/analytics/Plausible";
import { PlausiblePageview } from "@/components/analytics/PlausiblePageview";
import { AttributionTracker } from "@/components/analytics/AttributionTracker";
import { CloudflareWebAnalytics } from "@/components/analytics/CloudflareWebAnalytics";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { PlausibleClickTracker } from "@/components/analytics/PlausibleClickTracker";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { RevealObserver } from "@/components/motion/RevealObserver";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";

// Instrument Sans para títulos y texto; Geist Mono para datos, folios y etiquetas.
const sansFont = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: `${COMPANY.name} | Automatización e integración de IA en Chile`,
  description:
    "Automatización empresarial, integración de IA, desarrollo de aplicaciones y software a medida, agentes y OCR para empresas en Chile.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Automatización e integración de IA en Chile`,
    description:
      "Integramos IA en tus procesos, desarrollamos aplicaciones a medida y convertimos documentos en datos útiles para tu empresa.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Automatización e integración de IA en Chile`,
    description:
      "Automatización, IA, aplicaciones y OCR conectados a los sistemas y procesos de tu empresa en Chile.",
    images: ["/twitter-image"],
  },
  applicationName: COMPANY.name,
  publisher: COMPANY.name,
  category: "technology",
  formatDetection: { telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  // Verificación de Google Search Console y Bing Webmaster Tools (definir en apphosting.yaml / .env).
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
  alternates: {
    types: { "text/markdown": [{ url: "/llms.txt", title: "Resumen para asistentes de IA" }] },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
    <html lang="es-CL" className={`${sansFont.variable} ${monoFont.variable} bg-background`}>
      <head>
        <GoogleAnalytics />
        <Plausible />
        <CloudflareWebAnalytics />
      </head>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Ir al contenido principal
        </a>
        <BackgroundFX />
        <div className="relative z-10">
          <SEOJSONLD />
          <PlausiblePageview />
          <PlausibleClickTracker />
          <AttributionTracker />
          <SmoothScroll />
          <RevealObserver />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
