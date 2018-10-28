'use strict';
console.log('BOM DOM L13');


console.log('DOM tree navigation L13');

        // // Навигация по DOM-элементам
// DOM позволяет делать что угодно с HTML-элементом и его содержимым, но для этого нужно сначала нужный элемент получить.
// Доступ к DOM начинается с объекта document. Из него можно добраться до любых узлов.


    // Первые documentElement и body
// Самые верхние элементы дерева доступны напрямую из document.
// Нельзя получить доступ к элементу, которого еще не существует в момент выполнения скрипта - одна из причин скрипты выполнять вконце
// null в DOM - «нет такого элемента» или «узел не найден»
// <HTML> =     document.documentElement
// <BODY> =     document.body
// <head> =     document.head


    // Дети: childNodes, firstChild, lastChild
// Дочерние элементы (или дети) – элементы, которые лежат непосредственно внутри данного. 
// Потомки – все элементы, которые лежат внутри данного, вместе с их детьми, детьми их детей и так далее. То есть, всё поддерево DOM.
// Псевдо-массив childNodes - хранит все дочерние элементы, включая текстовые.

// Перебор всех елементов documentв body
for(var i=0; i<document.body.childNodes.length; i++){
    console.log(document.body.childNodes[i]);
};
// Первый потомок елемента -  elem.firstChild
// Последний потомок елемента -   elem.lastChild


    // Коллекции – не массивы
// DOM-коллекции, такие как childNodes и другие, которые мы увидим далее, не являются JavaScript-массивами (нет доступа к методам)
// Нельзя перебирать коллекцию через for..in
// Коллекции – наглядный пример, почему нельзя. Они похожи на массивы, но у них есть свои свойства и методы, которых в массивах нет.

// Покажет не только дочерние елементы но и куча других служебных свойств 
var elems = document.documentElement.childNodes;
for (var key in elems) {
    console.log( elems[key] ); // 0, 1, 2, length, item
};
// Что бы пользоваться методами массива: 
// 1. Применить метод массива через call/apply
var elems = document.documentElement.childNodes;
[].forEach.call(elems, function(elem) {
    console.log( elem ); // HEAD, текст, BODY
});
// 2. При помощи Array.prototype.slice сделать из коллекции массив.
var elems = document.documentElement.childNodes;
elems = Array.prototype.slice.call(elems);
elems.forEach(function(elem){
    console.log(elem.tagName);
});


    // Соседи и родитель

// Доступ к элементам слева и справа данного можно получить по ссылкам previousSibling / nextSibling.
// Родитель доступен через parentNode. Если долго идти от одного элемента к другому, то рано или поздно дойдёшь до корня DOM, 
// то есть до document.documentElement, а затем и document.
console.log(document.body.previousSibling); // Доступ к элементам слева данного 
console.log(document.head.nextSibling); // Доступ к элементам справа данного 
console.log(document.body.parentNode);  // Доступ к элементам родителя данного 


    // Навигация только по элементам
// children     – только дочерние узлы-элементы, то есть соответствующие тегам.
// firstElementChild, lastElementChild      – соответственно, первый и последний дети-элементы.
// previousElementSibling, nextElementSibling   – соседи-элементы.
// parentElement    – родитель-элемент.
for (var i=0; i<document.body.children.length; i++){
    console.log(document.body.children[i]);
};


    // Особые ссылки для таблиц

// У конкретных элементов DOM могут быть свои дополнительные ссылки для большего удобства навигации.
    // TABLE
// table.rows – коллекция строк TR таблицы.
// table.caption/tHead/tFoot – ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
// table.tBodies – коллекция элементов таблицы TBODY, по спецификации их может быть несколько.
// THEAD/TFOOT/TBODY
// tbody.rows – коллекция строк TR секции.
    // TR
// tr.cells – коллекция ячеек TD/TH
// tr.sectionRowIndex – номер строки в текущей секции THEAD/TBODY
// tr.rowIndex – номер строки в таблице
    // TD/TH
// td.cellIndex – номер ячейки в строке

// Выведет дитё body и содержимое номера столбца и строки
var table = document.body.children[2];
console.log(table.rows[0].cells[0].innerHTML) ;



console.log('Лекционная практика');
console.log(document.head);
console.log(document.body.children[1]);
console.log(document.body.children[1].children[1]);

console.log(document.body.children[3]);
var table1 = document.body.children[3];

for(var i=0; i<table1.rows.length; i++){
    // for(var j=0;j<table1.rows[i].cells.length;j++){
        // if(i==j){
            // table1.rows[i].cells[j].style.backgroundColor = 'red';
        // };

    // };
    table1.rows[i].cells[i].style.backgroundColor = 'red';
};

