"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services-data";

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

function OtherServices({ currentSlug }) {
  const others = services.filter((s) => s.slug !== currentSlug).slice(0, 4);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {others.map((s) => (
        <Link
          key={s.slug}
          href={`/hizmetler/${s.slug}`}
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

export default function ServicePageTemplate({ service }) {
  const refs = useScrollReveal();
  let idx = 0;
  const r = () => {
    const i = idx++;
    return (el) => { refs.current[i] = el; };
  };

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
          <div className="orb w-96 h-96 bg-gold-500" style={{ top: "5%", left: "5%", opacity: 0.12 }} />
          <div className="orb w-72 h-72 bg-red-600" style={{ bottom: "10%", right: "5%", opacity: 0.09 }} />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div ref={r()} className="section-animate relative z-10 max-w-4xl mx-auto text-center">
            <Link href="/hizmetler" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold-400 transition-colors mb-6">
              ← Tüm Hizmetler
            </Link>
            <div className="text-6xl mb-6">{service.icon}</div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              {service.subtitle}
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              {service.heroHeadline.split("\n").map((line, i) =>
                i === 1
                  ? <span key={i} className="gradient-text"><br />{line}</span>
                  : <span key={i}>{line}</span>
              )}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {service.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="btn-primary px-8 py-4 rounded-xl text-white font-bold text-base">
                Ücretsiz Analiz Al →
              </Link>
              <a
                href="#surec"
                className="px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                Süreci Gör
              </a>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW ── */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div ref={r()} className="section-animate gradient-border p-8 md:p-10">
              <h2 className="text-2xl font-black mb-4">{service.title} Nedir?</h2>
              <p className="text-gray-300 leading-relaxed text-base">{service.overview}</p>
            </div>
          </div>
        </section>

        {/* ── STEPS ── */}
        <section id="surec" className="py-20 px-6 relative">
          <div className="orb w-80 h-80 bg-orange-600" style={{ top: "20%", right: "-5%", opacity: 0.07 }} />
          <div className="max-w-4xl mx-auto">
            <div ref={r()} className="section-animate text-center mb-14">
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Çalışma Sürecimiz</p>
              <h2 className="text-4xl md:text-5xl font-black">
                Adım Adım <span className="gradient-text">Nasıl Çalışırız?</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-orange-500/20 to-transparent hidden md:block" />
              <div className="space-y-6">
                {service.steps.map((step, i) => (
                  <div
                    key={step.number}
                    ref={r()}
                    className="section-animate flex gap-6 group"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-red-500/20 border border-gold-500/30 flex items-center justify-center font-black text-gold-400 text-lg group-hover:from-gold-500/30 group-hover:to-red-500/30 transition-all duration-300 z-10">
                      {step.number}
                    </div>
                    <div className="flex-1 pb-6">
                      <h3 className="text-xl font-black mb-2 group-hover:text-gold-400 transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div ref={r()} className="section-animate text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black">
                Size Sağladığı <span className="gradient-text">Avantajlar</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.benefits.map((b, i) => (
                <div
                  key={b.title}
                  ref={r()}
                  className="section-animate p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-gold-500/20 hover:bg-white/[0.05] transition-all duration-300 text-center"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="font-bold mb-2">{b.title}</h3>
                  <p className="text-gray-400 text-sm">{b.desc}</p>
                </div>
              ))}
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
                background: "linear-gradient(135deg,rgba(249,115,22,.15),rgba(239,68,68,.1))",
                border: "1px solid rgba(249,115,22,.2)",
              }}
            >
              <div className="orb w-64 h-64 bg-gold-500" style={{ top: "-30%", right: "-5%", opacity: 0.15 }} />
              <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
                {service.title} Hizmetini Almaya Hazır mısınız?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
                Ücretsiz keşif görüşmesinde mevcut durumunuzu değerlendiriyor, size özel strateji önerisi sunuyoruz.
              </p>
              <Link
                href="/iletisim"
                className="btn-primary inline-block px-10 py-4 rounded-xl text-white font-bold text-base relative z-10"
              >
                Ücretsiz Görüşme Ayarla →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-6 relative">
          <div className="orb w-80 h-80 bg-red-600" style={{ bottom: "5%", left: "-5%", opacity: 0.07 }} />
          <div className="max-w-3xl mx-auto">
            <div ref={r()} className="section-animate text-center mb-12">
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">SSS</p>
              <h2 className="text-3xl md:text-4xl font-black">
                Sık Sorulan <span className="gradient-text">Sorular</span>
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} delay={i * 60} />
              ))}
            </div>
          </div>
        </section>

        {/* ── OTHER SERVICES ── */}
        <section className="py-16 px-6 border-t border-white/[0.05]">
          <div className="max-w-5xl mx-auto">
            <div ref={r()} className="section-animate text-center mb-10">
              <h2 className="text-2xl font-black">Diğer Hizmetlerimiz</h2>
            </div>
            <OtherServices currentSlug={service.slug} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
