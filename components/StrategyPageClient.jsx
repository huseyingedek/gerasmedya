"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

function useReveal() {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  let i = 0;
  const r = () => { const idx = i++; return (el) => { refs.current[idx] = el; }; };
  return r;
}

const channels = [
  { icon: "📱", name: "Meta Ads", desc: "Instagram & Facebook'ta hedef kitlenizin karşısına çıkın" },
  { icon: "🔍", name: "Google Ads", desc: "Ürününüzü ararken tam o anda görünsün" },
  { icon: "🎯", name: "Retargeting", desc: "Sitenizi ziyaret edip gidenleri geri getirin" },
  { icon: "▶️", name: "YouTube Ads", desc: "Video içeriklerde marka bilinirliği yaratın" },
];

const stages = [
  {
    number: "01",
    title: "Müşteri Sizi Tanımıyor",
    desc: "Instagram'da reklamınızı görüyor. İlk temas. Henüz satın almıyor — ama aklının bir köşesine yazıyor.",
    color: "from-gold-500/20 to-gold-500/5",
  },
  {
    number: "02",
    title: "Google'da Araştırıyor",
    desc: "Arama motoruna geçiyor. 'En iyi dijital reklam ajansı' yazıyor. Ve orada da sizi görüyor. 'Bu marka her yerde var' düşüncesi oluşuyor.",
    color: "from-gold-500/25 to-gold-500/8",
  },
  {
    number: "03",
    title: "Rakibinize Bakıyor",
    desc: "Bir rakibinizin sitesine giriyor. Karşılaştırıyor. Ama siz pes etmiyorsunuz — retargeting devreye giriyor, reklamınız onu takip ediyor.",
    color: "from-gold-500/30 to-gold-500/10",
  },
  {
    number: "04",
    title: "Sizi Tercih Ediyor",
    desc: "Güven oluştu. Sizi her yerde gördü, sizi tanıdık hissetti. Güvenilir bulduktan sonra karar vermek kolay — ve o karar sizin lehinize.",
    color: "from-gold-500/40 to-gold-500/15",
  },
];

