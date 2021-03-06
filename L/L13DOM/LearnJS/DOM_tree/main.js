'use strict';
console.log('DOM L13');


console.log('DOM tree L13');
        
        // Дерево DOM

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


console.log(document.documentElement);
document.body.style.backgroundColor = 'red';

