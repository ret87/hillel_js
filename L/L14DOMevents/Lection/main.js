'use strict';
window.onload = function(){
console.log('DOM events 14');
console.log('Lection');

// var block = document.querySelector('.block');
// console.log(block.getBoundingClientRect());
// console.dir(block);

// function getCoords(elem) {
//     var box = elem.getBoundingClientRect();
//     return {
//         // top: box.top + pageYOffset,
//         // left: box.left + pageXOffset
//     };
// };
// console.log(getCoords(block));


function getDocumentScroll() {
var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
    );
    return {
        top: pageYOffset,
        bottom: pageYOffset + document.documentElement.clientHeight,
        height: scrollHeigh
    };
};


};