'use strict';
window.onload = function(){

    console.log('DOM events 14');

    // // Изменение: change, input, cut, copy, paste

function aplyAll(func) {
        return func.apply(this, [].slice.call(arguments, 1));
};
console.log(aplyAll(Math.min, 5, 7, 2, -2));
};