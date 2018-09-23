// 'use strict';
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
sumSource(2, 8); 
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
// var newObj = {
//         x: 20,
//         y: 20,
//         z: 30,
//         k: 23,
//         p: 13
// }
function convert(object){
        for(var key in object){
                if(typeof object[key] ===  "object"){
                        for(var keyIn in object[key]){
                                object[keyIn] = object[key][keyIn];
                        }   
                        delete object[key];
                }
        }
}
convert(obj);
console.log(obj);


console.log('Задча 2');
// Написать методы push, pop, splice, split самостоятельно. Их функциональность должна соответствовать стандартным методам массивов.

console.log('Задча 2 push');
function myPush(item){
        this [this.length] = item;
        return item;
}
var list = [0,4,8,2];
list.myPush = myPush;
console.log(list.myPush(9));

console.log('Задча 2 pop');
function myPop(){
        var item = this[this.length-1];
        delete this [this.length-1] ;
        return item;
}
list.myPop = myPop;
console.log(list.myPop());

console.log('Задча 2 split');

console.log('Задча 2 splice');

console.log('Задча 3');
// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый,
//  который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта
// assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }

var obj1 = {
        x: 10
}
var obj2 = {
        x: 20,
        y: 30
}
var obj;
console.log(Object.assign(obj1,obj2));