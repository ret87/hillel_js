'use strict';
console.log('Functions');

    // // Практические задания

// 1. Задача
// Написать функцию заполнения двумерного массива. Имя произвольное.
function doubleArray(n, m){
    var A = new Array(n);
    for(var i = 0; i < A.length; i++){
        A[i] = new Array(m);
        for(var j = 0; j < A[i].length; j++) {
            A[i][j] = Math.floor(Math.random()*90 + 10);
        }
    }
    return A;
}
console.log(doubleArray(7,7));
// подумать как задать самому ленгз и самому вбить эти числа
// var n = 7;
// var m = 7;
// var A = new Array(n);
// for(var i = 0; i < A.length; i++){
//     A[i] = new Array(m);
//     for(var j = 0; j < A[i].length; j++) {
//         A[i][j] = Math.floor(Math.random()*90 + 10);
//     }
// }
// console.log(A);

// 2. Задача
// Написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. 
// Тот массив, сумма которого большая - должен вернутся функцией.
var arr1 = [11,12,32,46,75,36,17,78,29]; 
var arr2 = [13,29,13,49,75,36,57,82,98]; 
// function arroys(arr1, arr2){
//     for(var i=0;i<arr1.length;i++){
//         var sumArr1 = 0;
//         sumArr1 += arr1[i];
//     }
//     for(var i=0;i<arr2.length;i++){
//         var sumArr2 = 0;
//         sumArr2 += arr2[i];
//     }
//     if(sumArr1 < simArr2){
//         return arr = sumArr2;
//     }
// }
// arroys();
function arrays(arr1, arr2){
    var sumArr1 = 0;
    for(var i=0;i<arr1.length;i++){
        sumArr1 += arr1[i];
    }
    console.log(sumArr1);
    var sumArr2 = 0;
    for(var i=0;i<arr2.length;i++){
        sumArr2 += arr2[i];
    }
    console.log(sumArr2);
    // if(sumArr1 < sumArr2){
    //     return sumArr2;
    // }
}
arrays(arr1, arr2);