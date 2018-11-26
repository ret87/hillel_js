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


    // // Мышь: движение mouseover/out, mouseenter/leave
// События mouseover/mouseout, свойство relatedTarget
// Событие mouseover происходит, когда мышь появляется над элементом, а mouseout – когда уходит из него.
textTwo.addEventListener('mouseover', function(e){
    this.style.background = 'red';
});
textTwo.addEventListener('mouseout', function(e){
    this.style.background = 'white';
});
// relatedTarget - покажет, с какого элемента пришла (с помощью mouseover) или ушла (с помощью mouseout) мышь.
textTwo.addEventListener('mouseover', function(e){
    console.log(event.target);                  // елемент на который пришла мышь
    console.log(event.relatedTarget);           // елемент с которого пришла мышь

});
textTwo.addEventListener('mouseout', function(e){
    console.log('target' + event.target);                  // елемент с которого пришла мышь
    console.log('related' + event.relatedTarget);           // елемент на который пришла мыщь
});


    // Частота событий
// Событие mousemove срабатывает при передвижении мыши
// События mousemove и mouseover/mouseout срабатывают так часто, насколько это позволяет внутренняя система взаимодействия браузера.
// DOM-элементы, через которые мышь проходит на большой скорости, могут быть пропущены.

    // «Лишний» mouseout при уходе на потомка
// При переходе на потомка срабатывает mouseout на родителе.
// Согласно браузерной логике, курсор мыши может быть только над одним элементом – самым глубоким в DOM (и верхним по z-index).
// У обработчиков создаётся впечатление, что курсор ушёл mouseout с родителя, а затем тут же перешёл mouseover на него же 
// (за счёт всплытия mouseover с потомка). Получается как бы он был вызван дважды (навели=1, отвели на потомка=1, навод на потомка=2)

    // События mouseenter и mouseleave и mousemove
// Бывает важно отследить момент «настоящего» ухода - понять, когда элемент зашёл на родителя, а когда ушёл – без учёта переходов.
// Курсор заходит на элемент – срабатывает mouseenter, а затем – неважно, куда он внутри него переходит, mouseleave.
// Но они не всплывают!
// События mouseover/mouseout подразумевают, что курсор находится над одним, самым глубоким элементом.
// Они срабатывают при переходе с родительского элемента на дочерний.

var block = document.getElementById('block');
block.style.width = 150+'px';
block.style.height = 150+'px';
block.style.border = 1+'px'+' '+"solid"+" "+"black";

block.addEventListener('mouseenter', function(e){
    block.style.background = 'brown';
});
block.addEventListener('mouseleave', function(e){
    block.style.background = null;
});


    // Делегирование
// события mouseenter/leave не всплывают, они срабатывают именно на том элементе, на котором стоит обработчик и только на нём.
// Если обработчики mouseenter/leave стоят на <table>, то они сработают при входе-выходе из таблицы, 
// но получить из них какую-то информацию о переходах по её ячейкам невозможно.
var table = document.getElementById('table');
table.addEventListener('mouseover', function(e){
    event.target.style.background = 'red';
});
table.addEventListener('mouseout', function(e){
    event.target.style.background = null;
});





};