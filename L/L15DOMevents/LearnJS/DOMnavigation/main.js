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






};