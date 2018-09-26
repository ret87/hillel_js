'use strict';
console.log('Objects THIS');

        // THIS OBJECT


console.log("Лекционная практика");
console.log("Задача 1");
// Задан обьект с любым количеством свойств. Одно из свойств является функция renderObject(), которая описана в window. 
// При вызове метода obj.renderObject() -> выводит в document всё содержимое объекта, кроме самого метода renderObject
var obj = { 
    x: 10, 
    y: 20, 
    renderObject: function(){
        for(var key in this){
            if(key != "renderObject" && typeof this[key] != "function" ){
                console.log(key + ': ' + this[key] + ';');
                document.write(key + ': ' + this[key] + ';' + '</br>');
            }
        }
    }
}
obj.renderObject();