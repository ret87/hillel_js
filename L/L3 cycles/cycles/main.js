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

// тоже самое но через for
// CancelLoops:
// for(var x=0;true;x++){
//   console.log('внешний цикл: ' + x);
//   var z=1;
//   for(;true;z++){
//     console.log('внутренний цикл: ' + z);
//     if (x === 9 && z === 9) {
//       break CancelLoops;
//     }
//     else if (z === 9) {
//       break;
//     }
//   }
// }

// "n" пропускает цикл связанный с сумированием на числе 10 по "а"
// var n =0;
// for(var a=1;a<5;a++){
  //   // console.log('a = ' +a);
  //   if (a == 3) {
    //     continue; 
    //   }
    //   n+=a;
    //   console.log('n = ' +n);
    // }
    
    // var i = 0;
    // var n = 0;
    // while (i < 5) {
      //   i++;
      //   if (i == 3) {
        //     continue;
        //   }
        //   n += i;
        //   console.log(n);
        // }
        
        
// "j" делает цикл на уменьшение, паралельно показывая парные значения от исходного показателя, 
// но продолжает показывать крайние цифры пока цикл по "i" ещё действителен, работая до конца цикла "i" 

// checkiandj:
// var j=6;
// var i=0;
// while (i < 4) {
//   // console.log(i);
//     i += 1;
//     checkj:
//       while (j > 4) {
//         // console.log(j);
//         j -= 1;
//         if ((j % 2) != 0) {
//           continue checkj;
//         }
//         console.log(j + " чётное.");
//       }
//       console.log("i = " + i);
//       console.log("j = " + j);
//   }



