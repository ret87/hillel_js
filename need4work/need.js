// Код для генерации случайного целого от min to max включительно:
var rand = min + Math.floor(Math.random() * (max + 1 - min));

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

// Числа Фибоначчи рекруссия
function fib(f2){
    if(f2 > 1){ 
        return f2 = fib(f2-1) + fib(f2-2); 
    } else {
        return f2;
    }
}
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
}
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
var object = Object.create(null)
// выводит значения объектов прототипа (наследуемые)
Object.getPrototypeOf(ObjectPrototyped); 
// можно записывать в прототип 
Object.setPrototypeOf(obj, proto); 
// cоздание объекта с прототипом
Object.create(proto, descriptors); 

// Поиск свойств объекта через Function.prototype = object; 
var object = {
    key: 'yes'
};
function Func(name) {
    this.name = name;
}
Func.prototype = object;
var object2 = new Func("Кроль"); //  говорит что object2.__proto__ == object
console.log(object2.key); // true

// Функция-конструктор, для создания однотипных объектов 
function CreateObj(keyValue,key2Value) {
    this.keyName = keyValue;
    this.key2Name = key2Value;
    console.log(keyValue);
}
var creatObj = new CreateObj('keyValue1','key2Value');
var creatObj2= new creatObj.constructor('keyValue2','key2Value'); 
console.log(creatObj);
console.log(creatObj2);

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

// При перезаписи объекта, что бы не потерять constructor - стоит его указать как отдельный ключ, а его значение - имя объекта  
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

