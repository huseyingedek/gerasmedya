"use client";
import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services-data";
import CustomSelect from "@/components/CustomSelect";

const FORMSPREE_ID = "YOUR_FORM_ID"; // ← formspree.io'dan al

const inputClass =
  "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.06] transition-all duration-200 text-sm";

const budgetOptions = [
  { value: "1000-3000", label: "1.000 – 3.000 ₺/ay" },
  { value: "3000-10000", label: "3.000 – 10.000 ₺/ay" },
  { value: "10000-30000", label: "10.000 – 30.000 ₺/ay" },
  { value: "30000+", label: "30.000 ₺+ / ay" },
  { value: "belirsiz", label: "Henüz belirlemedim" },
];

const serviceOptions = [
  ...services.map((s) => ({ value: s.title, label: s.title, icon: s.icon })),
  { value: "Tüm Hizmetler", label: "Tüm Hizmetler (Paket)", icon: "📦" },
];

export default function ContactPageClient() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `🚀 Yeni Talep: ${form.name} — Geras Medya` }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">İletişim</p>
        <h1 className="text-4xl md:text-6xl font-black mb-5">
          Ücretsiz <span className="gradient-text">Keşif Görüşmesi</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          İşletmenizin dijital reklamda nerede durduğunu analiz edip size özel strateji önerisi sunuyoruz.
          Formu doldurun, 24 saat içinde sizi arayalım.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left — Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="gradient-border p-7">
            <h2 className="font-black text-xl mb-4">Görüşmede Neler Konuşuruz?</h2>
            <ul className="space-y-3">
              {[
                "Mevcut dijital reklam durumunuzu analiz ederiz",
                "Rakiplerinizin neler yaptığına bakarız",
                "Size en uygun kanal ve stratejiyi öneririz",
                "Gerçekçi bütçe ve beklenti çerçevesi çizeriz",
                "Tüm sorularınızı yanıtlarız",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="text-gold-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="gradient-border p-7">
            <h2 className="font-black text-lg mb-4">Hizmetlerimiz</h2>
            <div className="space-y-1">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <p className="text-sm font-semibold group-hover:text-gold-400 transition-colors">{s.title}</p>
                    <p className="text-xs text-gray-500">{s.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] space-y-3">
            <h2 className="font-bold text-sm">Bize Ulaşın</h2>
            <a
              href="https://www.instagram.com/gerasmedya"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-xl">📸</span> @gerasmedya
            </a>
            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors"
            >
              <span className="text-xl">💬</span> WhatsApp ile yaz
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="lg:col-span-3">
          <div className="gradient-border p-8 md:p-10">
            {status === "success" ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-5">🎉</div>
                <h2 className="text-2xl font-black mb-2">Talebiniz Alındı!</h2>
                <p className="text-gray-400 mb-6">24 saat içinde size dönüş yapacağız. Teşekkürler!</p>
                <button
                  onClick={() => setStatus(null)}
                  className="text-gold-400 border border-gold-500/30 px-5 py-2.5 rounded-lg text-sm hover:bg-gold-500/10 transition-colors"
                >
                  Yeni mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">Ad Soyad *</label>
                    <input
                      type="text" name="name" required value={form.name}
                      onChange={handleChange} placeholder="Adınız Soyadınız"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">E-posta *</label>
                    <input
                      type="email" name="email" required value={form.email}
                      onChange={handleChange} placeholder="ornek@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">Telefon</label>
                    <input
                      type="tel" name="phone" value={form.phone}
                      onChange={handleChange} placeholder="0532 000 00 00"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">Aylık Reklam Bütçesi</label>
                    <CustomSelect
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      options={budgetOptions}
                      placeholder="Seçiniz..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">İlgilendiğiniz Hizmet</label>
                  <CustomSelect
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    options={serviceOptions}
                    placeholder="Seçiniz..."
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">Mesajınız *</label>
                  <textarea
                    name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="İşletmeniz, sektörünüz ve hedefleriniz hakkında kısaca bilgi verin. Ne zamandır reklam veriyorsunuz? Daha önce ajans ile çalıştınız mı?"
                    className={inputClass + " resize-none"}
                  />
                </div>

                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                    Bir hata oluştu. Lütfen Instagram veya WhatsApp üzerinden ulaşın.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full py-4 rounded-xl text-white font-bold text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" className="opacity-75" />
                      </svg>
                      Gönderiliyor...
                    </span>
                  ) : "Ücretsiz Keşif Görüşmesi Ayarla →"}
                </button>

                <p className="text-center text-gray-600 text-xs">🔒 Bilgileriniz güvende. Spam göndermiyoruz.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
