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

var calc = document.querySelector('.calc');
var range = document.querySelector('.range');
var empty = document.querySelector('.empty');
var noEmpty = document.querySelector('.noEmpty');
var percent = document.querySelector('.percent');
var sliderValue = slider.value;
var numbValue = numb.value;
var percVal = 0.04;


slider.addEventListener('click', function(){
    numb.value = slider.value;
    numbValue = numb.value;
    range.style.height = numb.value + 'px';
    if(sliderValue <= 20){
        percVal = 0.02;
    } else if (20 < sliderValue <= 50){
        percVal = 0.04;
    } else if (50 < sliderValue <= 75){
        percVal = 0.06;
    } else if (75 < sliderValue <= 100){
        percVal = 0.08;
    };
    percent.style.height = numb.value*0.08 + 'px';

});
numb.addEventListener('click', function(){
    slider.value = numb.value;
    sliderValue = slider.value;
    range.style.height = sliderValue + 'px';
    if(sliderValue <= 20){
        percVal = 0.02;
    } else if (20 < sliderValue <= 50){
        percVal = 0.04;
    } else if (50 < sliderValue <= 75){
        percVal = 0.06;
    } else if (75 < sliderValue <= 100){
        percVal = 0.08;
    };
    percent.style.height = sliderValue*percVal + 'px';
});


calc.style.width = 50 + 'px';
calc.style.margin = 50 + 'px' + ' ' + 50 + 'px' + ' ' + 50 + 'px' + ' ' + 50 + 'px';
calc.style.height = 200 + 'px';
calc.style.border = 2 + 'px' + ' ' + 'solid' + ' ' + 'black';

empty.style.height = 92 + 'px';

noEmpty.style.height = 108 + 'px';
noEmpty.style.display = 'flex';
noEmpty.style.flexDirection = 'column-reverse';

range.style.background = 'green';
range.style.height = sliderValue + 'px';

percent.style.background = 'red';
percent.style.height = sliderValue*percVal + 'px';



};