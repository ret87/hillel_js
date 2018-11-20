'use strict';
window.onload = function(){

    console.log('DOM events 14');
    
    console.log('Задача №1');
    // Задача №1
// Реализовать калькулятор, в котором есть слайдер (input type=”range”) и поле ввода (input type=”number”).
// Изменяя состояние range меняется состояние поля ввода number. И наоборот.
// Реализовать блок-диаграмму, который в пикселях будет отображать значение range. 
// Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.
// Красный блок - количество комиссии. Комиссия вычисляется по формуле:
// (range < 20) -> 2%
// (20 - 50)  -> 4%
// (50 - 75)  -> 6%
// (75 - 100)  -> 8%
// Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. 
// Результирующая сумма: 108. Высота красного блока - 8px

var slider = document.querySelector('.slider');
var numb = document.querySelector('.number');
slider.oninput = function(){
    numb.oninput = function(){
        console.dir(numb.value = slider.value);
        numb.value = null;
    };
    // console.dir(slider.value = numb.valueAsNumber);
};
numb.oninput = function(){
    slider.oninput = function(){
        console.dir(slider.value = numb.valueAsNumber);
        slider.value = null;
    };
    // console.dir(numb.value = slider.value);
};



};