'use strict';
window.onload = function(){

    console.log('DOM events 14');

        // // Изменение: change, input, cut, copy, paste
    // Событие change
// Событие change происходит по окончании изменения значения элемента формы, когда это изменение зафиксировано.
// Для текстовых элементов это означает, что событие произойдёт не при каждом вводе, а при потере фокуса.
// Включает собыитие: onchange - то выведет/передаст, то что мы вводим в поле
{/* <input type="text" onchange="console.log(this.value)"> */}
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

// var input = document.querySelectorAll('.input');
// var span = document.querySelectorAll('.span');
// input.oncut = input.oncopy = input.onpaste = function(){
//     span.innerHTML = event.type + ' ' + input.value;
//     return false;
// };



console.log('practice DOM events 14');

var summInn = document.querySelector('.summ');
var summWas = document.querySelector('.was');
var select  = document.querySelector('.select');
var been = document.querySelector('.been');

summInn.oninput = function() {
    summWas.innerHTML = summInn.value;

};


select.oninput = function () {
    var selectedInd = select.options.selectedIndex;
    var selectedNumb = parseInt(this.children[selectedInd].innerHTML); 
    console.log(selectedNumb);

    // been.innerHTML = +summInn.value + (+summInn.value)/100*selectedNumb;
    been.innerHTML = +summInn.value + (+summInn.value)/100*selectedNumb*(12/12);
};

// summInn.onchange = select.oninput;


var timerId = setTimeout(function tick(){
    // summInn.oninput;
    select.oninput;
    setTimeout(tick, 1000);
}, 1000);

// console.log(select.oninput);
// console.dir(summInn.oninput);

};