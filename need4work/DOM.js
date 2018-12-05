
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

        // // DOM из лекции 
// Низкоуровневые языки - языки наименее интуитивно понятные человеку, с конкретными параметрами.
// Высокоуровневые языки - декларативные, адаптированные под работу с человеком языки, очень вариативны с параметрами.

// TAG - это сами тэги-их название, их атрибутика и содержимое (пошло из XML); один из видов узлов;
// Все тэги это объекты. По логике DOM тэги - это элементы (elements)
// Интерфейс - это место (точка) сопрекосновения двух систем;
// DOM - объектная модель-документ, по сути это интерфейс между html и js;
// Shadow DOM -объектная модель-документа, которая существует параллельно с разработкой, использованием контента;

// document - объект, который является отображением всего дерева.
// Дерево тэгов - иерархия, которая обладает узлами (тэгами) внутри которых может быть содержимое; 

// Виды узлов (nod type):
//  - document; - самая внешняя noda
//  - тэги; 
//  - текст;
//  - коментарий;

    // document
// document - как переменная является отображением дерева и лежит внутри объекта window;
// document - все манипуляции и обращения, работают из js в html, с помощью методов (getElementById());
// Если мы ввидим отсылку на Element - нам по любому нужно будет добавлять какое-то имя, т.к. мы обращаемся к елементу по чём-то;
// getElementById(); -возвращает ссылку на элемент по ID (который заранее установлен в html определённом элементу);
// console.log(document.getElementById('block'));

// window.onload = function(){} - когда загрузится окно, запускается функция (все теги, все скрипты, все стили, но не все картинки);
// с помощью window.onload = function(){} - мы можем скрипты запускать из head, а не из тела html
// Все атрибуты которые могут быть применимы к тэгу - прописаны в свойствах его объекта (console.dir и выбрать нужный елемент)

        // // getElementBy
// Можно обращаться ко всем встроенным свойствам экземпляров, как к объект.свойство: object.align = 'name'
    // console.log(document.getElementById('block'));
// window.onload = function(){
//     console.dir(document.getElementById('block'));
//     document.getElementById('block').align = 'FOO';         // добавит свойству align = 'FOO'
//     setTimeout(function(){
//         document.getElementById('block').align = 'left';
//         document.getElementById('block').style.backgroundColor = 'darkred';
//         setTimeout(function(){
//             document.getElementById('block').style.backgroundColor = 'darkblue';
//             document.getElementById('block').style.color = 'white';
//         }, 1000)
//     }, 2000);  // изменит определённые свойства через опред время
// };
// // можно узнать размер елемента - обращаясь к свойству object.clientWidth;
// window.onload = function(){
//     console.dir(document.getElementById('block').clientWidth);
// };

// можно вывести исключительно текст содержащийся в елементе - обращаясь к свойству object.innerTEXT;
// можно вывести всё сожержимое в елементе - обращаясь к свойству object.innerHTML;
// innerHTML можно изменять, добавляя текст или теги через object.innerHTML += some tags
// window.onload = function(){
//     console.dir(document.getElementById('block').innerText);
//     console.dir(document.getElementById('block').innerHTML);
//     setTimeout(function(){
//         document.getElementById('block').innerHTML += ' <hr /> <br />  Underline';
//     }, 3000);
//     console.dir(document.getElementById('block').innerText += ' <hr /> <br />  Underline');
//     console.dir(document.getElementById('block'));
// };

// Вывести элементы по классу - выводит в коллекцию элементов
// Коллекция - это подобные элементы. Что бы обратиться к её элементам, нужно перебрать их через цикл
// var olga = document.getElementsByClassName('Olga');
// console.log(olga);
// for(var i=0; i<olga.length;i++){
//     olga[i].innerHTML += 'selected';
// };

        // // JquerySelector
    // querySelector()
// Метод querySelector - работает по логике обращения CSS селекторов - выбирает первый элемент подходящий по условиям (классу тэгу...)
// Селектор - шаблон по которому можно выбрать элемент (работа CSS) 
// console.log(document.querySelector('div.Olga ul>li'));
// console.log(document.querySelector('#block'));
    // querySelectorAll()
// Метод querySelectorAll() - позволяет выбрать все элементы по селекторам, удовлетворяющие условиям поиска (образует массив)
// console.log(document.querySelectorAll('div.Olga ul>li'));
// var blocks = document.querySelectorAll('div.Olga ul>li');
// blocks.forEach(item => item.innerHTML += ' selector');

    // // Свойства элементов
    // Свойства элементов
// element.className = '' - можно узнаить или менять имя класса или добавлять класс к существующему, определённом элементу.
// document.querySelector('#idName').className += ' className';
// element.classList.add - добавит ещё один класс элементу
// document.querySelector('#idName').classList.add('className');
// document.querySelector('#idName').classList.add('act', 'act1', 'act2'); // - можно задавать сразу несколько классов
// element.classList.remove - удаляет определённый класс
// document.querySelector('#idName').classList.remove('action');
// document.querySelector('#idName').classList.remove('act1', 'act2', 'act3'); // - можно удалять сразу несколько классов
// element.classList.toogle('className') -проверяет наличие класса и в зависимости от результата, перекл.- удаляет или добавляет класс 
// document.querySelector('#idName').classList.toogle('className');
// element.classList.value ='' - удаляет все классы 
// document.querySelector('#idName').classList.value = "";


        // // Изменение: change, input, cut, copy, paste
    // Событие change
// Событие change происходит по окончании изменения значения элемента формы, когда это изменение зафиксировано.
// Для текстовых элементов это означает, что событие произойдёт не при каждом вводе, а при потере фокуса.
// Включает собыитие: onchange - то выведет/передаст, то что мы вводим в поле
// <input type="text" onchange="console.log(this.value)"> 
// Для остальных же элементов: select, input type=checkbox/radio оно срабатывает сразу при выборе значения. 

    // Событие input
// Событие input срабатывает тут же при изменении значения элемента. 
// Мгновенно передаёт состояние в зависимости от того какой тип у елемента
// В современных браузерах oninput – самое главное событие для работы с элементом формы.

    // событие propertychange
// Используется вместо input - работает только в старых (до 10го) IE

    // События cut, copy, paste
//  происходят при вырезании/вставке/копировании значения
// их основное применение – это отмена соответствующей операции.


    // Получение координат
// pageY = clientY + текущая вертикальная прокрутка

    // Получение данных об объекте в виде массива (размеры, растояния) 
// elem.getBoundingClientRect();

    // получение координат элемента относительно страницы
// function getCoords(elem) {
//     var box = elem.getBoundingClientRect();
//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };
// };


    // Создать элемент с тегом tag
// document.createElement(tag)

    // Создать текстовый узел с текстом txt
// document.createTextNode(txt)

    // Клонировать существующий узел, если deep=false, то без потомков.
// node.cloneNode(deep)

    // Свойства узлов
