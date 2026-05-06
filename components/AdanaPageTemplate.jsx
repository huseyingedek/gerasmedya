"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { adanaServices } from "@/lib/adana-data";

function useScrollReveal() {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return refs;
}

function FaqItem({ faq, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="section-animate visible rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="font-semibold text-base pr-4">{faq.q}</span>
        <span
          className={`text-gold-400 text-xl transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/[0.06] pt-4">
          {faq.a}
        </div>
      )}
    </div>
  );
}

function OtherAdanaServices({ currentSlug }) {
  const others = adanaServices.filter((s) => s.slug !== currentSlug).slice(0, 4);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {others.map((s) => (
        <Link
          key={s.slug}
          href={`/adana/${s.slug}`}
          className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-gold-500/30 hover:bg-white/[0.05] transition-all duration-200 group"
        >
          <div className="text-3xl mb-3">{s.icon}</div>
          <h3 className="font-bold text-sm group-hover:text-gold-400 transition-colors">{s.title}</h3>
          <p className="text-gray-500 text-xs mt-1">{s.subtitle}</p>
        </Link>
      ))}
    </div>
  );
}

export default function AdanaPageTemplate({ service }) {
  const refs = useRef([]);
  let idx = 0;
  const r = () => {
    const i = idx++;
    return (el) => { refs.current[i] = el; };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
          {/* Orbs */}
          <div className="orb w-[500px] h-[500px] bg-gold-500" style={{ top: "-5%", left: "-10%", opacity: 0.10 }} />
          <div className="orb w-80 h-80 bg-orange-600" style={{ bottom: "5%", right: "-5%", opacity: 0.08 }} />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div ref={r()} className="section-animate relative z-10 max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-gray-400 transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <Link href="/adana" className="hover:text-gray-400 transition-colors">Adana</Link>
              <span>/</span>
              <span className="text-gray-500">{service.title}</span>
            </div>

            {/* Local badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              📍 Adana · {service.subtitle}
            </div>

            <div className="text-5xl mb-5">{service.icon}</div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              {service.headline.split("\n").map((line, i) =>
                i === 1
                  ? <span key={i} className="gradient-text"><br />{line}</span>
                  : <span key={i}>{line}</span>
              )}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {service.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="btn-primary px-8 py-4 rounded-xl text-white font-bold text-base">
                Ücretsiz Adana Analizi Al →
              </Link>
              <Link
                href={`/hizmetler/${service.parentSlug}`}
                className="px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                Genel Hizmet Sayfası
              </Link>
            </div>

            {/* Result metrics row */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {service.results.map((r, i) => (
                <div
                  key={i}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 text-center"
                >
                  <p className="text-2xl font-black text-gold-400">{r.metric}</p>
                  <p className="text-xs text-gray-500 mt-1">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div ref={r()} className="section-animate gradient-border p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">📍</span>
                <h2 className="text-2xl font-black">Adana&apos;da {service.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-base mb-6">{service.intro}</p>
              <div className="border-t border-white/[0.06] pt-5 mt-2">
                <p className="text-sm text-gray-400 leading-relaxed italic">{service.competitorGap}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOCAL POINTS ── */}
        <section className="py-20 px-6 relative">
          <div className="orb w-80 h-80 bg-gold-500" style={{ top: "10%", right: "-5%", opacity: 0.07 }} />
          <div className="max-w-5xl mx-auto">
            <div ref={r()} className="section-animate text-center mb-12">
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Neden Biz</p>
              <h2 className="text-3xl md:text-4xl font-black">
                Adana&apos;ya Özel <span className="gradient-text">Avantajlarımız</span>
              </h2>
              <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
                Adana pazarını tanıyan, Adana rakiplerini izleyen, Adana müşterisini anlayan bir ajansla çalışın.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {service.localPoints.map((point, i) => (
                <div
                  key={i}
                  ref={r()}
                  className="section-animate flex gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-gold-500/20 hover:bg-white/[0.05] transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-2xl group-hover:bg-gold-500/15 transition-all duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-base mb-2 group-hover:text-gold-400 transition-colors">{point.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY ADANA — VS TABLE ── */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div ref={r()} className="section-animate">
              <h2 className="text-2xl font-black text-center mb-8">
                Adana&apos;da <span className="gradient-text">Geras Medya</span> ile Diğer Ajanslar
              </h2>
              <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
                <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06]">
                  <div className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Kriter</div>
                  <div className="px-5 py-3 text-xs font-semibold text-gold-400 uppercase tracking-wider text-center">Geras Medya</div>
                  <div className="px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-center">Diğer Ajanslar</div>
                </div>
                {[
                  ["Adana Pazar Analizi", "✅ Her projede", "❌ Genel strateji"],
                  ["Adana Rakip İzleme", "✅ Düzenli takip", "❌ Yok"],
                  ["Şeffaf Raporlama", "✅ Haftalık rapor", "❌ Aylık özet"],
                  ["Kurulum Süresi", "✅ 48 saat", "❌ 1-2 hafta"],
                  ["Yerel Hedefleme", "✅ İlçe bazlı", "❌ Şehir geneli"],
                  ["Sözleşmesiz Çalışma", "✅ Aylık", "❌ Yıllık kilitli"],
                ].map(([criterion, us, them], i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="px-5 py-4 text-sm text-gray-400">{criterion}</div>
                    <div className="px-5 py-4 text-sm text-center font-medium">{us}</div>
                    <div className="px-5 py-4 text-sm text-center text-gray-600">{them}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div
              ref={r()}
              className="section-animate rounded-2xl p-10 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg,rgba(201,168,76,.15),rgba(239,68,68,.08))",
                border: "1px solid rgba(201,168,76,.25)",
              }}
            >
              <div className="orb w-64 h-64 bg-gold-500" style={{ top: "-30%", right: "-5%", opacity: 0.18 }} />
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3 relative z-10">
                📍 Adana · Ücretsiz Analiz
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
                Adana&apos;da {service.title} için<br />
                <span className="gradient-text">Hemen Başlayalım</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
                Adana pazarına özel ücretsiz hesap analizinizi alın. Rakiplerinizin ne yaptığını, sizi nerede geçtiğini ve sizi öne geçirecek stratejiyi birlikte belirleyelim.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link
                  href="/iletisim"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-white font-bold text-base"
                >
                  Ücretsiz Adana Analizi Al →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-6 relative">
          <div className="orb w-80 h-80 bg-orange-600" style={{ bottom: "5%", left: "-5%", opacity: 0.06 }} />
          <div className="max-w-3xl mx-auto">
            <div ref={r()} className="section-animate text-center mb-12">
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">SSS · Adana</p>
              <h2 className="text-3xl md:text-4xl font-black">
                Adana&apos;da {service.title} Hakkında<br />
                <span className="gradient-text">Sık Sorulan Sorular</span>
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} delay={i * 60} />
              ))}
            </div>
          </div>
        </section>

        {/* ── OTHER ADANA SERVICES ── */}
        <section className="py-16 px-6 border-t border-white/[0.05]">
          <div className="max-w-5xl mx-auto">
            <div ref={r()} className="section-animate text-center mb-10">
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Adana Hizmetleri</p>
              <h2 className="text-2xl font-black">Adana&apos;da Diğer Hizmetlerimiz</h2>
            </div>
            <OtherAdanaServices currentSlug={service.slug} />
            <div className="text-center mt-8">
              <Link
                href="/adana"
                className="text-sm text-gold-400 hover:text-gold-300 transition-colors font-semibold"
              >
                Adana Hizmetleri Sayfasına Dön →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
