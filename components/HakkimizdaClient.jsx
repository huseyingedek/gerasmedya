"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const values = [
  {
    icon: "🎯",
    title: "Sonuç Odaklılık",
    desc: "Güzel raporlar değil, gerçek büyüme. Her kararımızın arkasında somut bir hedef var.",
    color: "border-gold-500/25 bg-gold-500/8",
  },
  {
    icon: "🔍",
    title: "Şeffaflık",
    desc: "Bütçeniz nereye gidiyor, her kuruşunu bilirsiniz. Karanlık kutu çalışmıyoruz.",
    color: "border-blue-500/25 bg-blue-500/8",
  },
  {
    icon: "⚡",
    title: "Hız",
    desc: "Piyasa durmuyor. 48 saat içinde kampanyanız yayında, fırsatı kaçırmadan.",
    color: "border-yellow-500/25 bg-yellow-500/8",
  },
  {
    icon: "🤝",
    title: "Ortaklık",
    desc: "Müşteri değil, iş ortağı olarak görüyoruz. Sizin başarınız bizim başarımız.",
    color: "border-emerald-500/25 bg-emerald-500/8",
  },
];

const stats = [
  { value: "50+", label: "Mutlu Müşteri" },
  { value: "₺2M+", label: "Yönetilen Reklam Bütçesi" },
  { value: "%340", label: "Ortalama ROI Artışı" },
  { value: "48s", label: "Kurulum Süresi" },
];

const platforms = [
  { icon: "📘", name: "Meta Ads", desc: "Facebook & Instagram" },
  { icon: "🔍", name: "Google Ads", desc: "Arama & Display" },
  { icon: "▶️", name: "YouTube Ads", desc: "Video Reklamları" },
  { icon: "🛒", name: "E-Ticaret", desc: "Google Shopping & Meta" },
  { icon: "✨", name: "SEO", desc: "Organik Büyüme" },
  { icon: "🎨", name: "Sosyal Medya", desc: "İçerik & Yönetim" },
];

export default function HakkimizdaClient() {
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
    <div className="max-w-5xl mx-auto">

      {/* Hero header */}
      <div
        ref={(el) => (refs.current[0] = el)}
        className="section-animate text-center mb-20 relative"
      >
        <div className="orb w-96 h-96 bg-gold-500" style={{ top: "-30%", left: "50%", transform: "translateX(-50%)", opacity: 0.1, position: "absolute", pointerEvents: "none" }} />
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Hakkımızda</p>
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Dijitalde{" "}
          <span className="gradient-text">Sonuç Üreten</span>
          <br />Bir Ekibiz.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Geras Medya olarak işletmelerin dijital reklamda bütçelerini israf etmeden,
          ölçülebilir büyüme elde etmesi için kurulduk.
        </p>
      </div>

      {/* Story */}
      <div
        ref={(el) => (refs.current[1] = el)}
        className="section-animate mb-20"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">Hikayemiz</p>
            <h2 className="text-3xl font-black mb-5 leading-tight">
              Neden <span className="gradient-text">Geras Medya?</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Pek çok işletmenin reklama para döktüğünü ama somut sonuç alamadığını gördük.
                Yanlış hedefleme, test edilmemiş kreatifler, takip edilmeyen bütçeler...
              </p>
              <p>
                Biz bunu değiştirmek için yola çıktık. <span className="text-white font-medium">Geras Medya</span>, her
                kararını veriye dayandıran, müşteriyle gerçek bir ortaklık kuran ve
                bütçenin her kuruşunu hesaplayarak harcayan bir ajans olarak kuruldu.
              </p>
              <p>
                İki farklı sektörde aktif çalışıyoruz: dijital reklam ajansı olarak işletmelerin
                büyümesini hızlandırıyor, eğitim platformumuz üzerinden de reklamcılık bilgisini
                daha geniş kitlelere ulaştırıyoruz.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.1] text-center hover:bg-white/[0.07] hover:border-gold-500/25 transition-all duration-200"
              >
                <p className="text-3xl font-black gradient-text mb-1">{s.value}</p>
                <p className="text-gray-500 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div
        ref={(el) => (refs.current[2] = el)}
        className="section-animate mb-20"
      >
        <div className="text-center mb-10">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Değerlerimiz</p>
          <h2 className="text-3xl font-black">Bizi Yönlendiren <span className="gradient-text">4 İlke</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`flex items-start gap-4 p-6 rounded-2xl border ${v.color} transition-all duration-200 hover:scale-[1.01]`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-3xl flex-shrink-0">{v.icon}</div>
              <div>
                <h3 className="font-bold text-lg mb-1.5">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform expertise */}
      <div
        ref={(el) => (refs.current[3] = el)}
        className="section-animate mb-20"
      >
        <div className="text-center mb-10">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">Uzmanlık Alanları</p>
          <h2 className="text-3xl font-black">Hangi Platformlarda <span className="gradient-text">Çalışıyoruz?</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-gold-500/20 transition-all duration-200"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-2xl">{p.icon}</span>
              <div>
                <p className="text-sm font-bold">{p.name}</p>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        ref={(el) => (refs.current[4] = el)}
        className="section-animate rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(0,0,0,0) 50%, rgba(201,168,76,0.07) 100%)",
          border: "1px solid rgba(201,168,76,0.25)",
        }}
      >
        <div className="orb w-72 h-72 bg-gold-500" style={{ top: "-40%", right: "0%", opacity: 0.15 }} />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Birlikte <span className="gradient-text">Büyüyelim</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            İşletmenizin dijital reklamdaki potansiyelini ücretsiz görüşmede birlikte keşfedelim.
          </p>
          <Link
            href="/iletisim"
            className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white font-bold text-base"
          >
            Ücretsiz Görüşme Al →
          </Link>
        </div>
      </div>

    </div>
  );
}
