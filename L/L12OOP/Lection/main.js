'use strict';
console.log('OOP Prototype');


console.log('Методы и функции в прототипном ООП');
    // Методы и функции в ООП
// getObject = function() {} - получить информацию из объекта (или другого типа данных);
// setObject = function() {} - задать информацию в объект (или другой тип данных);

    // Наследование классов
// Наследование одним классом методами другого класса
// Что бы child одного класса обращался к методам родителя другого класса, нужно прировнять ParrentTwo.prototype = new Parrent.One();
// В таких случаях, this не рекомендуется использовать в ParrentOne функции - так как он будет сказываться на ParrentTwo прототипах
// Так же можно добавлять методы других классов по цепочке
// Плох этот подход тем что нам нужно вызывать отдельные классы и получаем доступ только к их методам но не свойствам
// Хорош он тогда, когда нужно за счёт аргументов методов ParrentOne и ParrentTwo положить что либо в прототип   

    // Наследование классов через Object.create 
// Object.create(prototype ){}; - какой-то другой объект, прототипом которого он будет (в скобках имя объекта);
// Для создания прототипного наследования классов, стоит прировнять ParrentTwo.prototype = Object.create(ParrentOne.prototype){}; 
ParrentTwo.prototype = Object.create(ParrentOne.prototype);



    // Методы и функции в ООП
// getObject - получить информацию из объекта (или другого типа данных);
// setObject - задать информацию в объект (или другой тип данных);
function Human (name, bd, city){
    var email = 'what?';

    this.name = name;
    this.bd = bd;
    this.city = city;
    this.some = 'hello ' + name + ' what happend in ' + city + '?';
    
    this.getEmail = function() {            //задаём
        return email;                       
    };
    this.setEmail = function(mail) {        //получаем
        return email = mail; 
    }
}
var artem = new Human('Artem', '31 july 1987 year', 'Kyiv');
artem.setEmail('umc') ;             // задаём 
artem.getEmail() ;                  // получаем
console.log(artem.getEmail());


console.log('Наследование');
    // Наследование классов через prototype 
// Наследование одним классом методами другого класса
// Что бы child одного класса обращался к методам родителя другого класса, нужно прировнять ParrentTwo.prototype = new Parrent.One();
// В таких случаях, this не рекомендуется использовать в ParrentOne функции - так как он будет сказываться на ParrentTwo прототипах
// Так же можно добавлять методы других классов по цепочке
// Плох этот подход тем что нам нужно вызывать отдельные классы и получаем доступ только к их методам но не свойствам
// Хорош он тогда, когда нужно за счёт аргументов методов ParrentOne и ParrentTwo положить что либо в прототип   

function ParrentOne (nick){this.nick = nick};
ParrentOne.prototype.run = function(old){console.log(this.name * old)};

function ParrentTwo(x, y){ this.name = x + y; return console.log(this.name)};
ParrentTwo.prototype = new ParrentOne();                                // вариант 1 - менее удобный и менее правильный
ParrentTwo.prototype = Object.create(ParrentOne.prototype);             // вариант 2 - более правильный согласно ООП
ParrentTwo.prototype.sleep = function(m){return console.log(this.name + m)};
var childParrentTwo = new ParrentTwo(1, 2);

childParrentTwo;
childParrentTwo.sleep(2);
childParrentTwo.run(3);

    // Наследование классов через Object.create 
// Object.create(prototype ){}; - какой-то другой объект, прототипом которого он будет (в скобках имя объекта);
var data = {
    x: 20,
    str: 'sads'
};
var d = Object.create(data);
console.log(d);

// Для создания прототипного наследования классов, стоит прировнять ParrentTwo.prototype = Object.create(ParrentOne.prototype){}; 
ParrentTwo.prototype = Object.create(ParrentOne.prototype);




console.log('Лекционная практика');

console.log('Задача 1');
// Задача 1.
// Создать класс new SuperArray(n, m, { min: 10, max: 55 }), который создаст массив размерностью n на m и заполнит случайными числами 
// в диапазоне options.min - options.max. Массив сохраняется в екземпляр класса SuperArray.

function SuperArray(n, m, options){
    this.name = new Array(n);
    this.marker = '&';
    this.markerIJ = {
        i: 0,
        j: 0
    };
    this.buferLoc = Array;
    this.buferNum = Number;
    for(var i=0; i<this.name.length; i++){
        this.name[i] = new Array(m);
        for(var j=0; j<this.name[i].length;j++){
            this.name[i][j] = options.min + Math.floor(Math.random() * (options.max + 1 - options.min));
        }
    }
    return console.log(this.name);
    // this._array1 = this.name;
    // return console.log(this._array1);
};
var array = new SuperArray(7, 7, {min:1, max:9});
array;