// Тип узла: 1(элемент) / 3(текст) / другие.
// node.nodeType
// Тег элемента.
// elem.tagName
// HTML внутри элемента.
// elem.innerHTML
// Весь HTML элемента, включая сам тег. На записи, не модифицирует элемент, а вставляет новый вместо него
// elem.outerHTML
// Содержимое узла любого типа, кроме элемента.
// node.data / node.nodeValue
// Текстовое содержимое узла, для элементов содержит текст с вырезанными тегами (IE9+).
// node.textContent
// Если поставить true, то элемент будет скрыт (IE10+).
// elem.hidden

    // Атрибуты    
// Чтение атрибута, проверка наличия и запись.
// elem.getAttribute(name), elem.hasAttribute(name), elem.setAttribute(name, value)

    // Значения атрибутов вида data-* (IE10+).
// elem.dataset.*

    // Ссылки
// Элемент <HTML>
// document.documentElement
// Элемент <BODY>
// document.body
// Элемент <HEAD> (IE9+)
// document.head

    // По всем узлам:
// parentNode
// nextSibling previousSibling
// childNodes firstChild lastChild

    // Только по элементам:
// parentElement
// nextElementSibling previousElementSibling
// children, firstElementChild lastElementChild
// Все они IE9+, кроме children, который работает в IE8-, но содержит не только элементы, но и комментарии (ошибка в браузере).

    // Дополнительно у некоторых типов элементов могут быть и другие ссылки, свойства, коллекции для навигации, например для таблиц:
// строка TR номер N.
// table.rows[N]
// ячейка TH/TD номер N.
// tr.cells[N]
// номер строки в таблице в секции THEAD/TBODY.
// tr.sectionRowIndex
// номер ячейки в строке.
// td.cellIndex

    // Поиск
// По селектору, только первый элемент
// *.querySelector(css)
// По селектору CSS3, в IE8 по CSS 2.1
// *.querySelectorAll(css)
// По уникальному id
// document.getElementById(id)
// По атрибуту name, в IE9- работает только для элементов, где name предусмотрен стандартом.
// document.getElementsByName(name)
// По тегу tag
// *.getElementsByTagName(tag)
// По классу, IE9+, корректно работает с элементами, у которых несколько классов.
// *.getElementsByClassName(class)
// Вообще, обычно можно использовать только querySelector/querySelectorAll. Методы getElement* работают быстрее 
// (за счёт более оптимальной внутренней реализации), но в 99% случаев это различие очень небольшое и роли не играет.

    // Дополнительно есть методы:
// Проверяет, подходит ли элемент под CSS-селектор.
// elem.matches(css)
// Ищет ближайший элемент сверху по иерархии DOM, подходящий под CSS-селектор. Первым проверяется сам elem. Этот элемент возвращается.
// elem.closest(css)
// Возвращает true, если elemA является предком (содержит) elemB.
// elemA.contains(elemB)
// Возвращает битовую маску, которая включает в себя отношение вложенности между elemA и elemB, а также – какой 
// из элементов появляется в DOM первым.
// elemA.compareDocumentPosition(elemB)

    // Изменение
// parent.appendChild(newChild)
// parent.removeChild(child)
// parent.insertBefore(newChild, refNode)
// parent.insertAdjacentHTML("beforeBegin|afterBegin|beforeEnd|afterEnd", html)
// parent.insertAdjacentElement("beforeBegin|...|afterEnd", element) (кроме FF)
// parent.insertAdjacentText("beforeBegin|...|afterEnd", text) (кроме FF)
// document.write(...)

    // Скорее всего, понадобятся полифиллы для:
// node.append(...nodes) – вставляет nodes в конец node,
// node.prepend(...nodes) – вставляет nodes в начало node,
// node.after(...nodes) – вставляет nodes после узла node,
// node.before(...nodes) – вставляет nodes перед узлом node,
// node.replaceWith(...nodes) – вставляет nodes вместо node.

    // Классы и стили
// Атрибут class
// elem.className
// Управление классами, для IE9- есть эмуляция.
// elem.classList.add(class) remove(class) toggle(class) contains(class) 
// Стили в атрибуте style элемента
// elem.style
// Стиль, с учётом всего каскада, вычисленный и применённый (только чтение)
// getComputedStyle(elem, "")

    // Размеры и прокрутка элемента
// Ширина левой/верхней рамки border
// clientLeft/Top
// Ширина/высота внутренней части элемента, включая содержимое и padding, не включая полосу прокрутки (если есть).
// clientWidth/Height
// Ширина/высота внутренней части элемента, с учетом прокрутки.
// scrollWidth/Height
// Ширина/высота прокрученной области.
// scrollLeft/Top
// Полный размер элемента: ширина/высота, включая border.
// offsetWidth/Height

    // Размеры и прокрутка страницы
// ширина/высота видимой области: 
// document.documentElement.clientHeight
// прокрутка(чтение): 
// window.pageYOffset || document.documentElement.scrollTop

    // прокрутка(изменение):
// на x,y относительно текущей позиции.
// window.scrollBy(x,y)
// на координаты в документе.
// window.scrollTo(pageX, pageY)
// прокрутить, чтобы elem стал видимым и оказался вверху окна(true) или внизу(false)
// elem.scrollIntoView(true/false)

    // Координаты
// относительно окна
//  elem.getBoundingClientRect()
// относительно документа
//  elem.getBoundingClientRect() + прокрутка страницы
// получить элемент по координатам
// document.elementFromPoint(clientX, clientY)

    // Метод contains для проверки на вложенность
// Возвращает true, если parent содержит child или parent == child.
// var result = parent.contains(child);

    // Метод compareDocumentPosition для порядка узлов
// Метод compareDocumentPosition –  предоставляет одновременно информацию и о содержании и об относительном порядке элементов.

    // Вставляет elem в коллекцию детей parentElem, перед элементом nextSibling.
// parentElem.insertBefore(elem, nextSibling)

    // Добавление множества узлов
// ul.innerHTML += "<li>1</li><li>2</li>...";

    // вставить UL в документ, а потом добавить к нему LI:
// var ul = document.createElement('ul');
// document.body.appendChild(ul); // сначала в документ
// for () ul.appendChild(li); // потом узлы

    // Полностью создать список «вне DOM», а потом – вставить в документ:
// var ul = document.createElement('ul');
// for() ul.appendChild(li);   // сначала вставить узлы
// document.body.appendChild(ul); // затем в документ


    // Метод insertAdjacentHTML позволяет вставлять произвольный HTML в любое место документа, в том числе и между узлами!
// elem.insertAdjacentHTML(where, html);
// html - Строка HTML, которую нужно вставить
// where - Куда по отношению к elem вставлять строку. Всего четыре варианта:
// beforeBegin – перед elem. afterBegin – внутрь elem, в самое начало. beforeEnd – внутрь elem, в конец. afterEnd – после elem.


    // DocumentFragment
