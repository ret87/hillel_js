'use strict';
console.log('Funstions and scope');

// Функции и области видимости
// arguments - ссылка на все аргументы функции, но в виде массива - псевдомассив (нет методов от массива, но возможны с циклами) 
// Переменная в js - может быть всем что угодно
// проверим чем является переменная - функция, т.е. переменная может быть чем угодно
// переменную sum -которая является функцией, можно использовать как аргумент для другой функции.
// даже если значение у данного аргумента другоей - идёт переименование аргумента.


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
// даже если значение у данного аргумента другоей - идёт переименование аргумента.
console.log(func(10,sum));
