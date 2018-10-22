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
    var arr = new Array(height);
    for(var i=0;i<arr.length;i++){
        arr[i] = new Array(width);
        for(var j=0;j<arr[i].length;j++){
            arr[i][j] = 0;
        };
    };
    this.array = arr;
    console.log(arr);
    return arr;
};
var field = new Field(10,10);
field;





// Суть такая:
// field.renderField();
// person.start();
// person.go('left', 2);
// person.go('top', 1);
// field.renderField();
// последовательно вызываются команды, renderField - отображает новую доску в document. 
// В результате мы должны увидеть 2 нарисованных состояния поля.