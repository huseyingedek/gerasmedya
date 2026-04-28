"use client";
import { useState } from "react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const plans = [
  {
    id: "aylik",
    name: "Aylık",
    price: "₺499",
    period: "/ ay",
    monthlyEq: "₺499/ay",
    desc: "Her ay yenilenir, istediğin zaman iptal et.",
    features: [
      "Tüm eğitimlere tam erişim",
      "Adım adım uygulama rehberleri",
      "Hazır reklam şablonları",
      "Yeni içerikler otomatik açılır",
    ],
    highlight: false,
    badge: null,
  },
  {
    id: "yillik",
    name: "Yıllık",
    price: "₺3.990",
    period: "/ yıl",
    monthlyEq: "≈ ₺332/ay",
    desc: "Yıllık öde, 2 ay bedava kazan.",
    features: [
      "Tüm eğitimlere tam erişim",
      "Adım adım uygulama rehberleri",
      "Hazır reklam şablonları",
      "Yeni içerikler otomatik açılır",
      "Öncelikli destek hattı",
      "İndirilebilir kaynak dosyaları",
    ],
    highlight: true,
    badge: "En Popüler",
  },
];

const INCLUDED = [
  { icon: "🎯", title: "Dijital Kuşatma Stratejisi", desc: "Müşteriyi her platformda yakalayan çok kanallı reklam sistemi" },
  { icon: "📱", title: "Meta Ads Masterclass", desc: "Facebook & Instagram reklamlarında sıfırdan ileri seviyeye" },
  { icon: "🔍", title: "Google Ads Rehberi", desc: "Arama, display ve alışveriş kampanyaları adım adım" },
  { icon: "📊", title: "Analitik & Raporlama", desc: "Verilerini oku, kararlarını data ile al" },
  { icon: "📋", title: "Hazır Şablonlar", desc: "Hemen kullanabileceğin reklam metinleri ve görseller" },
  { icon: "🚀", title: "Sürekli Güncelleme", desc: "Yeni stratejiler yayına girince hesabına otomatik eklenir" },
];

const STEPS = ["Plan Seç", "Hesap", "Ödeme", "Tamam"];
const inputCls = "w-full bg-white/[0.06] border border-white/[0.1] rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/60 focus:bg-white/[0.08] transition-all text-sm";

