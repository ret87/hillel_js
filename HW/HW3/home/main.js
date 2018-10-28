'use strict';
console.log('Home Tasks №3.1, №3.2, №3.3 №3.4');

// №3.2 Вводится число. Преобразовать его в другое число, 
// цифры которого будут следовать в обратном порядке по сравнению с введенным числом.

// var a = +prompt('vvedite chislo', 5);
// console.log('Vu vveli ' + a);
// var b = a*Math.floor(Math.random() * 10);
// console.log('Vawe chislo preobrazovalos` v ' + b);
// var c;
// while(a>=b){
//     c= a--;
//     console.log(c);
// }if(c==b);
// while(b>=a){
//     c= b--;
//     console.log(c);
// }if(c==b);


// №3.3 Дано целое число, состоящее из разных цифр. 
// Определить, какая из цифр заданного числа больше, т. е. найти наибольшую цифру числа.

// var n= +prompt('vvedite chislo iz 2h ne povtor cifr', 58);
// console.log(n);
// var c = Math.floor(n/10);
// var b =n-c*10;
// console.log(c);
// console.log(b);
// if(c>b){
//     alert(c);
// } else 
// alert('naibol`waja cifra iz '+ n + ' eto ' + b);
// console.log('naibol`waja cifra iz '+ n + ' eto ' + b);

// №3.4 Отгадать целое число, которое "загадал" компьютер в определенном диапазоне. 
// Использовать генерацию случайного числа Math.random(), диапазон - от 0 до 20. 
// Система должна подсказывать: "холодно" (когда до числа больше 4 значений), "тепло" (2-4 значения), "несите мне азот" (1-2 значения)

// var min = 0;
// var max = 20;
// var c = Math.floor(Math.random() * ((max+1) - min)) + min;
// console.log(c);
// while(a!== c){
//     var a = +prompt('vvedite chislo');
//     switch(a-c) {
//         case (0):
//             alert('юхууу');
//             a=c;
//             break;
//         case (1):
//         case (2):
//         case (-1):
//         case (-2):
//             alert('несите мне азот'); 
//             break;
//         case (3):
//         case (4):
//         case (-3):
//         case (-4):
//             alert('тепло');
//             break;
//         default:
//             alert('холодно');
//             break;
//     }
// }
