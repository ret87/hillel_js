'use strict';
console.log('Methods');

//      //split(,)
    //Метод разбивает строку или строчные значения по заданному разделителю,
    // с помощью числового аргумента, можно отсечь все показатели после данного.

var names = 'Artem, Alex, Lusy, Mark, Andrew, Jhon';
var NamesArr = names.split(', '); //разбивает в массив по значению запятая + пробел
console.log(NamesArr);
var NamesArr = names.split(', ', 4); //разбивает в массив по значению запятая + пробел + выдаёт первые 4 значения, остальные отсекает
console.log(NamesArr);
var name = "javasript";
var NameArr = name.split(''); //разбивает в массив по буквам
console.log(NameArr);


//      //join(,)
    //Метод склеивает числа и символы из данных массива, с заданным в скобках разделитем ("")
var FlatsArr = ['Kopernika 3, Pobedu 67a, Kievskiy 3'];
console.log(FlatsArr);
var flats = FlatsArr.join('; ');
console.log(flats);
    
    //Если склеивать пустые данные массива, разделитель будут повторяться
var EmptyArr = new Array(4);
console.log(EmptyArr);
var empty = EmptyArr.join('ah');
console.log(empty);


//      //delete
    //delete - удаляет значение индекса массива - но не сам индекс, оставляет его пустым
console.log(NamesArr);
delete NamesArr[0];
console.log(NamesArr);


//      //splice(index, delite, add...addN) 
    //splice- удаляет, заменяет, по череди или одновременно
    //arr.splice(index[, deleteCount, elem1, ..., elemN]) --- Удалить deleteCount элементов, начиная с номера index, 
    // а затем вставить elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.
console.log(NameArr);
    //начиная с позиции 1 - удаляем 1 елемент
NameArr.splice(1,1); 
console.log(NameArr);
    //начиная с позиции 1 удаляем 2 елемента
// NameArr.splice(1,2); 
// console.log(NameArr);
    // начиная с позиции 1 удаляем 7 позиций - и добавляем "s", "hillel" после них
NameArr.splice(1,7, "s", "hillel") 
console.log(NameArr);
    //Задавая переменную при удалении - можно вывести удалённые елементы!! 
var removedArr = NameArr.splice(0,2);
console.log(NameArr);
console.log(removedArr);
    //Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0:
console.log(NameArr);
NameArr.splice(1,0,"strong", "lvl", "js", "education");
console.log(NameArr);
    //Допускается использование отрицательного номера позиции, которая в этом случае отсчитывается с конца:
NameArr.splice(0,1);
console.log(NameArr);
NameArr.splice(-1,0,"in", "hillel", "school");
console.log(NameArr);


//      //slice(begin,end-1) 
    //Метод slice - копирует участок кода начиная с индекса бегин и заканчивая енд, но не включая его
var CopyNameArr = NameArr.slice(2,5);
console.log(CopyNameArr);
    //если не указывать второе значение, то копировать будет до конца массива
console.log(NameArr);
var CopyEndNameArr = NameArr.slice(2); 
console.log(CopyEndNameArr);
    // если указывать отрицательное значение в первом индексе - то отсчёт будет с конца массива 
console.log(NameArr);
var CopyEndNameArr = NameArr.slice(-5); 
console.log(CopyEndNameArr);
    // если не указывать ни одного значения, то будет скопирован весь массив
console.log(NameArr);
var CopyEndNameArr = NameArr.slice(); 
console.log(CopyEndNameArr);


//      //  