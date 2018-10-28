'use strict';
console.log('BOM DOM L13');


console.log('Work with elements DOM L13');


        // // Поиск: getElement* и querySelector*


    // document.getElementById или просто id
// Cтоит следовать правилу уникальности id.
// Если элементу назначен специальный атрибут id, то можно получить его прямо по переменной с именем из значения id.
console.log(content); // - к вложенным
console.log(window['content-holder']);  // - из глобального потока 
// Общепринятой практикой является доступ к элементу вызовом -  document.getElementById("идентификатор").
// getElementById, существует только в контексте document
console.log(document.getElementById("content-holder"));
console.log(document.getElementById("content"));

var ch = document.getElementById("content-holder");
var cont = document.getElementById("content");
ch.style.background = 'blue';
content.style.background = 'red';
cont.style.background = 'yellow';


    // getElementsByTagName
// Метод elem.getElementsByTagName(tag) ищет все элементы с заданным тегом tag внутри элемента elem и возвращает их в виде списка.
// getElementsByTagName может искать внутри любого элемента.
// Возвращается коллекция, а не элемент, её нужно или перебрать в цикле или получить элемент по номеру и уже ему присваивать value

var divs = document.getElementsByTagName('div');
console.log(divs);


var ageTable = document.getElementById('age-table');
var inputEl = ageTable.getElementsByTagName('input');
for(var i=0; i<inputEl.length; i++){
    console.log(inputEl[i].value +' - '+ inputEl[i].checked);
};

var inputEl = ageTable.getElementsByTagName('*'); // - все елементы в ageTable
