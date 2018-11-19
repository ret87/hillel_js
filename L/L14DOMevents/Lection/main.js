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
// - path - показывает путь к элементу, это массив и у него есть длинна (4 это минимальная длинна - windows.document.html.body)
// - timeStamp - таймер, показывает время нажатия елемента, после того как страница загрузилась
// - altKey, ctrlKey, shiftKey, metaKey - события при использовании клавиш (альт, контрл, шифл, мета-на маковских клавишах)

console.log('Пример 1');

var block = document.querySelector('.block');
console.log(block);

var fooBar = null;
function click(event){
    event.onclick = console.log(fooBar);
};

block.onclick = click;
block.onclick = function(event){
    if(event.timeStamp > 100){
        console.log(event);
        console.log(event.pageX);
        console.log(event.pageY);
        console.log(event.target);
        console.log(this);
        console.log(event.path);
        console.log(event.timeStamp);
        if(event.altKey === true){
            console.log(event.altKey);
        };
        if(event.ctrlKey === true){
            console.dir(block);
        };
    };
    if(event.metaKey === true){
        console.dir(block);
    };
};


    
    // DOM lvl2
// програмные события (возможность сделать вызов из кода)
// с помощью метода .addEventListener('click', function(elem){} - можно передавать функцию как параметр
// .addEventListener разрешает использовать повторно- заключая более одного действия при одном событии, не перезаписывая предыдущий
// то есть можно передать 2 абсолютно разные задачи при одном действии
// this так же всегда смотрит на элемент его вызвавший - но всегда использовать event.target - он так же смотрит на this 

var block2 = document.querySelector('.block2');
block2.addEventListener('click', function(event){
    console.log(event);
});
block2.addEventListener('click', function(event){
    console.log('second', this);
});
block2.addEventListener('click', function(event){
    console.log('third', this === event.target);
});


        // // events
    // События мыши
var block3 = document.querySelector('.block3');
// dblclick - показывает состояние елемента после одинарного нажатия на него - это составное событие из mousedown и mouseup
block3.addEventListener('click', function(event){
    console.log(event.type, event);
});
// dblclick - показывает состояние елемента после двойного нажатия на него
block3.addEventListener('dblclick', function(event){
    console.log(event.type, event);
});
// mouseover и mouseout - определяют даже при зажатой клавиши мыши
// mouseover - показывает состояние елемента когда мышка наведена на него
block3.addEventListener('mouseover', function(event){
    console.log(event.type, event);
});
// mouseout - показывает состояние елемента после увода курсора мышки с него
block3.addEventListener('mouseout', function(event){
    console.log(event.type, event);
});
// mousemove - показывает состояние елемента во время всего движения курсора мышки по нему
block3.addEventListener('mousemove', function(event){
    console.log(event.type, event);
});
// mousedown - показывает состояние елемента во время нажатия ЛК мышки по нему
block3.addEventListener('mousedown', function(event){
    console.log(event.type, event);
    block3.style.background = 'red';
});
// mouseup - показывает состояние елемента во время отжатия ЛК мышки по нему
block3.addEventListener('mouseup', function(event){
    console.log(event.type, event);
    block3.style.background = 'green';
});


};