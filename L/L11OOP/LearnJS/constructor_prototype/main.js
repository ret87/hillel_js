'use strict';
console.log('OOP f.prototype and NEW');

        // f.prototype and NEW 

    // Свойство F.prototype
// - Cоздавать объекты можно через функцию конструктор а добавлять определённые ключи-свойства из другого объекта 
// 1. через свойство   this.__proto__ = animal; - внутри самой функции-конструктор
// 2. функции-конструктору ставится свойство prototype; - objChild.prototype = objDad; - таким образом, при создании объекта через new, 
// в его прототип __proto__ записывается ссылка из prototype функции-конструктора.

    // Свойство constructor
// У каждой функции по умолчанию уже есть свойство prototype
// newObj = oldObj.constructor(value) - можно cоздавать однотпные объекты на основе другого объекта, который собирается от фун-констр
// constructor пропадает, после явного описывания значений и свойств объекта, в таких случаях лучше его прописать самому
// Если мы вручную создаём свойства объекта (функции-конструктора)- лучше самому прописать в его свойствах constructor:имяЭтогоОбъкта




console.log('F.prototype');
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


console.log('Свойство constructor');
    // Свойство constructor

// У каждой функции по умолчанию уже есть свойство prototype с ключем constructor: имяФункции;
function Construct(value){
    this.key = value;
    Construct.prototype = {
        constructor: Construct
    };
};
console.log(Construct.prototype);                               // покажет нашу функцию-конструктор, в своих же свойствах = замыкание 
console.log(Object.getOwnPropertyNames(Construct));             // покажет все свойства функции
console.log(Construct.prototype.constructor === Construct);     // подтвердит выше написанное - с прописанным свойством constructor
console.log(NewAnimal.prototype.constructor === NewAnimal);     // подтвердит выше написанное - без прописанного свойства constructor

// newObj = oldObj.constructor(value) - можно cоздавать однотпные объекты на основе другого объекта, который собирается от фун-констр
var newObj = new Construct('newValue');
var newObj2 = new newObj.constructor('moreValue');              // создаст новый объект на основе функции конструктора другого объекта
console.log(newObj);
console.log(newObj2);

// Если мы вручную создаём свойства объекта (функции-конструктора), то лучше самому прописать в его свойствах  constructor: nameObj
function Rabbit() {}
Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit
};
console.log(Rabbit.prototype);


console.log('Задачи к теории');
// Задачи к теории

console.log('Задача №1');
// Есть функция Menu, которая получает аргументы в виде объекта options:
// При помощи наследования и Object.create сделайте спосб, который позволяет избежать копирования объекта и не требует новых переменных
function Menu(options){
    options = Object.create(options);
    options.width = 300;
    console.log(options.width);
};
var opt = {
    width: 200,
    height: 400
};
var menu = new Menu(opt);
console.log(opt.width);
