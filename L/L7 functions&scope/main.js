'use strict';
console.log('Funstions and scope');

        // Функции и области видимости
// arguments - как псевдомассив.
// - arguments - ссылка на все аргументы функции, но в виде массива - псевдомассив (нет методов от массива, но возможны с циклами) 
// - arguments.callee - ссылка на выполняющуюся функцию -  её можно использовать для задания и чтения статических свойств.

        // Callback функции (функция как аргумент в функции).
// - Переменная в js - может быть всем что угодно
// - Что бы прировнять какую либо переменную к готовой функции - нужно прописать в этой самой функции functio(){ RETURN FUNCTION(){} }
// - Переменную "sum" -которая является функцией, можно использовать как аргумент для другой функции.
// - Даже если значение у данного аргумента другоей - идёт перенаименование аргумента.
// - Функции, которые передаются, как параметры, называются CALLBACK функциями
// - Кстати переменные для CALLBACK функций будут искаться в себе, а потом уже в первом родителе, 
// если мы CALLBACK объявили в глобальном scope, то и переменные впервую очередь, будут искаться в себе, а потом в глобальном.

        // Замыкание Closure
// - Процедура которая описывает как работает память в JS
// - Замыкание - это процесс состояния функции, когда она использует переменные из вышестоящих scope, но не из global scope.    
// - Замыкание - это функция, со всеми доступными ей переменными, но не в global scope.
// - То есть, функция замыкается внутри себя и используется.
// - Параметр в родительской функции, так же является замыканием, при том не важно где ему задают значение.
// - Замыканий может быть несколько
// - debugger; c помощью этой команды можно в браузере рассмотреть много полезной инфы в соурсе.


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

// Ссылка на выполняющуюся функцию arguments.callee -  её можно использовать для задания и чтения статических свойств.
// УСТАРЕВШЕЕ
// function func() {
//    arguments.callee.called++
// }
// func.called = 0;
// func()
// func()
// console.log(func.called) // 2
// 


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


    // Замыкание Closure
// - Процедура которая описывает как работает память в JS
// - Замыкание - это процесс состояния функции, когда она использует переменные из вышестоящих scope, но не из global scope.    
// - Замыкание - это функция, со всеми доступными ей переменными, но не в global scope.
// - То есть, функция замыкается внутри себя и используется.
// - Параметр в родительской функции, так же является замыканием, при том не важно где ему задают значение.
// - Замыканий может быть несколько
// - debugger; c помощью этой команды можно в браузере рассмотреть много полезной инфы в соурсе.
function f1(a){
    var x = 200;
    var y = 10;
    f2();
    function f2(){
        console.log(x,y,a); // замыкание для Ф2 по х,у,а - так как используемые переменные в родительском scope, но не в global
        // debugger;
    }
}
// var y = 10; // замыкания нет, т.к. У - находится в глобальной области видимости, если Y перенести в Ф1 - то будет замыканиe для Ф2
f1(80);


console.log('Пораждающие функции');        

        // // Пораждающие функции 
// Функции, которые что либо возвращают в другую функцию 
// Пораждающие функции - те которые что либо возвращают  и порождают (factory - популярное название для подобных функций)
// Варианты создания порождающих функций: 
// - Анонимные функции с использованием замыкания (создали переменную и внутри кода её используем)
// - Возвращение другой функции по имени (мы обращаемся к другой функции по её имени - она может быть создана где угодно)
// Удобно использовать для параметрического определения данной функции - пораждающей, т.е. в зависимости от условий входящих параметров
// можем вернуть разные функции


// - Анонимные функции с использованием замыкания
function factoryAnon(){
    var z = 19; 
    // // - анонимные функции с использованием замыкания 
    return function () {
        console.log(z); //создали переменную и внутри кода её используем
    }
}
var funcAnon = factoryAnon();
funcAnon();


// - Возвращение другой функции по имени
function factoryName(){
    // - Возвращение другой функции по имени
    return addFunc; //мы обращаемся к другой функции по её имени - она может быть создана где угодно
}
function addFunc(){
    console.log(10);
}
var funcName = factoryName();
funcName(); 
console.log(funcName === addFunc);



