import { ImageResponse } from "next/og";
import { getServiceBySlug, services } from "@/lib/services-data";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function OGImage({ params }) {
  const service = getServiceBySlug(params.slug);
  const title = service ? service.title : "Hizmetlerimiz";
  const subtitle = service ? service.subtitle : "Dijital Pazarlama";
  const icon = service ? service.icon : "🚀";

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
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,68,68,0.18) 0%, transparent 70%)" }} />

        {/* Logo top */}
        <div style={{ position: "absolute", top: "36px", left: "48px", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "38px", height: "38px", borderRadius: "9px", background: "linear-gradient(135deg, #f97316, #ef4444)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "900", color: "white" }}>G</div>
          <span style={{ color: "white", fontSize: "20px", fontWeight: "700" }}>geras<span style={{ color: "#f97316" }}>medya</span></span>
        </div>

        {/* Service badge */}
        <div style={{ padding: "8px 22px", borderRadius: "100px", border: "1px solid rgba(249,115,22,0.4)", background: "rgba(249,115,22,0.1)", color: "#f97316", fontSize: "16px", fontWeight: "600", marginBottom: "24px" }}>
          {subtitle}
        </div>

        {/* Icon */}
        <div style={{ fontSize: "80px", marginBottom: "20px" }}>{icon}</div>

        {/* Title */}
        <div style={{ fontSize: "72px", fontWeight: "900", color: "white", textAlign: "center", lineHeight: "1.05", letterSpacing: "-2px", maxWidth: "900px", marginBottom: "20px" }}>
          {title}{" "}
          <span style={{ background: "linear-gradient(135deg, #f97316, #ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Hizmeti
          </span>
        </div>

        {/* Description */}
        <div style={{ fontSize: "20px", color: "rgba(255,255,255,0.45)", textAlign: "center", maxWidth: "680px", lineHeight: "1.5" }}>
          Profesyonel {title} yönetimiyle işletmenizi büyütün.
        </div>

        {/* Bottom URL */}
        <div style={{ position: "absolute", bottom: "28px", color: "rgba(255,255,255,0.2)", fontSize: "16px" }}>
          gerasmedya.com/hizmetler/{params.slug}
        </div>
      </div>
    ),
    { ...size }
  );
}
