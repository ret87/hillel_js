'use strict';
window.onload = function(){

    console.log('Lection 15 DOM Events');
    
    console.log('Клавиатура: keyup, keydown, keypress');

        // // Клавиатура: keyup, keydown, keypress

    // События keydown и keyup
// События keydown/keyup происходят при нажатии/отпускании клавиши и позволяют получить её скан-код в свойстве keyCode.
// Скан-код клавиши одинаков в любой раскладке и в любом регистре.
var keydown = document.querySelector('.keydown');
// console.dir(text.event)
keydown.addEventListener('keydown', function(event){
    event.target.nextElementSibling.innerHTML = 'keyCode =' + event.keyCode + ' charCode =' + event.charCode + ' which ='+event.which;
});

// Tаблицы кодов в различных браузерах почти полностью совпадают.
// Таблица несовместимостей:
// Клавиша	    Firefox	    Остальные браузеры
//    ;	       59	           186
//    =	       107	           187
//    -	       109	           189

    // Событие keypress
// Событие keypress возникает сразу после keydown, если нажата символьная клавиша, т.е. нажатие приводит к появлению символа.
// Любые буквы, цифры генерируют keypress. Управляющие клавиши, такие как Ctrl, Shift, F1, F2… – keypress не генерируют.
// Событие keypress позволяет получить код символа. В отличие от скан-кода, он специфичен именно для символа и различен для "z" и "я".

// Получение символа в keypress использование в DOM 
var keypress = document.querySelector('.keypress');
keypress.addEventListener('keypress', function(event){
    event.target.nextElementSibling.innerHTML = 'event.keyCode ' + getChar(event)+'';
});
// Получение символа в keypress функция  - getChar(event) 
function getChar(event){
    if (event.which == null) { // IE
        if (event.keyCode < 32) return null; // спец. символ
        return String.fromCharCode(event.keyCode)
    };
    if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if (event.which < 32) return null; // спец. символ
        return String.fromCharCode(event.which); // остальные
    };
    return null; // спец. символ
};




};