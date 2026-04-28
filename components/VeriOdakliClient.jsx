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

const metrics = [
  { icon: "📊", name: "ROAS", full: "Return on Ad Spend", desc: "Harcadığınız her ₺1 karşılığında ne kadar geri kazandığınız. 4x ROAS = ₺1 harcayıp ₺4 kazanmak.", good: "İyi: 3x+", danger: "Tehlike: 1.5x altı" },
  { icon: "💰", name: "CPA", full: "Cost Per Acquisition", desc: "Bir müşteri kazanmak için ödediğiniz toplam maliyet. Ürün kâr marjınızdan düşük olması şart.", good: "İyi: Kâr marjının %40'ı", danger: "Tehlike: Marjı aştıysa" },
  { icon: "🔁", name: "CLV", full: "Customer Lifetime Value", desc: "Bir müşterinin tüm ömrü boyunca size kazandırdığı toplam gelir. CPA'dan yüksekse kârlısınız.", good: "İyi: CPA'nın 3x'i+", danger: "Tehlike: CPA'ya eşit" },
  { icon: "📉", name: "CPM", full: "Cost Per Mille", desc: "1000 kişiye reklam göstermenin maliyeti. Yüksekse hedeflemeniz çok dar ya da rekabetiniz yüksek.", good: "İyi: Sektöre göre değişir", danger: "Tehlike: Sürekli artıyorsa" },
];

const steps = [
  {
    number: "01",
    title: "Piksel Doğru Kurulur",
    desc: "Her şey doğru ölçümle başlar. Meta Pixel ve Google Tag Manager yanlış kuruluysa tüm kararlarınız çürük veri üzerine inşa edilmiş olur. Önce ölçüm, sonra reklam.",
    insight: "Türkiye'deki işletmelerin %70'i pikselini eksik kurmuş. Bu, 'kör uçmak' gibidir.",
  },
  {
    number: "02",
    title: "Kitleler Segmentlere Ayrılır",
    desc: "Soğuk kitle, ılık kitle, sıcak kitle — her biri farklı mesajı, farklı bütçeyi hak eder. Aynı reklamı herkese göstermek en pahalı hatadır.",
    insight: "Sıcak kitleye (web ziyaretçisi) gösterilen reklam, soğuk kitleye göre ortalama 5x daha ucuz dönüşüm üretir.",
  },
  {
    number: "03",
    title: "A/B Testler Sürekli Çalışır",
    desc: "Hangi başlık daha iyi? Hangi görsel daha fazla tıklatıyor? Hangi CTA daha çok dönüşüm üretiyor? Bunların cevabı hissiyatta değil, testte.",
    insight: "Sürekli test yapan hesaplar, 6 ay içinde aynı bütçeyle ortalama %60 daha fazla dönüşüm alır.",
  },
  {
    number: "04",
    title: "Bütçe Veriye Göre Dağıtılır",
    desc: "Hangi kampanya kâr üretiyor? Hangisi bütçe yakıyor? Bu soruların cevabına göre bütçe anlık olarak yeniden dağıtılır. Çalışan şeye daha fazla, çalışmayana daha az.",
    insight: "Aylık bütçe optimizasyonu yapan hesaplar, yapmayanlara kıyasla yıl sonunda ortalama %40 daha verimli çalışır.",
  },
];

