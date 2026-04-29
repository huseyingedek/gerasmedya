-- Reklam Metinleri Seed
-- Tablo: articles (@@map), id: autoincrement (verilmiyor)

INSERT INTO articles ("courseSlug", title, duration, "isTemplate", "order", content, "createdAt", "updatedAt") VALUES

-- =============================================
-- E-TİCARET (5 metin)
-- =============================================

('reklam-metinleri', 'E-ticaret — Sepet Terk Retargeting', '', false, 10,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"E-ticaret"},{"type":"tone","text":"Aciliyet"},{"type":"copy","text":"Bir şeyleri unuttun gibi görünüyor.\n\nSepetindeki ürünler hâlâ sende — ama stok garantisi vermiyoruz. 847 kişi şu an aynı ürüne bakıyor."},{"type":"why","text":"Sahiplik hissi (sepetindeki ürünler hâlâ sende) + spesifik sosyal kanıt rakamı (847 — yuvarlak sayıdan daha inandırıcı) + belirsiz stok tehdidi. Üç tetikleyici tek mesajda, biri bile tek başına tıklama üretir."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'E-ticaret — Yeni Müşteri Kazanma', '', false, 11,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"E-ticaret"},{"type":"tone","text":"Sosyal Kanıt"},{"type":"copy","text":"37.000''den fazla müşteri yanılıyor olamaz.\n\nİlk siparişinde %15 indirim + ücretsiz iade. Risk yok, pişmanlık yok."},{"type":"why","text":"Büyük ama inanılır sosyal kanıt + risk eliminasyonu (ücretsiz iade) + çift negatif yapı (risk yok, pişmanlık yok) beyin üzerinde pozitif daha güçlü etki bırakır. İlk alışveriş bariyerini kırmak için tasarlandı."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'E-ticaret — Flash Sale FOMO', '', false, 12,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"E-ticaret"},{"type":"tone","text":"FOMO"},{"type":"copy","text":"Bu fiyatı bir daha göremezsiniz.\n\nYıllık bir kez yapıyoruz. Bugün gece 23:59''da bitiyor. Geçen yılki stok 4 saatte tükendi.\n\n👇 Kaçırmadan al"},{"type":"why","text":"Kıtlık (yılda bir kez) + geçmişe dayalı sosyal kanıt (geçen yıl 4 saatte tükendi) + kesin bitiş zamanı. Bu fiyatı bir daha göremezsiniz cümlesi kaybetme korkusunu aktive eder, yuvarlak olmayan 4 saat inanılırlık artırır."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'E-ticaret — Kalite İddiası Google Başlık', '', false, 13,
'[{"type":"platform","text":"Google Ads"},{"type":"format","text":"Başlık (Headline)"},{"type":"sector","text":"E-ticaret"},{"type":"tone","text":"Sosyal Kanıt"},{"type":"copy","text":"Türkiye''nin En Çok İade Edilmeyen Markası"},{"type":"why","text":"Negatif metrik pozitif çerçevede: en çok satan yerine en az iade edilen demek kaliteyi rakamlardan daha güçlü kanıtlar. Rakipler bu iddiayı kopyalayamaz çünkü kendi iade oranlarını açıklamak zorunda kalırlar."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'E-ticaret — Retargeting Kişisel Teklif', '', false, 14,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"E-ticaret"},{"type":"tone","text":"Merak"},{"type":"copy","text":"Bu ürünü neden bu kadar çok inceliyorsun?\n\nBelki tam ihtiyacın olan şey bu. Belki sadece fiyatı bekliyorsun. İşte sana özel: bugüne özel %10 ek indirim."},{"type":"why","text":"Soru ile başlamak dikkat çeker ve empati kurar. Belki fiyatı bekliyorsun itirazı önceden karşılamak direnci kırar. Sana özel kişiselleştirme hissi (kitlesel olsa da) + zamana bağlı teklif aciliyet ekler."}]'::jsonb,
now(), now()),

-- =============================================
-- RESTORAN / KAFE (4 metin)
-- =============================================

