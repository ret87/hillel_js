
                                        // DOM BOM JS // 

                // // Окружение: DOM, BOM и JS

// Объект Window имеет двойную локацию - он с одной стороны является глобальным объектом в JavaScript, 
// с другой – содержит свойства и методы для управления окном браузера
// Т.е. через Window в JS можно обращаться к браузеру
// Открыть страницу по адресу - window.open('http://ya.ru');

    // Объектная модель документа (DOM - document )
// document.body.style.background = 'red'; - Глобальный объект document даёт возможность взаимодействовать с содержимым страницы.

    // Объектная модель браузера (BOM)
// BOM – это объекты для работы с чем угодно, кроме документа.

    // Объектная модель браузера (BOM - brauser object model)
// BOM – это объекты для работы с чем угодно, кроме документа.
// * Объект navigator содержит общую информацию о браузере и операционной системе. примечательны два свойства: 
//     - navigator.userAgent – содержит информацию о браузере (console.log(navigator.platform);)
//     - navigator.platform – содержит информацию о платформе, позволяет различать Windows/Linux/Mac 
// * Объект location содержит информацию о текущем URL страницы и позволяет перенаправить посетителя на новый URL.
// * Функции alert/confirm/prompt – тоже входят в BOM.


                // // Дерево DOM

    // DOM – это представление документа в виде дерева объектов, доступное для изменения через JavaScript.
// DOM - объектная модель, используемая для XML/HTML-документов, это основной инструмент работы и динамических изменений на странице.
// Согласно DOM-модели, документ является иерархией, деревом.
// Вложенные теги становятся дочерними узлами.
// Типы узлов (всего их 12, но на практике столкнёмся мы с 4ми):
//  - Документ – точка входа в DOM.
//  - Элементы – основные строительные блоки.
//  - Текстовые узлы – содержат, собственно, текст.
//  - Комментарии – иногда в них можно включить информацию, которая не будет показана, но доступна из JS.
// IE8- не генерирует текстовые узлы, если они состоят только из пробелов.

    // Узлы DOM
// У дерева DOM есть узлы, теги образуют - узлы-элементы; Текст внутри элементов образует текстовые узлы; 
// Пробелы и переводы строки – это тоже текст, полноправные символы, которые учитываются в DOM.

    // Автоисправление
// При генерации DOM браузер самостоятельно обрабатывает ошибки в документе, закрывает теги и так далее.
// <html>, <body>, <tbody> - все эти елементы, мы можем не указать но DOM нас поправит. 
// Всё, что есть в HTML, находится и в DOM.

    // Возможности, которые дает DOM
// DOM нужен для того, чтобы манипулировать страницей – читать информацию из HTML, создавать и изменять элементы.
// console.log(document.documentElement); - даёт доступ ко всему дереву елементов html - покажет как console
// DOM предоставляет возможность делать со страницей всё, что угодно.

                // // Работа с DOM из консоли

    // Доступ к элементу
// Через свойство  Inspect Element на странице браузера у нас есть возможность узнать больше о любом елементе 
//  - Computed Style - итоговые свойства CSS элемента, которые он приобрёл в результате применения всего каскада стилей
//  - Style - Каскад стилей, применённый к элементу. Каждое стилевое правило отдельно, здесь же можно менять стили кликом.
//  - Metrics -  Размеры элемента.
// и др...
// DOM во вкладке Elements не отображает пробельные узлы

    // Методы консоли
// Выбранные элементы $0 $1…
// Находясь во вкладке Consol, нажав ESC - мы попадаем в консоль для выбранных елементов 
// $n - означает выбрать n-ый елемент в DOM - счёт идёт с конца 0 - последний, прибавив к нему .style - можно изменить его стиль
// $$("div.my") – ищет все элементы в DOM по данному CSS-селектору.
// $("div.my") – ищет первый элемент в DOM по данному CSS-селектору.


        // // Навигация по DOM-элементам
