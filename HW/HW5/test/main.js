'use strict';
console.log('Test, Lection 5');

// level 1
// 1.1 Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’
// 1.2 Организовать вывод массива [6,7,2,3,5,7] в виде списка, при помощи тегов ul-li
// 1.3 В массиве [5,6,43,3,436,7,87,76,45,3] вырезать центральный элемент, если длина массива парная – вырезать два элемента, 
// которые можно считать центральными

// 1.1 

var Arr = [1, 2, 3, 4 ,5]
var str = Arr.join('_');
alert( str ); 

//1.2
var Arr2 = [6,7,2,3,5,7];
var Aul = Arr2.join('</li><li>');
document.write('<ul><li>');
document.write(Aul);
document.write('</li></ul>');

//1.3
var Arr3 = [5,6,43,3,436,7,87,76,45,3];
console.log(Arr3);
var delMid = Math.floor(Arr3.length/2);
if(Arr3.length%2!==0){
    Arr3.splice(delMid, 1);
} else if(Arr3.length%2==0){
    Arr3.splice(delMid-1, 2);
} 
console.log(Arr3);



// level 2
// 2.1 Организовать циклический ввод с клавиатуры элементов, которые будут добавляться к существующему массиву A = [1,2,3] в конец. 
// Предусмотреть символ прекращения ввода «&»
// 2.2 4 пункт, в начало

// 2.1 
var A1 = [1, 2, 3];
console.log(A1);
for(var i=0;i<A1.length;i++){
    if(i<A1.length){
        var A1Prompt = prompt('vvedite chislo', 5);
        if (A1Prompt === '&' ) break;
        A1.splice(A1.length+1, 0, A1Prompt); 
        console.log(A1);
    } 
}

//2.2 
var A2 = [1, 2, 3];
console.log(A2);
for(var i=0;i<A2.length;i++){
    if(i<A2.length){
        var A2Prompt = prompt('vvedite chislo', 5);
        if (A2Prompt === '&' ) break;
        A2.splice(0, 0, A2Prompt);
        console.log(A2);
    } 
}