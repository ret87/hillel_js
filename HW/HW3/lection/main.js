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
// var a, b, i;
// var sum=0;
// a = +prompt('vvedite chislo A', 1);
// b = +prompt('vvedite chislo B bol`wee A', 5);
// for(i=a;i<=b;i++){
//     // console.log(i);
//     if(i<0){
//         sum =-1*(i*i);
//     }else
//     sum = i*i;
//     console.log(sum);
// }


// 4. Дано числа x, y, data, где data в диапазоне от x до y.
// Вывести все числа от x до y, которые отличаются от data на 5 едениц по значению.

// var x = prompt('vvedite chislo X', 1);
// var y = prompt('vvedite chislo Y, bol`we X', 50);
// var data = prompt('vvedite chislo mejdy X i Y', 25);
// while(x<data){
//     data = data-5;
//     if(data>x){
//         // console.log(data);
//     }    
// }
// while(data<y){
//     data = data+5;
//     if(data<y){
//         console.log(data);
//     }
// }


// 5. Нарисовать фигуру - прямоугольник. 
// Фигура должна строить при помощи символов: *, &nbsp;. Высота и ширина задается переменными n, m с клавиатуры.
//  *************
//  *           *
//  *           *
//  *           *
//  *************


// 5.1
// var n = 20;
// var m = 15;
// var i;
// var j;
// // document.write('*');
// for(i = 1; i <= n; i++){
//     document.write('*');
// }
// document.write('<br />');
// for(i = 1; i <= m; i++){
//     for(j = 1; j <= n; j++){
//         if (j == 1 || j == n) {
//             document.write('*');
//         } else {
//             document.write('&nbsp; ');
//         }
//     }
//     document.write('<br />');
// }
// for(i = 1; i <= n; i++){
//     document.write('*');
// }
// document.write('<br />');


// 5.2
// var n = 20;
// var m = 5;
// var i;
// var sym = '*';
// var separator = '&nbsp; ';
// var fullLine = '';
// var spaceLine = '';

// for(i = 1; i <= n; i++){
//     fullLine += sym;
// } 
// for(i = 1; i <= n; i++){
//     if (i == 1 || i == n){
//         spaceLine += sym;
//     } else {
//         spaceLine += separator;
//     }
// } 
// // document.write(fullLine);
// // document.write('<br/>');
// // document.write(spaceLine);


// document.write(fullLine + '<br/>');
// for (i = 1; i <= m - 2; i++) {
//     document.write(spaceLine + '<br/>');
// }
// document.write(fullLine + '<br/>');


// 5.3
// var w = prompt('vvedite wuriny', 10);
// var h = prompt('vvedite vusoty', 20);
// var x;
// var y;
// for(y = 1; y <= h; y++) {
//     for(x = 1; x <= w; ++x) {
//         if (y == 1 || y == h || x == 1 || x == w) {
//             document.write('* &nbsp;');
//         } else {
//             document.write('&nbsp; &nbsp; ');
//         }
//     }
//     document.write('<br />');
// }