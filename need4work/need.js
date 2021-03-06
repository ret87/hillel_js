
// Метод str.toUpperCase() - возвращает строку в верхнем регистре
str.toUpperCase();

// Метод num.toFixed(n)
// Округляет число num до n знаков после запятой, при необходимости добивает нулями до данной длины и возвращает в виде строки
12.345.toFixed(1); // 12.3

// Infinity - бесконечность можно присвоить и в явном виде
var x = Infinity;

// Метод isNaN(n) - преобразует аргумент к числу и возвращает true, если NaN, и false – для любого другого значения.
isNaN(numb);

// Метод isFinite(n)
alert( isFinite(1) ); // true
alert( isFinite(Infinity) ); // false

// Мягкое преобразование: Методы parseInt и parseFloat
alert( parseInt('12px') ) // 12, ошибка на символе 'p'

// Метод isNaN посчитает числами значения false, true, null, так как они хотя и не числа, но преобразуются к ним.
var x = prompt("Введите значение", "-11.5");
if(isNaN(x)){
    console.log('не число');
} else {
    console.log('число');
};

// Метод isNumeric -проверка только на числа
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// Метод toString(система счисления)
// Выдаёт представление числа в строке исходя из системы исчисления (от 2х - побитовое, до 36 - алфавитное, цветовые исчисления);
var n = 10; 
console.log(n.toString(2));  // => 0101

    // Округление
// Math.floor - округляет вниз
console.log( Math.floor(3.1) );  // 3
// Math.ceil - округляет вверх
console.log( Math.ceil(3.1) );   // 4
// Math.round - округляет до ближайшего целого
console.log( Math.round(3.1) );  // 3
// Короткие записик округления
// ~~ - скоращенная запись округления до целого число вниз
console.log( ~~3.9 );  // 3
// ^ 0 - скоращенная запись округления до целого число вниз
console.log( 3.9 + 4.9 ^ 0 );  // 8
// Math.round(n*100)/100)   - для округления до нужной цифры после запятой можно умножить и поделить на 10 с нужным количеством нулей
console.log( Math.round(3.954 *100) / 100) ;  // 3.95
// Mетод +num.toFixed(precision) - округляет (как Math.round) число num до точности precision и возвращает результат в виде строки
var n = 1.535;
console.log(+n.toFixed(2));

    // Тригонометрия
// Возвращает арккосинус x (в радианах)
Math.acos(x)
// Возвращает арксинус x (в радианах)
Math.asin(x)
// Возвращает арктангенс x (в радианах)
Math.atan(x)
// Возвращает угол до точки (y, x). Описание функции: Atan2.
Math.atan2(y, x)
// Вычисляет синус x
Math.sin(x)
// Вычисляет косинус x
Math.cos(x)
// Возвращает тангенс x
Math.tan(x)

    // Функции общего назначения
// Возвращает квадратный корень из x.
Math.sqrt(x)
// Возвращает натуральный (по основанию e) логарифм x.
Math.log(x)
// Возводит число x в степень exp
Math.pow(x, exp)
// Возвращает абсолютное значение числа
Math.abs(x)
// Возвращает x, где exp – основание натуральных логарифмов.
Math.exp(x)
// Возвращает наибольший из списка аргументов
Math.max(a, b, c)
// Возвращает наименьший из списка аргументов
Math.min(a, b, c)
// Возвращает псевдослучайное число в интервале (0,1) – то есть между 0 (включительно) и 1 (не включая). 
Math.random()
// метод toLocaleString() - выводит числа черз запятую
number.toLocaleString(); // 123,456,789

// Код для генерации случайного целого от min to max включительно:
var rand = min + Math.floor(Math.random() * (max + 1 - min));

// Код для генерации случайного целого от min to max включительно через round:
var rand = min - 0.5 + Math.random() * (max - min + 1); rand = Math.round(rand);

// Перебор элементов в массиве.
for(var i=0; i < cars.length; i++){
    console.log(cars[i]);
}

// Перебор рандомно добавленных элементов в масиве
for(var i=0; i<arr.length; i++){
    arr[i] = min + Math.floor(Math.random() * (max + 1 - min));    
    console.log(arr[i]);
    // console.log(arr);
}

// Последний элемент в массиве.
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var max = arr.length-1;

// Что бы цикл отменялся при введении пустого значения, строки или отмены
if (value === "" || value === null || isNaN(value)) break;

// чётное или не чётное число
(a%2==0);
(a%2!==0);

// вычисление простых чисел
nextPrime:
for (var i = 2; i <= 10; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    console.log(i); // простое
}

// вычисление простых чисел через решето Эндосфера
var arr = [];
for (var i = 2; i < 100; i++) {
  arr[i] = true
}
var p = 2;
do {
    for (i = 2 * p; i < 100; i += p) {
        arr[i] = false;
    }
    for (i = p + 1; i < 100; i++) {
        if (arr[i]) break;
    }
    p = i;
} while (p * p < 100);

// лучшее решение поиска простых чисел
var min_num = 1; // нижняя граница интервала
var max_num = 436; // верхняя граница интервала
var result = ''; // сюда буду вносить пойманные простые числа
//перебирать от 1 до 1000
for(i=min_num; i<max_num ; i++){
    // каждое число по очереди делить на все числа меньше его самого
    for(var j=2; j<i; j++){
        // если на что-то делиться без остатка, то прерываю цикл
        if(i%j==0){
            break;
        }
        // если делиться только на самого себя, 
        if(i==j+1) {
        // то прибавляю его
            result +=i+', ' ; 
        }
    }
}
// Вычислить сумму чисел до данного через рекруссию
function pow(x) {
    if (x != 0) {
        return x + pow(x - 1);
    } else {
        return x;
    }
}
console.log(pow(100)); 

// Вычислить сумму чисел до данного через формулу
function sumTo(n){
    return n = n*(n+1)/2;
};
console.log(sumTo(100));

// Числа Фибоначчи рекруссия
function fib(f2){
    if(f2 > 1){ 
        return f2 = fib(f2-1) + fib(f2-2); 
    } else {
        return f2;
    };
};
console.log(fib(17));
// Числа Фибоначчи алгоритм вычисления в цикле
var a =1, b=1, c, n=17;
for(var i=3;i<=n;i++){
    c = a + b;
    a = b;
    b = c;
}
console.log(c);

// Сумма елементов одномерного массива
var arr = [3,2,5,6];
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
    }
console.log(sum);

// Возведение X в степень N
var result = x;
for (var i = 1; i < n; i++) {
    result *= x;
}

// Минимальные и максимальные числа в массиве
if(B.length){
    var max = B[0]; //делаем переменную и приравниваем её к первому номеру в искомом массиве, условно предполагая, что он минимален
    var min = B[0]; // такая же процедура только с максимумом
} 
for(i=0;i<B.length;i++){  // задаём функцию стандартного перебора, поочередно проверяя следующие по очереди цифры массива с условными
    if(B[i]<min) min=B[i];  // переприсваиваем наш условный мин к след минимальному в массиве и так до тех пор пока не закончится цикл 
    if(B[i]>max) max=B[i];  // такая же процедура только с максимумом
}

// Номер числа в списке массива
var iMin=0;
var iMax=0;
for(var i=0; i<A.length;i++){
    if(A[i]==min) iMin=i;
    if(A[i]==max) iMax=i;
}

// быстрая сортировка чисел по их порядку
function sortNumbers(a, b) {
    return a - b;
  }
var ArrNumb = [0, 1, 4, 15, 25, 17, 35, 3, 5];
ArrNumb.sort(sortNumbers);
console.log(ArrNumb);

// сортировка чисел по их порядку
function sortNumbers (a,b) {
    if(a<b) return -1;
    if(a>b) return 1;
}
ArrNumb.sort(sortNumbers);
console.log(ArrNumb);

// случайная сортировка чисел 
var arr = [1, 2, 3, 4, 5];
function sortNumbers (a,b) {
    return Math.random() - 0.5;
}
arr.sort(sortNumbers);
console.log(arr);


//Создание пустого двумерного массива размерностью n на m
var n = 21;
var m = 21;
var A = new Array(n);
for(var i = 0; i < A.length; i++ ){
    A[i] = new Array(m);
}
console.log(A);

//Создание пустого двумерного массива
for(i=0; i<arr.length; i++) {
    arr[i] = [];
    arr[i].length = 20;
}
console.log(arr);
// или
var arr = new Array(10);
for(i=0; i<arr.length;i++){
    arr[i]= new Array(20);
}
console.log(arr);

//Создание двумерного массива размерностью n на m заполненного нулями 0
var n = 4, m = 4;
var mas = [];
for (var i = 0; i < m; i++){
    mas[i] = [];
    for (var j = 0; j < n; j++){
        mas[i][j] = 0;
    }
}
console.log(mas);

// Создание и Заполнение двумерного массива рандомными числами
var n = 7;
var m = 7;
var A = new Array(n);

for(var i = 0; i < A.length; i++){
    A[i] = new Array(m);
    for(var j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random()*90 + 10);
    }
}
console.log(A);

// // Диагонали массивов
// главная диагональ
for(var i = 0; i < A.length; i++){
    for(var j = 0; j < A[i].length; j++) {
        if(i == j) document.write('**' + ' ');
    }
}
// побочная диагональ
for(var i = 0; i < A.length; i++){
    for(var j = 0; j < A[i].length; j++) {
        if(i + j == n - 1) document.write('**' + ' ');
    }
}

// средний столбец
for(var i = 0; i < A.length; i++){
    for(var j = 0; j < A[i].length; j++) {
        if(j + j == n - 1) document.write('**' + ' ');
    }
}
document.write('<br />');
// // средний рядок
if(i + i == n - 1) document.write('**' + ' ');

// какой-то энный (k) рядок
for(var i = 0; i < A.length; i++){
    for(var j = 0; j < A[i].length; j++) {
        if(i = k) document.write(A[i][j] + ' ');
    } 
}
// какой-то энный (k) столбец
if(j = k) document.write(A[i][j] + ' ');

