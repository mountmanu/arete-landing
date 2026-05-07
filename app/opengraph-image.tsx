import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Areté — Sistemas que operan tu negocio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#FAFAFA",
          color: "#0A0A0A",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
            <path
              d="M8 30 L20 10 L32 30"
              stroke="#0A0A0A"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: 56, letterSpacing: "0.04em" }}>Areté</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              maxWidth: 1000,
            }}
          >
            Sistemas que operan tu negocio.
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              color: "#525252",
              fontStyle: "italic",
            }}
          >
            Listos en semanas, no en años.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#525252",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span>Areté Soluciones S.A. de C.V.</span>
          <span>arete.mx</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
