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
// - У объекта, который является __proto__, может быть свой __proto__, у того – свой, и так далее. Cвойства будут искаться по цепочке.
// - В ECMAScript – свойство __proto__ обозначено в ней как [[Prototype]].

    // Метод hasOwnProperty
// Обычный цикл for..in не делает различия между свойствами объекта и его прототипа. Он перебирает всё.
// Вызов obj.hasOwnProperty(prop) возвращает true, если свойство prop принадлежит самому объекту obj, иначе false.
// Для того, чтобы перебрать свойства самого объекта, достаточно профильтровать key через hasOwnProperty:
    

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