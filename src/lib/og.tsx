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
          background:
            "radial-gradient(circle at 15% 0%, rgba(155,239,143,0.16), transparent 55%), #070907",
          color: "#f4f7f2",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#9bef8f",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 24, fontSize: 32, lineHeight: 1.35, color: "#a5ada2", maxWidth: 960 }}>
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
                border: "1px solid rgba(155,239,143,0.32)",
                background: "rgba(155,239,143,0.12)",
                color: "#9bef8f",
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