// Вставляет пачку узлов -  особенный кросс-браузерный DOM-объект, который похож на обычный DOM-узел, но им не является.
// var fragment = document.createDocumentFragment();
// fragment.appendChild(node); - В него можно добавлять другие узлы.
// fragment.cloneNode(true); // клонирование с подэлементами


    // Стили элемента: свойство style
// element.style - возвращает объект, который дает доступ к стилю элемента на чтение и запись.
// Чтобы сбросить поставленный стиль, присваивают в style пустую строку: elem.style.width="".
// Стиль в style находится в формате браузера, а не в том, в котором его присвоили.

    // style.cssText
// Свойство style.cssText позволяет поставить стиль целиком в виде строки.
// При установке style.cssText все предыдущие свойства style удаляются.
// var div = document.body.children[0];
// div.style.cssText="color: red !important; \
//     background-color: yellow; \
//     width: 100px; \
//     text-align: center; \
//     blabla: 5; \
// ";

    // window.getComputedStyle
// Для того, чтобы получить текущее используемое значение свойства, используется метод 
// getComputedStyle(element[, pseudo])
// element - Элемент, значения для которого нужно получить
// pseudo - Указывается, если нужен стиль псевдо-элемента, например "::before". Пустая строка или отсутствие означают сам элемент.

        // // Метрики
// Координаты и размеры в JavaScript устанавливаются только для видимых элементов.
// Для получения точных размеров елементов - лучше использовать следующие свойства.

// offsetParent, offsetLeft/Top - растояние от внешних границ елемента (бордера), до первого родителя с позишин рилейтив 
// В offsetParent находится ссылка на родительский элемент в смысле отображения на странице.
// Свойства offsetLeft/Top задают смещение относительно offsetParent.

// window.innerWidth/innerHeight - полная ширина окна браузера
// offsetWidth/Height   - содержат «внешнюю» ширину/высоту элемента, то есть его полный размер, включая рамки border
// clientTop/Left       - содержат размеры бордера (границ элемента)
// clientWidth/Height   - размер элемента внутри рамок border, но без прокрутки (ширина содержимого width вместе с полями padding)
// scrollWidth/Height   - размер элемента внутри рамок border, с учетом прокрутки.
// scrollLeft/scrollTop - ширина/высота невидимой, прокрученной в данный момент, части элемента слева и сверху (можно изменять).
// scrollTo(pageX,pageY) - прокручивает страницу к указанным координатам относительно документа.
// scrollBy(x,y)         - прокручивает страницу относительно текущих координат.
// scrollIntoView       - elem.scrollIntoView(top) вызывается на элементе и прокручивает страницу так, чтобы элемент оказался вверху,
//                        если параметр top равен true, и внизу, если top равен false
// document.body.style.overflow = "hidden"  - чтобы запретить прокрутку страницы.
// document.body.style.overflow = " "        - что бы разморозить


        // // События Лекция
// Модель экшна - когда система может реагировать на определённые процессы.
// События: 
// клавиатура, мышь, окно браузера.
// Открытие/закрытие окна, ресайз, скролл.
// Формы отправка, фокус, инпут, чендж, сабгет.
// Ссылки нажатие, переход
// Каммон события клики разными кнопками (нажатие, удержание, отпуск, даблклик), движени мышки (приход, уход, движение по объекту)
// Клавиатурные нажатия (разные клавиши)

// События - это заранее отложенное действие (callback функция, с определёнными параметрами и контекстом).
// В событиях this всегда смотрит на тот тег на котором это событие было вызвано.

    // Все события 
// Cобытие      Описание                                                                                                Метод имитации
// onAbort	    - Прерывание загрузки изображения	 
// onBlur - Потеря текущим элементом фокуса - переход к другому элементу. Возникает при щелчке мышью вне элемента либо табуляции blur()
// onChange	    - Изменение значений элементов формы. Возникает после потерей элементом фокуса, т.е. после события blur	      change()
// onClick	    - Одинарный щелчок (нажата и отпущена кнопка мыши)	                                                          click()
// onDblClick	- Двойной щелчок	 
// onError	    - Возникновение ошибки выполнения сценария	 
// onFocus	    - Получение элементом фокуса (щелчок мышью на элементе или очередное нажатие клавиши табуляции)	              focus()
// onKeyDown	- Нажата клавиша на клавиатуре	 
// onKeyPress   - Нажата и отпущена клавиша на клавиатуре	 
// onKeyUp	    - Отпущена клавиша на клавиатуре	 
// onLoad	    - Закончена загрузка документа	 
// onMouseDown	- Нажата кнопка мыши в пределах текущего элемента	 
// onMouseMove	- Перемещение курсора мыши в пределах текущего элемента	 
// onMouseOut	- Курсор мыши выведен за пределы текущего элемента	 
// onMouseOver	- Курсор мыши наведен на текущий элемент	 
// onMouseUp	- Отпущена кнопка мыши в пределах текущего элемента	 
// onMove	    - Перемещение окна	 
// onReset	    - Сброс данных формы ( щелчок по кнопке <input type="reset"> )	                                              reset()
// onResize	    - Изменение размеров окна	 
// onSelect	    - Выделение текста в текущем элементе	 
// onSubmit	    - Отправка данных формы ( щелчок по кнопке <input type="submit"> )	                                          submit()
// onUnload	    - Попытка закрытия окна браузера и выгрузки документа	 

        // // События
// Модель экшна - когда система может реагировать на определённые процессы.
// События: 
// клавиатура, мышь, окно браузера.
// Открытие/закрытие окна, ресайз, скролл.
// Формы отправка, фокус, инпут, чендж, сабгет.
// Ссылки нажатие, переход
// Каммон события клики разными кнопками (нажатие, удержание, отпуск, даблклик), движени мышки (приход, уход, движение по объекту)
// Клавиатурные нажатия (разные клавиши)

// События - это заранее отложенное действие (callback функция, с определёнными параметрами и контекстом).
// В событиях this всегда смотрит на тот тег на котором это событие было вызвано.

// У MouseEvent есть много различных свойств: 
// - координаты курсора, его клацания - относительно страницы, елемента, с учетом прокрутки страницы и т.д.
// - target ссылка на элемент - target (работает как this, но предпочтительнее)
// - path - показывает путь к элементу, это массив и у него есть длинна (4 это минимальная длинна - windows.document.html.body)
// - timeStamp - таймер, показывает время нажатия елемента, после того как страница загрузилась
// - altKey, ctrlKey, shiftKey, metaKey - события при использовании клавиш (альт, контрл, шифл, мета-на маковских клавишах)

// var block = document.querySelector('.block');
// console.log(block);
// var fooBar = null;
// function click(event){
//     event.onclick = console.log(fooBar);
// };
// block.onclick = click;
// block.onclick = function(event){
//     if(event.timeStamp > 100){
//         console.log(event);
//         console.log(event.pageX);
//         console.log(event.pageY);
//         console.log(event.target);
//         console.log(this);
//         console.log(event.path);
//         console.log(event.timeStamp);
//         if(event.altKey === true){
//             console.log(event.altKey);
//         };
//         if(event.ctrlKey === true){
//             console.dir(block);
//         };
//     };
//     if(event.metaKey === true){
//         console.dir(block);
//     };
// };
    
    // DOM lvl2
