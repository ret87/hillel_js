'use strict';
window.onload = function(){

    console.log('LearnJS DOM Events 15');
    
        console.log('Навигация по DOM-элементам');

        // // Навигация по DOM-элементам
// Только для чтения 

    // // Сверху documentElement и body
// Самые верхние элементы дерева доступны напрямую из document.
// <HTML> = document.documentElement
console.log(document.documentElement);
// <BODY> = document.body
console.log(document.body);
// <HEAD> = document.head
console.log(document.head);


    // // Дети: childNodes, firstChild, lastChild
// Дочерние элементы (или дети) – элементы, которые лежат непосредственно внутри данного.
// Потомки – все элементы, которые лежат внутри данного, вместе с их детьми, детьми их детей и так далее. То есть, всё поддерево DOM.

// Дочерние элементы
// childNodes - Псевдо-массив который хранит все дочерние элементы, включая текстовые.
console.log(document.childNodes);
// Перебор всех детей можно сделать через for
for(var i=0; i<document.body.childNodes.length;i++){
    console.log(document.body.childNodes[i]);
};

// Потомки
// firstChild и lastChild обеспечивают быстрый доступ к первому и последнему элементу
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.firstChild === document.body.childNodes[0]);


    // // Коллекции – не массивы
// DOM-коллекции, такие как childNodes и другие не являются JavaScript-массивами.
// В них нет методов массивов, таких как forEach, map, push, pop и других.
// Что бы иметь возможность изменять DOM-коллекции, стоит переприсвоить их к другому массиву

// Применить метод массива через call/apply:
var arr = new Array;
var elements = document.body.childNodes;
arr.forEach.call(elements, function(elem){
    console.log(elem);
});

// При помощи Array.prototype.slice сделать из коллекции массив.
var elems = document.body.childNodes;
elems = Array.prototype.slice.call(elems);
elems.forEach(function(elems){
    console.log(elems);
});


    // // Соседи и родитель
// previousSibling / nextSibling - доступ к элементам слева и справа данного
console.log(document.querySelector('p').nextSibling);
console.log(document.querySelector('p').previousSibling);
// parentNode                    - доступ к родителю элемента
console.log(document.querySelector('li').parentNode);


    // // Навигация только по элементам
// Что бы осуществлять навигацию только по элементам (а не по пустым строчкам - узел текст, или узлам коментариям), используем:
// children                                     – только дочерние узлы-элементы, то есть соответствующие тегам.
console.log(document.querySelector('ul').children);
// firstElementChild, lastElementChild          – соответственно, первый и последний дети-элементы.
console.log(document.querySelector('ul').lastElementChild);
console.log(document.querySelector('ul').firstElementChild);
// previousElementSibling, nextElementSibling   – соседи-элементы.
console.log(document.querySelector('div').previousElementSibling);
console.log(document.querySelector('p').nextElementSibling);
// parentElement                                – родитель-элемент.
console.log(document.querySelector('li').parentElement);

// Вывести только детей елементы:
for(var i=0; i<document.body.children.length;i++){
    console.log(document.body.children[i]);
};


    // // Особые ссылки для таблиц
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






};