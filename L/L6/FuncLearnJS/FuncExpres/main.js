'use strict';
console.log('Functions');

// // Функциональные выражения
//  Функция это значение.
// Функцию можно скопировать в другую переменную: приравниваем без скобок но вызываем со скобками. переменная становится сама по себе

function hello(){
    console.log('hello');
}
var hi = hello;
hi();
hello();


// Объявление Function Expression
// синтаксис для объявления функции, который показывает, что функция – это всего лишь разновидность значения переменной.
var f = function(name){
    console.log('Hello ' + name);
}
f('Artem');


// // Сравнение с Function Declaration
// «Function Declaration» имеет класический вид объявления
// - function имя(параметры) {...код...}
// Главное отличие - обращаться к функции можно до её создания. таким образом функции можно организовать вместе в 1ом месте

// Function Declaration – функция, объявленная в основном потоке кода.
funcDecl();
function funcDecl(){
    console.log('this is Function Declaration')
}
var fDecl = funcDecl;
fDecl();

// Function Expression – объявление функции в контексте какого-либо выражения, например присваивания.
var fExpress = function(){
    console.log('this is Function Expression')
}
fExpress();


// // Условное объявление функции
// Function Declaration видны только внутри блока, в котором объявлены.
// по этому если нужно использовать функцию внутри выражения с несколькими условиями то работает только Function Expression 

// var age = prompt('skol`ko vam let?');
// var ageOld;
// if(age >= 18){
//     ageOld = function(){
//         console.log('common lets go');
//     }
// } else  {
//     ageOld = function(){
//         console.log('no no no come for us some years old');
//     }
// }
// ageOld();
        

// var age = prompt('skol`ko vam let?');
// var ageOld = (age >= 18) ? 
// function(){console.log('common lets go')}: 
// function(){console.log('no no no come for us some years old');
// } 
// ageOld()
    
// // Анонимные функции
// Функциональное выражение, которое не записывается в переменную, называют анонимной функцией.
// Функции можно использовать как параметры других функций. Даже без объявления переменной.

function ask(quesion, yes, no){
    if(confirm(quesion)) yes()
    else no();
}
ask("вы согласны?",
    function yes(){console.log('soglasen')},
    function yes(){console.log('net')}
);


// // new Function
// ещё один способ создания функции, его особенность - в один рядок: new Function(params, code)
// можно конструировать функцию, код которой неизвестен на момент написания программы, 
// но строка с ним генерируется или подгружается динамически во время её выполнения.

var sum = new Function('a, b', 'return a+b;');
console.log(sum(1,2));




// // Итого
// Функции в JavaScript являются значениями. Их можно присваивать, передавать, создавать в любом месте кода.

// Если функция объявлена в основном потоке кода, то это Function Declaration.
// Если функция создана как часть выражения, то это Function Expression.
// Между этими двумя основными способами создания функций есть следующие различия:

//                                  Function Declaration	                Function Expression
//                                  function name(param) {code}             var func = function(param) {code} 
// Время создания	                До выполнения первой строчки кода.	    Когда управление достигает строки с функцией.
// Можно вызвать до объявления	    Да (т.к. создаётся заранее)	            Нет
// Условное объявление в if	        Не работает	                            Работает

// Если нет явной причины использовать Function Expression – предпочитайте Function Declaration.
// Function Declaration  –  можно вызывать до того, как они объявлены.
// Используйте Function Expression только там, где это действительно нужно и удобно.