('reklam-metinleri', 'Restoran — Yeni Müşteri Merak Çerçevesi', '', false, 20,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Restoran / Kafe"},{"type":"tone","text":"Merak"},{"type":"copy","text":"İstanbul''da her hafta buraya dönen 2.400 kişi ne biliyor ki sen bilmiyorsun?\n\nBir kez gel, anla."},{"type":"why","text":"Merak döngüsü açık bırakılıyor — cevap verilmiyor. Spesifik sosyal kanıt (2.400) + meydan okuma tonu. Bir kez gel, anla kısa ve güçlü son satır; açıklama yapmıyor, merak bırakıyor. Beyin boşluğu doldurmak için harekete geçer."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Restoran — Rezervasyon Kıtlığı', '', false, 21,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Restoran / Kafe"},{"type":"tone","text":"Aciliyet"},{"type":"copy","text":"Bu hafta sonu için sadece 6 masa kaldı.\n\nHer Cuma aynı pişmanlığı yaşayan müşterilerimiz artık Salı''dan ayırıyor. Sen de öğren."},{"type":"why","text":"Kıtlık (6 masa) + davranışsal sosyal kanıt: diğerlerinin nasıl davrandığını göstermek, direktif vermekten daha etkili. Sen de öğren ince bir kibir taşır — merak açar, değer sinyali verir."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Restoran — Yemek Kalitesi Sosyal Kanıt', '', false, 22,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Restoran / Kafe"},{"type":"tone","text":"Sosyal Kanıt"},{"type":"copy","text":"Anneannenizin mutfağından çıkmış gibi — ama 200 kişilik kapasiteyle.\n\nHer gün taze, her gün aynı lezzet. Google''da 4.8 yıldız, 1.200+ yorum."},{"type":"why","text":"Nostalji tetikleyicisi (anneannenin mutfağı) duygu bağı kurar + ölçek güvencesi (200 kişi = profesyonel ama lezzet sabit). 4.8 yıldız (5 değil) daha inandırıcı — mükemmellik şüphe uyandırır."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Restoran — Özel An Hikaye', '', false, 23,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Restoran / Kafe"},{"type":"tone","text":"Hikaye"},{"type":"copy","text":"Geçen ay bir müşterimiz burada evlenme teklifi etti. Bir ay önce sadece akşam yemeği için gelmişti.\n\nBazı mekanlar sadece yemek yedirir. Bazıları anı yaratır."},{"type":"why","text":"Micro-hikaye ile duygusal bağ kurulur + fark yaratma konumlandırması (yemek vs. anı). İkinci paragraf marka vaadini tek cümlede özetler. Müşteriyi ürün değil, deneyim için ikna eder."}]'::jsonb,
now(), now()),

-- =============================================
-- GÜZELLİK SALONU (5 metin)
-- =============================================

