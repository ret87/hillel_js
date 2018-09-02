'use strict';
console.log('Methods');

// //      //split(,)
//     //Метод разбивает строку или строчные значения по заданному разделителю,
//     // с помощью числового аргумента, можно отсечь все показатели после данного.

// var names = 'Artem, Alex, Lusy, Mark, Andrew, Jhon';
// var NamesArr = names.split(', '); //разбивает в массив по значению запятая + пробел
// console.log(NamesArr);
// var NamesArr = names.split(', ', 4); //разбивает в массив по значению запятая + пробел + выдаёт первые 4 значения, остальные отсекает
// console.log(NamesArr);
// var name = "javasript";
// var NameArr = name.split(''); //разбивает в массив по буквам
// console.log(NameArr);


// //      //join(,)
//     //Метод склеивает числа и символы из данных массива, с заданным в скобках разделитем ("")
// var FlatsArr = ['Kopernika 3, Pobedu 67a, Kievskiy 3'];
// console.log(FlatsArr);
// var flats = FlatsArr.join('; ');
// console.log(flats);
    
//     //Если склеивать пустые данные массива, разделитель будут повторяться
// var EmptyArr = new Array(4);
// console.log(EmptyArr);
// var empty = EmptyArr.join('ah');
// console.log(empty);


// //      //delete
//     //delete - удаляет значение индекса массива - но не сам индекс, оставляет его пустым
// console.log(NamesArr);
// delete NamesArr[0];
// console.log(NamesArr);


// //      //splice(index, delite, add...addN) 
//     //splice- удаляет, заменяет, по череди или одновременно
//     //arr.splice(index[, deleteCount, elem1, ..., elemN]) --- Удалить deleteCount элементов, начиная с номера index, 
//     // а затем вставить elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.
// console.log(NameArr);
//     //начиная с позиции 1 - удаляем 1 елемент
// NameArr.splice(1,1); 
// console.log(NameArr);
//     //начиная с позиции 1 удаляем 2 елемента
// // NameArr.splice(1,2); 
// // console.log(NameArr);
//     // начиная с позиции 1 удаляем 7 позиций - и добавляем "s", "hillel" после них
// NameArr.splice(1,7, "s", "hillel") 
// console.log(NameArr);
//     //Задавая переменную при удалении - можно вывести удалённые елементы!! 
// var removedArr = NameArr.splice(0,2);
// console.log(NameArr);
// console.log(removedArr);
//     //Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0:
// console.log(NameArr);
// NameArr.splice(1,0,"strong", "lvl", "js", "education");
// console.log(NameArr);
//     //Допускается использование отрицательного номера позиции, которая в этом случае отсчитывается с конца:
// NameArr.splice(0,1);
// console.log(NameArr);
// NameArr.splice(-1,0,"in", "hillel", "school");
// console.log(NameArr);


// //      //slice(begin,end-1) 
//     //Метод slice - копирует участок кода начиная с индекса бегин и заканчивая енд, но не включая его
// var CopyNameArr = NameArr.slice(2,5);
// console.log(CopyNameArr);
//     //если не указывать второе значение, то копировать будет до конца массива
// console.log(NameArr);
// var CopyEndNameArr = NameArr.slice(2); 
// console.log(CopyEndNameArr);
//     // если указывать отрицательное значение в первом индексе - то отсчёт будет с конца массива 
// console.log(NameArr);
// var CopyEndNameArr = NameArr.slice(-5); 
// console.log(CopyEndNameArr);
//     // если не указывать ни одного значения, то будет скопирован весь массив
// console.log(NameArr);
// var CopyEndNameArr = NameArr.slice(); 
// console.log(CopyEndNameArr);


// //      //sort(fn) - сортировка елементов в массиве на месте
//     // по умолчанию сортирует елементы, пробразовывая их к строке
// var ArrNumb = [0, 1, 4, 15, 25, 17, 35, 3, 5];
// console.log(ArrNumb);
// ArrNumb.sort();
// console.log(ArrNumb);
//     //что бы задать свой алгоритм сортировки - стоит создать свою функцию с условиями сортировки
//     // а имя этой функции использовать в скобках sort();
// function sortNumbers (a,b) {
//     if(a<b) return -1;
//     if(a>b) return 1;
// }
// ArrNumb.sort(sortNumbers);
// console.log(ArrNumb);


// //      //reverse() - меняет порядок элементов в массиве на обратный.
// ArrNumb.reverse();
// console.log(ArrNumb);


// //      //concat() - копирует елементы из одного массива в другой + можно добавить новые значнения в скобках
// var SomeNumb = [1,2,3,4,5,6,7]
// console.log(SomeNumb);
// var NewSomeNumb = SomeNumb.concat(8,9);
// console.log(NewSomeNumb);
//     // Если аргумент concat – массив, то concat добавляет элементы из него.
// var NewArrNumb = ArrNumb.concat([-1,-2],-3, 4, 6, 8, 3, 1);
// console.log(NewArrNumb);


// //      //indexOf/lastIndexOf - (searchElement[,fromIndex]);
//     //возвращает номер елемента указанный в searchElement
//     //для поиска используется строгое сравнение === 
//     //ищет с номера индекса указанного в fromIndex или с конца елемента массива - если не указано
//     //ищет справа на лево
//     //если находит выдаёт номер первого index искомого числа, если нет, то выдаст -1 
//     //работает по принципу перебора (как for()) 
// console.log(NewArrNumb.indexOf(0)); //выдаст index первого числа 0;
// console.log(NewArrNumb.indexOf(1)); //выдаст index первого числа 1;
// console.log(NewArrNumb.indexOf(2)); //выдаст index первого числа 2;
//     //можно задать во втором значении index числа после которого искать index числа в первом значении
// console.log(NewArrNumb.indexOf(1,8)); //выдаст index первого числа 1, после index №8;


// //      //Object.keys(obj) 
//     // возвращает массив состоящий из свойств объекта
// var user = {
//     name: 'Artem',
//     age: 30,
//     sex: 'male'
// }
// var keys = Object.keys(user);
// console.log(keys); //тут keys - преобразуется в массив из свойств объекта user


//      // Итог:

// Методы массивов:
// push/pop, shift/unshift, splice – для добавления и удаления элементов.
// join/split – для преобразования строки в массив и обратно.
// slice – копирует участок массива.
// sort – для сортировки массива. Если не передать функцию сравнения – сортирует элементы как строки.
// reverse – меняет порядок элементов на обратный.
// concat – объединяет массивы.
// indexOf/lastIndexOf – возвращают позицию элемента в массиве (не поддерживается в IE8-).
// Object.keys(obj) возвращает массив свойств объекта.



//      // Практика по теории


    // №5 Сортировать в обратном порядке
var arr5 = [5, 2, 1, -10, 8];
console.log(arr5);
function sortNumbers5(a, b) {
    return a - b;
}
arr5.sort(sortNumbers5);
// arr5.reverse().sort(sortNumbers5);
console.log(arr5);

    // №6 Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
    // Исходный массив не должен меняться.

var arr6 = ["HTML", "JavaScript", "CSS"];
var arr6Sorted = arr6.slice();
arr6Sorted.sort();
console.log('not sorted = ' + arr6);
console.log('sorted = ' + arr6Sorted);

    // №7 Случайный порядок в массиве
    // Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.
var arr7 = [1, 2, 3, 4, 5];
function sortNumbers7 (a,b) {
    return Math.random() - 0.5;
}
arr7.sort(sortNumbers7);
console.log(arr7);

