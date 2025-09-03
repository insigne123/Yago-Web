import type { MetadataRoute } from "next";
import { COMPANY } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  const name = `${COMPANY.name} — Automatización con IA`;
  const short_name = COMPANY.name;
  const description =
    "Agentes, automatización de flujos y RAG para reducir costos y tiempos.";

  return {
    name,
    short_name,
    description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0ea5e9", // cyan-500
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png", purpose: "any" },
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" }
    ],
  };
}
