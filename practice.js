//?pratik 1 ------Kullanıcıdan bir sayı isteyelim. Bu sayının tek mi çift mi olduğunu console'da yazdıralım.
//! if ,else
// let sayi = +prompt("Bir sayi giriniz");
// if(sayi%2 === 0){
//     console.log(`Girdiğiniz sayı ${sayi} çifttir!`)

// }
// else{
//     console.log(`girdiğiniz sayi ${sayi} tektir.` )
// }
// //! Ternary yazımı
// sayi%2===0 ? alert("girdiğiniz sayi çifttir!") : alert("girdiğiniz sayı tektir.")

//?Pratik 2 - Kullanıcıdan 1 ile 7 arasında bir sayı girmesini isteyelim. Kullanıcı farklı bir sayı girerse 1-7 arasında sayı girmesi gerektiği hatırlatıp yeniden sayı girmesini isteyelim. 1-7 arasında sayı girildiğinde ise haftanın kaçıncı gününe denk geliyorsa bunu console'da yazdıralım. (1- Pazartesi, 7- Pazar)

// if (!(gun>=1 && gun<=7) ){
//     alert("yanlış sayi girdiniz")
//     }
// else if (gun===1){
//     console.log("1.gün pazartesidir.")

// }
// else if (gun===2){
//     console.log("2.gün salıdır.")

// }   else if (gun===3){
//     console.log("3.gün çarşamba.")

// }   else if (gun===4){
//     console.log("4.gün perşembe.")

// }   else if (gun===5){
//     console.log("5.gün cuma")

// }   else if (gun===6){
//     console.log("6.gün cumartesi.")

// }   else if (gun===7) {
//     console.log("7.gün pazardır.")

// }

// let gun = +prompt("1 ile 7 arasında bir sayı giriniz")

// switch(gun){
//     case (gun===1):
//         console.log("1.gün pazartesidir.");
//         break;
//     case(gun===2):
//     console.log("2.gün salıdır.")
//     break;
// default:
//     console.log("girdiğiniz sayı 1 ile 7 arasında olmalıdır.")
//    }

//?----------Pratik 3 - Kullanıcıdan yaşını ve ehliyete sahip olup olmadığını sorup hem 18+ hem de ehliyetli ise araba kullanabilir mesajını, bunlardan bir eksiklik var ise duruma göre belirleyeceğiniz mesajı console'da yazdıralım

// let ehliyet = prompt("ehliyeti var mı? evet ya da hayır");
// let yas = +prompt("kac yasindasiniz");
// if (ehliyet === "evet" && yas >= 18) {
//   console.log("araba kullanabilirsiniz");
// } else if (ehliyet === "hayır" || yas < 18) {
//   console.log("araba kullanamazsınız");
// } else {
//   console.log("hatalı giriş");
// }

//?Pratik 4 - Kullanıcıdan id ve password isteyelim. Eğer her ikisi de doğru girilirse giriş başarılı mesajını, eğer biri bile eksikse duruma göre belirleyeceğiniz mesajı console'da yazdıralım.

// const id = "kullaniciAdi";
// const password = "Aa12345";

// let idInput = prompt("id giriniz");
// let passwordInput = prompt("password giriniz");
// if (idInput === id && passwordInput === password) {
//   console.log("giriş başarılı");
// } else if (idInput === id && passwordInput !== password) {
//   console.log("password hatalı");
// } else if (idInput !== id && passwordInput === password) {
//   console.log("id hatalı");
// } else {
//   console.log("id ve password hatalı");
// }

//? Pratik 5 - Kullanıcıdan 2 tane sayı girmesini isteyip 4 işlemden hangisi yapmak istediğini soralım. Kullanıcının seçimlerine göre matematiksel sonucu console'da yazdıralım.
// let sayi1 = +prompt("1. sayiyi giriniz");
// let sayi2 = +prompt("2. sayiyi giriniz");

// let islem = +prompt("islemi giriniz");
// let islem1 = "+";
// let islem2 = "-";
// let islem3 = "*";
// let islem4 = "/";

// if (islem === islem1) {
//   console.log(sayi1 + sayi2);
// } else if (islem === islem2) {
//   console.log(sayi1 - sayi2);
// } else if (islem === islem3) {
//   console.log(sayi1 * sayi2);
// } else if (islem === islem4) {
//   console.log(sayi1 / sayi2);
// } else {
//   console.log("hatalı giriş");
// }

//?----- Pratik 6 - Kullanıcıdan ders notunu girmesini isteyip notunu console'a yazdıralım. (0-20 F, 21-40 D, 41 -60 C, 61-80 B, 81-100 A), Kullanıcı 0-100 harici sayı girerse hata mesajı vermeli ve yeni sayı girmesini isteyelim

// let not;

// do {
//   not = +prompt("Notunuzu giriniz:");

//   switch (true) {
//     case not >= 0 && not <= 20:
//       console.log("Dereceniz F'dir.");
//       break;
//     case not >= 21 && not <= 40:
//       console.log("Dereceniz D'dir.");
//       break;
//     case not >= 41 && not <= 60:
//       console.log("Dereceniz C'dir.");
//       break;
//     case not >= 61 && not <= 80:
//       console.log("Dereceniz B'dir.");
//       break;
//     case not >= 81 && not <= 100:
//       console.log("Dereceniz A'dır.");
//       break;
//     default:
//       console.log("Hatalı giriş. Lütfen 0 ile 100 arasında bir sayı giriniz.");
//   }
// } while (not < 0 || not > 100);

//!--------LOOPS--------//

//?---Pratik 7 - 1 ile 10 arasındaki sayılar için çarpım tablosu yazdıralım. (1x1 ile başlayacak 10x10 ile bitecek)
// let tablo;

// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     tablo = i * j;
//     console.log(tablo);
//   }
// }

//? Pratik 8 - Pratik 4'teki login örneğini yapalım ancak kullanıcıya 3 giriş hakkı verelim. Kullanıcı her başarız giriş yaptığında kaç hakkının kaldığını console'a yazdıralım, Eğer hakkı kalmadıysa hakkının tükendiğini belirtip tekrar id password talep etmeyelim.



// let userName ;
// let password2;
// let hak = 3;
// for (let i = 0; i <= 3; i++) {
//     userName = "Ad1234";
//     password2 = "sifre12345";
//   if (userName == false || password2 == false) {
//     console.log("Yanlış giriş yaptınız");
//     hak = hak - i;
//     break;
//     }
//   if(userName==true && password2==true){
//     console.log("giriş başarılı");
//   }
// }

let userName;
let password2;
let hak = 3;

for (let i = 0; i < 3; i++) {
    userName = prompt("Kullanıcı Adı:");
    password2 = prompt("Şifre:");

    if (userName === "Ad1234" && password2 === "sifre12345") {
        console.log("Giriş başarılı");
        break; // doğru giriş yapıldığında döngüden çık
    } else {
        hak--; // yanlış giriş yapıldığında hakkı azalt

        if (hak > 0) {
            console.log(`Yanlış giriş. Kalan hakkınız: ${hak}`);
        } else {
            console.log("Hakkınız tükendi. Tekrar denemek için lütfen bekleyin.");
            break; // hakkı tükenirse döngüden çık
        }
    }
}

