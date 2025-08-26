import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { COMPANY } from '@/config/site';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tuempresa.com";

export const metadata: Metadata = {
  title: `${COMPANY.name} — Automatización de procesos con IA`,
  description: "Agentes IA, automatización de flujos y desarrollo web para optimizar procesos empresariales en LATAM.",
  openGraph: {
    title: `${COMPANY.name} — Automatización con IA`,
    description: "Diseñamos e integramos soluciones con resultados medibles.",
    type: 'website',
    locale: 'es_CL',
    url: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: COMPANY.name,
      url: siteUrl,
      email: COMPANY.email,
      sameAs: [COMPANY.whatsappLink],
      address: { "@type": "PostalAddress", addressCountry: "CL" },
      areaServed: ["CL", "LATAM"],
    }),
  }
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
