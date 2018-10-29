'use strict';
console.log('BOM DOM L13');


console.log('Node Proporties (type, tag, content) DOM L13');

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

var childNodes = document.body.childNodes;
for (var i = 0; i < childNodes.length; i++) {
    // if (childNodes[i].nodeType != 1) continue;
    // console.log( childNodes[i] );
    console.log( childNodes[i] + ' = ' + childNodes[i].nodeType);
}


        // Тег: nodeName и tagName
// nodeName - содержит название(тег) 
// nodeName определено для любых узлов Node, для элементов оно равно tagName, а для не-элементов обычно содержит строку с типом узла.
// tagName - содержит элемента узла
// Свойство tagName есть только у элементов Element.

// Название HTML-тега всегда находится в верхнем регистре.
console.dir(document.body.nodeName);
console.dir(document.body.tagName);

console.dir(document.body.firstChild);
console.dir(document.body.firstChild.nodeName);
console.dir(document.body.nodeName);


        // innerHTML: содержимое элемента
// позволяет получить HTML-содержимое элемента в виде строки. В innerHTML можно и читать и писать.
// innerHTML += осуществляет перезапись - Так как новое значение записывается, то все изображения и другие ресурсы перезагружаются 
// Свойство innerHTML есть только у узлов-элементов.
// Скрипты не выполняются

console.dir(document.body.innerHTML);
console.dir(document.body.querySelector('div').innerHTML = '<p> this is my inner </p>');


        // outerHTML: HTML элемента целиком
// Свойство outerHTML содержит HTML элемента целиком. Изменить outerHTML элемента невозможно.
console.log(document.body.children[1]);
console.log(document.body.children[1].outerHTML);

// Изменить outerHTML элемента невозможно.
console.log(document.body.children[1]);
console.log(document.body.children[1].outerHTML = '<p> this is my outer </p>');
console.log(document.body.children[1].outerHTML);


        // nodeValue/data: содержимое текстового узла

