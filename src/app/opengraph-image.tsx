import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jules Studio — Studio Web Design & Webflow à Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1b1d22 0%, #2a2d35 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#e87b1c",
              letterSpacing: "-2px",
            }}
          >
            JULES STUDIO
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#ffffff",
              opacity: 0.9,
            }}
          >
            Studio Web Design & Webflow à Paris
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 300,
              color: "#888a86",
              marginTop: "8px",
            }}
          >
            Direction artistique · Web Design · Développement Webflow
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "16px",
            color: "#888a86",
          }}
        >
          julesstudio.fr
        </div>
      </div>
    ),
    { ...size }
  );
}
