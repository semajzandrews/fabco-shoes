import { ImageResponse } from "next/og";

export const alt = "Fabco Shoes — Family footwear on Main St, Orange NJ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(150deg,#F4F6FA,#E4EEFB)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "#1F7AE0", color: "#fff", fontSize: 34, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>F</div>
          <div style={{ fontSize: 30, fontWeight: 800, color: "#0C1726" }}>Fabco Shoes</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 70, fontWeight: 900, color: "#0C1726", letterSpacing: "-0.03em", lineHeight: 1.02 }}>
            Every size for the whole
          </div>
          <div style={{ fontSize: 70, fontWeight: 900, color: "#1F7AE0", letterSpacing: "-0.03em", lineHeight: 1.02 }}>
            family, under one roof.
          </div>
          <div style={{ fontSize: 26, color: "#3A4860", marginTop: 14 }}>
            301 Main St · City of Orange, NJ · Family footwear since 1953
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
