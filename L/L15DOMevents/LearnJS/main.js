// 'use strict';
window.onload = function(){

    console.log('LearnJS DOM Events 15');
    
        console.log('Мультивставка: insertAdjacentHTML и DocumentFragment');
        // // Мультивставка: insertAdjacentHTML и DocumentFragment
    // Оптимизация вставки в документ
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









};