// програмные события (возможность сделать вызов из кода)
// с помощью метода .addEventListener('click', function(elem){} - можно передавать функцию как параметр
// .addEventListener разрешает использовать повторно- заключая более одного действия при одном событии, не перезаписывая предыдущий
// то есть можно передать 2 абсолютно разные задачи при одном действии
// this так же всегда смотрит на элемент его вызвавший - но всегда использовать event.target - он так же смотрит на this 

// var block2 = document.querySelector('.block2');
// block2.addEventListener('click', function(event){console.log(event);});

    // События мыши
// var block3 = document.querySelector('.block3');
    // dblclick - показывает состояние елемента после одинарного нажатия на него - это составное событие из mousedown и mouseup
// block3.addEventListener('click', function(event){console.log(event.type, event);});
    // dblclick - показывает состояние елемента после двойного нажатия на него
// block3.addEventListener('dblclick', function(event){console.log(event.type, event);});
    // mouseover - показывает состояние елемента когда мышка наведена на него
// block3.addEventListener('mouseover', function(event){console.log(event.type, event);});
    // mouseout - показывает состояние елемента после увода курсора мышки с него
// block3.addEventListener('mouseout', function(event){console.log(event.type, event);});
// mouseover и mouseout - определяют даже при зажатой клавиши мыши
    // mousemove - показывает состояние елемента во время всего движения курсора мышки по нему
// block3.addEventListener('mousemove', function(event){console.log(event.type, event);});
    // mousedown - показывает состояние елемента во время нажатия ЛК мышки по нему
// block3.addEventListener('mousedown', function(event){console.log(event.type, event);});
    // mouseup - показывает состояние елемента во время отжатия ЛК мышки по нему
// block3.addEventListener('mouseup', function(event){console.log(event.type, event);});



        // // Мультивставка: insertAdjacentHTML и DocumentFragment
    // Оптимизация вставки в документ
// Есть две возможных последовательности:
// 1. Сначала вставить UL в документ, а потом добавить к нему LI:
// var ul = document.createElement('ul');
// document.body.appendChild(ul); // сначала в документ
// for (...) ul.appendChild(li); // потом узлы

// 2. Полностью создать список «вне DOM», а потом – вставить в документ:
// var ul = document.createElement('ul');
// for(var i=0) ul.appendChild(li);   // сначала вставить узлы
// document.body.appendChild(ul); // затем в документ

    // Быстрая вставка новых елементов на страницу (на примере ul li)
// var ul = document.createElement('ul');
// for(var i=0; i<5;i++){
// var li = document.createElement('li');
// ul.appendChild(li);   // сначала вставить узлы
// };
// document.body.appendChild(ul); // затем в документ

    // Быстрое создание двумерного поля
// var table = document.createElement('table');
// document.body.appendChild(table); // затем в документ
// for(var i=0; i<5;i++){
//     var tr = document.createElement('tr');
//     table.appendChild(tr);   // сначала вставить узлы
//     for(var j=0;j<5;j++){
//         var td = document.createElement('td');
//         tr.appendChild(td);   // сначала вставить узлы
//     };
// };
// Стили для двумерного поля
// var tbs = document.querySelector('table');
// tbs.style.border= 1 + 'px' + ' ' + 'solid' + ' ' + 'black';
// tbs.style.width = 100 + 'px';
// tbs.style.height = 100 + 'px';

// var tds = document.querySelectorAll('td');
// for(var i=0; i<tds.length;i++){
//     tds[i].style.border = 1 + 'px' + ' ' + 'solid' + ' ' + 'red';
// };


    // // Добавление множества узлов insertAdjacent
// elem.insertAdjacentHTML(where, html)
// elem.insertAdjacentElement(where, element)
// elem.insertAdjacentText(where, text)

    // insertAdjacentHTML
// elem.insertAdjacentHTML(where, html) - позволяет вставлять произвольный HTML в любое место документа, в том числе и между узлами
// html     - Строка HTML, которую нужно вставить (что именно мы хотим вставить)
// where    - Куда по отношению к elem вставлять строку. Всего четыре варианта:
// beforeBegin  – перед elem.
// afterBegin   – внутрь elem, в самое начало.
// beforeEnd    – внутрь elem, в конец.
// afterEnd     – после elem.
// document.body.children[0].children[2].insertAdjacentHTML("afterend", '<li>li3</li><li>li4</li>')


    // // DocumentFragment
// Вставить пачку узлов единовременно поможет DocumentFragment.  
// У DocumentFragment нет обычных свойств DOM-узлов, таких как innerHTML, tagName и т.п. Это не узел.
// Kогда DocumentFragment вставляется в DOM – то он исчезает, а вместо него вставляются его дети.

// Синтаксис для его создания:              var fragment = document.createDocumentFragment();
// В него можно добавлять другие узлы.      fragment.appendChild(node);
// Его можно клонировать:                   fragment.cloneNode(true); // клонирование с подэлементами

    // // append/prepend, before/after, replaceWith
// nodes – DOM-узлы или строки, в любом сочетании и количестве

// node.append(...nodes)        – вставляет nodes в конец node,
// node.prepend(...nodes)       – вставляет nodes в начало node,
// node.after(...nodes)         – вставляет nodes после узла node,
// node.before(...nodes)        – вставляет nodes перед узлом node,
// node.replaceWith(...nodes)   – вставляет nodes вместо node.

// var p = document.createElement('p');
// document.body.append('p');
// document.body.prepend('p');
// document.body.after('p');
// document.body.before('p');
// document.body.children[1].replaceWith('p');


        // // Атрибуты и DOM-свойства

// HTML-атрибуты и DOM-свойства обычно, но не всегда соответствуют друг другу, нужно это понимать, чтобы работать с ними правильно.
// Например, если тег выглядит как <body id="page">, то у объекта будет свойство body.id = "page".

    // // Свои DOM-свойства и методы
// Нестандартные свойства и методы видны только в JavaScript и никак не влияют на отображение соответствующего тега.
// document.body.newProp = {key: value, key2: value};

// Свои DOM-свойство
// document.body.newProp = {
//     key: 'value',
//     key2: 'value2'
// };
// console.log(document.body.newProp);
// console.log(document.body.newProp.key2);

// Свои DOM-методы
// document.body.consName = function(){
//     console.log(this.nodeName);
// };
// document.body.consName();


    // // Атрибуты
