'use strict';
window.onload = function(){

    console.log('DOM events 14');
    console.log('LectionPractice');

    console.log('Задача №1');
// Создать блок на странице. При зажатии мыши на блоке - блок должен перемещатся за мышью до отпускания кнопки.
var block = document.querySelector('.block');

block.style.border = 2 + 'px' + ' ' + 'solid' + ' '  + 'black';
block.style.width = 100 + 'px';
block.style.height = 100 + 'px';
block.addEventListener('mousedown', function(event){
    var coords = getCoords(block);
    var shiftX = event.pageX - coords.left;
    var shiftY = event.pageY - coords.top;
    block.style.position = 'absolute';
    console.log(coords.left, coords.top);
    moveAt(event);
    function moveAt(event) {
        block.style.left = event.pageX - shiftX + 'px';
        block.style.top = event.pageY - shiftY + 'px';
    };
    document.onmousemove = function(event) {
        moveAt(event);
    };
    block.onmouseup = function(){
        document.onmousemove = null;
        block.onmouseup = null;
    };

});
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
};





};