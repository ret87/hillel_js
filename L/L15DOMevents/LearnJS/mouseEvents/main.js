'use strict';
window.onload = function(){

    console.log('Lection 15 DOM Events');
    
    console.log('Mouse Events');

        // // Мышь: клики, кнопка, координаты
    // Типы событий мыши
// Простые события
var button = document.querySelector('button');
button.style.width = 35+'px';
button.style.height = 25+'px';
// mousedown -  Кнопка мыши нажата над элементом.
button.addEventListener('mousedown', function(){
    console.log(event.type);
});
// mouseup   -  Кнопка мыши отпущена над элементом.
button.addEventListener('mouseup', function(){
    console.log(event.currentTarget);
});
// mouseover -  Мышь появилась над элементом.
button.addEventListener('mouseover', function(){
    console.log(event.clientX);
});
// mouseout  -  Мышь ушла с элемента.
button.addEventListener('mouseout', function(){
console.log(event.clientY);
});
// mousemove -  Каждое движение мыши над элементом генерирует это событие.
button.addEventListener('mousemove', function(){
    console.log('mousemove');
});

// Комплексные события
// click        - Вызывается при клике мышью, то есть при mousedown, а затем mouseup на одном элементе
button.addEventListener('click', function(){
    button.style.background = 'red';
});
// contextmenu  - Вызывается при клике правой кнопкой мыши на элементе.
button.addEventListener('contextmenu', function(){
    button.style.background = 'green';
});
// dblclick     - Вызывается при двойном клике по элементу.
button.addEventListener('dblclick', function(){
    button.style.background = 'blue';
});

// Порядок срабатывания событий
// Одно действие может вызывать несколько событий.
// В тех случаях, когда одно действие генерирует несколько событий, их порядок фиксирован.
// Каждое событие обрабатывается независимо.


    // Получение информации о кнопке: which
// При обработке событий, связанных с кликами мыши, бывает важно знать, какая кнопка нажата.
// Для получения кнопки мыши в объекте event есть свойство which.

// event.which == 1 – левая кнопка
// event.which == 2 – средняя кнопка
// event.which == 3 – правая кнопка


    // Правый клик: oncontextmenu
// Вызывает контекстное меню,  можно присвоить своё действие
button.addEventListener('contextmenu', function(){
    console.log('contextmenu');
});
// Можно отменить вызов контекстного меню по умолчанию
button.oncontextmenu = function(){
    return false;
};


    // Модификаторы shift, alt, ctrl и meta
// Во всех событиях мыши присутствует информация о нажатых клавишах-модификаторах.
// shiftKey             - shift
button.addEventListener('click', function(e){
    if(!e.shiftKey) return;
    console.log('shift + click');
});

// altKey               - alt
button.addEventListener('click', function(e){
    if(!e.altKey) return; 
    console.log('altKey + click');
});
// // ctrlKey              - ctrl
button.addEventListener('click', function(e){
    if(!e.ctrlKey) return;
    console.log('ctrlKey + click');
});
// // metaKey (для Mac)    - CMD (mac)
button.addEventListener('click', function(e){
    if(!e.metaKey) return;
    console.log('metaKey + click');
});


    // Координаты в окне: clientX/Y
// Пара свойств clientX/clientY содержит координаты курсора относительно текущего окна.
// В той же системе координат работает и метод elem.getBoundingClientRect(), возвращающий координаты элемента, а также position:fixed.
// Координаты курсора относительно окна - выведны в значение елемента текст
var text = document.getElementById('text');
text.addEventListener('mousemove', function(e){
    this.value = event.clientX + ':' + event.clientY;
});

    // Координаты относительно документа: pageX/Y
// Координаты курсора относительно документа находятся в свойствах pageX/pageY.
// Эти координаты – относительно левого-верхнего узла документа, а не окна, то они учитывают прокрутку. 
var textTwo = document.getElementById('textTwo');
textTwo.addEventListener('mousemove', function(e){
    this.value = event.pageX + ':' + event.pageY;
});






};