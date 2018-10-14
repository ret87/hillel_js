'use strict';
console.log('OOP proto');

        // // Прототип объекта 

    // Прототип proto
// - В JS все сущности являются по сути объектами связанными цепочками.
// - Связующим звеном выступает специальное свойство __proto__.
// - Прировняв proto через . другому объекту - создаётся связь между ними; при поиске свойств в одном-поиск будет проходить и в другом:
// object1.__proto__ = object2
// - При прямом обращение к объекту через proto - покажет свойства объекта прототип (родитель данного объекта)
// object1.__proto__ 
// - Можно несколько раз добавлять свойство proto несколько раз и мы будем идти по цепочке всё ближе и ближе к свойствам прародителя
// console.log(object1.__proto__.__proto__);
// - Можно приравнивать объекты к друг другу по очереди - задавая цепочку родитель-чаилд. Но у родителя только один чаилд - последний
// - Объект, на который указывает ссылка __proto__, называется «прототипом»
// - Прототип используется исключительно при чтении.
// - Другими словами, прототип – это «резервное хранилище свойств и методов» объекта, автоматически используемое при поиске.
// - for..in не делает различия между свойствами объекта и его прототипа - выведет свойства всех прототипов в цепочке.
// - Так же можно приравнивать к прототипу, прописывая это в свойствах объекта obj2 = {key: value, __proto__: obj1};

    // Метод hasOwnProperty
// - Вызов obj.hasOwnProperty('key') - возвращает true, если свойство-ключ key принадлежит самому объекту obj, иначе false.
// - Удобно использовать для перебора и вывода своих или родительских свойст, родительские выводит лишь отличимые по имени ключа
// for(var key in obj) {if(obj.hasOwnProperty(key)){console.log(obj[key])} };

    // Методы для работы с proto
// var obj = Object.create(proto, descriptors);
// - В любом объект, по умолчанию есть определённые свойства - функции, но они наследованы общим прародителем
// - Но с помощью метода var object = Object.create(null) - мы можем создать исключительно чистый объект,без наследования от прототипов
// Object.getPrototypeOf(obj) - тоже самое что и obj.__proto__;
// Object.setPrototypeOf(obj, proto) - тоже самое что и obj.__proto__ = obj1;



    // Proto
console.log('proto');
// - Прировняв proto через . другому объекту - создаётся связь между ними; при поиске свойств в одном-поиск будет проходить и в другом:
var object1 = {
    name: 'Artem',
    age: 31 
};
var object2 = {
    name: 'Denis',
    age: 26,
    work: 'glass'
};
object1.__proto__ = object2;
console.log(object1);
console.log(object1['work']);

// - При прямом обращение к объекту через proto - покажет свойства объекта прототипа (родитель данного объекта)
console.log(object1.__proto__);
// - Можно несколько раз добавлять свойство proto несколько раз и мы будем идти по цепочке всё ближе и ближе к свойствам прародителя
console.log(object1.__proto__.__proto__);
// - Можно приравнивать объекты к друг другу по очереди - тем самым задавая цепочку родитель-чаилд. Но у родителя только один чаилд
var object3 = {city: 'kyiv'}
object2.__proto__ = object3;
console.log('object1');
console.log(object1);
console.log('object1.__proto__');
console.log(object1.__proto__);
console.log('object2');
console.log(object2);
console.log('object2.__proto__');
console.log(object2.__proto__);
// - Так же можно приравнивать к прототипу, прописывая это в свойствах объекта obj2 = {key: value, __proto__: obj1};
var obj1 = {
    key1: 'value1'
};
var obj2 = {
    key2: 'value2',
    __proto__: obj1
};
console.log(obj2);
console.log(obj2['key1']);


    // Метод hasOwnProperty
console.log('hasOwnProperty');
// Вызов obj.hasOwnProperty('key') - возвращает true, если свойство-ключ key принадлежит самому объекту obj, иначе false.
console.log(object1.hasOwnProperty('name'));
console.log(object1.__proto__.hasOwnProperty('name'));
// Удобно использовать для перебора и вывода своих или родительских свойст, родительские выводит лишь отличимые по имени ключа
for(var key in object1){
    if(object1.hasOwnProperty(key)){
        console.log('свои ' + object1[key]);
    }
    if(!object1.hasOwnProperty(key)){
        console.log('родителей ' + object1[key]);
    }
};


    // Методы для работы с proto
    console.log('Object.create(null)');

// Object.create(proto, descriptors)
// - В любом объект, по умолчанию есть определённые свойства - функции, но они наследованы общим прародителем
var data = {};
console.log(data.valueOf);
console.log(data.__proto__);
console.log(data.__proto__.constructor);
console.log(data.hasOwnProperty('valueOf'));
// - Но с помощью метода var object = Object.create(null) - мы можем создать исключительно чистый объект,без наследования от прототипов 
var data1 = Object.create(null);
console.log(data1.__proto__);
// Object.getPrototypeOf(obj) - тоже самое что и obj.__proto__;
console.log(Object.getPrototypeOf(data));
console.log(data.__proto__);
// Object.setPrototypeOf(obj, proto) - тоже самое что и obj.__proto__ = obj1;
var o = {key: 'value'};
var o1= {key2: 'value2'}
Object.setPrototypeOf(o, o1);
console.log(o.__proto__);
console.log(Object.getPrototypeOf(o));
