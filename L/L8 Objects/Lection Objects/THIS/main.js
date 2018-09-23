'use strict';
console.log('Objects');

        // THIS 
// Функция в глобал скоупе используемая много раз для разных объектов.
// Для избежения проблемы закорходженности вызова одной функции в глобале через разные объекты - создали ссылку THIS.
// THIS - это ссылка которая всегда будет смотреть на какой-то объект.
// THIS - смотрит на тот объект, где происходит вызов.
// THIS - существует исключительно внутри функции.
// Окружение функции - вызываясь из разных объектов, получаем разное окружение функции.
// Главные правила this:
// 1. В зависимости от того где объявлена this - меняется контекст.
// 2. THIS - всегда смотрит на объект перед точкой, если такого нет, то this обращается в window.


function sumSource(a, b){
        console.log(this);      // показывает какой именно объект в данный момент вызывает эту функцию data или data2
        return a + b + this.x; // выдаст результат относительно того кто и с каким объектом будет её объявлять data.sum(1,2); = 13
}                                                                       //data2.sum(1,2); = 33
var data = {
        x: 10,
        y: 20,
        sum: sumSource
}
var data2 = {
        x: 30,
        sum: sumSource
}
console.log(data.sum(1,2));
console.log(data2.sum(1,2));


// THIS - всегда смотрит на объект перед точкой, если такого нет, то this обращается в window.
// alert();
// prompt();
document.write();
// sumSource(2, 8); // не понял - выдаёт ошибку 
console.log(data.sum === sumSource); // ссылки одинаковы, но контекст у них разный! - обращается к тому месту,где действие выполняется


// Лекционная практика
console.log('Лекционная практика');
console.log('Задча 1');
// Создать объект с такой структурой:
var obj = {
        x: 10,
        y: 20,
        inner: {
                x: 20,
                z: 30
        },
        foo2: {
                k: 23,
                p: 13
        }
}
// Написать функцию convert(obj), который будет хранится в window, он получает аргументом obj. Функция должна вернуть объект:
var newObj = {
//         x: 20,
//         y: 20,
//         z: 30,
//         k: 23,
//         p: 13
}
function convert(object){
        for(var key in object){
                if(typeof object[key] ===  "object"){
                        for(var keyIn in object[key]){
                                object[keyIn] = object[key][keyIn];
                        }   
                        delete object[key];
                }
        }
        return newObj = object;
}
convert(obj);
console.log(newObj);

console.log('Задча 2');
// Написать методы push, pop, splice, split самостоятельно. Их функциональность должна соответствовать стандартным методам массивов.

// list.myPush(); 
// list.mySplit();

console.log('Задча 3');