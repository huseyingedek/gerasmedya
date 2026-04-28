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

const pillars = [
  {
    icon: "🔍",
    title: "Teknik SEO",
    desc: "Google sitenizi tarayamıyorsa hiçbir içeriğiniz sıralanamaz. Hız, mobil uyumluluk, site yapısı — bunlar temel.",
    fact: "Siteniz 3 saniyeden yavaş yükleniyorsa ziyaretçilerin %53'ü çıkıp gidiyor. Google da aynısını yapıyor.",
  },
  {
    icon: "📝",
    title: "İçerik Stratejisi",
    desc: "Rastgele blog yazıları değil, müşterinizin arama yolculuğuna göre hazırlanmış içerik haritası.",
    fact: "Müşteri bir şey satın almadan önce ortalama 12 farklı içerik tüketiyor. Siz bu 12 yerden kaç tanesinde varsınız?",
  },
  {
    icon: "🏆",
    title: "Otorite İnşası",
    desc: "Google'ın E-E-A-T modeli: Deneyim, Uzmanlık, Güvenilirlik, Güven. Bu 4 boyutta güçlü markalar en üstte.",
    fact: "İlk sayfadaki içeriklerin ortalama yaşı 3 yıl. Organik büyüme sabır ister — ama getirileri kalıcıdır.",
  },
  {
    icon: "🔗",
    title: "Backlink Kazanımı",
    desc: "Başka sitelerden gelen bağlantılar Google'a şunu söyler: 'Bu site güvenilir, insanlar referans gösteriyor.'",
    fact: "İlk sıradaki sayfalar, ikinciye kıyasla ortalama 3.8x daha fazla backlink alıyor. Kalite, kantiteden önemlidir.",
  },
];

const contentTypes = [
  { type: "Problem Çözücü İçerik", example: "'X ürünü nasıl seçilir?' — Araştırma aşamasındaki müşteriyi yakalar", icon: "🛠️" },
  { type: "Karşılaştırma İçeriği", example: "'A mı, B mi?' — Karar aşamasındaki müşteriyi yakalar", icon: "⚖️" },
  { type: "Rehber & Nasıl Yapılır", example: "'Adım adım X yapma kılavuzu' — Uzmanlık gösterir, güven inşa eder", icon: "📖" },
  { type: "Vaka Çalışması", example: "'X müşterimiz nasıl %300 büyüdü?' — Satın alma kararını tetikler", icon: "📊" },
  { type: "Sektör Haberleri", example: "Güncel bilgi paylaşımı — Alanında otorite olduğunu kanıtlar", icon: "📰" },
  { type: "Sık Sorulan Sorular", example: "FAQ içerikleri Google'ın soru kutularına girer — ücretsiz görünürlük", icon: "❓" },
];

const stages = [
  { number: "01", title: "Anahtar Kelime Araştırması", desc: "Müşterinizin Google'a ne yazdığını anlamanız gerekir. Sadece popüler kelimeleri değil, alım niyeti taşıyan uzun kuyruklu kelimeleri hedeflemek doğru stratejidir. 'Dijital ajans' yerine 'İstanbul dijital reklam ajansı fiyatları' gibi.", insight: "Uzun kuyruklu (long-tail) kelimeler, kısa kelimelere göre ortalama %36 daha yüksek dönüşüm oranı üretir." },
  { number: "02", title: "İçerik Takvimi Oluşturulur", desc: "Aylık 2 blog yazısıyla organik otorite inşa edilmez. Düzenli, tutarlı ve stratejik içerik üretimi gerekir. Her içeriğin bir hedef kitlesi, bir anahtar kelimesi ve bir dönüşüm hedefi olmalı.", insight: "Ayda 16+ içerik yayınlayan siteler, ayda 4 veya daha az yayınlayanlardan 3.5x daha fazla trafik alır." },
  { number: "03", title: "Teknik Altyapı Temizlenir", desc: "Hız optimizasyonu, mobil uyumluluk, iç bağlantı yapısı, URL düzenlemesi, canonical tag'lar — bunlar olmadan en iyi içerik bile sıralamaya giremez.", insight: "Core Web Vitals skoru yüksek siteler, Google sıralamalarında düşük skorlu sitelere göre %70 daha fazla tıklama alıyor." },
  { number: "04", title: "Otorite Biriktirilir", desc: "Zaman içinde doğru içerikler sıralamaya girer, diğer siteler sizden referans göstermeye başlar, Google sizi sektörün otoritesi olarak tanır. Bu noktadan sonra organik trafik kendi kendine büyür.", insight: "İlk 6 ay çok az görünür sonuç alınır. 12–18. ayda çarpıcı büyüme başlar. Organik SEO bir maraton, sprint değil." },
];

