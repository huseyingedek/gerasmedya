import "./globals.css";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CursorGlow from "@/components/CursorGlow";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "Geras Medya | Meta Ads & Google Ads Ajansı — Türkiye",
    template: "%s | Geras Medya",
  },
  description:
    "Geras Medya — Türkiye'nin sonuç odaklı dijital reklam ajansı. Meta Ads, Google Ads, SEO ve web tasarım hizmetleriyle işletmenizi büyütüyoruz. Ücretsiz analiz için hemen iletişime geçin.",
  keywords:
    "meta ads ajansı, facebook reklam ajansı, instagram reklamı, google ads ajansı, dijital reklam ajansı türkiye, seo optimizasyonu, web tasarım, dijital pazarlama, reklam yönetimi",
  openGraph: {
    title: "Geras Medya | Meta Ads & Google Ads Ajansı",
    description:
      "Türkiye'nin sonuç odaklı dijital reklam ajansı. Meta Ads, Google Ads ve SEO ile bütçenizin her kuruşunu satışa dönüştürüyoruz.",
    url: "https://gerasmedya.com",
    siteName: "Geras Medya",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geras Medya | Meta Ads & Google Ads Ajansı",
    description:
      "Türkiye'nin sonuç odaklı dijital reklam ajansı. Meta Ads, Google Ads ve SEO ile işletmenizi büyütüyoruz.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  name: "Geras Medya",
  alternateName: "Geras Medya Dijital Reklam Ajansı",
  description:
    "Meta Ads, Google Ads, SEO optimizasyonu ve web tasarımı alanında sonuç odaklı hizmetler sunan dijital reklam ajansı.",
  url: "https://gerasmedya.com",
  logo: "https://gerasmedya.com/logo.png",
  image: "https://gerasmedya.com/logo.png",
  foundingDate: "2023",
  areaServed: {
    "@type": "Country",
    name: "Türkiye",
  },
  serviceType: [
    "Meta Ads Yönetimi",
    "Google Ads Yönetimi",
    "SEO Optimizasyonu",
    "Web Tasarım",
    "Dijital Pazarlama Danışmanlığı",
    "Sosyal Medya Yönetimi",
  ],
  sameAs: [
    "https://www.instagram.com/gerasmedya",
  ],
  availableLanguage: {
    "@type": "Language",
    name: "Turkish",
  },
  priceRange: "₺₺",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "47",
    reviewCount: "47",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <Script
          id="gtag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZ26SKK5');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZ26SKK5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <CursorGlow />
        {children}
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