('reklam-metinleri', 'Güzellik Salonu — Sonuç Neden Farklı?', '', false, 30,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Güzellik Salonu"},{"type":"tone","text":"Merak"},{"type":"copy","text":"Saçınız için harcadığınız para her ay aynı — ama sonuç neden her ay farklı?\n\nÇünkü ürün değil, teknik önemli. İlk randevuda farkı hissedin."},{"type":"why","text":"Müşterinin içindeki soru işaretini sesli söylemek güçlü empati bağı kurar. Problemi tanımlamak = çözümü sunmak kadar etkili. Ürün değil teknik rakiplerden farklılaşma iddiasıdır, savunmaya gerek bırakmadan uzmanlık sinyali verir."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Güzellik Salonu — İptal Fırsatı Retargeting', '', false, 31,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Güzellik Salonu"},{"type":"tone","text":"FOMO"},{"type":"copy","text":"Bu hafta 3 randevu iptal oldu. Normalde dolu olan slotlar şu an açık.\n\nBiliyoruz, tesadüf değil — sizi bekliyorduk."},{"type":"why","text":"İptal = kıtlıktan gelen fırsat çerçevesi (negatifi pozitife çevirmek). Sizi bekliyorduk kişiselleştirme hissi verir, kitlesel mesaj gibi hissettirmez. Kıtlık + kişiselleştirme bir arada dönüşümü artırır."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Güzellik Salonu — Fiyat İtirazı Kırma', '', false, 32,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Güzellik Salonu"},{"type":"tone","text":"Fayda Odaklı"},{"type":"copy","text":"Ucuz oje ile kalıcı oje arasındaki fark sadece fiyat değil.\n\n2 hafta sonra tekrar salona gitmek zorunda kalmamak, ellerine bakıp gülümsemek, o toplantıda masaya emin elleri koymak.\n\nFiyat değil, yatırım."},{"type":"why","text":"Somut senaryo anlatımı fiyatı soyutlaştırır. O toplantıda masaya emin elleri koymak duygusal fayda + statü tetikleyicisi — müşteri ürün değil, kendine duyduğu güveni satın alır. Son satır reframing yapar: masraf → yatırım."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Güzellik Salonu — Düzenli Müşteri Sosyal Kanıt', '', false, 33,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Güzellik Salonu"},{"type":"tone","text":"Sosyal Kanıt"},{"type":"copy","text":"Müşterilerimizin %78''i ilk randevudan sonra düzenli bize geliyor.\n\nÇünkü bir kez gerçekten iyi bakılmış cilt, eskiye dönmek istemez. Biz bunu biliyoruz."},{"type":"why","text":"Spesifik oran (%78 — yuvarlak değil, inandırıcı) + mekanizma açıklaması müşteriye neden sorusunun cevabını verir. Biz bunu biliyoruz kısa ama güçlü uzmanlık iddiası."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Güzellik Salonu — Sezon Kampanyası', '', false, 34,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Güzellik Salonu"},{"type":"tone","text":"Aciliyet"},{"type":"copy","text":"Yeni sezonda yeni sen.\n\nBu ay ilk randevuya gelenlere saç bakımı hediye. Kapasite 20 kişiyle sınırlı — 11 yer kaldı."},{"type":"why","text":"Yeni sezonda yeni sen kimlik dönüşümü vaadi + hediye = algılanan değer artışı. Spesifik kalan yer sayısı (11 — yuvarlak olmayan rakam daha gerçekçi) kıtlığa inanılırlık katar."}]'::jsonb,
now(), now()),

-- =============================================
-- GAYRİMENKUL (4 metin)
-- =============================================

('reklam-metinleri', 'Gayrimenkul — Yatırımcı Veriye Dayalı', '', false, 40,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Gayrimenkul"},{"type":"tone","text":"Rakam / Veri"},{"type":"copy","text":"Bu bölgede son 18 ayda ortalama m² fiyatı %34 arttı.\n\nSatın aldığınız gün kazanmaya başladığınız bir mülk. Stok tükeniyor, fiyat artmaya devam ediyor."},{"type":"why","text":"Spesifik veri (18 ay, %34) yatırımcı kitlesinin dilini konuşur — duygusal değil rasyonel karar tetikler. Satın aldığınız gün kazanıyorsunuz çerçevesi satın almayı erteleme maliyetini somutlaştırır."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Gayrimenkul — İlk Ev Kira Acısı', '', false, 41,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Gayrimenkul"},{"type":"tone","text":"Hikaye"},{"type":"copy","text":"Kirada 8 yıl. Her yıl zam, her yıl acaba çıkarılır mıyım kaygısı.\n\nArtık olmak zorunda değilsiniz. Aynı aylık ödemeyle kendi evinizde yaşamanın yolunu bulalım."},{"type":"why","text":"8 yıl spesifik süre derin empati kurar — herkesin yaşadığı hikaye. Kaygıyı sesli söylemek tanınma hissi verir. Aynı aylık ödemeyle finansal itirazı önceden kırar."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Gayrimenkul — Lüks Segment Statü', '', false, 42,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Gayrimenkul"},{"type":"tone","text":"Fayda Odaklı"},{"type":"copy","text":"Bazı evler sadece yaşanacak yer değildir.\n\nKimlerle komşu olduğunuz, sabah hangi manzarayla uyandığınız, misafirlerinizin kapıdan girişte ne hissettiği — bunlar detay değil, hayat kalitesi."},{"type":"why","text":"Lüks segmentte ürünü soyutlaştırmak çalışır — özellik listesi değil, his satılır. Kimlerle komşu olduğunuz statü tetikleyicisi ince ama güçlü. Misafir bakışı sosyal kimlik doğrulaması sağlar."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Gayrimenkul — Sahibinden Hızlı Satış', '', false, 43,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Gayrimenkul"},{"type":"tone","text":"Merak"},{"type":"copy","text":"Sahibinden, aracısız, liste fiyatının altında.\n\nNeden? Çünkü hızlı karar verecek doğru alıcıyı arıyoruz. Siz misiniz?"},{"type":"why","text":"Üçlü avantaj hızlı okunur + Neden? sorusu merak tetikler ve hemen cevap verilir (şeffaflık = güven). Son satırdaki soru okuyucuyu aktif konuma geçirir — pasif izleyici değil, potansiyel kahraman olur."}]'::jsonb,
now(), now()),

