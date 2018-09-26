'use strict';
console.log('Objects THIS');

        // THIS OBJECT


console.log("Лекционная практика");
console.log("Задача 1");
// Задача 1
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


console.log("Задача 2");
// Задача 2
// Реализовать объект с методами m1(), m2(), m3(). Должна быть возможность выполнять подобный код:
var obj1 = {
    step: 0,
    m1: function(){
        this.step++;
        return this;
    },
    m2: function(){
        this.step--;
        return this;
    },
    m3: function(){
        this.step;
        return this;
    }
} 
console.log(obj1.m1().m2().m3());
console.log(obj1.m2().m1().m3());
console.log(obj1.m2().m1().m3().m1().m1());
