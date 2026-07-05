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
    background_color: "#070b13",
    theme_color: "#070b13",
    icons: [
      { src: "/logo-yago.png", sizes: "any", type: "image/png", purpose: "maskable" },
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
