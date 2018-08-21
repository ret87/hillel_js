'use strict';
console.log('lection 1');

// Условные операторы: if, '?'
// 
// 
// if выполняет действия в зависимости от условия, else выполняет действия если условия не верны
// if - нужен для выполнения разных веток кода
// ? - возвращает то или иное значение в зависимости от условия
// if может быть вложенным в другой if 
// null может быть использован для задания условия при клике на Esc или отмены ввода
// 
// var a = 12;
// var b = 15;
// if (a>b) {
//     alert('Привет');
//   }
//   else alert('wrong');
// 
// var year = prompt('ваш возраст?', 18);
// if (year <18) {
//   alert ('sorry too young :-)')
// } else prompt("ваш пол?", "м/ж");
// 
// var myBirth = prompt('год моего рождения?', 1985);
// if (myBirth != 1987) {
//   alert ('try hard')
// } else alert ('yeah');

// 0, "пустая строка", null, undefined, NaN = false 
// if (prompt('скажи пароль и заходи','')) {
//   alert('hello');
// } else alert('no no no');

// так же можно обращаться напрямую к переменным которые проверяются промптом
// var birthForEnter = prompt('enter year pls', 'xxxx')
// var year = 'year ur Birth?';
// var trueCond = 'ok let`s go';
// var falseCond = 'no no no';
// var cond = prompt (year, ); 
// if (cond>=birthForEnter) {
//   alert(trueCond)
// } else alert(falseCond);

// несколько условий ставим через "else if"
// var birthForEnter = prompt('enter ur date', 'xxxx');
// var whenMyBirth = 'what is my birthdate?';
// var birthOk = 'yeah u r right';
// var birthEarly = 'to early';
// var birthLate = 'to late';
// var cond = prompt(whenMyBirth, 'xxxx');
// if (cond==birthForEnter) {
//   alert(birthOk);
// } else if (cond<birthForEnter) {
//   alert(birthEarly); 
// } else if (cond>birthForEnter) {
//   alert(birthLate);
// }

// иногда результат условия можно занести в переменную 
// и в зависимости от результата сделать её как в тру или фолс. далее от этих значений отталкиваться
// так же можно использовать "?" для короткой записи условий к переменным
// var access;
// var age = prompt("сколько вам лет?");
// if (age>=14) {
//   access=true;
// }
// if (age<14) {
//   access=false;
// }
// console.log(access);

// с помощью "?" это можно записать как:
// var access;
// var age = prompt("сколько вам лет?");
// access = (age>=14) ? true : false;
// console.log(access);
// так же "?" можно использовать до 3х раз в одном выражении
// var access;
// var age = prompt('сколько Вам лет?', 14);
// access = (age<3) ? "Привет дитёнышь :)" :
//   (age<14) ? 'Привет, заходи!' :
//   (age<30) ? 'Здаров!':
//   (age<40) ? 'Привет, мужик!':
//   (age<60) ? 'Добрый день!':
//   (age<100) ? 'Вам бы не за компом сидеть!': 
//   "да ну ладно Вам :)";
//   alert(access);
// 
// var access;
// var national = prompt('what is ur nationality?', 'ukr, rus, bel, eu, china, usa');
// access = (national == 'ukr') ? 'Hello hohol': 
//   (national == "rus") ? 'Hello moskal':
//   (national == "bel") ? 'Hello bulbash':
//   (national == "eu") ? 'Hello europ':
//   (national == "china") ? 'Hello chinies':
//   (national == "usa") ? 'Hello american': 'Hello earthman :)';
// alert(access);
// 
// var gamesList = prompt('choose our games', 'CoC, Royal, Dota, CS, HS');
// var chooseGames = (gamesList == 'CoC') ? 'ok, get CoC link' :
// (gamesList == 'Royal') ? 'ok, get Royal link' :
// (gamesList == 'Dota') ? 'ok, get Dota link' :
// (gamesList == 'HS') ? 'ok, get HS link' :
// (gamesList == 'CS') ? 'ok, get CS link' : 'we haven`t this game, choose our games pls :)';
// alert(chooseGames);
// 
// var gamesList = prompt('choose game', 'CoC, Royal, Dota, CS, HS');
// var chooseGames;
// var chooseGames=gamesList;
// if (gamesList=='CoC') {
// } else if (gamesList=='Royal') {
// } else if (gamesList=='Dota') {
// } else if (gamesList=='CS') {
// } else if (gamesList=='HS') {
// }
// alert('get ' + chooseGames + ' link');
// 
// 
// 
// Задача про Экмаскрипт
// var nameJS;
// var questJS = prompt('Каково официальное название JavaScript?');
// if (questJS=='ECMAScript') {
//     nameJS = 'Верно!';
// } else {
//     nameJS = '«Не знаете? «ECMAScript»!»';
// }
// alert(nameJS);
// 
// 
// Задача про три числа и больше/меньше
// var value;
// var getNumber = prompt('Введите любое число', 2);
// if (getNumber == 0) {
//     value = 0;
// } else if (getNumber > 0) {
//      value = 1;
// } else if (getNumber < 0) {
//     value = -1;
// }
// alert(value);
// 
// 
// Задача про вход и пароль для админа
// var admin;
// var access;
// var enter = prompt('Enter login');
// if (enter=='Админ') {
//     var password=prompt('Enter password');
//     if (password == 'Чёрный Властелин') {
//         alert('Добро пожаловать!');
//     } else if (password == null) {
//         alert('Вход отменён')
//     } else
//         alert('Пароль неверен');
// } else if (enter == null) {
//     alert('Вход отменён')
// } else
//     alert('Я вас не знаю')
// 
// Задача переписать if в ?
// 
// if (a + b < 4) {
//     result = 'Мало';
//   } else {
//     result = 'Много';
//   }
// 
// var a = +prompt("a", 2);
// var b = +prompt("b", 2);
// var result = (a + b < 4) ? 'Мало' : 'Много';
// alert(result);
// 
// 
// Задача перепишите 'if..else' в '?'
// 
// var message;
// if (login == 'Вася') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// 
// 
// var login = prompt('Вы кто?', "имя");
// var message = (login == 'Вася') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте':
// (login == '') ? 'Нет логина': '';
// alert(message);
// 
// 



// Условные операторы: if, '?'

// if выполняет действия в зависимости от условия, else выполняет действия если условия не верны
// if - нужен для выполнения разных веток кода
// ? - возвращает то или иное значение в зависимости от условия
// if может быть вложенным в другой if 
// null может быть использован для задания условия при клике на Esc или отмены ввода

// так же можно обращаться напрямую к переменным которые проверяются промптом
// несколько условий ставим через "else if"

// иногда результат условия можно занести в переменную 
// и в зависимости от результата сделать её как в тру или фолс. далее от этих значений отталкиваться
// так же можно использовать "?" для короткой записи условий к переменным

// так же "?" можно использовать до 3х раз в одном выражении
// с помощью "?" это можно записать как:
// 0, "пустая строка", null, undefined, NaN = false 