'use strict';
console.log('lection 1');

// Конструкция switch заменяет собой сразу несколько if.
// Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.
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
