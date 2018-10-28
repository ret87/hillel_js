        // Общие понятия
// Любая точка в JS " . " означает обращение к свойствам! - Точка означает вызов контекста в объекте, который стоит перед ней. 


        // Рекруссия в функции
// * Рекурсия –  это когда функция вызывает сама себя, с другими аргументами.
// * Рекруссия состоит:
//   - Контекст выполнения рекруссии - информация которая соответсвует текущему запуску функции. Включает в себя локальные переменные и
//     конкретное место в коде, на котором в данный момент находится интерпретатор.
//   - Базис рекруссии - значение на котором рекруссия заканчивается.
//   - Глубина рекруссии - общее количество раз, что вызывается рекруссия. 
// * При любом вложенном вызове JavaScript запоминает текущий контекст выполнения во внутренней структуре данных – «стеке контекстов».
// * Затем интерпретатор приступает к выполнению вложенного вызова.
// * Для нового вызова создаётся свой контекст выполнения, и управление переходит в него, а когда он завершён – 
// старый контекст достаётся из стека и выполнение внешней функции возобновляется.
// * Глубина рекурсии равна максимальному числу контекстов, одновременно хранимых в стеке.
// * Рекурсия приводит к хранению всех данных для неоконченных внешних вызовов в стеке. Их к-во ограничено примерно до 10000.
// * Любая рекурсия может быть переделана в цикл. Как правило, вариант с циклом будет эффективнее.


        // // Скрытые свойства функции
// - лексическое окружение (LE) 
// - scope (не тот что ОВ)
// LE - это некая структура, которая описывает в данный момент времени все локальные переменные, кот существуют при запуске этой ф-ии
// и оно является некиим описанием Локальной Области Видимости (ОВ). Оно динамическое
// Scope - это определённая ссылка на LE родителя. Он как бы связывает ОВ вложенных функций с их родителями.

// Global scope - это главная ОВ, к нему можно перейти с помощью обращения .window. Хранит в себе все глобальных переменные.
// Является частью объекта Window

// То есть, при запуске интерпретатор определяет лексическое окружение у разных функций и тд, после 
// интерпретатор ищет значения в этих самых лексических окружениях (начиная с вложенных), если не находит - переходит на уровень выше.
// И так аж до глобальной области видимости.


        // Функции и области видимости
// arguments - как псевдомассив.
// - arguments - ссылка на все аргументы функции, но в виде массива - псевдомассив (нет методов от массива, но возможны с циклами) 
// - arguments.callee - ссылка на выполняющуюся функцию -  её можно использовать для задания и чтения статических свойств.


        // // Callback функции (функция как аргумент в функции).
// - Переменная в js - может быть всем что угодно
// - Что бы прировнять какую либо переменную к готовой функции - нужно прописать в этой самой функции РЕТАРН ФАНКШН
// - Переменную "sum" -которая является функцией, можно использовать как аргумент для другой функции.
// - Даже если значение у данного аргумента другоей - идёт перенаименование аргумента.
// - Функции, которые передаются, как параметры, называются CALLBACK функциями
// - Кстати переменные для CALLBACK функций будут искаться в себе, а потом уже в первом родителе, 
// если мы CALLBACK объявили в глобальном scope, то и переменные впервую очередь, будут искаться в себе, а потом в глобальном.


        // // Замыкание Closure
// - Процедура которая описывает как работает память в JS
// - Замыкание - это процесс состояния функции, когда она использует переменные из вышестоящих scope, но не из global scope.    
// - Замыкание - это функция, со всеми доступными ей переменными, но не в global scope.
// - То есть, функция замыкается внутри себя и используется.
// - Параметр в родительской функции, так же является замыканием, при том не важно где ему задают значение.
// - Замыканий может быть несколько
// - debugger; c помощью этой команды можно в браузере рассмотреть много полезной инфы в соурсе.


        // // Пораждающие функции 
