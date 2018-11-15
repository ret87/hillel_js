
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
{/* <input type="text" onchange="console.log(this.value)"> */}
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
// Возвращает битовую маску, которая включает в себя отношение вложенности между elemA и elemB, а также – какой из элементов появляется в DOM первым.
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

// Cобытие      Описание                                                                                                  Метод имитации
// onAbort	    - Прерывание загрузки изображения	 
// onBlur  - Потеря текущим элементом фокуса - переход к другому элементу. Возникает при щелчке мышью вне элемента либо табуляции blur()
// onChange	    - Изменение значений элементов формы. Возникает после потерей элементом фокуса, т.е. после события blur	        change()
// onClick	    - Одинарный щелчок (нажата и отпущена кнопка мыши)	                                                             click()
// onDblClick	- Двойной щелчок	 
// onError	    - Возникновение ошибки выполнения сценария	 
// onFocus	    - Получение элементом фокуса (щелчок мышью на элементе или очередное нажатие клавиши табуляции)	                 focus()
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
// onReset	    - Сброс данных формы ( щелчок по кнопке <input type="reset"> )	                                                reset()
// onResize	    - Изменение размеров окна	 
// onSelect	    - Выделение текста в текущем элементе	 
// onSubmit	    - Отправка данных формы ( щелчок по кнопке <input type="submit"> )	                                            submit()
// onUnload	    - Попытка закрытия окна браузера и выгрузки документа	 


// У MouseEvent есть много различных свойств: 
// - координаты курсора, его клацания - относительно страницы, елемента, с учетом прокрутки страницы и т.д.
// - target ссылка на элемент - target (работает как this, но предпочтительнее)
// - path - показывает путь к элементу, это массив и у него есть длинна (4 это минимальная длинна - windows.document.html.body)
// 
