import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HakkimizdaClient from "@/components/HakkimizdaClient";

export const metadata = {
  title: "Hakkımızda | Geras Medya — Dijital Reklam Ajansı",
  description:
    "Geras Medya olarak Meta Ads, Google Ads ve dijital pazarlama alanında işletmelere somut büyüme sağlıyoruz. Ekibimizi ve misyonumuzu tanıyın.",
  alternates: { canonical: "https://gerasmedya.com/hakkimizda" },
};

export default function HakkimizdaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://gerasmedya.com" },
      { "@type": "ListItem", position: 2, name: "Hakkımızda", item: "https://gerasmedya.com/hakkimizda" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-24 pb-24 px-6">
        <HakkimizdaClient />
      </main>
      <Footer />
    </>
  );
}
