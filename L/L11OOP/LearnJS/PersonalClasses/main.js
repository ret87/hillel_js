'use strict';
console.log('OOP Personal classes');


        // Свои классы на прототипах
    // Обычный конструктор 
// - Как мы ранее уже объявляли через new по стандартным классам

    // Классы через прототип
// - Классы созданные на подобии Object.prototype и т.д.
// - Чтобы объявить свой класс, нужно:
// 1. Объявить функцию-конструктор.
// 2. Записать методы и свойства, нужные всем объектам класса, в prototype.
// В объекте animal будут храниться свойства конкретного экземпляра: name и speed, а общие методы – в прототипе.


console.log('Обычный конструктор');
    // Обычный конструктор - как мы ранее уже объявляли через new по стандартным классам

function Constr (name) {
    this.speed = 0;
    this.name = name;
    this.run = function(speed){
        this.speed += speed;
        console.log(this.name + ' бежит со скоростью ' + this.speed);
    };
    this.time = function(time){
        this.time = 0;
        this.time += time;
        console.log(this.name + ' бежит ' + this.time + ' часов');
    };
    this.stop = function(){
        this.speed = 0;
        console.log(this.name + ' стоит');
    };
}
var cat = new Constr ('simba');
console.log(cat['speed']);
cat.run(3);
cat.time(5);
cat.run(12);
cat.stop();


console.log('Конструктор через prototype');
    // Классы через прототип
// - Классы созданные на подобии Object.prototype и т.д.
// - Чтобы объявить свой класс, нужно:
// 1. Объявить функцию-конструктор.
// 2. Записать методы и свойства, нужные всем объектам класса, в prototype.
// В объекте animal будут храниться свойства конкретного экземпляра: name и speed, а общие методы – в прототипе.
console.log(Object.prototype);
var Data= Number;
console.log(Data.prototype);

// - Чтобы объявить свой класс, нужно:
// 1. Объявить функцию-конструктор.
function Constructor (name){
    this.name = name;
    this.speed = 0;
}

// 2. Записать методы и свойства, нужные всем объектам класса, в prototype.
Constructor.prototype.run = function(speed) {
    this.speed += speed;
    console.log(this.name + ' бежит со скоростью ' + this.speed);
};
Constructor.prototype.stop = function(){
    this.stop = 0;
    console.log(this.name + ' стоит' + this.stop);
};
Constructor.prototype.time = function(time){
    this.time = 0;
    this.time += time;
    console.log(this.name + ' бежит ' + this.time + ' часа' );
};
var simba = new Constructor('Simba');
simba.run(10);
simba.time(2);


console.log('Практика к теории');
// Практика к теории
// Задача №1
console.log('Задача №1');