-- =============================================
-- SAĞLIK (4 metin)
-- =============================================

('reklam-metinleri', 'Sağlık — Diş Kliniği Erken Kontrol', '', false, 50,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Sağlık"},{"type":"tone","text":"Merak"},{"type":"copy","text":"Dişlerinizi son 2 yılda kontrol ettirdiniz mi?\n\nÇoğu diş sorunu erken fark edilirse 15 dakikada çözülür. Geç kalırsa 5 seans sürer.\n\nSeçim sizin."},{"type":"why","text":"Soru ile öz değerlendirme tetiklemek suçlamadan farkındalık yaratır. 15 dakika vs. 5 seans maliyet karşılaştırması somut ve korkutucu. Seçim sizin güç verme (autonomy) — baskı hissettirmeden karar verir gibi gösterir."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Sağlık — Spor Salonu Kimlik Dönüşümü', '', false, 51,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Sağlık"},{"type":"tone","text":"Fayda Odaklı"},{"type":"copy","text":"6 ay sonra kendinize bakacaksınız.\n\nO an nasıl hissetmek istiyorsunuz?\n\nBiz sadece spor salonu değiliz — 90 günde hayat alışkanlığı kuran bir sistem."},{"type":"why","text":"Gelecek benlik vizyonu psikolojik olarak en güçlü motivasyon kaynağıdır (self-discrepancy theory). Sistem kelimesi rastgele egzersizden üstün algılanır — disiplin gerektirmez, süreç otomatik çalışır hissi verir."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Sağlık — Psikoloji / Terapi İlk Adım', '', false, 52,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Sağlık"},{"type":"tone","text":"Hikaye"},{"type":"copy","text":"Her şey yolunda görünüyor ama içinizden bir şey eksik.\n\nBunu anlatacak kelime bulamıyor musunuz? Biz dinlemeye hazırız.\n\nİlk seans ücretsiz."},{"type":"why","text":"Tanımlanamayan duyguyu kelimeye dökmek güçlü bağ kurar — kişi bu beni anlatıyor hisseder. Biz dinlemeye hazırız aktif empati. Ücretsiz ilk seans giriş bariyerini düşürür; terapi için en büyük engel ilk adımı atmaktır."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Sağlık — Takviye Google Başlık', '', false, 53,
'[{"type":"platform","text":"Google Ads"},{"type":"format","text":"Başlık (Headline)"},{"type":"sector","text":"Sağlık"},{"type":"tone","text":"Merak"},{"type":"copy","text":"Sürekli Yorgunluğunuzun Nedeni Eksikliğiniz Olabilir"},{"type":"why","text":"Semptom → neden bağlantısı kurmak tıklama oranını artırır. Olabilir kesinlik iddiasından kaçınarak güven verir ve merak açar. Kişi kendi eksikliğini bulmak için tıklar — ürün değil, cevap arıyor."}]'::jsonb,
now(), now()),

-- =============================================
-- EĞİTİM (4 metin)
-- =============================================