// Элементам DOM, с другой стороны, соответствуют HTML-теги, у которых есть текстовые атрибуты.
// Доступ к атрибутам осуществляется при помощи стандартных методов:
// elem.hasAttribute(name)          – проверяет наличие атрибута
// elem.getAttribute(name)          – получает значение атрибута
// elem.setAttribute(name, value)   – устанавливает атрибут
// elem.removeAttribute(name)       – удаляет атрибут
// console.log(document.body.children[0].setAttribute('id', 'p'));
// console.log(document.body.children[0].getAttribute('id'));
// console.log(document.body.children[0].hasAttribute('id'));
// console.log(document.body.children[0].removeAttribute('id'));

    // elem.attributes
// Также все атрибуты элемента можно получить с помощью свойства elem.attributes, которое содержит псевдо-массив объектов
// Не чувствителен к регистру и видны в innerHTML элемента
// console.log(document.body.children[0].attributes);
// var attrs = elem.attributes; // (4) можно получить коллекцию атрибутов
// for (var i = 0; i < attrs.length; i++) {
//     alert( attrs[i].name + " = " + attrs[i].value );
// };

    // Вывести значение атрибута
// document.body.children[1].href = '/';
// console.log(document.body.children[1].getAttribute('href'));        // - выведет значение из href
// console.log(document.body.children[1].href);                        // - выведет значение в html
// DOM-свойство которое имеет логическое значение true/false - можно убирать или задавать с помощью remove/set или = true/false

    // Исходное значение value
// Изменение некоторых свойств обновляет атрибут. Но это скорее исключение, чем правило.
// Чаще синхронизация – односторонняя: свойство зависит от атрибута, но не наоборот.

// Aтрибут elem.getAttribute('value') хранит исходное значение даже после того, как пользователь заполнил поле и свойство изменилось.
// document.querySelector('a').value = 'b';
// console.log(document.querySelector('a').getAttribute('value'));
// console.log(document.querySelector('a').getAttribute('value') == 'b');
// console.log(document.querySelector('a').getAttribute('value') == 'a');
// console.log(document.querySelector('a').setAttribute('value', 'b'));
// console.log(document.querySelector('a').getAttribute('value'));


    // // Классы в виде строки: className
// Атрибуту "class" соответствует свойство className.
// console.log(document.querySelector('p').className = 'p p2');

// атрибуту for (<label for="...">) соответствует свойство с названием htmlFor.

    // // Классы в виде объекта: classList
// Атрибут class – уникален. Ему соответствует аж целых два свойства!
// Свойство classList – это объект для работы с классами.

    // Методы classList:
// elem.classList.contains("class")     – возвращает true/false, в зависимости от того, есть ли у элемента класс class.
// elem.classList.add/remove("class")   – добавляет/удаляет класс class
// elem.classList.toggle("class")       – если класса class нет, добавляет его, если есть – удаляет.

// console.log(document.querySelector('p').classList.add('p3'));
// console.log(document.querySelector('p').classList);

// Mожно перебрать классы через for, так как classList – это псевдо-массив.
// for(var i=0; i<document.querySelector('p').classList.length; i++){
//     console.log(document.querySelector('p').classList[i]);
// };

    // // Нестандартные атрибуты
// У каждого элемента есть некоторый набор стандартных свойств
// Свойство является стандартным, только если оно описано в стандарте именно для этого элемента.
// То есть, если назначить элементу <img> атрибут href, то свойство img.href от этого не появится. 
// Как, впрочем, и если назначить ссылке <a> атрибут alt.
// С помощью нестандартных атрибутов можно привязать к элементу данные, которые будут доступны в JavaScript.
// Нестандартные атрибуты иногда используют для CSS, так как  манипулировать атрибутом из JavaScript гораздо проще.
// Значение атрибута – произвольная строка, значение класса – это «есть» или «нет», поэтому атрибуты «мощнее» и удобнее классов.
// Обращение к атрибуту в CSS:
// <style>      .order[order-state="new"]       {color: green;}    </style>
// А после можно уже и через JS с ним обращаться
// div.setAttribute('order-state', 'canceled');


    // // Свойство dataset, data-атрибуты
// С помощью нестандартных атрибутов можно привязать к элементу данные, которые будут доступны в JavaScript.
// Как правило, это делается при помощи атрибутов с названиями, начинающимися на data-, например:
// console.log(document.querySelector('p').setAttribute('data-p', 'p1'));
// console.log(document.querySelector('p').setAttribute('data-about', 'p-element'));
// console.log(document.querySelector('p').getAttribute('data-p'));

// K таким атрибутам можно обратиться не только как к атрибутам, но и как к свойствам, при помощи специального свойства dataset
// console.log(document.querySelector('p').dataset.p);
// console.log(document.querySelector('p').dataset.about);


        // // Навигация по DOM-элементам
// Только для чтения 

    // Сверху documentElement и body
// Самые верхние элементы дерева доступны напрямую из document.
// <HTML> = document.documentElement
// console.log(document.documentElement);
// <BODY> = document.body
// console.log(document.body);
// <HEAD> = document.head
// console.log(document.head);

    // Дети: childNodes, firstChild, lastChild
// Дочерние элементы (или дети) – элементы, которые лежат непосредственно внутри данного.
// Потомки – все элементы, которые лежат внутри данного, вместе с их детьми, детьми их детей и так далее. То есть, всё поддерево DOM.

// Дочерние элементы
// childNodes - Псевдо-массив который хранит все дочерние элементы, включая текстовые.
// console.log(document.childNodes);
// Перебор всех детей можно сделать через for
// for(var i=0; i<document.body.childNodes.length;i++){
//     console.log(document.body.childNodes[i]);
// };

// Потомки
// firstChild и lastChild обеспечивают быстрый доступ к первому и последнему элементу
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstChild === document.body.childNodes[0]);


    // Коллекции – не массивы
// DOM-коллекции, такие как childNodes и другие не являются JavaScript-массивами.
// В них нет методов массивов, таких как forEach, map, push, pop и других.
// Что бы иметь возможность изменять DOM-коллекции, стоит переприсвоить их к другому массиву

// Применить метод массива через call/apply:
// var arr = new Array;
// var elements = document.body.childNodes;
// arr.forEach.call(elements, function(elem){
//     console.log(elem);
// });

// При помощи Array.prototype.slice сделать из коллекции массив.
// var elems = document.body.childNodes;
// elems = Array.prototype.slice.call(elems);
// elems.forEach(function(elems){
//     console.log(elems);
// });


    // Соседи и родитель
// previousSibling / nextSibling - доступ к элементам слева и справа данного
// console.log(document.querySelector('p').nextSibling);
// console.log(document.querySelector('p').previousSibling);
// parentNode                    - доступ к родителю элемента
// console.log(document.querySelector('li').parentNode);


    // Навигация только по элементам
// Что бы осуществлять навигацию только по элементам (а не по пустым строчкам - узел текст, или узлам коментариям), используем:
// children                                     – только дочерние узлы-элементы, то есть соответствующие тегам.
// console.log(document.querySelector('ul').children);
// firstElementChild, lastElementChild          – соответственно, первый и последний дети-элементы.
// console.log(document.querySelector('ul').lastElementChild);
// console.log(document.querySelector('ul').firstElementChild);
// previousElementSibling, nextElementSibling   – соседи-элементы.
// console.log(document.querySelector('div').previousElementSibling);
// console.log(document.querySelector('p').nextElementSibling);
// parentElement                                – родитель-элемент.
// console.log(document.querySelector('li').parentElement);

