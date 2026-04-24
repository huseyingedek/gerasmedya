import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Geras Medya | Meta Ads & Google Ads Uzmanı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow orb left */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)",
          }}
        />
        {/* Glow orb right */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(239,68,68,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #f97316, #ef4444)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "900",
              color: "white",
            }}
          >
            G
          </div>
          <span style={{ color: "white", fontSize: "28px", fontWeight: "700", letterSpacing: "-0.5px" }}>
            geras<span style={{ color: "#f97316" }}>medya</span>
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "62px",
            fontWeight: "900",
            color: "white",
            textAlign: "center",
            lineHeight: "1.1",
            letterSpacing: "-1.5px",
            maxWidth: "900px",
            marginBottom: "20px",
          }}
        >
          Meta Ads & Google Ads{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #f97316, #ef4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Uzmanı
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            maxWidth: "700px",
            marginBottom: "40px",
            lineHeight: "1.5",
          }}
        >
          Dijital reklamlarınızı veriye dayalı yönetiyor, her bütçeyi maksimum satışa dönüştürüyoruz.
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Meta Ads", "Google Ads", "SEO", "Web Tasarım"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: "100px",
                border: "1px solid rgba(249,115,22,0.4)",
                background: "rgba(249,115,22,0.1)",
                color: "#f97316",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            color: "rgba(255,255,255,0.25)",
            fontSize: "16px",
          }}
        >
          gerasmedya.com
        </div>
      </div>
    ),
    { ...size }
  );
}
