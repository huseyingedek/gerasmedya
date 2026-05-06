"use client";
import { useEffect, useRef, useState } from "react";
// heroRef still used below for section-animate

function useCountUp(target, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let rafId;
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return count;
}

const floatingCards = [
  {
    id: "a",
    emoji: "📈",
    label: "YılmazShop",
    metric: "+280%",
    sub: "Satış Artışı",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    metricColor: "text-green-400",
    animClass: "animate-float",
    pos: "top-[18%] right-[3%]",
  },
  {
    id: "b",
    emoji: "💰",
    label: "Selin Beauty",
    metric: "4.8x ROAS",
    sub: "Reklam Getirisi",
    color: "from-gold-500/20 to-amber-500/10",
    border: "border-gold-500/25",
    metricColor: "text-gold-400",
    animClass: "animate-float-b",
    pos: "top-[44%] right-[1%]",
  },
  {
    id: "c",
    emoji: "🚀",
    label: "Demir Kebap",
    metric: "+312%",
    sub: "Yeni Müşteri",
    color: "from-blue-500/15 to-indigo-500/10",
    border: "border-blue-500/20",
    metricColor: "text-blue-400",
    animClass: "animate-float-c",
    pos: "top-[30%] left-[1%]",
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const clientCount = useCountUp(50, 1800);
  const budgetCount = useCountUp(2, 1400);
  const roiCount = useCountUp(340, 2000);

  useEffect(() => {
    const el = heroRef.current;
    if (el) setTimeout(() => el.classList.add("visible"), 80);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated ambient orbs */}
      <div
        className="orb w-[600px] h-[600px] bg-gold-500 animate-orb-drift"
        style={{ top: "0%", left: "-5%", opacity: 0.18 }}
      />
      <div
        className="orb w-[450px] h-[450px] bg-red-600"
        style={{ bottom: "10%", right: "-2%", opacity: 0.16, animation: "orb-drift 15s ease-in-out infinite 3s" }}
      />
      <div
        className="orb w-72 h-72 bg-gold-400"
        style={{ top: "55%", right: "30%", opacity: 0.09, animation: "orb-drift 10s ease-in-out infinite 1.5s" }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating result cards — desktop only */}
      {floatingCards.map((card) => (
        <div
          key={card.id}
          className={`hidden xl:block absolute ${card.pos} ${card.animClass} z-10`}
        >
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-br ${card.color} border ${card.border} backdrop-blur-md shadow-xl w-52`}
          >
            <div className="text-2xl">{card.emoji}</div>
            <div>
              <p className="text-xs text-gray-400 leading-none mb-0.5">{card.label}</p>
              <p className={`text-base font-black ${card.metricColor} leading-tight`}>{card.metric}</p>
              <p className="text-[11px] text-gray-500">{card.sub}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Main content */}
      <div ref={heroRef} className="section-animate relative z-10 max-w-4xl mx-auto text-center">

        {/* Live badge */}
        <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full border border-green-500/25 bg-green-500/8">
          <span className="live-dot" />
          <span className="text-green-400 text-xs font-semibold tracking-wide">Aktif Kampanya Yönetimi</span>
          <span className="text-gray-600 text-xs">·</span>
          <span className="text-gray-400 text-xs">50+ müşteri</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-[70px] font-black leading-[1.05] mb-6 tracking-tight">
          Reklam Bütçenizin
          <br />
          <span className="shimmer-text">Her Kuruşu Satışa</span>
          <br />
          <span className="text-white">Dönüşsün.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Her gün potansiyel müşterileriniz rakiplerinizin reklamını görüyor.{" "}
          <span className="text-gray-200 font-medium">
            Meta ve Google Ads&apos;de kanıtlanmış stratejiyle sahneye çıkın
          </span>{" "}
          — sonuç görene kadar optimizasyon garantisi.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="/iletisim"
            className="btn-primary animate-pulse-gold px-9 py-4 rounded-xl text-white font-bold text-base"
          >
            Ücretsiz Analiz Al →
          </a>
          <a
            href="#hizmetler"
            className="px-8 py-4 rounded-xl border border-white/12 text-gray-200 font-semibold text-base hover:bg-white/6 hover:border-white/22 transition-all duration-200"
          >
            Hizmetlerimizi Gör
          </a>
        </div>

        {/* Animated stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-0 md:flex md:flex-row md:justify-center md:items-stretch">
          {[
            { value: clientCount, suffix: "+", label: "Mutlu Müşteri", separator: true },
            { value: `₺${budgetCount}M`, suffix: "+", label: "Yönetilen Bütçe", separator: true },
            { value: `%${roiCount}`, suffix: "", label: "Ort. ROI Artışı", separator: false },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="flex flex-col items-center text-center md:px-8 py-2">
                <span className="stat-number text-2xl md:text-3xl font-black text-white mb-0.5">
                  {stat.value}{stat.suffix}
                </span>
                <span className="text-xs text-gray-500">{stat.label}</span>
              </div>
              {stat.separator && (
                <div className="hidden md:block w-px h-8 bg-white/10 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Platform pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {[
            { icon: "📘", name: "Meta Ads", color: "border-blue-500/25 text-blue-300/70" },
            { icon: "🔍", name: "Google Ads", color: "border-red-500/25 text-red-300/70" },
            { icon: "▶️", name: "YouTube Ads", color: "border-red-400/25 text-red-300/60" },
            { icon: "🛒", name: "E-Ticaret", color: "border-orange-500/25 text-orange-300/70" },
            { icon: "✨", name: "SEO", color: "border-purple-500/25 text-purple-300/70" },
          ].map((p) => (
            <span
              key={p.name}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${p.color} bg-white/[0.03]`}
            >
              {p.icon} {p.name}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-600">
        <span className="text-[11px] tracking-widest uppercase">Keşfet</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold-500/50 to-transparent" />
      </div>
    </section>
  );
}
