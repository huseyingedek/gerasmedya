import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrganikOtoriteClient from "@/components/OrganikOtoriteClient";

export const metadata = {
  title: "Organik Otorite İnşası | Reklamsız Müşteri Çekin — Geras Medya",
  description:
    "SEO ve içerik stratejisiyle sektörünüzde otoriter bir marka olun. Reklam bütçesi olmadan da müşteri çekin — algoritmaları değil, insanları kazanın.",
  alternates: { canonical: "https://gerasmedya.com/strateji/organik-otorite" },
  openGraph: {
    title: "Organik Otorite İnşası — Geras Medya",
    description: "Reklam kapanınca trafik biter. İçerik hiç durmaz. Organik büyümeyi keşfedin.",
    url: "https://gerasmedya.com/strateji/organik-otorite",
    siteName: "Geras Medya",
    locale: "tr_TR",
    type: "website",
  },
};

export default function OrganikOtoritePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://gerasmedya.com" },
      { "@type": "ListItem", position: 2, name: "Strateji", item: "https://gerasmedya.com/strateji" },
      { "@type": "ListItem", position: 3, name: "Organik Otorite", item: "https://gerasmedya.com/strateji/organik-otorite" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <OrganikOtoriteClient />
      <Footer />
    </>
  );
}
