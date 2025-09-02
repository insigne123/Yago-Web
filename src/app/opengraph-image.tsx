import { ImageResponse } from "next/og";
import { COMPANY } from "@/config/site";
export const runtime = "edge";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0b0b0f 0%, #0b1220 40%, #0b0b0f 100%)",
          color: "white",
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(600px 600px at 10% 20%, rgba(217,70,239,.25), transparent), radial-gradient(600px 600px at 90% 80%, rgba(6,182,212,.25), transparent)",
          }}
        />
        <div style={{ textAlign: "center", padding: 40 }}>
          <div style={{ fontSize: 72 }}>{COMPANY.name}</div>
          <div style={{ marginTop: 16, fontSize: 34, fontWeight: 500 }}>
            Automatización con IA para tu empresa
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