('reklam-metinleri', 'Eğitim — Online Kurs Çalışan Kitle', '', false, 60,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Eğitim"},{"type":"tone","text":"Fayda Odaklı"},{"type":"copy","text":"Çalışırken öğrenmek isteyenler için tasarlandı.\n\n15 dakikalık dersler. Telefonda izle. Sertifika al. 6 ayda sektör değiştiren 1.400 mezun.\n\nBir sonraki sen olabilirsin."},{"type":"why","text":"Pratik faydalar kısa liste formatında hızlı okunur. 1.400 mezun + 6 ayda sektör değiştiren spesifikliği hayal kurduruyor. Bir sonraki sen kimlik daveti karar verme anını kişiselleştirir."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Eğitim — İngilizce Kursu Kariyer Acısı', '', false, 61,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Eğitim"},{"type":"tone","text":"FOMO"},{"type":"copy","text":"İngilizceniz yüzünden kaç iş pozisyonuna başvuramadınız?\n\nO sayıyı bir düşünün. Şimdi 90 günde konuşmaya başlayın."},{"type":"why","text":"Acı noktasını sayısal hale getirmek (kaç pozisyon) kişiyi kendi cevabını üretmeye iter — beyin acıyı hisseder. Soru yanıtsız bırakılır; bu belirsizlik harekete geçirir. 90 gün kesin ve ulaşılabilir süre vaadi güven verir."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Eğitim — Sürücü Kursu Yerel Baskınlık', '', false, 62,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Eğitim"},{"type":"tone","text":"Sosyal Kanıt"},{"type":"copy","text":"İlimizde her 3 kişiden 1''i bizden ehliyet aldı.\n\nNeden? Çünkü sınavda ne çıkacağını önceden biliyoruz. Geçen yıl başarı oranımız %91."},{"type":"why","text":"Yerel baskınlık iddiası güçlü sosyal kanıt. Neden? sorusunu kendin cevaplamak güvenilirlik artırır. %91 başarı oranı (yüzde yüz değil) daha inandırıcı — mükemmellik şüphe uyandırır."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Eğitim — Çocuk Eğitimi Veli Kaygısı', '', false, 63,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Eğitim"},{"type":"tone","text":"Fayda Odaklı"},{"type":"copy","text":"Çocuğunuzun anlamıyorum demesinin nedeni zeka değil, yöntem.\n\nDoğru yöntemle 8 haftada fark yaratıyoruz. 200''den fazla veli bunu yaşadı."},{"type":"why","text":"Zeka değil, yöntem velinin en derin kaygısını (çocuğum akıllı mı?) rahatlatır ve suçluluk hissini kaldırır. 8 hafta somut ve kısa süre. 200 veli sosyal kanıtı ebeveyn kitlesinde güçlüdür — benzer biri onayladıysa güvenilirdir."}]'::jsonb,
now(), now()),

-- =============================================
-- TEKNOLOJİ / SAAS (4 metin)
-- =============================================

('reklam-metinleri', 'Teknoloji — SaaS Zaman Tasarrufu', '', false, 70,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Teknoloji"},{"type":"tone","text":"Rakam / Veri"},{"type":"copy","text":"Müşterilerimiz ortalama haftada 6 saat kazanıyor.\n\nYılda 312 saat. O saatleri ne yapacağınız size kalmış.\n\n14 gün ücretsiz, kredi kartı gerekmez."},{"type":"why","text":"Soyut zaman tasarrufu önce haftalık (küçük) sonra yıllık (büyük — 312 saat = 13 tam gün) gösterilir: anchoring etkisi. O saatleri ne yapacağınız size kalmış özgürlük hissi verir. Kredi kartı gerekmemesi en büyük SaaS giriş bariyerini kaldırır."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Teknoloji — Muhasebe Yazılımı KOBİ', '', false, 71,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Teknoloji"},{"type":"tone","text":"Fayda Odaklı"},{"type":"copy","text":"Beyninizi muhasebe için kullanmayı bırakın.\n\nVergi döneminde 3 gün uğraştığınız işi 40 dakikada bitirin. 12.000+ esnaf kullanıyor."},{"type":"why","text":"Beyninizi muhasebe için kullanmayı bırakın güçlü açılış — zihinsel enerji tasarrufu saat tasarrufundan daha değerli hissettirilebilir. 3 gün → 40 dakika somut ve dramatik karşılaştırma. 12.000 esnaf sektöre özel sosyal kanıt."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Teknoloji — Siber Güvenlik B2B LinkedIn', '', false, 72,
'[{"type":"platform","text":"LinkedIn Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Teknoloji"},{"type":"tone","text":"Sosyal Kanıt"},{"type":"copy","text":"KOBİ''lerin %60''ı siber saldırıdan sonra 6 ay içinde kapanıyor.\n\nSiz bu istatistiğin içinde olmak istemiyorsunuz. Biz de istemiyoruz.\n\nÜcretsiz risk analizi için formu doldurun."},{"type":"why","text":"Korku istatistiği B2B''de çalışır — karar vericiler riski rakamla görünce harekete geçer. Biz de istemiyoruz ortak çıkar çerçevesi: satıcı değil, ortak pozisyonu. Düşük taahhütlü CTA (sadece form) sürtünmeyi azaltır."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Teknoloji — E-ticaret Altyapısı Google Başlık', '', false, 73,
'[{"type":"platform","text":"Google Ads"},{"type":"format","text":"Başlık (Headline)"},{"type":"sector","text":"Teknoloji"},{"type":"tone","text":"Fayda Odaklı"},{"type":"copy","text":"Siteniz Hızlanırsa Satışınız Artar | Ücretsiz Test"},{"type":"why","text":"Neden-sonuç zinciri tek başlıkta: hız → satış. Rakip başlıklar genelde özellik listeler, bu sonucu satar. Ücretsiz Test CTA tıklama bariyerini sıfıra düşürür."}]'::jsonb,
now(), now()),

