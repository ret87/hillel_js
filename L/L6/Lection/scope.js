// 'use strict';
console.log('Functions');

// Области видимости JS SCOPE
// Желательно избегать создания переменных внутри самой функции (неявные переменные) - их стоит создать пустыми до функции
var res;
function sum (a,b){
    res = a + b;
    console.log(res);
    return  res;
}
sum(1,2);
// Есть два вида переменных как и ОБЛАСТИ ВИДИМОСТИ:
// - Глобальные переменные - доступные везде
// создавать можно без var - хотя можно и без, если создано в основном коде
х = 20;
// обращаться можно везде

// - Локальные переменные - видны в текущей области видимости
// определяется функцией - в пределах текущей функции 
var x = 10;
// переменные в функции создавать только через var
// обращаться можно в данной области видимости
// что бы обратиться к глобальной переменной с таким же именем нужно добавить
window.x
// все параметры - относятся только к локальным переменным
// внутренняя функция может использовать параметры своих родителей, но не наоборот!
// важно обращаться из родительской во внутреннюю функцию после объявления всех нужных нам параметров, аргументов и тд...
// внутренняя функция является локальной относительно родительской и не может быть никак вызвана в глобальную ОВ



// теория ОВ и SCOPE в практике

b = 40; // будет видна в глобальной и только в тех локальных где нет своей b
a = 10; // переменная видна как в глобальном, так и в функция - по наследованию
function f1(p1){
    var b = 20; // переменная видна как локальная в Ф1 и она перебивает в локальной ОВ глобальную b
    var c = 80; // будет видно только внутри Ф1 и у детей Ф1 если таковы будут
    console.log('f1 a ' + a);
    console.log('f1 b ' + b);
    console.log('f1 но показать global b (window.b) = ' + window.b);
}
function f2(p2){
    var k = 100; //k - видно в Ф2 и Ф3, так как Ф3 является ребёнком Ф2
    f3('p3');
    console.log('f2 a ' + a);
    console.log('f2 b ' + b);
    // console.log('f2 ' + b); // тут переменная не видна так как она была задана в другом локальном уровне
    function f3(p3){
        console.log('f3 k ' + k);
        console.log('f3 b ' + b);
        // console.log('f3 c ' + c); // выведет ошибку, так как С в Ф3 - которая ребёнок Ф2, но не относится к Ф1, а С объясвлена в Ф1
        // console.log(f3()); // будет замкнутый цикл!
        console.log('f3 param p2 ' + p2); // выведет параметр р2 -т.к. он объявлен глобально и задан в родительской ф-ии, а спрашиваем у дитя
        console.log('f3 param p3 ' + p3); // выведет параметр р3 - так как он объявлен локально у родной ф-ии и спрашиваем его там же 
    }
}
f1();
f2('p2');
console.log('glob a ' + a);
console.log('glob b ' + b);
