import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Slogan */}
        <Link href="/" className="flex flex-col items-center md:items-start gap-1">
          <Image
            src="/logo.png"
            alt="Geras Medya Logo"
            width={500}
            height={200}
            className="h-[160px] w-auto object-contain"
          />
          <p className="text-xs text-gold-400/70 tracking-[0.2em] uppercase font-medium">
            — Dijital Bir Çözüm —
          </p>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <Link href="/hizmetler" className="hover:text-white transition-colors">
            Hizmetler
          </Link>
          <Link href="/#neden-biz" className="hover:text-white transition-colors">
            Neden Biz
          </Link>
          <Link href="/iletisim" className="hover:text-white transition-colors">
            İletişim
          </Link>
          <a
            href="https://www.instagram.com/gerasmedya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-xs">
          © {currentYear} Geras Medya. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
