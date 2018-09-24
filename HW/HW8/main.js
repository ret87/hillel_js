'use strict';
console.log('Objects');

console.log('Задча 1');
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
// 2. Задача
// В задачу п.2 из лекции добавить 3ий аргумента flag, который является boolean. 
// Если флаг true, тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.
// assignObjects({...}, {...}, false);
function assignObjects(obj1, obj2){
    var object = {}
    for(var key1 in obj1){
        object[key1] = obj1[key1];
        for(var key2 in obj2){
            object[key2] = obj2[key2];
        }
    }
    return object;
}
var object1 = {
    a: 10,
    b: 20,
    c: 50,
    d: 30
} 
var object2 = {
    a: 30,
    e: 20,
    f: 40,
    d: 20
} 
console.log(assignObjects(object1, object2));
// 3. Задача
// В задачу п.2, сделать параметр flag не обязательный, если параметр не передать - устанавливать значение false.