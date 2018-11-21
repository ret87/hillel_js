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

var ul = document.createElement('ul');
for(var i=0; i<5;i++){
    var li = document.createElement('li');
    ul.appendChild(li);   // сначала вставить узлы
};
document.body.appendChild(ul); // затем в документ

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

var tds = document.getElementsByTagName('td');
console.log(tds.length);
// tds.style =
// for(var i=0; i<list;i++){
    
// };









};