// DOM позволяет делать что угодно с HTML-элементом и его содержимым, но для этого нужно сначала нужный элемент получить.
// Доступ к DOM начинается с объекта document. Из него можно добраться до любых узлов.


    // Первые documentElement и body
// Самые верхние элементы дерева доступны напрямую из document.
// Нельзя получить доступ к элементу, которого еще не существует в момент выполнения скрипта - одна из причин скрипты выполнять вконце
// null в DOM - «нет такого элемента» или «узел не найден»
// <HTML> =     document.documentElement
// <BODY> =     document.body
// <head> =     document.head


    // Дети: childNodes, firstChild, lastChild
// Дочерние элементы (или дети) – элементы, которые лежат непосредственно внутри данного. 
// Потомки – все элементы, которые лежат внутри данного, вместе с их детьми, детьми их детей и так далее. То есть, всё поддерево DOM.
// Псевдо-массив childNodes - хранит все дочерние элементы, включая текстовые.

// Перебор всех елементов documentв body
// for(var i=0; i<document.body.childNodes.length; i++){
//     console.log(document.body.childNodes[i]);
// };
// Первый потомок елемента -  elem.firstChild
// Последний потомок елемента -   elem.lastChild


    // Коллекции – не массивы
// DOM-коллекции, такие как childNodes и другие, которые мы увидим далее, не являются JavaScript-массивами (нет доступа к методам)
// Нельзя перебирать коллекцию через for..in
// Коллекции – наглядный пример, почему нельзя. Они похожи на массивы, но у них есть свои свойства и методы, которых в массивах нет.

// Покажет не только дочерние елементы но и куча других служебных свойств 
// var elems = document.documentElement.childNodes;
// for (var key in elems) {
//     console.log( elems[key] ); // 0, 1, 2, length, item
// };
// Что бы пользоваться методами массива: 
// 1. Применить метод массива через call/apply
// var elems = document.documentElement.childNodes;
// [].forEach.call(elems, function(elem) {
//     console.log( elem ); // HEAD, текст, BODY
// });
// 2. При помощи Array.prototype.slice сделать из коллекции массив.
// var elems = document.documentElement.childNodes;
// elems = Array.prototype.slice.call(elems);
// elems.forEach(function(elem){
//     console.log(elem.tagName);
// });


    // Соседи и родитель

// Доступ к элементам слева и справа данного можно получить по ссылкам previousSibling / nextSibling.
// Родитель доступен через parentNode. Если долго идти от одного элемента к другому, то рано или поздно дойдёшь до корня DOM, 
// то есть до document.documentElement, а затем и document.
// console.log(document.body.previousSibling); // Доступ к элементам слева данного 
// console.log(document.head.nextSibling); // Доступ к элементам справа данного 
// console.log(document.body.parentNode);  // Доступ к элементам родителя данного 


    // Навигация только по элементам
// children     – только дочерние узлы-элементы, то есть соответствующие тегам.
// firstElementChild, lastElementChild      – соответственно, первый и последний дети-элементы.
// previousElementSibling, nextElementSibling   – соседи-элементы.
// parentElement    – родитель-элемент.


    // Особые ссылки для таблиц

// У конкретных элементов DOM могут быть свои дополнительные ссылки для большего удобства навигации.
    // TABLE
// table.rows – коллекция строк TR таблицы.
// table.caption/tHead/tFoot – ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
// table.tBodies – коллекция элементов таблицы TBODY, по спецификации их может быть несколько.
// THEAD/TFOOT/TBODY
// tbody.rows – коллекция строк TR секции.
    // TR
// tr.cells – коллекция ячеек TD/TH
// tr.sectionRowIndex – номер строки в текущей секции THEAD/TBODY
// tr.rowIndex – номер строки в таблице
    // TD/TH
// td.cellIndex – номер ячейки в строке


        // // Поиск: getElement* и querySelector*

    // document.getElementById или просто id
