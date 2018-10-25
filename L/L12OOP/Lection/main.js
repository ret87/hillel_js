'use strict';
console.log('OOP Prototype');


console.log('Методы и функции в прототипном ООП');
    // Методы и функции в ООП
// getObject = function() {} - получить информацию из объекта (или другого типа данных);
// setObject = function() {} - задать информацию в объект (или другой тип данных);

    // Наследование классов
// Наследование одним классом методами другого класса
// Что бы child одного класса обращался к методам родителя другого класса, нужно прировнять ParrentTwo.prototype = new Parrent.One();
// В таких случаях, this не рекомендуется использовать в ParrentOne функции - так как он будет сказываться на ParrentTwo прототипах
// Так же можно добавлять методы других классов по цепочке
// Плох этот подход тем что нам нужно вызывать отдельные классы и получаем доступ только к их методам но не свойствам
// Хорош он тогда, когда нужно за счёт аргументов методов ParrentOne и ParrentTwo положить что либо в прототип   

    // Наследование классов через Object.create 
// Object.create(prototype ){}; - какой-то другой объект, прототипом которого он будет (в скобках имя объекта);
// Для создания прототипного наследования классов, стоит прировнять ParrentTwo.prototype = Object.create(ParrentOne.prototype){}; 
ParrentTwo.prototype = Object.create(ParrentOne.prototype);



    // Методы и функции в ООП
// getObject - получить информацию из объекта (или другого типа данных);
// setObject - задать информацию в объект (или другой тип данных);
function Human (name, bd, city){
    var email = 'what?';

    this.name = name;
    this.bd = bd;
    this.city = city;
    this.some = 'hello ' + name + ' what happend in ' + city + '?';
    
    this.getEmail = function() {            //задаём
        return email;                       
    };
    this.setEmail = function(mail) {        //получаем
        return email = mail; 
    }
}
var artem = new Human('Artem', '31 july 1987 year', 'Kyiv');
artem.setEmail('umc') ;             // задаём 
artem.getEmail() ;                  // получаем
console.log(artem.getEmail());


console.log('Наследование');
    // Наследование классов через prototype 
// Наследование одним классом методами другого класса
// Что бы child одного класса обращался к методам родителя другого класса, нужно прировнять ParrentTwo.prototype = new Parrent.One();
// В таких случаях, this не рекомендуется использовать в ParrentOne функции - так как он будет сказываться на ParrentTwo прототипах
// Так же можно добавлять методы других классов по цепочке
// Плох этот подход тем что нам нужно вызывать отдельные классы и получаем доступ только к их методам но не свойствам
// Хорош он тогда, когда нужно за счёт аргументов методов ParrentOne и ParrentTwo положить что либо в прототип   

function ParrentOne (nick){this.nick = nick};
ParrentOne.prototype.run = function(old){console.log(this.name * old)};

function ParrentTwo(x, y){ this.name = x + y; return console.log(this.name)};
ParrentTwo.prototype = new ParrentOne();                                // вариант 1 - менее удобный и менее правильный
ParrentTwo.prototype = Object.create(ParrentOne.prototype);             // вариант 2 - более правильный согласно ООП
ParrentTwo.prototype.sleep = function(m){return console.log(this.name + m)};
var childParrentTwo = new ParrentTwo(1, 2);

childParrentTwo;
childParrentTwo.sleep(2);
childParrentTwo.run(3);

    // Наследование классов через Object.create 
// Object.create(prototype ){}; - какой-то другой объект, прототипом которого он будет (в скобках имя объекта);
var data = {
    x: 20,
    str: 'sads'
};
var d = Object.create(data);
console.log(d);

// Для создания прототипного наследования классов, стоит прировнять ParrentTwo.prototype = Object.create(ParrentOne.prototype){}; 
ParrentTwo.prototype = Object.create(ParrentOne.prototype);

