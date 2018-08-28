'use strict';
console.log('Lection №3 Tasks');


// 1.
// Дано a = 1, b = 15;. Вывести на экран таблицу, которая будет состоять из 2-ух рядков. 
// В 1-ом рядке - нечетные числа: 13579111315, в 2-ом - четные: 2468101214

// var a = 1, b = 15;
// for (var i=a; i<=b;i++){
//     if(i%2==0){
//         console.log('chetnue = ', i);
//         document.write('<td>' +'&nbsp' + '&nbsp' + i + '<br>' + '</td>');
//     }
//     if(i%2!==0){
//         console.log('nechetnue = ', i);
//         document.write('<td>' + i + ' </td>');
//     }
// }

// var a = 1;
// var b = 15;
// var str1;
// var str2;
// str1 =  str2 = '';
// for(var i = a; i <= b; i++){
//     if ( i % 2 == 0 ) {
//         str2 += i;
//     } else {
//         str1 += i;
//     }
// }
// document.write('<table border="2"> <tr><td>' + str1 +'</td></tr>'+
// '<tr><td>' + str2 + '</td></tr></table>');

// что это?
// var i;
// var j;
// var p = 1;
// for(i = 1, j = 1 ; i < 10; p*=i, i+=2, j = i*2 ) {
//     console.log(i, j);
// }
// console.log(p);



// 2. 
// Ввести с клавиатуры числа x, y (заставить пользователя ввести числа).
// Запустить цикл перебора от x до y (вне зависимости от значений)!. Посчитать сумму парных чисел если x > y, непарных если x <= y;

// var x, y, i;
// var sum = 0;
// x = +prompt('vvedite chislo X',);
// y = +prompt('vvedite chislo Y',);
// if(x>y){
//     for(i=y; i<x; i++){
//         console.log('vse chisla ' + i);
//         if (i%2==0){
//             console.log('chetnue chisla ' + i);
//             sum +=i;
//         }
//     }
//     console.log('summa chetnux chisel ' + sum);
// } else if(x<=y) {
//     for(i=x; i<=y; i++){
//         console.log('vse chisla ' + i);
//         if(i%2!==0){
//             console.log('vse ne chetnue chisla ' + i);
//             sum +=i;
//         }
//     }
//     console.log('summa ne chetnux chisel ' + sum);
// }        


// 3. a и b вводятся с клавиатуры (числа). Каждое число от a до b вывести в квадрате с сохранением знака.


