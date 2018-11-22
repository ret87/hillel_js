'use strict';
window.onload = function(){

    console.log('LearnJS DOM Events 15');
    
        console.log('Мультивставка: insertAdjacentHTML и DocumentFragment');
        // // Мультивставка: insertAdjacentHTML и DocumentFragment
    
    // // Оптимизация вставки в документ
// Есть две возможных последовательности:
// 1. Сначала вставить UL в документ, а потом добавить к нему LI:
// var ul = document.createElement('ul');
// document.body.appendChild(ul); // сначала в документ
// for (...) ul.appendChild(li); // потом узлы

var ul = document.createElement('ul');
document.body.appendChild(ul); // сначала в документ
for (var i=0;i<5;i++){
    var li = document.createElement('li');
    ul.appendChild(li); // потом узлы
};
    
// 2. Полностью создать список «вне DOM», а потом – вставить в документ:
// var ul = document.createElement('ul');
// for(var i=0) ul.appendChild(li);   // сначала вставить узлы
// document.body.appendChild(ul); // затем в документ

// Быстрая вставка новых елементов на страницу (на примере ul li)
var ul = document.createElement('ul');
for(var i=0; i<5;i++){
    var li = document.createElement('li');
    ul.appendChild(li);   // сначала вставить узлы
};
document.body.appendChild(ul); // затем в документ

// Быстрое создание двумерного поля
var table = document.createElement('table');
document.body.appendChild(table); // затем в документ
for(var i=0; i<5;i++){
    var tr = document.createElement('tr');
    table.appendChild(tr);   // сначала вставить узлы
    for(var j=0;j<5;j++){
        var td = document.createElement('td');
        tr.appendChild(td);   // сначала вставить узлы
    };
};
// Стили для двумерного поля
var tbs = document.querySelector('table');
tbs.style.border= 1 + 'px' + ' ' + 'solid' + ' ' + 'black';
tbs.style.width = 100 + 'px';
tbs.style.height = 100 + 'px';

var tds = document.querySelectorAll('td');
for(var i=0; i<tds.length;i++){
    tds[i].style.border = 1 + 'px' + ' ' + 'solid' + ' ' + 'red';
};


    // // Добавление множества узлов insertAdjacent
// elem.insertAdjacentHTML(where, html)
// elem.insertAdjacentElement(where, element)
// elem.insertAdjacentText(where, text)

// insertAdjacentHTML
// elem.insertAdjacentHTML(where, html) - позволяет вставлять произвольный HTML в любое место документа, в том числе и между узлами
// html - Строка HTML, которую нужно вставить (что именно мы хотим вставить)
// where    - Куда по отношению к elem вставлять строку. Всего четыре варианта:
// beforeBegin – перед elem.
// afterBegin – внутрь elem, в самое начало.
// beforeEnd – внутрь elem, в конец.
// afterEnd – после elem.
document.body.children[0].children[2].insertAdjacentHTML("afterend", '<li>li3</li><li>li4</li>')
document.body.children[0].children[6].insertAdjacentHTML("beforeend", '<li>li5</li><li>li6</li>')


    // // DocumentFragment
// Вставить пачку узлов единовременно поможет DocumentFragment.  
// У DocumentFragment нет обычных свойств DOM-узлов, таких как innerHTML, tagName и т.п. Это не узел.
// Kогда DocumentFragment вставляется в DOM – то он исчезает, а вместо него вставляются его дети.

// Синтаксис для его создания:              var fragment = document.createDocumentFragment();
// В него можно добавлять другие узлы.      fragment.appendChild(node);
// Его можно клонировать:                   fragment.cloneNode(true); // клонирование с подэлементами

    // // append/prepend, before/after, replaceWith
// nodes – DOM-узлы или строки, в любом сочетании и количестве

// node.append(...nodes)        – вставляет nodes в конец node,
// node.prepend(...nodes)       – вставляет nodes в начало node,
// node.after(...nodes)         – вставляет nodes после узла node,
// node.before(...nodes)        – вставляет nodes перед узлом node,
// node.replaceWith(...nodes)   – вставляет nodes вместо node.
var p = document.createElement('p');
document.body.append('p');
document.body.prepend('p');
document.body.after('p');
document.body.before('p');
// document.body.replaceWith('p');
document.body.children[1].replaceWith('p');




};