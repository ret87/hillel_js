'use strict';
console.log('Functions');

// // Функции
// Чтобы не повторять один и тот же код во многих местах, придуманы функции. Являются основными «строительными блоками» программы.
// А так же удобно менять в одном месте все участки кода где использована одна и таже функция.

// // Объявление: function name(parametrs) { code } - функция, имя в скобках параметры и далее сам код при вызове функции.
// // Вызов:  name(); - вызов производится по имени функции.
function first() {
    console.log('this is 1st function');
}

first();

// // Локальные переменные
// Переменны var объявленные в функции - видны только внутри функции
function varFunct() {
    var varFunc = console.log('this is var in function');
}
// console.log(varFunc); // так нельзя - будет ошибка
varFunct();
// Блоки if/else, switch, for, while, do..while не влияют на область видимости переменных.
// переменные объявленные в них - видны вне функции и тд.
// Объявляем только один раз - приобретает последнее значение.

// // Внешние переменные (глобальные)
// функция полностью принимает значения внешней переменной объявленной до функции и может влиять на её значение.

var userName = 'Artem';
function userNameFunc(){
    userName = 'Olga';
    console.log(userName);
}
userNameFunc();
console.log(userName);

// // Параметры
// Можно задавать именна параметров и выдавать значения в зависимости от запроса
// Параметры копируются в локальные переменные функции.

var urName = 'Artem';
var urOld = 19;
function functParam(from, text) { // параметры from, text
    from = "  " + from + ", "; // здесь может быть сложный код оформления    
    console.log(from + text);
}
functParam(urName, 'привет!');
functParam(urOld, 'точно?' );


// // Аргументы по умолчанию
// Если ничего не передать в параметр - то аргумент будет по умолчанию undefined 
// на заполнение параметра можно запустить проверку - например сравнением ЕСЛИ и выводом определённого значения при ЕЛСЕ
// или просто поставив  оператор    ||  
// Если выведено будет большее колличество данных, то выведет, только то к-во что дано в параметрах функции

// var urName = prompt('vvedite vashe imja', 'Artem');
var urName = 'Artem ';
// var urOld = prompt('vvedite vash vozrast', 19); 
var urOld = 19; 
function functArg(from, text) { // параметры from, text
    // if(text === undefined){
    //     text = " vvedite text"
    // }
    text = text || ' vvedite text';
    from = from || ' vvedite text';
    console.log(from + text);
}
functArg(urName, ', привет!');
functArg(urName, urOld);
// functArg(urOld);
functArg(urName, ', привет!', 'grlf', 'hfbn');

// // Возврат значения
// return -директива которая используется для возврата значения.
// может находиться в любом месте функции. Как только до неё доходит управление – функция завершается и значение передается обратно.
// можно использовать задавая условия ИФ/ЕЛСЕ. удобно использовать с НЕ РАВНО   "!" .
// return завершает выполнение функции. 
// когда функция не вернула значение или return был без аргументов, считается что она вернула undefined:


// пример с возвращением суммы
function calcF(a, b, c){
    return b*b - 4*a*c;
}
var calc = calcF(2,4,1);
console.log(calc);

// пример с возвращением в разные состояния
function checkAge(age){
    if(age >= 18){
        return true
    }
    // else {
    //     return confirm('roditeli razreshili?')
    // }
}
// var age = prompt('vvedite vash vozvrast', 18);
var age = 19;
if(checkAge(age)) {
    console.log('zahodi smotri');
} else {
    console.log('podrostesh - zaidesh');
}


// // Название функции
// Название должно быть ГЛАГОЛОМ - т.к. функция это действие.
// Функцию называют по действию, что она несёт.
// Одна функция - одно действие, максимум ещё одно под действие, иногда лучше - разделить на 2 функции.
// В функции не должно быть ничего лишнего - только само действие функции (никаких выводов, алертов и т.д.).

// // Итого
// Объявление функции имеет вид:
// function имя(параметры, через, запятую) {
//   код функции
// }

// Передаваемые значения копируются в параметры функции и становятся локальными переменными.
// Параметры функции копируются в её локальные переменные.
// Можно объявить новые локальные переменные при помощи var.

// Значение возвращается оператором return ....
// Вызов return тут же прекращает функцию.
// Если return; вызван без значения, или функция завершилась без return, то её результат равен undefined.

// При обращении к необъявленной переменной функция будет искать внешнюю переменную с таким именем, 
// но лучше, если функция использует только локальные переменные:
// Это делает очевидным общий поток выполнения – что передаётся в функцию и какой получаем результат.
// Это предотвращает возможные конфликты доступа, когда две функции, возможно написанные в разное время или разными людьми, 
// неожиданно друг для друга меняют одну и ту же внешнюю переменную.

// Именование функций:
// Имя функции должно понятно и чётко отражать, что она делает. Увидев её вызов в коде, вы должны тут же понимать, что она делает.
// Функция – это действие, поэтому для имён функций, как правило, используются глаголы.
// Функции являются основными строительными блоками скриптов. 

// // Практика по теории 

// // 1. нужен ли тут ЕЛСЕ?
// function checkAge2(age) {
//     if (age > 18) {
//         return true;
//     } 
//     else {
//         return confirm('Родители разрешили?');
//     }
// }
// console.log(checkAge2(age));

// // 2. Перепишите функцию, используя оператор '?' или '||'

// function checkAge2(age) {
//         return age > 18 || confirm('Родители разрешили?');
//     }
// var age = prompt('vvedite chislo', 19)
// console.log(checkAge2(age));

// function checkAge2(age) {
//     return age > 18 ? true : confirm('Родители разрешили?');
// }
// var age = prompt('vvedite chislo', 19)
// console.log(checkAge2(age));

// // 3.