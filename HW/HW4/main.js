'use strict';
console.log('Home Tasks, Lection 4');

// 1st home task
// - Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];
// - проверить все числа на простоту, и найденные простые числа сохранить в массив B.
// - найти максимальное число и минимальное число.

// var n = prompt('vvdite razmer massiva', 15);
// var A = [];
// A.length = n;
var A = [23,1,2,52,5,34,23,6,246,436];
var B = [];
for(var i =0; i<A.length; i++){
    // arr[i] = 1 + Math.floor(Math.random() * 1000);    
    if(A[i]%2==0){ // часов 6 думал как сделать проверку на случайны числа - и метод Эндосфера пробовал и другое - скажи как???? 
        continue;
    } else {
        B.push(A[i]);
    }
}     
console.log(A);
console.log(B);

if(B.length){
    var max = B[0];
    var min = B[0];
} 
for(i=0;i<B.length;i++){
    if(B[i]<min) min=B[i];
    if(B[i]>max) max=B[i];
}
console.log('min chislo = ' + min);
console.log('max chislo = ' + max);



