"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between overflow-visible">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Geras Medya Logo"
            width={500}
            height={200}
            className="h-[160px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Hizmetler dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Hizmetler
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 py-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/hizmetler/${s.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <p className="text-sm font-semibold group-hover:text-gold-400 transition-colors">{s.title}</p>
                      <p className="text-xs text-gray-500">{s.subtitle}</p>
                    </div>
                  </Link>
                ))}
                <div className="border-t border-white/[0.06] mx-4 mt-2 pt-2 pb-1">
                  <Link
                    href="/hizmetler"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-center gap-2 py-2 text-gold-400 text-xs font-semibold hover:text-gold-300 transition-colors"
                  >
                    Tüm Hizmetleri Gör →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/strateji" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            Strateji
          </Link>
          <Link href="/#neden-biz" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            Neden Biz
          </Link>
          <Link href="/iletisim" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
            İletişim
          </Link>
          <Link href="/iletisim" className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-lg text-white">
            Ücretsiz Analiz Al
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-4">
          <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-3">Hizmetler</p>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 border-b border-white/[0.05] last:border-0"
            >
              <span>{s.icon}</span>
              <span className="text-sm text-gray-300">{s.title}</span>
            </Link>
          ))}
          <div className="mt-4 space-y-3">
            <Link href="/#neden-biz" className="block text-gray-300 py-2" onClick={() => setMenuOpen(false)}>
              Neden Biz
            </Link>
            <Link
              href="/iletisim"
              className="btn-primary block text-sm font-semibold px-5 py-3.5 rounded-lg text-white text-center"
              onClick={() => setMenuOpen(false)}
            >
              Ücretsiz Analiz Al
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
