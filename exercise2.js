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

// if (!isNaN(year)) {
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
// let sayi = 0;
// let toplam = 0;

// do {
//   toplam += sayi;

//   sayi+=2;
// } while (sayi <= 5);
// console.log(toplam);

// sayHi();
// function sayHi(){
//   console.log("Hi");
// }

// sayHi();

// function trian(num) {
//   if (num === 1) return 1;
//   return num + trian(num-1);
// }
// trian(num)
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
//   console.log(`New price ${price-=price*0.05} TL'dir`);//herkese yüzde 5 indirim yapılıyor.

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


// Pratik 1 - Kullanıcıdan bir sayı isteyelim. Bu sayının tek mi çift mi olduğunu console'da yazdıralım.
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

// Pratik 2 - Kullanıcıdan 1 ile 7 arasında bir sayı girmesini isteyelim. Kullanıcı farklı bir sayı girerse 1-7 arasında sayı girmesi gerektiği hatırlatıp yeniden sayı girmesini isteyelim. 1-7 arasında sayı girildiğinde ise haftanın kaçıncı gününe denk geliyorsa bunu console'da yazdıralım. (1- Pazartesi, 7- Pazar)

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
   
// const bilet = 120
// let sum = 0
// let fiyat = 1000
// for(i=1; i<=bilet; i++){
//     if(i<61){
//         sum += fiyat
//         console.log(i, fiyat);
//     } else {
//         fiyat = fiyat * 1.01
//         console.log(i, Math.round(fiyat));
//         sum += fiyat
//     }
// }
// const toplam = Math.round(sum)
// console.log(`Uçak biletlerinden elde edilen gelir : ${toplam} TL`);


let str = "Hello world"
console.log((str.split("")));




const numbers = [1, 2, 3, 4, 5];

// Using reduce() to find the sum
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15




