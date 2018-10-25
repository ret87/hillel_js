'use strict';
console.log('OOP');

// Создать игру:
// Есть поле field, является экземпляром класса Field(width, height), предпочитаемые размеры 10 на 10.
// Есть герой person, класс Person(name, XPosition, YPosition)
// Поле являет собой двумерный массив, который состоит из нулей. Там где находится наш герой - стоит 1.
// Field имеет такие методы: 
//     * renderField() - выводит поле в document, устанавливает разделители `<hr />` сверху и снизу
//     * clearField() - убирает героя с доски
//     * changeSize(newX, newY) - меняет размер поля
// Person имеет такие методы:
//     * start() - герой появляется на доске
//     * go(direction, step) - движение по переданом параметру (direction может быть: 'left', 'right', 'top', 'bottom') и с шагом step
//     * resetPosition() - перенос в начальную позицию
// Нужно самим решить какие методы получают аргументы, какие нет. Организовывать код можно любым образом.
// Вызов методов происходит из консоли.

function Field(width, height){
    this.x = width;
    this.y = height;
    this._array = new Array(this.x);
    this.heroName;
    this.heroLoc = {
        x: 4,
        y: 4
    };
    for(var i=0; i<this._array.length; i++){
        this._array[i] = new Array(this.y);
        for(var j=0; j<this._array[i].length;j++){
            this._array[i][j] = 0;
        }
    }
    // this._array[this.heroLoc.x][this.heroLoc.y] = 1;
    // this._array[this.heroLoc.x][this.heroLoc.y] = this.heroName;
    var array = this._array;
    return console.log(this._array);
};
var field = new Field(10, 10);

Field.prototype.renderField = function (){
    document.write(`<hr />`);
    for(var i=0; i<this._array.length;i++){
        document.write('</br>');
        for(var j=0; j<this._array[i].length;j++){
            document.write(this._array[i][j] + ' &nbsp &nbsp &nbsp &nbsp &nbsp ');
        };
        document.write(`<hr />`);
    };
};

Field.prototype.clearField = function (){
    // this._array[heroLoc.i][heroLoc.j] = 0;
    // this.heroName = 0;
    // field;
    // field.renderField();

};

Field.prototype.changeSize = function(newX, newY){
    this.x = newX;
    this.y = newY;
    this._array = new Array(this.x);
    for(var i=0; i<this._array.length; i++){
        this._array[i] = new Array(this.y);
        for(var j=0; j<this._array[i].length;j++){
            this._array[i][j] = 0;
        }
    }

    return console.log(this._array);
};

// Person имеет такие методы:
//     * start() - герой появляется на доске
//     * go(direction, step) - движение по переданом параметру (direction может быть: 'left', 'right', 'top', 'bottom') и с шагом step
//     * resetPosition() - перенос в начальную позицию
// function Person(name, XPosition, YPosition){
    // this.heroName = name;
    // this.heroLoc.x = XPosition;
    // this.heroLoc.y = YPosition;
    // this._array[4][4] = 1;
    // this._array[YPosition][XPosition] = name;  
// };
// Person.prototype = Object.create(Field.prototype);
// var person = new Person();

// Person.prototype = new Field();
// var person = new Person();


field;
field.renderField();
// field.changeSize(5,5);
// person;





// Суть такая:
// field.renderField();
// person.start();
// person.go('left', 2);
// person.go('top', 1);
// field.renderField();
// последовательно вызываются команды, renderField - отображает новую доску в document. 
// В результате мы должны увидеть 2 нарисованных состояния поля.