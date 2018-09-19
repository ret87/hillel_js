'use strict';
console.log('Functions and scope');

// Практика 

// 1. Задача
// Функция должна вернуть массив из центральных элементов переданных массивов.
// Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
// Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4

// 2. Задача
// Написать функцию, которая получает 3 аргумента: два числа и функцию. Произвести вызов переданной ф-ии с двумя аргументами числами.
// doFunction(2, 3, power); в ответе должны получить 8, как 2 в степени 3.

// 3. Задача 
// Из п.2 реализовать функции sum, div, mul, power
// doFunction(16, -23, mul); // 16*(-23)

// 4. Задача 
// Из п.2, если количество числовых аргументов равно единице и переданная функция factorial - реализовать расчет факторикала. 
// doFunction(6, factorial);, в ответе поулчаем 6! = 720. // arguments.length и typeof