function factoryParam(){
    // - Возвращение другой функции по имени
    return funcParam1; //мы обращаемся к другой функции по её имени - она может быть создана где угодно
}
function funcParam1(){
    console.log(12);
}
var funcParam = factoryParam();
funcParam();


// Удобно использовать для параметрического определения данной функции - пораждающей, т.е. в зависимости от условий входящих параметров
// можем вернуть разные функции 

// при таком подходе нет замыкания
// function factoryParamIf(a){
//     if (a){
//         return function (){
//             console.log('If');
//         }
//     } return funcParam1If;
// }
// function funcParam1If(){
//     console.log('not If');
// }
// var funcParamIf = factoryParamIf(2);
// funcParamIf();

// при таком подходе замыкание есть
function factoryParamIf(a){
    if (a){
        return function (){
            console.log('If');
        }
    } return funcParam1If;
    function funcParam1If(){
        console.log('not If');
    }
}
var funcParamIf = factoryParamIf(2);
funcParamIf();




        // // Практическая часть лекции
console.log(' ');        
console.log('Практическая часть лекции');        

//  1. Задача
console.log('Задача №1');        
//  -  Написать функцию которая получает аргументами любое количество массивов. 
// fofoFunction([1, 2, 3], [3,6,3223], [2,8,5,7,457,457,4]). 
// Возвращает супер-массив, который состоит из всех элементов переданных массивов.

var arr = [];
function fofoFunction(){
    for(var i=0;i<arguments.length;i++){
        arr = arr.concat(arguments[i]);
    }
    return console.log(arr);
} 
fofoFunction([1, 2, 3], [3,6,3223], [2,8,5,7,457,457,4]); 


// 2. Задача
console.log('Задача №2');        
// Написать функцию итератор, при каждом последующем обращении будет возвращать next элемент. 
// var step = factory([2, 8, 9, 2, 4]);
//  step(); // 2
//  step(); // 8
//  step(); // 9

function factory(list){
    var count = 0;
    return function(){
        console.log(list[count++]);
    }
}
var step = factory([2, 8, 9, 2, 4]);
step();
step();
step();
step();
step();


// 3. Задача
console.log('Задача №3');        
// Адаптировать итератор из 2 задания под такой функционал: step(callback);, где callback - функция с 1 аргументом.
//  var step = factory([2, 8, 9, 2, 4]);
//  step(sqr); // 4
//  step(sqr); // 64
//  step(sqr); // 81
//  function sqr(x) {
//      return x*x;
//  }


function factory1(list){
    var count = 0;
    return function (callback){
        return callback(list[count++]);
    }
}
var step1 = factory1([2, 8, 9, 2, 4]);
function sqr(x) {
    return x*x;
}
console.log(step1(sqr));
console.log(step1(sqr));
console.log(step1(sqr));


// // 4. Задача
console.log('Задача №4');        
// // Написать функцию getMaxs(args), где args - любое количество массивов. 
// // Функция должна вернуть максимумы всех переданных массивов в виде строки, через разделитель , .
function getMaxs(args){
    var arr2 = [];
    var maxNumb = [];
    for(var i=0;i<arguments.length;i++){
        arr2 = arr2.concat(arguments[i]);
        if(arr2.length){
            var maxArr2 = arr2[0];
        }
        for(var j=0; j<arr2.length;j++){
            if(arr2[j] > maxArr2){
                maxArr2 = arr2[j];
            }
        }
        maxNumb = maxNumb.concat(maxArr2);
        var strMaxArr2 = maxNumb.join(', ')
    }
    console.log(strMaxArr2);
}
getMaxs([1,2,16,3,4],[5,6,7,19,8,9,],[10,11,12,21,13,14]);







// 5. Задача
console.log('Задача №5');        
// Реализовать функцию Some() через Factory(), которая будет возвращать интерфейс для получения массива.
// var Some = Factory([[2, 7], [3, 9, 6], [4], [2, 2, 2], [1]]);
// var struct_1 = Some(); 
// var struct_2 = Some(); 
// var struct_3 = Some(); 
// struct_1(); // [2, 7]
// struct_1(); // [2, 7]
// struct_1(); // [2, 7]
// struct_2(); // [3, 9, 6]
// struct_3(); // [4]