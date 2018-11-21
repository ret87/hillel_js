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

// 2. Полностью создать список «вне DOM», а потом – вставить в документ:
// var ul = document.createElement('ul');
// for(...) ul.appendChild(li);   // сначала вставить узлы
// document.body.appendChild(ul); // затем в документ

// /* 1. Вставляет TBODY в документ сразу. а затем элементы */
var appendFirst = new function() {
    var benchTable;
    this.setup = function() { // очистить всё
        benchTable = document.getElementById('bench-table')
        while (benchTable.firstChild) {
        benchTable.removeChild(benchTable.firstChild);
    };
};
this.work = function() { // встаить TBODY и элементы
    var tbody = document.createElement('TBODY');
    benchTable.appendChild(tbody);
    for (var i = 0; i < 20; i++) {
        var tr = document.createElement('TR');
        tbody.appendChild(tr);
        for (var j = 0; j < 20; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('' + i.toString(20) + j.toString(20)));
            tr.appendChild(td);
      };
    };
  };
};











};