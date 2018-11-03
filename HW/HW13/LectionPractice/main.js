'use strict';
console.log('BOM DOM LP13');
console.log('Lection Practice');
window.onload = function(){
    var block = document.querySelector('.block');
    // element.className = '' - можно узнаить или менять имя класса или добавлять класс к существующему, определённом элементу.
    block.className += ' selected';
    // element.classList - лучший инструмент для работы с классами объекта, т.к. сожержит свойства объекта и кучу методов от прототипа)
    // element.classList.add - добавит ещё один класс элементу
    block.classList.add('action', 'act1', 'act2');
    // element.classList.remove - удаляет определённый класс
    block.classList.remove('selected');
    // element.classList.contains('className') - выдаёт true/false, по наличи имени селектора в элементе 
    var isSelected = block.classList.contains('selected');
    console.dir(isSelected);    
// element.classList.toogle('className') -проверяет наличие класса и в зависимости от результата, перекл.- удаляет или добавляет класс 
    block.classList.toggle('selected');
    console.dir(block);
    block.classList.toggle('action');
    console.dir(block);
    // element.classList.value ='' - удаляет все классы 
    // block.classList.value = '';
    // console.dir(block);

console.log('Задача №1');
// Есть 3 блока различных цветов. Раз в 2 секунды они перемещаются на случайное положение в пределах окна.
    var random = document.querySelectorAll('.random');
    var randPosition = function(){
        for(var i=0; i<random.length; i++){
            getRandColor();
            console.log(random[i].style.left = Math.floor(Math.random() * Math.floor(640)) + 'px');
            console.log(random[i].style.top = Math.floor(Math.random() * Math.floor(640)) + 'px');
        };
    };
    var timerPosition = setInterval(randPosition, 2000);

console.log('Задача №2');
// Каждое перемещение также меняет цвет блока на случайный. Создать фунцию getRandColor()
    // getRandColor()
    var getRandColor = function(){
        for(var i=0; i<random.length; i++){
            var randColor1 = 0 + Math.floor(Math.random() * (255 + 1 - 0));
            var randColor2 = 0 + Math.floor(Math.random() * (255 + 1 - 0));
            var randColor3 = 0 + Math.floor(Math.random() * (255 + 1 - 0));
            random[i].style.backgroundColor = 'rgb(' + randColor1 + ',' + randColor2 + ',' + randColor3 + ')';
        };
    };
};
