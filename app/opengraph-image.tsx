import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LINCE — Sistemas que operan tu negocio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const lynx = await fetch(
    new URL("../public/brand/lince-negro.png", import.meta.url),
  ).then((res) => res.arrayBuffer());

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
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={lynx as unknown as string} width={48} height={64} />
          <span style={{ fontSize: 56, letterSpacing: "0.14em" }}>LINCE</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 80,
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              maxWidth: 1000,
            }}
          >
            Sistemas que operan tu negocio.
          </div>
          <div
            style={{
              fontSize: 80,
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              color: "#525252",
              fontStyle: "italic",
            }}
          >
            Construido sobre lo que ya funciona.
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
          <span>LINCE Sistemas</span>
          <span>lincesistemas.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
