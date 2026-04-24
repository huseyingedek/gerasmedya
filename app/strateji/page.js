import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StrategyHubClient from "@/components/StrategyHubClient";

export const metadata = {
  title: "Dijital Stratejiler | Büyümenin Yol Haritası — Geras Medya",
  description:
    "Sektörünüzde fark yaratacak dijital stratejiler. Dijital Kuşatma'dan veri odaklı büyüme modellerine kadar işinizi bir üst seviyeye taşıyacak stratejik çerçeveler.",
  alternates: { canonical: "https://gerasmedya.com/strateji" },
  openGraph: {
    title: "Dijital Stratejiler — Geras Medya",
    description: "Dijital dünyada fark yaratan stratejiler. Rakipleri takip etmeyi bırakın, kendi oyununuzu oynayın.",
    url: "https://gerasmedya.com/strateji",
    siteName: "Geras Medya",
    locale: "tr_TR",
    type: "website",
  },
};

export default function StratejiHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://gerasmedya.com" },
      { "@type": "ListItem", position: 2, name: "Strateji", item: "https://gerasmedya.com/strateji" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <StrategyHubClient />
      <Footer />
    </>
  );
}