export default function StrategyPageClient() {
  const r = useReveal();

  return (
    <main className="pt-28 pb-24">

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 pb-16 overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-gold-500" style={{ top: "-10%", left: "-10%", opacity: 0.1 }} />
        <div className="orb w-96 h-96 bg-red-600" style={{ bottom: "0%", right: "-5%", opacity: 0.08 }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div ref={r()} className="section-animate relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold mb-8 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            Dijital Kuşatma Stratejisi
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
            Bu Kadar Rakibin Arasında{" "}
            <span className="gradient-text glow-text">
              Kazananın Sırrı Nedir?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            Rakiplerinizi geçmeye çalışmayın.{" "}
            <span className="text-white font-bold">Kendinizle rekabet edin.</span>
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Müşteriniz nereye baksa sizi görsün. Instagram'da, Google'da, YouTube'da, her sitede. O kadar çok yerde olun ki müşteri sizi kaçırmak istese bile kaçamasın — ve rakibinize gitse bile yine size dönsün.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="btn-primary px-10 py-4 rounded-xl text-white font-bold text-lg">
              Bu Stratejiyi Uygulayalım →
            </Link>
            <a href="#nasil-calisir" className="px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 transition-all duration-200">
              Nasıl Çalışır?
            </a>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={r()} className="section-animate gradient-border p-10 md:p-14 text-center">
            <div className="text-5xl mb-6">🤯</div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Gerçeği Konuşalım
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sektörünüzdeki her rakibiniz müşteri peşinde koşuyor. Hepsi aynı kişiyi hedefliyor, hepsi aynı kanalda reklamlar veriyor. Bu kalabalıkta öne çıkmak neredeyse imkânsız hale geliyor.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Çoğu işletme tek bir kanala yükleniyor: "Sadece Instagram'da reklam verelim" ya da "Sadece Google'a para dökelim." Ama müşteri sadece tek bir kanalda yaşamıyor.
            </p>
            <p className="text-white text-xl font-bold leading-relaxed">
              Müşteri sabah Instagram'a bakıyor, öğle Google'da arıyor, akşam YouTube izliyor. Siz sadece bir yerdeyseniz, diğer zamanlarda rakibiniz önünde.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE STRATEGY ── */}
      <section className="py-20 px-6 relative">
        <div className="orb w-96 h-96 bg-gold-500" style={{ top: "10%", right: "-5%", opacity: 0.08 }} />
        <div className="max-w-5xl mx-auto">
          <div ref={r()} className="section-animate text-center mb-16">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Çözüm</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Kendinizin <span className="gradient-text">Rakibi Olun</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tek bir kanalda en iyi olmaya çalışmak yerine, müşterinizin gittiği her yerde siz de olun. Kendi reklamlarınızla kendinizle yarışın. Müşteri nereye döner dönse sizi görsün.
            </p>
          </div>

          {/* Channels grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {channels.map((ch, i) => (
              <div
                key={ch.name}
                ref={r()}
                className="section-animate p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-gold-500/30 hover:bg-white/[0.06] transition-all duration-300 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-4xl mb-3">{ch.icon}</div>
                <h3 className="font-black text-lg mb-2">{ch.name}</h3>
                <p className="text-gray-500 text-sm">{ch.desc}</p>
              </div>
            ))}
          </div>

          {/* Key insight */}
          <div ref={r()} className="section-animate rounded-2xl p-8 md:p-10 text-center" style={{ background: "linear-gradient(135deg,rgba(249,115,22,.12),rgba(239,68,68,.08))", border: "1px solid rgba(249,115,22,.25)" }}>
            <p className="text-2xl md:text-3xl font-black text-white leading-snug">
              "Müşteri rakibinize baksa bile,<br />
              <span className="gradient-text">gözünün köşesinde siz varsınız.</span><br />
              Karar anında aklına ilk siz gelirsiniz."
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="nasil-calisir" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={r()} className="section-animate text-center mb-14">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Müşteri Yolculuğu</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Müşteri Kaçamaz, <span className="gradient-text">Size Gelir</span>
            </h2>
          </div>

          <div className="space-y-5">
            {stages.map((stage, i) => (
              <div
                key={stage.number}
                ref={r()}
                className="section-animate flex gap-6 items-start group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color} border border-gold-500/30 flex items-center justify-center font-black text-gold-400 text-lg`}>
                  {stage.number}
                </div>
                <div className="flex-1 gradient-border p-6">
                  <h3 className="text-xl font-black mb-2">{stage.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ── */}
      <section className="py-20 px-6 relative">
        <div className="orb w-96 h-96 bg-red-600" style={{ bottom: "5%", left: "-5%", opacity: 0.07 }} />
        <div className="max-w-5xl mx-auto">
          <div ref={r()} className="section-animate text-center mb-14">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Psikoloji</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Neden <span className="gradient-text">İşe Yarıyor?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧠",
                title: "Tanıdıklık = Güven",
                desc: "İnsan psikolojisi tanıdığı şeye güvenir. Markanızı defalarca gören biri için siz artık 'yabancı' değilsiniz. Satın alma kararı çok daha kolay gelir.",
              },
              {
                icon: "👁️",
                title: "Görünürlük = Akılda Kalma",
                desc: "Bir marka ortalama 7 kez görülmeden satın alma kararı oluşmuyor. Tek kanalda kalan markalar bu sayıya ulaşamıyor bile.",
              },
              {
                icon: "🔄",
                title: "Retargeting = İkinci Şans",
                desc: "Sitenize girip çıkan ziyaretçinin %97'si satın almıyor. Retargeting ile bu kişileri geri çekiyor, 'ikinci şansı' değerlendiriyorsunuz.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                ref={r()}
                className="section-animate p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-gold-500/20 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-black text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELF-COMPETITION ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={r()} className="section-animate gradient-border p-10 md:p-14">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="text-7xl flex-shrink-0">🏆</div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-5">
                  Kendinizle Rekabet Etmek<br />
                  <span className="gradient-text">Ne Anlama Geliyor?</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Rakibinize bakıp "ondan daha iyi olmalıyım" diye düşünmek sizi sınırlar. Çünkü rakibinizin tavanı sizin tavanınız olur.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Ama kendinizle rekabet ettiğinizde — dünden daha iyi bir reklam, geçen aydan daha iyi bir dönüşüm oranı, önceki kampanyadan daha düşük maliyet hedeflersiniz. Tavan ortadan kalkar.
                </p>
                <p className="text-white font-bold text-lg leading-relaxed">
                  Biz de bu zihniyetle çalışıyoruz. Her ay kendi geçmiş performansımızı geçmeye çalışıyoruz. Ve müşterilerimizi de bu anlayışla büyütüyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            ref={r()}
            className="section-animate rounded-2xl p-12 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,rgba(249,115,22,.18),rgba(239,68,68,.12))", border: "1px solid rgba(249,115,22,.3)" }}
          >
            <div className="orb w-72 h-72 bg-gold-500" style={{ top: "-30%", right: "-10%", opacity: 0.2 }} />
            <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
              Bu Stratejiyi Sizin İçin<br />
              <span className="gradient-text">Uygulayalım</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10 text-lg">
              Ücretsiz keşif görüşmesinde sektörünüze özel dijital kuşatma stratejisini birlikte tasarlayalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/iletisim" className="btn-primary px-10 py-4 rounded-xl text-white font-bold text-lg">
                Ücretsiz Görüşme Ayarla →
              </Link>
              <Link href="/hizmetler/reklam-danismanligi" className="px-8 py-4 rounded-xl border border-white/20 text-gray-300 font-semibold hover:bg-white/10 transition-all duration-200">
                Danışmanlık Paketi →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
