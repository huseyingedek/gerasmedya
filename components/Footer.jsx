import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { href: "/hizmetler/meta-ads",          label: "Meta Ads Yönetimi" },
  { href: "/hizmetler/google-ads",         label: "Google Ads Yönetimi" },
  { href: "/hizmetler/seo-optimizasyonu",  label: "SEO Optimizasyonu" },
  { href: "/hizmetler/web-tasarim",        label: "Web Tasarım" },
  { href: "/hizmetler/reklam-danismanligi",label: "Reklam Danışmanlığı" },
];

const companyLinks = [
  { href: "/hakkimizda",  label: "Hakkımızda" },
  { href: "/#neden-biz",  label: "Neden Biz?" },
  { href: "/blog",        label: "Blog" },
  { href: "/iletisim",    label: "İletişim" },
  { href: "/iletisim",    label: "Ücretsiz Analiz" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col items-start gap-1 mb-4">
              <Image
                src="/logo.png"
                alt="Geras Medya Dijital Reklam Ajansı Logo"
                width={500}
                height={200}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Türkiye&apos;nin sonuç odaklı dijital reklam ajansı. Meta Ads, Google Ads ve SEO
              ile işletmenizi büyütüyoruz.
            </p>
            <a
              href