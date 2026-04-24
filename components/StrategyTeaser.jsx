"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function StrategyTeaser() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-gold-500" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.06 }} />

      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <div
          className="rounded-3xl p-10 md:p-16 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg,rgba(249,115,22,.1) 0%,rgba(0,0,0,0) 60%,rgba(239,68,68,.08) 100%)", border: "1px solid rgba(249,115,22,.2)" }}
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <div className="w-full h-full border-2 border-gold-500 rounded-full" style={{ transform: "translate(30%,-30%)" }} />
            <div className="w-3/4 h-3/4 border border-gold-500/50 rounded-full absolute top-1/2 left-1/2" style={{ transform: "translate(-50%,-50%)" }} />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-6">
                ⚡ Strateji
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
                Rakiplerinizle Değil,{" "}
                <span className="gradient-text">Kendinizle Rekabet Edin</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Sektörünüzde o kadar güçlü bir dijital varlık oluşturun ki müşteri nereye baksa sizi görsün. Instagram&apos;da, Google&apos;da, YouTube&apos;da — her yerde. Rakibinize gitse bile size dönsün.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Bu kalabalıkta öne çıkmanın sırrı daha yüksek sesle bağırmak değil. Her yerde var olmak.
              </p>
              <Link
                href="/strateji"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold"
              >
                Stratejiyi Keşfet
                <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Right — Visual */}
            <div className="flex flex-col gap-3">
              {[
                { icon: "📱", platform: "Meta Ads", desc: "İlk temas — scroll'da durdur", step: "1" },
                { icon: "🔍", platform: "Google Ads", desc: "Araştırırken de önünde çık", step: "2" },
                { icon: "🎯", platform: "Retargeting", desc: "Kaçanı geri getir", step: "3" },
                { icon: "🏆", platform: "Müşteri Kazanıldı", desc: "Güven oluştu, tercih siz oldunuz", step: "✓" },
              ].map((item, i) => (
                <div
                  key={item.platform}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] group hover:border-gold-500/20 transition-all duration-200"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0 ${item.step === "✓" ? "bg-gold-500 text-white" : "bg-gold-500/15 text-gold-400 border border-gold-500/30"}`}>
                    {item.step}
                  </div>
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-white">{item.platform}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="ml-auto w-px h-4 bg-gold-500/30 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