console.log('Задача 2');
// Задача 2.
// Создать метод render(separator), в прототипе. Который выведет двумерный массив в документ. С разделителем separator, под массивом.
var arr = Object.create(array);
SuperArray.prototype.render = function(separator){
    for(var i=0; i<this.name.length;i++){
        for(var j=0; j<this.name[i].length;j++){
            document.write(this.name[i][j] + ' &nbsp &nbsp ');
        };
        document.write('</br>');
    };
    document.write( separator + '</br>' );
};
arr.render('---task 2 end---');
console.log(arr.name);


console.log('Задача 3');
// Задача 3.
// Создать метод clear(direction, k), где direction может быть "row" или "column", а k - номер строки или столбца, 
// который нужно очистить. (поставить 0)
var arr2 = Object.create(arr);
SuperArray.prototype.clears = function(direction, k){
    for(var i = 0; i < this.name.length; i++){        
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
        };
    };
};

arr2.clears('row', 3);
arr2.render('');
arr2.clears('column', 3);
arr2.render('---task 3 end---');
console.log(arr2.name);


console.log('Задача 4');
// Задача 4.
// Создать Метод setMarker({ x: 6, y: 9 }), который устанавливает маркер "&" в в переданную точку.
var arr3 = Object.create(array);
SuperArray.prototype.setMarket = function(x, y){
    this.buferLoc = {
        x: x,
        y: y
    };
    this.buferNum = this.name[this.buferLoc.x][this.buferLoc.y]
    this.name[x][y] = this.marker;
};
arr3.setMarket(2,2);
arr3.render('---task 4 end---');
console.log(arr3);


console.log('Задача 5');
// Задача 5.
// Создать метод goTo({ x: 2, y: 4 }), маркер передвигается в указанную точку.
SuperArray.prototype.goTo = function(x, y){
    for(var i = 0; i < this.name.length; i++){        
        for(var j = 0; j < this.name[i].length; j++) {
            if(this.name[i][j] == this.marker){
                this.markerIJ.i=i;
                this.markerIJ.j=j;
            };
        };
    };
    this.name[this.markerIJ.i][this.markerIJ.j] = this.buferNum;
    this.buferNum = this.name[x][y];
    this.name[x][y] = this.marker;
    this.markerIJ.i = x;
    this.markerIJ.j = y;
    console.log(arr3);
    return this.name;
}
arr3.goTo(1,1);
arr3.render('---end 5 task---');
arr3.goTo(1,2);
arr3.render('---end 5 task---');
arr3.goTo(2,2);
arr3.render('---end 5 task---');
arr3.goTo(3,2);
arr3.render('---end 5 task---');
arr3.goTo(4,2);
arr3.render('---end 5 task---');


// console.log('Задача 6');
// // Задача 6.
// // Создать метод shift(direction), где direction может иметь значение "left", "right", "top", "bottom", 
// // и маркер сдвинется в указанную сторону на 1 шаг.

SuperArray.prototype.shift = function(direction){
    console.log(this.buferNum);
    // this.buferNum = 
    
    if(direction == 'left'){
        this.name[this.markerIJ.i][this.markerIJ.j] = this.buferNum;
        this.markerIJ.j = this.markerIJ.j-1;
        this.buferNum = this.name[this.markerIJ.i][this.markerIJ.j]; 
        this.name[this.markerIJ.i][this.markerIJ.j] = this.marker;
    };
    if(direction == 'right'){
        this.name[this.markerIJ.i][this.markerIJ.j] = this.buferNum;
        this.markerIJ.j = this.markerIJ.j+1;
        this.buferNum = this.name[this.markerIJ.i][this.markerIJ.j]; 
        this.name[this.markerIJ.i][this.markerIJ.j] = this.marker;
    };    
    if(direction == 'top'){
        this.name[this.markerIJ.i][this.markerIJ.j] = this.buferNum;
        this.markerIJ.i = this.markerIJ.i-1;
        this.buferNum = this.name[this.markerIJ.i][this.markerIJ.j]; 
        this.name[this.markerIJ.i][this.markerIJ.j] = this.marker;
    };    
    if(direction == 'bot'){
        this.name[this.markerIJ.i][this.markerIJ.j] = this.buferNum;
        this.markerIJ.i = this.markerIJ.i+1;
        this.buferNum = this.name[this.markerIJ.i][this.markerIJ.j]; 
        this.name[this.markerIJ.i][this.markerIJ.j] = this.marker;
    };    

};
arr3.shift('right');
arr3.render('---end 6 task---')
arr3.shift('right');
arr3.render('---end 6 task---')
arr3.shift('right');
arr3.render('---end 6 task---')
arr3.shift('top');
arr3.render('---end 6 task---')
arr3.shift('left');
arr3.render('---end 6 task---')
arr3.shift('left');
arr3.render('---end 6 task---')
arr3.shift('left');
arr3.render('---end 6 task---')
arr3.shift('bot');
arr3.render('---end 6 task---')
arr3.shift('bot');
arr3.render('---end 6 task---')
arr3.shift('right');
arr3.render('---end 6 task---')
