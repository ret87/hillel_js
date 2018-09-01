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
//     if(A[i]%2==0){ // часов 6 думал как сделать проверку на случайны числа - и метод Эндосфера пробовал и другое - скажи как???? 
//         continue;
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
// var B = [];
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
// for(var i=iMin; i<=iMax;i++){
//     B.push(A[i]);
// }
// console.log(B);
