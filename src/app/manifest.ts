import type { MetadataRoute } from "next";
import { COMPANY } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  const name = `${COMPANY.name} — Automatización con IA`;
  const short_name = COMPANY.name;
  const description =
    "Automatización de procesos, OCR e integraciones para operaciones, backoffice y finanzas.";

  return {
    name,
    short_name,
    description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#070b13",
    theme_color: "#070b13",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
