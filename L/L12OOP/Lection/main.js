'use strict';
console.log('OOP Prototype');






console.log('Лекционная практика');

console.log('Задача 1');
// Задача 1.
// Создать класс new SuperArray(n, m, { min: 10, max: 55 }), который создаст массив размерностью n на m и заполнит случайными числами 
// в диапазоне options.min - options.max. Массив сохраняется в екземпляр класса SuperArray.

function SuperArray(n, m, min, max){
    for(var i=0; i<n; i++){
        this[i] = new Array();
        for(var j=0; j<m;j++){
            this[i][j] = min + Math.floor(Math.random() * (max + 1 - min));
        }
    }
    return console.log(this);
};
var array = new SuperArray(7, 5, 10, 55);
array;


console.log('Задача 2');
// Задача 2.
// Создать метод render(separator), в прототипе. Который выведет двумерный массив в документ. С разделителем separator, под массивом.
var arr = new SuperArray(7, 5, 10, 55);
SuperArray.prototype.render = function(separator){
    for(var i=0; i<this[0].length;i++){
        for(var j=0; j<this[i].length;j++)
        document.write(this[i][j] + separator);
        document.write('</br>');
    }
}
arr.render(' ');


console.log('Задача 3');
// Задача 3.
// Создать метод clear(direction, k), где direction может быть "row" или "column", а k - номер строки или столбца, 
// который нужно очистить. (поставить 0)


console.log('Задача 4');
// Задача 4.
// Создать Метод setMarker({ x: 6, y: 9 }), который устанавливает маркер "&" в в переданную точку.


