'use strict';
console.log('lection 1');

// while 
// var n = 0;
// var x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// console.log(x, n);
// }

outer:
var x=+prompt('enter X', 3);
while(x<=3){
  x++;
  console.log(x);
  // if(x==1) break outer ?????????????????????
}
alert('Готово!');
