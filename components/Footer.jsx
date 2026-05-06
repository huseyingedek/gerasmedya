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
              href="https://www.instagram.com/gerasmedya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-gold-400 transition-colors"
            >
              📸 @gerasmedya
            </a>
          </div>

          {/* Hizmetler */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Hizmetler
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Şirket
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Hızlı Başlangıç
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Ücretsiz reklam hesabı analizi ile nerede durduğunuzu öğrenin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors border border-gold-500/30 rounded-lg px-4 py-2 hover:bg-gold-500/10"
            >
              Analiz İste →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Geras Medya — Dijital Reklam Ajansı · Türkiye. Tüm hakları saklıdır.
          </p>
          {/* Keyword-rich hidden-but-visible micro copy for SEO */}
          <p className="text-gray-700 text-xs text-center">
            Meta Ads · Google Ads · SEO Optimizasyonu · Web Tasarım · Dijital Pazarlama
          </p>
        </div>

      </div>
    </footer>
  );
}
