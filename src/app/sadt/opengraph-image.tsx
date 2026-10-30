import { brandImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "SADT de YAGO: automatización del Portal Mi DT";

export default function OG() {
  return brandImage({
    eyebrow: "SADT · Portal Mi DT",
    title: "Portal DT automatizado",
    subtitle: "Contratos, desvinculaciones y certificados F30/F30-1.",
  });
}
