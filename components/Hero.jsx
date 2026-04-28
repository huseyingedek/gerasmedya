"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      setTimeout(() => el.classList.add("visible"), 100);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Ambient Orbs */}
      <div className="orb w-[500px] h-[500px] bg-gold-500" style={{ top: "5%", left: "5%", opacity: 0.2 }} />
      <div className="orb w-96 h-96 bg-red-600" style={{ bottom: "15%", right: "5%", opacity: 0.18 }} />
      <div className="orb w-80 h-80 bg-gold-400" style={{ top: "45%", right: "25%", opacity: 0.1 }} />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div ref={heroRef} className="section-animate relative z-10 max-w-4xl mx-auto text-center">
        {/* Slogan */}
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/60" />
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.25em]">
            Dijital Bir Çözüm
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold-500/60" />
        </div>

        <div className="mb-8" />

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
          Dijitalde Her Şey
          <br />
          <span className="gradient-text glow-text">Geras Medya ile Başlar.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Her gün potansiyel müşterileriniz rakiplerinizin reklamını görüyor.{" "}
          <span className="text-white font-medium">
            Meta ve Google Ads&apos;de doğru stratejiyle sahneye çıkın
          </span>{" "}
          — bütçenizin her kuruşunu satışa dönüştürelim.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#iletisim" className="btn-primary px-8 py-4 rounded-xl text-white font-bold text-base">
            Ücretsiz Analiz Al →
          </a>
          <a href="#hizmetler"
            className="px-8 py-4 rounded-xl border border-white/15 text-gray-200 font-semibold text-base hover:bg-white/8 hover:border-white/25 transition-all duration-200">
            Hizmetlerimizi Gör
          </a>
        </div>

        {/* Trust Bar */}
        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:flex md:flex-wrap md:justify-center md:items-center md:gap-8 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row items-center md:gap-2 gap-1 text-center">
            <span className="text-gold-400 font-bold text-lg">50+</span>
            <span className="text-xs md:text-sm">Mutlu Müşteri</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/10" />
          <div className="flex flex-col md:flex-row items-center md:gap-2 gap-1 text-center">
            <span className="text-gold-400 font-bold text-lg">₺2M+</span>
            <span className="text-xs md:text-sm">Yönetilen Bütçe</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/10" />
          <div className="flex flex-col md:flex-row items-center md:gap-2 gap-1 text-center">
            <span className="text-gold-400 font-bold text-lg">%340</span>
            <span className="text-xs md:text-sm">Ort. ROI Artışı</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs">Keşfet</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold-500/50 to-transparent" />
      </div>
    </section>
  );
}
