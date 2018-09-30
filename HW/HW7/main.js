'use strict';
console.log('Functions and scope');

// Практика 

// 1. Задача
console.log('Задача №1');        
// Функция должна вернуть массив из центральных элементов переданных массивов.
// Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
// Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4

// var1 - for one array
console.log('Задача №1 var1');        

function midArr(arr){
    var arrMid = [];
    if(arr.length%2 == 0){
        arrMid.push(arr[(arr.length/2 - 1)], arr[(arr.length/2)]);
    } else if (arr.length%2 !== 0){
        arrMid.push(arr[(Math.floor(arr.length/2))]);
    }
    console.log(arrMid);
}
midArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);
midArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// var2 - for any arrays
console.log('Задача №1 var2');       

function midArrays(){
    var arrMid = [];
    for(var i=0; i<arguments.length;i++){
        if(arguments[i].length%2 == 0){
            arrMid.push((arguments[i].length/2), (arguments[i].length/2+1));
        } else if (arguments[i].length%2 !== 0){
            arrMid.push(Math.round(arguments[i].length/2));
        } 
    }
    console.log(arrMid);
}
midArrays([1, 2, 3, 4], [1, 2, 3, 4, 5]);

// 2. Задача
console.log('Задача №2');        
// Написать функцию, которая получает 3 аргумента: два числа и функцию. Произвести вызов переданной ф-ии с двумя аргументами числами.
// doFunction(2, 3, power); в ответе должны получить 8, как 2 в степени 3.

function doFunction(a, b, callback){
    return callback(a, b);    
}
function power(a, b){
    return a ** b;
}
console.log(doFunction(2,3, power));


// 3. Задача 
console.log('Задача №3');        
// Из п.2 реализовать функции sum, div, mul, power
// doFunction(16, -23, mul); // 16*(-23)

console.log('Задача №3 var 1');        
// function doFunction(a, b, callback){
//     return callback (a, b);
// }
function sum(a, b){
    return a + b;
}
console.log(doFunction(2,3, sum));


console.log('Задача №3 var 2');        
// function doFunction(a, b, callback){
//     return callback (a, b);
// }
function div(a, b){
    return a - b;
}
console.log(doFunction(15, 5, div));


console.log('Задача №3 var 3');        
// function doFunction(a, b, callback){
//     return callback (a, b);
// }
function mul(a, b) {
    return a * b;
}
console.log(doFunction(16, -23, mul))


// 4. Задача 
console.log('Задача №4');        
// Из п.2, если количество числовых аргументов равно единице и переданная функция factorial - реализовать расчет факторикала. 
// doFunction(6, factorial);, в ответе поулчаем 6! = 720. // arguments.length и typeof

function doFunction(a, b, callback){
    if (arguments.length = 1 && typeof a || b == "number"){
        return factorial (a);
    } else return callback (a, b);
} 
function power (a, b){
    return a ** b;
}
function factorial (a){
    return a ? a*factorial(a-1) : 1;
}
console.log(doFunction(3, 6, power));
console.log(doFunction(6, factorial));



// // 5. Задача
console.log('Задача №5');        
// Реализовать функцию some() через factory(), которая будет возвращать интерфейс для получения массива.
// var Some = Factory([[2, 7], [3, 9, 6], [4], [2, 2, 2], [1]]);
// var struct_1 = some(); 
// var struct_2 = some(); 
// var struct_3 = some(); 
// struct_1(); // [2, 7]
// struct_1(); // [2, 7]
// struct_1(); // [2, 7]
// struct_2(); // [3, 9, 6]
// struct_3(); // [4]

// // так точно не работает - понимаю что вопрос в условии вложенной ф-ии if STRUCT_1/2/3... и тд к функции SOME
function factory (){
    var array = [];
    return function(){
        for(var i=0; i<arguments.length;i++){
            array = array.concat(arguments[i]);
        }        
        return function(){
            if(struct_1 = some()){
                console.log(array[0]);
            } 
            else if (struct_2 = some()){
                console.log(array[1]);
            }
            // else if (struct_3 = some()){
            //     console.log(array[2]);
            // }
            // else if (struct_3 = some()){
            //     console.log(array[3]);
            // }
            // else if (struct_3 = some()){
            //     console.log(array[4]);
            // }
        }
    }
}

var some = factory([[2, 7], [3, 9, 6], [4], [2, 2, 2], [1]]);
some([[2, 7], [3, 9, 6], [4], [2, 2, 2], [1]]);
var struct_1 = some(); 
struct_1(); 
var struct_2 = some(); 
struct_2(); 
// var struct_3 = some(); 
// struct_3(); 
// var struct_4 = some(); 
// struct_4(); 
// var struct_5 = some(); 
// struct_5(); 