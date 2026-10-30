import { brandImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "AXIS de YAGO: consulta masiva de causas penales en PJUD";

export default function OG() {
  return brandImage({
    eyebrow: "AXIS · PJUD",
    title: "Consulta PJUD a volumen",
    subtitle: "Evidencia auditable y monitoreo diario.",
  });
}
