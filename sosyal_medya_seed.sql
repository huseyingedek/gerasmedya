-- 1. Eski reklam metinlerini sil
DELETE FROM articles WHERE "courseSlug" = 'reklam-metinleri';

-- 2. Yeni sosyal medya şablonlarını ekle
INSERT INTO articles ("courseSlug", title, duration, "isTemplate", "order", content, "createdAt", "updatedAt") VALUES

-- Instagram Post — E-ticaret
('sosyal-medya', 'E-ticaret — Instagram Post', '', false, 10,
'[{"type":"format","text":"Instagram Post"},{"type":"sector","text":"E-ticaret"},{"type":"copy","text":"✨ [Ürün adı] ile tanış.\n\n[Ürünün tek cümle faydası — ne işe yarıyor, hayatı nasıl kolaylaştırıyor?]\n\nBugün sipariş ver, [X] günde kapında. 📦\n\n👇 Bio''daki linkten hemen al\n\n#[sektör] #[şehir] #[ürün kategorisi] #onlineshopping"},{"type":"tip","text":"Yeni ürün lansmanında veya kampanya dönemlerinde kullan. [Ürünün tek cümle faydası] kısmını özelleştirirken müşterinin kazancını yaz — ürünün özelliğini değil. Örn: zaman kazandırıyor, para biriktiriyor, hayatını kolaylaştırıyor."}]'::jsonb,
now(), now()),

-- Instagram Hikaye — Güzellik Salonu
('sosyal-medya', 'Güzellik Salonu — Instagram Hikaye', '', false, 20,
'[{"type":"format","text":"Instagram Hikaye"},{"type":"sector","text":"Güzellik Salonu"},{"type":"copy","text":"Soru: Saçını en son ne zaman şımartttın? 💇‍♀️\n\n[Salon adı] bu hafta müsait!\n\nRandevu için DM at 👆"},{"type":"tip","text":"Hikayede soru sormak etkileşimi 3 kat artırıyor. Cuma veya Pazartesi sabahı paylaş — hafta sonu randevuları veya yeni hafta başlangıcı için ideal. Anket çıkartması da ekleyebilirsin: Randevu aldın mı? Evet / Henüz değil"}]'::jsonb,
now(), now()),

-- Reels Hook — Restoran
('sosyal-medya', 'Restoran — Reels Hook', '', false, 30,
'[{"type":"format","text":"Reels / TikTok Hook"},{"type":"sector","text":"Restoran / Kafe"},{"type":"copy","text":"[Şehir]''de [yemek adı] yiyebileceğin en iyi yer burası 🤫\n\n[Adres veya konum etiketi]\n\nGeldin mi? 👇 Yoruma yaz"},{"type":"tip","text":"İlk 3 saniye her şey. Şehir adı + yemek adı + gizem kelimesi (en iyi, sır, kimsenin bilmediği) izlenme süresini uzatır. Video boyunca yemeğin hazırlanışını veya tabak sunumunu göster. Yorum sorusu etkileşimi patlatır."}]'::jsonb,
now(), now()),

-- WhatsApp — Hizmet
('sosyal-medya', 'Hizmet — WhatsApp Takip Mesajı', '', false, 40,
'[{"type":"format","text":"WhatsApp Mesajı"},{"type":"sector","text":"Hizmet"},{"type":"copy","text":"Merhaba [İsim] 👋\n\nGeçen [gün] [hizmet] hakkında konuşmuştuk. Aklınızda kaldıysa ve soru sormak isterseniz buradayım.\n\nHazır olduğunuzda yazabilirsiniz, acele yok 🙂"},{"type":"tip","text":"Bu mesajı görüşmeden 2-3 gün sonra gönder. Baskı hissettirme — kapı açık bırak. Acele yok demek paradoks olarak dönüş oranını artırıyor çünkü müşteri satılmak istemez, kendi kararını vermek ister."}]'::jsonb,
now(), now()),

-- Bio Şablonu — Genel
('sosyal-medya', 'Genel — Instagram Bio Şablonu', '', false, 50,
'[{"type":"format","text":"Bio Şablonu"},{"type":"sector","text":"Genel"},{"type":"copy","text":"[Ne yapıyorsun — tek cümle] 📍[Şehir]\n\n✅ [Müşteriye fayda 1]\n✅ [Müşteriye fayda 2]\n✅ [Müşteriye fayda 3]\n\n👇 [Ne yapmasını istiyorsun — randevu al / sipariş ver / bilgi al]\n[Link]"},{"type":"tip","text":"Bio''da kim olduğunu değil, müşterine ne kazandırdığını yaz. Yanlış: Kuaför | Doğru: 10 yılda 5.000+ saç dönüşümü. Fayda maddelerini müşterinin ağzından yaz — ben değil sen kullan. Örn: Saçın 3 haftaya kadar canlı kalır."}]'::jsonb,
now(), now()),

-- Yorum Yanıtı — Genel
('sosyal-medya', 'Genel — Olumlu Yorum Yanıtı', '', false, 60,
'[{"type":"format","text":"Yorum Yanıtı"},{"type":"sector","text":"Genel"},{"type":"copy","text":"[İsim], teşekkürler! 🙏 [Ürün/hizmet]den memnun kalmanız bizi çok mutlu etti. Sizi tekrar görmek isteriz 😊"},{"type":"tip","text":"Her yoruma isimle cevap ver — algoritma aktif hesabı öne çıkarır, müşteri ise değer gördüğünü hisseder. Cevabı kısa tut, samimi ol. Robotic teşekkür yorumları (Güzel yorumunuz için teşekkürler!) sıfır etki bırakır."}]'::jsonb,
now(), now());