// зона под главной диагональю, не включая её 
for(var i = 0; i < A.length; i++){
    for(var j = 0; j < A[i].length; j++) {
        if(i>j) document.write(A[i][j] + ' ');
    }
}
// зона под главной диагональю, включая её 
if(i>=j) document.write(A[i][j] + ' ');
// зона над главной диагональю, не включая её 
if(i<j) document.write(A[i][j] + ' ');
// зона над главной диагональю, включая её 
if(i<=j) document.write(A[i][j] + ' ');

// зона под главной побочной диагональю, включая её
for(var i = 0; i < A.length; i++){
    for(var j = 0; j < A[i].length; j++) {
        if(i + j >= n - 1){
            // console.log(A[i][j])
            document.write('**' + ' ');
        } else document.write(A[i][j] + ' ');
    }
    document.write('<br />');
}
document.write('<br />');
// зона под главной побочной диагональю, не включая её
if(i + j > n - 1)
// зона над главной побочной диагональю, включая её
if(i + j <= n - 1)
// зона над побочной диагональю, не включая её
if(i + j < n - 1)

// // Сложные условия 
// пересечение зон (ниже побочной и выше средней линии)
for(var i = 0; i < A.length; i++){
    for(var j = 0; j < A[i].length; j++) {
        if(i + j >= n - 1 && i + i < n-1 ){
            // console.log(A[i][j])
            document.write('**' + ' ');
        } else document.write(A[i][j] + ' ');
    }
    document.write('<br />');
}

// Поиск повторяющихся елементов со вторым массивом и запись только их
for(var i=0;i<A.length;i++){
    if (B.indexOf(A[i]) !== -1) {
        resA.push(A[i]);
    }
}
A=resA;
console.log(A);

// Поиск повторяющихся елементов со вторым массивом и удаление их
// если в массиве В есть числа из массива А - идёт перебор по i - которые не равны, 
// то вывести их в массив resA из массива числа А
for(var i=0;i<A.length;i++){
    if (B.indexOf(A[i]) == -1) {
        resA.push(A[i]);
    }
}
A=resA;
console.log(A);

// Функции, которые передаются как параметры, называются CALLBACK функциями
function test(a, callback){
    var resault = callback(a, 300);
}
function plus(x,y){
    return x + y;
}
function dif(x,y){
    return x / y;
}
test(10, plus);
test(10, dif);
// Функция создания счётчика
function makeCounter() {
    var currentCount = 1;
    return function() {
        return currentCount++;
    };
};
var counter = makeCounter();
console.log(counter());
console.log(counter());
// пример функции счётчика - для вызова каждый раз след числа (создаём функцию с параметром, и делаем её как результат своей функции)
function factory(list){
    var count = 0;
    return function(){
        console.log(list[count++]);
    }
}
var step = factory([2, 8, 9, 2, 4]);
step();
step();

// Можно применить определённую функцию к счётчику - каждому новому выводимому им элементу
function factory(list){
    var count = 0;
    return function (callback){
        return callback(list[count++]);
    }
}
var step = factory([2, 8, 9, 2, 4]);
function sqr(x) {
    return x*x;
}
console.log(step(sqr));
console.log(step(sqr));

// callback функции - вызов функции в параметрах другой функции
function doFunction(a, b, callback){ // три параметра - 3 имени
    return callback(a, b);    // приравниваем один из параметров к функции 
}
function power(x, y){   // создаем функцию - которую потом будем использовать
    return x ** y;
}
console.log(doFunction(2,3, power));    //задаём значение - параметру - нашей функции которую хотим использовать

// Факториал числа через функцию
function factorial(n) {
    return n ? n*factorial(n-1) : 1;
};
console.log(factorial(6));

// Факториал числа через рекруссию
function fact(n){
    if ( n !=1){
        return n * fact(n - 1);
    } return n;
}
console.log(fact(5));

// Факториал числа через функцию c обращением через глобальную переменную
var f = function factorial(n) {
    return n ? n*factorial(n-1) : 1;
};
var g = f;  // скопировали ссылку на функцию-факториал в g
f = null;
alert( g(5) ); 

// анонимные функции с использованием замыкания
function factoryAnon(){
    var z = 19; 
    return function () {
        console.log(z); //создали переменную и внутри кода её используем
    }
}
var funcAnon = factoryAnon();
funcAnon();

// - Возвращение другой функции по имени
function factoryName(){
    return addFunc; //мы обращаемся к другой функции по её имени - она может быть создана где угодно
}
function addFunc(){
    console.log(10);
}
var funcName = factoryName();
funcName(); 
console.log(funcName === addFunc);

    // // Объекты 
// Счётчик свойств в объекте через For In
var counter = 0;
var obj = {x=1, y=2, z=3}
for(var key in obj){
    counter++
}
console.log(counter);
// Сумма числовых значений в объекте
var summ = 0;
for(var key in obj){
    summ += obj[key]
}
console.log(summ);
// Самое большое число в значениях ключей Объекта
var maxKey = 0;
for(var key in salaries){
    if(key<salaries[key]){
        maxKey = salaries[key];
    }
}
console.log(maxKey);
//Клонирование объектов 
var cloneO1 = {};
for(var key in o1){
    cloneO1[key] = o1[key];
}
console.log(Object.keys(obj));
// Перебор ключей в объекте как массив
var objLength = [];
var objLength = Object.keys(obj);
console.log(objLength);
for(var i=0; i<objLength.length; i++){
    console.log(objLength[i]);   
}
// Перебор ключей и значений в объекте через FOR IN
for(var key in object){
    console.log("ключи " + key + "значения" + object[key])
}
// Функция для проверки на число
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

// Функция слияния 2х объектов в 3ий новый (если значения одинаковы - перезаписывается вторым, так как его запись позже стоит чем 1го)
function assignObjects(obj1, obj2){
    var obj = {};
    for(var key1 in obj1){
        obj[key1] = obj1[key1]; 
        for(var key2 in obj2){
            obj[key2] = obj2[key2]; 
        }
    }
    return obj;
}
// Функция слияния внутреннего объекта в главный 
function convert(object){
    for(var key in object){
        if(typeof object[key] ===  "object"){
            for(var keyIn in object[key]){
                    object[keyIn] = object[key][keyIn];
            }   
            delete object[key];
        }
    }
}
convert(obj);
// Функция создания объекта
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
// Вывод всех имен - ключей в объекте
Object.getOwnPropertyNames(object);
// Вывод всех имен - ключей в объекте
Object.keys(object);
    
    // // THIS
// This для получения ключей и их свойств в родительский объект 
var object = {
    addKeys: function (){
        this.nameKeyA = prompt('a?',);
        this.nameKeyB = prompt('b?',);
    }
}
object.addKeys();
console.log(object);

// Метод чейнинг» (chaining), вызываем несколько функций за раз и получаем ответ
var ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log( this.step );
        return this;
    }
}
ladder.up().up().down().up().down().showStep();

// Метод добавления новых елементов объекта через функцию
var data = {
    addRecord: function(){
        for(var i=0; i<arguments.length;i++){
            for(var key in arguments[i]){
                console.log(key);
                this[key] = arguments[i][key];
            }
        } 
    },
    p: 600,
    str: 'hello',
    y: -50
}
data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});

// Метод объединения двух объектов через функцию, для одновложенных объектов
function copy(dstr, src1, src2){
    for(var i=0; i<arguments.length;i++){
        for(var key in arguments[i]){
            dstr[key] = arguments[i][key];
        }
    }
    return dstr;
}
copy(obj, source1, source2);
// Метод клонирования двух объектов в третий через функцию, для одновложенных объектов
var clone = copy({}, source1, source2);

    // Прототип proto
// Чтение свойств одного объекта из другого
var obj1 = {
    key1: 'obj 1 key 1'
};
var obj2 = {
    key2: 'obj 2 key 2'
};
obj1.__proto__ = obj2;
console.log(obj1.key2);

    // Метод hasOwnProperty
// Проверка принадлежности ключа к объекту
console.log(obj2.hasOwnProperty('key2')); //true
console.log(obj2.hasOwnProperty('key1')); //false
// Для того, чтобы перебрать свойства самого прототипируемого объекта, достаточно профильтровать key через hasOwnProperty:
for(var isKey in obj2){
    if(!obj2.hasOwnProperty(isKey)) continue;
        console.log(isKey + '= '+ obj2[isKey]);
}
    // Object.create(null)
// Объект, создаваемый при помощи Object.create(null) не имеет прототипа, а значит в нём нет лишних свойств. 
// Вывести только собственные значения, наследуемые - нет
// Вывести функцию только если мы её записывали, иначе андефаинд
var data = Object.create(null);
console.log(data.toString); 

  // Методы для работы с proto
// создаст исключительно чистый объект, без наследования от прототипов
var object = Object.create(null);
// создаст объект со свойствами другого объекта (в параметрах)
var obj = Object.create(proto, descriptors);
// выводит значения объектов прототипа (наследуемые)
Object.getPrototypeOf(ObjectPrototyped); 
// можно записывать в прототип 
Object.setPrototypeOf(obj, proto); 
// cоздание объекта с прототипом
Object.create(proto, descriptors); 
// показывает все заданные свойства
Object.getOwnPropertyNames(object) 

// создаст объект со свойствами другого объекта (в параметрах)
var proto = {a: 1, b: 2};
var obj = Object.create(proto);
console.log(obj);

// Функция-конструктор, для создания однотипных объектов 
function CreateObj(keyValue,key2Value) {
    this.keyName = keyValue;
    this.key2Name = key2Value;
    console.log(keyValue);
}
var creatObj = new CreateObj('keyValue1','key2Value');              // просто через new и функцию
var creatObj2= new creatObj.constructor('keyValue2','key2Value');   // через constructor
console.log(creatObj);
console.log(creatObj2);

// Поиск свойств объекта через Function.prototype = object; 
var objDad = {
    key: 'value'
};
function Func(name) {
    this.name = name;
    this.__proto__ = obj
}
objNew.prototype = objDad;              //  говорит что objNew.__proto__ == objDad
var objNew = new Func("someValue");     //  присваивает objNew функцию Func с параметром "someValue" и делает новый объект
console.log(objNew.key); // true

// Создание методов в функции-конструтор
function Func (name){
    this.name = name;
    this.sayHi = function(){
        console.log('Привет ' + this.name);
    }
}
var Artur = new Func('Artur');
console.log(Artur);
Artur.sayHi();

