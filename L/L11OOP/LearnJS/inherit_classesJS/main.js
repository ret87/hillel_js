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

