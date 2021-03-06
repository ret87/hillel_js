'use strict';
window.onload = function(){

    console.log('LearnJS DOM Events 15');
    
        console.log('Атрибуты и DOM-свойства');

        // // Атрибуты и DOM-свойства
// HTML-атрибуты и DOM-свойства обычно, но не всегда соответствуют друг другу, нужно это понимать, чтобы работать с ними правильно.
// Например, если тег выглядит как <body id="page">, то у объекта будет свойство body.id = "page".

    // // Свои DOM-свойства и методы
// Нестандартные свойства и методы видны только в JavaScript и никак не влияют на отображение соответствующего тега.
// document.body.newProp = {key: value, key2: value};

// Свои DOM-свойство
document.body.newProp = {
    key: 'value',
    key2: 'value2'
};
console.log(document.body.newProp);
console.log(document.body.newProp.key2);

// Свои DOM-методы
document.body.consName = function(){
    console.log(this.nodeName);
};
document.body.consName();


    // // Атрибуты
// Элементам DOM, с другой стороны, соответствуют HTML-теги, у которых есть текстовые атрибуты.
// Доступ к атрибутам осуществляется при помощи стандартных методов:
// elem.hasAttribute(name)          – проверяет наличие атрибута
// elem.getAttribute(name)          – получает значение атрибута
// elem.setAttribute(name, value)   – устанавливает атрибут
// elem.removeAttribute(name)       – удаляет атрибут
console.log(document.body.children[0].setAttribute('id', 'p'));
console.log(document.body.children[0].getAttribute('id'));
console.log(document.body.children[0].hasAttribute('id'));
console.log(document.body.children[0].removeAttribute('id'));

    // elem.attributes
// Также все атрибуты элемента можно получить с помощью свойства elem.attributes, которое содержит псевдо-массив объектов
// Не чувствителен к регистру и видны в innerHTML элемента
console.log(document.body.children[0].attributes);
// var attrs = elem.attributes; // (4) можно получить коллекцию атрибутов
// for (var i = 0; i < attrs.length; i++) {
//     alert( attrs[i].name + " = " + attrs[i].value );
// };

    // Вывести значение атрибута
document.body.children[1].href = '/';
console.log(document.body.children[1].getAttribute('href'));        // - выведет значение из href
console.log(document.body.children[1].href);                        // - выведет значение в html
// DOM-свойство которое имеет логическое значение true/false - можно убирать или задавать с помощью remove/set или = true/false

    // Исходное значение value
// Изменение некоторых свойств обновляет атрибут. Но это скорее исключение, чем правило.
// Чаще синхронизация – односторонняя: свойство зависит от атрибута, но не наоборот.

// Aтрибут elem.getAttribute('value') хранит исходное значение даже после того, как пользователь заполнил поле и свойство изменилось.
document.querySelector('a').value = 'b';
console.log(document.querySelector('a').getAttribute('value'));
console.log(document.querySelector('a').getAttribute('value') == 'b');
console.log(document.querySelector('a').getAttribute('value') == 'a');
console.log(document.querySelector('a').setAttribute('value', 'b'));
console.log(document.querySelector('a').getAttribute('value'));


    // // Классы в виде строки: className
// Атрибуту "class" соответствует свойство className.
console.log(document.querySelector('p').className = 'p p2');

// атрибуту for (<label for="...">) соответствует свойство с названием htmlFor.

    // // Классы в виде объекта: classList
// Атрибут class – уникален. Ему соответствует аж целых два свойства!
// Свойство classList – это объект для работы с классами.

    // Методы classList:
// elem.classList.contains("class")     – возвращает true/false, в зависимости от того, есть ли у элемента класс class.
// elem.classList.add/remove("class")   – добавляет/удаляет класс class
// elem.classList.toggle("class")       – если класса class нет, добавляет его, если есть – удаляет.

console.log(document.querySelector('p').classList.add('p3'));
console.log(document.querySelector('p').classList);

// Mожно перебрать классы через for, так как classList – это псевдо-массив.
for(var i=0; i<document.querySelector('p').classList.length; i++){
    console.log(document.querySelector('p').classList[i]);
};

    // // Нестандартные атрибуты
// У каждого элемента есть некоторый набор стандартных свойств
// Свойство является стандартным, только если оно описано в стандарте именно для этого элемента.
// То есть, если назначить элементу <img> атрибут href, то свойство img.href от этого не появится. 
// Как, впрочем, и если назначить ссылке <a> атрибут alt.
// С помощью нестандартных атрибутов можно привязать к элементу данные, которые будут доступны в JavaScript.
// Нестандартные атрибуты иногда используют для CSS, так как  манипулировать атрибутом из JavaScript гораздо проще.
// Значение атрибута – произвольная строка, значение класса – это «есть» или «нет», поэтому атрибуты «мощнее» и удобнее классов.
// Обращение к атрибуту в CSS:
// <style>      .order[order-state="new"]       {color: green;}    </style>
// А после можно уже и через JS с ним обращаться
// div.setAttribute('order-state', 'canceled');


    // // Свойство dataset, data-атрибуты
// С помощью нестандартных атрибутов можно привязать к элементу данные, которые будут доступны в JavaScript.
// Как правило, это делается при помощи атрибутов с названиями, начинающимися на data-, например:
console.log(document.querySelector('p').setAttribute('data-p', 'p1'));
console.log(document.querySelector('p').setAttribute('data-about', 'p-element'));
console.log(document.querySelector('p').getAttribute('data-p'));

// K таким атрибутам можно обратиться не только как к атрибутам, но и как к свойствам, при помощи специального свойства dataset
console.log(document.querySelector('p').dataset.p);
console.log(document.querySelector('p').dataset.about);






};