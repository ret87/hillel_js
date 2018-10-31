'use strict';
console.log('Lection BOM DOM L13');


console.log('DOM L13');
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
window.onload = function(){
    console.log(document.getElementById('block'));
};
window.onload = function(){
    console.dir(document.getElementById('block'));
    document.getElementById('block').align = 'FOO';         // добавит свойству align = 'FOO'
    setTimeout(function(){
        document.getElementById('block').align = 'left';
        document.getElementById('block').style.backgroundColor = 'darkred';
        setTimeout(function(){
            document.getElementById('block').style.backgroundColor = 'darkblue';
            document.getElementById('block').style.color = 'white';
        }, 1000)
    }, 2000);  // изменит определённые свойства через опред время
};
// можно узнать размер елемента - обращаясь к свойству object.clientWidth;
window.onload = function(){
    console.dir(document.getElementById('block').clientWidth);
};

// можно вывести исключительно текст сожержащийся в елементе - обращаясь к свойству object.innerTEXT;
// можно вывести всё сожержимое в елементе - обращаясь к свойству object.innerHTML;
// innerHTML можно изменять, добавляя текст или теги через object.innerHTML += some tags
window.onload = function(){
    console.dir(document.getElementById('block').innerText);
    console.dir(document.getElementById('block').innerHTML);
    setTimeout(function(){
        document.getElementById('block').innerHTML += ' <hr /> <br />  Underline';
    }, 3000);
    console.dir(document.getElementById('block').innerText += ' <hr /> <br />  Underline');
    console.dir(document.getElementById('block'));
};

// Вывести элементы по классу - выводит в коллекцию элементов
// Коллекция - это подобные элементы. Что бы обратиться к её элементам, нужно перебрать их через цикл
var olga = document.getElementsByClassName('Olga');
console.log(olga);
for(var i=0; i<olga.length;i++){
    olga[i].innerHTML += 'selected';
};

        // // querySelector
// Методы querySelector - работает по логике обращения CSS селекторов - выбирает первый элемент подходящий по условиям (классу тэгу...)
// Селектор - шаблон по которому можно выбрать элемент (работа CSS) 
console.log(document.querySelector('div.Olga ul>li'));
