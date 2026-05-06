import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Blog | Dijital Reklam & Meta Ads Google Ads Rehberi — Geras Medya",
  description:
    "Meta Ads, Google Ads, SEO ve dijital pazarlama hakkında uzman rehberleri, ipuçları ve strateji yazıları. Türkiye'nin dijital reklam ajansından güncel içerikler.",
  alternates: { canonical: "https://gerasmedya.com/blog" },
};

// Yakında yayınlanacak yazılar — içerik üretildikçe buraya eklenir
const upcomingPosts = [
  {
    slug: "meta-ads-mi-google-ads-mi",
    title: "Meta Ads mı, Google Ads mi? İşletmeniz İçin Hangisi Daha İyi?",
    description:
      "Facebook/Instagram reklamları ile Google arama reklamları arasındaki farkı, hangi sektörün hangisinden daha fazla faydalandığını ve ikisini birlikte nasıl kullanacağınızı açıklıyoruz.",
    tag: "Strateji",
    readTime: "7 dk",
    soon: true,
  },
  {
    slug: "facebook-reklam-maliyeti-2026",
    title: "Facebook Reklam Maliyeti 2026: Türkiye'de CPM, CPC ve ROAS Ortalamaları",
    description:
      "Güzellik, e-ticaret, restoran ve hizmet sektöründe Meta Ads maliyetleri ne kadar? Gerçek rakamlar ve bütçe optimizasyon ipuçları.",
    tag: "Meta Ads",
    readTime: "5 dk",
    soon: true,
  },
  {
    slug: "google-ads-baslangic-rehberi",
    title: "Google Ads'e Sıfırdan Başlama Rehberi: İlk Kampanyanızı Doğru Kurun",
    description:
      "Anahtar kelime seçimi, match type, kalite skoru ve bütçe ayarları — ilk Google Ads kampanyanızda para israf etmemek için bilmeniz gereken her şey.",
    tag: "Google Ads",
    readTime: "10 dk",
    soon: true,
  },
  {
    slug: "seo-nedir-nasil-yapilir",
    title: "SEO Nedir, Nasıl Yapılır? 2026 Güncel Rehber",
    description:
      "Teknik SEO, on-page optimizasyon ve link building — Google'da üst sıralara çıkmak için adım adım uygulayabileceğiniz kapsamlı SEO rehberi.",
    tag: "SEO",
    readTime: "12 dk",
    soon: true,
  },
  {
    slug: "reklam-butcesi-nasil-belirlenir",
    title: "Aylık Reklam Bütçesi Nasıl Belirlenir? Sektöre Göre Referans Rakamlar",
    description:
      "Güzellik salonu, e-ticaret, restoran, gayrimenkul — sektörünüze ve hedeflerinize göre Meta ve Google Ads için gerçekçi bütçe planlaması nasıl yapılır?",
    tag: "Strateji",
    readTime: "6 dk",
    soon: true,
  },
  {
    slug: "retargeting-kampanya-kurulumu",
    title: "Retargeting (Yeniden Hedefleme) Kampanyası Nasıl Kurulur?",
    description:
      "Sitenizi ziyaret edip satın almayan kullanıcıları geri getirin. Meta Pixel ve Google Tag ile retargeting kampanyası kurma rehberi.",
    tag: "Meta Ads",
    readTime: "8 dk",
    soon: true,
  },
];

const tagColors = {
  "Meta Ads":  "bg-blue-500/15 text-blue-300 border-blue-500/25",
  "Google Ads":"bg-red-500/15 text-red-300 border-red-500/25",
  "SEO":       "bg-purple-500/15 text-purple-300 border-purple-500/25",
  "Strateji":  "bg-gold-500/15 text-gold-400 border-gold-500/25",
};

export default function BlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://gerasmedya.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://gerasmedya.com/blog" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-black mb-5">
              Dijital Reklamda{" "}
              <span className="gradient-text">Uzman Rehberleri</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meta Ads, Google Ads, SEO ve dijital pazarlama hakkında uygulanabilir
              stratejiler, gerçek veriler ve uzman ipuçları.
            </p>
          </div>

          {/* Coming soon banner */}
          <div className="mb-12 p-5 rounded-2xl border border-gold-500/20 bg-gold-500/5 flex items-center gap-4">
            <span className="text-2xl">⏳</span>
            <div>
              <p className="text-sm font-semibold text-white mb-0.5">İçerikler hazırlanıyor</p>
              <p className="text-xs text-gray-400">Aşağıdaki yazılar yakında yayınlanacak. Yayınlandığında haberdar olmak için Instagram&apos;ı takip edin.</p>
            </div>
            <a
              href="https://www.instagram.com/gerasmedya"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex-shrink-0 text-xs font-semibold text-gold-400 border border-gold-500/30 rounded-lg px-3 py-1.5 hover:bg-gold-500/10 transition-colors whitespace-nowrap"
            >
              Takip Et →
            </a>
          </div>

          {/* Post cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingPosts.map((post) => (
              <div
                key={post.slug}
                className="group relative p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-gold-500/20 hover:bg-white/[0.06] transition-all duration-200"
              >
                {/* Soon badge */}
                <div className="absolute top-4 right-4 text-[10px] font-semibold text-gray-500 border border-white/[0.08] rounded-full px-2 py-0.5">
                  Yakında
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${tagColors[post.tag]}`}>
                    {post.tag}
                  </span>
                  <span className="text-[11px] text-gray-600">· {post.readTime} okuma</span>
                </div>

                <h2 className="font-black text-base leading-snug mb-2 group-hover:text-gold-400 transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-4">Daha fazla beklemek istemiyor musunuz?</p>
            <Link
              href="/iletisim"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold"
            >
              Ücretsiz Keşif Görüşmesi Al →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
