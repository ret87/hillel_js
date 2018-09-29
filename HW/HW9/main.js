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


console.log('Задача №2');        
// 2. Задача
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// var begin = 'var_text_hello';
// console.log(begin);
// var end = '';
// for(var i=0; i<begin.length; i++){
//     if(begin[i] == '_'){
//         end += begin[i+1].toUpperCase();
//         i++;
//         continue;
//     }
//     end += begin[i];
// }
// console.log(end);


var begin = 'var_text_hello';
console.log(begin);
function upCase(string, symbol){
    var stringB = '';
    for(var i=0; i<string.length;i++){
        if(string[i] == symbol){
            stringB += string[i+1].toUpperCase();
            i++;
            continue;
        }
        stringB += string[i];
    }
    string = stringB;
    console.log(string);
    return string;
}
upCase(begin, '_');



console.log('Задача №3');        
// 3. Задача
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
// Функция должна возвращать true или false.
// inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']) должно вернуть true, т.к. в affooasf есть совпадение.