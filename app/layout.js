import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CursorGlow from "@/components/CursorGlow";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Geras Medya | Dijital Bir Çözüm — Meta Ads & Google Ads Uzmanı",
  description:
    "Geras Medya — Dijital Bir Çözüm. Meta Ads, Google Ads, SEO optimizasyonu ve web tasarımı ile markanızı büyütüyoruz. Dijital reklamda sonuç odaklı çözümler.",
  keywords:
    "meta ads, facebook reklamı, instagram reklamı, google ads, dijital reklam, seo optimizasyonu, web tasarım, dijital pazarlama türkiye",
  openGraph: {
    title: "Geras Medya | Meta Ads & Google Ads Uzmanı",
    description:
      "Meta Ads, Google Ads, SEO optimizasyonu ve web tasarımı ile markanızı büyütüyoruz. Dijital reklamda sonuç odaklı çözümler.",
    url: "https://gerasmedya.com",
    siteName: "Geras Medya",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "https://gerasmedya.com/logo.jpg", width: 800, height: 800, alt: "Geras Medya Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geras Medya | Meta Ads & Google Ads Uzmanı",
    description:
      "Meta Ads, Google Ads, SEO optimizasyonu ve web tasarımı ile markanızı büyütüyoruz.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gerasmedya.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Geras Medya",
              description:
                "Meta Ads, Google Ads, SEO optimizasyonu ve web tasarımı hizmetleri",
              url: "https://gerasmedya.com",
              sameAs: ["https://www.instagram.com/gerasmedya"],
              serviceType: [
                "Meta Ads",
                "Google Ads",
                "SEO Optimizasyonu",
                "Web Tasarım",
                "Dijital Pazarlama",
              ],
              areaServed: "TR",
              availableLanguage: "Turkish",
            }),
          }}
        />
      </head>
      <body>
        <CursorGlow />
        {children}
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