// Вывести только детей елементы:
// for(var i=0; i<document.body.children.length;i++){
//     console.log(document.body.children[i]);
// };

    // Особые ссылки для таблиц
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


      // // Порядок обработки событий

    // Главный поток
// В каждом окне выполняется только один главный поток, который занимается выполнением JavaScript, отрисовкой и работой с DOM.
// Он выполняет команды последовательно, может делать только одно дело одновременно и блокируется при выводе модальных окон (alert).
// Дополнительные потоки тоже есть
// Есть и другие, служебные потоки, (для сетевых коммуникаций -скачивание файлов может продолжаться пока главный поток работает)
// Web Workers
// Существует спецификация Web Workers, которая позволяет запускать дополнительные JavaScript-процессы(workers), чтобы загрузить 
// несколько ядер/процессоров одновременно

    // Очередь событий и  Вложенные (синхронные) события
// Если главный поток прямо сейчас занят, то он не может срочно выйти из середины одной функции и прыгнуть в другую.
// Когда происходит событие, оно попадает в очередь.
// Внутри браузера непрерывно работает «главный внутренний цикл», который следит за состоянием очереди и обрабатывает события.
// Иногда события добавляются в очередь сразу пачкой.

// var area = document.getElementById('area');
// area.value ="click on me";
// area.onfocus = function(e){
//     this.value ="focus";
//     this.scrollTop = this.scrollHeight;
// };
// area.onmousedown = function(e){
//     this.value +="mousedown\n";
//     this.scrollTop = this.scrollHeight;
// };
// area.onmouseup = function(e){
//     this.value +="mouseup\n";
//     this.scrollTop = this.scrollHeight;
// };
// area.onclick = function(e){
//     this.value +="click\n";
//     this.scrollTop = this.scrollHeight;
// };

    // Делаем события асинхронными через setTimeout(…,0)
// Обычно события становятся в очередь и обрабатываются в порядке поступления, асинхронно, независимо друг от друга.
// Синхронными являются вложенные события, инициированные из кода.
// Один вариант – просто переместить строку с необходимым методом вниз кода обработчика.
// Если это неудобно, можно запланировать необходимый метод чуть позже через setTimeout(..., 0)
// Запустит onfocus сразу после выполнения onclick

// var button = document.getElementById('button');
// var text = document.getElementById('text');
// button.onclick = function(){
//     text.value += ' in onclick '
//     setTimeout(function(){
//         text.focus();
//     }, 0);
//     text.value += ' after onclick ' 
// };
// text.onfocus = function(){
//     text.value += ' !focus '
// };


        // // Объект события
// Детали произошедшего браузер записывает в «объект события», который передаётся первым аргументом в обработчик.

    // Свойства объекта события
// event.type - Тип события
// button.addEventListener('click', function(){
//     console.log(event.type);
// });

// event.currentTarget - более правильная аналогия this только для DOM
// button.addEventListener('click', function(){
//     console.log(event.currentTarget);
// });

// event.clientX / event.clientY - Координаты курсора в момент клика (относительно окна)
// button.addEventListener('click', function(){
//     console.log(event.clientX);
//     console.log(event.clientY);
// });

    // Координаты в окне: clientX/Y
// Пара свойств clientX/clientY содержит координаты курсора относительно текущего окна.
// В той же системе координат работает и метод elem.getBoundingClientRect(), возвращающий координаты элемента, а также position:fixed.
// Координаты курсора относительно окна - выведны в значение елемента текст
// var text = document.getElementById('text');
// text.addEventListener('mousemove', function(e){
//     this.value = event.clientX + ':' + event.clientY;
// });

    // Координаты относительно документа: pageX/Y
// Координаты курсора относительно документа находятся в свойствах pageX/pageY.
// Эти координаты – относительно левого-верхнего узла документа, а не окна, то они учитывают прокрутку. 
// var textTwo = document.getElementById('textTwo');
// textTwo.addEventListener('mousemove', function(e){
//     this.value = event.pageX + ':' + event.pageY;
// });


        // // Мышь: движение mouseover/out, mouseenter/leave

    // События mouseover/mouseout, свойство relatedTarget
// Событие mouseover происходит, когда мышь появляется над элементом, а mouseout – когда уходит из него.
// textTwo.addEventListener('mouseover', function(e){
//     this.style.background = 'red';
// });
// textTwo.addEventListener('mouseout', function(e){
//     this.style.background = 'white';
// });
// relatedTarget - покажет, с какого элемента пришла (с помощью mouseover) или ушла (с помощью mouseout) мышь.
// textTwo.addEventListener('mouseover', function(e){
//     console.log(event.target);                  // елемент на который пришла мышь
//     console.log(event.relatedTarget);           // елемент с которого пришла мышь

// });
// textTwo.addEventListener('mouseout', function(e){
//     console.log('target' + event.target);                  // елемент с которого пришла мышь
//     console.log('related' + event.relatedTarget);           // елемент на который пришла мыщь
// });

    // Частота событий
// Событие mousemove срабатывает при передвижении мыши
// События mousemove и mouseover/mouseout срабатывают так часто, насколько это позволяет внутренняя система взаимодействия браузера.
// DOM-элементы, через которые мышь проходит на большой скорости, могут быть пропущены.

    // «Лишний» mouseout при уходе на потомка
// При переходе на потомка срабатывает mouseout на родителе.
// Согласно браузерной логике, курсор мыши может быть только над одним элементом – самым глубоким в DOM (и верхним по z-index).
// У обработчиков создаётся впечатление, что курсор ушёл mouseout с родителя, а затем тут же перешёл mouseover на него же 
// (за счёт всплытия mouseover с потомка). Получается как бы он был вызван дважды (навели=1, отвели на потомка=1, навод на потомка=2)

    // События mouseenter и mouseleave и mousemove
// Бывает важно отследить момент «настоящего» ухода - понять, когда элемент зашёл на родителя, а когда ушёл – без учёта переходов.
// Курсор заходит на элемент – срабатывает mouseenter, а затем – неважно, куда он внутри него переходит, mouseleave.
// Но они не всплывают!
// События mouseover/mouseout подразумевают, что курсор находится над одним, самым глубоким элементом.
// Они срабатывают при переходе с родительского элемента на дочерний.

// var block = document.getElementById('block');
// block.style.width = 150+'px';
// block.style.height = 150+'px';
// block.style.border = 1+'px'+' '+"solid"+" "+"black";

// block.addEventListener('mouseenter', function(e){
//     block.style.background = 'brown';
// });
// block.addEventListener('mouseleave', function(e){
//     block.style.background = null;
// });

    // Делегирование
