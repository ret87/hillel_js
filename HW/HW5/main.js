'use strict';
console.log('Home Tasks, Lection 5');

// 1st home task
// В одномерном массиве произвести такую замену: 1 элемент поменять с 2, 3 элемент поменять с 4, 5 элемент поменять с 6 и тд 
// Если массив непарный - последний элемент не трогать.
// было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

//Решение 1ой задачи
// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// console.log(arr);
// if(arr.length%2!==0){
//     for(var i=0;i<arr.length-1;i+=2){
//         var uneven = arr[i];
//         arr[i] = arr[i+1]
//         arr[i+1] = uneven;
//     } 
// } else if (arr.length%2==0){
//     for(var i=0;i<arr.length;i+=2){
//         var uneven = arr[i];
//         arr[i] = arr[i+1]
//         arr[i+1] = uneven;
//     }
// }
// console.log(arr);


// 2nd home task
// В двумерном массиве A размером n на m. Заполнить случайными числами.
// - Найти ряд, где сумма элементов наименьшая
// - Найти ряд, где сумма элементов найбольшая
// - Поменять ряды местами (1 и 2 пункт)


var n = 7;
var m = 7;
var A = new Array(n);
for(var i = 0; i < A.length; i++ ){
    A[i] = new Array(m);
}
for(var i = 0; i < A.length; i++){
    for(var j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random()*90 + 10);
    }
}
console.log(A);