// Cтоит следовать правилу уникальности id.
// Если элементу назначен специальный атрибут id, то можно получить его прямо по переменной с именем из значения id.
// Общепринятой практикой является доступ к элементу вызовом -  document.getElementById("идентификатор").
// getElementById, существует только в контексте document

    // getElementsByTagName
// Метод elem.getElementsByTagName(tag) ищет все элементы с заданным тегом tag внутри элемента elem и возвращает их в виде списка.
// Эти два метода можно совмещать для получения в елементе с определённым ID - определённых tag ов
// Возвращается коллекция, а не элемент, её нужно или перебрать в цикле или получить элемент по номеру и уже ему присваивать value
// elem.getElementsByTagName(*) - выдаст все елементы
// document.getElementById.getElementsByTagName(*) - выдаст все тэги, определённого ID елементa

    // document.getElementsByName
// Вызов document.getElementsByName(name) позволяет получить все элементы с данным атрибутом name.
// console.log(document.getElementsByName('age'));

    // getElementsByClassName
// Вызов elem.getElementsByClassName(className) возвращает коллекцию элементов с классом className. 
// Находит элемент и в том случае, если у него несколько классов, а искомый – один из них.
// console.log(document.getElementsByClassName('content'));

    // querySelectorAll
// Вызов elem.querySelectorAll(css) возвращает все элементы внутри elem, удовлетворяющие CSS-селектору css.
// Псевдо-классы в CSS-селекторе, в частности :hover и :active, также поддерживаются. 
// console.log(document.querySelectorAll('ul > li:last-child'));

    // querySelector
// Вызов elem.querySelector(css) возвращает не все, а только первый элемент, соответствующий CSS-селектору css.
// console.log(document.querySelectorAll('ul > li:last-child')[0])

    // matches
// Метод elem.matches(css) ничего не ищет, а проверяет, удовлетворяет ли elem селектору css. Он возвращает true либо false.
// Этот метод бывает полезным, когда мы перебираем элементы (в массиве или по обычным навигационным ссылкам) 
// и пытаемся отфильтровать те из них, которые нам интересны.
// for(var i=0; i<document.body.children.length;i++){ 
//     if(document.body.children[i].matches('div')){
//         console.log(document.body.children[i].innerHTML);
//     }; 
// };

    // closest
// Метод elem.closest(css) ищет ближайший элемент выше по иерархии DOM, подходящий под CSS-селектор css. Сам элемент включчительно.
// Иначе говоря, метод closest бежит от текущего элемента вверх по цепочке родителей и проверяет, 
// подходит ли элемент под указанный CSS-селектор. Если подходит – останавливается и возвращает его.
// console.log(document.querySelector('.inputer_td').closest('td').className);
// console.log(document.querySelector('.inputer_td').closest('td').tagName);

// Метод	                    Ищет по...	    Ищет внутри элемента?
// getElementById	            id	                -
// getElementsByName	        name	            -	
// getElementsByTagName	        тег или '*'	        ✔	
// getElementsByClassName	    классу	            ✔	
// querySelector	            CSS-селектор	    ✔	
// querySelectorAll	            CSS-селектор	    ✔	


        // // Свойства узлов: тип, тег и содержимое

        // Классы, иерархия DOM
// Pазличие между DOM-узлами – разные узлы являются объектами различных классов.
// Соответственно у них есть некоторые общие свойства за счёт наследования и индивидуальные свойства и методы, присущи к их классу
// Иерархия:

//                        NOD

//  Text                Element                 Comment
//          Html Elements     SVG Elements
//          h,p,a ...

    // Проверить можно при помощи instanceof:
// console.log( document.body instanceof HTMLBodyElement ); // true
// console.log( document.body instanceof HTMLElement ); // true
// console.log( document.body instanceof Element ); // true
// console.log( document.body instanceof Node ); // true
// DOM-узлы – обычные JavaScript-объекты. Их классы заданы в прототипном стиле. Имеют свои свойства и методы.

        // Тип: nodeType
