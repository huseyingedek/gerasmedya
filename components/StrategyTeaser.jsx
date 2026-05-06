"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const steps = [
  { icon: "📱", platform: "Meta Ads", desc: "İlk temas — scroll'da durdur", step: "1", color: "bg-blue-500/15 border-blue-500/30 text-blue-400" },
  { icon: "🔍", platform: "Google Ads", desc: "Araştırırken de önünde çık", step: "2", color: "bg-red-500/15 border-red-500/30 text-red-400" },
  { icon: "🎯", platform: "Retargeting", desc: "Kaçanı geri getir", step: "3", color: "bg-purple-500/15 border-purple-500/30 text-purple-400" },
  { icon: "🏆", platform: "Müşteri Kazanıldı", desc: "Güven oluştu, tercih siz oldunuz", step: "✓", color: "bg-gold-500 border-gold-500 text-white" },
];

export default function StrategyTeaser() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-28 px-4 md:px-6 relative overflow-hidden">
      <div className="orb w-[700px] h-[700px] bg-gold-500" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.05 }} />

      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <div
          className="rounded-3xl p-7 md:p-14 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(0,0,0,0) 50%, rgba(239,68,68,0.07) 100%)",
            border: "1px solid rgba(201,168,76,0.22)",
          }}
        >
          {/* Decorative rings */}
          <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.08] pointer-events-none">
            <div className="w-full h-full border-2 border-gold-500 rounded-full" style={{ transform: "translate(30%,-30%)" }} />
            <div className="w-3/4 h-3/4 border border-gold-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-6">
                ⚡ Her Yerde Ol Stratejisi
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
                Rakiplerinizle Değil,{" "}
                <span className="gradient-text">Kendinizle Rekabet Edin</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Müşteri nereye baksa sizi görsün. Instagram&apos;da, Google&apos;da, YouTube&apos;da — her yerde. Rakibinize gitse bile size dönsün.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Bu kalabalıkta öne çıkmanın sırrı daha yüksek sesle bağırmak değil. <strong className="text-gray-300">Her yerde var olmak.</strong>
              </p>
              <Link
                href="/iletisim"
                className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-bold"
              >
                Strateji Görüşmesi Al
                <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Right — funnel steps */}
            <div className="flex flex-col gap-3">
              {steps.map((item, i) => (
                <div
                  key={item.platform}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.1] group hover:border-gold-500/25 hover:bg-white/[0.07] transition-all duration-200"
                >
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center text-sm font-black flex-shrink-0 ${item.color}`}>
                    {item.step}
                  </div>
                  <span className="text-xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">{item.platform}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-4 bg-white/10 hidden md:block flex-shrink-0" />
                  )}
                </div>
              ))}

              {/* Connection lines between steps */}
              <div className="flex justify-start pl-[52px] -mt-2 mb-1 hidden md:block">
                <div className="w-px h-3 bg-gradient-to-b from-white/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