// Функции, которые что либо возвращают в другую функцию 
// Пораждающие функции - те которые что либо возвращают  и порождают (factory - популярное название для подобных функций)
// Варианты создания порождающих функций: 
// - Анонимные функции с использованием замыкания (создали переменную и внутри кода её используем)
// - Возвращение другой функции по имени (мы обращаемся к другой функции по её имени - она может быть создана где угодно)
// Удобно использовать для параметрического определения данной функции - пораждающей, т.е. в зависимости от условий входящих параметров
// можем вернуть разные функции


        // // Объекты

        // // - Объекты - это некоторая сущность, которая обладает блиц структурой (ключ - значение в данном случае);
// - Очень похожи на массивы (по типам данных они даже равны), у обоих есть клю - значения (индекс - значение в случае массива), 
// разница лишь в том, что у массива эти ключи - индексы, очень строго пронумерованны.
// - В JS практически всё может быть представленно в виде объектов.
// - Объявление объекта:  obj = { ключ: значение, ключ: значение, ключ: значение.  }

        // // - Обращение к объекту: что бы обратиться к свойствам объекта - к значению ключа, в [] скобках пишем имя ключа,  значение 
// которого выводим. Обращаемся к имени ключа как к строке если он строка, и к цифре если цифра. obg['ключ'] / obj[ключ].
// - Можно обратиться через переменную, предварительно прировняв её к имени ключа, искомого значения var key = 'ключ' ==> obj[key]
// - Можно обратиться через точку obj.ключ
// - Ключа, которого нет в значениях - undefined
    
        // // Вложенные объекты 
// - Вложенный объект в объект,задаём как обычный ключ, только в значении вложенного объекта ставим objIn: {кл: зн; кл: [зн, зн1, зн2]}
// - Обращенеи ко вложенному объекту как ключу через главный объект obj.objIn
// - Обращение к ключам вложенного объекта, так же через точку, через главный объект obj2.objIn.ключ
// - Если в значениях ключей есть массив, то перебор можно осуществить обратившись через obj2.objIn.ключ-массива.length
// - Структура перед точко " .  " - является объектом
// - Добавление ключа и его свойства, через обращение к объекту  obj.newkey = "значение";
// - Так же можно и удалить  delete obj.key;

        // // Методы
// - Функция внутри объекта, не может быть объявлена до момента её инициализации - т.е. FuncDecl obj = {keyFunc = function(param){} }
// - Обращение к такой функции, только через объект и ключ значение obj.keyFunc
// - задать значение можно с помощью скобок вкоцне- как и в обычной функции  obj.keyFunc(fact param) 
// - можно проверять на наличие ключей в объекте через конструкцию if("namekey" in obj){some do} 
// но так же можно через undefined       if(obj.namekey === undefined){some do}

        // // Перебор
// - Свойства length - в объектах нет. 
// - Типы данных стринг - строка
// - Для перебора объекта существует  for (имя переменной in obj){} внутри можно использовать всё тоже что и для обычного for() 
// - порядок вывода такого перебора - зависит от браузера, как такого его НЕТ
// - обращаться к объекту через данную переменную можно только через квадратные скобки obj[key];
// - а ко вложенному объекту в объекте нужно создать отдельный for in и обращаться через родителя for(key in obj.objIn){obj.in[key]} 
// для подсчёта ключей (свойств) объекта можно использовать счётчик в комбинации с for in
// порядок перебора: изначально строковые ключи (свойства), идут так как их задали, цифры же перебивают - идут первыми и по возраст.
// но можно цифры привести к строковым с помощью добавления " + "  перед числом

        // // Функция в Объекте
// Функция в Объекте и используется только для него иначе будет закорходженность (использование предыдущих данных для нового вызова)
// - Функция находящаяся в внутри объекта, не может обращаться к значениям объекта, из самой себя на прямую,
//  так как её область видимости идёт сразу в глобал
// - можно обратиться в глобале к самой функции и через имя объекта.значение функции и задать параметры, опять же через имя объекта
// ==  obj.keyFunc(obj.key1, obj.key2);
// - можно обратиться внутри самой функции но не на прямую к key1, key2, а через имя объекта.значение ==  return a + b + obj.key1 
// Но если функция объявлена не в объекте а в глобал скоуп, и используется в другом объекте 
// // Объекты: передача по ссылке

        // // Копирование по ссылке
