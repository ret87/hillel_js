'use strict';
window.onload = function(){

    console.log('Lection 15 DOM Events');
    
    console.log('Порядок обработки событий');

        // // Порядок обработки событий

    // Главный поток
// В каждом окне выполняется только один главный поток, который занимается выполнением JavaScript, отрисовкой и работой с DOM.
// Он выполняет команды последовательно, может делать только одно дело одновременно и блокируется при выводе модальных окон (alert).
// Дополнительные потоки тоже есть
// Есть и другие, служебные потоки, например, для сетевых коммуникаций (скачивание файлов может продолжаться пока главный поток работает)
// Web Workers
// Существует спецификация Web Workers, которая позволяет запускать дополнительные JavaScript-процессы(workers), чтобы загрузить 
// несколько ядер/процессоров одновременно

    // Очередь событий и  Вложенные (синхронные) события
// Если главный поток прямо сейчас занят, то он не может срочно выйти из середины одной функции и прыгнуть в другую.
// Когда происходит событие, оно попадает в очередь.
// Внутри браузера непрерывно работает «главный внутренний цикл», который следит за состоянием очереди и обрабатывает события.
// Иногда события добавляются в очередь сразу пачкой.

var area = document.getElementById('area');

area.value ="click on me";
area.onfocus = function(e){
    this.value ="focus";
    this.scrollTop = this.scrollHeight;
};
area.onmousedown = function(e){
    this.value +="mousedown\n";
    this.scrollTop = this.scrollHeight;
};
area.onmouseup = function(e){
    this.value +="mouseup\n";
    this.scrollTop = this.scrollHeight;
};
area.onclick = function(e){
    this.value +="click\n";
    this.scrollTop = this.scrollHeight;
};

    // Делаем события асинхронными через setTimeout(…,0)
// Обычно события становятся в очередь и обрабатываются в порядке поступления, асинхронно, независимо друг от друга.
// Синхронными являются вложенные события, инициированные из кода.
// Один вариант – просто переместить строку с необходимым методом вниз кода обработчика.
// Если это неудобно, можно запланировать необходимый метод чуть позже через setTimeout(..., 0)
// Запустит onfocus сразу после выполнения onclick
var button = document.getElementById('button');
var text = document.getElementById('text');
button.onclick = function(){
    text.value += ' in onclick '
    setTimeout(function(){
        text.focus();
    }, 0);
    text.value += ' after onclick ' 
};
text.onfocus = function(){
    text.value += ' !focus '
};

console.log('Объект события');
    
        // // Объект события




};