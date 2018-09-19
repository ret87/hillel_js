'use strict';
console.log('Functions');

        // // Именованные функциональные выражения - «Named Function Expression» (сокращённо NFE)
// Создано специально для работы с рекрусией.
// Имя функционального выражения имеет особый смысл. Оно доступно только изнутри самой функции.
// Имя функции Видно только изнутри функции!
// имя NFE нельзя перезаписать
// имя NFE используется для единственной цели – позволить изнутри функции вызвать саму себя.
// обязательное правило именования- через var __ = function f (){};
// Внутреннее имя позволяет функции надёжно обращаться к самой себе, где бы она ни находилась.
// используют так же для защиты - что бы лишний раз к ней не обращались "снаружи"


// синтаксис
var f = function() { /* тело функции */ }; // обычное
var f = function sayHi() { /* тело функции */ }; // именованное

// пример видимости
var f = function sayHi(name) {
    alert( sayHi ); // изнутри функции - видно (выведет код функции)
  };
  
  alert( sayHi ); // снаружи - не видно (ошибка: undefined variable 'sayHi')

// обращение в глобальном к именованной функции
var f = function factorial(n) {
    return n ? n*factorial(n-1) : 1;
};
var g = f;  // скопировали ссылку на функцию-факториал в g
f = null;
alert( g(5) ); // 120, работает!


// Итого
// Если функция задана как Function Expression, ей можно дать имя.
// Оно будет доступно только внутри функции (кроме IE8-).
// Это имя предназначено для надёжного рекурсивного вызова функции, даже если она записана в другую переменную.
// Обратим внимание, что с Function Declaration так поступить нельзя. 
// Такое «специальное» внутреннее имя функции задаётся только в синтаксисе Function Expression.