// - В переменной, которой присвоен объект, хранится не сам объект, а – «ссылка» на него.     var obj2 = obj;
// - При копировании переменной с объектом – копируется эта ссылка, а объект по-прежнему остается в единственном экземпляре.
// - Так как объект всего один, то изменения через любую переменную видны в других переменных.

        // // Клонирование объектов
// нужно запустить перебор одного объекта через и прировнять ключи к клона ключам for(var key in obj) {clone[key] = obj[key]} 
// Если же свойства объектов, в свою очередь, могут хранить ссылки на другие объекты, 
// то нужно обойти такие подобъекты и тоже склонировать их. Это называют «глубоким» клонированием.

        // // Метод Object.keys()
//  Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке как и вfor...in
//  разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов. Object.keys(obj)
        
        // // Метод Object.getOwnPropertyNames(o)
// Этот метод возвращает массив содержащий все имена своих свойств 
        

        // // THIS 
// Функция в глобал скоупе используемая много раз для разных объектов.
// Для избежения проблемы закорходженности вызова одной функции в глобале через разные объекты - создали ссылку THIS.
// THIS - это ссылка которая всегда будет смотреть на какой-то объект.
// THIS - смотрит на тот объект, где происходит вызов.
// THIS - существует исключительно внутри функции.
// this можно использовать как параметр внешней функции для внутренней функции
// Окружение функции - вызываясь из разных объектов, получаем разное окружение функции.
// Главные правила this:
// 1. В зависимости от того где объявлена this - меняется контекст.
// 2. THIS - всегда смотрит на объект перед точкой, если такого нет, то this обращается в window.


        // Объектно-ориентированное програмирование

// - Заставляет нас програмировать ориентируясь на что-то (объект).
// - JS - прототипно-ориентированный язык.
// - Абстракция - нечто не определённое.
// - Абстрактный тип данных - математическая модель.
// - Математическая модель - описание сущности, через все возможные свойства (свойства которые не нужны их нет),
// то есть она учитывает в этой сущности, только то, что нам необходимо для поведения данной структуры.
// - Класс - абстрактное описание структуры типов данных в программировании. 
// - Класс - набор свойств, которые нам необходимы для реализации типов данных, данной структуры. 
// - Объект - это экземпляр класса (его представитель), то есть объект представляет определённый класс в нашей программе.
// - Объект - физическое представление класса, с конкретными свойствами.

    // JS & OOP
// - Есть классы и объекты.
// - Основные принципы: абстрагирование, наследование, инкапсуляция и полиморфизм.
// * Абстрагирование: контекстное понимание предмета, формализуемое в виде класса;
// * Наследование: на каждом иерархическом шаге учитываются только изменения, не дублируя всё остальное, учтённое на предыдущих шагах;
// * Инкапсуляция: намеренное сокрытие свойств, для того что бы обращаться к конкретным свойствам через конкретные обращения; 
// * Полиморфиз: реаигирование объектов на один и тот же метод по-разному;

    // Конструктор - собирает объект на основе класса (функции), в примере ниже объект Р собирается на основе параметров функции Person
// function Person(x,y) {x,y, run};
// p = new Person();

    // NEW - третье правило поведения THIS:
// * new - всегда создаёт новый объект;
// * new - вызывает функцию к которой его прировняли;
// * new - меняет поведение THIS и заставляет объект смотреть на новый, созданный при помощи new;

    // - Прототипно ориентированное програмирование -  при создании любой сущности (число, строка, булеан, объект, массив, функция...),
// она цепляется к подобной как ДИТЁ (CHILD), следовательно в JS есть заранее подготовленные объект под ТИП ДАННЫХ.
// - Прототип - это выше стоящая сущность, по которой и был создан определённый тип данных. 
// - По сути прототип это РОДИТЕЛЬ определённой сущности.

    // Работа в памяти JS
// - В JS всё является по своей сути объектом, а типы данных это основные прототипы. По этому JS относится к ООП, но прототипный.

                                            // ОБЪЕКТЫ
//  Array       Function        Object      Window      Number      String      Boolean     и т.д.

    // __proto__