// Локальные переменные в функции-конструкторе
function User(fName, lName){
    var phrase = 'Hello';
    function getFullName(){
        return fName + ' ' + lName;
    }
    this.sayHi = function (){
        console.log(phrase + ' ' + getFullName());
    }
}
var vasya = new User('Vasiliy', 'Nikolaevich');
vasya.sayHi();

// Если мы вручную создаём свойства объекта (функции-конструктора), то лучше самому прописать в его свойствах  constructor: nameObj
function CreateObj(){};
CreateObj.prototype = {
    key : value,
    constructor: CreateObj
}
// Эмуляция Object.create для всех браузеров и версий 
function inherit(proto) {
    function F() {}
    F.prototype = proto;
    var object = new F;
    return object;
}
var newObj = inherit(objPrototype);

// Перечисляет вводимые параметры [].join.call(arguments, ' - ')
function showList(){
    console.log( [].join.call(arguments, ' - ') );
}
showList('Artem', 'Vasja', 'Valja');

// Перечисляет вводимые параметры [].join.call(arguments, ' - ')
function showList(){
    console.log( Array.prototype.join.call(arguments, ' - ') );
}
showList('Artem', 'Vasja', 'Valja');

// Добавление нового метода, через Object.prototype.each = function(f){}
var user = { name: 'artem', age: '31' }             // опред объект
Object.prototype.each = function(f){                // код создания нового метода
    for (var prop in this){
        if (!this.hasOwnProperty(prop)) continue;    
        var value = this[prop];
        f.call(value, prop, value);
    };
};
user.each(function(prop, val){                      // выозов нового метода
    console.log(prop);
});

// Изменение существующего метода, через (String.prototype.repeat = function(param){}
String.prototype.repeat = function(param){      // код создания изменения 
    return new Array(param+1).join(this);
}
console.log("aaaa".repeat(3));                  // обращение строки и использование измененного метода


// Создание своего класса через функцию-конструктор и своих методов к ней
function Constr (name) {
    this.speed = 0;
    this.name = name;
    this.run = function(speed){
        this.speed += speed;
        console.log(this.name + ' бежит со скоростью ' + this.speed);
    };
    this.time = function(time){
        this.time = 0;
        this.time += time;
        console.log(this.name + ' бежит ' + this.time + ' часов');
    };
    this.stop = function(){
        this.speed = 0;
        console.log(this.name + ' стоит');
    };
}
var cat = new Constr ('simba');
console.log(cat['speed']);
cat.run(3);
cat.time(3);
cat.stop(0);


// Создание своего класса через prototype (прототипное програмирование)
// 1. Объявить функцию-конструктор.
function Constructor (name){
    this.name = name;
    this.speed = 0;
}
// 2. Записать методы и свойства, нужные всем объектам класса, в prototype.
Constructor.prototype.run = function(speed) {
    this.speed += speed;
    console.log(this.name + ' бежит со скоростью ' + this.speed);
};
Constructor.prototype.stop = function(){
    this.stop = 0;
    console.log(this.name + ' стоит' + this.stop);
};
Constructor.prototype.time = function(time){
    this.time = 0;
    this.time += time;
    console.log(this.name + ' бежит ' + this.time + ' часа' );
};
var simba = new Constructor('Simba');
simba.run(10);
simba.time(2);


// setObject и getObject через функицональное програмирование
// getObject - получить информацию из объекта (или другого типа данных);
// setObject - задать информацию в объект (или другой тип данных);
function Human (name, bd, city){
    var email = 'what?';

    this.name = name;
    this.bd = bd;
    this.city = city;
    this.some = 'hello ' + name + ' what happend in ' + city + '?';
    this.getEmail = function() {            //задаём
        return email;                       
    };
    this.setEmail = function(mail) {        //получаем
        return email = mail; 
    }
}
var artem = new Human('Artem', '31 july 1987 year', 'Kyiv');
artem.setEmail('umc') ;             // задаём 
artem.getEmail() ;                  // получаем
console.log(artem.getEmail());

    // Наследование классов
// Наследование одним классом методами другого класса
// Что бы child одного класса обращался к методам родителя другого класса, нужно прировнять ParrentTwo.prototype = new Parrent.One();
function ParrentOne (){};
ParrentOne.prototype.run = function(){};

function ParrentTwo(){};
ParrentTwo.prototype = new ParrentOne(
    // ParrentTwo.apply(this, arguments); - при создании ссылается на аргументы функции-конструктора ParrentOne
);
ParrentTwo.prototype.sleep = function(){};
var childParrentTwo = new ParrentTwo();
childParrentTwo;
childParrentTwo.sleep();
childParrentTwo.run();

// Для создания прототипного наследования классов, стоит прировнять ParrentTwo.prototype = Object.create(ParrentOne.prototype){}; 
ParrentTwo.prototype = Object.create(ParrentOne.prototype);

// Кросс-браузерный Object.create
if (!Object.create) Object.create = inherit;
function inherit(proto) {
    function F() {}     // (1)
    F.prototype = proto // (2)
    var object = new F; // (3)
    return object;      // (4)
};

// Таким образом задаётся метод к ParrentOne
ParrentOne.prototype.run = function(){};
// После наследования мы можем использовать методы ParrentOne к ParrentTwo
ParrentTwo.prototype.run(); 
// Можем переприсваивать методы ParrentOne для ParrentTwo 
ParrentTwo.prototype.run = function(){}; 

// Вызвать метод родителя, передав ему текущие аргументы - добавит к ParrentTwo метод ParrentOne с небольшими изменениями
ParrentTwo.prototype.run = function() { 
ParrentOne.prototype.run.apply(this, arguments); 
this.run(); 
}


                                // DOM BOM JS

// Открыть страницу по адресу
window.open('http://ya.ru');
// Глобальный объект document даёт возможность взаимодействовать с содержимым страницы.
console.log(document.body.style.background = 'red');
// содержит информацию о браузере 
console.log(navigator.userAgent); 
// содержит информацию о платформе, позволяет различать Windows/Linux/Mac 
console.log(navigator.platform); 
// содержит информацию о текущем URL страницы и позволяет перенаправить посетителя на новый URL
console.log(location);
// даёт доступ ко всему дереву елементов html - покажет как console
console.log(document.documentElement);

    // Consol в браузере через ESC
// Находясь во вкладке Consol, нажав ESC. $n-ый елемент в DOM - счёт идёт с конца 0 - последний - можно изменять его, например стиль.
$2.style 
// ищет все элементы в DOM по данному CSS-селектору.
$$("div.my")
// ищет первый элемент в DOM по данному CSS-селектору.
$("div.my") 

    // Навигация по DOM-элементам (чтение)
// <HTML> =     
document.documentElement
// <BODY> =     
document.body
// <head> =     
document.head
// Перебор всех елементов documentв body
for(var i=0; i<document.body.childNodes.length; i++){
    console.log(document.body.childNodes[i]);
};
// Первый потомок елемента
elem.firstChild
// Последний потомок елемента
elem.lastChild

    // Что бы пользоваться методами массива: 
// 1. Применить метод массива через call/apply
var elems = document.documentElement.childNodes;
[].forEach.call(elems, function(elem) {
    console.log( elem ); // HEAD, текст, BODY
});

// 2. При помощи Array.prototype.slice сделать из коллекции массив.
var elems = document.documentElement.childNodes;
elems = Array.prototype.slice.call(elems);
elems.forEach(function(elem){
    console.log(elem.tagName);
});

    // Доступ к соседям и родителю данного елемента
console.log(document.body.previousSibling); // Доступ к элементам слева данного 
console.log(document.head.nextSibling); // Доступ к элементам справа данного 
console.log(document.body.parentNode);  // Доступ к элементам родителя данного 

    // Навигация только по элементам
// только дочерние узлы-элементы, то есть соответствующие тегам:
children     
// соответственно, первый и последний дети-элементы:
firstElementChild, lastElementChild      
// соседи-элементы:
previousElementSibling, nextElementSibling   
// родитель-элемент:
parentElement    
// перебор всех детей елемента
for (var i=0; i<document.body.children.length; i++){
    console.log(document.body.children[i]);
};

    // Особые ссылки для таблиц
// TABLE
// коллекция строк TR таблицы.
table.rows
// ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
table.caption/tHead/tFoot
// коллекция элементов таблицы TBODY, по спецификации их может быть несколько.
table.tBodies
// THEAD/TFOOT/TBODY
// коллекция строк TR секции.
tbody.rows

// TR
// коллекция ячеек TD/TH
tr.cells
// номер строки в текущей секции THEAD/TBODY
tr.sectionRowIndex
// номер строки в таблице
tr.rowIndex
    // TD/TH
// номер ячейки в строке
td.cellIndex 

// Выведет дитё body и содержимое номера столбца и строки
var table = document.body.children[2];
console.log(table.rows[0].cells[0].innerHTML) ;

// Проверка елементов на существования детей
if (!elem.childNodes.length) { }
if (!elem.firstChild) { }
if (!elem.lastChild) { }
    
// .getElementById("idName")
// Поиск елементов по id 
console.log(idName); // - к вложенным
console.log(window['content-holder']);  // - из глобального потока 
// Общепринятой практикой является доступ к элементу вызовом -  document.getElementById("идентификатор").
console.log(document.getElementById("idName"));

// .getElementsByTagName('div');
// Поиск елементов по тэгу
document.getElementsByTagName('div');
 
// Перебор в input в table c опред ID и показать его свойства value и checked
var tableID = document.getElementById('age-table');
var input = tableID.getElementsByTagName('input');
for(var i=0; i<input.length; i++){
    console.log(input[i].value +' - '+ input[i].checked);
};
// Bсе елементы в tableID
var inputEl = tableID.getElementsByTagName('*'); 

// .getElementsByName('age')
// Позволяет получить все элементы с данным атрибутом name.
document.getElementsByName('age');

// .getElementsByClassName(className)
// Вызов elem.getElementsByClassName(className) возвращает коллекцию элементов с классом className. 
document.getElementsByClassName('content');

// .querySelectorAll
// Вызов elem.querySelectorAll(css) возвращает все элементы внутри elem, удовлетворяющие CSS-селектору css в том числе и псевдоклассы
console.log(document.querySelectorAll('ul > li:last-child'));
for(var i=0;i<document.querySelectorAll('ul > li:last-child').length;i++){
    console.log(document.querySelectorAll('ul > li:last-child')[i].innerHTML);
};

