'use strict';
console.log('Objects');

        // Объекты

    // - Объекты - это некоторая сущность, которая обладает блиц структурой (ключ - значение в данном случае);
// - Очень похожи на массивы (по типам данных они даже равны), у обоих есть клю - значения (индекс - значение в случае массива), 
// разница лишь в том, что у массива эти ключи - индексы, очень строго пронумерованны.
// - В JS практически всё может быть представленно в виде объектов.
// - Объявление объекта:  obj = { ключ: значение, ключ: значение, ключ: значение.  }

    // - Обращение к объекту: что бы обратиться к свойствам объекта - к значению ключа, в [] скобках пишем имя ключа,  значение 
// которого выводим. Обращаемся к имени ключа как к строке если он строка, и к цифре если цифра. obg['ключ'] / obj[ключ].
// - Можно обратиться через переменную, предварительно прировняв её к имени ключа, искомого значения var key = 'ключ' ==> obj[key]
// - Можно обратиться через точку obj.ключ
// - Ключа, которого нет в значениях - undefined
    
    // Вложенные объекты 
// - Вложенный объект в объект,задаём как обычный ключ, только в значении вложенного объекта ставим objIn: {кл: зн; кл: [зн, зн1, зн2]}
// - Обращенеи ко вложенному объекту как ключу через главный объект obj.objIn
// - Обращение к ключам вложенного объекта, так же через точку, через главный объект obj2.objIn.ключ
// - Если в значениях ключей есть массив, то перебор можно осуществить обратившись через obj2.objIn.ключ-массива.length
// - Структура перед точко " .  " - является объектом
// - Добавление ключа и его свойства, через обращение к объекту  obj.newkey = "значение";
// - Так же можно и удалить  delete obj.key;

    // Методы
// - Функция внутри объекта, не может быть объявлена до момента её инициализации - т.е. FuncDecl obj = {keyFunc = function(param){} }
// - Обращение к такой функции, только через объект и ключ значение obj.keyFunc
// - задать значение можно с помощью скобок вкоцне- как и в обычной функции  obj.keyFunc(fact param) 
// - можно проверять на наличие ключей в объекте через конструкцию if("namekey" in obj){some do} 
// но так же можно через undefined       if(obj.namekey === undefined){some do}

    // Перебор
// - Свойства length - в объектах нет. 
// - Типы данных стринг - строка
// - Для перебора объекта существует  for (имя переменной in obj){} внутри можно использовать всё тоже что и для обычного for() 
// - порядок вывода такого перебора - зависит от браузера, как такого его НЕТ
// - обращаться к объекту через данную переменную можно только через квадратные скобки obj[key];
// - а ко вложенному объекту в объекте нужно создать отдельный for in и обращаться через родителя for(key in obj.objIn){obj.in[key]} 
// для подсчёта ключей (свойств) объекта можно использовать счётчик в комбинации с for in
// порядок перебора: изначально строковые ключи (свойства), идут так как их задали, цифры же перебивают - идут первыми и по возраст.
// но можно цифры привести к строковым с помощью добавления " + "  перед числом

    // Метод Object.keys()
//  Метод Object.keys() возвращает массив из собственных перечисляемых ключей переданного объекта, в том же порядке как и в  for...in
//  разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов. Object.keys(obj)

    // Функция в Объекте
// Функция в Объекте и используется только для него иначе будет закорходженность (использование предыдущих данных для нового вызова)
// - Функция находящаяся в внутри объекта, не может обращаться к значениям объекта, из самой себя на прямую,
//  так как её область видимости идёт сразу в глобал
// - можно обратиться в глобале к самой функции и через имя объекта.значение функции и задать параметры, опять же через имя объекта
// ==  obj.keyFunc(obj.key1, obj.key2);
// - можно обратиться внутри самой функции но не на прямую к key1, key2, а через имя объекта.значение ==  return a + b + obj.key1 
// Но если функция объявлена не в объекте а в глобал скоуп, и используется в другом объекте 

    // Объекты: передача по ссылке
// Копирование по ссылке
// - В переменной, которой присвоен объект, хранится не сам объект, а – «ссылка» на него.     var obj2 = obj;
// - При копировании переменной с объектом – копируется эта ссылка, а объект по-прежнему остается в единственном экземпляре.
// - Так как объект всего один, то изменения через любую переменную видны в других переменных.

    // Клонирование объектов
// нужно запустить перебор одного объекта через и прировнять ключи к клона ключам for(var key in obj) {clone[key] = obj[key]} 
// Если же свойства объектов, в свою очередь, могут хранить ссылки на другие объекты, 
// то нужно обойти такие подобъекты и тоже склонировать их. Это называют «глубоким» клонированием.


    // - Объявление объекта  
var obj = {
    name: 'Artur',
    age: 18,
    25: 5.
}
console.log(obj);


    // Обращение к объекту