// - Каждый раз как мы создаём любую сущность, мы определяем под её видом ячейку, которая является дитём определённого прототипа,
// т.е. создав новый массив - память JS определяет его ячейку под Array, уже с некиеми свойствами определёнными для массивов.
// - Связывает родителя и чаилд определённая ссылка, которая указывает чаилду его прототип.
// __proto__ - та самая ссылка по которой можно сделать поиск в прототипе определённой сущности.
// - сущность.__proto__ 

        // Функция - конструктор 

// - Прототипная цепочка - цепочка объектов;
// - Экземпляр - это объект;
// - Роль конструктора - выполняется функцией;
// - Но функция на прямую не может создать объект, так как они в разных цепочках; 
// - Порождение специального объекта: создав новый объект и приравняв его через NEW к функции - 
// мы получаем новый объект со свойствами функции.
// - Функция конструктор - абстрактная единица, может положить в прототип кучу методов и поведения.

// constructor - ссылка из объекта прототипа на функцию родителя этого объекта;
// prototype   - ссылка из функции конструктора (класса) на объект прототипа;
// __proto__   - ссылка из екземпляра на его прототип;

// - Те методы, которые могут быть использованы у всех чаилдов прототипа, стоит записать в прототип и использовать наследование
// - Инкапсуляция: объект, который создан через NEW и относящийся к определённой функции, не может использовать на прямую переменные 
// созданные в функции без THIS. 
// - Для оптимизации, если через ссылку прототип вкладываем, какой либо метод из класса в себя, стоит поставить проверку,
// ограничивающую вызов этого самого метода: if(!nameFunc.prototype.method){nameFunc.prototype.method{some do}} - вызов будет 1раз

// function Person(x,y) {
//     var privat = 200; // на прямую в Р, без THIS не будет видел, но можно использовать, добавив к другой переменной с THIS 
//     this.x=x;
//     this.y=y;
//     this.z=x+y+privat;
//     if(!Person.prototype.getPrivat){       //каждый следующий вызов не будет переприсваиваться, так как мы отменили его повторный вызов
//         console.log('GET DECLARATION')
//         Person.prototype.getPrivat = function (){   //присваиваем замыкание через ссылку прототипа 
//             return privat;                 
//         };
//     }
// };
// Person.prototype.sleep = function (x,y) {return  x+y} // правильное наследование, через Прототип
// var p = new Person(10, 2);
// var d = new Person(12, 3);

        
        // NEW
// New - это синтаксис создание екзепляра класса
// NEW - третье правило поведения THIS:
// * new - всегда создаёт новый объект;
// * new - вызывает функцию к которой его прировняли;
// * new - меняет поведение THIS и заставляет объект смотреть на новый, созданный при помощи new;

    // Конструктор;
// - Конструктор - собирает объект на основе класса (функции), в примере ниже объект Р собирается на основе параметров функции Person;
// - Функции-конструктор используют для того, что бы создавать несколько однотипных объектов;
// - Функции-конструктор называют с большой буквы - что бы можно было сразу их опредялять.
// function Person(value1,value2) {this.key1=value1, this.key2=value2};
// obj1 = new Person(value1,value2);
// obj2 = new Person(value1,value2);

// * Что делает NEW с функцией-конструктором:
//   - Создаётся новый пустой объект.
//   - Ключевое слово this получает ссылку на этот объект.
//   - Функция выполняется. Как правило, она модифицирует this (т.е. этот новый объект), добавляет методы, свойства.
//   - Возвращается this.

    // Правила обработки return
// Если есть явный вызов return в функции-конструкторе: 
//   - при вызове return с объектом, будет возвращен он, а не this - то есть return объект = ПЕРЕБИВАЕТ this;
//   - при вызове return с примитивным значением, оно будет отброшено; - то есть обращаясь на прямую к ключу

    // Создание методов в конструкторе
// - Использование функций для создания объекта дает большую гибкость. 
// - Можно передавать конструктору параметры, определяющие как его создавать, и он будет «клепать» объекты заданным образом.
// - Метод - функция внутри конструктора.
// - Что бы вызвать метод, созданный внутри функции конструктора и прировненный к переменной, взять имя объекта созданного через new,
// и через точку обратиться к имени внутренней функции - методу nameNew.nameMethod();

    // Локальные переменные
