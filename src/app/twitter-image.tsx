import { brandImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "YAGO: automatización e inteligencia artificial para empresas en Chile";

export default function TwitterImage() {
  return brandImage({
    eyebrow: "Automatización · IA · Software",
    title: "Automatización e IA para empresas en Chile.",
    subtitle: "Integración de IA, apps a medida, agentes y OCR conectados a tus sistemas.",
  });
}
