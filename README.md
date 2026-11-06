# Ak Karbon — statik site kopyası

Bu depo, **https://www.akmadencilik.com/akkarbon/** bölümünün birebir, statik
(çalışır) bir kopyasıdır. Sayfaların tamamı, tema stilleri, scriptleri,
görselleri ve yazı içerikleri olduğu gibi indirilmiştir; hiçbir içerik/veri
değiştirilmemiştir.

## İçerik

Kopyalanan sayfalar (`akkarbon/` altında, orijinaldeki URL yapısıyla birebir):

| Sayfa | Yol |
|-------|-----|
| Anasayfa | `akkarbon/index.html` |
| Hakkımızda | `akkarbon/hakkimizda/` |
| Sertifikalarımız | `akkarbon/sertifikalarimiz/` |
| İletişim | `akkarbon/iletisim/` |
| Tüm Ürünlerimiz | `akkarbon/tum-urunlerimiz/` |
| Isınma Amaçlı Kömürler | `akkarbon/urun-kategorileri/isinma-amacli-komurler/` |
| Sanayi Amaçlı Kömürler | `akkarbon/urun-kategorileri/sanayi-amacli-komurler/` |
| Portakal / Toz / Fındık / Ceviz / Karpuz Kömür | `akkarbon/urunlerimiz/<urun>/` |
| Petrokok / Metalürjik Kök Kömür | `akkarbon/urunlerimiz/<urun>/` |
| Giresun Tesisi | `akkarbon/giresun-tesisi/` |
| Zonguldak Tesisimiz | `akkarbon/zonguldak-tesisimiz/` |

Kök dizindeki `index.html`, kolaylık olsun diye `akkarbon/` adresine
yönlendirir (klonun bir parçası değildir, dilediğiniz gibi silebilirsiniz).

## Nasıl çalıştırılır

Statik bir sunucu yeterlidir:

```bash
python3 -m http.server 8000
# Tarayıcıda: http://localhost:8000/        (otomatik olarak /akkarbon/ açılır)
```

veya doğrudan `akkarbon/index.html` dosyasını tarayıcıda açabilirsiniz.

## Notlar

- **Harici kaynaklar (CDN):** Orijinal sitede olduğu gibi Google Fonts (Poppins),
  Font Awesome ve Fancybox gibi bazı kaynaklar CDN üzerinden yüklenir. İnternet
  bağlantısı olduğunda birebir orijinali gibi görünür. (Birebir kopya olması için
  bu bağlantılar orijinaldeki haliyle bırakılmıştır.)
- **Site içi bağlantılar** yerel dosyalara göre yeniden yazıldığı için gezinme
  (menüler, butonlar, İletişim/Tüm Ürünlerimiz bağlantıları) kopya içinde çalışır.
- **Orijinaldeki mevcut kusurlar korunmuştur:** Alt bilgi (footer) logosu ve
  anasayfadaki "Tüm Ürünlerimiz" butonundaki ok görseli, orijinal sitede de
  bozuk olan `localhost` / `eaglestheme.com` bağlantılarına işaret eder. Birebir
  kopya istendiği için bunlar **değiştirilmeden** bırakılmıştır.
- Bölüm geçişlerinde içeriğin kayarak belirmesi (AOS animasyonu) orijinaldeki
  davranışın aynısıdır.
