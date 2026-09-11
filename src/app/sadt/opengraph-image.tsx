import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#070b13",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            color: "#7dd3fc",
            fontWeight: 600,
          }}
        >
          YAGO · SADT
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          Portal DT automatizado
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 36,
            fontWeight: 500,
            color: "#cbd5e1",
          }}
        >
          Contratos, desvinculaciones y certificados F30/F30-1
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
