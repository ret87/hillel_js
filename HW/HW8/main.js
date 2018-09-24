'use strict';
console.log('Objects');

// 1. Задача
// Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, есть в массиве элемент с заданным текстом или нет. 
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
// Функция должна возвращать true или false.
var arr = ['svnj', 'hello', 'cvpoq'];
function inArray(text, array){
    for(var key in array){
        if(array[key] == text){
            var isTrue = array[key];
        } 
    }
    if(isTrue == text){
        return console.log(true);
    } else return console.log(false);
}
inArray('hello', arr);

console.log('Задча 2');
// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый,
//  который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта
// assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }

function assignObjects(obj1, obj2){
    var obj = {};
    for(var key1 in obj1){
        for(var key2 in obj2){
            obj[key2] = obj2[key2]; 
        }
        obj[key1] = obj1[key1]; 
    }
    return obj;
}
var obj1 = {
    x: 10,
    z: 40
}
var obj2 = {
    x: 20,
    y: 30
}
var obj;
console.log(assignObjects(obj1, obj2));

// 3. Задача
// В задачу п.2 из лекции добавить 3ий аргумента flag, который является boolean. Если флаг true, 
// тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.
// assignObjects({...}, {...}, false);

// 4. Задача
// В задачу п.2, сделать параметр flag не обязательный, если параметр не передать - устанавливать значение false.