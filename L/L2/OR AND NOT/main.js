'use strict';
console.log('lection 1');


// Или ||  - задаёт несколько условий одному операнту, проверяя выполнение хотя бы одного из них. работает похоже на тру ор фолс.
// если первое условие прошло, остальные даже не будет проверять/присваивать. возращает то значение на котором прошло ТРУ
// "запинается на правде" - используют для возвращения первого истинного числа из списка, если его нето, то возвращает последнее.
// ИЛИ || - возвращает ПОСЛЕДНЮЮ ЛОЖЬ; возвращает ПЕРВУЮ ТРУ; 

// var a = prompt('введите число');
// if (a>10 || a >20) {
//     alert(a);
// }
// 
// var a = prompt('number pls', 5);
// if (a == 1 || 2 || 3 || 4) {
//     alert(a);
// }
// console.log(a);
// 
// var num = 0;
// var strng = "";
// var say = "hello";
// var b = 12;
// var undef;
// var result = num || strng || say || undef || b;
// alert (result);


// И &&  - возвращает Тру только в том случае, если оба аргументы верны, в противном случае первый Фолс выдаёт. .setTimeout(() => {
// И &&  - возвращает ПОСЛЕДНЮЮ ТРУ; возвращает последнюю ПЕРВУЮ ЛОЖЬ
// И &&  - приоритет выше чем у ИЛИ ||

// var a = +prompt('enter a');
// var b = +prompt('enter b');
// if (a>1 & b<4) {
//     alert(a+b);
// }
// 
// var hour = prompt('enter hour time'), 
//     minute = prompt('enter minute time');
// if (hour <24 && hour >=0 && minute >=0 && minute <=60) {
//     alert('time is ' + hour + '.' + minute);
// }
// alert(1&&0&&3);
// 
// alert( 0 || 3 && 1);
// 
// var x = prompt('number pls');
// (x>5)&&alert('more then 5');
// console.log(x);
// 

// НЕ !  - сначала приводит аргумент к ТРУ или ФОЛС, а после возвращает противоположное значение.

// alert(!null);
// alert(!'a');
// alert(!0);

// alert( alert(1) || alert(3) || 2 || alert(4) );
// alert( alert(1) || alert(3) );
// alert( alert(1) && 1);
// alert(2 && alert(1));
// alert('a' || 1);
// alert( true && 'false2' || 'false3' );
// alert(1&&null&&2);
// alert(alert('hi')&&alert('man'))

// console.log(null || 2 && 3 || 4 );
// console.log(55 && 10);

// Задача c if внутри диапазона от 14 до 90;
// var age;
// age = prompt('enter number');
// if (age >=14 && age <=90) {
//     alert(age);
// }

// Задача c if не внутри диапазона от 14 до 90;
// var age;
// age = prompt('enter number');
// if (age <14 || age >90) {
//     alert(age);
// }

// Задача c if не внутри диапазона от 14 до 90;
// var age;
// var age = prompt('enter number');
// if (!(age >=14 && age <=90 )) {
//     alert(age);
// }

// if (-1 || 0) alert( 'первое' );
// if (-1 && 0) alert( 'второе' );
// if (null || -1 && 1) alert( 'третье' );








// Или ||  - задаёт несколько условий одному операнту, проверяя выполнение хотя бы одного из них. работает похоже на тру ор фолс.
// если первое условие прошло, остальные даже не будет проверять/присваивать. возращает то значение на котором прошло ТРУ
// "запинается на правде" - используют для возвращения первого истинного числа из списка, если его нето, то возвращает последнее.
// ИЛИ || - возвращает ПОСЛЕДНЮЮ ЛОЖЬ; возвращает ПЕРВУЮ ТРУ; 

// И &&  - возвращает Тру только в том случае, если оба аргументы верны, в противном случае первый Фолс выдаёт. .setTimeout(() => {
// И &&  - возвращает ПОСЛЕДНЮЮ ТРУ; возвращает последнюю ПЕРВУЮ ЛОЖЬ
// И &&  - приоритет выше чем у ИЛИ ||

// НЕ !  - сначала приводит аргумент к ТРУ или ФОЛС, а после возвращает противоположное значение.

// If можно вкладывать в If при том очередность будет именно по порядку вложенности)
// Alert можно вкладывать в Alert и будет выводить внутренние Alertы а основной Alert будет выводиться как undefined 
// ! - оператор так же можно присваивать целым выражениям! взяв предварительно их в скобки и присвовив его перед скобками.
