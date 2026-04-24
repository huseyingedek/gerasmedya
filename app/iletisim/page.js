import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata = {
  title: "İletişim | Ücretsiz Dijital Reklam Analizi — Geras Medya",
  description:
    "Meta Ads, Google Ads, SEO veya web tasarım hakkında ücretsiz analiz almak için formu doldurun. 24 saat içinde dönüş yapıyoruz.",
  alternates: { canonical: "https://gerasmedya.com/iletisim" },
};

export default function IletisimPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://gerasmedya.com" },
      { "@type": "ListItem", position: 2, name: "İletişim", item: "https://gerasmedya.com/iletisim" },
    ],
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Geras Medya İletişim",
    description: "Ücretsiz dijital reklam analizi ve keşif görüşmesi için iletişim sayfası",
    url: "https://gerasmedya.com/iletisim",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <ContactPageClient />
      </main>
      <Footer />
    </>
  );
}
