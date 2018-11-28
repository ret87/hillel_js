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
    event.target.nextElementSibling.innerHTML = 'keypress symb ' + getChar(event);
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

    // Отмена пользовательского ввода
// Появление символа можно предотвратить, если отменить действие браузера на keydown/keypress: keydown="return false"

// Отменять можно не только символ, а любое действие клавиш. Например:
// При отмене Backspace – символ не удалится.
// При отмене PageDown – страница не прокрутится.
// При отмене Tab – курсор не перейдёт на следующее поле.

    // Несовместимости
// Обычные символы работают везде корректно.
// CapsLock под MacOS ведёт себя плохо, не стоит ставить на него обработчики вообще.
// Для других специальных клавиш и сочетаний с ними следует использовать только keydown.

    // Автоповтор
// При долгом нажатии клавиши возникает автоповтор. 
// По стандарту, должны генерироваться многократные события keydown (+keypress), и стоять свойство repeat=true у объекта события.
// Полагаться можно только на keydown при каждом автонажатии и keyup по отпусканию клавиши. Пока keyup не true, работает repeat

    // Итого
// Для реализации горячих клавиш, включая сочетания – используем keydown. Скан-код будет в keyCode, почти все скан-коды кросс-браузерны
// Если нужен именно символ – используем keypress. При этом функция getChar позволит получить символ и отфильтровать лишние срабатывания
// Получать символ можно только при нажатии обычных клавиш, если речь о сочетаниях с модификаторами, то keypress не всегда генерируется.
// Распространённая ошибка – использовать события клавиатуры для работы с полями ввода в формах.
// События клавиатуры предназначены именно для работы с клавиатурой.






};