// В Функции-конструкторе бывает удобно добавить локальные переменные и вложенные функции, которые видны только внутри (локально)
// Т.е. функции и данные, которые должны быть доступны доступны для внешнего кода, внутри конструктора, мы записываем в THIS, 
// а вспомогательные, которые нужны только внутри самой функции-конструктора, сохраняем в локальную область видимости ф-ии.


        // // Прототип объекта 

    // Прототип proto
// - В JS все сущности являются по сути объектами связанными цепочками.
// - Связующим звеном выступает специальное свойство __proto__.
// - В ECMAScript – свойство __proto__ обозначено в ней как [[Prototype]].
// - В современных браузерах, с точки зрения производительности, нет разницы, брать свойство из объекта или прототипа. 
// Они запоминают, где было найдено свойство и в следующий раз при запросе, начнут искать сразу в прототипе .
// - Прировняв proto через . другому объекту - создаётся связь между ними; при поиске свойств в одном-поиск будет проходить и в другом:
// object1.__proto__ = object2
// - При прямом обращение к объекту через proto - покажет свойства объекта прототип (родитель данного объекта)
// object1.__proto__ 
// - Можно несколько раз добавлять свойство proto несколько раз и мы будем идти по цепочке всё ближе и ближе к свойствам прародителя
// console.log(object1.__proto__.__proto__);
// - Можно приравнивать объекты к друг другу по очереди - задавая цепочку родитель-чаилд. Но у родителя только один чаилд - последний
// - Объект, на который указывает ссылка __proto__, называется «прототипом»
// - Прототип используется исключительно при чтении.
// - Другими словами, прототип – это «резервное хранилище свойств и методов» объекта, автоматически используемое при поиске.
// - for..in не делает различия между свойствами объекта и его прототипа - выведет свойства всех прототипов в цепочке.
// - Так же можно приравнивать к прототипу, прописывая это в свойствах объекта obj2 = {key: value, __proto__: obj1};

    // Метод hasOwnProperty
// - Вызов obj.hasOwnProperty('key') - возвращает true, если свойство-ключ key принадлежит самому объекту obj, иначе false.
// - Удобно использовать для перебора и вывода своих или родительских свойст, родительские выводит лишь отличимые по имени ключа
// for(var key in obj) {if(obj.hasOwnProperty(key)){console.log(obj[key])} };

    // Методы для работы с proto
// var obj = Object.create(proto, descriptors); - создаст объект со свойствами другого объекта (в параметрах)
// - В любом объект, по умолчанию есть определённые свойства - функции, но они наследованы общим прародителем
// - Но с помощью метода var object = Object.create(null) - мы можем создать исключительно чистый объект,без наследования от прототипов
// Object.getPrototypeOf(obj) - тоже самое что и obj.__proto__;
// Object.setPrototypeOf(obj, proto) - тоже самое что и obj.__proto__ = obj1;
// Object.getOwnPropertyNames(object) - показывает все заданные свойства

        // f.prototype and NEW 
    // Свойство F.prototype
// - Cоздавать объекты можно через функцию конструктор а добавлять определённые ключи-свойства из другого объекта 
// 1. через свойство   this.__proto__ = animal; - внутри самой функции-конструктор
// 2. функции-конструктору ставится свойство prototype; - objChild.prototype = objDad; - таким образом, при создании объекта через new, 
// в его прототип __proto__ записывается ссылка из prototype функции-конструктора.

        // Встроенные классы 

        // Встроенные "классы" в JavaScript
// * В JavaScript есть встроенные объекты: Date, Array, Object, Window и другие. Они первые чаилды глобального объекта.
// * Они используют прототипы и демонстрируют организацию «псевдоклассов» на JavaScript, которую мы вполне можем применить и для себя.
// * Даже пустой объект выведет "[object Object]"
// * Это сделал метод toString, который находится в прототипе obj.__proto__, как многие другие методы по умолчанию доступные объектам:
//   - Запись obj = {} является краткой формой obj = new Object, где Object – встроенная функция-конструктор для объектов.
//   - При выполнении new Object, создаваемому объекту ставится __proto__ по prototype конструктора и равен Object.prototype.
//   - В дальнейшем при обращении к obj.toString() – функция будет взята из Object.prototype.

    // Встроенные «классы» в JavaScript
