'use strict';
window.onload = function(){

    console.log('BOM DOM 13');
    
    console.log('Задача №1');
    // Задача №1
    // Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую. Использовать setInterval.

    var innerTextarea = document.querySelector('.inTextarea');
    console.dir(innerTextarea);    
    var innerInput = document.querySelectorAll('.inInput');
    console.dir(innerInput);

    var inInputFunc = function (){
        for(var i=0; i<innerInput.length; i++){
            // console.log(innerInput[i].placeholder);
            // console.log(innerInput[i].innerHTML);
            // console.log(innerInput[i].innerHTML);
            // console.log(innerInput[i].value);
            console.log(innerInput[i].value);
        };
    };
    setInterval(inInputFunc, 5000);  
};