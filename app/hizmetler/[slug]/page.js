import { services, getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://gerasmedya.com/hizmetler/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://gerasmedya.com/hizmetler/${service.slug}`,
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

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const baseUrl = "https://gerasmedya.com";

  // ── FAQ Schema (Google Rich Results — arama sonucunda SSS açılır) ──
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
      "@type": "Organization",
      name: "Geras Medya",
      url: baseUrl,
    },
    areaServed: "TR",
    url: `${baseUrl}/hizmetler/${service.slug}`,
  };

  // ── Breadcrumb Schema ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${baseUrl}/hizmetler` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${baseUrl}/hizmetler/${service.slug}` },
    ],
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