// * Т.к. все сущности в JS являются по своей сути объектами созданными через класс-функцию, то данная иерархия равна всему в JS.
// * Это можно легко проверить присваивая .__proto__.__proto__ и аж до null
// * Есть методы лишь для массивов, а для общих методов всех объектов есть ссылка Array.prototype.__proto__, равная Object.prototype.
// * Object.prototype – вершина иерархии, единственный, у которого __proto__ равно null
// * Все сущности наследуются от Object, а если более точно, то от Object.prototype
// * Классом - называют функцию-конструктор вместе с её prototype. Такой способ объявления классов называют «прототипным стилем ООП».
// * При наследовании часть методов переопределяется, под конкретный тип данных (для объектов одни, для строчных другие), 
//   хотя у общего родителя они одинаковы
// * Перечисляет вводимые параметры [].join.call(arguments, ' - ')

    // Примитивы 
// * Примитивы - это новые сущности, созданные на основе соотвтетсвующих классов (строки, объекты, массивы и тд...) 
// * По сути каждое создание любой сущности являет собой следующие действия:
//  - временное создание сущности через NEW (строка, число, и т.д.)
//  - вызванный метод, соответствующий данному класу создаваемой сущности 
//  - удаление файла временного метода 
//  - возвращение результата в виде создания новой сущности

    // Изменение встроенных прототипов
// Обращаясь к Классу объекта, через prototype и метод этого класса (String.prototype.repeat)- можно изменять поведение этих методов
// Так же можно добавлять новые методы, Object.prototype.each = function(f){}


        // Свои классы на прототипах
    // Обычный конструктор 
// - Как мы ранее уже объявляли через new по стандартным классам

    // Классы через прототип
// - Классы созданные на подобии Object.prototype и т.д.
// - Чтобы объявить свой класс, нужно:
// 1. Объявить функцию-конструктор.
// 2. Записать методы и свойства, нужные всем объектам класса, в prototype.
// В объекте animal будут храниться свойства конкретного экземпляра: name и speed, а общие методы – в прототипе.

    // Наследование классов через prototype 
// Наследование одним классом методами другого класса
// Что бы child одного класса обращался к методам родителя другого класса, нужно прировнять ParrentTwo.prototype = new Parrent.One();
// В таких случаях, this не рекомендуется использовать в ParrentOne функции - так как он будет сказываться на ParrentTwo прототипах
// Так же можно добавлять методы других классов по цепочке
// Плох этот подход тем что нам нужно вызывать отдельные классы и получаем доступ только к их методам но не свойствам
// Хорош он тогда, когда нужно за счёт аргументов методов ParrentOne и ParrentTwo положить что либо в прототип   
// ParrentTwo.prototype = new ParrentOne();

    // Наследование классов через Object.create 
// Object.create(prototype ){}; - какой-то другой объект, прототипом которого он будет (в скобках имя объекта);
// Для создания прототипного наследования классов, стоит прировнять ParrentTwo.prototype = Object.create(ParrentOne.prototype){}; 
// ParrentTwo.prototype = Object.create(ParrentOne.prototype); - объявлять сразу после конструктора ParrentTwo!

// ParrentTwo.apply(this, arguments); - внутри функции конструктора ParrentTwo - при создании ссылается на аргументы ParrentOne
// ParrentOne.prototype.run = function(args){do some} - таким образом задаётся метод к ParrentOne
// ParrentTwo.prototype.run() - после наследования мы можем использовать методы ParrentOne к ParrentTwo
// ParrentTwo.prototype.run = function(args){do some} - можем переприсваивать методы ParrentOne для ParrentTwo 

// вызвать метод родителя, передав ему текущие аргументы - добавит к ParrentTwo метод ParrentOne с небольшими изменениями
// ParrentTwo.prototype.run = function() { 
// ParrentOne.prototype.run.apply(this, arguments); 
// this.run(); 
// }

    // Методы и функции в ООП
// getObject = function() {} - получить информацию из объекта (или другого типа данных);
// setObject = function() {} - задать информацию в объект (или другой тип данных);


