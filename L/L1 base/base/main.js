'use strict';
console.log('lection 1');
// alert prompt confirm


// alert
// alert( "Привет" );
// alert( "Привет1" );
// alert( "Привет2" );


// prompt
// var years = prompt('Сколько вам лет?', 100);
// alert('Вам ' + years + ' лет!');


// confirm
// var isAdmin = confirm ('вы админ?');
// alert(isAdmin);


// practice
// var urname = prompt('как вас зовут?', '')
// alert(urname);


// async defer 
// function addScript(src){
    //     var script = document.createElement('script');
    //     script.src = src;
    //     script.async = false; // чтобы гарантировать порядок
    //     document.head.appendChild(script);
    //   }  
//  addScript('1.js'); // загружаться эти скрипты начнут сразу
//  addScript('2.js'); // выполнятся, как только загрузятся
//  addScript('3.js'); // но, гарантированно, в порядке 1 -> 2 -> 3


// VAR 
// var name = 'Artem';
// var Admin = 'name';
// console.log(typeof Admin);
// var $ = 'Hello $';
// var _ = 'Hello _';
// var humansPlanetName = 'Земля';
// var userName ='Петя';

// константы
// var COLOR_RED = '#F00'; 
// var color = COLOR_RED;
// alert(color);
// вызов переменной при алерте - без кавычек - как бы обращаемся к ней - в кавычках будет конкретный текс.
// name1 = 'art1'; при 'use strict' нельзя.


// основные операторы
// + сложение и склеивание
// var apples = "2";
// var oranges = "3";
// console.log(apples + oranges);
// console.log(+apples + +oranges);

// приоритет 
// console.log(2*5**3)

// = присваивание, перезаписывание аргументов, операндов, выражений и тд
// var a = 10;
// var b = 20;
// var c = a + (b+1);
// var c = a = (b + 2);
// console.log(c);
// console.log(a);

// % взятие цельного остатка от деления
// console.log(c%a);

// ++, -- Инкремент/декремент увеличивают или уменьшают переменную на 1 единицу
// var i = 0;
// ++i;
// i++;
// console.log(i);

// в зависимости где мы будем располагать ++ или -- (до или после переменной) - будет использоваться в выражении число
// до или после его изменения - но сама переменная уже измениться
// var i = 1;
// var a = 2;
// var i = 1 + 5 + a++; 
// console.log(i);
// ++ или -- имеют более высокий приоритет перед арифметическими выражениями 
// var i = 1;
// var a = 2;
// // var i = 1 + 5 * ++a; 
// console.log(++i * 5 + ++a);

// сокращённая арефметика +, -, *, /, %  перед  "="
// var a = 5;
// var b = 4;
// a *=2;
// a = 2 * 5;
// b /=2;
// b = 4 / 2;
// var c = 1;
// c /=2*b;
// c = 1 / 2 * b;
// console.log(a, b, c);

// оператор "," перечисление выражений, используют в циклах и тд
// var a = (5, 6);
// console.log(a);
// for (a=1, b=2, c=a*b; a<10; a++) {
// }
// console.log(c);
// var a=1, b=1, c, d;
// c = ++a;
// console.log(c);
// console.log(a);
// d = b++;
// console.log(d);
// c = 2+ ++a;
// console.log(c);
// d = 2+ b++;
// console.log(d);
// console.log(b);
// console.log(a);


// Операторы сравнения >, <, >=, <=, !=
// логические операторы true, false
// var a = 5;
// var b = 10;
// console.log(a>b);
// console.log(a<b);
// console.log(a!=b);

// явное присваивание
// var c = true;
// var d = (a!=b);
// console.log(c);
// console.log(d);
// console.log(c==d);

// сравнение строк, нижний регистр > верхнего, я > a, колличество не важно, сравниваются по очереди - первые потом вторые буквы.
// console.log('А'>'а');
// console.log('а'>'А');
// console.log('я'>'б');
// console.log('а'<'ж');
// console.log('б'<'ад');

// если числа привести как строки, то 9>8>7>6>5>4>3>2>1>0, когда чисел несколько, сравниваются первые, если равны, то вторые
// console.log('9'>'19999');

// но строки легко можно привести в числа 
// console.log(+'9'>+'19999');

// при сравнении разных типов используется числовое преобразование
// console.log('9'>19999);
// console.log(false==0);
// console.log(true==1);
// console.log(''==0);
// console.log(''==false);

// строгое равенство, используем === или !==
// console.log('' === false);
// console.log(0 === false);

// сравнение null c 0 выдаст ложь 
// console.log(0 === null);
// console.log(0 === undefined);
// console.log(0 == null);
// console.log(0 > null);
// console.log(0 == undefined);
// console.log(0 < undefined);

// но null  >=, <=  с 0 выдаст тру
// console.log(0 <= null);

// в тоже время null u undefined равны друг друг
// console.log(null == undefined);

// undefined вообще нельзя сравнивать ни со строками ни с числами, т.к. при числовом преобразовании оно даёт Nan
// console.log(0 <= undefined);
// console.log("привет" > undefined);

// null и undefined равны друг-другу или самим себе, < и > лучше не сравнивать
// console.log(null == undefined);

