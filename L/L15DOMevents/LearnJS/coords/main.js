'use strict';
window.onload = function(){

    console.log('Lection 15 DOM Events');
    
    console.log('coords');

        // // Координаты в окне
// Координатная система относительно окна браузера начинается в левом-верхнем углу текущей видимой области окна.
// координаты в ней clientX/clientY.

    //  getBoundingClientRect()
// Метод elem.getBoundingClientRect() возвращает координаты элемента, относительно его краев (до девого и верхнего края)
// Координаты могут быть дробными – это нормально, так как они возвращаются из внутренних структур браузера.
// Координаты могут быть и отрицательными, например если прокрутить страницу так, что верх элемента будет выходить за границы окна
// Координаты right/bottom отличаются от CSS-свойств

// Координаты возвращаются в виде объекта со свойствами:
// top – Y-координата верхней границы элемента,
// left – X-координата левой границы,
// right – X-координата правой границы,
// bottom – Y-координата нижней границы.

// Координаты относительно окна не учитывают прокрутку, они высчитываются от границ текущей видимой области.
var button = document.querySelector('.getCoords');
console.log(button.getBoundingClientRect());
var strings = document.querySelector('.strings')
console.log(strings.getClientRects());


    // elementFromPoint(x, y)
// Возвращает элемент, который находится на координатах (x, y) относительно окна.





};