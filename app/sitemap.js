import { services } from "@/lib/services-data";
import { adanaServices } from "@/lib/adana-data";

export default function sitemap() {
  const baseUrl = "https://gerasmedya.com";

  const staticPages = [
    { url: baseUrl,                          lastModified: new Date(), changeFrequency: "weekly",  priority: 1    },
    { url: `${baseUrl}/hizmetler`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.9  },
    { url: `${baseUrl}/hakkimizda`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog`,               lastModified: new Date(), changeFrequency: "weekly",  priority: 0.80 },
    { url: `${baseUrl}/iletisim`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/adana`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
  ];

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/hizmetler/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const adanaPages = adanaServices.map((s) => ({
    url: `${baseUrl}/adana/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.82,
  }));

  const blogPages = [
    {
      url: `${baseUrl}/blog/guzellik-salonu-meta-ads-rehberi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.78,
    },
  ];

  return [...staticPages, ...servicePages, ...adanaPages, ...blogPages];
}
