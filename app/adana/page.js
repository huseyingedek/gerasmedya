import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { adanaServices } from "@/lib/adana-data";

export const metadata = {
  title: "Adana Dijital Reklam Ajansı | Meta Ads, Google Ads, SEO — Geras Medya",
  description:
    "Adana'nın sonuç odaklı dijital reklam ajansı. Meta Ads, Google Ads, SEO, web tasarım ve sosyal medya yönetimi ile Adana işletmelerini büyütüyoruz. Ücretsiz analiz.",
  alternates: { canonical: "https://gerasmedya.com/adana" },
  openGraph: {
    title: "Adana Dijital Reklam Ajansı | Geras Medya",
    description: "Adana'nın sonuç odaklı dijital reklam ajansı. Meta Ads, Google Ads, SEO hizmetleri.",
    url: "https://gerasmedya.com/adana",
    siteName: "Geras Medya",
    locale: "tr_TR",
    type: "website",
  },
};

export default function AdanaPage() {
  const baseUrl = "https://gerasmedya.com";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/adana`,
    name: "Geras Medya — Adana Dijital Reklam Ajansı",
    description:
      "Adana'nın sonuç odaklı dijital reklam ajansı. Meta Ads, Google Ads, SEO, web tasarım ve sosyal medya yönetimi.",
    url: `${baseUrl}/adana`,
    telephone: "+90-322-000-0000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Adana",
      addressRegion: "Adana",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.0,
      longitude: 35.3213,
    },
    areaServed: { "@type": "City", name: "Adana" },
    priceRange: "₺₺",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
    },
    sameAs: ["https://www.instagram.com/gerasmedya"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Adana Dijital Reklam Hizmetleri",
      itemListElement: adanaServices.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${baseUrl}/adana/${s.slug}`,
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Adana", item: `${baseUrl}/adana` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* ── HERO ── */}
          <div className="text-center mb-16 relative">
            <div
              className="absolute inset-0 -z-10 opacity-[0.08]"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 50% 0%, #C9A84C, transparent)",
              }}
            />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              📍 Adana Yerel SEO & Dijital Reklam
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              Adana&apos;nın{" "}
              <span className="gradient-text">Dijital Reklam</span>
              <br />Ajansı
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Meta Ads, Google Ads, SEO ve web tasarım ile Adana&apos;daki işletmenizi dijitalde
              rakiplerinizin önüne geçiriyoruz. Adana pazarını tanıyoruz — lokal analiz, lokal strateji.
            </p>
            <Link
              href="/iletisim"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold"
            >
              Ücretsiz Adana Analizi Al →
            </Link>
          </div>

          {/* ── STATS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { metric: "50+", label: "Adana Müşterisi" },
              { metric: "+280%", label: "Ort. Satış Artışı" },
              { metric: "48s", label: "Kurulum Süresi" },
              { metric: "4.9/5", label: "Müşteri Puanı" },
            ].map((s, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 text-center">
                <p className="text-2xl font-black text-gold-400">{s.metric}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* ── SERVICE CARDS ── */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Hizmetler</p>
              <h2 className="text-3xl md:text-4xl font-black">
                Adana&apos;da <span className="gradient-text">Sunduğumuz Hizmetler</span>
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">
                Her hizmet Adana pazarına özel analiz, Adana rakip araştırması ve lokal hedefleme stratejisi içerir.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {adanaServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/adana/${service.slug}`}
                  className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-gold-500/25 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <span className="text-xs font-semibold text-gold-400 border border-gold-500/30 rounded-full px-2.5 py-1">
                      Adana
                    </span>
                  </div>
                  <h3 className="font-black text-lg mb-2 group-hover:text-gold-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.subtitle}</p>
                  <div className="flex items-center gap-2 text-sm text-gold-400 font-semibold group-hover:gap-3 transition-all duration-200">
                    Detayları Gör <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── WHY ADANA SECTION ── */}
          <div className="mb-16 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Neden Adana?</p>
                <h2 className="text-2xl md:text-3xl font-black mb-4">
                  Adana Pazarı Büyüyor,<br />
                  <span className="gradient-text">Peki Siz Hazır mısınız?</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm mb-4">
                  Adana, Türkiye&apos;nin 5. büyük şehri ve ekonomik açıdan hızla gelişen bir pazar.
                  Tarım, tekstil, ticaret ve hizmet sektörlerinde dijital rekabet giderek artıyor.
                  Adana&apos;daki işletmeler dijitale geçiş yaparken, geç kalanlar pazar payını kaybediyor.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Biz Adana pazarını analiz ediyor, Adana&apos;daki rakiplerinizi izliyor ve
                  Adana tüketicisinin davranış kalıplarına göre kampanya kuruyoruz.
                  Genel strateji değil — Adana&apos;ya özel strateji.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "🗺️", title: "Adana Pazar Analizi", desc: "Adana&apos;daki rakiplerinizin dijital stratejilerini baştan inceliyoruz." },
                  { icon: "🎯", title: "Lokal Hedefleme", desc: "Seyhan, Çukurova, Yüreğir, Sarıçam — ilçe bazlı hassas hedefleme." },
                  { icon: "⚡", title: "48 Saat Kurulum", desc: "Anlaşma günü başlıyoruz, 48 saat içinde reklamınız Adana&apos;da yayında." },
                  { icon: "📊", title: "Şeffaf Raporlama", desc: "Haftalık sonuç raporları — ne harcandı, ne kazanıldı, her şey görünür." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-0.5">{item.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">Adana&apos;da dijitalde öne geçmeye hazır mısınız?</p>
            <Link
              href="/iletisim"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold"
            >
              Ücretsiz Adana Analizi Al →
            </Link>
            <p className="text-gray-600 text-xs mt-3">
              Ücretsiz · Taahhütsüz · 48 saatte yanıt
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
