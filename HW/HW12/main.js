'use strict';
console.log('OOP HW12');

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
    this.width = width;
    this.height = height;

    this.heroName = 1;
    this.heroLocX = 4;
    this.heroLocY = 4;

    this._array = new Array(this.height);
    for(var i=0; i<this._array.length; i++){
        this._array[i] = new Array(this.width);
        for(var j=0; j<this._array[i].length;j++){
            this._array[i][j] = 0;
        }
    }
    this._array[this.heroLocX][this.heroLocY] = this.heroName;
    return console.log(this._array);
};

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

Field.prototype.clearField = function (heroName){
    for(var i=0; i<this._array.length;i++){
        for(var j=0; j<this._array[i].length;j++){
            if(this._array[i][j] == heroName){
                this._array[i][j] = 0;
            };
        };
    };
};

Field.prototype.changeSize = function(newX, newY){
    Field.apply(this, arguments);
};

function Person(name, XPosition, YPosition){
    // this.name = name;
    // var heroName = 1;
    // var heroLocX = 4;
    // var heroLocY = 4;
    // this.XPosition = XPosition;
    // this.YPosition = YPosition;

    Field.apply(this, arguments);
    // Field.prototype.method.apply(this, arguments);
};
Person.prototype = Object.create(Field.prototype);

var field = new Field(10, 10);
var person = new Person(7, 7);


field;
// field.clearField(1);
field.changeSize(15,15);
// field.renderField();
field.renderField();
person;





// Суть такая:
// field.renderField();
// person.start();
// person.go('left', 2);
// person.go('top', 1);
// field.renderField();
// последовательно вызываются команды, renderField - отображает новую доску в document. 
// В результате мы должны увидеть 2 нарисованных состояния поля.