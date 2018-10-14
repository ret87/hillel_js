'use strict';
console.log('OOP f.prototype and NEW');

        // f.prototype and NEW 
    // Свойство F.prototype
// - Cоздавать объекты можно через функцию конструктор а добавлять определённые ключи-свойства из другого объекта 
// 1. через свойство   this.__proto__ = animal; - внутри самой функции-конструктор
// 2. функции-конструктору ставится свойство prototype; - objChild.prototype = objDad; - таким образом, при создании объекта через new, 
// в его прототип __proto__ записывается ссылка из prototype функции-конструктора.



// - Cоздавать объекты можно через функцию конструктор а добавлять определённые ключи-свойства из другого объекта 
// 1. через свойство   this.__proto__ = animal; - внутри самой функции-конструктор
var animal = {
    eats: true,
    run: true,
    eyes: true
};
function NewAnimal(name, age){
    this.name = name;
    this.age = age;
    this.__proto__ = animal;
}
var dog = new NewAnimal('Simba', 2);
console.log(dog);

// 2. функции-конструктору ставится свойство prototype; - objChild.prototype = objDad; - таким образом, при создании объекта через new, 
// в его прототип __proto__ записывается ссылка из prototype функции-конструктора.
var colors = {
    eyes: 'dark',
    tails: 'black'
}
dog.prototype = colors;
console.log(dog);