// querySelector
// Вызов elem.querySelector(css) возвращает не все, а только первый элемент, соответствующий CSS-селектору css.
console.log(document.querySelector('ul > li:last-child')[0])

// matches
// Метод elem.matches(css) ничего не ищет, а проверяет, удовлетворяет ли elem селектору css. Он возвращает true либо false.
// Этот метод бывает полезным, когда мы перебираем элементы (в массиве или по обычным навигационным ссылкам) 
// и пытаемся отфильтровать те из них, которые нам интересны.
for(var i=0; i<document.body.children.length;i++){ 
    if(document.body.children[i].matches('div')){
        console.log(document.body.children[i].innerHTML);
    }; 
};

// closest
// Метод elem.closest(css) ищет ближайший элемент выше по иерархии DOM, подходящий под CSS-селектор css. Сам элемент включчительно.
// Иначе говоря, метод closest бежит от текущего элемента вверх по цепочке родителей и проверяет, 
// подходит ли элемент под указанный CSS-селектор. Если подходит – останавливается и возвращает его.
console.log(document.querySelector('.inputer_td').closest('td').className);
console.log(document.querySelector('.inputer_td').closest('td').tagName);

// .trim()
// Убирает лишние пробелы - перед и после значений 
for (i = 0; i < lis.length; i++) {
    console.log(document.getElementsByTagName('li').innerHTML.trim());
};

// Метод	                    Ищет по...	    Ищет внутри элемента?
// getElementById	            id	                -
// getElementsByName	        name	            -	
// getElementsByTagName	        тег или '*'	        ✔	
// getElementsByClassName	    классу	            ✔	
// querySelector	            CSS-селектор	    ✔	
// querySelectorAll	            CSS-селектор	    ✔	

// instanceof Проверка на принадлежность к классу
console.log( document.body instanceof HTMLBodyElement ); // true
// выводит элемент в виде, удобном для исследования HTML-структуры.
console.log();
// выводит элемент в виде JavaScript-объекта, удобно для анализа его свойств.
console.dir();

// Всевозможные значения nodeType
// interface Node {
//     const unsigned short ELEMENT_NODE = 1;
//     const unsigned short ATTRIBUTE_NODE = 2;
//     const unsigned short TEXT_NODE = 3;
//     const unsigned short CDATA_SECTION_NODE = 4;
//     const unsigned short ENTITY_REFERENCE_NODE = 5;
//     const unsigned short ENTITY_NODE = 6;
//     const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
//     const unsigned short COMMENT_NODE = 8;
//     const unsigned short DOCUMENT_NODE = 9;
//     const unsigned short DOCUMENT_TYPE_NODE = 10;
//     const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
//     const unsigned short NOTATION_NODE = 12;
// };

// nodeName содержит название(тег) 
console.dir(document.body.nodeName);
// tagName содержит элемента узла
console.dir(document.body.tagName);

// innerHTML: содержимое элемента
// позволяет получить HTML-содержимое элемента в виде строки. В innerHTML можно и читать и писать.
console.dir(document.body.innerHTML);
console.dir(document.body.querySelector('div').innerHTML = '<p> yohoho </p>');

// outerHTML: HTML элемента целиком
// Свойство outerHTML содержит HTML элемента целиком. Изменить outerHTML элемента невозможно.
console.log(document.body.children[1].outerHTML);

// data: содержимое текстового узла
// Содержимое других узлов, например, текстовых или комментариев, доступно на чтение и запись через свойство data.
console.log(document.body.childNodes[0].data);
for(var i=0; i<document.body.childNodes.length;i++){
    console.log(document.body.childNodes[i].data);
};

// Текст: textContent
// Свойство textContent содержит только текст внутри элемента, за вычетом всех <тегов>. Есть возможность записи именно текста в элемент
for(var i=0; i<document.body.childNodes.length;i++){
    console.log(i + ' = ' + document.body.childNodes[i].textContent);
};
console.log(document.body.childNodes[7].textContent = prompt('vvedite vashe imja', 'Artem'));

// innerText
// innerText возвращает текст не в том виде, в котором он в DOM, а в том, в котором он виден –  как если бы выбрали содержимое элемента
// мышкой и скопировали его. В частности, если элемент невидим, то его текст возвращён не будет
// при записи значения innerText работает так же, как и textContent.
console.log(document.body.childNodes[6].innerText = 'innerText change');

// Свойство hidden
// Должен приравниваться к 'true' or 'false'. Скрывает наши елементы как буд-то display: none им присвоили;
console.log(document.body.childNodes[8].hidden = 'true');

// c Лекции
// - когда загрузится окно, запускается функция (все теги, все скрипты, все стили, но не все картинки);
window.onload = function(){
    console.log(document.getElementById('block'));
};
// Можно изменять свойства элементов, обращаясь к ним как к объектам object.property
document.getElementById('block').align = 'FOO';         // добавит свойству object.align = 'FOO' у елемента с id = 'block'
// Задать изменения через определённое время
setTimeout(function(){document.getElementById('block').align = 'left';}, 2000);  // изменит определённые свойства через опред время
// Можно вкладывать временную функцию одну в другую
window.onload = function(){
    console.dir(document.getElementById('block'));
    document.getElementById('block').align = 'FOO';         // добавит свойству align = 'FOO'
    setTimeout(function(){
        document.getElementById('block').align = 'left';
        document.getElementById('block').style.backgroundColor = 'darkred';
        setTimeout(function(){
            document.getElementById('block').style.backgroundColor = 'darkblue';
            document.getElementById('block').style.color = 'white';
        }, 1000)
    }, 2000);  // изменит определённые свойства через опред время
};
// можно узнать размер елемента - обращаясь к свойству object.clientWidth
window.onload = function(){
    console.dir(document.getElementById('block').clientWidth);
};
// можно вывести всё сожержимое в елементе - обращаясь к свойству object.innerHTML;
window.onload = function(){
    console.dir(document.getElementById('block').innerHTML);
};
// можно вывести исключительно текст сожержащийся в елементе - обращаясь к свойству object.innerTEXT;
window.onload = function(){
    console.dir(document.getElementById('block').innerText);
};
// innerHTML можно изменять, добавляя текст или теги через object.innerHTML += some tags
document.getElementById('block').innerHTML += '<hr /> Underline'
// innerText выведет непосредственно сам текс
console.dir(document.getElementById('block').innerText += ' <hr /> <br />  Underline');
// Вывести элементы по классу - выводит в коллекцию элементов
document.getElementsByClassName('className');
// Коллекция - это подобные элементы. Что бы обратиться к её элементам, нужно перебрать их через цикл
var className = document.getElementsByClassName('className');
console.log(className);
for(var i=0; i<className.length;i++){
    className[i].innerHTML = 'selected';
};
        // // Jquery
// Метод querySelector() - работает по логике обращения CSS селекторов - выбирает первый элемент подходящий по условиям (классу, тэгу)
// Селектор - шаблон по которому можно выбрать элемент (работа CSS)
console.log(document.querySelector('div.className'));
// Вывести елемент по id 
console.log(document.querySelector('#idName'));
// Вывести елемент по имени класса
console.log(document.querySelector('.className'));
// Вывести елемент который является дочерним у другого элемента
console.log(document.querySelector('div > ul'));
// Метод querySelectorAll() - позволяет выбрать все элементы по селекторам, удовлетворяющие условиям поиска (образует массив)
console.log(document.querySelectorAll('div.className')); 
// перебор елементов из querySelectorAll через foreaсh
blocks.forEach(item => item.innerHTML += ' selector');
    block.className += ' block1';

    // Свойства элементов
// element.className = '' - можно узнаить или менять имя класса или добавлять класс к существующему, определённом элементу.
document.querySelector('#idName').className += ' className';
// element.classList.add - добавит ещё один класс элементу
document.querySelector('#idName').classList.add('className');
document.querySelector('#idName').classList.add('act', 'act1', 'act2'); // - можно задавать сразу несколько классов
// element.classList.remove - удаляет определённый класс
document.querySelector('#idName').classList.remove('action');
document.querySelector('#idName').classList.remove('act1', 'act2', 'act3'); // - можно удалять сразу несколько классов
// element.classList.toogle('className') -проверяет наличие класса и в зависимости от результата, перекл.- удаляет или добавляет класс 
document.querySelector('#idName').classList.toogle('className');
// element.classList.value ='' - удаляет все классы 
document.querySelector('#idName').classList.value = "";

        // // Функции-таймеры
// setTimeout запустить один раз через определённое время
var func = function(){console.log('hello')}
var timerId = setTimeout(func, 1000);
// clearTimeout - отмена исполнения функций c таймером, может отменить не только таймер но и исполнение всей функции
var timerId = setTimeout(func, 1000);
clearTimeout(timerId); 
// setInterval - регулярно повторяет функцию через указанный интервал времени
var timerId = setInterval(func, 1000);
// Рекурсивный setTimeout
var timerId = setTimeout(function tick(){
    document.write('<p> тик </p>');
    setTimeout(tick, 2000);
}, 2000);

// Можно запускать определённые повторяющиеся действия, на определённое время (останавливать их через определённое время)
// запускаем каждые 2 сек тик
var timerId = setInterval(function() {
    alert( "тик" );
}, 2000);
// через 5 сек остановить повторы
setTimeout(function() {
    clearInterval(timerId);
    alert( 'стоп' );
}, 5000);

// Рандомный цвет блоков с определённым классом
var random = document.querySelectorAll('.random');
var getRandColor = function(){
    for(var i=0; i<random.length; i++){
        var randColor1 = 0 + Math.floor(Math.random() * (255 + 1 - 0));
        var randColor2 = 0 + Math.floor(Math.random() * (255 + 1 - 0));
        var randColor3 = 0 + Math.floor(Math.random() * (255 + 1 - 0));
        random[i].style.backgroundColor = 'rgb(' + randColor1 + ',' + randColor2 + ',' + randColor3 + ')';
    };
};
// Рандомное перемещение блоков внутри окна c изменением цвета (функция выше)
var randPosition = function(){
    for(var i=0; i<random.length; i++){
        getRandColor();
        console.log(random[i].style.left = Math.floor(Math.random() * Math.floor(640)) + 'px');
        console.log(random[i].style.top = Math.floor(Math.random() * Math.floor(640)) + 'px');
    };
};
var timerPosition = setInterval(randPosition, 2000);

