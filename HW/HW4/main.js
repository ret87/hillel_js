'use strict';
console.log('Home Tasks, Lection 4');

// 1st home task
// - Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];
// - проверить все числа на простоту, и найденные простые числа сохранить в массив B.
// - найти максимальное число и минимальное число.

//Решение 1ой задачи

// var A = [23,1,2,52,5,34,23,6,246,436];
// var B = [];
// for(var i =0; i<A.length; i++){
//     if(A[i]%2==0){ //часов 6 думал как сделать проверку на случайные числа - и метод Эндосфера пробовал и другое - скажи как плз??? 
        // continue;  //сделать случайные числа в случайном диапазоне я могу, а вот именно сам перебор в ПРОСТЫЕ числа у меня НИКАК!
//     } else {
//         B.push(A[i]);
//     }
// }     
// console.log(A);
// console.log(B);

// if(B.length){
//     var max = B[0];
//     var min = B[0];
// } 
// for(i=0;i<B.length;i++){
//     if(B[i]<min) min=B[i];
//     if(B[i]>max) max=B[i];
// }
// console.log('min chislo = ' + min);
// console.log('max chislo = ' + max);



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
// for(var i=iMin; i<=iMax;i++){
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
// var R = [1,5,6,2,4];
// console.log(R);
// for(var i=R.length-1; i>=0;i--){
//     console.log(R[i]);
//     R.push(R[i]);    
// }
// console.log(R);
// R.shift();
// R.shift();
// R.shift();
// R.shift();
// R.shift();
// console.log(R);



    // 5th home task
    // Определить количество элементов в заданном массиве, отличающихся от минимального на 5.

// Решение 5ой задачи
// var R = [1,5,6,2];
// console.log(R);
// var min = R[0];
// for(var i=0; i<R.length; i++){
//     if(R[i]<min) min=R[i];
//     // if(min+5 == R[i]) console.log(1*true);
//     if(min+5 == R[i]) console.log('nomer v massive min+5 = ' + i);
// }
// console.log(min);