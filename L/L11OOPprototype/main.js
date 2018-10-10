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


        // // Свойство F.prototype и создание объектов через new
    // Свойство F.prototype
// - Чтобы новым объектам автоматически ставить прототип, конструктору ставится свойство prototype.
// - При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.
// - Установка Object1.prototype = Object2 буквально говорит интерпретатору: 
// "При создании объекта через new Rabbit запиши ему __proto__ = Object2".
// - Чтобы новым объектам автоматически ставить прототип, конструктору ставится свойство prototype.
// - При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.
// - Установка Object1.prototype = Object2 буквально говорит интерпретатору: 
// "При создании объекта через new Rabbits запишет ему __proto__ = Object2".
// - Свойство prototype имеет смысл только у конструктора.
// - Само по себе, без вызова оператора new, оно ничего не делает, его единственное назначение – указывать __proto__ для новых объектов
// - Значением prototype может быть только объект.
// - При работе new, свойство prototype будет использовано в том случае, если это объект. Примитивные значения: игнорируются.


    // Свойство constructor
// У каждой функции по умолчанию уже есть свойство prototype.
// Object.getOwnPropertyNames(SomeFunction.prototype); // - получить ключи функции/объекта 
// Получить ключи функции/объекта  Object.getOwnPropertyNames(SomeFunction.prototype); 
// - Что бы создать объект с помощью конструктора, стоит создать функцию, со значение, которое будет поступать при обращение к функции,
// и будет являться значением нового ключа, в самой функции выдаём this.ключ = поступающее значение.
// Далее создаём новую переменную и приравниваем её через new ИмяФункции("новое значение"); var creatObj = new CreateObj('keyValue1');
// След значение при использованиее constructor, создав новую переменную и прировняв её через new имя пред. переменной.констр(значение)
// var creatObj2= new creatObj.constructor('keyValue2'); 
// пример
// function CreateObj(keyValue) {
//         this.keyName = keyValue;
//         console.log(keyValue);
//     }
// var creatObj = new CreateObj('keyValue1');
// var creatObj2= new creatObj.constructor('keyValue2'); 
// console.log(creatObj);
// console.log(creatObj2);
// При перезаписи объекта, что бы не потерять constructor - стоит его указать как отдельный ключ, а его значение - имя объекта  





console.log('Свойство __proto__'); 
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


console.log('Метод hasOwnProperty'); 
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


console.log('Object.create(null)'); 
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


console.log('Методы для работы с proto'); 
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


console.log('Свойство F.prototype и создание объектов через new'); 
        // // Свойство F.prototype и создание объектов через new
    // Свойство F.prototype
// - Чтобы новым объектам автоматически ставить прототип, конструктору ставится свойство prototype.
// - При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.
// - Установка Object1.prototype = Object2 буквально говорит интерпретатору: 
// "При создании объекта через new Rabbit запиши ему __proto__ = Object2".

console.log('Свойство F.prototype'); 
    // Свойство F.prototype
var animal = {
    eats: true
};
function Rabbit(name) {
    this.name = name;
    this.__proto__ = animal;
}
var rabbit = new Rabbit("Кроль");
console.log( rabbit.eats ); // true, из прототипа

// Чтобы новым объектам автоматически ставить прототип, конструктору ставится свойство prototype.
// При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.
// - Установка Object1.prototype = Object2 буквально говорит интерпретатору: 
// "При создании объекта через new Rabbits запишет ему __proto__ = Object2":
var object = {
    key: 'yes'
};
function Func(name) {
    this.name = name;
}
Func.prototype = object;
var object2 = new Func("Кроль"); //  object2.__proto__ == object
// console.log(object2.key); // true

// Свойство prototype имеет смысл только у конструктора.
// Само по себе, без вызова оператора new, оно ничего не делает, его единственное назначение – указывать __proto__ для новых объектов.
// Значением prototype может быть только объект.
// При работе new, свойство prototype будет использовано в том случае, если это объект. Примитивные значения: игнорируются.


console.log('Свойство constructor'); 
    // Свойство constructor
// У каждой функции по умолчанию уже есть свойство prototype.
// Object.getOwnPropertyNames(SomeFunction.prototype); // - получить ключи функции/объекта 
function someFunc(){}
console.log(Object.getOwnPropertyNames(someFunc.prototype)); // выведет construction

// Иногда получив объект, мы не знаем, какой у него был конструктор (например, сделан вне нашего кода), а нужно создать такой же.
// Можно использовать construction для создания объекта с тем же конструктором, что и данный:
function Constr(name) {
    this.name = name;
    console.log(name);    
}
var construct = new Constr('what?');
var construct2 = new construct.constructor('what is it?');
// то есть вот создание новых ключей и свойств объекта через функцию:
function CreateObj(keyValue) {
    this.keyName = keyValue;
    console.log(keyValue);
}
var creatObj = new CreateObj('keyValue1');
var creatObj2= new creatObj.constructor('keyValue2'); 
console.log(creatObj);
console.log(creatObj2);

// При перезаписи объекта, что бы не потерять constructor - стоит его указать как отдельный ключ, а его значение - имя объекта  
CreateObj.prototype = {
    key : value,
    constructor: CreateObj
}
console.log()








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