-- =============================================
-- HİZMET (4 metin)
-- =============================================

('reklam-metinleri', 'Hizmet — Temizlik Şirketi Duyusal Detay', '', false, 80,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Hizmet"},{"type":"tone","text":"Fayda Odaklı"},{"type":"copy","text":"Eve geldiğinizde her şey temiz, düzenli ve mis gibi koksun istiyorsanız:\n\nBiz sizin için buradayız. 2 saatte ev temizliği, güvenilir ekip, sigortalı hizmet.\n\nİlk temizlikte %20 indirim."},{"type":"why","text":"Mis gibi koksun olfaktif imgelem yaratır — koku duyusu hayal ettirmek görseldan daha güçlü tepki üretir. Sigortalı hizmet hizmet sektöründe en büyük direnci kırar. Giriş teklifi (indirim) ilk denemede sürtünmeyi düşürür."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Hizmet — Avukatlık Önleyici Çerçeve', '', false, 81,
'[{"type":"platform","text":"LinkedIn Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Hizmet"},{"type":"tone","text":"Merak"},{"type":"copy","text":"Sözleşmenizde ne yazıyor gerçekten?\n\nÇoğu iş anlaşmazlığı önlenebilirdi. İmzalamadan önce 1 saatlik hukuki inceleme — sonradan 1 yıl dava sürecinden iyidir."},{"type":"why","text":"Güçlü soru açılışı belirsizlik yaratır ve okumaya zorlar. 1 saat vs. 1 yıl dramatik maliyet karşılaştırması. Önleyici çerçeve hukuki hizmetleri reaktif değil proaktif gösterir — daha kolay satılır."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Hizmet — Nakliyat Güven ve Empati', '', false, 82,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Hizmet"},{"type":"tone","text":"Sosyal Kanıt"},{"type":"copy","text":"Taşınmak stresin ta kendisi — ama olmak zorunda değil.\n\nEşyalarınıza kendi eşyalarımız gibi davranıyoruz. 4.000+ mutlu aile, İstanbul geneli tek aramalık hizmet."},{"type":"why","text":"Acıyı kabul etmek (stresin ta kendisi) empati kurar — reklamın müşteriyle aynı tarafta durması güven üretir. Kendi eşyalarımız gibi güçlü sahiplenme metaforu, özenle gibi genel ifadelerden çok daha ikna edicidir."}]'::jsonb,
now(), now()),

('reklam-metinleri', 'Hizmet — Fotoğrafçı An Kaybı Çerçevesi', '', false, 83,
'[{"type":"platform","text":"Meta Ads"},{"type":"format","text":"Ana Metin (Primary)"},{"type":"sector","text":"Hizmet"},{"type":"tone","text":"FOMO"},{"type":"copy","text":"O an bir daha gelmeyecek.\n\nDüğününüz, yıl dönümünüz, bebek haberiniz — bunları nasıl hatırlamak istediğiniz size kalmış.\n\nUnutulmaz anlar için şimdi randevu alın."},{"type":"why","text":"Kayıp çerçevesi en güçlü motivasyon kaynağıdır (loss aversion). Anlam yüklü an listesi özdeşleşmeyi tetikler. Nasıl hatırlamak istediğiniz size kalmış özgürlük verirken sorumluluk hissettirir. Ürün değil, kalıcı his satılıyor."}]'::jsonb,
now(), now());
