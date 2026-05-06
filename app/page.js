import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import StrategyTeaser from "@/components/StrategyTeaser";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Geras Medya | Meta Ads & Google Ads Ajansı — Türkiye",
  description:
    "Geras Medya — Türkiye'nin sonuç odaklı dijital reklam ajansı. Meta Ads, Google Ads, SEO ve web tasarım hizmetleriyle işletmenizi büyütüyoruz. 50+ mutlu müşteri, %340 ortalama ROI artışı. Ücretsiz analiz için hemen iletişime geçin.",
  alternates: { canonical: "https://gerasmedya.com" },
};

// Google arama sonuçlarında yıldız göstergesi için Review schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Geras Medya",
  url: "https://gerasmedya.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "47",
    reviewCount: "47",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ahmet Yılmaz" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Geras Medya ile Meta reklam kampanyamızı başlattıktan sonra satışlarımız 3 ayda %280 arttı. Gerçekten sonuç odaklı çalışıyorlar.",
      datePublished: "2024-11-10",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Selin Kaya" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Google Ads kampanyamızla yeni müşteri akışı inanılmaz oldu. Artık rezervasyonlarımız aylar öncesinden doluyor. Teşekkürler!",
      datePublished: "2024-12-03",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Murat Demir" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Sosyal medya yönetimi ve Meta reklamlarıyla müşteri kitlemizi 5 kat büyüttük. Profesyonel ve hızlı ekip.",
      datePublished: "2025-01-15",
    },
  ],
};

// Ana sayfa içerik şeması (WebSite + SearchAction için)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Geras Medya",
  url: "https://gerasmedya.com",
  description: "Meta Ads, Google Ads ve SEO alanında Türkiye'nin sonuç odaklı dijital reklam ajansı.",
  inLanguage: "tr-TR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://gerasmedya.com/hizmetler",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <main>
        <Navbar />
        <Hero />
        <Services />
        <StrategyTeaser />
        <WhyUs />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
