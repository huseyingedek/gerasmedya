import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Güzellik Salonları İçin Meta Ads Rehberi 2026 — Facebook & Instagram Reklam",
  description:
    "Güzellik salonunuz için Facebook ve Instagram reklamlarını nasıl kullanırsınız? Hedef kitle, bütçe, reklam türleri ve Adana güzellik salonlarının gerçek ROAS sonuçları ile kapsamlı rehber.",
  alternates: { canonical: "https://gerasmedya.com/blog/guzellik-salonu-meta-ads-rehberi" },
  openGraph: {
    title: "Güzellik Salonları İçin Meta Ads Rehberi 2026",
    description:
      "Güzellik salonunuz için Facebook ve Instagram reklamlarını nasıl kullanırsınız? Kapsamlı rehber.",
    url: "https://gerasmedya.com/blog/guzellik-salonu-meta-ads-rehberi",
    siteName: "Geras Medya",
    locale: "tr_TR",
    type: "article",
  },
};

export default function GuzellikSalonuBlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Güzellik Salonları İçin Meta Ads Rehberi 2026 — Facebook & Instagram Reklam",
    description:
      "Güzellik salonunuz için Facebook ve Instagram reklamlarını nasıl kullanırsınız? Hedef kitle, bütçe ve ROAS rehberi.",
    author: {
      "@type": "Organization",
      name: "Geras Medya",
      url: "https://gerasmedya.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Geras Medya",
      url: "https://gerasmedya.com",
      logo: {
        "@type": "ImageObject",
        url: "https://gerasmedya.com/logo.png",
      },
    },
    datePublished: "2026-05-01",
    dateModified: "2026-05-06",
    mainEntityOfPage: "https://gerasmedya.com/blog/guzellik-salonu-meta-ads-rehberi",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://gerasmedya.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://gerasmedya.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Güzellik Salonları İçin Meta Ads Rehberi",
        item: "https://gerasmedya.com/blog/guzellik-salonu-meta-ads-rehberi",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* ── BREADCRUMB ── */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-gray-400 transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-500">Güzellik Salonları Meta Ads</span>
          </div>

          {/* ── ARTICLE HEADER ── */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-blue-500/15 text-blue-300 border-blue-500/25">
                Meta Ads
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-purple-500/15 text-purple-300 border-purple-500/25">
                Güzellik & Estetik
              </span>
              <span className="text-xs text-gray-600">· 9 dk okuma</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Güzellik Salonunuz Boş mu Kalıyor?{" "}
              <span className="gradient-text">Facebook ve Instagram Reklamları</span>{" "}
              Her Randevu Defterinizi Dolduracak
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Güzellik salonları için Meta Ads artık bir lüks değil, hayatta kalma meselesi.
              Bu rehberde Adana başta olmak üzere Türkiye genelinde güzellik salonu sahiplerinin
              Facebook ve Instagram reklamlarından nasıl somut randevu ve satış elde ettiğini,
              hangi hataları yaptığını ve nasıl düzelteceğini anlatıyoruz.
            </p>
          </div>

          {/* ── HIGHLIGHT BOX ── */}
          <div className="mb-10 p-6 rounded-2xl border border-gold-500/25 bg-gold-500/5">
            <p className="text-sm font-semibold text-gold-400 mb-2">📊 Gerçek Sonuç</p>
            <p className="text-white font-bold text-lg mb-1">
              Adana&apos;daki bir güzellik salonu, aylık 4.500₺ Meta Ads bütçesiyle 38 yeni randevu ve 4.8x ROAS elde etti.
            </p>
            <p className="text-gray-500 text-sm">
              Doğru hedefleme + doğru reklam formatı + doğru teklif = dolup taşan randevu defteri.
            </p>
          </div>

          {/* ── ARTICLE BODY ── */}
          <article className="prose-custom space-y-12 text-gray-300">

            {/* SECTION 1 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Güzellik Salonu Sahiplerinin %78&apos;i Meta Ads&apos;i Yanlış Kullanıyor
              </h2>
              <p className="leading-relaxed mb-4">
                Instagram&apos;da &quot;Boost Et&quot; butonuna basıp reklam verdiniz. Birkaç beğeni geldi,
                birkaç takipçi arttı — ama randevu defteriniz hâlâ boş. Bu size tanıdık geliyorsa,
                yalnız değilsiniz.
              </p>
              <p className="leading-relaxed mb-4">
                Güzellik salonlarının Meta Ads&apos;te yaptığı en büyük hata: <strong className="text-white">gönderi tanıtmak.</strong>
                Gönderi tanıtmak marka bilinirliği verir, müşteri getirmez. Randevu doldurmak
                istiyorsanız ihtiyacınız olan şey <strong className="text-white">dönüşüm odaklı kampanya</strong> — yani
                doğrudan &quot;randevu al&quot; veya &quot;WhatsApp&apos;tan yaz&quot; aksiyonuna yönlendiren reklam.
              </p>
              <div className="border border-red-500/20 bg-red-500/5 rounded-xl p-5 mt-5">
                <p className="text-red-400 font-semibold text-sm mb-2">❌ Bu hataları yapıyor musunuz?</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• &quot;Boost&quot; butonu ile gönderi tanıtmak</li>
                  <li>• Hedef kitle olarak &quot;Türkiye, 18-65, tüm cinsiyetler&quot; seçmek</li>
                  <li>• Tek bir reklam görseliyle tüm sezonu geçirmeye çalışmak</li>
                  <li>• Meta Pixel&apos;i kurmamak (= kör uçuş yapmak)</li>
                  <li>• Kampanya amacı olarak &quot;Etkileşim&quot; seçmek</li>
                </ul>
              </div>
            </section>

            {/* SECTION 2 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Güzellik Salonu Reklamında Doğru Hedef Kitle Nasıl Belirlenir?
              </h2>
              <p className="leading-relaxed mb-4">
                Güzellik salonu reklamcılığında <strong className="text-white">hedef kitle her şeydir.</strong>
                Yanlış kişiye en mükemmel reklamı gösterin — para çöpe gider. Doğru kişiye
                sıradan bir reklam gösterin — randevu gelir.
              </p>
              <p className="leading-relaxed mb-4">
                Güzellik salonu hedef kitlesi oluştururken şu katmanları kullanın:
              </p>

              <div className="space-y-4 mt-5">
                <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <p className="font-bold text-white mb-2">🎯 1. Demografik Hedefleme (Temel Katman)</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Cinsiyet: Kadın. Yaş: 22-50. Konum: Salonunuzun olduğu il/ilçe +
                    maksimum 15 km. Bu kademe zaten kitlenizi %60 daraltıyor. Güzellik salonları
                    için Adana&apos;da ilçe bazlı hedefleme — Seyhan, Çukurova veya Yüreğir — çok
                    daha verimli sonuç veriyor.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <p className="font-bold text-white mb-2">💎 2. İlgi Alanı Hedefleme (Değer Katmanı)</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Beauty, Skincare, Hair care, Nail art, Wedding — bu ilgi alanlarını seçin.
                    Önemli not: bu listeyi geniş tutun. &quot;Moda ve güzellik&quot; gibi üst kategorileri
                    seçmek yerine spesifik ilgi alanlarını birlikte kullanmak daha keskin bir
                    kitleye ulaştırır.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <p className="font-bold text-white mb-2">🔁 3. Benzer Kitle (Büyüme Katmanı)</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Mevcut müşterilerinizin telefon numaraları veya e-postalarını Meta&apos;ya
                    yükleyin. Meta, bunlara benzeyen kişileri (Lookalike Audience) otomatik bulur.
                    Bu kitle soğuk hedeflemeye göre ortalama 2-3x daha iyi dönüşüm verir.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-gold-500/20 bg-gold-500/5">
                  <p className="font-bold text-gold-400 mb-2">🔥 4. Yeniden Hedefleme (En Değerli Katman)</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Instagram profilinizi ziyaret eden, website&apos;nize gelen veya WhatsApp&apos;ınızı
                    açan kişileri yeniden hedefleyin. Bu kişiler sizinle zaten ilgilenmiş —
                    küçük bir hatırlatma ile randevuya dönüşme oranı %340&apos;a çıkabiliyor.
                    Meta Pixel kurulmadan bu mümkün değil.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Hangi Reklam Formatı Güzellik Salonuna En Çok Randevu Getirir?
              </h2>
              <p className="leading-relaxed mb-5">
                2026 yılında güzellik salonları için Meta Ads&apos;te en iyi performans gösteren
                reklam formatları sırayla şunlar:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-black text-white mb-3">
                    🥇 1. Reels Reklamları — Görünmezden Görünüre
                  </h3>
                  <p className="leading-relaxed mb-3">
                    Instagram Reels, organik erişimin düşmeye devam ettiği bugünde güzellik
                    salonlarının en etkili reklam yüzeyi. Neden? Çünkü insanlar Reels&apos;ı
                    izlemeye alışkın — reklam gibi hissettirmeden geçiyor.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">En iyi içerik formatı:</strong> &quot;Öncesi-Sonrası&quot; dönüşüm videoları.
                    Kirpi kirpik öncesi/sonrası, saç boyası öncesi/sonrası — 15-30 saniye yeterli.
                    Profesyonel çekim gerekmez, telefon kamerası + iyi ışık + gerçek müşteri
                    dönüşümü = viral potansiyeli olan içerik.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white mb-3">
                    🥈 2. Mesajlaşma Reklamları — Direkt Randevu Makinesi
                  </h3>
                  <p className="leading-relaxed mb-3">
                    &quot;WhatsApp&apos;tan Mesaj Gönder&quot; aksiyonlu reklamlar, güzellik salonları için
                    randevu dönüşümünde en yüksek oranı veriyor. Kullanıcı reklamı görüyor,
                    butona basıyor, doğrudan WhatsApp&apos;ınıza düşüyor.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">İpucu:</strong> WhatsApp mesajına otomatik karşılama mesajı ekleyin.
                    &quot;Merhaba! Hangi hizmetimiz hakkında bilgi almak istersiniz?&quot; — Bu küçük detay
                    dönüşüm oranını %40 artırıyor çünkü kullanıcının başlatması gereken konuşmayı
                    siz başlatmış oluyorsunuz.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white mb-3">
                    🥉 3. Lead Generation Reklamları — Randevu Formu
                  </h3>
                  <p className="leading-relaxed">
                    Meta&apos;nın &quot;Müşteri Adayı Oluşturma&quot; kampanya türü, kullanıcının uygulamadan
                    çıkmadan adını, telefon numarasını ve istediği hizmeti doldurduğu bir form
                    gösteriyor. İnternette web siteniz yoksa veya WhatsApp&apos;a yetişemiyorsanız
                    bu format çok işe yarıyor. Günde 10-15 lead toplamak mümkün — önemli olan
                    hızlı geri dönmek.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Güzellik Salonu İçin Meta Ads Bütçesi Ne Olmalı? (2026 Türkiye Rakamları)
              </h2>
              <p className="leading-relaxed mb-5">
                Türkiye güzellik sektöründe 2026 Meta Ads ortalamalarına bakıldığında,
                salonların bütçesini ölçeklendirirken şu referans rakamları kullandığını görüyoruz:
              </p>

              <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/[0.04] border-b border-white/[0.06]">
                      <th className="text-left px-5 py-4 text-gray-400 font-semibold">Bütçe / Ay</th>
                      <th className="text-left px-5 py-4 text-gray-400 font-semibold">Beklenen Erişim</th>
                      <th className="text-left px-5 py-4 text-gray-400 font-semibold">Ort. Randevu</th>
                      <th className="text-left px-5 py-4 text-gray-400 font-semibold">İdeal Aşama</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1.500₺ – 2.500₺", "8.000 – 15.000 kişi", "8-12 randevu", "Başlangıç/Test"],
                      ["2.500₺ – 5.000₺", "15.000 – 35.000 kişi", "18-30 randevu", "Büyüme"],
                      ["5.000₺ – 10.000₺", "35.000 – 80.000 kişi", "35-60 randevu", "Ölçeklendirme"],
                      ["10.000₺+", "80.000+ kişi", "60+ randevu", "Pazar Liderliği"],
                    ].map(([budget, reach, appt, stage], i) => (
                      <tr key={i} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors">
                        <td className="px-5 py-4 font-semibold text-gold-400">{budget}</td>
                        <td className="px-5 py-4 text-gray-400">{reach}</td>
                        <td className="px-5 py-4 text-white font-medium">{appt}</td>
                        <td className="px-5 py-4 text-gray-500">{stage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                * Bu rakamlar Türkiye güzellik sektörü ortalaması olup il ve rekabete göre farklılık gösterir.
                Adana için doğru bütçe tespiti ücretsiz analizimizde belirlenir.
              </p>
            </section>

            {/* SECTION 5 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Güzellik Salonları İçin Meta Ads&apos;te En Çok Dönüşüm Getiren Reklam Metinleri
              </h2>
              <p className="leading-relaxed mb-5">
                Güzellik reklamı yazmak ayrı bir sanattır. Yanlış kelime — kaydırılır, geçilir.
                Doğru kelime — durdurup tıklattırır. İşte güzellik salonlarında test edilmiş,
                yüksek dönüşüm sağlamış reklam metni formülleri:
              </p>

              <div className="space-y-5">
                <div className="p-5 rounded-xl border border-green-500/20 bg-green-500/5">
                  <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">✅ Yüksek Dönüşüm — Aciliyet + Fayda</p>
                  <p className="text-white font-semibold mb-1">&quot;Bu hafta randevu alanlara kirpik tasarımında %20 indirim.&quot;</p>
                  <p className="text-sm text-gray-400">Neden işe yarar: Zaman sınırı + somut fayda + net aksiyon.</p>
                </div>
                <div className="p-5 rounded-xl border border-green-500/20 bg-green-500/5">
                  <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">✅ Yüksek Dönüşüm — Sosyal Kanıt + Merak</p>
                  <p className="text-white font-semibold mb-1">&quot;Bu ay 47 müşterimiz saçlarını değiştirdi. Sıradaki siz misiniz?&quot;</p>
                  <p className="text-sm text-gray-400">Neden işe yarar: Güven inşa eder, merak uyandırır, dahil olma hissi verir.</p>
                </div>
                <div className="p-5 rounded-xl border border-green-500/20 bg-green-500/5">
                  <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">✅ Yüksek Dönüşüm — Öncesi Sonrası Hikaye</p>
                  <p className="text-white font-semibold mb-1">&quot;Aylar önce aynaya bakmaktan kaçıyordu. Şimdi gülümsemesini durduramıyor.&quot;</p>
                  <p className="text-sm text-gray-400">Neden işe yarar: Duygusal bağ kurar, potansiyel müşteri kendini görür.</p>
                </div>
                <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">❌ Düşük Dönüşüm — Genel İfadeler</p>
                  <p className="text-white font-semibold mb-1">&quot;Güzellik salonumuzda profesyonel hizmet veriyoruz.&quot;</p>
                  <p className="text-sm text-gray-400">Neden işe yaramaz: Her salon bunu söylüyor. Farklılaştırmıyor, aksiyon yok.</p>
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Adana Güzellik Salonları İçin Meta Ads: Lokal Avantaj Nasıl Kullanılır?
              </h2>
              <p className="leading-relaxed mb-4">
                Adana, güzellik sektöründe ciddi bir rekabet ortamına sahip. Seyhan ve
                Çukurova ilçelerinde yoğunlaşan güzellik salonları, dijital reklamda çoğunlukla
                aynı kitlelere gidiyor. Bu rekabet ortamında öne çıkmak için
                <strong className="text-white"> lokal hedefleme avantajını</strong> doğru kullanmak şart.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                  <span className="text-2xl flex-shrink-0">🗺️</span>
                  <div>
                    <p className="font-bold text-white mb-1">Mahalle Bazlı Hedefleme</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Adana&apos;da salonunuzun bulunduğu semti + çevresindeki 5-8 km&apos;yi hedefleyin.
                      Mitat Paşa, Reşatbey, Barış, Çukurova gibi yoğun nüfuslu mahallelerde
                      lokal reklamlar genel il hedeflemesine göre 2x daha düşük CPM ile yayınlanıyor.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                  <span className="text-2xl flex-shrink-0">📅</span>
                  <div>
                    <p className="font-bold text-white mb-1">Adana&apos;ya Özel Zamanlama</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Adana&apos;da sıcak yaz aylarında açık hava etkinlikleri, düğün sezonu ve
                      Ramazan öncesi dönem — güzellik salonları için rekorlu dönemler.
                      Bu dönemlerde bütçeyi artırın, reklamları sezon temasıyla güncelleyin.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                  <span className="text-2xl flex-shrink-0">🏆</span>
                  <div>
                    <p className="font-bold text-white mb-1">Adana Rakip Boşluklarını Doldurun</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Meta Reklam Kütüphanesi&apos;nden Adana&apos;daki rakip salonların aktif reklamlarını
                      inceleyin. Hangi hizmetleri reklamını yapmıyorlar? Hangi kitleler boşta?
                      Bu boşluklar sizin için hazır müşteri demek.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Meta Ads&apos;te Güzellik Salonu Reklamı Kurulum Adımları (Başlangıç Rehberi)
              </h2>
              <p className="leading-relaxed mb-5">
                Hiç Meta Ads hesabı açmadıysanız, aşağıdaki adımları sırasıyla uygulayın.
                Eğer hesabınız varsa ama sonuç alamıyorsanız — önce 1. bölümü okuyun.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Meta Business Suite Hesabı Açın",
                    desc: "business.facebook.com adresinden işletme hesabınızı oluşturun. Kişisel hesabınızdan ayrı bir işletme varlığı kurmanız, reklam hesabı ve sayfanızı yönetmek için zorunlu.",
                  },
                  {
                    step: "02",
                    title: "Meta Pixel&apos;i Kurun (En Kritik Adım)",
                    desc: "Web siteniz varsa mutlaka Meta Pixel kurun. Yoksa Instagram&apos;daki etkileşimleri hedefleme için Conversion API&apos;yi aktive edin. Pixel olmadan yeniden hedefleme yapılamaz — bu adımı atlamak bütçenizin %40&apos;ını çöpe atmak demektir.",
                  },
                  {
                    step: "03",
                    title: "İlk Kampanyayı &apos;Mesaj&apos; Hedefiyle Kurun",
                    desc: "Yeni başlıyorsanız en kolay dönüşüm: Mesajlaşma kampanyası. Hedef olarak &apos;WhatsApp mesajları&apos;nı seçin, Adana ilçe hedeflemenizi yapın, kadın 22-45 yaş seçin. Günlük 50-80₺ bütçeyle test edin.",
                  },
                  {
                    step: "04",
                    title: "A/B Testi Yapın",
                    desc: "Minimum 2 farklı görsel veya video ile başlayın. 7 gün sonra hangisi daha düşük CPM ve daha fazla mesaj getiriyor? O reklamın bütçesini artırın, diğerini kapatın. Sezgiyle değil, veriyle karar verin.",
                  },
                  {
                    step: "05",
                    title: "Sonuç Dönemlerini Takip Edin",
                    desc: "Haftalık olarak CPM (bin gösterim başı maliyet), CPC (tıklama başı maliyet) ve mesaj/randevu başı maliyet rakamlarına bakın. Hedef: güzellik sektöründe mesaj başı 25-60₺ arası. Bunun üzerine çıktıysa hedeflemeyi revize edin.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-orange-500/20 border border-gold-500/30 flex items-center justify-center font-black text-gold-400 text-sm">
                      {item.step}
                    </div>
                    <div className="flex-1 pb-5 border-b border-white/[0.05] last:border-0">
                      <h3 className="font-black text-white text-base mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc.replace(/'/g, "&apos;") }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 8 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Güzellik Salonunuz için Meta Ads Sonuçlarını 3 Katına Çıkaran 5 İpucu
              </h2>

              <div className="grid sm:grid-cols-1 gap-4">
                {[
                  {
                    icon: "⭐",
                    title: "Yorumları Reklama Taşıyın",
                    desc: "Google veya Instagram&apos;daki en iyi müşteri yorumunuzu reklam metnine ekleyin. &quot;5 yıldır gidiyorum, her seferinde mükemmel — Ayşe H.&quot; — sosyal kanıt, satın alma kararını dramatik biçimde hızlandırır.",
                  },
                  {
                    icon: "📸",
                    title: "Gerçek Müşteri Görselleri Kullanın",
                    desc: "Stok fotoğraf veya tasarım görseli yerine gerçek müşterinizin öncesi/sonrası fotoğrafı — her zaman daha yüksek tıklanma. İnsanlar gerçeği tanır ve gerçeğe güvenir.",
                  },
                  {
                    icon: "⏰",
                    title: "Müsait Randevu Saatlerini Reklamda Gösterin",
                    desc: "&quot;Bu hafta Salı-Çarşamba sınırlı randevu&quot; metni aciliyet hissi yaratır ve erteleme davranışını kırar. Doluluk algısı = değer algısı.",
                  },
                  {
                    icon: "🔁",
                    title: "Sadık Müşteri Retargeting Kampanyası",
                    desc: "6 ay önce randevu alan ama geri gelmeyen müşterilerinizi &quot;Sizi özledik&quot; kampanyasıyla geri çağırın. Yeni müşteri kazanmak mevcut müşteriyi geri kazanmaktan 5x pahalıdır.",
                  },
                  {
                    icon: "🎁",
                    title: "Kombo Teklif ile Ortalama Sipariş Değerini Artırın",
                    desc: "Kirpik + kaş tasarımı kombo reklamı, tek hizmet reklamından %60 daha yüksek ciro getirir. İnsanlar paket fırsat gördüğünde daha kolay karar verir.",
                  },
                ].map((tip, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-gold-500/20 transition-all duration-200">
                    <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                    <div>
                      <p className="font-bold text-white mb-1">{tip.title}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CONCLUSION */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Sonuç: Güzellik Salonunuzun Randevu Defteri Dolmaya Hazır mı?
              </h2>
              <p className="leading-relaxed mb-4">
                Meta Ads, doğru kurulduğunda güzellik salonları için en güçlü dijital müşteri
                kazanma aracı. Ancak &quot;Boost et&quot; deyip geçmek değil — strateji, hedefleme,
                test ve optimizasyon gerektirir.
              </p>
              <p className="leading-relaxed mb-4">
                Bu rehberi okudunuz — artık teorik olarak nerede durduğunuzu biliyorsunuz.
                Peki pratikte? Şu an reklam hesabınızda para israf ediliyor mu? Doğru kitleye
                mi gidiyorsunuz? Pixel kurulu mu?
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Ücretsiz Adana güzellik salonu Meta Ads analizimizde</strong> mevcut
                durumunuzu değerlendirip size özel strateji önerisi sunuyoruz.
                Taahhütsüz, hemen — randevu defteriniz dolmaya bu gün başlasın.
              </p>
            </section>

          </article>

          {/* ── CTA BOX ── */}
          <div className="mt-14 p-8 md:p-10 rounded-2xl border border-gold-500/25 bg-gold-500/5 text-center">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Güzellik Salonunuz İçin</p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Meta Ads&apos;te Randevu Defterinizi Dolduralım
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Adana güzellik salonları için ücretsiz Meta Ads analizi — rakipleriniz ne yapıyor,
              siz nerede kaybediyorsunuz, nasıl öne geçersiniz?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold"
              >
                Ücretsiz Meta Ads Analizi Al →
              </Link>
              <Link
                href="/adana/meta-ads"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 transition-all duration-200"
              >
                Adana Meta Ads Hizmeti
              </Link>
            </div>
          </div>

          {/* ── RELATED POSTS ── */}
          <div className="mt-14">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-5">İlgili Yazılar</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  slug: "meta-ads-mi-google-ads-mi",
                  tag: "Strateji",
                  tagColor: "bg-gold-500/15 text-gold-400 border-gold-500/25",
                  title: "Meta Ads mı, Google Ads mi? İşletmeniz İçin Hangisi Daha İyi?",
                  readTime: "7 dk",
                  soon: true,
                },
                {
                  slug: "reklam-butcesi-nasil-belirlenir",
                  tag: "Strateji",
                  tagColor: "bg-gold-500/15 text-gold-400 border-gold-500/25",
                  title: "Aylık Reklam Bütçesi Nasıl Belirlenir? Sektöre Göre Referans Rakamlar",
                  readTime: "6 dk",
                  soon: true,
                },
              ].map((post) => (
                <div
                  key={post.slug}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${post.tagColor}`}>
                      {post.tag}
                    </span>
                    <span className="text-[11px] text-gray-600">· {post.readTime}</span>
                    {post.soon && (
                      <span className="text-[10px] text-gray-600 border border-white/[0.08] rounded-full px-2 py-0.5 ml-auto">
                        Yakında
                      </span>
                    )}
                  </div>
                  <p className="font-bold text-sm leading-snug text-gray-300">{post.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── BACK TO BLOG ── */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="text-sm text-gray-500 hover:text-gold-400 transition-colors font-medium"
            >
              ← Blog&apos;a Geri Dön
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