// - Что бы обратиться к свойствам объекта - к значению ключа, в [] скобках пишем имя ключа, 
// значение которого мы хотим вывести. Обращаемся к имени ключа как к строке если он строка, и к цифре если цифра. obg[''] / obj[]
console.log(obj['name']);
console.log(obj[25]);
var keyName = 'name';
// - Можно обратиться через переменную, предварительно прировняв её к имени ключа, искомого значения var key = 'ключ'
console.log(obj[keyName]);
// - Можно обратиться через точку obj.ключ
console.log(obj.name);
// - Ключа, которого нет в значениях - undefined
console.log('ключа не существует ' + obj.names);


    // Вложенные объекты
// Вложенный объект в объект, задаём как обычный ключ, только в значении вложенного объекта ставим objIn: {кл: зн; кл: [зн, зн1, зн2]}
var obj2 = {
    name: 'Artem',
    age: 31,
    adress: {
        city: 'Kiev',
        street: 'Kopernika',
        postalCode: '04111',
        siblings: [1, 2, 3, 4]
    }
}
console.log(obj2);
// Обращенеи ко вложенному объекту как ключу через главный объект obj.objIn
console.log(obj2.adress);
// Обращение к ключам вложенного объекта, так же через точку, через главный объект obj2.objIn.ключ
console.log(obj2.adress.city);
// Если в значениях ключей есть массив, то перебор можно осуществить обратившись через obj2.objIn.ключ-массива.length
for(var i=0; i<obj2.adress.siblings.length; i++){
    console.log(obj2.adress.siblings[i]);
}
// Добавление ключа и его свойства, через обращение к объекту  obj.newkey = "значение";
obj.nickname = "Charli";
console.log(obj);
// Так же можно и удалить  delete obj.key;
delete obj.nickname;
console.log(obj);


    // Методы
// Функция внутри объекта, не может быть объявлена до момента её инициализации - т.е. FuncDecl obj = {keyFunc = function(param){} }
var data = {
    sum: function(a, b){
        return a + b;
    }
}
// Обращение к такой функции, только через объект и ключ значение obj.keyFunc  obj.keyFunc(fact param) 
console.log(data.sum);
// задать значение можно с помощью скобок вкоцне- как и в обычной функции  obj.keyFunc(fact param) 
console.log(data.sum(2, 2));


    // Перебор объекта 
    // FOR(KEY IN OBJ)
// - Для перебора объекта существует  for (имя переменной in obj){} внутри можно использовать всё тоже что и для обычного for() 
// - порядок вывода такого перебора - зависит от браузера, как такого его НЕТ
for(var key in obj){    
    console.log(key);
    console.log(obj[key]); // - обращаться к объекту через данную переменную можно только через квадратные скобки obj[key];
    // console.log(typeof key); // - Типы данных стринг - строка
}
// - а ко вложенному объекту в объекте нужно создать отдельный for in и обращаться через родителя for(key in obj.objIn){obj.in[key]} 
for(var key2 in obj2.adress){    
    console.log(key2);
    console.log(obj2.adress[key2]); 
}
// для подсчёта ключей (свойств) объекта можно использовать счётчик в комбинации с for in
var counter = 0;
for(var key3 in obj){
    counter++;
}
console.log('к-во свойств в obj = ' + counter);


        // Метод Object.keys()
//  Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке как и в  for...in
//  разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов. Object.keys(obj)
console.log(Object.keys(obj));
var objLength = [];
var objLength = Object.keys(obj);
console.log(objLength);
for(var i=0; i<objLength.length; i++){
    console.log(objLength[i]);   
}


        // Функция в Объекте
// Функция в Объекте и используется только для него иначе будет закорходженность (использование предыдущих данных для нового вызова)
// - Функция находящаяся в внутри объекта, не может обращаться к значениям объекта, из самой себя на прямую,
//  так как её область видимости идёт сразу в глобал
// - можно обратиться в глобале к самой функции и через имя объекта.значение функции и задать параметры, опять же через имя объекта
// ==  obj.keyFunc(obj.key1, obj.key2);
// - можно обратиться внутри самой функции но не на прямую к key1, key2, а через имя объекта.значение ==  return a + b + obj.key1 
// Но если функция объявлена не в объекте а в глобал скоуп, и используется в другом объекте 


var dataF = {
    x: 10,
    y: 20,
    sum: function(a, b){
        return a + b + dataF.x; // - можно обратиться внутри самой функции,через имя объекта.значение 
    }
}
// - можно обратиться в глобале к самой функции и через имя объекта.значение функции и задать параметры, опять же через имя объекта
console.log(dataF.sum(dataF.x, dataF.y));

// Но если функция объявлена не в объекте а в глобал скоуп, и используется в другом объекте, возникнет проблема закарходженности,
// функция будет брать одно число из предыдущего расчёт другого объекта
function sourceForObj(a, b){
    return a + b + dataFunc.x; // обращается датафанк Х
}
var dataFunc = {
    x: 10,
    y: 20,
    sum: sourceForObj
}
var dataFunc2 = {
    x: 15,
    y: 25,
    sum: sourceForObj
}
console.log(dataFunc2.sum(dataFunc2.x, dataFunc2.y)); //должна обратиться к датафанк2 Х и У а выдает ещё и плюс датафанк Х
