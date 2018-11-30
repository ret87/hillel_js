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
// Метод document.elementFromPoint(x,y) работает только если координаты (x,y) находятся в пределах окна.
// var elem = document.elementFromPoint(x, y);
// используются координаты относительно окна - без прокрутки

var centerX = button.clientWidth
console.log(centerX);
var centerY = button.clientHeight
console.log(centerY);
var elem = document.elementFromPoint(centerX, centerY);
console.log(elem);
elem.style.background = "red";
console.log(elem.tagName);


    // Координаты для position:fixed 
// После нажатия создать елемент после определённого елемента с определённым содержимым на определённое время 
var butt = document.querySelector('.button');
function createMessageUnder(elem, text){
// получить координаты
    var coords = elem.getBoundingClientRect();
// создать элемент для сообщения
    var message = document.createElement('div');
    // стиль лучше задавать классом
    message.style.cssText  = 'position: fixed; color: red';
// второй аргумент функции - содержимое нового елемента
    message.innerHTML  = text;
// к координатам обязательно добавляем "px"!
    message.style.left = coords.left + 'px';
    message.style.top = coords.bottom + 'px';
    return message;
};
// Использование при нажатии на butt  
var mess = createMessageUnder(butt, 'hello');
butt.addEventListener('click', function(){
    document.body.appendChild(mess);
// убрать через 5 сек после нажатия из документа
    setTimeout(function() {
        document.body.removeChild(mess);
    }, 5000);
});


        // // Координаты в документе
// Система координат относительно страницы (относительно документа), начинается в левом-верхнем углу, но не окна, а именно страницы.
// Если провести аналогию с CSS, то координаты относительно окна – это position:fixed, а относительно документа – position:absolute
// координаты в ней называются pageX/pageY.

    // Сравнение систем координат
// Когда страница не прокручена, точки начала координат относительно окна (clientX,clientY) и документа (pageX,pageY) совпадают.

    // Получение координат
// pageY = clientY + текущая вертикальная прокрутка

var butt2 = document.querySelector('.butt2');
console.log('относительно окна '+ butt2.getBoundingClientRect().y);
console.log('относительно документа '+ (butt2.getBoundingClientRect().y + pageYOffset));

function getCoords(elem){
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
    };
};
var getCoords = getCoords(butt2);
console.log(getCoords);


    // Координаты на экране screenX/screenY
// Координаты относительно экрана screenX/screenY отсчитываются от его левого-верхнего угла именно вcего экрана, а не окна браузера.
// Размеры экрана хранятся в глобальной переменной screen

// общая ширина/высота
console.log(screen.width + ' x ' + screen.height);

// доступная ширина/высота (за вычетом таскбара и т.п.)
console.log(screen.availWidth + ' x ' + screen.availHeight);

// Координаты левого-верхнего угла браузера на экране хранятся в window.screenX, window.screenY 
console.log("Браузер находится на " + window.screenX + "," + window.screenY);


};