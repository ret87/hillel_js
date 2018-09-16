'use strict';
console.log('Funstions and scope');

// Функции и области видимости
// arguments - как псевдомассив.
// - arguments - ссылка на все аргументы функции, но в виде массива - псевдомассив (нет методов от массива, но возможны с циклами) 

// Callback функции (функция как аргумент в функции).
// - Переменная в js - может быть всем что угодно
// - Переменную "sum" -которая является функцией, можно использовать как аргумент для другой функции.
// - Даже если значение у данного аргумента другоей - идёт перенаименование аргумента.
// - Функции, которые передаются, как параметры, называются CALLBACK функциями
// - Кстати переменные для CALLBACK функций будут искаться в себе, а потом уже в первом родителе, 
// если мы CALLBACK объявили в глобальном scope, то и переменные впервую очередь, будут искаться в себе, а потом в глобальном.

// arguments
// arguments - ссылка на все аргументы функции, но в виде массива - псевдомассив (нет методов от массива, но возможны с циклами) 
function f(a,b){
    console.log(arguments);
    // for(var i=0;i<arguments.length;i++){
    //     console.log(arguments[i]);
    //     console.log(arguments[6]);
    // }
    return a + b;
}
// var a = [1,23,3,4,5,6]
// var res = f(2,6)
var res = f(2,6,7,12,9,12,false,{},2,1)
console.log(res);

// callback
// Переменная в js - может быть всем что угодно
function func(a, b){
    console.log(b);
    return a*a
}
console.log(func(10,50));
console.log(func(10,'hi'));
console.log(func(10,[1,2,34,5]));
console.log(func(10,true));
console.log(func(10,false));
// console.log(func(10));

// проверим чем является переменная - функция, т.е. переменная может быть чем угодно
function sum(){
    console.log('sum');
}
sum();
console.log(typeof sum);

// переменную sum -которая является функцией, можно использовать как аргумент для другой функции.
// даже если значение у данного аргумента другоей - идёт перенаименование аргумента.
console.log(func(10,sum));


// Функции, которые передаются, как параметры, называются CALLBACK функциями
function test(a, callback){
    var resault = callback(a, 300);
}
function plus(x,y){
    return x + y;
}
function dif(x,y){
    return x / y;
}
test(10, plus);
test(10, dif);

// 2ой вариант передачи функций в функции
// кстати переменные для CALLBACK функций будут искаться в себе, а потом уже в первом родителе, 
// если мы CALLBACK объявили в глобальном scope, то и переменные впервую очередь, будут искаться в себе, а потом в глобальном.
function test1(a1, b1, callback1){
    return callback1(a1, b1);
}
function plus(x,y){
    return x + y;
}
function dif(x,y){
    return x / y;
}
console.log(test1(10, 5, plus), test1(10, 5, dif));

//
// 