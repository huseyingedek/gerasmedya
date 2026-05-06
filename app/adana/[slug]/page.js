import { adanaServices, getAdanaServiceBySlug } from "@/lib/adana-data";
import AdanaPageTemplate from "@/components/AdanaPageTemplate";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return adanaServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const service = getAdanaServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://gerasmedya.com/adana/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://gerasmedya.com/adana/${service.slug}`,
      siteName: "Geras Medya",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function AdanaServicePage({ params }) {
  const service = getAdanaServiceBySlug(params.slug);
  if (!service) notFound();

  const baseUrl = "https://gerasmedya.com";

  // ── LocalBusiness Schema (Adana yerel SEO için kritik) ──
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/adana/${service.slug}`,
    name: "Geras Medya — " + service.title,
    description: service.metaDescription,
    url: `${baseUrl}/adana/${service.slug}`,
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
    areaServed: {
      "@type": "City",
      name: "Adana",
    },
    priceRange: "₺₺",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
    },
    sameAs: ["https://www.instagram.com/gerasmedya"],
  };

  // ── FAQ Schema ──
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  // ── Service Schema ──
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Geras Medya",
      url: baseUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Adana",
        addressCountry: "TR",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Adana",
    },
    url: `${baseUrl}/adana/${service.slug}`,
  };

  // ── Breadcrumb Schema ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Adana", item: `${baseUrl}/adana` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${baseUrl}/adana/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AdanaPageTemplate service={service} />
    </>
  );
}
