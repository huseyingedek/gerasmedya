import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VeriOdakliClient from "@/components/VeriOdakliClient";

export const metadata = {
  title: "Veri Odaklı Büyüme Stratejisi | Sayılar Yalan Söylemez — Geras Medya",
  description:
    "Her reklam kararınızı veriye dayandırın. ROAS optimizasyonu, A/B testler ve analitik raporlama ile bütçenizin her kuruşunu verimli kullanın.",
  alternates: { canonical: "https://gerasmedya.com/strateji/veri-odakli-buyume" },
  openGraph: {
    title: "Veri Odaklı Büyüme — Geras Medya",
    description: "Hissiyatla değil veriyle karar verin. Büyümeyi tahmin edilebilir kılın.",
    url: "https://gerasmedya.com/strateji/veri-odakli-buyume",
    siteName: "Geras Medya",
    locale: "tr_TR",
    type: "website",
  },
};

export default function VeriOdakliBuyumePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://gerasmedya.com" },
      { "@type": "ListItem", position: 2, name: "Strateji", item: "https://gerasmedya.com/strateji" },
      { "@type": "ListItem", position: 3, name: "Veri Odaklı Büyüme", item: "https://gerasmedya.com/strateji/veri-odakli-buyume" },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Veri Odaklı Büyüme Stratejisi: Sayılar Yalan Söylemez",
    description: "Her karar bir veriye dayansın. Reklam bütçesini veriye göre yönetin, büyümeyi tahmin edilebilir kılın.",
    author: { "@type": "Organization", name: "Geras Medya" },
    publisher: { "@type": "Organization", name: "Geras Medya", url: "https://gerasmedya.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <VeriOdakliClient />
      <Footer />
    </>
  );
}
