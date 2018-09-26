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


console.log("Задача 3");
// Задача 3
// в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. 
// Метод addRecord добавляет все свойства переданных объектов в data.
var data = {
    addRecord: function(){
        for(var i=0; i<arguments.length;i++){
            for(var key in arguments[i]){
                console.log(key);
                this[key] = arguments[i][key];
            }
        } 
    },
    p: 600,
    str: 'hello',
    y: -50
}
data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
console.log( data.x, // 50
    data.y, // 20
    data.z, // 30
    data.p, // 600
    data.str,); // 'hello');