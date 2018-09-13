'use strict';
console.log('Functions');

        // // Функции от дев мозилы
// функция это специальный тип объектов, позволяющий формализовать средствами языка определённую логику поведения и обработки данных;
// можно передавать как аргумент и в качестве резултьтата выдавать другую функцию;
// можно присваивать в качестве значений переменным или свойствам объектов;


    // // Объявление функций
// Функции вида "function declaration" 
// - function name(param) {code;}
// - значения в параметрах изменяются только в самой функции (локально)
// - объекты в параметрах изменяются как локально так и глобально

// Функции вида "function expression"
// - var funct = function (param) {code;}
// - по умолчанию не имеет имени
// - присваивается изначально к var
// - имя функции может использоваться для вызова самой себя;
// - функция может быть условием
// Метод — это функция, которая является свойством объекта

var factorial = function fac(n){
    return (n<2) ? 1 : n* fac(n-1);
}
console.log(factorial(4));

// - функция map получает функцию первым аргументом и массив вторым,
//  выполняет функцию для каждого элемента принятого массива вторым аргументом.

function map(f, a) {
    var result = []; // Create a new Array
    var i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
        return result;
  }
  var f = function(x) {
      return x * x * x; 
  }
  var numbers = [0, 1, 2, 5, 10];
  var cube = map(f,numbers);
  console.log(cube);

    // // Вызовы функций
// - обращаясь к имени функции и к его параметрам - идёт вызов функции
// - к function declaration, можно обращаться до её объявления
// - передавать с пом аргумента можно как объекты, так и функции самих себя 
// - Существуют частые случаи, когда функции необходимо вызывать динамически, или поменять номера аргументов функции, 
// или необходимо вызвать функцию с привязкой к определенному контексту.

// Функция может вызвать саму себя. Например, вот функция рекурсивного вычисления факториала:
function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
      else
      return (n * factorial(n - 1));
}
var a, b, c, d, e;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
d = factorial(4); // d gets the value 24
e = factorial(5); // e gets the value 120


    // // Область видимости функций
// - переменные объявленные вне функции - видны во всех функциях (глобальные);
// - переменные объявленные внутри функции - видны лишь в функции (локальные);
// - переменные объявленные внутри функции, которая находится в другой функции - видны в обеих функциях (в родительской тоже);


    // // Scope и стек функции
// Функция которая может вызывать саму себя - рекруссия.

// Три способа вызова функции:
// 1. по имени функции
function bar(){ console.log('hello') }
bar();
// 2. arguments.callee
// arguments.callee;
// 3. по переменной, которая ссылается на функцию
var foo = function bar(){ console.log('hello') }
foo();

// - Рекруссия - это функция которая вызывает саму себя, похожа на цикл:
function loop(x) {
    if(x<=10) return console.log(x);
    else loop(x+1);
}
loop(0);

// - Каждый рекурсивный вызов может сам вызывает много рекурсивных вызовов:
// получение всех элементов структуры дерева (например, DOM):
// function walkTree(node) {
//     if (node == null) // 
//       return;
//     // что-то делаем с элементами
//     for (var i = 0; i < node.childNodes.length; i++) {
//         walkTree(node.childNodes[i]);
//     }
// }

// - для превращения некоторых рекрусивных алгоритмов в нерекрусивные, используя стек
function func1(i) {
    if (i < 0) return;
    console.log('begin: ' + i);
    func1(i - 1);
    console.log('end: ' + i);
}
func1(5);


    // // Вложенные функции (nested functions) и замыкания (closures)
// - Вложенная функция имеет доступ ко всем инструкциям внешней функции;
// - Вложенная функция формирует замыкания: она может использовать аргументы и переменные внешней функции; 
// - Внешняя функция не может использовать аргументы и переменные вложенной функции.
function addSquares (a, b){
    function square(x){
        return x * x;
    }
    return square(a) + square(b);
}
console.log(addSquares(5,3));

    // // Сохранение переменных
// Память может быть очищена только тогда, когда вложенная функция уже возвратилась и больше не доступна.

    // // Несколько уровней вложенности функций (Multiply-nested functions)
// - функции могут иметь несколько уровней вложенностей
// - при этом порядок вложения напрямую влияет на наследование, зависимости - такой же как и был в обычной вложенной ф-ии
function A(x){
    function B(y){
        function C(z){
        console.log(x+y+z);
        }
        C(3);
    }
    B(4);
}
A(5);
// A не имеет доступ к переменным и аргументам C, т.к. A не имеет доступ к B. Таким образом, C остается приватным только для B.
// НО наоборот - C имеет доступ к аргументам и переменным обоих функций B и A. 

    // // Конфликты имен (Name conflicts)
// Одинаковых имён стоит избегать
// Приорите отдаётся более вложенным функциям
// Вычисления у менее вложенных по сути происходят дважды, сначала получают значения от более вложенных функций, 
// а после, производят уже второе вычисление с готовыми значениями всех вложений.



        // // Замыкания
// - Главная особенность js - это вложенность функций, внутренняя функция имеет доступ ко всем параметрам, переменым и ф-иям внешней.
// - В тоже время внешняя к параметром и функциям внутренней не имеет доступа.
// - Замыкание создаётся, когда внутренняя функция, как-то стала доступной в параметрах вне внешней функции.
function pet(name){
    var getName = function (){
        return name;
    }
    return getName;
}
var myPet = pet('Simba');
console.log(myPet());

// - Вложенные переменные вложенной функции являются безопасными хранилищами для внешних аргументов и переменных
var getCode = (function() {
    var apiCode = '0]Eal(eh&2'; // A code we do not want outsiders to be able to modify...
    return function() {
        return apiCode;
    };
}());
console.log(getCode());