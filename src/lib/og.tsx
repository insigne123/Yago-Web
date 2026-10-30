import { ImageResponse } from "next/og";
import { YAGO_MARK_BLADES, YAGO_MARK_STOPS } from "@/components/brand/yagoMarkGeometry";

/** Plantilla común de las imágenes para redes (Open Graph / X): isotipo, título y dominio. */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs>${YAGO_MARK_BLADES.map(
  (blade, i) =>
    `<linearGradient id="g${i}" gradientUnits="userSpaceOnUse" x1="${blade.gradient[0]}" y1="${blade.gradient[1]}" x2="${blade.gradient[2]}" y2="${blade.gradient[3]}">${YAGO_MARK_STOPS.map(
      ([offset, color]) => `<stop offset="${offset}" stop-color="${color}"/>`,
    ).join("")}</linearGradient>`,
).join("")}</defs>${YAGO_MARK_BLADES.map((blade, i) => `<path fill="url(#g${i})" d="${blade.d}"/>`).join("")}</svg>`;

const MARK_SRC = `data:image/svg+xml,${encodeURIComponent(markSvg)}`;

/** Instrument Sans (la tipografía del sitio) desde Google Fonts; si no responde, se usa la fuente por defecto. */
async function loadFont(weight: 500 | 700, text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@${weight}&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return { name: "Instrument Sans", data: await (await fetch(url)).arrayBuffer(), weight, style: "normal" as const };
  } catch {
    return null;
  }
}

type BrandImageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export async function brandImage({ eyebrow, title, subtitle }: BrandImageProps) {
  const footer = "yago.cl";
  const tagline = "Automatización e IA · Chile";
  const text = `YAGO${eyebrow}${title}${subtitle}${footer}${tagline}`;
  const fonts = (await Promise.all([loadFont(500, text), loadFont(700, text)])).filter((font) => font !== null);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: "#070b13",
          color: "#ffffff",
          fontFamily: fonts.length ? "Instrument Sans" : undefined,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -200,
            width: 760,
            height: 760,
            borderRadius: 9999,
            backgroundImage: "radial-gradient(circle, rgba(56,189,248,0.26), rgba(7,11,19,0) 68%)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={MARK_SRC} width={560} height={560} style={{ position: "absolute", right: -120, bottom: -150, opacity: 0.14 }} />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={MARK_SRC} width={60} height={60} />
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1.2 }}>YAGO</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: 5, textTransform: "uppercase", color: "#7dd3fc" }}>{eyebrow}</div>
          <div style={{ marginTop: 18, fontSize: 82, fontWeight: 700, letterSpacing: -2.8, lineHeight: 1.02 }}>{title}</div>
          <div style={{ marginTop: 24, fontSize: 34, fontWeight: 500, lineHeight: 1.3, color: "#a9b8cc" }}>{subtitle}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, fontWeight: 500, color: "#7f8ea3" }}>
          <div style={{ display: "flex" }}>{footer}</div>
          <div style={{ display: "flex" }}>{tagline}</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: fonts.length ? [...fonts] : undefined },
  );
}
