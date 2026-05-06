"use client";
import { useEffect, useRef } from "react";

const reasons = [
  {
    num: "01",
    icon: "📊",
    title: "Veriye Dayalı Kararlar",
    description:
      "Her kampanya kararını data ile alıyoruz. Sezgi değil, rakamlar konuşur. Haftalık detaylı raporlarla her adımdan haberdar olursunuz.",
    accent: "text-blue-400",
    glow: "bg-blue-500/10 border-blue-500/20",
  },
  {
    num: "02",
    icon: "🎯",
    title: "Sonuç Garantisi",
    description:
      "Bütçenizi harcamak için değil, sonuç üretmek için buradayız. Hedeflere ulaşamadığımızda stratejiyi revize ediyor, bütçenizi koruyoruz.",
    accent: "text-gold-400",
    glow: "bg-gold-500/10 border-gold-500/20",
  },
  {
    num: "03",
    icon: "⚡",
    title: "48 Saat Kurulum",
    description:
      "Anlaşma günü aksiyon başlar. 48 saat içinde kampanyanız yayında. Rakipleriniz hâlâ ajans ararken siz büyümeye başlıyorsunuz.",
    accent: "text-yellow-400",
    glow: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    num: "04",
    icon: "🔄",
    title: "Sürekli Optimizasyon",
    description:
      "Kampanyalar kurulup unutulmaz. Günlük takip, haftalık optimizasyonlarla reklamlarınız her zaman en iyi performansta çalışır.",
    accent: "text-emerald-400",
    glow: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    num: "05",
    icon: "🤝",
    title: "Şeffaf İletişim",
    description:
      "Ne yapıldığını, neden yapıldığını her zaman bilirsiniz. Karanlık kutu yok. Bütçeniz nereye gidiyor, detaylıca gösteriyoruz.",
    accent: "text-purple-400",
    glow: "bg-purple-500/10 border-purple-500/20",
  },
  {
    num: "06",
    icon: "🏆",
    title: "Platform Uzmanlığı",
    description:
      "Meta ve Google platformlarını derinlemesine biliyoruz. En güncel algoritma değişikliklerini takip ederek kampanyalarınızı sürekli güncel tutuyoruz.",
    accent: "text-red-400",
    glow: "bg-red-500/10 border-red-500/20",
  },
];

const vsRows = [
  { label: "Haftalık raporlama", us: true, them: false },
  { label: "Bütçe şeffaflığı", us: true, them: false },
  { label: "48s kurulum", us: true, them: false },
  { label: "Sonuç garantisi", us: true, them: false },
  { label: "Günlük optimizasyon", us: true, them: false },
];

export default function WhyUs() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="neden-biz" className="py-16 md:py-28 px-4 md:px-6 relative overflow-hidden">
      <div className="orb w-[450px] h-[450px] bg-red-600" style={{ bottom: "5%", left: "-8%", opacity: 0.07 }} />
      <div className="orb w-72 h-72 bg-purple-600" style={{ top: "15%", right: "-5%", opacity: 0.06 }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={(el) => (refs.current[0] = el)} className="section-animate text-center mb-16">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Neden Biz?</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ajans Seçmek{" "}
            <span className="gradient-text">Kritik Bir Karar.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Dijital reklamda yüzlerce ajans var. İşte bizi somut olarak farklı kılan 6 şey.
          </p>
        </div>

        {/* 6 reason cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              ref={(el) => (refs.current[i + 1] = el)}
              className="section-animate group relative rounded-2xl p-6 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-300 hover:scale-[1.01] overflow-hidden"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Number watermark */}
              <div className={`absolute top-3 right-4 text-6xl font-black opacity-[0.06] ${r.accent} select-none pointer-events-none`}>
                {r.num}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl border ${r.glow} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {r.icon}
                </div>

                {/* Number badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-black ${r.accent} tracking-widest`}>{r.num}</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>

                <h3 className="font-bold text-[17px] mb-2.5 text-white">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* VS comparison */}
        <div
          ref={(el) => (refs.current[reasons.length + 1] = el)}
          className="section-animate mb-16"
        >
          <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
            <div className="grid grid-cols-3 bg-white/[0.04] border-b border-white/[0.08] text-sm font-bold">
              <div className="p-4 text-gray-400">Özellik</div>
              <div className="p-4 text-center text-gold-400 border-l border-white/[0.08]">
                ✦ Geras Medya
              </div>
              <div className="p-4 text-center text-gray-500 border-l border-white/[0.08]">
                Diğer Ajanslar
              </div>
            </div>
            {vsRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 text-sm border-b border-white/[0.05] last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.015]"}`}
              >
                <div className="p-4 text-gray-400">{row.label}</div>
                <div className="p-4 text-center border-l border-white/[0.06]">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-400 font-black text-sm">✓</span>
                </div>
                <div className="p-4 text-center border-l border-white/[0.06]">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/15 text-red-400 font-black text-sm">✗</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div
          ref={(el) => (refs.current[reasons.length + 2] = el)}
          className="section-animate rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(0,0,0,0) 50%, rgba(239,68,68,0.08) 100%)",
            border: "1px solid rgba(201,168,76,0.22)",
          }}
        >
          <div className="orb w-80 h-80 bg-gold-500" style={{ top: "-40%", right: "-5%", opacity: 0.18 }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-2">
                Rekabette Bir Adım Öne Geçin
              </h3>
              <p className="text-gray-400 max-w-lg">
                Ücretsiz reklam hesap analizi ile nerede durduğunuzu ve nasıl
                büyüyebileceğinizi birlikte görelim. Yükümlülük yok.
              </p>
            </div>
            <a
              href="/iletisim"
              className="btn-primary flex-shrink-0 px-10 py-4 rounded-xl text-white font-bold text-base whitespace-nowrap"
            >
              Ücretsiz Analiz İstiyorum →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