export default function UyeOlClient() {
  const [step, setStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("yillik");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [card, setCard] = useState({ holder: "", number: "", expiry: "", cvv: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const plan = plans.find((p) => p.id === selectedPlan);

  const handleFormChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleCardChange = (e) => {
    let val = e.target.value;
    if (e.target.name === "number") val = val.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim().slice(0, 19);
    if (e.target.name === "expiry") val = val.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "$1/$2").slice(0, 5);
    if (e.target.name === "cvv") val = val.replace(/\D/g, "").slice(0, 3);
    setCard({ ...card, [e.target.name]: val });
  };

  const handlePayment = async () => {
    setError("");
    setLoading(true);
    try {
      const [expMonth, expYear] = card.expiry.split("/");
      const res = await fetch(`${API_URL}/api/payment/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: selectedPlan,
          user: { name: form.name, email: form.email, password: form.password },
          card: {
            holder: card.holder,
            number: card.number.replace(/\s/g, ""),
            expireMonth: expMonth,
            expireYear: "20" + expYear,
            cvv: card.cvv,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Ödeme işlemi başarısız.");
      setStep(3);
    } catch (err) {
      setError(err.message || "Bir hata oluştu, tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-gold-500" style={{ top: "-15%", left: "50%", transform: "translateX(-50%)", opacity: 0.08 }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-bold mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Panel Üyeliği
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
            Dijital Reklamı<br />
            <span className="gradient-text">Kendin Uygula</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Meta Ads, Google Ads ve dijital strateji eğitimlerine tam erişim.
            Adım adım uygula, bütçeni kendin yönet, sonucu kendin gör.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><span className="text-gold-400">✓</span> Anında erişim</span>
            <span className="flex items-center gap-1.5"><span className="text-gold-400">✓</span> İstediğin zaman iptal</span>
            <span className="flex items-center gap-1.5"><span className="text-gold-400">✓</span> Güvenli ödeme</span>
          </div>
        </div>
      </section>

      {/* NELER DAHİL */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs text-gray-500 uppercase tracking-widest font-semibold mb-8">Üyelikle neler elde edersin?</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INCLUDED.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-gold-500/20 transition-all">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KAYIT FORMU */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Adım göstergesi */}
          <div className="flex items-center justify-center gap-1 mb-10">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-1">
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  i === step ? "bg-gold-500/20 border border-gold-500/50 text-gold-400"
                  : i < step ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                  : "bg-white/[0.04] border border-white/[0.08] text-gray-600"
                }`}>
                  {i < step ? "✓" : i + 1} {s}
                </div>
                {i < STEPS.length - 1 && <div className="w-4 h-px bg-white/10 flex-shrink-0" />}
              </div>
            ))}
          </div>

          {/* ADIM 0: Plan Seç */}
          {step === 0 && (
            <div>
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                {plans.map((p) => (
                  <button key={p.id} onClick={() => setSelectedPlan(p.id)}
                    className={`relative text-left p-6 rounded-2xl border transition-all duration-200 ${
                      selectedPlan === p.id
                        ? "border-gold-500/60 bg-gold-500/10 shadow-lg shadow-gold-500/5"
                        : "border-white/[0.08] bg-white/[0.04] hover:border-white/20"
                    }`}>
                    {p.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-gold-500 to-gold-600 text-black whitespace-nowrap">
                        {p.badge}
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-4 mt-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{p.name}</p>
                      {selectedPlan === p.id && (
                        <div className="w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center">
                          <span className="text-black text-xs font-black">✓</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-end gap-1.5 mb-1">
                      <span className="text-3xl font-black text-white">{p.price}</span>
                      <span className="text-gray-500 text-sm mb-1">{p.period}</span>
                    </div>
                    <p className="text-xs text-gold-400/80 font-medium mb-4">{p.monthlyEq}</p>
                    <ul className="space-y-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-gray-400">
                          <span className="text-gold-400 flex-shrink-0 mt-0.5">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>

              {selectedPlan === "yillik" && (
                <div className="mb-5 px-5 py-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-3">
                  <span className="text-xl">💰</span>
                  <p className="text-sm text-emerald-400 font-medium">
                    Yıllık planla <strong>₺{(499 * 12 - 3990).toLocaleString("tr")}</strong> tasarruf ediyorsun!
                  </p>
                </div>
              )}

              <button onClick={() => setStep(1)} className="btn-primary w-full py-4 rounded-xl text-white font-bold text-base">
                {plan?.name} Plan ile Devam Et →
              </button>
              <p className="text-center text-xs text-gray-600 mt-4">
                Zaten üye misin?{" "}
                <a href="https://panel.gerasonline.com" className="text-gold-500 hover:text-gold-400 transition-colors">
                  Giriş yap →
                </a>
              </p>
            </div>
          )}

          {/* ADIM 1: Hesap Bilgileri */}
          {step === 1 && (
            <div className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-8">
              <h2 className="text-xl font-black mb-1">Hesap Bilgileri</h2>
              <p className="text-gray-500 text-sm mb-7">Bu bilgilerle panele giriş yapacaksın.</p>
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Ad Soyad</label>
                  <input name="name" value={form.name} onChange={handleFormChange} placeholder="Adın Soyadın" className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">E-posta</label>
                  <input name="email" type="email" value={form.email} onChange={handleFormChange} placeholder="ornek@email.com" className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Şifre</label>
                  <input name="password" type="password" value={form.password} onChange={handleFormChange} placeholder="En az 8 karakter" className={inputCls} />
                  <p className="text-xs text-gray-600 mt-1.5">Panele girişte bu şifreyi kullanacaksın.</p>
                </div>
              </div>
              {error && <p className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{error}</p>}
              <div className="flex gap-3">
                <button onClick={() => { setError(""); setStep(0); }}
                  className="px-5 py-3 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 transition-all text-sm font-medium">
                  ← Geri
                </button>
                <button onClick={() => {
                  if (!form.name.trim() || !form.email.trim() || form.password.length < 8) {
                    setError("Tüm alanları doldur. Şifre en az 8 karakter olmalı.");
                    return;
                  }
                  setError(""); setStep(2);
                }} className="btn-primary flex-1 py-3 rounded-xl text-white font-bold text-sm">
                  Ödemeye Geç →
                </button>
              </div>
            </div>
          )}

          {/* ADIM 2: Ödeme */}
          {step === 2 && (
            <div className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-8">
              <div className="flex items-center justify-between mb-7 pb-6 border-b border-white/[0.08]">
                <div>
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Seçilen Plan</p>
                  <p className="font-black text-white text-lg">{plan?.name} Plan</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black gradient-text">{plan?.price}</p>
                  <p className="text-xs text-gray-500">{plan?.period}</p>
                </div>
              </div>

              <h2 className="text-lg font-black mb-5">Kart Bilgileri</h2>
              <div className="space-y-4 mb-7">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Kart Sahibi</label>
                  <input name="holder" value={card.holder} onChange={handleCardChange} placeholder="AD SOYAD" className={`${inputCls} uppercase`} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Kart Numarası</label>
                  <input name="number" value={card.number} onChange={handleCardChange} placeholder="0000 0000 0000 0000" maxLength={19} className={`${inputCls} tracking-widest font-mono`} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Son Kullanma</label>
                    <input name="expiry" value={card.expiry} onChange={handleCardChange} placeholder="AA/YY" maxLength={5} className={`${inputCls} font-mono`} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">CVV</label>
                    <input name="cvv" value={card.cvv} onChange={handleCardChange} placeholder="000" maxLength={3} className={`${inputCls} font-mono`} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[{ icon: "🔒", label: "256-bit SSL" }, { icon: "🏦", label: "iyzico" }, { icon: "↩️", label: "İptal Garantisi" }].map((t) => (
                  <div key={t.label} className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                    <span className="text-lg">{t.icon}</span>
                    <p className="text-xs text-gray-500 font-medium">{t.label}</p>
                  </div>
                ))}
              </div>

              {error && <div className="mb-5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>}

              <div className="flex gap-3">
                <button onClick={() => { setError(""); setStep(1); }}
                  className="px-5 py-3 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 transition-all text-sm font-medium">
                  ← Geri
                </button>
                <button onClick={handlePayment}
                  disabled={loading || !card.holder || card.number.length < 19 || card.expiry.length < 5 || card.cvv.length < 3}
                  className="btn-primary flex-1 py-3 rounded-xl text-white font-bold text-sm disabled:opacity-40">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      İşleniyor…
                    </span>
                  ) : `${plan?.price} Öde & Üye Ol →`}
                </button>
              </div>
            </div>
          )}

          {/* ADIM 3: Başarı */}
          {step === 3 && (
            <div className="text-center rounded-2xl border border-gold-500/30 bg-gold-500/5 p-12">
              <div className="w-20 h-20 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-4xl mx-auto mb-6">
                🎉
              </div>
              <h2 className="text-3xl font-black mb-3">Üyeliğin Aktif!</h2>
              <p className="text-gray-300 mb-2">
                <span className="text-white font-semibold">{form.email}</span> adresine hoş geldin e-postası gönderildi.
              </p>
              <p className="text-gray-500 text-sm mb-8">Panel erişimin hemen aktif — şimdi giriş yap ve başla!</p>
              <a href="https://panel.gerasonline.com" className="btn-primary inline-block px-10 py-4 rounded-xl text-white font-bold text-base">
                Panele Giriş Yap →
              </a>
              <p className="text-xs text-gray-600 mt-6">
                Sorun yaşarsan{" "}
                <Link href="/iletisim" className="text-gold-500 hover:text-gold-400 transition-colors">
                  bizimle iletişime geç →
                </Link>
              </p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
