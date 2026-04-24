"use client";
import { useState } from "react";
import Link from "next/link";

// Backend API URL — .env.local dosyasına NEXT_PUBLIC_API_URL tanımla
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const plans = [
  {
    id: "aylik",
    name: "Aylık Plan",
    price: "₺499",
    period: "/ ay",
    desc: "Her ay yenilenir, istediğinde iptal et.",
    features: [
      "Tüm stratejilere erişim",
      "Adım adım uygulama rehberleri",
      "Hazır reklam şablonları",
      "Yeni stratejiler otomatik açılır",
    ],
    highlight: false,
  },
  {
    id: "yillik",
    name: "Yıllık Plan",
    price: "₺3.990",
    period: "/ yıl",
    badge: "2 ay bedava",
    desc: "Yıllık öde, 2 ay kazan.",
    features: [
      "Tüm stratejilere erişim",
      "Adım adım uygulama rehberleri",
      "Hazır reklam şablonları",
      "Yeni stratejiler otomatik açılır",
      "Öncelikli destek",
    ],
    highlight: true,
  },
];

const STEPS = ["Plan Seç", "Bilgiler", "Ödeme", "Tamamlandı"];

export default function UyeOlClient() {
  const [step, setStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("yillik");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [card, setCard] = useState({ holder: "", number: "", expiry: "", cvv: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
      setSuccess(true);
      setStep(3);
    } catch (err) {
      setError(err.message || "Bir hata oluştu, tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-28 pb-24 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto">

        {/* Başlık */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold mb-5 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            Panel Üyeliği
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            Stratejiyi Kendin <span className="gradient-text">Uygula</span>
          </h1>
          <p className="text-gray-400">
            Dijital Kuşatma ve diğer stratejilere adım adım uygulama rehberleriyle eriş.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                i === step
                  ? "bg-gold-500/20 border border-gold-500/40 text-gold-400"
                  : i < step
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-white/5 border border-white/10 text-gray-600"
              }`}>
                {i < step ? "✓" : i + 1} {s}
              </div>
              {i < STEPS.length - 1 && <div className="w-5 h-px bg-white/10" />}
            </div>
          ))}
        </div>

        {/* ── ADIM 0: Plan Seç ── */}
        {step === 0 && (
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {plans.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlan(p.id)}
                  className={`relative text-left p-7 rounded-2xl border transition-all duration-200 ${
                    selectedPlan === p.id
                      ? "border-gold-500/50 bg-gold-500/10"
                      : "border-white/[0.06] bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  {p.badge && (
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold bg-gold-500 text-black">
                      {p.badge}
                    </div>
                  )}
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">{p.name}</p>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl font-black text-white">{p.price}</span>
                    <span className="text-gray-500 text-sm mb-1">{p.period}</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-5">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-gold-400 mt-0.5 flex-shrink-0">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  {selectedPlan === p.id && (
                    <div className="mt-5 text-xs font-bold text-gold-400">✓ Seçildi</div>
                  )}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="btn-primary w-full py-4 rounded-xl text-white font-bold text-base"
            >
              {plan?.name} ile Devam Et →
            </button>
          </div>
        )}

        {/* ── ADIM 1: Kullanıcı Bilgileri ── */}
        {step === 1 && (
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h2 className="text-xl font-black mb-6">Hesap Bilgileri</h2>
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">Ad Soyad</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="Adınız Soyadınız"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">E-posta</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleFormChange}
                  placeholder="ornek@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">Şifre</label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleFormChange}
                  placeholder="En az 8 karakter"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                />
                <p className="text-xs text-gray-600 mt-1.5">Bu şifre ile panele giriş yapacaksınız.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(0)} className="px-6 py-3 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 transition-all font-medium text-sm">
                ← Geri
              </button>
              <button
                onClick={() => {
                  if (!form.name || !form.email || form.password.length < 8) {
                    setError("Lütfen tüm alanları doldurun. Şifre en az 8 karakter olmalı.");
                    return;
                  }
                  setError("");
                  setStep(2);
                }}
                className="btn-primary flex-1 py-3 rounded-xl text-white font-bold text-sm"
              >
                Ödemeye Geç →
              </button>
            </div>
            {error && <p className="mt-3 text-sm text-red-400 text-center">{error}</p>}
          </div>
        )}

        {/* ── ADIM 2: Ödeme ── */}
        {step === 2 && (
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            {/* Özet */}
            <div className="flex items-center justify-between mb-7 pb-7 border-b border-white/[0.06]">
              <div>
                <p className="text-xs text-gray-500 mb-1">Seçilen Plan</p>
                <p className="font-black text-white">{plan?.name}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-gold-400">{plan?.price}</p>
                <p className="text-xs text-gray-500">{plan?.period}</p>
              </div>
            </div>

            <h2 className="text-xl font-black mb-6">Kart Bilgileri</h2>
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">Kart Sahibinin Adı</label>
                <input
                  name="holder"
                  value={card.holder}
                  onChange={handleCardChange}
                  placeholder="JOHN DOE"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 transition-colors uppercase"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-medium">Kart Numarası</label>
                <input
                  name="number"
                  value={card.number}
                  onChange={handleCardChange}
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 transition-colors tracking-widest font-mono"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">Son Kullanma</label>
                  <input
                    name="expiry"
                    value={card.expiry}
                    onChange={handleCardChange}
                    placeholder="AA/YY"
                    maxLength={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 transition-colors font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">CVV</label>
                  <input
                    name="cvv"
                    value={card.cvv}
                    onChange={handleCardChange}
                    placeholder="000"
                    maxLength={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 transition-colors font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Güven işaretleri */}
            <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-xl">🔒</span>
              <div>
                <p className="text-xs font-semibold text-gray-300">256-bit SSL ile şifreli bağlantı</p>
                <p className="text-xs text-gray-600">Kart bilgileriniz iyzico altyapısıyla korunur</p>
              </div>
            </div>

            {error && <div className="mb-5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>}

            <div className="flex gap-3">
              <button onClick={() => { setError(""); setStep(1); }} className="px-6 py-3 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 transition-all font-medium text-sm">
                ← Geri
              </button>
              <button
                onClick={handlePayment}
                disabled={loading || !card.holder || card.number.length < 19 || card.expiry.length < 5 || card.cvv.length < 3}
                className="btn-primary flex-1 py-3 rounded-xl text-white font-bold text-sm disabled:opacity-50"
              >
                {loading ? "İşleniyor…" : `${plan?.price} Öde ve Üye Ol →`}
              </button>
            </div>
          </div>
        )}

        {/* ── ADIM 3: Başarı ── */}
        {step === 3 && (
          <div className="text-center rounded-2xl border border-gold-500/30 bg-gold-500/5 p-12">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-black mb-3">Üyeliğiniz Aktif!</h2>
            <p className="text-gray-400 mb-2">
              <span className="text-white font-semibold">{form.email}</span> adresine giriş bilgileriniz gönderildi.
            </p>
            <p className="text-gray-500 text-sm mb-8">Panel erişiminiz hemen aktif, şimdi giriş yapabilirsiniz.</p>
            <a
              href="https://medya.gerasonline.com"
              className="btn-primary inline-block px-10 py-4 rounded-xl text-white font-bold text-base"
            >
              Panele Giriş Yap →
            </a>
          </div>
        )}

        {/* Alt bilgi */}
        {step < 3 && (
          <p className="text-center text-xs text-gray-700 mt-6">
            Zaten üye misiniz?{" "}
            <a href="https://medya.gerasonline.com" className="text-gold-500 hover:text-gold-400 transition-colors">
              Giriş yapın →
            </a>
          </p>
        )}

      </div>
    </main>
  );
}
