'use strict';
console.log('cylinder');

var SQUARE = s;
var HIGHT = h;
var VOLUME = v;

var r = prompt('Введите радиус цилиндра в см.', 10);
console.log(r);
var s = 2*Math.PI*r*r;
console.log(s);
alert('Площадь поверхности цилиндра равна ' + s + ' см');
var h = prompt('Введите высоту цилиндра в см', 50);
var v = s*h;
console.log(v);
alert('Объём цилиндра равен ' + v + ' кубических см');