import { services } from "@/lib/services-data";

export default function sitemap() {
  const baseUrl = "https://gerasmedya.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/hizmetler`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/strateji`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/strateji/dijital-kusatma`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.82 },
    { url: `${baseUrl}/iletisim`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
  ];

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/hizmetler/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages];
}