// события mouseenter/leave не всплывают, они срабатывают именно на том элементе, на котором стоит обработчик и только на нём.
// Если обработчики mouseenter/leave стоят на <table>, то они сработают при входе-выходе из таблицы, 
// но получить из них какую-то информацию о переходах по её ячейкам невозможно.
// var table = document.getElementById('table');
// table.addEventListener('mouseover', function(e){
//     event.target.style.background = 'red';
// });
// table.addEventListener('mouseout', function(e){
//     event.target.style.background = null;
// });

        // // Мышь: отмена выделения, невыделяемые элементы
// рассмотрим основные способы, как делать элемент невыделяемым.

    // Способ 1: отмена mousedown/selectstart
// предотвратить действие браузера по умолчанию для события selectstart в IE и mousedown в других браузерах.
// При установке на родителя – все его потомки станут невыделяемыми:
// Выделение при помощи передвижения зажатой мыши всё еще работает, так что посетитель имеет возможность выделить содержимое элемента.
// mousedown="return false"

// table.onmousedown =  function(){
//     return false;
// };

    // Способ 2: снятие выделения пост-фактум
// Можно снять выделение в обработчике события, после того, как оно уже произошло.
// функция clearSelection, будет снимать выделение
// Выделение всё же производится, но тут же снимается. Это выглядит как мигание и не очень красиво.
// Выделение при помощи передвижения зажатой мыши всё еще работает, так что посетитель имеет возможность выделить содержимое элемента.

// table.addEventListener('dblclick', function(e){
//     clearSelection();
// });
// function clearSelection() {
//     if (window.getSelection) {
//       window.getSelection().removeAllRanges();
//     } else { // старый IE
//         document.selection.empty();
//     };
// };

    // Способ 3: свойство user-select
// нестандартное CSS-свойство user-select, которое делает элемент невыделяемым.

// В стилях CSS
// <style>
//   b {
    // -webkit-user-select: none;
    // user-select -- это нестандартное свойство 
    // -moz-user-select: none;
    // поэтому нужны префиксы
    // -ms-user-select: none;
//   }
// </style> 

// JS
// table.style.webkitUserSelect = 'none';
// // OR
// table.addEventListener('mouseover', function(){
//     event.target.style.webkitUserSelect = 'none';
// });


        // // Клавиатура: keyup, keydown, keypress

    // События keydown и keyup
// События keydown/keyup происходят при нажатии/отпускании клавиши и позволяют получить её скан-код в свойстве keyCode.
// Скан-код клавиши одинаков в любой раскладке и в любом регистре.

// var keydown = document.querySelector('.keydown');
// keydown.addEventListener('keydown', function(event){
    // event.target.nextElementSibling.innerHTML = 'keyCode ='+event.keyCode+' charCode ='+event.charCode+' which ='+event.which;
// });

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
// var keypress = document.querySelector('.keypress');
// keypress.addEventListener('keypress', function(event){
//     event.target.nextElementSibling.innerHTML = 'event.keyCode ' + getChar(event)+'';
// });
// Получение символа в keypress функция  - getChar(event) 
// function getChar(event){
//     if (event.which == null) { // IE
//         if (event.keyCode < 32) return null; // спец. символ
//         return String.fromCharCode(event.keyCode)
//     };
//     if (event.which != 0 && event.charCode != 0) { // все кроме IE
//         if (event.which < 32) return null; // спец. символ
//         return String.fromCharCode(event.which); // остальные
//     };
//     return null; // спец. символ
// };

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
// Если нужен именно символ –используем keypress. При этом функция getChar позволит получить символ и отфильтровать лишние срабатывания
// Получать символ можно только при нажатии обычных клавиш, если речь о сочетаниях с модификаторами,то keypress не всегда генерируется.
// Распространённая ошибка –использовать события клавиатуры для работы с полями ввода в формах.
// События клавиатуры предназначены именно для работы с клавиатурой.


        // // Координаты в окне
// Координатная система относительно окна браузера начинается в левом-верхнем углу текущей видимой области окна.
// координаты в ней clientX/clientY.

    //  getBoundingClientRect()
// Метод elem.getBoundingClientRect() возвращает координаты элемента, относительно его краев (до девого и верхнего края)
// Координаты могут быть дробными – это нормально, так как они возвращаются из внутренних структур браузера.
// Координаты могут быть и отрицательными, например если прокрутить страницу так, что верх элемента будет выходить за границы окна
// Координаты right/bottom отличаются от CSS-свойств

// Координаты возвращаются в виде объекта со свойствами:
// top – Y-координата верхней границы элемента,
// left – X-координата левой границы,
// right – X-координата правой границы,
// bottom – Y-координата нижней границы.

// Координаты относительно окна не учитывают прокрутку, они высчитываются от границ текущей видимой области.
// var button = document.querySelector('.getCoords');
// console.log(button.getBoundingClientRect());
// var strings = document.querySelector('.strings')
// console.log(strings.getClientRects());


    // elementFromPoint(x, y)
// Возвращает элемент, который находится на координатах (x, y) относительно окна.
// Метод document.elementFromPoint(x,y) работает только если координаты (x,y) находятся в пределах окна.
// var elem = document.elementFromPoint(x, y);
// используются координаты относительно окна - без прокрутки

// var centerX = button.clientWidth
// console.log(centerX);
// var centerY = button.clientHeight
// console.log(centerY);
// var elem = document.elementFromPoint(centerX, centerY);
// console.log(elem);
// elem.style.background = "red";
// console.log(elem.tagName);


    // Координаты для position:fixed 
// После нажатия создать елемент после определённого елемента с определённым содержимым на определённое время 
// var butt = document.querySelector('.button');
// function createMessageUnder(elem, text){
// // получить координаты
//     var coords = elem.getBoundingClientRect();
// // создать элемент для сообщения
//     var message = document.createElement('div');
//     // стиль лучше задавать классом
//     message.style.cssText  = 'position: fixed; color: red';
// // второй аргумент функции - содержимое нового елемента
//     message.innerHTML  = text;
// // к координатам обязательно добавляем "px"!
//     message.style.left = coords.left + 'px';
//     message.style.top = coords.bottom + 'px';
//     return message;
// };
// // Использование при нажатии на butt  
// var mess = createMessageUnder(butt, 'hello');
// butt.addEventListener('click', function(){
//     document.body.appendChild(mess);
// // убрать через 5 сек после нажатия из документа
//     setTimeout(function() {
//         document.body.removeChild(mess);
//     }, 5000);
// });


        // // Координаты в документе
// Система координат относительно страницы (относительно документа), начинается в левом-верхнем углу, но не окна, а именно страницы.
// Если провести аналогию с CSS, то координаты относительно окна – это position:fixed, а относительно документа – position:absolute
// координаты в ней называются pageX/pageY.

    // Сравнение систем координат
// Когда страница не прокручена, точки начала координат относительно окна (clientX,clientY) и документа (pageX,pageY) совпадают.

    // Получение координат
