'use strict';
console.log('OOP NEW');

// Конструктор - собирает объект на основе класса (функции), в примере ниже объект Р собирается на основе параметров функции Person;
// function Person(x,y) {x,y, run};
// p = new Person();

// New - это создание екзепляра класса
// NEW - третье правило поведения THIS:
// * new - всегда создаёт новый объект;
// * new - вызывает функцию к которой его прировняли;
// * new - меняет поведение THIS и заставляет объект смотреть на новый, созданный при помощи new;
function Person(x,y){
    this.x=x;
    this.y=y;
    this.run = function(){};
};
var p = new Person(10, 15);
console.log(p);