// Тип узла содержится в его свойстве nodeType. Всего их 12.
// Как правило, мы работаем всего с двумя типами узлов:
//    - Элемент (1)
//    - Текстовый узел (3)
// Что бы проверить к какому номеру относятсятся елементы, используют .nodeType
// var childNodes = document.body.childNodes;
// for (var i = 0; i < childNodes.length; i++) {
//     console.log( childNodes[i] + ' = ' + childNodes[i].nodeType);
// }

// Всевозможные значения nodeType
// interface Node {
//     const unsigned short ELEMENT_NODE = 1;
//     const unsigned short ATTRIBUTE_NODE = 2;
//     const unsigned short TEXT_NODE = 3;
//     const unsigned short CDATA_SECTION_NODE = 4;
//     const unsigned short ENTITY_REFERENCE_NODE = 5;
//     const unsigned short ENTITY_NODE = 6;
//     const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
//     const unsigned short COMMENT_NODE = 8;
//     const unsigned short DOCUMENT_NODE = 9;
//     const unsigned short DOCUMENT_TYPE_NODE = 10;
//     const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
//     const unsigned short NOTATION_NODE = 12;
// };

        // Тег: nodeName и tagName
// nodeName - содержит название(тег) 
// nodeName определено для любых узлов Node, для элементов оно равно tagName, а для не-элементов обычно содержит строку с типом узла.
// tagName - содержит элемента узла
// Свойство tagName есть только у элементов Element.
// Название HTML-тега всегда находится в верхнем регистре.
// console.dir(document.body.nodeName);
// console.dir(document.body.tagName);

        // innerHTML: содержимое элемента
// позволяет получить HTML-содержимое элемента в виде строки. В innerHTML можно и читать и писать.
// innerHTML += осуществляет перезапись - Так как новое значение записывается, то все изображения и другие ресурсы перезагружаются 
// Свойство innerHTML есть только у узлов-элементов.
// Скрипты не выполняются
// console.dir(document.body.querySelector('div').innerHTML = '<p> this is my inner </p>');

        // outerHTML: HTML элемента целиком
// Свойство outerHTML содержит HTML элемента целиком. Изменить outerHTML элемента невозможно.
// console.log(document.body.children[1].outerHTML);

        // nodeValue/data: содержимое текстового узла
// Содержимое других узлов, например, текстовых или комментариев, доступно на чтение и запись через свойство data.
// Его тоже можно читать и обновлять. 
// console.log(document.body.childNodes[0].data);
// for(var i=0; i<document.body.childNodes.length;i++){
//         console.log(document.body.childNodes[i].data);
// };
// Свойство nodeValue используется в некоторых узлах где нет data - которые редко используют.

        // Текст: textContent
// Свойство textContent содержит только текст внутри элемента, за вычетом всех <тегов>.
// elem.textContent возвращает конкатенацию всех текстовых узлов внутри elem.
// Есть возможность записать текст в элемент, причём именно как текст!
// Возвращается в точности весь текст, включая переводы строк и пробелы, но без тегов.
// for(var i=0; i<document.body.childNodes.length;i++){
//         console.log(i + ' = ' + document.body.childNodes[i].textContent);
// };
// console.log(document.body.childNodes[7].textContent = prompt('vvedite vashe imja', 'Artem'));

        // innerText
// innerText возвращает текст не в том виде, в котором он в DOM, а в том, в котором он виден –  как если бы выбрали содержимое элемента 
// мышкой и скопировали его. В частности, если элемент невидим, то его текст возвращён не будет
// при записи значения innerText работает так же, как и textContent.
// console.log(document.body.childNodes[6].innerText = 'innerText change');

        // Свойство hidden
// Должен приравниваться к 'true' or 'false'
// Скрывает наши елементы как буд-то display: none им присвоили;
// console.log(document.body.childNodes[8].hidden = 'true');

