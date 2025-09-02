import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { COMPANY } from '@/config/site';
import { SEOJSONLD } from '@/components/SEOJSONLD';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SEOJSONLD />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
