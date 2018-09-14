'use strict';
console.log('Functions');

// Lection 6 ФУНКЦИИ
// Подпрограмма - программа существующая в программе:
// - Функции;
// - Процедуры; (о них позже)

// Функции: 
// function - декларирование функции
// function имя(параметры/аргументы){что делаем с параметрами}
// вызов созданной функции производится по имени переменной и скобки
// всё что выводится с помощью () - это функция, исключения условия фор, иф, ваил, до ваил.
// return - возвращение функции - окончание действия в самой функции и возвращение готового значения/код после не имеет смысла
// переменные созданные в функции - они не явные, не видны в глобальном коде, а лишь внутри самой функции

// Параметры: 
// - формальные (те которые указаны при написании/описании функции);
// - фактические (те что уже конкретно указаны при вызове функции - обращении к ней);
// формальные параметры принимают значения фактических
// можно передавать как числа, строку, так и массивы, функции, объекты...
function sum (a, b){        // - a, b тут формальные параметры // foo - имя функции
    return a + b;           // - а всё что внутри {} это действие с параметрами
}
console.log(sum(2,3));      // - 2,3 тут фактические параметры

// Создание функции:
// Функция декларирования - Function declaration
// можно обращаться выше чем запись самой функции
declaration();
function declaration (){}
// Функция выражения (вырожение с присвоением) - Function expression
var expression = function (){}



// // Примеры

// function declaration
// выведется как выше так и ниже записи самой функции
foo();
foo();
function foo (){
    console.log('function declaration');
}
foo();
foo();

// так как я не определил параметры - будет андефаинд 
function foo1 (a, b){
    console.log(a, b);
}
foo1();

// формальные параметры принимают значения фактических
function foo2 (a, b){
    console.log(a, b);
}
foo2(5, 2);
// можно передавать как числа, строку, так и массивы, функции, объекты...
foo2('text', [82,2,3,4,5]);
var z = 'hello hello'
foo2('text', z);

// function expression
// bar()  - так нельзя! вызов только после создания самой функции
var bar = function (){
    console.log('function expression');
}
bar()

// возвращение функции
// не явное создание переменной - которую мы не видим в глобальном коде
function sum1 (a, b){
    var res = a + b;
    console.log(res); 
}
sum1(2, 9); 
// return - возвращение функции, без неё код будет работать некоректно
function sum2 (a, b){
    return a + b;
}
console.log(sum2(2, 5)); 
// 
function sum3 (a){
    return a * 10;
}
console.log(sum3(3)+sum2(2,4)); 
// 
function sum4 (a){
    var res = a*3;
    return res;
}
console.log(sum4(5)); 
// вызов функции из самой себя - сначала те что внутренние, потом внешняя 5 и 5 а потом 10 и 200
function sum5 (a, b){
    console.log(a); 
    return a + b;
}
var res = sum5(sum5(5, 5),200);
console.log(res); 
// склеить массивы разной длинны
function concat(a1, a2, a3){
    return a1.concat(a2.concat(a3));
}
var arr = concat([1, 2], [9, 2, 9], [2]);
console.log(arr);
// сохранив в отдельный массив можно вывести далее в перебор через цикл все данные
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
// SOME PRACTICE FOR LECTION 6