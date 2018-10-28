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

// DOM-узлы – обычные JavaScript-объекты. Их классы заданы в прототипном стиле. 