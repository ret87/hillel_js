'use strict';
console.log('OOP Prototype');

        // // Прототип объекта
    
// - Объекты в JS можно организовать в цепочки так, чтобы свойство, не найденное в одном объекте, автоматически искалось бы в другом.
// - Связующим звеном выступает специальное свойство __proto__.
        
    // Прототип proto
// - Если один объект имеет специальную ссылку __proto__ на другой объект, то при чтении свойства из него, 
// если свойство отсутствует в самом объекте, оно ищется в объекте __proto__.
// - Объект, на который указывает ссылка __proto__, называется «прототипом».
// - Также говорят, что объект obj1 «прототипно наследует» от obj2.
// - Другими словами, прототип – это «резервное хранилище свойств и методов» объекта, автоматически используемое при поиске.
// - Несколько прототипов одному объекту присвоить нельзя, но можно организовать объекты в цепочку, 
// когда один объект ссылается на другой при помощи __proto__, тот ссылается на третий, и так далее.
// - В ECMAScript – свойство __proto__ обозначено в ней как [[Prototype]].
// - В современных браузерах, с точки зрения производительности, нет разницы, брать свойство из объекта или прототипа. 
// Они запоминают, где было найдено свойство и в следующий раз при запросе, начнут искать сразу в прототипе .

    // Метод hasOwnProperty
// Обычный цикл for..in не делает различия между свойствами объекта и его прототипа. Он перебирает всё.
// Вызов obj.hasOwnProperty(prop) возвращает true, если свойство prop принадлежит самому объекту obj, иначе false.
// Для того, чтобы перебрать свойства самого объекта, достаточно профильтровать key через hasOwnProperty:
    
    // Object.create(null)
// Объект, создаваемый при помощи Object.create(null) не имеет прототипа, а значит в нём нет лишних свойств. 

    // Методы для работы с proto
// Object.getPrototypeOf(); - выводит значения объектов прототипа (наследуемые)
// Object.setPrototypeOf(obj, proto); - можно записывать в прототип 

// - Если один объект имеет специальную ссылку __proto__ на другой объект, то при чтении свойства из него, 
// если свойство отсутствует в самом объекте, оно ищется в объекте __proto__.
// пример
var obj1 = {
    key1: 'obj 1 key 1'
};
var obj2 = {
    key2: 'obj 2 key 2'
};
obj1.__proto__ = obj2;
console.log(obj1.key2);
console.log(obj1.key1);

    // Метод hasOwnProperty
// Обычный цикл for..in не делает различия между свойствами объекта и его прототипа. Он перебирает всё, например:
var animal = {
    eats: true
};
var rabbit = {
    jumps: true,
    __proto__: animal
};
// то есть перебор проходит в обоих объектах через протитпно наследуемый объект
for(var key in rabbit){
    console.log(key + '= '+ rabbit[key]);
}

// Вызов obj.hasOwnProperty(prop) возвращает true, если свойство prop принадлежит самому объекту obj, иначе false.
console.log(rabbit.hasOwnProperty('jumps'));
console.log(rabbit.hasOwnProperty('eats'));
// Для того, чтобы перебрать свойства самого объекта, достаточно профильтровать key через hasOwnProperty:
for(var key1 in rabbit){
    if(!rabbit.hasOwnProperty(key1)) continue;
        console.log(key1 + '= '+ rabbit[key1]);
}

    // Object.create(null)
// Объект, создаваемый при помощи Object.create(null) не имеет прототипа, а значит в нём нет лишних свойств. 
var data = {};
data.text = 'Привет';
data.age = '35';
console.log(data.toString); // выведет функцию, хотя мы её туда не записывали
// выведет функцию только если мы её записывали, иначе андефаинд
console.log(data.hasOwnProperty('toString') ? data.toString : undefined);
// тоже самое с помощью Object.create(null)
var data = Object.create(null);
console.log(data.toString); 
var dataNext = {
    redLine: function(){}
}
data.__proto__ = dataNext;
console.log(data.redLine);

    // Методы для работы с proto
// Object.getPrototypeOf(); - выводит значения объектов прототипа (наследуемые)
var object = {
    first: 1,
    second: 2,
    third: 3,
    four: 4
}
var object2 = {
    five: 5,
    six: 6
}
object.__proto__ = object2;
console.log(Object.getPrototypeOf(object));
// Object.setPrototypeOf(obj, proto);- можно записывать в прототип 

// Object.create(proto, descriptors); - создание объекта с прототипом: 
// Создаёт пустой объект с __proto__, равным первому аргументу


console.log('Лекционная практика')
// Лекционная практика
console.log('Задача №1')
// Задача №1. Алгоритм для поиска
// Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму 
// pockets -> bed -> table -> head.
// То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

var head = {
    glasses: 1
};  
var table = {
    pen: 3
};
var bed = {
    sheet: 1,
    pillow: 2
};
var pockets = {
    money: 2000
};
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);