export default function OrganikOtoriteClient() {
  const r = useReveal();

  return (
    <main className="pt-28 pb-24">

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 md:px-6 pb-16 overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-green-600" style={{ top: "-10%", left: "-10%", opacity: 0.07 }} />
        <div className="orb w-96 h-96 bg-gold-500" style={{ bottom: "0%", right: "-5%", opacity: 0.08 }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div ref={r()} className="section-animate relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold mb-8 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            Strateji #3 — Organik Otorite
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
            Reklam Bütçeniz Bitince{" "}
            <span className="gradient-text glow-text">Müşteri de Bitiyor mu?</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            Reklam kapanınca trafik biter.{" "}
            <span className="text-white font-bold">İçerik hiç durmaz.</span>
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Organik otorite inşa etmek, dijital pazarlamanın en sabırlı ama en kalıcı yatırımıdır. Bir kez sıralamaya girdiniz mi, reklam vermeden de müşteri gelmeye devam eder.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/uye-ol" className="btn-primary px-10 py-4 rounded-xl text-white font-bold text-lg">
              Organik Büyümeye Başlayalım →
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
          <div ref={r()} className="section-animate gradient-border p-8 md:p-14">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-5xl flex-shrink-0">🚰</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-5">Reklam = Açık Musluk Stratejisi</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Reklam bütçesi açık musluğa benzer. Siz döktükçe su akar — yani müşteri gelir. Ama musluğu kapattığınız anda su kesilir. Tek bir satış gelmez.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Peki ya rakibiniz hem reklam veriyor hem de Google&apos;ın ilk sayfasında organik olarak çıkıyorsa? Siz sadece reklamla savaşırken, onlar iki cepheden geliyor.
                </p>
                <p className="text-white font-bold text-lg leading-relaxed">
                  Organik otorite ise biriktirici bir sistemdir. Attığınız her içerik, kazandığınız her backlink, üretilen her trafik — birikir. Bileşik faiz gibi çalışır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS ── */}
      <section className="py-16 md:py-20 px-4 md:px-6 relative">
        <div className="orb w-96 h-96 bg-gold-500" style={{ top: "5%", right: "-5%", opacity: 0.07 }} />
        <div className="max-w-5xl mx-auto">
          <div ref={r()} className="section-animate text-center mb-14">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Temel Yapı</p>
            <h2 className="text-3xl md:text-5xl font-black mb-5">
              Organik Otoritenin{" "}
              <span className="gradient-text">4 Ayağı</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Bu 4&apos;ü birlikte uyguladığınızda Google sizi sektörün otoritesi olarak görmeye başlar.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                ref={r()}
                className="section-animate card-glow rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-black mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="rounded-xl bg-gold-500/8 border border-gold-500/20 px-4 py-3">
                  <p className="text-gold-300 text-xs font-semibold leading-relaxed">💡 {p.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT TYPES ── */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={r()} className="section-animate text-center mb-14">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">İçerik Türleri</p>
            <h2 className="text-3xl md:text-5xl font-black mb-5">
              Her İçerik Bir{" "}
              <span className="gradient-text">Müşteri Kapısıdır</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Müşteriniz farklı aşamalarda farklı içerikler tüketir. Bu haritayı bilmek, doğru içeriği doğru zamanda üretmenizi sağlar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {contentTypes.map((ct, i) => (
              <div
                key={ct.type}
                ref={r()}
                className="section-animate rounded-xl border border-white/[0.08] bg-white/[0.03] hover:border-gold-500/25 hover:bg-white/[0.06] transition-all duration-200 p-5"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-2xl mb-3">{ct.icon}</div>
                <h3 className="font-black text-sm mb-2 text-white">{ct.type}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{ct.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="nasil-calisir" className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={r()} className="section-animate text-center mb-14">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Yol Haritası</p>
            <h2 className="text-3xl md:text-5xl font-black">
              Sıfırdan Otoriteye{" "}
              <span className="gradient-text">4 Aşama</span>
            </h2>
          </div>

          <div className="space-y-5">
            {stages.map((s, i) => (
              <div
                key={s.number}
                ref={r()}
                className="section-animate flex gap-5 md:gap-6 items-start"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-gold-500/25 to-gold-500/5 border border-gold-500/30 flex items-center justify-center font-black text-gold-400 text-lg">
                  {s.number}
                </div>
                <div className="flex-1 gradient-border p-5 md:p-7">
                  <h3 className="text-lg md:text-xl font-black mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="rounded-xl bg-gold-500/8 border border-gold-500/20 px-4 py-3 flex items-start gap-2">
                    <span className="text-gold-400 text-sm flex-shrink-0">💡</span>
                    <p className="text-gold-300 text-xs font-semibold leading-relaxed">{s.insight}</p>
                  </div>
                </div>
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
              &quot;En iyi reklam,
              <br />
              <span className="gradient-text">müşterinin arayıp bulduğu şeydir.&quot;</span>
            </p>
            <p className="text-gray-500 text-sm">Organik otorite bu soruya en kalıcı cevabı verir.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div ref={r()} className="section-animate rounded-2xl p-10 md:p-12 relative overflow-hidden" style={{ background: "linear-gradient(135deg,rgba(201,168,76,.18),rgba(168,137,61,.1))", border: "1px solid rgba(201,168,76,.3)" }}>
            <div className="orb w-72 h-72 bg-gold-500" style={{ top: "-30%", left: "-10%", opacity: 0.2 }} />
            <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
              Organik Büyümeye<br />
              <span className="gradient-text">Bugün Başlayın</span>
            </h2>
            <p className="text-gray-300 mb-2 max-w-xl mx-auto relative z-10 text-base md:text-lg leading-relaxed">
              Ne kadar geç başlarsanız, rakipleriniz o kadar ilerler. Organik otoritede her geçen ay rakibiniz lehine birikim yaşanır.
            </p>
            <p className="text-gold-400 font-semibold mb-8 relative z-10">En iyi zaman 1 yıl önceydi. İkinci en iyi zaman şimdi.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/iletisim" className="btn-primary px-10 py-4 rounded-xl text-white font-bold text-lg">
                Ücretsiz SEO Analizi →
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
