'use strict';
console.log('OOP Prototype');






console.log('Лекционная практика');

console.log('Задача 1');
// Задача 1.
// Создать класс new SuperArray(n, m, { min: 10, max: 55 }), который создаст массив размерностью n на m и заполнит случайными числами 
// в диапазоне options.min - options.max. Массив сохраняется в екземпляр класса SuperArray.

function SuperArray(n, m, min, max){
    this.name = new Array(n);
    for(var i=0; i<this.name.length; i++){
        this.name[i] = new Array(m);
        for(var j=0; j<this.name[i].length;j++){
            this.name[i][j] = min + Math.floor(Math.random() * (max + 1 - min));
        }
    }
    return console.log(this.name);
};
var array = new SuperArray(7, 5, 10, 55);
array;


console.log('Задача 2');
// Задача 2.
// Создать метод render(separator), в прототипе. Который выведет двумерный массив в документ. С разделителем separator, под массивом.
var arr = new SuperArray(7, 5, 10, 55);
SuperArray.prototype.render = function(separator){
    for(var i=0; i<this.name.length;i++){
        for(var j=0; j<this.name[i].length;j++){
            document.write(this.name[i][j] + separator);
        };
        document.write('</br>');
    };
};
arr.render(' ');
document.write('</br>');


console.log('Задача 3');
// Задача 3.
// Создать метод clear(direction, k), где direction может быть "row" или "column", а k - номер строки или столбца, 
// который нужно очистить. (поставить 0)
var arr2 = new SuperArray(5, 5, 1, 9);
SuperArray.prototype.clears = function(direction, k){
    for(var i = 0; i < this.name.length; i++){        // как задать ленгз
        for(var j = 0; j < this.name[i].length; j++) {
            if(direction == 'row' ){
                if(i == k ){
                    this.name[i][j] = 0;
                };            
            };
            if(direction == 'column' ){
                if(j == k ){
                    this.name[i][j] = 0;
                };            
            };
            document.write(this.name[i][j] + ' &nbsp ');
        };
        document.write('</br>');
    };
};
arr2.clears('row', 3);
document.write('</br>');
arr2.clears('column', 3);
console.log(typeof(arr2));
console.log(typeof(arr2.name));


console.log('Задача 4');
// Задача 4.
// Создать Метод setMarker({ x: 6, y: 9 }), который устанавливает маркер "&" в в переданную точку.





console.log('Задача 5');
// Задача 5.
// Создать метод goTo({ x: 2, y: 4 }), маркер передвигается в указанную точку.





console.log('Задача 6');
// Задача 6.
// Создать метод shift(direction), где direction может иметь значение "left", "right", "top", "bottom", 
// и маркер сдвинется в указанную сторону на 1 шаг.