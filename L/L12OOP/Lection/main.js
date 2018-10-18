'use strict';
console.log('OOP Prototype');






console.log('Лекционная практика');

console.log('Задача 1');
// Задача 1.
// Создать класс new SuperArray(n, m, { min: 10, max: 55 }), который создаст массив размерностью n на m и заполнит случайными числами 
// в диапазоне options.min - options.max. Массив сохраняется в екземпляр класса SuperArray.

function SuperArray(n, m, min, max){
    var array = new Array(n);
    for(var i=0; i<array.length; i++){
        array[i] = new Array(m);
        for(var j=0; j<array[i].length;j++){
            array[i][j] = min + Math.floor(Math.random() * (max + 1 - min));
        }
    }
    return array;
};

var array = new SuperArray(5, 4, 10, 55);
console.log(array);


console.log('Задача 2');
// Задача 2.
// Создать метод render(separator), в прототипе. Который выведет двумерный массив в документ. С разделителем separator, под массивом.
var arr = new SuperArray(3, 6, 1, 30);
SuperArray.prototype.render = function(){
    // this.separator
}
console.log(arr);
console.log(SuperArray.prototype);