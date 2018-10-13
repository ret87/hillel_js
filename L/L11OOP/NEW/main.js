'use strict';
console.log('OOP NEW');

console.log('NEW');
        // NEW
// New - это синтаксис создание екзепляра класса
// NEW - третье правило поведения THIS:
// * new - всегда создаёт новый объект;
// * new - вызывает функцию к которой его прировняли;
// * new - меняет поведение THIS и заставляет объект смотреть на новый, созданный при помощи new;


console.log('Конструктор');
    // Конструктор;
// - Конструктор - собирает объект на основе класса (функции), в примере ниже объект Р собирается на основе параметров функции Person;
// - Функции-конструктор используют для того, что бы создавать несколько однотипных объектов;
// function Person(value1,value2) {this.key1=value1, this.key2=value2};
// obj1 = new Person(value1,value2);
// obj2 = new Person(value1,value2);
function Person(name, surname, age, email, phone){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.email=email;
    this.phone='+380' + phone;
    // this.run = function(){};
};
var Artem = new Person('Artem', 'Retunskiy', 31, 'umccomua@ya.ru', 975996694);
var Olga = new Person('Olga', 'Mihailova', 27, 'none', 'none');
console.log(Artem);
console.log(Olga);
// * Что делает NEW с функцией-конструктором:
//   - Создаётся новый пустой объект.
//   - Ключевое слово this получает ссылку на этот объект.
//   - Функция выполняется. Как правило, она модифицирует this (т.е. этот новый объект), добавляет методы, свойства.
//   - Возвращается this.


console.log('Правила обработки return');
    // Правила обработки return