// pageY = clientY + текущая вертикальная прокрутка

// var butt2 = document.querySelector('.butt2');
// console.log('относительно окна '+ butt2.getBoundingClientRect().y);
// console.log('относительно документа '+ (butt2.getBoundingClientRect().y + pageYOffset));

// function getCoords(elem){
//     var box = elem.getBoundingClientRect();
//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset,
//     };
// };
// var getCoords = getCoords(butt2);
// console.log(getCoords);


    // Координаты на экране screenX/screenY
// Координаты относительно экрана screenX/screenY отсчитываются от его левого-верхнего угла именно вcего экрана, а не окна браузера.
// Размеры экрана хранятся в глобальной переменной screen

// общая ширина/высота
// console.log(screen.width + ' x ' + screen.height);

// доступная ширина/высота (за вычетом таскбара и т.п.)
// console.log(screen.availWidth + ' x ' + screen.availHeight);

// Координаты левого-верхнего угла браузера на экране хранятся в window.screenX, window.screenY 
// console.log("Браузер находится на " + window.screenX + "," + window.screenY);



        // // Распространение события

    // Порядок распространение события
// Событие созданное на родители (по дереву ДОМ), отображается и используется так же на его детях.
// При вызове события с чаилда, создаётся путь события (прокликивает от его родителя к чаилду и обратно). 
// Захват (capturing) - Процес движения события от родителя к чаилду. 
// Всплытие (Bubbling) - Процес обратного движения события от чаилда к родителю.
// По умолчанию, браузер выполняет все события как всплытие.

// document.querySelector('.block').addEventListener('click', function(event){
//     console.log('block', event);
//     // console.log('block', event.path);
// }, true);

// document.querySelector('body').addEventListener('click', function(event){
//     console.log('body', event);
//     // console.log('body', event.path);
// }, false);

// addEventListener(event, funct(){}, capturing) - третий аргумент - быть 2 видом true/false, включен или выключен захват.
// По умолчанию там false, если поставим true, то первым выполнится - событие body, а потому уже block.
// Но если прировнять к перменной то будет в порядке очереди, или же регламентировать её с помощью false.
// Вложенные елементы прокликиваются насквозь от своих родителей, вызывая тем самым, события родителей связанные с кликом.
// Очередность их вызова будет зависить от 3го параметра в addEventListener capturing. true от родителя к чаилду, false-наборот
// Понимая что сначала идут capturing, а потом Bubbling, можно управлять и задавать очередь всплытия елементов, указывая true/false 


// var block1 = document.querySelector('.block1');
// var block2 = document.querySelector('.block2');
// var block3 = document.querySelector('.block3');

// block1.addEventListener('click', function(event){
//     this.style.backgroundColor = 'red';
//     // event.stopPropagation();    
//     console.log('block1')
// // }, false);
// }, true);
// block2.addEventListener('click', function(event){
//     this.style.backgroundColor = 'green';
//     console.log('block2')
//     // event.stopPropagation();
// }, false);
// // }, true);
// block3.addEventListener('click', function(event){
//     this.style.backgroundColor = 'yellow';
//     console.log('block3')
//     // event.stopPropagation();
// // }, false);
// }, true);


    // Остановка распространения событий
// event.stopPropagation(); - прописывается именно в таком виде в addEventListener в функции, после чего, все события что идут далее
// по дереву не будут выполняться
// Удобно использовать, когда есть всплывающие окна, или что-то подобное, где определённые события не должны распространяться на 
// все елементы

// block3.addEventListener('click', function(event){
//     event.stopPropagation();
// }, true);


        // // Создание елементов
    // Создание елемента в памяти JS - document.createElement('div')
// var divElem = document.createElement('div');
// var spanElem = document.createElement('span');

    // Заполнение определённым контентом - elem.innerHTML = ('some') и конфигурация - elem.classList.add('.class')
// divElem.classList.add('some_elem');
// divElem.innerHTML = ('some element');
// spanElem.innerHTML = (' span element ');

    // Добавление в дерево - document.body.appendChild()
// document.appendChild() - вставляет елемент во внутрь и вконец указанного елемента
// Ключевой момент - создание любого елемента - это создание 1го елемента, а не переменная с постоянным кодом создания новых ел-ов
// document.body.appendChild(divElem);
// Можно добавить фрагмент внутрь созданного елемента
// divElem.appendChild(spanElem);

    // Добавление списка - document.body.appendChild() в цикле - нескольких елементов внутрь (как пример из массива) 
// Что бы создавать много елементов за раз - нужно запустить само событие создания в цикле, присваивая новые ел-ты куда либо
// var list = [10,25,13,47,15,28];
// var olElem = document.createElement('ol');
// document.body.appendChild(olElem);

// for(var i=0; i<list.length; i++){
//     var liElem = document.createElement('li');
//     liElem.classList.add('item');
//     liElem.innerHTML = 'item ' + (i+1) + ' = ' + list[i];
//     olElem.appendChild(liElem);
//     // удаление при нажатии
//     liElem.addEventListener('click', removeOnClick);
//     // добавление аттрибутов
//     liElem.setAttribute('title', 'value');
//     // получение номерa li который мы удаляем - присвоим аттрибут id со значением i, а в функции removeOnClick выведем его номер
//     liElem.dataset.id = i;

// };

    // Удаление елементов - elem.remove()
// При нажатии на пункт li - удаляется елемент c помощью event.target.remove();
// 1ый вариант, найти все li по классу item через querySelector и с помощью el.addEventListener('click', function(){}) создать remove()
// 2ой вариант, установить событие в цикле при самом созданиии этой li создать remove()
// function removeOnClick(event){
//     event.target.remove();
//     // получаем значение аттрибута id который мы удаляем
//     console.log(event.target.dataset.id);
// };

// liElem.addEventListener('click', removeOnClick);


    // Добавление аттрибутов - elem.setAttribute('atr','val') 
// elem.setAttribute('atr', 'value'); - если добавляем многим елементам, то нужно запустить через цикл
// liElem.setAttribute('title', 'value');
// olElem.setAttribute('attr', 'val');

    // Получение значения аттрибутов - elem.getAttribute('attr')
// console.log(olElem.getAttribute('attr'));

    // Удаление аттрибутов - removeAttribute('atr');
// olElem.removeAttribute('attr');

    // dataset - валидные, собственные аттрибуты
// data-attributes - аттрибуты которые вешают на любой тэг, это валидные, собственные атрибуты начинающиеся с data-attr.
// Данные аттрибуты часто используются как система передачи данных.
// У dataset есть своя иерархия, дря работы с атрибутами
// Что бы добавить атрибут существует синтаксис
// elem.dataset.attr = value;
// Что бы этот атрибут удленнить через "-", при названии его стоит просто след наше имя начать с Заглавной буквы
// elem.dataset.attrSecpart = value;
// Что бы получить значение аттрибута елемента
// elem.dataset.attrSecpart
