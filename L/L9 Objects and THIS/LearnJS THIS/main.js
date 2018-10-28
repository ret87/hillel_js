'use strict';
console.log('THIS');

        // // Методы у объектов, THIS
// Метод объекта называют свойство-функцию, то есть значения ключа - является функцией
// Можно объявлять просто в функции, а можно создавать отдельно и приравнивать к ключу объекта   object.key = function(...){...};
// This - специальное ключевое слово, которое можно использовать внутри метода, что бы ссылаться на текущий объект
// This - ссылается на объект, вызвавщий метод
// Используя this вместо имени объекта, мы можем использовать один и тот же метод для разных объектов, приравнивание так же не собъёт
// Использование this гарантирует, что функция работает именно с тем объектом, в контексте которого вызвана.
// Через this метод может не только обратиться к любому свойству объекта, но и передать куда-то ссылку на сам объект целиком:
// this можно использовать как параметр для внутренней функции
// Значение this называется контекстом вызова и будет определено в момент вызова функции.
// если this смотрит в глоб - она получает значение window, глобального объекта




// Можно объявлять просто в функции, а можно создавать отдельно и приравнивать к ключу объекта   object.key = function(...){...};
var objectA = {
    x: 10,
    func: sumObj
}
var objectB = {
    x: 25,
    func: sumObj
}

// This - ссылается на объект, вызвавщий метод
function sumObj(a, b){
    return a + b + this.x;
}
console.log(objectA.func(5, 10));
console.log(objectB.func(5, 10));

// Через this метод может не только обратиться к любому свойству объекта, но и передать куда-то ссылку на сам объект целиком
var objectC = {
    nick: 'Charli',
    nameO: function (){
        nameObj(this);
    }
}
function nameObj (name){
    console.log(name.nick);
}
objectC.nameO();

console.log('Задачи к теории')


// Задачи к теории

console.log('Задачa 1');
// Задача №1
var arr = ["a", "b"];
arr.push(function() {
    console.log( this );
})
arr[2](); // "a","b",function


console.log('Задачa 2');
// Задача №2 - создайте калькулятор
// Создайте объект calculator с тремя методами:
// read() запрашивает prompt два значения и сохраняет их как свойства объекта
// sum() возвращает сумму этих двух значений
// mul() возвращает произведение этих двух значений
var calculator = {
    read: function (){
        this.a = +prompt('a?',);
        this.b = +prompt('a?',);
    },
    sum: function(a, b){
        return console.log(this.a + this.b);
    },
    mul: function(a, b){
        return console.log(this.a * this.b);
    }
}
calculator.read();
calculator.sum();
calculator.mul();
console.log(calculator);


console.log('Задачa 3');
// Задача №3 - чейнинг» (chaining)
var ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log( this.step );
        return this;
    }
}
ladder.up().up().down().up().down().showStep(); 
