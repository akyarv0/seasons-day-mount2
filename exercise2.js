//*******  SEASONS DAY MONTH *******/

// let day = Number(prompt("LÜTFEN GÜNÜ GİRİNİZ"));
// let month = Number(prompt("LÜTFEN AYI GİRİNİZ"));

// if (!(day >= 1 && day <= 31) || !(month >= 1 && month <= 12)) {
//   alert("Invalid month or day. Please enter valid values.");
// } else if (
//   (month === 2 && day >= 21) ||
//   (month > 2 && month < 5) ||
//   (month === 5 && day <= 31)
// ) {
//   alert(`The season for ${day}/${month} is Spring.`);
// } else if (
//   month === 6 ||
//   (month > 6 && month < 9) ||
//   (month === 9 && day <= 21)
// ) {
//   alert(`The season for ${day}/${month} is Summer.`);
// } else if (
//   (month === 9 && day > 21) ||
//   (month > 9 && month < 12) ||
//   (month === 12 && day <= 20)
// ) {
//   alert(`The season for ${day}/${month} is Fall.`);
// } else {
//   alert(`The season for ${day}/${month} is Winter.`);
// }

//******LEAP YEAR******/

// let year = Number(prompt("Yıl giriniz:"));

// if((year == Number)){
//   let isleapYear = ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0)

//   ? alert(`${year} is leap year`)
//   : alert(`${year} is not leap year`);

// }
// else{
//   alert("Please enter number of year")
// }

// let year = Number(prompt("Yıl giriniz:"));

// if (!isNaN(year)) {  // This checks if 'year' is a number
  // Directly use the condition to determine the message for the alert
//   (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
//     ? alert(`${year} is a leap year.`)
//     : alert(`${year} is not a leap year.`);
// } else {
//   alert("Please enter a numeric value for the year.");
// }

//   for (let i =1 ; i<=10; ++i){
// console.log(i);

//   }
// for(let i=1; i<= 10; i+=2){
//   console.log("Veysel")

// }
// for(let i=0; i<= 10; i+=2){
//   console.log("Akyar")
// }

// for (let i = 50; i>=0; i=i-2){
//   console.log(i);

// }
// **** do while örnek***(birden yirmiye kadar tek sayıların toplamı)***//
// let sayi = 1;
// let toplam = 0;

// do {
//   toplam += sayi;

//   sayi+=2;
// } while (sayi <= 20);
// console.log(toplam);

// sayHi();
// function sayHi(){
//   console.log("Hi");
// }

// sayHi();

// (function trian(num) {
//   if (num === 1) return 1;
//   return num + trian(num-1);
// })(3);
//! ******CONDİTİONS ÖRNEKLER ******//
//? İF, ELSE AND SWİTCH CASE //
// Bir
// Textbox tan alınan 500 500₺den büyük fiyatlar için%10 indirim uygulayuygulayanprogramı yapınız.
//? İF ÇÖZÜM 1

// let price = +prompt("Lütfen alışveriş miktarını giriniz: ");
// if(price >= 500) {
//  price=price-(price*0.1);
//  alert(`Ödeyeceğiniz tutar ${price} TL'dir. Yüzde 10 indirim kazandınız.`);
// }
// else {
//   price-=(price*0.05)
//   alert(`Ödeyeceğiniz tutar ${price} TL'dir.`)
// }
// ? TERNARY ÇÖZÜM 2
// price>500 ? console.log(`Yüzde 10 indirim kazandınız. Ödeyeceğiniz tutar= ${price-=price*0.1} TL`) : console.log("indirim kazanamadınız");

// ? SWİTCH CASE ÇÖZÜM 3
// switch(price){
//   case  (price>=1500) :
//      console.log(`New ${price-=price*0.15} TL'dir`);
//     break;
//   case (price>=1000):
//     console.log(`New ${price-=price*0.10} TL'dir`);
//     break;

//   default:
//   console.log(`New price ${price-=price*0.05} TL'dir`);

// }
//!ASAL SAYI ÖRNEĞİ

// function sayi() {
//   let sayi =+prompt("Bir sayı giriniz.");
//   if(sayi%2===0 || sayi%3===0 ){
//     console.log(`Girilen ${sayi} sayısı asal sayı değildir.`);
//     }
//     else if(sayi%5===0){
//       console.log(`Girilen ${sayi} sayısı asal sayı değildir.`);

//     }
//   else{
//     console.log(`Girilen ${sayi} sayısı asal sayıdır.`);
//   }
// }
// sayi()
//? chatgpt çözümü
// function sayi() {
//   let sayi = parseInt(prompt("Bir sayı giriniz."), 10);
//   if (sayi <= 1) {
//     console.log(`Girilen ${sayi} sayısı asal sayı değildir.`);
//   } else {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(sayi); i++) {
//       if (sayi % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(`Girilen ${sayi} sayısı asal sayıdır.`);
//     } else {
//       console.log(`Girilen ${sayi} sayısı asal sayı değildir.`);
//     }
//   }
// }
// sayi();

// function reverseWordsWithoutArray(sentence) {
//     let reversed = "";
//     let wordEnd = sentence.length;
//     let i = sentence.length - 1;

//     while (i >= 0) {
//         if (sentence[i] === ' ' || i === 0) {
//             let wordStart = i === 0 ? 0 : i + 1;
//             reversed += sentence.substring(wordStart, wordEnd) + (i === 0 ? '' : ' ');
//             wordEnd = i;
//         }
//         i--;
//     }

//     return reversed.trim();
// }
// let inputSentence = "Merhaba Codeium kullanıcıları";
// let reversedSentence = reverseWordsWithoutArray(inputSentence);
// console.log(reversedSentence); // Çıktı: "kullanıcıları Codeium Merhaba"

// function reverseWordsWithoutArray(sentence) {
//   const reversedSentence = sentence.split(' ').reverse().join(' ')
//   return reversedSentence
// }

//? *****İN CLASS FUNCTİONS 31.01.2024****//

selamla();
//!hoisted function
function selamla() {
  console.log("Selam");
}
selamla();
//!parametreli function: selamVer(selam,kişi) içerisindeki parametreleri function içine yazılır.
function selamVer(selam, kisi) {
  console.log(`${kisi} ${selam} `);
}
// selamVer("Ahmet", "Günaydın");

function carp(num1, num2) {
  // console.log(num1*num2)
  // return num1*num2 olması gereken yazım bu
  const result = num1 * num2;
  return result;
}
// const sonuc = carp(3,6)
// console.log(sonuc);//burada sonuc undefined çıkr çünkü function içinde return edilmedi.

carp(2 * 5); // result içerde return edildi çalışır.

//? **** FUNCTİON EXPRESSİON****//

const yazdir = function (msg) {
  msg = prompt("isminiz");
  console.log(`  SELAM ${msg} `);
};
// yazdir();
const usAl = function(taban,us){
    return taban**us
}
const us = usAl(3,4)
console.log(us);