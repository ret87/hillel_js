'use strict';
console.log('lection 1');

// Конструкция switch заменяет собой сразу несколько if.
// Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.
// case 1,2,n... можно объединять под одно условие

// switch(x) {
//     case 'value1':  // if (x === 'value1')
//       ...
//       [break]
  
//     case 'value2':  // if (x === 'value2')
//       ...
//       [break]
  
//     default:
//       ...
//       [break]
//   }

// var a = +prompt('vvedite chislo' + a);
// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( 'Я таких значений не знаю' );
// }

// var a = 1;
// var b = 0;
// switch (a) {
//   case b + 1:
//     alert( 1 );
//     break;
//   default:
//     alert('нет-нет, выполнится вариант выше')
// }


// В примере ниже case 3 и case 5 выполняют один и тот же код:
// При case 3 выполнение идёт со строки (*), при case 5 – со строки (**).


// var a =+prompt('vvedite chislo', a);
// switch (a) {
//   case 4:
//     alert('Верно!');
//     break;
//   case 3:                    // (*)
//   case 5:                    // (**)
//     alert('Неверно!');
//     alert('Немного ошиблись, бывает.');
//     break;
//   default:
//     alert('Странный результат, очень странный');
// }

// внимательно смотрим на типы данных что записываем при выводе (case 3 -не число)
// так же следить стоит за break
// var arg = prompt("Введите arg?")
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'Один или ноль' );

//   case '2':
//     alert( 'Два' );
//     break;

//   case 3:
//     alert( 'Никогда не выполнится' );

//   default:
//     alert('Неизвестное значение: ' + arg)
// }


// Задачка переделать в иф елсе

// var browser = prompt('vvedite vaw browser IE, Opera, Chrome, Firefox, Safari');
// switch (browser) {
//     case 'IE':
//     alert( 'О, да у вас IE!' );
//     break;
    
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//     alert( 'Да, и эти браузеры мы поддерживаем' );
//     break;
    
//     default:
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }
// 
// равно
// 
// var browser = prompt('vvedite vaw browser IE, Opera, Chrome, Firefox, Safari', );
// if(browser === "IE") {
//     alert( 'О, да у вас IE!' );
// } else if(browser === 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     alert( 'Да, и эти браузеры мы поддерживаем' );
// } else {
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }


// Задачка переделать в свитч

// var a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
// 
// равно
// 
// var a = +prompt('vvedite a?', 0);
// switch(a) {
//     case 0:
//     alert(0);
//     break;

//     case 1:
//     alert(1);
//     break;
    
//     case 2:
//     case 3:
//     alert('2,3');
//     break;
// }

















// Конструкция switch заменяет собой сразу несколько if.
// Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.
// case 1,2,n... можно объединять под одно условие
// внимательно смотрим на типы данных что записываем при выводе (case 3 -не число)
// так же следить стоит за break
