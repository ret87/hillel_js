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
function arrays(arr1, arr2){
    var sumArr1 = 0;
    var sumArr2 = 0;
    for(var i=0;i<arr1.length;i++){
        sumArr1 += arr1[i];
    }
    for(var i=0;i<arr2.length;i++){
        sumArr2 += arr2[i];
    }
    if(sumArr1 < sumArr2){
        return bigArray(sumArr2);
    } else {
        return bigArray(sumArr1);
    }
    function bigArray(biggest){
        console.log(biggest);
    }
}
arrays(arr1, arr2);


// 3. Задача
// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. 
// В переменной знак может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной znak.
function doMath(x, znak, y){
    if(znak == '+') return console.log(x + y);
    else if(znak == '-') return console.log(x - y);
    else if(znak == '*') return console.log(x * y);
    else if(znak == '/') return console.log(x / y);
    else if(znak == '%') return console.log(x % y);
    else if(znak == '^') return console.log(x ^ y);
}
doMath(3,'^',3);


// 4. Задача
