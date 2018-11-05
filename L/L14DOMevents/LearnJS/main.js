'use strict';
window.onload = function(){

    console.log('DOM events 14');

    // // Изменение: change, input, cut, copy, paste

function printNumbersInterval(){
    var i = 1;
    var timerID = setTimeout(function tick(){
        if(i <= 20){
            console.log (i++);
        };
        setTimeout(tick, 100);
    },100)
};
printNumbersInterval();

};