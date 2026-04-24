"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { services } from "@/lib/services-data";

export default function Services() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = services.filter((s) => ["meta-ads", "google-ads"].includes(s.slug));
  const others = services.filter((s) => !["meta-ads", "google-ads"].includes(s.slug));

  return (
    <section id="hizmetler" className="py-24 px-6 relative">
      <div className="orb w-96 h-96 bg-orange-600" style={{ top: "30%", right: "-5%", opacity: 0.08 }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={(el) => (refs.current[0] = el)} className="section-animate text-center mb-16">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Hizmetlerimiz</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Dijital Başarınız İçin{" "}
            <span className="gradient-text">Her Şey Burada</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Meta ve Google Ads öncelikli olmak üzere, dijital varlığınızı güçlendiren eksiksiz çözümler.
          </p>
        </div>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((service, i) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              ref={(el) => (refs.current[i + 1] = el)}
              className="section-animate gradient-border p-8 group hover:scale-[1.02] transition-transform duration-300 block"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-400 text-xs font-semibold mb-2">
                    ⭐ Öne Çıkan
                  </div>
                  <h3 className="text-2xl font-black group-hover:text-gold-400 transition-colors">{service.title}</h3>
                  <p className="text-gold-400 text-sm font-medium">{service.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5 text-sm">{service.overview.slice(0, 160)}...</p>
              <span className="text-gold-400 text-sm font-semibold flex items-center gap-2">
                Detaylı İncele <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Others */}
        <div className="grid md:grid-cols-3 gap-6">
          {others.map((service, i) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              ref={(el) => (refs.current[i + 3] = el)}
              className="section-animate gradient-border p-6 group hover:scale-[1.02] transition-transform duration-300 block"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-black mb-1 group-hover:text-gold-400 transition-colors">{service.title}</h3>
              <p className="text-gold-400 text-sm font-medium mb-3">{service.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.overview.slice(0, 110)}...</p>
              <span className="text-gold-400 text-xs font-semibold flex items-center gap-1">
                Detayları Gör <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