// Функция-задержка (функция которая задерживает вызов других функций на N миллисекунд)
function  delay (f, ms){
    return function (){
        var savedThis = this;
        var savedArgs = arguments;
        setTimeout(function(){
            f.apply(savedThis, savedArgs);
        }, ms);
    };
};
function f(x) {
    console.log(x);
};
var f1000 = delay(f, 1000);
f1000("тест"); // выведет "тест" через 1000 миллисекунд

// Вызов не чаще чем в N миллисекунд
function debounce(f, ms) {
    let timer = null;
    return function (...args) {
        const onComplete = () => {
            f.apply(this, args);
            timer = null;
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(onComplete, ms);
    };
};  
function f(x) { alert(x) }
let f = debounce(f, 1000);
f(1); // вызов отложен на 1000 мс
f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс
// через 1 секунду появится alert(2)
setTimeout( function() { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { f(4) }, 1200); // игнорируем вызов (3)
// через 2200 мс от начала выполнения появится alert(4)

// Тормозилка
function throttle(func, ms) {
    var isThrottled = false,
    savedArgs,
    savedThis;
    function wrapper() {
        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        };
        func.apply(this, arguments); // (1)
        isThrottled = true;
        setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            };
        }, ms);
    };
    return wrapper;
};

// Прямое обращение к свойствам другого метода через call - // func.call(context, arg1, arg2, ...) - синтаксис
function showFullName(){
    console.log(this.firstName + ' ' + this.lastName);
}
var user = {
    firstName: 'Artem',
    lastName: 'Retun'
};
showFullName.call(user);

// Обращение к изменяемым свойствам другого объекта через call и - // func.call(context, arg1, arg2, ...) - синтаксис
function showFullName(first, last){
    first = this[first];
    last = this[last];
    console.log(first + ' ' + last);
};
var user = {
    firstName: 'Artem',
    lastName: 'Retun',
    nickName: 'Charli'
};
showFullName.call(user, 'firstName', 'nickName');

// «Одалживание метода»
function printArgs(){
    arguments.join = [].join;                   // мы можем скопировать любое свойство любого объекта
    console.log(arguments.join(':'));           // запускаем метод с новым объектом
};
printArgs(1,2,3);

// Метод: [].slice.call(arguments)
// arr.slice(start, end) создаёт новый массив и копирует в него элементы массива arr от start до end.
// А если start и end не указаны, то копирует весь массив.
function printArgs() {
    // вызов arr.slice() скопирует все элементы из this в новый массив
    var args = [].slice.call(arguments);
    alert( args.join(', ') ); // args - полноценный массив из аргументов
};
printArgs('Привет', 'мой', 'мир'); // Привет, мой, мир


// Math.max(a, b, c...) - возвращает максимальное число из перечисляемых
// Math.min(a, b, c...) - возвращает минимальное число из перечисляемых
Math.max(a, b, c);

// Суммирование аргументов через reduce
function sumArgs() {
    arguments.reduce = [].reduce;
    return arguments.reduce(function(a, b){
        return a + b;
    });
};
console.log(sumArgs(1, 2, 3, 5, 7, 2));   

// Суммирование аргументов через reduce call arguments
function sum() {
    return [].reduce.call(arguments, function(a, b){
        return a + b;
    });
};
console.log(sum(1, 2, 3, 5, 7, 2));

// Задавание любой функии и любых аргументов, через apply
function aplyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
};
console.log(aplyAll(Math.min, 5, 7, 2, -2));

// Включает собыитие: onchange - то выведет/передаст, то что мы вводим, используем
// <input type="select" onchange="console.log(this.value)">
// <input type="button" value="button">

// Передаёт/выводит моментально инфу в зависимости от типа елемента что мы используем
// <input type="button" value="button">
// <input type="text" oninput="console.log(this.value)">
// <input type="radio" oninput="console.log(this.value)" >

// Получение координат элемента относительно страницы
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
};

        // Получение координат
    // Получение данных об объекте в виде массива (размеры, растояния) 
elem.getBoundingClientRect();

    // function getCoords(elem) - получение координат элемента относительно страницы
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
};
console.log(getCoords(elem));


    // Координаты
// относительно окна
 elem.getBoundingClientRect()
// относительно документа
 elem.getBoundingClientRect() + // прокрутка страницы
// получить элемент по координатам
document.elementFromPoint(clientX, clientY)

    // Метод contains для проверки на вложенность
// Возвращает true, если parent содержит child или parent == child.
var result = parent.contains(child);

    // Метод compareDocumentPosition для порядка узлов
// предоставляет одновременно информацию и о содержании и об относительном порядке элементов.
compareDocumentPosition 

    // Добавляет elem в конец дочерних элементов parentElem.
parentElem.appendChild(elem)

    // Вставляет elem в коллекцию детей parentElem, перед элементом nextSibling.
parentElem.insertBefore(elem, nextSibling)

    // Добавление множества узлов
ul.innerHTML += "<li>1</li><li>2</li>...";

    // вставить UL в документ, а потом добавить к нему LI:
var ul = document.createElement('ul');
document.body.appendChild(ul); // сначала в документ
for (var i=0; i<li.length;i++) ul.appendChild(li); // потом узлы

    // Полностью создать список «вне DOM», а потом – вставить в документ:
var ul = document.createElement('ul');
for(var i=0; i<li.length;i++) ul.appendChild(li);   // сначала вставить узлы
document.body.appendChild(ul); // затем в документ

    // Метод insertAdjacentHTML позволяет вставлять произвольный HTML в любое место документа, в том числе и между узлами!
elem.insertAdjacentHTML(where, html);
// html - Строка HTML, которую нужно вставить
// where - Куда по отношению к elem вставлять строку. Всего четыре варианта:
// beforeBegin – перед elem.
// afterBegin – внутрь elem, в самое начало.
// beforeEnd – внутрь elem, в конец.
// afterEnd – после elem.

    // DocumentFragment
// Вставляет пачку узлов -  особенный кросс-браузерный DOM-объект, который похож на обычный DOM-узел, но им не является.
var fragment = document.createDocumentFragment();
fragment.appendChild(node);     // В него можно добавлять другие узлы.
fragment.cloneNode(true);       // клонирование с подэлементами

    // Стили элемента: свойство style
// возвращает объект, который дает доступ к стилю элемента на чтение и запись.
element.style // 
// Чтобы сбросить поставленный стиль, присваивают в style пустую строку: 
elem.style.width=""

    // style.cssText
// Свойство style.cssText позволяет поставить стиль целиком в виде строки.
var div = document.body.children[0];
div.style.cssText="color: red !important; \
    background-color: yellow; \
    width: 100px; \
    text-align: center; \
    blabla: 5; \
";

    // window.getComputedStyle
// Для того, чтобы получить текущее используемое значение свойства, используется метод 
// getComputedStyle(element[, pseudo])

        // // События в деталях

    // Кнопка ниже сработает только на Alt+Shift+Клик:
document.body.children[0].onclick = function(e) {
    if (!e.altKey || !e.shiftKey) return;
    alert( 'Ура!' );
};

    // Правый клик: oncontextmenu
// Это событие срабатывает при клике правой кнопкой мыши (меню будет стандартным от клика мышки):
document.getElementsByTagName('button').oncontextmenu="alert('Клик!');"
// Если мы не хотим, чтобы показывалось встроенное меню, например потому что показываем своё
document.getElementsByTagName('button').oncontextmenu="alert('Клик!');return false"

    // Координаты в окне: clientX/clientY содержат координаты курсора считаются относительно окна, а не документа.
document.getElementsByTagName('input').onmousemove="this.value = event.clientX+':'+event.clientY"

    // Относительно документа: pageX/Y - координаты относительно левого-верхнего узла документа, а не окна, они учитывают прокрутку
document.getElementsByTagName('input').onmousemove="this.value = event.pageX+':'+event.pageY"

    // Выделяет через ctrl, shift елементы ul другим цветом
// html
// .selected {background: #0f0;};
// li {cursor: pointer;};    

// js
var ul = document.querySelector('ul');
console.dir(ul);
var lastClickedLi = null;
ul.onclick = function(event) {
    var target = event.target;
    // // возможно, клик был внутри списка UL, но вне элементов LI
    if (target.tagName != "LI") return;
    // // для Mac проверяем Cmd, т.к. Ctrl + click там контекстное меню
    if (event.metaKey || event.ctrlKey) {
        toggleSelect(target);
    } else if (event.shiftKey) {
        selectFromLast(target);
    } else {
        selectSingle(target);
    };
    lastClickedLi = target;
};
ul.onmousedown = function() {
    return false;
};
function toggleSelect(li){
    li.classList.toggle('selected');
};
function selectFromLast(target) {
    var startElem = lastClickedLi || ul.children[0];
    var isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;
    if (isLastClickedBefore) {
        for (var elem = startElem; elem != target; elem = elem.nextElementSibling) {
            elem.classList.add('selected');
        };
    } else {
        for (var elem = startElem; elem != target; elem = elem.previousElementSibling) {
            elem.classList.add('selected');
        };
    };
    elem.classList.add('selected');
};
function deselectAll() {
  for (var i = 0; i < ul.children.length; i++) {
      ul.children[i].classList.remove('selected');
    };
};
function selectSingle(li) {
    deselectAll();
    li.classList.add('selected');
};

// Событие onclick - при нажатии передаёт значение переменной
var block = document.querySelector('.block');

var fooBar = null;
function click(elem){
    elem.onclick = console.log(fooBar);
};
block.onclick = click;
// обращается на тегу block
block.onclick = function(){
    console.log(this);
};
// К елементу после действия click (ф-ия передана как параметр) - применяется определённый код (передан ф-ией во 2ом параметре) 
elem.addEventListener('click', function(event){
    console.log(event);
});
// .addEventListener разрешает использовать повторно- заключая более одного действия при одном событии, не перезаписывая предыдущий
var block2 = document.querySelector('.block2');
block.addEventListener('click', function(event){
    console.log(event);
});
block.addEventListener('click', function(event){
    console.log('second', event);
});
block2.addEventListener('click', function(event){
    console.log('third', this === event.target);
});

