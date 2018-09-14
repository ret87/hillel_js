'use strict';
console.log('Functions');

// Области видимости
// Желательно избегать создания переменных внутри самой функции (неявные переменные) - их стоит создать пустыми до функции
var res;
function sum (a,b){
    res = a + b;
    console.log(res);
    return  res;
}
sum(1,2);