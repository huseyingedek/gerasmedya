import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Geras Medya | Meta Ads & Google Ads Ajansı — Türkiye";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Marka renkleri
const GOLD = "#C9A84C";
const GOLD_LIGHT = "#D4B86A";
const BG = "#0f0f1a";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: `linear-gradient(135deg, ${BG} 0%, #13131f 50%, ${BG} 100%)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gold glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(201,168,76,0.22) 0%, transparent 70%)`,
          }}
        />
        {/* Subtle red glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,100,60,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Gold border top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          }}
        />

        {/* Logo / Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: `linear-gradient(135deg, ${GOLD}, #A8893D)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: "900",
              color: "#0f0f1a",
              boxShadow: `0 0 30px rgba(201,168,76,0.5)`,
            }}
          >
            G
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontSize: "26px", fontWeight: "800", letterSpacing: "-0.5px", lineHeight: 1.1 }}>
              Geras <span style={{ color: GOLD }}>Medya</span>
            </span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Dijital Bir Çözüm
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "58px",
            fontWeight: "900",
            color: "white",
            textAlign: "center",
            lineHeight: "1.1",
            letterSpacing: "-1.5px",
            maxWidth: "880px",
            marginBottom: "18px",
          }}
        >
          Reklam Bütçenizin Her{" "}
          <span style={{ color: GOLD_LIGHT }}>Kuruşu Satışa</span>{" "}
          Dönüşsün.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.45)",
            textAlign: "center",
            maxWidth: "680px",
            marginBottom: "36px",
            lineHeight: "1.5",
          }}
        >
          Meta Ads · Google Ads · SEO · Web Tasarım · 