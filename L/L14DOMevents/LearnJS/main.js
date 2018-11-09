'use strict';
window.onload = function(){

    console.log('DOM events 14');

        // // Изменение: change, input, cut, copy, paste
    // Событие change
// Событие change происходит по окончании изменения значения элемента формы, когда это изменение зафиксировано.
// Для текстовых элементов это означает, что событие произойдёт не при каждом вводе, а при потере фокуса.
// Включает собыитие: onchange - то выведет/передаст, то что мы вводим в поле
// <input type="text" onchange="console.log(this.value)">
// Для остальных же элементов: select, input type=checkbox/radio оно срабатывает сразу при выборе значения. 

    // Событие input
// Событие input срабатывает тут же при изменении значения элемента. 
// Мгновенно передаёт состояние в зависимости от того какой тип у елемента
// В современных браузерах oninput – самое главное событие для работы с элементом формы.

    // событие propertychange
// Используется вместо input - работает только в старых (до 10го) IE

    // События cut, copy, paste
//  происходят при вырезании/вставке/копировании значения
// их основное применение – это отмена соответствующей операции.
var input = document.querySelectorAll('.input');
var span = document.querySelectorAll('.span');
input.oncut = input.oncopy = input.onpaste = function(){
    span.innerHTML = event.type + ' ' + input.value;
    return false;
};


};