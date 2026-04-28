"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useReveal() {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.06 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  let i = 0;
  const r = () => {
    const idx = i++;
    return (el) => { refs.current[idx] = el; };
  };
  return r;
}

const strategies = [
  {
    slug: "dijital-kusatma",
    badge: "Strateji #1",
    icon: "🔱",
    title: "Dijital Kuşatma",
    tagline: "Her Yerde, Her Zaman",
    desc: "Müşteriniz nereye baksa sizi görsün. Rakibinize gitse bile size dönsün.",
    highlights: ["Meta & Google Ads", "Retargeting", "Çok Kanallı"],
    status: "active",
  },
  {
    slug: "veri-odakli-buyume",
    badge: "Strateji #2",
    icon: "📊",
    title: "Veri Odaklı Büyüme",
    tagline: "Sayılar Yalan Söylemez",
    desc: "Her karar bir veriye dayansın. ROAS'ı tahmin edilebilir kılın, bütçeyi boşa harcamayın.",
    highlights: ["A/B Testler", "ROAS Optimizasyonu", "Analitik"],
    status: "active",
  },
  {
    slug: "organik-otorite",
    badge: "Strateji #3",
    icon: "🌱",
    title: "Organik Otorite",
    tagline: "Reklamsız Müşteri Çek",
    desc: "SEO ve içerik ile sektörünüzde otorite olun. Algoritmaları değil insanları kazanın.",
    highlights: ["SEO Stratejisi", "İçerik Pazarlama", "Otorite İnşası"],
    status: "active",
  },
];

const premiumStrategies = [
  {
    badge: "Strateji #4",
    icon: "⚡",
    title: "Viral İçerik Motoru",
    tagline: "Organik Erişimi Patlatın",
    desc: "Sıfır reklam bütçesiyle binlerce kişiye ulaşan içerik sistemi. Algoritmanın sizi öne çıkarmasını sağlayın.",
    highlights: ["Viral Formatlar", "Hook Yazarlığı", "Platform Algoritması"],
  },
  {
    badge: "Strateji #5",
    icon: "🤝",
    title: "Müşteri Elde Tutma",
    tagline: "Kazandığınızı Kaybetmeyin",
    desc: "Yeni müşteri kazanmak, eskiyi tutmaktan 5x pahalıdır. Tekrar satışı ve sadakati sisteme bağlayın.",
    highlights: ["E-posta Otomasyonu", "Loyalty Programı", "LTV Artışı"],
  },
  {
    badge: "Strateji #6",
    icon: "🧲",
    title: "Lead Magnet Sistemi",
    tagline: "Müşteriyi Çek, Besle, Dönüştür",
    desc: "Ücretsiz değer sunarak e-posta listenizi büyütün, ardından satışa götüren otomatik bir funnel kurun.",
    highlights: ["Lead Magnet", "E-posta Funneli", "Otomasyon"],
  },
];

const secrets = [
  {
    number: "01",
    title: "Çoğu işletme bütçesinin %90'ını yanlış yere harcıyor",
    desc: "Facebook ve Google'da yeni kitleye reklam göstermek en pahalı yöntemdir. Asıl para sitenizi ziyaret edip giden kişileri geri getirmekte — retargeting. Bu kitleye gösterilen reklam, soğuk kitleye göre 3–7x daha ucuz dönüşüm sağlar. Ama çoğu işletme retargeting'e bütçesinin %10'undan azını ayırıyor.",
    highlight: "Retargeting bütçeniz toplam reklam bütçenizin en az %40'ı olmalı.",
    icon: "💸",
  },
  {
    number: "02",
    title: "Rakiplerinizin adını Google'da hedefleyebilirsiniz — ve bu tamamen yasal",
    desc: "Google Ads'de rakibinizin marka adını anahtar kelime olarak ekleyebilirsiniz. Biri rakibinizi aradığında sizin reklamınız çıkar. Bu strateji, rakibinizin müşterilerini direkt olarak size yönlendirir. Rakipleriniz muhtemelen bunu zaten yapıyor — siz yapmıyorsanız kaybediyorsunuzdur.",
    highlight: "Rakip marka kelimeleri genellikle kendi markanızdan 3x daha düşük maliyetlidir.",
    icon: "🎯",
  },
  {
    number: "03",
    title: "Video reklamlarda ilk 3 saniye her şeydir — geri kalanı para israfı",
    desc: "Meta platformlarında kullanıcıların %65'i 3 saniyeden önce geçiyor. Yani videonuzun ilk karesi hareketsiz, başlığı yok veya 'merhaba arkadaşlar' ile başlıyorsa — o reklam için ödediğiniz paranın büyük kısmı çöp. İlk karede çözüm, acı veya merak unsuru olmalı. Sonrası önemli değil.",
    highlight: "\"Neden...?\" veya \"X yapıyorsanız dikkat!\" formatı CTR'ı ortalama %180 artırır.",
    icon: "🎬",
  },
  {
    number: "04",
    title: "Audience exclusions — kimsenin bahsetmediği ROAS katlaması",
    desc: "Reklamlarınızda kimi hariç tuttuğunuz, kimi hedeflediğinizden daha önemlidir. Zaten müşteriniz olanlar, 30 günde satın alanlar ve çalışanlarınız görmemeli reklamları. Bu ayarı yapan hesaplar ortalama %35 ROAS artışı görür — çünkü bütçe gerçekten potansiyel müşterilere gider.",
    highlight: "Bu tek ayar, bütçenizi değiştirmeden satışlarınızı artırabilir.",
    icon: "🚫",
  },
];

