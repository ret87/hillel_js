'use strict';
console.log('OOP NEW');

    // NEW
// New - это синтаксис создание екзепляра класса
// NEW - третье правило поведения THIS:
// * new - всегда создаёт новый объект;
// * new - вызывает функцию к которой его прировняли;
// * new - меняет поведение THIS и заставляет объект смотреть на новый, созданный при помощи new;


    // Конструктор;
// - Конструктор - собирает объект на основе класса (функции), в примере ниже объект Р собирается на основе параметров функции Person;
// - Функции-конструктор используют для того, что бы создавать несколько однотипных объектов;
// - Функции-конструктор называют с большой буквы - что бы можно было сразу их опредялять.

// function Person(value1,value2) {this.key1=value1, this.key2=value2};
// obj1 = new Person(value1,value2);
// obj2 = new Person(value1,value2);

// * Что делает NEW с функцией-конструктором:
//   - Создаётся новый пустой объект.
//   - Ключевое слово this получает ссылку на этот объект.
//   - Функция выполняется. Как правило, она модифицирует this (т.е. этот новый объект), добавляет методы, свойства.
//   - Возвращается this.


    // Правила обработки return
// Если есть явный вызов return в функции-конструкторе: 
//   - при вызове return с объектом, будет возвращен он, а не this - то есть return объект = ПЕРЕБИВАЕТ this;
//   - при вызове return с примитивным значением, оно будет отброшено; - то есть обращаясь на прямую к ключу


    // Создание методов в конструкторе
// - Использование функций для создания объекта дает большую гибкость. 
// - Можно передавать конструктору параметры, определяющие как его создавать, и он будет «клепать» объекты заданным образом.
// - Метод - функция внутри конструктора.
// - Что бы вызвать метод, созданный внутри функции конструктора и прировненный к переменной, взять имя объекта созданного через new,
// и через точку обратиться к имени внутренней функции - методу nameNew.nameMethod();


    // Локальные переменные
// В Функции-конструкторе бывает удобно добавить локальные переменные и вложенные функции, которые видны только внутри (локально)
// Т.е. функции и данные, которые должны быть доступны доступны для внешнего кода, внутри конструктора, мы записываем в THIS, 
// а вспомогательные, которые нужны только внутри самой функции-конструктора, сохраняем в локальную область видимости ф-ии.



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
// - Функции-конструктор называют с большой буквы - что бы можно было сразу их опредялять.
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
// Если есть явный вызов return в функции-конструкторе: 
//   - при вызове return с объектом, будет возвращен он, а не this - то есть return объект = ПЕРЕБИВАЕТ this;
//   - при вызове return с примитивным значением, оно будет отброшено; - то есть обращаясь на прямую к ключу
function Info(name, work){
    this.name = name;
    this.work = work;
    return {name: "Lilja"}; // перебьёт this 
}
var Oskar = new Info('Oskar', 'football player');
console.log(Oskar);

function Info2(){
    this.name = 'Lilu';
    return "Lilja"; // НЕ перебьёт this 
}
var obj1 = new Info2();     // создавай объект через New - this смотрит на объект перед = New и покажет непосредственно объект
console.log(obj1);          // покажет объект полностью
console.log(obj1.name);     // покажет значение ключа на прямую
console.log(obj1['name']);  // покажет значение ключа на прямую


console.log('Создание методов в конструкторе'); // 
    // Создание методов в конструкторе
// - Использование функций для создания объекта дает большую гибкость. 
// - Можно передавать конструктору параметры, определяющие как его создавать, и он будет «клепать» объекты заданным образом.
// - Метод - функция внутри конструктора.
// - Что бы вызвать метод, созданный внутри функции конструктора и прировненный к переменной, взять имя объекта созданного через new,
// и через точку обратиться к имени внутренней функции - методу nameNew.nameMethod();
function Func (name){
    this.name = name;
    this.sayHi = function(){
        console.log('Привет ' + this.name);
    }
}
var Artur = new Func('Artur');
console.log(Artur);
Artur.sayHi();


console.log('Локальные переменные'); 
    // Локальные переменные
// В Функции-конструкторе бывает удобно добавить локальные переменные и вложенные функции, которые видны только внутри (локально)
// Т.е. функции и данные, которые должны быть доступны доступны для внешнего кода, внутри конструктора, мы записываем в THIS, 
// а вспомогательные, которые нужны только внутри самой функции-конструктора, сохраняем в локальную область видимости ф-ии.

function User(fName, lName){
    var phrase = 'Hello';
    function getFullName(){
        return fName + ' ' + lName;
    }
    this.sayHi = function (){
        console.log(phrase + ' ' + getFullName());
    }
}
var vasya = new User('Vasiliy', 'Nikolaevich');
vasya.sayHi();



console.log('Теоретическая практика'); 
// Теоретическая практика

console.log('Задача №1'); 
// Задача №1
// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
// Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.

function Calc (){
    this.read = function(){
        this.a = +prompt('введите первое число ', 5);
        this.b = +prompt('введите второе число ', 10);
        console.log(this.a,this.b);
    }
    this.sum = function(){
        return this.a + this.b;
    }
    this.mul = function(){
        return this.a*this.b;
    }
}
var calc = new Calc();
calc.read();
console.log(calc.sum());
console.log(calc.mul());


console.log('Задача №2'); 
// Задача №2
// Создать Accumulator при помощи конструктора
// Напишите функцию-конструктор Accumulator(startingValue). 
// Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value +=  +prompt('vvedite chislo = ', 5);
    }
}
var accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();
console.log(accumulator.value);


console.log('Задача №3'); 
// Задача №3
// Создайте калькулятор
// Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

