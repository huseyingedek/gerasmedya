"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

function useReveal() {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  let i = 0;
  const r = () => {
    const idx = i++;
    return (el) => { refs.current[idx] = el; };
  };
  return r;
}

const strategies = [
  {
    slug: "dijital-kusatma",
    badge: "Strateji #1",
    icon: "🔱",
    title: "Dijital Kuşatma Stratejisi",
    tagline: "Kendinizle Rekabet Edin",
    desc: "Müşteriniz nereye baksa sizi görsün. Instagram'da, Google'da, YouTube'da — o kadar çok yerde olun ki rakibinize gitse bile yine size dönsün.",
    highlights: ["Meta & Google Ads", "Retargeting", "Çok Kanallı Varlık"],
    status: "active",
    cta: "Stratejiyi Keşfet →",
  },
  {
    slug: null,
    badge: "Strateji #2",
    icon: "📊",
    title: "Veri Odaklı Büyüme",
    tagline: "Yakında",
    desc: "Her karar bir veriye dayansın. Reklam performansından müşteri davranışına kadar tüm süreçleri analitik düşünceyle yönetin, büyümeyi tahmin edilebilir kılın.",
    highlights: ["Analitik Raporlama", "A/B Testler", "ROAS Optimizasyonu"],
    status: "coming",
    cta: null,
  },
  {
    slug: null,
    badge: "Strateji #3",
    icon: "🌱",
    title: "Organik Otorite İnşası",
    tagline: "Yakında",
    desc: "SEO ve içerik stratejisiyle sektörünüzde otoriter bir marka olun. Reklam bütçesi olmadan da müşteri çekin — algoritmaları değil, insanları kazanın.",
    highlights: ["SEO Stratejisi", "İçerik Pazarlama", "Backlink İnşası"],
    status: "coming",
    cta: null,
  },
];

export default function StrategyHubClient() {
  const r = useReveal();

  return (
    <main className="pt-28 pb-24">

      {/* ── HERO ── */}
      <section className="relative py-20 px-6 overflow-hidden text-center">
        <div className="orb w-[500px] h-[500px] bg-gold-500" style={{ top: "-15%", left: "-10%", opacity: 0.08 }} />
        <div className="orb w-80 h-80 bg-red-600" style={{ bottom: "-10%", right: "-5%", opacity: 0.06 }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div ref={r()} className="section-animate relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold mb-8 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            Geras Medya Stratejileri
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
            Büyümenin Arkasında{" "}
            <span className="gradient-text glow-text">Doğru Strateji Vardır</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Rakiplerinizi takip etmeyi bırakın. Kendi oyununuzu kurun. Her biri farklı bir kazanma modeli olan stratejilerimizi keşfedin.
          </p>
        </div>
      </section>

      {/* ── STRATEGY CARDS ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {strategies.map((s, i) => (
            <div
              key={s.badge}
              ref={r()}
              className="section-animate"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {s.status === "active" ? (
                <Link href={`/strateji/${s.slug}`} className="block group">
                  <div className="relative rounded-2xl border border-gold-500/30 bg-white/[0.03] hover:bg-white/[0.06] hover:border-gold-500/50 transition-all duration-300 p-8 md:p-10 overflow-hidden">
                    <div className="orb w-64 h-64 bg-gold-500" style={{ top: "-20%", right: "-5%", opacity: 0.1 }} />

                    <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                      {/* Icon + badge */}
                      <div className="flex-shrink-0 flex flex-col items-center gap-3">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500/30 to-gold-600/10 border border-gold-500/40 flex items-center justify-center text-4xl">
                          {s.icon}
                        </div>
                        <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">{s.badge}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h2 className="text-2xl md:text-3xl font-black">{s.title}</h2>
                          <span className="px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
                            Aktif
                          </span>
                        </div>
                        <p className="text-gold-400 font-semibold mb-3 italic">&quot;{s.tagline}&quot;</p>
                        <p className="text-gray-400 leading-relaxed mb-5">{s.desc}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {s.highlights.map((h) => (
                            <span key={h} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                              {h}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center text-gold-400 font-bold group-hover:text-gold-300 transition-colors">
                          {s.cta}
                          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 overflow-hidden opacity-60">
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                    {/* Icon + badge */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl grayscale">
                        {s.icon}
                      </div>
                      <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{s.badge}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-500">{s.title}</h2>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs font-bold uppercase tracking-wider">
                          Yakında
                        </span>
                      </div>
                      <p className="text-gray-600 font-semibold mb-3 italic">&quot;{s.tagline}&quot;</p>
                      <p className="text-gray-600 leading-relaxed mb-5">{s.desc}</p>

                      <div className="flex flex-wrap gap-2">
                        {s.highlights.map((h) => (
                          <span key={h} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-gray-600 text-xs font-medium">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            ref={r()}
            className="section-animate rounded-2xl p-12 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,rgba(201,168,76,.15),rgba(168,137,61,.08))", border: "1px solid rgba(201,168,76,.25)" }}
          >
            <div className="orb w-72 h-72 bg-gold-500" style={{ top: "-30%", right: "-10%", opacity: 0.15 }} />
            <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
              Hangi Strateji Sizin İçin<br />
              <span className="gradient-text">En Uygun?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10 text-lg leading-relaxed">
              Ücretsiz keşif görüşmesinde sektörünüzü, hedeflerinizi ve rekabet durumunuzu birlikte analiz edip size özel bir strateji yol haritası çıkaralım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/iletisim" className="btn-primary px-10 py-4 rounded-xl text-white font-bold text-lg">
                Ücretsiz Strateji Görüşmesi →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
