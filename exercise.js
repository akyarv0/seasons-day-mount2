// // const num = Math.floor(Math.random () * 11)
// // console.log(num);
// // console.log(2.718281828459045**2.3);

// //? *****İN CLASS FUNCTİONS 31.01.2024****//

// selamla();
// //!hoisted function
// function selamla() {
//   console.log("Selam");
// }
// selamla();
// //!parametreli function: selamVer(selam,kişi) içerisindeki parametreleri function içine yazılır.
// function selamVer(selam, kisi) {
//   console.log(`${kisi} ${selam} `);
// }
// // selamVer("Ahmet", "Günaydın");

// function carp(num1, num2) {
//   // console.log(num1*num2)
//   // return num1*num2 olması gereken yazım bu
//   const result = num1 * num2;
//   return result;
// }
// // const sonuc = carp(3,6)
// // console.log(sonuc);//burada sonuc undefined çıkr çünkü function içinde return edilmedi.

// carp(2 * 5); // result içerde return edildi çalışır.

// //? **** FUNCTİON EXPRESSİON****//

// const yazdir = function (msg) {
//   msg = prompt("isminiz");
//   console.log(`  SELAM ${msg} `);
// };
// // yazdir();
// const usAl = function(taban,us){
//     return taban**us
// }
// const us = usAl(3,4)
// console.log(us);
// const ogrenciler = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]
// function ogrenciAra(ogrenciAdi) {
//     let sayac = 0;
//     for (let ogrenci of ogrenciler) {
//         if (ogrenci === ogrenciAdi) {
//             sayac++;
//         }
//     }
//     if (sayac === 0) {
//         return "öğrenci bulunamadı";
//     } else {
//         return ogrenciAdi + " isimli öğrenciden " + sayac + " adet bulunmaktadır.";
//     }
// }
// console.log(ogrenciAra("kemal"));//öğrenci bulunamadı exercise.js:57

// console.log(ogrenciAra("Ahmet"));// öğrenci bulunamadı.
// console.log(ogrenciAra("ahmet"));// ahmet isimli öğrenciden 2 adet bulunmaktadır.


// function hesaplaBiletFiyati(toplamKoltukSayisi, satisaCikanKoltukSayisi, baslangicFiyati, zamOrani) {
//     // Biletlerin yarısı satılana kadar olan kısmın toplam maliyeti
//     const ilkKisimMaliyet = satisaCikanKoltukSayisi * baslangicFiyati;

//     // Kalan koltuk sayısı
//     const kalanKoltukSayisi = toplamKoltukSayisi - satisaCikanKoltukSayisi;

//     // Kalan koltuklara yapılacak zam miktarı
//     const zamMiktari = zamOrani / 100;

//     // Kalan koltuklardaki her biletin fiyatını hesapla
//     for (let i = 0; i < kalanKoltukSayisi; i++) {
//         baslangicFiyati += baslangicFiyati * zamMiktari;
//     }

//     // Toplam maliyeti hesapla
//     const toplamMaliyet = ilkKisimMaliyet + (kalanKoltukSayisi * baslangicFiyati);

//     return toplamMaliyet / toplamKoltukSayisi;
// }

// // Örnek kullanım
// const toplamKoltukSayisi = 120;
// const satisaCikanKoltukSayisi = Math.ceil(toplamKoltukSayisi / 2); // Biletlerin yarısı satılana kadar olan kısmı al
// const baslangicFiyati = 1000;
// const zamOrani = 0.5;

// const biletFiyati = hesaplaBiletFiyati(toplamKoltukSayisi, satisaCikanKoltukSayisi, baslangicFiyati, zamOrani);

// console.log("Her bir biletin fiyatı:", biletFiyati.toFixed(2), "TL");
// function ucakBiletFiyatlariHesapla(baslangicFiyati, koltukSayisi, yuzdeArtis) {
//   let toplamGelir = 0;
//   let mevcutFiyat = baslangicFiyati;
//   let satilanKoltuk = 0;

//   // İlk yarıyı doldurana kadar sabit fiyattan satış yap
//   for (satilanKoltuk; satilanKoltuk < koltukSayisi / 2; satilanKoltuk++) {
//     toplamGelir += mevcutFiyat;
//   }

//   // Kalan koltuklar için fiyat artışını uygula
//   for (satilanKoltuk; satilanKoltuk < koltukSayisi; satilanKoltuk++) {
//     toplamGelir += mevcutFiyat;
//     mevcutFiyat += mevcutFiyat * yuzdeArtis / 100;
//   }

//   return toplamGelir;
// }

// const toplamGelir = ucakBiletFiyatlariHesapla(1000, 120, 0.5);
// console.log("Toplam gelir: " + toplamGelir + " TL");

// function biletFiyatlariniVeToplamGeliriHesapla(baslangicFiyati, koltukSayisi, artisOrani) {
//   let kalanKoltukSayisi = koltukSayisi;
//   let anlikFiyat = baslangicFiyati;
//   let toplamGelir = 0;
//   let biletFiyatlari = [];

//   // İlk yarısını sabit fiyattan sat
//   for (let i = 0; i < koltukSayisi / 2; i++) {
//     biletFiyatlari.push(anlikFiyat);
//     toplamGelir += anlikFiyat;
//     kalanKoltukSayisi--;
//   }

//   // Kalan koltukları fiyat artışı ile sat
//   while (kalanKoltukSayisi > 0) {
//     anlikFiyat = anlikFiyat + (anlikFiyat * artisOrani / 100);
//     biletFiyatlari.push(anlikFiyat);
//     toplamGelir += anlikFiyat;
//     kalanKoltukSayisi--;
//   }

//   // Bilet fiyatlarını ve toplam geliri konsola yazdır
//   console.log("Bilet Fiyatları: ", biletFiyatlari);
//   console.log("Toplam Gelir: " + toplamGelir + " TL");

//   return { biletFiyatlari, toplamGelir };
// }

// // Fonksiyonu çağır
// biletFiyatlariniVeToplamGeliriHesapla(1000, 120, 1);
