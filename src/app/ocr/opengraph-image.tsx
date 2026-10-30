import { brandImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "OCR de YAGO: digitalización y extracción de datos de documentos";

export default function OG() {
  return brandImage({
    eyebrow: "OCR · Documentos",
    title: "OCR para empresas",
    subtitle: "Documentos convertidos en datos útiles para operar.",
  });
}
