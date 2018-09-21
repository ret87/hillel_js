'use strict';
console.log('Functions');

    // // Практические задания


    // 1. Задача
console.log('Задача 1')
// Написать функцию заполнения двумерного массива. без создания и получения размеров. Имя произвольное.
function doubleArray(row, coll){
    var A = new Array(row);
    for(var i = 0; i < row; i++){
        A[i] = new Array(coll);
        for(var j = 0; j < coll; j++) {
            A[i][j] = Math.floor(Math.random()*90 + 10);
        }
    }
    return A;
}
console.log(doubleArray(4,4));

// 2. Задача
console.log('Задача 2')
// Написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. 
// Тот массив, сумма которого большая - должен вернутся функцией.

function arrays(arr1, arr2){
    var sumArr1 = 0;
    var sumArr2 = 0;
    for(var i=0;i<arr1.length;i++){
        if( typeof (arr1[i]) == "number"){
            sumArr1 += arr1[i];
        }
    }
    for(var i=0;i<arr2.length;i++){
        if(typeof(arr2[i]) == "number"){
            sumArr2 += arr2[i];
        }
    }
    if(sumArr1 < sumArr2){
        return console.log(arr2);
    } else {
        return console.log(arr1);
    }
}
arrays([11,12,32,46,75,36,17,28,'a',29], [13,29,'a',13,49,75,36,57,82,98]);


// 3. Задача
console.log('Задача 3')
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
doMath(6,'/',3);


// 4. Задача
console.log('Задача 4')
// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"
function func(words, delLetters){
    var arrWords = words.split('');
    var words2 = [];
    nextInput:
    for(var i=0; i<arrWords.length; i++){
        var str = arrWords[i];
        for(var j=0; j<delLetters.length; j++){
            if(str == delLetters[j]) continue nextInput;            
        }
        words2.push(str);
    }
    words2 = words2.join('');
    console.log(words2);
}
func("hello world", ['l', 'd']);

// 5. Задача
console.log('Задача 5')
// напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.

//  var input = [1, 2, 3, 4, 5, 6];
//  function isEven(x) { return x % 2 == 0; } // проверяет на четность
//  console.log(filter(input, isEven)); // [2, 4, 6]

function filter(input, callback) {
    var arr = [];
    for(var i=0; i<input.length; i++){
        var x = input[i];
        if( callback(x)){
            arr.push(x);
        }
    }            
    return arr;
}
function isEven(x){ 
    return x % 2 == 0; 
} 
function notEven(x){ 
    return x % 2 !== 0; 
} 
console.log(filter([1,2,3,4,5,6], notEven));
console.log(filter([1,2,3,4,5,6], isEven));
