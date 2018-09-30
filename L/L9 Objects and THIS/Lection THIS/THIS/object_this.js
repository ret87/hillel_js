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
    b: 10,
    brk: function(){
    },
    objInn: {
        a: 10,
        b: 20
    },
    // var 1
    // renderObject: function(){
    //     for(var key in this){
    //         if(key == 'renderObject'){
    //             continue;
    //             }   
    //             console.log(key + ': ' + this[key] + ';');
    //             document.write(key + ': ' + this[key] + ';' + '<br />');
    //         }
    //     },
    // var 2
    renderObject: renderObject,
    list: [1,2,3,4,5]
}
function renderObject (){
    for(var key in this){
        // if(this[key] === arguments.callee){
        if(this[key] === renderObject){
            continue;
        }
        if(typeof this[key] === 'object'){
            // this[key].renderObject = arguments.callee ;
            this[key].renderObject = renderObject ;
            this[key].renderObject();
            continue;
        }
        console.log(key + ': ' + this[key] + ';');
        document.write(key + ': ' + this[key] + ';' + '<br />');
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


console.log("Задача 3, 4");
// Задача 3 
// в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. 
// Метод addRecord добавляет все свойства переданных объектов в data.
//Задача 4
// В метод addRecord добавляется последний необязательный аргумент flag, который указывает приоритет присвоения свойств 
// с одинаковым названием. Если true - берется свойство из первоначального объекта this, если false - берется свойство из arguments. 
// По умолчанию flag = false;

var data = {
    addRecord: function(flag){
        for(var i=0; i<arguments.length;i++){
            for(var key in arguments[i]){
                for(var dataK in this){
                    // console.log(arguments[arguments.length-1]);
                    if(dataK == key){
                        arguments[i][key] = this[dataK];
                    } 
                }
                this[key] = arguments[i][key];
                // if(flag == false){
                // }
            }
        }
    },
    p: 600,
    str: 'hello',
    y: -50,
}
// data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, true);
data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, false);
console.log(data);

// попробовать через 0 и 1 - тру = 1, фолус = 0


console.log("Задача 5");
// Задача 5
// клонирование и объединение объектов

function copy(dstr){
    for(var i=0; i<arguments.length;i++){
        for(var key in arguments[i]){
            dstr[key] = arguments[i][key];
        }
    }
    return dstr;
}
var names = {
    name: 'Artem',
    nick: 'Charli'
}
var yo = {
    born: 1987,
    age: 31
}
// copy(names, yo); // объединение объектов
console.log(names); 
var userClone = copy({}, yo, names);
console.log(userClone);