const panelContent = [
  { icon: "📋", title: "50+ Hazır Strateji Şablonu", desc: "Sektöre özel, copy-paste hazır kampanya yapıları", locked: false },
  { icon: "🔍", title: "Canlı Reklam Analizi", desc: "Gerçek hesaplardan gerçek vaka çalışmaları", locked: false },
  { icon: "📈", title: "ROAS Hesaplama Araçları", desc: "Bütçenizi girmek yeterli, karlılığınız otomatik hesaplanır", locked: true },
  { icon: "🎓", title: "Adım Adım Eğitimler", desc: "Meta Ads, Google Ads, SEO — baştan sona pratik eğitimler", locked: true },
  { icon: "💬", title: "Uzman Soru & Cevap", desc: "Hesabınızı direkt sormak için haftalık canlı oturumlar", locked: true },
  { icon: "🗂️", title: "Reklam Metin Kütüphanesi", desc: "100+ yüksek dönüşümlü reklam metni ve başlık formülü", locked: true },
];

export default function StrategyHubClient() {
  const r = useReveal();
  const [openSecret, setOpenSecret] = useState(null);

  return (
    <main className="pt-28 pb-24">

      {/* ── HERO ── */}
      <section className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden text-center">
        <div className="orb w-[600px] h-[600px] bg-gold-500" style={{ top: "-20%", left: "-15%", opacity: 0.07 }} />
        <div className="orb w-96 h-96 bg-red-600" style={{ bottom: "-10%", right: "-5%", opacity: 0.06 }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div ref={r()} className="section-animate relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold mb-8 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            Strateji & Büyüme Merkezi
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
            Sektörünüzde Fark Yaratan{" "}
            <span className="gradient-text glow-text">Stratejiler</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Rakiplerinizi taklit etmeyi bırakın. Kendi oyununuzu kurun. Her biri farklı bir kazanma modeli olan stratejilerimizi keşfedin.
          </p>
        </div>
      </section>

      {/* ── STRATEGY CARDS — YATAY GRID ── */}
      <section className="py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={r()} className="section-animate grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {strategies.map((s, i) => (
              <div
                key={s.badge}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {s.status === "active" ? (
                  <Link href={`/strateji/${s.slug}`} className="block group h-full">
                    <div className="relative rounded-2xl border border-gold-500/35 bg-white/[0.04] hover:bg-white/[0.07] hover:border-gold-500/60 transition-all duration-300 p-6 overflow-hidden h-full flex flex-col">
                      <div className="orb w-48 h-48 bg-gold-500" style={{ top: "-20%", right: "-10%", opacity: 0.12 }} />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">{s.badge}</span>
                          <span className="px-2 py-0.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-400 text-xs font-bold">Aktif</span>
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/30 to-gold-600/10 border border-gold-500/40 flex items-center justify-center text-3xl mb-4">
                          {s.icon}
                        </div>
                        <h2 className="text-xl font-black mb-1">{s.title}</h2>
                        <p className="text-gold-400 text-xs font-semibold italic mb-3">&quot;{s.tagline}&quot;</p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {s.highlights.map((h) => (
                            <span key={h} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs">{h}</span>
                          ))}
                        </div>
                        <span className="text-gold-400 font-bold text-sm group-hover:text-gold-300 transition-colors">
                          Stratejiyi Keşfet →
                        </span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 overflow-hidden h-full flex flex-col opacity-55">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{s.badge}</span>
                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-500 text-xs font-bold">Yakında</span>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-4 grayscale">
                        {s.icon}
                      </div>
                      <h2 className="text-xl font-black text-gray-500 mb-1">{s.title}</h2>
                      <p className="text-gray-600 text-xs font-semibold italic mb-3">&quot;{s.tagline}&quot;</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {s.highlights.map((h) => (
                          <span key={h} className="px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-gray-600 text-xs">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM CARDS ── */}
      <section className="pb-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={r()} className="section-animate flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/25 bg-gold-500/8">
              <span className="text-lg">🔐</span>
              <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">Panelde Açılıyor</span>
            </div>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {premiumStrategies.map((s, i) => (
              <Link
                key={s.badge}
                href="/uye-ol"
                className="block group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] hover:border-gold-500/30 hover:bg-white/[0.05] transition-all duration-300 p-6 overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* blur overlay */}
                <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                  <span className="text-3xl mb-2">🔓</span>
                  <span className="text-white font-bold text-sm">Panele Üye Ol</span>
                  <span className="text-gold-400 text-xs mt-1">İlk Ay Ücretsiz →</span>
                </div>

                <div className="relative z-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{s.badge}</span>
                    <span className="text-lg">🔒</span>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-3xl mb-4 grayscale opacity-60">
                    {s.icon}
                  </div>
                  <h2 className="text-xl font-black text-gray-400 mb-1">{s.title}</h2>
                  <p className="text-gray-600 text-xs font-semibold italic mb-3">&quot;{s.tagline}&quot;</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.highlights.map((h) => (
                      <span key={h} className="px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-gray-600 text-xs">{h}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIDER SIRLAR ── */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={r()} className="section-animate text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-6">
              🔓 Ücretsiz İçerik
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Kimsenin Açıkça Anlatmadığı{" "}
              <span className="gradient-text">4 Reklam Gerçeği</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Bunları okuduktan sonra reklamlarınıza bakış açınız değişecek. Garantili.
            </p>
          </div>

          <div className="space-y-4">
            {secrets.map((s, i) => (
              <div
                key={s.number}
                ref={r()}
                className="section-animate"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => setOpenSecret(openSecret === i ? null : i)}
                  className="w-full text-left"
                >
                  <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openSecret === i ? "border-gold-500/40 bg-white/[0.06]" : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.15] hover:bg-white/[0.05]"}`}>
                    <div className="flex items-center gap-4 p-5 md:p-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-300 ${openSecret === i ? "bg-gold-500/20 border border-gold-500/40" : "bg-white/5 border border-white/10"}`}>
                        {s.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-gold-400 text-xs font-black uppercase tracking-widest">{s.number}</span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-white leading-snug">{s.title}</h3>
                      </div>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openSecret === i ? "border-gold-500/40 bg-gold-500/10 rotate-180" : "border-white/10 bg-white/5"}`}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {openSecret === i && (
                      <div className="px-5 md:px-6 pb-6">
                        <div className="border-t border-white/[0.06] pt-5">
                          <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">{s.desc}</p>
                          <div className="rounded-xl bg-gold-500/10 border border-gold-500/25 p-4 flex items-start gap-3">
                            <span className="text-gold-400 text-lg flex-shrink-0 mt-0.5">💡</span>
                            <p className="text-gold-300 font-semibold text-sm">{s.highlight}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PANEL TEASER ── */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={r()} className="section-animate rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(0,0,0,0) 50%, rgba(168,100,60,0.05) 100%)" }}>

            {/* Header */}
            <div className="p-8 md:p-12 border-b border-white/[0.06] text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-6">
                🔐 Geras Medya Paneli
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Bunlar Sadece{" "}
                <span className="gradient-text">Başlangıç</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                Yukarıda okduğunuz 4 içerik, paneldeki 100+ içeriğin küçük bir önizlemesi. Panelde işinizi gerçekten değiştirecek araçlar var.
              </p>
            </div>

            {/* Content grid */}
            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {panelContent.map((item, i) => (
                  <div
                    key={item.title}
                    className={`relative rounded-xl p-5 border transition-all duration-200 ${item.locked ? "border-white/[0.06] bg-white/[0.02]" : "border-gold-500/25 bg-gold-500/[0.06] hover:border-gold-500/40"}`}
                  >
                    {item.locked && (
                      <div className="absolute inset-0 rounded-xl flex items-center justify-center backdrop-blur-[1px] bg-black/20 z-10">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-2xl">🔒</span>
                          <span className="text-xs text-gray-500 font-semibold">Panelde Açılır</span>
                        </div>
                      </div>
                    )}
                    <div className={`text-2xl mb-3 ${item.locked ? "grayscale opacity-40" : ""}`}>{item.icon}</div>
                    <h3 className={`font-bold text-sm mb-1 ${item.locked ? "text-gray-600" : "text-white"}`}>{item.title}</h3>
                    <p className={`text-xs leading-relaxed ${item.locked ? "text-gray-700" : "text-gray-400"}`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 md:p-12 border-t border-white/[0.06] text-center">
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link href="/uye-ol" className="btn-primary px-10 py-4 rounded-xl text-white font-bold text-base">
                  Panele Üye Ol — İlk Ay ₺0 →
                </Link>
                <Link href="/iletisim" className="px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm hover:border-white/25 hover:bg-white/5 transition-all">
                  Önce Konuşalım
                </Link>
              </div>
              <p className="text-gray-600 text-xs mt-4">İstediğin zaman iptal edebilirsin. Taahhüt yok.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF NUMBERS ── */}
      <section ref={r()} className="section-animate py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "50+", label: "Aktif Üye", icon: "👥" },
              { value: "₺2M+", label: "Yönetilen Reklam Bütçesi", icon: "💰" },
              { value: "%340", label: "Ortalama ROI Artışı", icon: "📈" },
              { value: "100+", label: "Panel İçeriği", icon: "🎓" },
            ].map((stat) => (
              <div key={stat.label} className="card-glow rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-gold-400 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
