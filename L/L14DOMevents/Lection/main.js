'use strict';
window.onload = function(){
console.log('DOM events 14');
console.log('Lection');

        // // События
// Модель экшна - когда система может реагировать на определённые процессы.
// События: 
// клавиатура, мышь, окно браузера.
// Открытие/закрытие окна, ресайз, скролл.
// Формы отправка, фокус, инпут, чендж, сабгет.
// Ссылки нажатие, переход
// Каммон события клики разными кнопками (нажатие, удержание, отпуск, даблклик), движени мышки (приход, уход, движение по объекту)
// Клавиатурные нажатия (разные клавиши)

// События - это заранее отложенное действие (callback функция, с определёнными параметрами и контекстом).
// В событиях this всегда смотрит на тот тег на котором это событие было вызвано.

// У MouseEvent есть много различных свойств: 
// - координаты курсора, его клацания - относительно страницы, елемента, с учетом прокрутки страницы и т.д.
// - target ссылка на элемент - target (работает как this, но предпочтительнее)
// - path - показывает путь к элементу
// 

console.log('Пример 1');

var block = document.querySelector('.block');

var fooBar = null;
function click(elem){
    elem.onclick = console.log(fooBar);
};

block.onclick = click;
block.onclick = function(elem){
    console.log(elem);
    console.log(elem.pageX);
    console.log(elem.pageY);
    console.log(elem.target);
    console.log(this);
    console.log(elem.path);
};







};