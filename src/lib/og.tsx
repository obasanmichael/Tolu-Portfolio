import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

interface OgCardProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  chips?: readonly string[];
}

export function renderOgCard({ eyebrow, title, subtitle, chips = [] }: OgCardProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          color: "#000000",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              color: "#5c5c5c",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: -4,
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 24, fontSize: 32, lineHeight: 1.35, color: "#000000", maxWidth: 960 }}>
            {subtitle}
          </div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {chips.map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "2px solid #000000",
                color: "#000000",
                fontSize: 22,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    ogSize
  );
}
