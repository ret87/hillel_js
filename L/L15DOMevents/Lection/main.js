// 'use strict';
window.onload = function(){

    console.log('Lection 15 DOM Events');
    
        // // Событие

    // Распространение события
// Событие созданное на родители (по дереву ДОМ), отображается и используется так же на его детях.
// При вызове события с чаилда, создаётся путь события (прокликивает от его родителя к чаилду и обратно). 
// Захват (capturing) - Процес движения события от родителя к чаилду. 
// Всплытие (Bubbling) - Процес обратного движения события от чаилда к родителю.
// По умолчанию, браузер выполняет все события как всплытие.

document.querySelector('.block').addEventListener('click', function(event){
    console.log('block', event);
    // console.log('block', event.path);
}, true);

document.querySelector('body').addEventListener('click', function(event){
    console.log('body', event);
    // console.log('body', event.path);
}, true);

// По сути любое событие выполняется дважды. Что бы выполнение работало только по обратному пути -всплытие, используем третий параметр,
// в методе addEventListener(event, funct(){}, capturing) - у него может быть 2 вида true/false, включен или выключен захват.
// По умолчанию там false, если поставим true, то первым выполнится - событие body, а потому уже block.
// Но если прировнять к перменной то будет в порядке очереди, или же регламентировать её с помощью false.


var block1 = document.querySelector('.block1');
var block2 = document.querySelector('.block2');
var block3 = document.querySelector('.block3');
var isTunnel = false;
block1.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'red';
}, isTunnel);
block2.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'green';
}, isTunnel);
block3.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'yellow';
}, isTunnel);



};