'use strict';
console.log('Home Tasks, Lection 4');

// 1st home task
// - Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];
// - проверить все числа на простоту, и найденные простые числа сохранить в массив B.
// - найти максимальное число и минимальное число.


//Решение 1ой задачи

// var A = [];
// var maxA = [0];
// var B = [];
// var resForB = [];
// A.length = prompt('vvedite dlinny masiva', 20);
// for(var i =0; i<A.length; i++){
//     A[i] = Math.floor(Math.random()*500);
// }     
// for(var i =0; i<A.length; i++){
//     if(A[i]>maxA) maxA=A[i];
// }     
// nextPrime:
// for (var i = 2; i <= maxA; i++) {
//     for (var j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }
//     resForB.push(i);
// }
// for(var i=0;i<A.length;i++){
//     if (resForB.indexOf(A[i]) !== -1) {
//         B.push(A[i]);
//     }
// }
// console.log(A);
// console.log(B);


    // 2nd home task
    // Создать массив A = [23,1,2,52,5,34,23,6,246,436]; 
    // Элементы массива между min -- max записать в массив B. 

// Решение 2ой задачи

// var A = [23,1,2,52,5,34,23,6,246,436];
// var min = A[0];
// var max = A[0];
// for(var i=0; i<A.length;i++){
//     if(A[i]<min) min=A[i];
//     if(A[i]>max) max=A[i];
// }
// console.log(A);
// console.log('min chislo = ' + min);
// console.log('max chislo = ' + max);
// var iMin=0;
// var iMax=0;
// for(var i=0; i<A.length;i++){
//     if(A[i]==min) iMin=i;
//     if(A[i]==max) iMax=i;
// }
// console.log('nomer min chisla v spiske = ' + iMin);
// console.log('nomer max chisla v spiske = ' + iMax);
// var B = [];
// for(var i=iMin+1; i<iMax;i++){
//     B.push(A[i]);
// }
// console.log(B);


    // 3rd home task
    // В массиве A поменять местами min и max. Массив взять из 2го задания

// Решение 3ьей задачи

// var A = [23,1,2,52,5,34,23,6,246,436];
// var min = A[0];
// var max = A[0];
// for(var i=0; i<A.length;i++){
//     if(A[i]<min) min=A[i];
//     if(A[i]>max) max=A[i];
// }
// console.log(A);
// console.log('min chislo = ' + min);
// console.log('max chislo = ' + max);
// var iMin=0;
// var iMax=0;
// for(var i=0; i<A.length;i++){
//     if(A[i]==min) iMin=i;
//     if(A[i]==max) iMax=i;
// }
// console.log('nomer min chisla v spiske = ' + iMin);
// console.log('nomer max chisla v spiske = ' + iMax);
// console.log(A);
// var cash = max;
// A[iMax] = min;
// A[iMin] = cash;
// console.log(A);


    // 4th home task
    // Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. 
    // Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив. 
    // Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться).

// Решение 4ой задачи

// var A = [1,5,6,2,4,2,3,6];
// var n = A.length;
// console.log(A);
// for(var i=A.length-1; i>=0;i--){
//     console.log(A[i]);
//     A.push(A[i]);
// }
// A.splice(0,n);
// console.log(A);


    // 5th home task
    // Определить количество элементов в заданном массиве, отличающихся от минимального на 5.

// Решение 5ой задачи

// var R = [1,5,6,2,6,6,6,6];
// console.log(R);
// var value = 0;
// var min = R[0];
// for(var i=0; i<R.length; i++){
//     if(R[i]<min) min=R[i];
//     if(min+5 == R[i]) {
//         value +=1;
//         console.log('nomer v massive min+5 = ' + i);
//     }
// }
// console.log(min);
// console.log(value);


    // 6th home task
    // Создать массивы А и В. Заполнить случайными числами. Найди все элементы которые повторяются в массивах А и Б. 
    // *Повторяющиеся элементы вырезать. (без использования splice)

// Решение 6ой задачи    
// var n = 20;
// var A = [];
// var B = [];
// var resA = [];
// var resB = [];
// A.length = n;
// B.length = n;
// for(var i=0;i<A.length;i++){
//     A[i]=Math.floor(Math.random()*101);
// }
// console.log(A);
// for(var j=0;j<B.length;j++){
//     B[j]=Math.floor(Math.random()*101);
// }
// console.log(B);
// for(var i=0;i<A.length;i++){
//     if (B.indexOf(A[i]) == -1) {
//         resA.push(A[i]);
//     }
// }
// for(var j=0;j<B.length;j++){
//     if (A.indexOf(B[j]) == -1) {
//         resB.push(B[j]);
//     }
// }
// A=resA;
// B=resB;
// console.log(A);
// console.log(B);