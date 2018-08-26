'use strict';
console.log('lection 1');


// while 
// var n = 0;
// var x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// console.log(x, n);
// }


// в таком случае нужно запрос на ввод должен быть ранее чем метка, иначе будет ошибка в цикле
// var x=+prompt('enter X', 3);
// outer:
// while(x<=12){
//   x++;
//   console.log(x);
//   if(x >= 9 ) break outer;
// }
// alert('Готово!');


// в этом примере будет прерываться сначала внутренний цикл по метке labelCancelLoops, 
// когда же цифры по внешнему циклу дойдут до 10 прервётся за счёт общего брейка 
// var x = 0;
// var z = 0
// labelCancelLoops: while (true) {
//   console.log("Внешний цикл: " + x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Внутренний цикл: " + z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } 
//     else if (z === 10) {
//       break;
//     }
//   }
// }