export default function VeriOdakliClient() {
  const r = useReveal();

  return (
    <main className="pt-28 pb-24">

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 md:px-6 pb-16 overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-gold-500" style={{ top: "-10%", right: "-10%", opacity: 0.09 }} />
        <div className="orb w-80 h-80 bg-blue-600" style={{ bottom: "0%", left: "-5%", opacity: 0.07 }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div ref={r()} className="section-animate relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold mb-8 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            Strateji #2 — Veri Odaklı Büyüme
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
            Reklamlarınız Para mı Kazandırıyor,{" "}
            <span className="gradient-text glow-text">Yoksa Para mı Yakıyor?</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            Hissiyatla değil,{" "}
            <span className="text-white font-bold">veriyle karar verin.</span>
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Çoğu işletme reklam verip sonuçlara bakmadan devam eder. Oysa doğru metrikler okunduğunda, neyin işe yarayıp neyin bütçeyi yaktığı dakikalar içinde anlaşılır.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/uye-ol" className="btn-primary px-10 py-4 rounded-xl text-white font-bold text-lg">
              Bu Stratejiyle Büyüyelim →
            </Link>
            <a href="#nasil-calisir" className="px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 transition-all duration-200">
              Nasıl Çalışır?
            </a>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={r()} className="section-animate gradient-border p-8 md:p-14 text-center">
            <div className="text-5xl mb-6">📉</div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              "Reklam Veriyoruz Ama Sonuç Yok"
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Bu cümleyi her gün duyuyoruz. Ve her seferinde aynı soruyu soruyoruz: <span className="text-white font-semibold">"Hangi veriyle bunu söylüyorsunuz?"</span>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Çoğu zaman cevap şu oluyor: "Beğeni sayısına bakıyoruz" ya da "Tıklama aldık ama satış olmadı." Ama beğeni satış değildir. Tıklama gelir değildir.
            </p>
            <p className="text-white text-xl font-bold leading-relaxed">
              Doğru metrik okunmadan verilen her reklam kararı, gözler kapalı dart atmak gibidir. Bazen isabet eder — ama çoğunlukla bütçe boşa gider.
            </p>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="py-16 md:py-20 px-4 md:px-6 relative">
        <div className="orb w-96 h-96 bg-gold-500" style={{ top: "10%", left: "-5%", opacity: 0.07 }} />
        <div className="max-w-5xl mx-auto">
          <div ref={r()} className="section-animate text-center mb-14">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Temel Metrikler</p>
            <h2 className="text-3xl md:text-5xl font-black mb-5">
              Bilmeniz Gereken{" "}
              <span className="gradient-text">4 Sayı</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Reklam panelinde onlarca sayı vardır. Ama gerçekten önemli olan sadece bunlar. Bunları bilmeden reklam yönetmek olmaz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {metrics.map((m, i) => (
              <div
                key={m.name}
                ref={r()}
                className="section-animate card-glow rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{m.icon}</div>
                  <div>
                    <h3 className="text-xl font-black">{m.name}</h3>
                    <p className="text-gold-400 text-xs font-semibold">{m.full}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{m.desc}</p>
                <div className="flex gap-3 flex-wrap">
                  <span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">✓ {m.good}</span>
                  <span className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">⚠ {m.danger}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="nasil-calisir" className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={r()} className="section-animate text-center mb-14">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Süreç</p>
            <h2 className="text-3xl md:text-5xl font-black">
              Veri Odaklı Büyüme{" "}
              <span className="gradient-text">Nasıl Çalışır?</span>
            </h2>
          </div>

          <div className="space-y-5">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={r()}
                className="section-animate flex gap-5 md:gap-6 items-start"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-gold-500/25 to-gold-500/5 border border-gold-500/30 flex items-center justify-center font-black text-gold-400 text-lg">
                  {step.number}
                </div>
                <div className="flex-1 gradient-border p-5 md:p-7">
                  <h3 className="text-lg md:text-xl font-black mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <div className="rounded-xl bg-gold-500/8 border border-gold-500/20 px-4 py-3 flex items-start gap-2">
                    <span className="text-gold-400 text-sm flex-shrink-0">💡</span>
                    <p className="text-gold-300 text-xs font-semibold leading-relaxed">{step.insight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY INSIGHT ── */}
      <section className="py-16 md:py-20 px-4 md:px-6 relative">
        <div className="orb w-96 h-96 bg-gold-500" style={{ bottom: "5%", right: "-5%", opacity: 0.08 }} />
        <div className="max-w-5xl mx-auto">
          <div ref={r()} className="section-animate grid md:grid-cols-3 gap-5">
            {[
              { icon: "🎯", title: "Tahmin Edilebilir Büyüme", desc: "Doğru veriyle hangi bütçeyle kaç satış geleceğini önceden hesaplayabilirsiniz. 'Hadi bir deneyelim' dönemini bitirin." },
              { icon: "🔬", title: "Sürekli İyileşme", desc: "Her test bir öğrenme fırsatıdır. Kaybeden test bile sizi ileriye taşır — neyin işe yaramadığını öğrenmek de değerlidir." },
              { icon: "📅", title: "Aylık Değil, Anlık", desc: "Günlük veri takibi ile sorunları aylık raporlarda değil, ilk 48 saatte yakalayıp düzeltirsiniz. Bütçe israfı minimuma iner." },
            ].map((item, i) => (
              <div key={item.title} ref={r()} className="section-animate card-glow p-6 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.03]" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-black text-lg md:text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div ref={r()} className="section-animate rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg,rgba(201,168,76,.12),rgba(168,137,61,.06))", border: "1px solid rgba(201,168,76,.22)" }}>
            <p className="text-2xl md:text-3xl font-black text-white leading-snug mb-4">
              &quot;Veri olmadan strateji sadece bir görüştür.
              <br />
              <span className="gradient-text">Veriyle strateji bir silahtır.&quot;</span>
            </p>
            <p className="text-gray-500 text-sm">— W. Edwards Deming, istatistik ve kalite yönetimi öncüsü</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div ref={r()} className="section-animate rounded-2xl p-10 md:p-12 relative overflow-hidden" style={{ background: "linear-gradient(135deg,rgba(201,168,76,.18),rgba(168,137,61,.1))", border: "1px solid rgba(201,168,76,.3)" }}>
            <div className="orb w-72 h-72 bg-gold-500" style={{ top: "-30%", right: "-10%", opacity: 0.2 }} />
            <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
              Reklamlarınız Ne Kadar<br />
              <span className="gradient-text">Verimli Çalışıyor?</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10 text-base md:text-lg leading-relaxed">
              Ücretsiz reklam analizi görüşmesinde mevcut hesabınızdaki para kaynaklarını birlikte bulalım. Çoğu hesapta ilk ay içinde %20–40 tasarruf sağlıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/iletisim" className="btn-primary px-10 py-4 rounded-xl text-white font-bold text-lg">
                Ücretsiz Hesap Analizi →
              </Link>
              <Link href="/uye-ol" className="px-8 py-4 rounded-xl border border-white/20 text-gray-300 font-semibold hover:bg-white/10 transition-all duration-200">
                Panele Üye Ol →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
