        // Общие понятия
// Любая точка в JS " . " означает обращение к свойствам! - Точка означает вызов контекста в объекте, который стоит перед ней. 


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

function Person(x,y) {
    var privat = 200; // на прямую в Р, без THIS не будет видел, но можно использовать, добавив к другой переменной с THIS 
    this.x=x;
    this.y=y;
    this.z=x+y+privat;
    // this.getPrivat = function (){
    //     return privat;                  // инкапсуляция с замыканием 
    // };
    if(!Person.prototype.getPrivat){       //каждый следующий вызов не будет переприсваиваться, так как мы отменили его повторный вызов
        console.log('GET DECLARATION')
        Person.prototype.getPrivat = function (){   //присваиваем замыкание через ссылку прототипа 
            return privat;                 
        };
    }
    // arguments.callee.prototype.getPrivat = function (){          //тоже самое но если не юзают use strict
    //     return privat;                  
    // };
    // this.sleep = function (){}               // не правильное наследование - стоит записать в Прототип  
};
Person.prototype.sleep = function (x,y) {return  x+y} // правильное наследование, через Прототип
    




        // // Прототип объекта    

// - Объекты в JS можно организовать в цепочки так, чтобы свойство, не найденное в одном объекте, автоматически искалось бы в другом.
// - Связующим звеном выступает специальное свойство __proto__.        
 
        // Прототип proto
// - Если один объект имеет специальную ссылку __proto__ на другой объект, то при чтении свойства из него, 
// если свойство отсутствует в самом объекте, оно ищется в объекте __proto__.
// - Объект, на который указывает ссылка __proto__, называется «прототипом».
// - Также говорят, что объект obj1 «прототипно наследует» от obj2.
// - Другими словами, прототип – это «резервное хранилище свойств и методов» объекта, автоматически используемое при поиске.
// - Несколько прототипов одному объекту присвоить нельзя, но можно организовать объекты в цепочку, 
// когда один объект ссылается на другой при помощи __proto__, тот ссылается на третий, и так далее.
// - В ECMAScript – свойство __proto__ обозначено в ней как [[Prototype]].
// - В современных браузерах, с точки зрения производительности, нет разницы, брать свойство из объекта или прототипа. 
// Они запоминают, где было найдено свойство и в следующий раз при запросе, начнут искать сразу в прототипе .

    // Метод hasOwnProperty
// Обычный цикл for..in не делает различия между свойствами объекта и его прототипа. Он перебирает всё.
// Вызов obj.hasOwnProperty(prop) возвращает true, если свойство prop принадлежит самому объекту obj, иначе false.
// Для того, чтобы перебрать свойства самого объекта, достаточно профильтровать key через hasOwnProperty:

        // Object.create(null)
// Объект, создаваемый при помощи Object.create(null) не имеет прототипа, а значит в нём нет лишних свойств. 
// Вывести функцию только если мы её записывали, иначе андефаинд
// var data = Object.create(null);
// console.log(data.toString); 

    // Методы для работы с proto
// Object.getPrototypeOf(); - выводит значения объектов прототипа (наследуемые)
// Object.setPrototypeOf(obj, proto); -  Можно записывать в прототип 


        // // Свойство F.prototype и создание объектов через new
    // Свойство F.prototype
// - Чтобы новым объектам автоматически ставить прототип, конструктору ставится свойство prototype.
// - При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.
// - Установка Object1.prototype = Object2 буквально говорит интерпретатору: 
// "При создании объекта через new Rabbit запиши ему __proto__ = Object2".
// - Чтобы новым объектам автоматически ставить прототип, конструктору ставится свойство prototype.
// - При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.
// - Установка Object1.prototype = Object2 буквально говорит интерпретатору: 
// "При создании объекта через new Rabbits запишет ему __proto__ = Object2".
// - Свойство prototype имеет смысл только у конструктора.
// - Само по себе, без вызова оператора new, оно ничего не делает, его единственное назначение – указывать __proto__ для новых объектов
// - Значением prototype может быть только объект.
// - При работе new, свойство prototype будет использовано в том случае, если это объект. Примитивные значения: игнорируются.


