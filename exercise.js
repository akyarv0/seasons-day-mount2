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