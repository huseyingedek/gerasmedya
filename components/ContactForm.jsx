"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Ana sayfadaki iletişim bölümü — detaylı form /iletisim sayfasında
export default function ContactForm() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="iletisim" className="py-24 px-6 relative">
      <div className="orb w-96 h-96 bg-gold-500" style={{ top: "20%", right: "5%", opacity: 0.07 }} />

      <div className="max-w-3xl mx-auto">
        <div ref={sectionRef} className="section-animate text-center">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">İletişim</p>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Hadi <span className="gradient-text">Konuşalım</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Ücretsiz keşif görüşmesinde mevcut dijital reklam durumunuzu değerlendiriyor,
            size özel strateji önerisi sunuyoruz. 24 saat içinde dönüş garantisi.
          </p>

          {/* Action cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              { icon: "📋", title: "Formu Doldurun", desc: "Detaylı iletişim formunu doldurun, size özel teklif hazırlayalım" },
              { icon: "⚡", title: "24 Saat İçinde", desc: "Talebinizi aldıktan en geç 24 saat içinde sizi geri arıyoruz" },
              { icon: "🎯", title: "Ücretsiz Analiz", desc: "Hesap analizinizi ve strateji önerimizi tamamen ücretsiz sunuyoruz" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="btn-primary px-10 py-4 rounded-xl text-white font-bold text-base inline-block"
            >
              Ücretsiz Analiz İstiyorum →
            </Link>
            <a
              href="https://www.instagram.com/gerasmedya"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
            >
              📸 Instagram&apos;dan Yaz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
