"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ContactForm() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="iletisim" className="py-16 md:py-28 px-4 md:px-6 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-gold-500" style={{ top: "10%", right: "0%", opacity: 0.08 }} />
      <div className="orb w-64 h-64 bg-red-500" style={{ bottom: "5%", left: "5%", opacity: 0.06 }} />

      <div className="max-w-4xl mx-auto">
        <div ref={sectionRef} className="section-animate">

          {/* Main card */}
          <div
            className="rounded-3xl p-8 md:p-14 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(20,20,40,0.8) 50%, rgba(201,168,76,0.07) 100%)",
              border: "1px solid rgba(201,168,76,0.28)",
            }}
          >
            <div className="orb w-72 h-72 bg-gold-500" style={{ top: "-30%", left: "50%", transform: "translateX(-50%)", opacity: 0.15 }} />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-gold-500/25 bg-gold-500/10">
                <span className="live-dot" />
                <span className="text-gold-400 text-xs font-semibold tracking-wide">Şu an müsaitiz</span>
              </div>

              <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">İletişim</p>
              <h2 className="text-4xl md:text-5xl font-black mb-5">
                Hadi{" "}
                <span className="gradient-text">Konuşalım</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
                Ücretsiz keşif görüşmesinde mevcut dijital reklam durumunuzu değerlendiriyor,
                size özel strateji önerisi sunuyoruz.{" "}
                <span className="text-white font-medium">24 saat içinde dönüş garantisi.</span>
              </p>

              {/* Action cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: "📋", title: "Formu Doldurun", desc: "Detaylı iletişim formunu doldurun, size özel teklif hazırlayalım" },
                  { icon: "⚡", title: "24 Saat İçinde", desc: "Talebinizi aldıktan en geç 24 saat içinde sizi geri arıyoruz" },
                  { icon: "🎯", title: "Ücretsiz Analiz", desc: "Hesap analizinizi ve strateji önerimizi tamamen ücretsiz sunuyoruz" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white/[0.05] border border-white/[0.1] text-center hover:bg-white/[0.08] hover:border-gold-500/20 transition-all duration-200"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold mb-1.5 text-sm text-white">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/iletisim"
                  className="btn-primary animate-pulse-gold px-10 py-4 rounded-xl text-white font-bold text-base inline-block"
                >
                  Ücretsiz Analiz İstiyorum →
                </Link>
                <a
                  href="https://www.instagram.com/gerasmedya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl border border-white/12 text-gray-300 font-semibold hover:bg-white/5 hover:border-white/22 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  📸 Instagram&apos;dan Yaz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
