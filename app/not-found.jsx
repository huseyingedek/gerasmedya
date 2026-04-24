import Link from "next/link";

export const metadata = {
  title: "Sayfa Bulunamadı | Geras Medya",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 text-center">
      {/* Ambient orb */}
      <div
        className="orb w-96 h-96 bg-gold-500"
        style={{ top: "20%", left: "30%", opacity: 0.1, position: "fixed" }}
      />

      <div className="relative z-10">
        <p className="text-8xl font-black gradient-text mb-4">404</p>
        <h1 className="text-3xl font-black text-white mb-3">
          Sayfa Bulunamadı
        </h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Aradığınız sayfa taşınmış veya mevcut değil. Endişelenmeyin, sizi
          doğru yöne yönlendirelim.
        </p>
        <Link
          href="/"
          className="btn-primary inline-block px-8 py-4 rounded-xl text-white font-bold text-base"
        >
          Ana Sayfaya Dön →
        </Link>
      </div>
    </div>
  );
}
