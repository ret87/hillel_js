'use strict';
window.onload = function(){

    console.log('LearnJS DOM Events 15');
    
        console.log('Атрибуты и DOM-свойства');

        // // Атрибуты и DOM-свойства
// HTML-атрибуты и DOM-свойства обычно, но не всегда соответствуют друг другу, нужно это понимать, чтобы работать с ними правильно.
// Например, если тег выглядит как <body id="page">, то у объекта будет свойство body.id = "page".

    // Свои DOM-свойства и методы
// Нестандартные свойства и методы видны только в JavaScript и никак не влияют на отображение соответствующего тега.
// document.body.newProp = {key: value, key2: value};

// Свои DOM-свойство
document.body.newProp = {
    key: 'value',
    key2: 'value2'
};
console.log(document.body.newProp);
console.log(document.body.newProp.key2);

// Свои DOM-методы
document.body.consName = function(){
    console.log(this.nodeName);
};
document.body.consName();


    // Атрибуты
// Элементам DOM, с другой стороны, соответствуют HTML-теги, у которых есть текстовые атрибуты.








};