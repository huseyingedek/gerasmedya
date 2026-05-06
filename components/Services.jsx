"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { services } from "@/lib/services-data";

const platformMeta = {
  "meta-ads": {
    accent: "from-blue-600/20 to-indigo-600/10",
    border: "border-blue-500/25",
    tag: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    tagLabel: "En Çok Tercih Edilen",
    badge: "📘",
    resultChips: ["ROAS 4-8x", "Geniş Kitle", "Retargeting"],
  },
  "google-ads": {
    accent: "from-red-600/15 to-orange-600/10",
    border: "border-red-500/20",
    tag: "bg-red-500/15 text-red-300 border-red-500/30",
    tagLabel: "En Yüksek Intent",
    badge: "🔍",
    resultChips: ["Satın almaya hazır", "Arama odaklı", "Anlık trafik"],
  },
};

const otherAccents = [
  { glow: "hover:border-purple-500/30", tagColor: "text-purple-400" },
  { glow: "hover:border-emerald-500/30", tagColor: "text-emerald-400" },
  { glow: "hover:border-sky-500/30", tagColor: "text-sky-400" },
];

export default function Services() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = services.filter((s) => ["meta-ads", "google-ads"].includes(s.slug));
  const others = services.filter((s) => !["meta-ads", "google-ads"].includes(s.slug));

  return (
    <section id="hizmetler" className="py-16 md:py-28 px-4 md:px-6 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-orange-600" style={{ top: "20%", right: "-8%", opacity: 0.07 }} />
      <div className="orb w-64 h-64 bg-blue-600" style={{ bottom: "15%", left: "-3%", opacity: 0.06 }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={(el) => (refs.current[0] = el)} className="section-animate text-center mb-16">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Hizmetlerimiz</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Dijital Başarınız İçin{" "}
            <span className="gradient-text">Tam Donanım</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Meta ve Google Ads başta olmak üzere, işletmenizi dijitalde zirveye taşıyacak eksiksiz hizmet seti.
          </p>
        </div>

        {/* Featured 2 cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((service, i) => {
            const meta = platformMeta[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                ref={(el) => (refs.current[i + 1] = el)}
                className={`section-animate group block rounded-2xl p-8 relative overflow-hidden transition-all duration-300 bg-gradient-to-br ${meta.accent} border ${meta.border} hover:scale-[1.015] hover:shadow-2xl`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{service.icon}</div>
                      <div>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold ${meta.tag} mb-2`}>
                          {meta.badge} {meta.tagLabel}
                        </span>
                        <h3 className="text-2xl font-black group-hover:text-gold-400 transition-colors duration-200">{service.title}</h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-5 text-sm">{service.overview.slice(0, 160)}...</p>

                  {/* Result chips */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {meta.resultChips.map((chip) => (
                      <span key={chip} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-gray-300">
                        ✓ {chip}
                      </span>
                    ))}
                  </div>

                  <span className="text-gold-400 text-sm font-bold flex items-center gap-2">
                    Detaylı İncele
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Others */}
        <div className="grid md:grid-cols-3 gap-5">
          {others.map((service, i) => {
            const accent = otherAccents[i % otherAccents.length];
            return (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                ref={(el) => (refs.current[i + 3] = el)}
                className={`section-animate group block rounded-2xl p-6 bg-white/[0.04] border border-white/[0.1] transition-all duration-300 ${accent.glow} hover:bg-white/[0.07] hover:scale-[1.01] hover:shadow-xl`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl">{service.icon}</div>
                  <span className="text-[10px] text-gray-600 font-medium uppercase tracking-wider border border-white/[0.08] rounded-full px-2 py-0.5">
                    Hizmet
                  </span>
                </div>
                <h3 className={`text-lg font-black mb-1 group-hover:${accent.tagColor} transition-colors duration-200`}>
                  {service.title}
                </h3>
                <p className="text-gold-400/80 text-xs font-medium mb-3">{service.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.overview.slice(0, 110)}...</p>
                <span className="text-gold-400 text-xs font-bold flex items-center gap-1.5">
                  Detayları Gör
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div
          ref={(el) => (refs.current[others.length + 3] = el)}
          className="section-animate mt-10 text-center"
        >
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 border border-white/[0.08] rounded-full px-6 py-3 hover:border-gold-500/30"
          >
            Tüm hizmetleri gör
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
