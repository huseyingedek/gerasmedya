import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StrategyPageClient from "@/components/StrategyPageClient";

export const metadata = {
  title: "Dijital Kuşatma Stratejisi | Kendinizle Rekabet Edin — Geras Medya",
  description:
    "Sektörünüzde o kadar güçlü bir dijital varlık oluşturun ki müşteri rakibinize gitse bile size dönsün. Dijital Kuşatma Stratejisi ile rakiplerinizi değil, kendinizi geçin.",
  alternates: { canonical: "https://gerasmedya.com/strateji/dijital-kusatma" },
  openGraph: {
    title: "Dijital Kuşatma Stratejisi — Geras Medya",
    description: "Rakiplerinizin arasında kaybolmak mı, yoksa her yerde olmak mı? Kendinizle rekabet edin.",
    url: "https://gerasmedya.com/strateji/dijital-kusatma",
    siteName: "Geras Medya",
    locale: "tr_TR",
    type: "website",
  },
};

export default function DijitalKusatmaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://gerasmedya.com" },
      { "@type": "ListItem", position: 2, name: "Strateji", item: "https://gerasmedya.com/strateji" },
      { "@type": "ListItem", position: 3, name: "Dijital Kuşatma", item: "https://gerasmedya.com/strateji/dijital-kusatma" },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dijital Kuşatma Stratejisi: Kendinizle Rekabet Edin",
    description: "Sektörünüzde rakiplerinizin değil, kendinizin rakibi olun. Her kanalda görünün, müşteriyi kuşatın.",
    author: { "@type": "Organization", name: "Geras Medya" },
    publisher: { "@type": "Organization", name: "Geras Medya", url: "https://gerasmedya.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <StrategyPageClient />
      <Footer />
    </>
  );
}
