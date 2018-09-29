'use strict';
console.log('THIS');

// Практика 

console.log('Задача №1');        
// 1. Задача
// Есть обьект obj = { } Внутри него описываем методы copy, clear, doFunction. Организовать создание методов так, 
// что бы можно было вызывать любые комбинации:
// obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()
// doFunction(x, y, func); получает параметрами 2 числа и функцию, которую нужно применить к x и y. 
// Результат операции сохранять в obj.result
// clear() очищает значение obj.result в 0
// copy(buffer) получает параметром название ключа buffer (string) и добавляет его к obj 
// Далее в любом порядке можно вызывать комбинации функций

var obj = {
    copy: function(buffer){
        this[buffer] = this.result;
        return this;
    },
    clear: function(){
        this.result = 0;
        return this;
    },
    doFunction: function(x, y, func){
        this.result += func(x, y);
        return this;
    },
    result: 0
}
function sum (x,y){
    return x + y;
};
function mul (x,y){
    return x * y;
};

obj.doFunction(2,4, sum).doFunction(6,3, mul).copy('buffer').clear();
console.log(obj.result);
console.log(obj);