// Мышь: Drag'n'Drop - захватить мышью элемент и перенести его с position: fixed
var block = document.querySelector('.block');
block.style.position = 'fixed';

block.addEventListener('mousedown', function(event){
    var x0 = event.target.offsetLeft;
    var y0 = event.target.offsetTop;
    var mx = event.clientX;
    var my = event.clientY;
    document.addEventListener('mouseup', function(){
        document.removeEventListener('mousemove', MoveElem);
    });
    document.addEventListener('mousemove', MoveElem);
    function MoveElem(ev){
        var mx2 = ev.clientX;
        var my2 = ev.clientY;
        var diffx = mx2 - mx;
        var diffy = my2 - my;
        event.target.style.left = x0 + diffx + 'px';
        event.target.style.top = y0 + diffy + 'px';
    };
});

// Мышь: Drag'n'Drop - захватить мышью элемент и перенести его
var ball = document.getElementById('ball');
ball.onmousedown = function(e) {
    var coords = getCoords(ball);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    ball.style.position = 'absolute';
    document.body.appendChild(ball);
    moveAt(e);
    ball.style.zIndex = 1000; // над другими элементами
    function moveAt(e) {
        ball.style.left = e.pageX - shiftX + 'px';
        ball.style.top = e.pageY - shiftY + 'px';
    }
    document.onmousemove = function(e) {
        moveAt(e);
    };
    ball.onmouseup = function() {
        document.onmousemove = null;
        ball.onmouseup = null;
    };
};
ball.ondragstart = function() {
    return false;
};
function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
};

// Функция покажет координаты елемента
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
};
// Покажет ивент который мы выбрали первым аргументом
var block3 = document.querySelector('.block3');
block3.addEventListener('mouseover', function(event){
    console.log(event.type, event);
});
block3.addEventListener('click', function(event){
    console.log(event.type, event);
});

    // События мыши
var block3 = document.querySelector('.block3');
// dblclick - показывает состояние елемента после одинарного нажатия на него - это составное событие из mousedown и mouseup
block3.addEventListener('click', function(event){
    console.log(event.type, event);
});
// dblclick - показывает состояние елемента после двойного нажатия на него
block3.addEventListener('dblclick', function(event){
    console.log(event.type, event);
});
// mouseover и mouseout - определяют даже при зажатой клавиши мыши
// mouseover - показывает состояние елемента когда мышка наведена на него
block3.addEventListener('mouseover', function(event){
    console.log(event.type, event);
});
// mouseout - показывает состояние елемента после увода курсора мышки с него
block3.addEventListener('mouseout', function(event){
    console.log(event.type, event);
});
// mousemove - показывает состояние елемента во время всего движения курсора мышки по нему
block3.addEventListener('mousemove', function(event){
    console.log(event.type, event);
});
// mousedown - показывает состояние елемента во время нажатия ЛК мышки по нему
block3.addEventListener('mousedown', function(event){
    console.log(event.type, event);
    block3.style.background = 'red';
});
// mouseup - показывает состояние елемента во время отжатия ЛК мышки по нему
block3.addEventListener('mouseup', function(event){
    console.log(event.type, event);
    block3.style.background = 'green';
});

// Связать слайдер (input type=”range”) и поле ввода (input type=”number”)
var slider = document.querySelector('.slider');
var numb = document.querySelector('.number');
slider.addEventListener('click', function(){
    console.dir(numb.value = slider.value);
});
numb.addEventListener('click', function(){
    console.dir(slider.value = numb.value);
});

// Показать всю высоту елемента - если есть прокрутка по высоте и обрезание текста - уберет её
element.style.height = element.scrollHeight + 'px';
// Ширина и высота страницы 
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.clientWidth);
// Ширина и высота окна браузера
window.innerWidth
window.innerHeight
// При нажатии на елемент переведёт страницу: 
var button = document.querySelector('.but')
button.addEventListener('click', function(){
    // в самый низ относительно елемента
    button.scrollIntoView(false);
    // в самый верх относительно елемента
    button.scrollIntoView();
    // относительно её начала по оси координат внутри метода
    window.scrollTo(0,0);
    // относительно елемента где вызван по оси координат внутри метода
    window.scrollBy(0,100);
});
// Самое простое обращение к елментам DOM
var elem = document.querySelector('.elem');
function fooBar(){
    alert();
};
function f2(){
    console.log(this)
};
elem.onclick = f2;
elem.onmouseover = fooBar;


    // Быстрая вставка новых елементов на страницу (на примере ul li)
var ul = document.createElement('ul');
for(var i=0; i<5;i++){
    var li = document.createElement('li');
    ul.appendChild(li);   // сначала вставить узлы
};
document.body.appendChild(ul); // затем в документ

    // Быстрое создание двумерного поля
var table = document.createElement('table');
document.body.appendChild(table); // затем в документ
for(var i=0; i<5;i++){
    var tr = document.createElement('tr');
    table.appendChild(tr);   // сначала вставить узлы
    for(var j=0;j<5;j++){
        var td = document.createElement('td');
        tr.appendChild(td);   // сначала вставить узлы
    };
};

    // Задавание стилей для нескольких елементов таблицы
var tds = document.querySelectorAll('td');
for(var i=0; i<tds.length;i++){
    tds[i].style.border = 1 + 'px' + ' ' + 'solid' + ' ' + 'red';
};

    // Добавление множества узлов insertAdjacent*, а конкретно insertAdjacentHTML
// elem.insertAdjacentHTML(where, html) - позволяет вставлять произвольный HTML в любое место документа, в том числе и между узлами
document.body.children[0].children[2].insertAdjacentHTML("afterend", '<li>li3</li><li>li4</li>')
// elem.insertAdjacentElement(where, element)
// elem.insertAdjacentText(where, text)


    // append/prepend, before/after, replaceWith
// nodes – DOM-узлы или строки, в любом сочетании и количестве
// node.append(...nodes)        – вставляет nodes в конец node,
// node.prepend(...nodes)       – вставляет nodes в начало node,
// node.after(...nodes)         – вставляет nodes после узла node,
// node.before(...nodes)        – вставляет nodes перед узлом node,
// node.replaceWith(...nodes)   – вставляет nodes вместо node.
var p = document.createElement('p');
document.body.append('p');
document.body.prepend('p');
document.body.after('p');
document.body.before('p');
document.body.children[1].replaceWith('p');

    // Свои DOM-свойства
// document.body.newProp = {key: value, key2: value};
document.body.newProp = {
    key: 'value',
    key2: 'value2'
};
    // Свои DOM-методы
document.body.consName = function(){
    console.log(this.nodeName);
};
document.body.consName();

    // Атрибуты
// Элементам DOM, с другой стороны, соответствуют HTML-теги, у которых есть текстовые атрибуты.
// Доступ к атрибутам осуществляется при помощи стандартных методов:
// elem.hasAttribute(name)          – проверяет наличие атрибута
// elem.getAttribute(name)          – получает значение атрибута
// elem.setAttribute(name, value)   – устанавливает атрибут
// elem.removeAttribute(name)       – удаляет атрибут
console.log(document.body.children[0].setAttribute('id', 'p'));
console.log(document.body.children[0].getAttribute('id'));
console.log(document.body.children[0].hasAttribute('id'));
console.log(document.body.children[0].removeAttribute('id'));

    // elem.attributes
// Также все атрибуты элемента можно получить с помощью свойства elem.attributes, которое содержит псевдо-массив объектов
console.log(document.body.children[0].attributes);
// Можно получить коллекцию атрибутов
var attrs = elem.attributes; // (4) можно получить коллекцию атрибутов
for (var i = 0; i < attrs.length; i++) {
    alert( attrs[i].name + " = " + attrs[i].value );
};

// Вывести значение атрибута
document.body.children[1].href = '/';
console.log(document.body.children[1].getAttribute('href'));        // - выведет значение из href
console.log(document.body.children[1].href);                        // - выведет значение в html

// DOM-свойство которое имеет логическое значение true/false - можно убирать или задавать с помощью remove/set или = true/false
// Aтрибут elem.getAttribute('value') хранит исходное значение даже после того, как пользователь заполнил поле и свойство изменилось.
document.querySelector('a').value = 'b';
console.log(document.querySelector('a').getAttribute('value'));
console.log(document.querySelector('a').getAttribute('value') == 'b');
console.log(document.querySelector('a').getAttribute('value') == 'a');
console.log(document.querySelector('a').setAttribute('value', 'b'));
console.log(document.querySelector('a').getAttribute('value'));

    // // Классы в виде строки: className
// Атрибуту "class" соответствует свойство className.
console.log(document.querySelector('p').className = 'p p2');

// атрибуту for (<label for="...">) соответствует свойство с названием htmlFor.

    // Методы classList:
// elem.classList.contains("class")     – возвращает true/false, в зависимости от того, есть ли у элемента класс class.
// elem.classList.add/remove("class")   – добавляет/удаляет класс class
// elem.classList.toggle("class")       – если класса class нет, добавляет его, если есть – удаляет.
console.log(document.querySelector('p').classList.add('p3'));
console.log(document.querySelector('p').classList);

// Mожно перебрать классы через for, так как classList – это псевдо-массив.
for(var i=0; i<document.querySelector('p').classList.length; i++){
    console.log(document.querySelector('p').classList[i]);
};

    // Нестандартные атрибуты
// Значение атрибута – произвольная строка, значение класса – это «есть» или «нет», поэтому атрибуты «мощнее» и удобнее классов.

// Обращение к атрибуту в CSS:
// <style>      .order[order-state="new"]       {color: green;}    </style>
// А после можно уже и через JS с ним обращаться
// div.setAttribute('order-state', 'canceled');

// Сделать фильтр по елементам по их CSS свойствам и добавить определённый класс  
// ищем все ссылки, у которых в href есть протокол,
// но адрес начинается не с http://internal.com
var css = 'a[href*="://"]:not([href^="http://internal.com"])';
var links = document.querySelectorAll(css);

for (var i = 0; i < links.length; i++) {
  links[i].classList.add('external');
};

    // // Свойство dataset, data-атрибуты
