// 'use strict';
window.onload = function(){

    console.log('DOM events 14');
    console.log('events Details');

                            // // События в деталях


        // // Мышь: клики, кнопка, координаты
    // Типы событий мыши

    // // Простые события

    // Кнопка мыши нажата над элементом.
// mousedown

    // Кнопка мыши отпущена над элементом.
// mouseup

    // Мышь появилась над элементом.
// mouseover

    // Мышь ушла с элемента.
// mouseout

    // Каждое движение мыши над элементом генерирует это событие.
// mousemove

    // // Комплексные события -  можно составить из простых
    
    // Вызывается при клике мышью, то есть при mousedown, а затем mouseup на одном элементе
// click

    // Вызывается при клике правой кнопкой мыши на элементе.
// contextmenu

    // Вызывается при двойном клике по элементу.
// dblclick

    // Порядок срабатывания событий:
// * Одно действие может вызывать несколько событий.
// * Каждое событие обрабатывается независимо.

    // Получение информации о кнопке: which
// Для получения кнопки мыши в объекте event есть свойство which.
// Возможны следующие значения:
// * event.which == 1 – левая кнопка
// * event.which == 2 – средняя кнопка
// * event.which == 3 – правая кнопка
// обычно обработчик вешается либо onclick – только на левую кнопку мыши, либо oncontextmenu – только на правую.

    // Правый клик: oncontextmenu
// Это событие срабатывает при клике правой кнопкой мыши (меню будет стандартным от клика мышки):
// <button oncontextmenu="alert('Клик!');">Правый клик сюда</button>
// Если мы не хотим, чтобы показывалось встроенное меню, например потому что показываем своё
// <button oncontextmenu="alert('Клик!');return false">Правый клик сюда</button>

    // Модификаторы shift, alt, ctrl и meta
// Во всех событиях мыши присутствует информация о нажатых клавишах-модификаторах.
// Соответствующие свойства:
// * shiftKey
// * altKey
// * ctrlKey
// * metaKey (для Mac)

    // Кнопка ниже сработает только на Alt+Shift+Клик:
// document.body.children[0].onclick = function(e) {
//     if (!e.altKey || !e.shiftKey) return;
//     alert( 'Ура!' );
// };

    // Правый клик: oncontextmenu
// Это событие срабатывает при клике правой кнопкой мыши (меню будет стандартным от клика мышки):
// document.getElementsByTagName('button').oncontextmenu="alert('Клик!');"
// Если мы не хотим, чтобы показывалось встроенное меню, например потому что показываем своё
// document.getElementsByTagName('button').oncontextmenu="alert('Клик!');return false"

    // Координаты в окне: clientX/Y
// clientX/clientY содержат координаты курсора считаются относительно окна, а не документа.
// В той же системе координат работает и метод elem.getBoundingClientRect(), возвращающий координаты элемента, а также position:fixed.
// document.getElementsByTagName('input').onmousemove="this.value = event.clientX+':'+event.clientY"

    // Относительно документа: pageX/Y
// Координаты курсора относительно документа находятся в свойствах pageX/pageY.
// Эти координаты – относительно левого-верхнего узла документа, а не окна, то они учитывают прокрутку
// document.getElementsByTagName('input').onmousemove="this.value = event.pageX+':'+event.pageY"
// В той же системе координат работает position:absolute, если элемент позиционируется относительно документа.

var ul = document.querySelector('ul');
console.dir(ul);
var lastClickedLi = null;
ul.onclick = function(event) {
    var target = event.target;
    // // возможно, клик был внутри списка UL, но вне элементов LI
    if (target.tagName != "LI") return;
    // // для Mac проверяем Cmd, т.к. Ctrl + click там контекстное меню
    if (event.metaKey || event.ctrlKey) {
        toggleSelect(target);
    } else if (event.shiftKey) {
        selectFromLast(target);
    } else {
        selectSingle(target);
    };
    lastClickedLi = target;
};

ul.onmousedown = function() {
    return false;
};

function toggleSelect(li){
    li.classList.toggle('selected');
};

function selectFromLast(target) {
    var startElem = lastClickedLi || ul.children[0];
    var isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;
    if (isLastClickedBefore) {
        for (var elem = startElem; elem != target; elem = elem.nextElementSibling) {
            elem.classList.add('selected');
        };
    } else {
        for (var elem = startElem; elem != target; elem = elem.previousElementSibling) {
            elem.classList.add('selected');
        };
    };
    elem.classList.add('selected');
};

function deselectAll() {
  for (var i = 0; i < ul.children.length; i++) {
      ul.children[i].classList.remove('selected');
    };
};

function selectSingle(li) {
    deselectAll();
    li.classList.add('selected');
};







};