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


// 2. Задача
// В задачу п.3 из лекции добавить 3ий аргумента flag, который является boolean. Если флаг true, 
// тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.
// assignObjects({...}, {...}, false);

// 3. Задача
// В задачу п.3, сделать параметр flag не обязательный, если параметр не передать - устанавливать значение false.