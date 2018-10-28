'use strict';
console.log('BOM DOM L13');


console.log('Work with elements DOM L13');


        // // Поиск: getElement* и querySelector*


    // document.getElementById или просто id
// Cтоит следовать правилу уникальности id.
// Если элементу назначен специальный атрибут id, то можно получить его прямо по переменной с именем из значения id.
console.log(content); // - к вложенным
console.log(window['content-holder']);  // - из глобального потока 
// Общепринятой практикой является доступ к элементу вызовом -  document.getElementById("идентификатор").
// getElementById, существует только в контексте document
console.log(document.getElementById("content-holder"));
console.log(document.getElementById("content"));

var ch = document.getElementById("content-holder");
var cont = document.getElementById("content");
ch.style.background = 'blue';
content.style.background = 'red';
cont.style.background = 'yellow';


    // getElementsByTagName
// Метод elem.getElementsByTagName(tag) ищет все элементы с заданным тегом tag внутри элемента elem и возвращает их в виде списка.
// getElementsByTagName может искать внутри любого элемента.
// Возвращается коллекция, а не элемент, её нужно или перебрать в цикле или получить элемент по номеру и уже ему присваивать value

var divs = document.getElementsByTagName('div');
console.log(divs);

var ageTable = document.getElementById('age-table');
var inputEl = ageTable.getElementsByTagName('input');
for(var i=0; i<inputEl.length; i++){
    console.log(inputEl[i].value +' - '+ inputEl[i].checked);
};

var inputEl = ageTable.getElementsByTagName('*'); // - все елементы в ageTable


    // document.getElementsByName
// Вызов document.getElementsByName(name) позволяет получить все элементы с данным атрибутом name.
console.log(document.getElementsByName('age'));


    // getElementsByClassName
// Вызов elem.getElementsByClassName(className) возвращает коллекцию элементов с классом className. 
// Находит элемент и в том случае, если у него несколько классов, а искомый – один из них.
console.log(document.getElementsByClassName('content'));


    // querySelectorAll
// Вызов elem.querySelectorAll(css) возвращает все элементы внутри elem, удовлетворяющие CSS-селектору css.
// Псевдо-классы в CSS-селекторе, в частности :hover и :active, также поддерживаются. 
console.log(document.querySelectorAll('ul > li:last-child'));
for(var i=0;i<document.querySelectorAll('ul > li:last-child').length;i++){
    console.log(document.querySelectorAll('ul > li:last-child')[i].innerHTML);
};


    // querySelector
// Вызов elem.querySelector(css) возвращает не все, а только первый элемент, соответствующий CSS-селектору css.
console.log(document.querySelectorAll('ul > li:last-child')[0]);


    // matches
// Метод elem.matches(css) ничего не ищет, а проверяет, удовлетворяет ли elem селектору css. Он возвращает true либо false.
// Этот метод бывает полезным, когда мы перебираем элементы (в массиве или по обычным навигационным ссылкам) 
// и пытаемся отфильтровать те из них, которые нам интересны.

for(var i=0; i<document.body.children.length;i++){ 
    if(document.body.children[i].matches('div')){
        console.log(document.body.children[i].innerHTML);
    }; 
};


    // closest
// Метод elem.closest(css) ищет ближайший элемент выше по иерархии DOM, подходящий под CSS-селектор css. Сам элемент включчительно.
// Иначе говоря, метод closest бежит от текущего элемента вверх по цепочке родителей и проверяет, 
// подходит ли элемент под указанный CSS-селектор. Если подходит – останавливается и возвращает его.
console.log(document.querySelector('.inputer_td').closest('td').className);
console.log(document.querySelector('.inputer_td').closest('td').tagName);


// Метод	                    Ищет по...	    Ищет внутри элемента?
// getElementById	            id	                -
// getElementsByName	        name	            -	
// getElementsByTagName	        тег или '*'	        ✔	
// getElementsByClassName	    классу	            ✔	
// querySelector	            CSS-селектор	    ✔	
// querySelectorAll	            CSS-селектор	    ✔	