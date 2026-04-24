"use client";
import { useEffect, useRef } from "react";

// Gerçek müşteri yorumlarını buraya ekleyebilirsin
const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "E-ticaret Sahibi",
    company: "YılmazShop",
    text: "Geras Medya ile Meta reklam kampanyamızı başlattıktan sonra satışlarımız 3 ayda %280 arttı. Gerçekten sonuç odaklı çalışıyorlar.",
    rating: 5,
    avatar: "AY",
  },
  {
    name: "Selin Kaya",
    role: "Güzellik Salonu Sahibi",
    company: "Selin Beauty",
    text: "Google Ads kampanyamızla yeni müşteri akışı inanılmaz oldu. Artık rezervasyonlarımız aylar öncesinden doluyor. Teşekkürler!",
    rating: 5,
    avatar: "SK",
  },
  {
    name: "Murat Demir",
    role: "Restoran Sahibi",
    company: "Demir Kebap",
    text: "Sosyal medya yönetimi ve Meta reklamlarıyla müşteri kitlemizi 5 kat büyüttük. Profesyonel ve hızlı ekip.",
    rating: 5,
    avatar: "MD",
  },
];

export default function Testimonials() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 relative">
      <div
        className="orb w-96 h-96 bg-gold-500"
        style={{ top: "20%", left: "5%", opacity: 0.06 }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={(el) => (refs.current[0] = el)}
          className="section-animate text-center mb-16"
        >
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Referanslar
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Müşterilerimiz <span className="gradient-text">Konuşuyor</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Rakamlar konuşur ama müşteri deneyimi çok daha fazlasını anlatır.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => (refs.current[i + 1] = el)}
              className="section-animate gradient-border p-7 flex flex-col gap-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-gold-400 text-sm">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-red-500 flex items-center justify-center text-white text-xs font-black">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div
          ref={(el) => (refs.current[testimonials.length + 1] = el)}
          className="section-animate mt-12 grid grid-cols-3 gap-6"
        >
          {[
            { value: "50+", label: "Mutlu Müşteri" },
            { value: "4.9/5", label: "Ortalama Puan" },
            { value: "%98", label: "Memnuniyet Oranı" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
            >
              <p className="text-3xl font-black gradient-text mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
