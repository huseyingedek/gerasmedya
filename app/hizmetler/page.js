import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services-data";

export const metadata = {
  title: "Hizmetlerimiz | Meta Ads, Google Ads, SEO, Web Tasarım — Geras Medya",
  description:
    "Meta Ads, Google Ads, SEO optimizasyonu, web tasarım ve yazılım otomasyon hizmetlerimizle dijital başarınızı güvence altına alın.",
  alternates: { canonical: "https://gerasmedya.com/hizmetler" },
};

export default function HizmetlerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://gerasmedya.com" },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: "https://gerasmedya.com/hizmetler" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Hizmetlerimiz
          </p>
          <h1 className="text-4xl md:text-6xl font-black mb-5">
            Dijital Başarınız İçin{" "}
            <span className="gradient-text">Eksiksiz Çözümler</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meta ve Google Ads öncelikli, SEO, web tasarım ve yazılım hizmetleriyle
            işletmenizi büyütüyoruz. Her hizmetin detayını inceleyin, sorularınız için
            ücretsiz keşif görüşmesi ayarlayın.
          </p>
        </div>

        {/* Featured (Meta + Google) */}
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-4">⭐ Öne Çıkan Hizmetler</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {services.filter((s) => ["meta-ads", "google-ads"].includes(s.slug)).map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="gradient-border p-8 group hover:scale-[1.02] transition-transform duration-300 block"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-400 text-xs font-semibold mb-2">
                      ⭐ Öne Çıkan
                    </div>
                    <h2 className="text-2xl font-black group-hover:text-gold-400 transition-colors">{service.title}</h2>
                    <p className="text-gold-400 text-sm">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.overview.slice(0, 180)}...</p>
                <span className="text-gold-400 text-sm font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                  Detayları İncele <span>→</span>
                </span>
              </Link>
            ))}
          </div>

          {/* Others */}
          <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-4">Diğer Hizmetler</p>
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {services.filter((s) => !["meta-ads", "google-ads"].includes(s.slug)).map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="gradient-border p-6 group hover:scale-[1.02] transition-transform duration-300 block"
              >
                <span className="text-3xl mb-3 block">{service.icon}</span>
                <h2 className="text-xl font-black mb-1 group-hover:text-gold-400 transition-colors">{service.title}</h2>
                <p className="text-gold-400 text-sm mb-3">{service.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.overview.slice(0, 120)}...</p>
                <span className="text-gold-400 text-sm font-semibold flex items-center gap-2">
                  Detayları İncele <span>→</span>
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-10 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,rgba(249,115,22,.15),rgba(239,68,68,.1))", border: "1px solid rgba(249,115,22,.2)" }}
          >
            <h2 className="text-3xl font-black mb-3">Hangi Hizmetin Sizin İçin Doğru Olduğundan Emin Değil misiniz?</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Ücretsiz keşif görüşmesinde işletmenizi anlıyor, size en uygun dijital stratejiyi birlikte belirliyoruz.
            </p>
            <Link href="/iletisim" className="btn-primary inline-block px-10 py-4 rounded-xl text-white font-bold">
              Ücretsiz Keşif Görüşmesi →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
