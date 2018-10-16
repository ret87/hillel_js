'use strict';
console.log('OOP Inherit classes');

        // Встроенные "классы" в JavaScript
// * В JavaScript есть встроенные объекты: Date, Array, Object, Window и другие. Они первые чаилды глобального объекта.
// * Они используют прототипы и демонстрируют организацию «псевдоклассов» на JavaScript, которую мы вполне можем применить и для себя.
// * Даже пустой объект выведет "[object Object]"
// * Это сделал метод toString, который находится в прототипе obj.__proto__, как многие другие методы по умолчанию доступные объектам:
//   - Запись obj = {} является краткой формой obj = new Object, где Object – встроенная функция-конструктор для объектов.
//   - При выполнении new Object, создаваемому объекту ставится __proto__ по prototype конструктора и равен Object.prototype.
//   - В дальнейшем при обращении к obj.toString() – функция будет взята из Object.prototype.


    // Встроенные «классы» в JavaScript
// * Т.к. все сущности в JS являются по своей сути объектами созданными через класс-функцию, то данная иерархия равна всему в JS.
// * Это можно легко проверить присваивая .__proto__.__proto__ и аж до null
// * Есть методы лишь для массивов, а для общих методов всех объектов есть ссылка Array.prototype.__proto__, равная Object.prototype.
// * Object.prototype – вершина иерархии, единственный, у которого __proto__ равно null
// * Все сущности наследуются от Object, а если более точно, то от Object.prototype
// * Классом - называют функцию-конструктор вместе с её prototype. Такой способ объявления классов называют «прототипным стилем ООП».
// * При наследовании часть методов переопределяется, под конкретный тип данных (для объектов одни, для строчных другие), 
//   хотя у общего родителя они одинаковы
// * Перечисляет вводимые параметры [].join.call(arguments, ' - ')



    // Общее понимание 
// В JavaScript есть встроенные объекты: Date, Array, Object, Window и другие. Они первые чаилды глобального объекта.
// Даже пустой объект выведет "[object Object]"
var obj = {};
console.log(obj); 
// alert(obj); // "[object Object]" 
// это сделал метод toString, который находится в прототипе obj.__proto__, как многие другие методы по умолчанию доступные объектам
console.log(obj.__proto__);                 // object.prototype
console.log(obj.__proto__.__proto__);       // null

    // Встроенные «классы» в JavaScript
// * Т.к. все сущности в JS являются по своей сути объектами созданными через класс-функцию, то данная иерархия равна всему в JS.
// * Это можно легко проверить присваивая .__proto__.__proto__ и аж до null
function func(){};
var arr = [];
var num = Number;
var str = String;
console.log('function');
console.log(func);
console.log(func.__proto__);
console.log(func.__proto__.__proto__);
console.log(func.__proto__.__proto__.__proto__);
console.log('array');
console.log(arr);
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);
console.log('number');
console.log(num);
console.log(num.__proto__);
console.log(num.__proto__.__proto__);
console.log(num.__proto__.__proto__.__proto__);
console.log('string');
console.log(str);
console.log(str.__proto__);
console.log(str.__proto__.__proto__);
console.log(str.__proto__.__proto__.__proto__);

// Есть методы лишь для массивов, а для общих методов всех объектов есть ссылка Array.prototype.__proto__, равная Object.prototype.
// Object.prototype – вершина иерархии, единственный, у которого __proto__ равно null
// все сущности наследуются от Object, а если более точно, то от Object.prototype
// Классом - называют функцию-конструктор вместе с её prototype. Такой способ объявления классов называют «прототипным стилем ООП».
// При наследовании часть методов переопределяется, под конкретный тип данных (для объектов одни, для строчных другие), 
// хотя у общего родителя они одинаковы

// Перечисляет вводимые параметры [].join.call(arguments, ' - ')
function showList(){
    console.log( [].join.call(arguments, ' - ') );
}
showList('Artem', 'Vasja', 'Valja');

// Перечисляет вводимые параметры [].join.call(arguments, ' - ')
function showList(){
    console.log( Array.prototype.join.call(arguments, ' - ') );
}
showList('Artem', 'Vasja', 'Valja');