// С помощью нестандартных атрибутов можно привязать к элементу данные, которые будут доступны в JavaScript.
// Как правило, это делается при помощи атрибутов с названиями, начинающимися на data-, например:
console.log(document.querySelector('p').setAttribute('data-p', 'p1'));
console.log(document.querySelector('p').setAttribute('data-about', 'p-element'));
console.log(document.querySelector('p').getAttribute('data-p'));

// K таким атрибутам можно обратиться не только как к атрибутам, но и как к свойствам, при помощи специального свойства dataset
console.log(document.querySelector('p').dataset.p);
console.log(document.querySelector('p').dataset.about);


        // // Навигация по DOM-элементам
// Только для чтения 

    // // Сверху documentElement и body
// Самые верхние элементы дерева доступны напрямую из document.
// <HTML> = document.documentElement
console.log(document.documentElement);
// <BODY> = document.body
console.log(document.body);
// <HEAD> = document.head
console.log(document.head);

    // Дочерние элементы
// childNodes - Псевдо-массив который хранит все дочерние элементы, включая текстовые.
console.log(document.childNodes);
// Перебор всех детей можно сделать через for
for(var i=0; i<document.body.childNodes.length;i++){
    console.log(document.body.childNodes[i]);
};

    // Потомки
// Нельзя перебирать коллекцию через for..in
// firstChild и lastChild обеспечивают быстрый доступ к первому и последнему элементу
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.firstChild === document.body.childNodes[0]);

// Применить метод массива через call/apply для его изменения:
var arr = new Array;
var elements = document.body.childNodes;
arr.forEach.call(elements, function(elem){
    console.log(elem);
});

// При помощи Array.prototype.slice сделать из коллекции массив.
var elems = document.body.childNodes;
elems = Array.prototype.slice.call(elems);
elems.forEach(function(elems){
    console.log(elems);
});


    // // Соседи и родитель
// previousSibling / nextSibling - доступ к элементам слева и справа данного
console.log(document.querySelector('p').nextSibling);
console.log(document.querySelector('p').previousSibling);
// parentNode                    - доступ к родителю элемента
console.log(document.querySelector('p').parentNode);


    // // Навигация только по элементам
// Что бы осуществлять навигацию только по элементам (а не по пустым строчкам - узел текст, или узлам коментариям), используем:
// children                                     – только дочерние узлы-элементы, то есть соответствующие тегам.
console.log(document.querySelector('ul').children);
// firstElementChild, lastElementChild          – соответственно, первый и последний дети-элементы.
console.log(document.querySelector('ul').lastElementChild);
console.log(document.querySelector('ul').firstElementChild);
// previousElementSibling, nextElementSibling   – соседи-элементы.
console.log(document.querySelector('div').previousElementSibling);
console.log(document.querySelector('p').nextElementSibling);
// parentElement                                – родитель-элемент.
console.log(document.querySelector('li').parentElement);

// Вывести только детей елементы:
for(var i=0; i<document.body.children.length;i++){
    console.log(document.body.children[i]);
};

    // // Особые ссылки для таблиц
    // TABLE
// коллекция строк TR таблицы.
table.rows
// ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
table.caption/tHead/tFoot
// коллекция элементов таблицы TBODY, по спецификации их может быть несколько.
table.tBodies

    // THEAD/TFOOT/TBODY
// коллекция строк TR секции.
tbody.rows

    // TR
// коллекция ячеек TD/TH
tr.cells
//  номер строки в текущей секции THEAD/TBODY
tr.sectionRowIndex
// номер строки в таблице
tr.rowIndex

    // TD/TH
// номер ячейки в строке
td.cellIndex

// Проверка элемента на наличие детей
if (!elem.childNodes.length) { }

if (!elem.firstChild) { }

if (!elem.lastChild) { }

elem.hasChildNodes()


// Запустит onfocus сразу после выполнения onclick
var button = document.getElementById('button');
var text = document.getElementById('text');
button.addEventListener('click', function(){
    text.value += ' in onclick '
    setTimeout(function(){
        text.focus();
    }, 0);
    text.value += ' after onclick ' 
});
text.addEventListener('focus', function(){
    text.value += ' !focus '
});

 // Свойства объекта события
 var button = document.getElementById('button');

 // event.type - Тип события
button.addEventListener('click', function(){
    console.log(event.type);
});

// event.currentTarget - более правильная аналогия this только для DOM
button.addEventListener('click', function(){
    console.log(event.currentTarget);
});

// event.clientX / event.clientY - Координаты курсора в момент клика (относительно окна)
button.addEventListener('click', function(){
    console.log(event.clientX);
    console.log(event.clientY);
});

        // // Мышь: клики, кнопка, координаты
    // Типы событий мыши
// Простые события
var button = document.querySelector('button');
button.style.width = 35+'px';
button.style.height = 25+'px';
// mousedown -  Кнопка мыши нажата над элементом.
button.addEventListener('mousedown', function(){
    console.log(event.type);
});
// mouseup   -  Кнопка мыши отпущена над элементом.
button.addEventListener('mouseup', function(){
console.log(event.currentTarget);
});
// mouseover -  Мышь появилась над элементом.
button.addEventListener('mouseover', function(){
    console.log(event.clientX);
});
// mouseout  -  Мышь ушла с элемента.
button.addEventListener('mouseout', function(){
console.log(event.clientY);
});
// mousemove -  Каждое движение мыши над элементом генерирует это событие.
button.addEventListener('mousemove', function(){
    console.log('mousemove');
});

// Комплексные события
// click        - Вызывается при клике мышью, то есть при mousedown, а затем mouseup на одном элементе
button.addEventListener('click', function(){
    button.style.background = 'red';
});
// contextmenu  - Вызывается при клике правой кнопкой мыши на элементе.
button.addEventListener('contextmenu', function(){
    button.style.background = 'green';
});
// dblclick     - Вызывается при двойном клике по элементу.
button.addEventListener('dblclick', function(){
    button.style.background = 'blue';
});

    // Правый клик: oncontextmenu
// Вызывает контекстное меню,  можно присвоить своё действие
button.addEventListener('contextmenu', function(){
    console.log('contextmenu');
});
// Можно отменить вызов контекстного меню по умолчанию
button.oncontextmenu = function(){
    return false;
};


    // Модификаторы shift, alt, ctrl и meta
// Во всех событиях мыши присутствует информация о нажатых клавишах-модификаторах.
// shiftKey             - shift
button.addEventListener('click', function(e){
    if(!e.shiftKey) return;
    console.log('shift + click');
});

// altKey               - alt
button.addEventListener('click', function(e){
    if(!e.altKey) return; 
    console.log('altKey + click');
});
// ctrlKey              - ctrl
button.addEventListener('click', function(e){
    if(!e.ctrlKey) return;
    console.log('ctrlKey + click');
});
// metaKey (для Mac)    - CMD (mac)
button.addEventListener('click', function(e){
    if(!e.metaKey) return;
    console.log('metaKey + click');
});


    // Координаты в окне: clientX/Y
// Пара свойств clientX/clientY содержит координаты курсора относительно текущего окна.

// Координаты курсора относительно окна - выведны в значение елемента текст
var text = document.getElementById('text');
text.addEventListener('mousemove', function(e){
    this.value = event.clientX + ':' + event.clientY;
});

// Координаты относительно документа: pageX/Y
// Координаты курсора относительно документа находятся в свойствах pageX/pageY.
// Эти координаты – относительно левого-верхнего узла документа, а не окна, то они учитывают прокрутку. 
var textTwo = document.getElementById('textTwo');
textTwo.addEventListener('mousemove', function(e){
    this.value = event.pageX + ':' + event.pageY;
});


        // // Мышь: движение mouseover/out, mouseenter/leave
    // События mouseover/mouseout, свойство relatedTarget
// Событие mouseover происходит, когда мышь появляется над элементом, а mouseout – когда уходит из него.
textTwo.addEventListener('mouseover', function(e){
    this.style.background = 'red';
});
textTwo.addEventListener('mouseout', function(e){
    this.style.background = 'white';
});
// relatedTarget - покажет, с какого элемента пришла (с помощью mouseover) или ушла (с помощью mouseout) мышь.
textTwo.addEventListener('mouseover', function(e){
    console.log(event.target);                  // елемент на который пришла мышь
    console.log(event.relatedTarget);           // елемент с которого пришла мышь

});
textTwo.addEventListener('mouseout', function(e){
    console.log('target' + event.target);                  // елемент с которого пришла мышь
    console.log('related' + event.relatedTarget);           // елемент на который пришла мыщь
});


    // Частота событий
// Событие mousemove срабатывает при передвижении мыши
// События mousemove и mouseover/mouseout срабатывают так часто, насколько это позволяет внутренняя система взаимодействия браузера.
// DOM-элементы, через которые мышь проходит на большой скорости, могут быть пропущены.

    // «Лишний» mouseout при уходе на потомка
// При переходе на потомка срабатывает mouseout на родителе.
// Согласно браузерной логике, курсор мыши может быть только над одним элементом – самым глубоким в DOM (и верхним по z-index).
// У обработчиков создаётся впечатление, что курсор ушёл mouseout с родителя, а затем тут же перешёл mouseover на него же 
// (за счёт всплытия mouseover с потомка). Получается как бы он был вызван дважды (навели=1, отвели на потомка=1, навод на потомка=2)

    // События mouseenter и mouseleave и mousemove
// Бывает важно отследить момент «настоящего» ухода - понять, когда элемент зашёл на родителя, а когда ушёл – без учёта переходов.
// Курсор заходит на элемент – срабатывает mouseenter, а затем – неважно, куда он внутри него переходит, mouseleave.
// Но они не всплывают!
var block = document.getElementById('block');
block.addEventListener('mouseenter', function(e){
    block.style.background = 'brown';
});
block.addEventListener('mouseleave', function(e){
    block.style.background = null;
});

    // Делегирование
// события mouseenter/leave не всплывают, они срабатывают именно на том элементе, на котором стоит обработчик и только на нём.
// Если обработчики mouseenter/leave стоят на <table>, то они сработают при входе-выходе из таблицы, 
// но получить из них какую-то информацию о переходах по её ячейкам невозможно.
var table = document.getElementById('table');
table.addEventListener('mouseover', function(e){
    event.target.style.background = 'red';
});
table.addEventListener('mouseout', function(e){
    event.target.style.background = null;
});

    // // Мышь: отмена выделения, невыделяемые элементы
    // Способ 1: отмена mousedown/selectstart
