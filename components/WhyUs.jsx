"use client";
import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: "📊",
    title: "Veriye Dayalı Kararlar",
    description:
      "Her kampanya kararını data ile alıyoruz. Sezgi değil, rakamlar konuşur. Haftalık detaylı raporlarla sizi her adımdan haberdar ediyoruz.",
  },
  {
    icon: "🎯",
    title: "Sonuç Garantisi",
    description:
      "Bütçenizi harcamak için değil, sonuç üretmek için buradayız. Hedeflere ulaşamadığımızda stratejiyi revize ediyor ve bütçenizi koruyoruz.",
  },
  {
    icon: "⚡",
    title: "Hızlı Kurulum",
    description:
      "48 saat içinde kampanyanız yayında. Rakipleriniz beklerken siz büyüyün. Anlaşma sonrası hızlı aksiyon alıyoruz.",
  },
  {
    icon: "🔄",
    title: "Sürekli Optimizasyon",
    description:
      "Kampanyalar kurulup unutulmaz. Günlük takip ve haftalık optimizasyonlarla reklamlarınız her zaman en iyi performansta çalışır.",
  },
  {
    icon: "🤝",
    title: "Şeffaf İletişim",
    description:
      "Ne yapıldığını, neden yapıldığını her zaman bilirsiniz. Karanlık kutu yok. Bütçeniz nereye gidiyor, detaylıca gösteriyoruz.",
  },
  {
    icon: "🏆",
    title: "Platform Uzmanlığı",
    description:
      "Meta ve Google platformlarını derinlemesine biliyoruz. En güncel algoritma değişikliklerini takip ederek kampanyalarınızı güncelliyoruz.",
  },
];

export default function WhyUs() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="neden-biz" className="py-24 px-6 relative">
      <div
        className="orb w-96 h-96 bg-red-600"
        style={{ bottom: "10%", left: "-5%", opacity: 0.08 }}
      />

      <div className="max-w-6xl mx-auto">
        <div
          ref={(el) => (refs.current[0] = el)}
          className="section-animate text-center mb-16"
        >
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Neden Biz?
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Fark Yaratan{" "}
            <span className="gradient-text">6 Sebep</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Dijital reklamda yüzlerce ajans var. İşte bizi farklı kılan şeyler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              ref={(el) => (refs.current[i + 1] = el)}
              className="section-animate p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-gold-500/20 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          ref={(el) => (refs.current[reasons.length + 1] = el)}
          className="section-animate mt-16 rounded-2xl p-10 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(239,68,68,0.10))",
            border: "1px solid rgba(249,115,22,0.2)",
          }}
        >
          <div
            className="orb w-64 h-64 bg-gold-500"
            style={{ top: "-30%", right: "-5%", opacity: 0.15 }}
          />
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Rekabette Bir Adım Öne Geçin
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Ücretsiz reklam hesap analizi ile nerede durduğunuzu ve nasıl
            büyüyebileceğinizi görelim.
          </p>
          <a
            href="#iletisim"
            className="btn-primary inline-block px-10 py-4 rounded-xl text-white font-bold text-base"
          >
            Ücretsiz Analiz İstiyorum →
          </a>
        </div>
      </div>
    </section>
  );
}
