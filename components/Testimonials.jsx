"use client";
import { useEffect, useRef } from "react";

const featured = {
  name: "Ahmet Yılmaz",
  role: "E-ticaret Sahibi",
  company: "YılmazShop",
  text: "Geras Medya ile çalışmaya başlamadan önce Meta reklamlarına para döküyor ama sonuç alamıyorduk. İlk 3 ayda satışlar %280 arttı — aynı bütçeyle. Sadece doğru strateji ile bu fark oluştu. Artık her ay büyüyoruz.",
  avatar: "AY",
  metric: "+280%",
  metricLabel: "3 ayda satış artışı",
  rating: 5,
};

const cards = [
  {
    name: "Selin Kaya",
    role: "Güzellik Salonu Sahibi",
    company: "Selin Beauty",
    text: "Google Ads kampanyamızla yeni müşteri akışı inanılmaz oldu. Artık rezervasyonlarımız aylar öncesinden doluyor. Teşekkürler!",
    avatar: "SK",
    metric: "4.8x ROAS",
    rating: 5,
  },
  {
    name: "Murat Demir",
    role: "Restoran Sahibi",
    company: "Demir Kebap",
    text: "Sosyal medya yönetimi ve Meta reklamlarıyla müşteri kitlemizi 5 kat büyüttük. Profesyonel ve hızlı ekip.",
    avatar: "MD",
    metric: "5x Büyüme",
    rating: 5,
  },
];

const tickerItems = [
  "📈 YılmazShop — +280% Satış",
  "💰 Selin Beauty — ROAS 4.8x",
  "🚀 Demir Kebap — 5x Büyüme",
  "🎯 50+ Mutlu Müşteri",
  "⚡ 48 Saat Kurulum",
  "✅ %98 Memnuniyet",
  "💎 ₺2M+ Yönetilen Bütçe",
  "🏆 %340 Ort. ROI Artışı",
];

export default function Testimonials() {
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
    <section className="py-16 md:py-28 px-4 md:px-6 relative overflow-hidden">
      <div className="orb w-[450px] h-[450px] bg-gold-500" style={{ top: "15%", left: "2%", opacity: 0.06 }} />
      <div className="orb w-72 h-72 bg-blue-600" style={{ bottom: "10%", right: "0%", opacity: 0.05 }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={(el) => (refs.current[0] = el)} className="section-animate text-center mb-14">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Referanslar</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Müşterilerimiz{" "}
            <span className="gradient-text">Konuşuyor</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Rakamlar konuşur — ama müşteri deneyimi çok daha fazlasını anlatır.
          </p>
        </div>

        {/* Featured testimonial — full width */}
        <div
          ref={(el) => (refs.current[1] = el)}
          className="section-animate mb-8 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(255,255,255,0.03) 60%, rgba(201,168,76,0.06) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <div className="orb w-64 h-64 bg-gold-500" style={{ top: "-20%", right: "5%", opacity: 0.12 }} />

          <div className="relative z-10 grid md:grid-cols-5 gap-8 items-center">
            {/* Quote */}
            <div className="md:col-span-4">
              <div className="text-5xl text-gold-400/30 font-black leading-none mb-3 select-none">&ldquo;</div>
              <p className="text-xl md:text-2xl font-medium text-gray-200 leading-relaxed mb-6">
                {featured.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-red-500 flex items-center justify-center text-white text-sm font-black flex-shrink-0">
                  {featured.avatar}
                </div>
                <div>
                  <p className="text-white font-bold">{featured.name}</p>
                  <p className="text-gray-500 text-sm">{featured.role} · {featured.company}</p>
                </div>
                <div className="ml-4 hidden md:flex gap-0.5">
                  {Array.from({ length: featured.rating }).map((_, j) => (
                    <span key={j} className="text-gold-400">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metric callout */}
            <div className="md:col-span-1 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              <p className="text-4xl md:text-5xl font-black gradient-text mb-1">{featured.metric}</p>
              <p className="text-gray-500 text-sm">{featured.metricLabel}</p>
            </div>
          </div>
        </div>

        {/* Two smaller cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cards.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => (refs.current[i + 2] = el)}
              className="section-animate gradient-border card-glow p-7 flex flex-col gap-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-gold-400">★</span>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-white/[0.1]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-500 to-red-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role} · {t.company}</p>
                  </div>
                </div>
                <span className="text-green-400 text-sm font-black">{t.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          ref={(el) => (refs.current[cards.length + 2] = el)}
          className="section-animate grid grid-cols-3 gap-3 md:gap-6 mb-12"
        >
          {[
            { value: "50+", label: "Mutlu Müşteri" },
            { value: "4.9/5", label: "Ortalama Puan" },
            { value: "%98", label: "Memnuniyet" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center card-glow p-4 md:p-6 rounded-2xl bg-white/[0.05] border border-white/[0.1]"
            >
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">{stat.value}</p>
              <p className="text-gray-500 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Results ticker */}
        <div
          ref={(el) => (refs.current[cards.length + 3] = el)}
          className="section-animate ticker-wrap rounded-2xl border border-white/[0.08] bg-white/[0.02] py-4"
        >
          <div className="flex animate-ticker whitespace-nowrap gap-0">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-sm text-gray-400 px-8"
              >
                {item}
                <span className="text-white/10 mx-2">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
