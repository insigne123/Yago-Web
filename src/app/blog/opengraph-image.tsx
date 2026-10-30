import { brandImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Blog de YAGO: guías de automatización, IA y OCR";

export default function OG() {
  return brandImage({
    eyebrow: "Blog · Guías",
    title: "Automatización sin humo",
    subtitle: "Guías de IA, procesos y retorno real.",
  });
}
