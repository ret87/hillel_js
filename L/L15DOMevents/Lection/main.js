'use strict';
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
}, false);

// addEventListener(event, funct(){}, capturing) - третий аргумент - быть 2 видом true/false, включен или выключен захват.
// По умолчанию там false, если поставим true, то первым выполнится - событие body, а потому уже block.
// Но если прировнять к перменной то будет в порядке очереди, или же регламентировать её с помощью false.
// Вложенные елементы прокликиваются насквозь от своих родителей, вызывая тем самым, события родителей связанные с кликом.
// Очередность их вызова будет зависить от 3го параметра в addEventListener capturing. true от родителя к чаилду, false-наборот
// Понимая что сначала идут capturing, а потом Bubbling, можно управлять и задавать очередь всплытия елементов, указывая true/false 


var block1 = document.querySelector('.block1');
var block2 = document.querySelector('.block2');
var block3 = document.querySelector('.block3');

block1.addEventListener('click', function(event){
    this.style.backgroundColor = 'red';
    // event.stopPropagation();    
    console.log('block1')
// }, false);
}, true);
block2.addEventListener('click', function(event){
    this.style.backgroundColor = 'green';
    console.log('block2')
    // event.stopPropagation();
}, false);
// }, true);
block3.addEventListener('click', function(event){
    this.style.backgroundColor = 'yellow';
    console.log('block3')
    // event.stopPropagation();
// }, false);
}, true);


    // Остановка распространения событий
// event.stopPropagation(); - прописывается именно в таком виде в addEventListener в функции, после чего, все события что идут далее 
// по дереву не будут выполняться
// Удобно использовать, когда есть всплывающие окна, или что-то подобное, где определённые события не должны распространяться на 
// все елементы

block3.addEventListener('click', function(event){
    event.stopPropagation();
}, true);




}