// предотвратить действие браузера по умолчанию для события selectstart в IE и mousedown в других браузерах.
// При установке на родителя – все его потомки станут невыделяемыми:
// Выделение при помощи передвижения зажатой мыши всё еще работает, так что посетитель имеет возможность выделить содержимое элемента.
// mousedown="return false"

table.onmousedown =  function(){
    return false;
};

    // Способ 2: снятие выделения пост-фактум
// Можно снять выделение в обработчике события, после того, как оно уже произошло.
// функция clearSelection, будет снимать выделение
// Выделение всё же производится, но тут же снимается. Это выглядит как мигание и не очень красиво.
// Выделение при помощи передвижения зажатой мыши всё еще работает, так что посетитель имеет возможность выделить содержимое элемента.

table.addEventListener('dblclick', function(e){
    clearSelection();
});
function clearSelection() {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else { // старый IE
        document.selection.empty();
    };
};

    // Способ 3: свойство user-select
// нестандартное CSS-свойство user-select, которое делает элемент невыделяемым.

// B CSS 
// <style>
//   b {
    // -webkit-user-select: none;
    // user-select -- это нестандартное свойство 
    // -moz-user-select: none;
    // поэтому нужны префиксы
    // -ms-user-select: none;
//   }
// </style> 

// B JS
table.style.webkitUserSelect = 'none';
// OR
table.addEventListener('mouseover', function(){
    event.target.style.webkitUserSelect = 'none';
});


        // // Клавиатура: keyup, keydown, keypress

    // События keydown и keyup
// События keydown/keyup происходят при нажатии/отпускании клавиши и позволяют получить её скан-код в свойстве keyCode.
// Скан-код клавиши одинаков в любой раскладке и в любом регистре.

// Скан-код в деле (в штмл нарисовать input и любой елемент после для вывода)
var text = document.querySelector('input');
text.addEventListener('keydown', function(event){
    event.target.nextElementSibling.innerHTML = 'keyCode =' + event.keyCode + ' charCode =' + event.charCode + ' which ='+event.which;
});

// Событие keypress
// Событие keypress возникает сразу после keydown, если нажата символьная клавиша, т.е. нажатие приводит к появлению символа.
// Любые буквы, цифры генерируют keypress. Управляющие клавиши, такие как Ctrl, Shift, F1, F2… – keypress не генерируют.
// Событие keypress позволяет получить код символа. В отличие от скан-кода, он специфичен именно для символа и различен для "z" и "я".

// Получение символа в keypress использование в DOM 
var keypress = document.querySelector('.keypress');
keypress.addEventListener('keypress', function(event){
    event.target.nextElementSibling.innerHTML = 'event.keyCode ' + getChar(event)+'';
});
// Получение символа в keypress функция  - getChar(event) 
function getChar(event){
    if (event.which == null) { // IE
        if (event.keyCode < 32) return null; // спец. символ
        return String.fromCharCode(event.keyCode)
    };
    if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if (event.which < 32) return null; // спец. символ
        return String.fromCharCode(event.which); // остальные
    };
    return null; // спец. символ
};

    // // Координаты в окне
// Координатная система относительно окна браузера начинается в левом-верхнем углу текущей видимой области окна.
// координаты в ней clientX/clientY.

    //  getBoundingClientRect()
// Метод elem.getBoundingClientRect() возвращает координаты элемента, относительно его краев (до девого и верхнего края)

    // Координаты относительно окна не учитывают прокрутку, они высчитываются от границ текущей видимой области.
var button = document.querySelector('.getCoords');
console.log(button.getBoundingClientRect());

    // Координаты для position:fixed 
// После нажатия создать елемент после определённого елемента с определённым содержимым на определённое время 
var butt = document.querySelector('.button');
function createMessageUnder(elem, text){
// получить координаты
    var coords = elem.getBoundingClientRect();
// создать элемент для сообщения
    var message = document.createElement('div');
    // стиль лучше задавать классом
    message.style.cssText  = 'position: fixed; color: red';
// второй аргумент функции - содержимое нового елемента
    message.innerHTML  = text;
// к координатам обязательно добавляем "px"!
    message.style.left = coords.left + 'px';
    message.style.top = coords.bottom + 'px';
    return message;
};
// Использование при нажатии на butt  
var mess = createMessageUnder(butt, 'hello');
butt.addEventListener('click', function(){
    document.body.appendChild(mess);
// убрать через 5 сек после нажатия из документа
    setTimeout(function() {
        document.body.removeChild(mess);
    }, 5000);
});

    // Получение координат относительно документа 
function getCoords(elem){
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
    };
};
var getCoords = getCoords(butt2);
console.log(getCoords);

    // Координаты на экране screenX/screenY
// Координаты относительно экрана screenX/screenY отсчитываются от его левого-верхнего угла именно вcего экрана, а не окна браузера.
// Размеры экрана хранятся в глобальной переменной screen

// общая ширина/высота
console.log(screen.width + ' x ' + screen.height);

// доступная ширина/высота (за вычетом таскбара и т.п.)
console.log(screen.availWidth + ' x ' + screen.availHeight);

// Координаты левого-верхнего угла браузера на экране хранятся в window.screenX, window.screenY 
console.log("Браузер находится на " + window.screenX + "," + window.screenY);

        // // Распространение событий 

    // Очередность воспроизведения событий
// addEventListener(event, funct(){}, capturing) - третий аргумент - быть 2 видом true/false, включен или выключен захват.

// Три блока, один в другом но с разной очередностью выполнения одного события
// Вложенные елементы прокликиваются насквозь от своих родителей, вызывая тем самым, события родителей связанные с кликом.
// Очередность их вызова будет зависить от 3го параметра в addEventListener capturing. true от родителя к чаилду, false-наборот
// Понимая что сначала идут capturing, а потом Bubbling, можно управлять и задавать очередь всплытия елементов, указывая true/false 


var block1 = document.querySelector('.block1');
var block2 = document.querySelector('.block2');
var block3 = document.querySelector('.block3');

block1.addEventListener('click', function(event){
    this.style.backgroundColor = 'red';
    // event.stopPropagation();    
    console.log('block1')
// }, false);
}, true);
block2.addEventListener('click', function(event){
    this.style.backgroundColor = 'green';
    console.log('block2')
    // event.stopPropagation();
}, false);
// }, true);
block3.addEventListener('click', function(event){
    this.style.backgroundColor = 'yellow';
    console.log('block3')
    // event.stopPropagation();
// }, false);
}, true);

    // Остановка распространения событий
// event.stopPropagation(); - прописывается именно в таком виде в addEventListener в функции, после чего, все события что идут далее 
// по дереву не будут выполняться
// Удобно использовать, когда есть всплывающие окна, или что-то подобное, где определённые события не должны распространяться на 
// все елементы

block3.addEventListener('click', function(event){
    event.stopPropagation();
}, true);


    // // Создание елементов
// Создание елемента в памяти JS - document.createElement('div')
var divElem = document.createElement('div');
var spanElem = document.createElement('span');

    // конфигурация - elem.classList.add('.class')
divElem.classList.add('some_elem');
    // Заполнение определённым контентом - elem.innerHTML = ('some') 
divElem.innerHTML = ('some element');
spanElem.innerHTML = (' span element ');

    // Добавление в дерево - document.body.appendChild()
// document.appendChild() - вставляет елемент во внутрь и вконец указанного елемента

    // Ключевой момент - создание любого елемента - это создание 1го елемента, а не переменная с постоянным кодом создания новых ел-ов
document.body.appendChild(divElem);
    // Можно добавить фрагмент внутрь созданного елемента
divElem.appendChild(spanElem);

    // Добавление списка - document.body.appendChild() в цикле - нескольких елементов внутрь (как пример из массива)
    // Что бы создавать много елементов за раз - нужно запустить само событие создания в цикле, присваивая новые ел-ты куда либо
var list = [10,25,13,47,15,28];
var olElem = document.createElement('ol');
document.body.appendChild(olElem);

for(var i=0; i<list.length; i++){
    var liElem = document.createElement('li');
    liElem.classList.add('item');
    liElem.innerHTML = 'item ' + (i+1) + ' = ' + list[i];
    olElem.appendChild(liElem);
    // удаление при нажатии
    liElem.addEventListener('click', removeOnClick);
    // добавление аттрибутов
    liElem.setAttribute('title', 'value');
    // получение номерa li который мы удаляем - присвоим аттрибут id со значением i, а в функции removeOnClick выведем его номер
    liElem.dataset.id = i;

};

    // Удаление елементов - elem.remove()
// При нажатии на пункт li - удаляется елемент c помощью event.target.remove();
// 1ый вариант, найти все li по классу item через querySelector и с помощью el.addEventListener('click', function(){}) создать remove()
// 2ой вариант, установить событие в цикле при самом созданиии этой li создать remove()
function removeOnClick(event){
    event.target.remove();
    // получаем значение аттрибута id который мы удаляем
    console.log(event.target.dataset.id);
};

liElem.addEventListener('click', removeOnClick);


    // Добавление аттрибутов - elem.setAttribute('atr','val') 
// elem.setAttribute('atr', 'value'); - если добавляем многим елементам, то нужно запустить через цикл
liElem.setAttribute('title', 'value');
olElem.setAttribute('attr', 'val');

    // Получение значения аттрибутов - elem.getAttribute('attr')
console.log(olElem.getAttribute('attr'));

    // Удаление аттрибутов - removeAttribute('atr');
olElem.removeAttribute('attr');

    // dataset - валидные, собственные аттрибуты
// data-attributes - аттрибуты которые вешают на любой тэг, это валидные, собственные атрибуты начинающиеся с data-attr.
// Данные аттрибуты часто используются как система передачи данных.
// У dataset есть своя иерархия, дря работы с атрибутами

    // Что бы добавить атрибут существует синтаксис
elem.dataset.attr = value;
    // Что бы этот атрибут удленнить через "-", при названии его стоит просто след наше имя начать с Заглавной буквы
elem.dataset.attrSecpart = value;
    // Что бы получить значение аттрибута елемента
elem.dataset.attrSecpart
