'use strict';
console.log('GIT');

        // // Введение
    
    // // Введение основы Git

// Слепки вместо патчей
// -GIT -  Распределённые системы контроля версий.   
// Где данные хранятся на сервере в полном объёме, а клиенты не просто выгружают последние версии, а полностью копируют репозиторий
// - Git считает хранимые данные набором слепков небольшой файловой системы
// - Каждый раз, когда вы фиксируете текущую версию проекта, 
// Git, по сути, сохраняет слепок того, как выглядят все файлы проекта на текущий момент. 
// - Ради эффективности, если файл не менялся, Git не сохраняет файл снова, а делает ссылку на ранее сохранённый файл.

// Почти все операции — локальные
// - можно спокойно делать коммиты вне сети, а затем отправить их, и струтура будет соблюдена

// Git следит за целостностью данных
// - Перед сохранением любого файла Git вычисляет контрольную сумму, и она становится индивидуальным индексом этого файла.
// - Механизм, используемый Git'ом для вычисления контрольных сумм, называется SHA-1 хешем.

// Чаще всего данные в Git только добавляются
// - Можно потерять только те данные, которые вы ещё не сохранили


    // // Введение состояния в GIT

// - В Git'е файлы могут находиться в одном из трёх состояний: 
// * "Зафиксированные" - значит, что файл уже сохранён в вашей локальной базе.
// * "Изменённые" - файлы, которые поменялись, но ещё не были зафиксированы. 
// * "Подготовленные" -  это изменённые файлы, отмеченные для включения в следующий коммит.

// - В проектах, использующих Git, есть три части: 
//  * Каталог Git — место, где Git хранит метаданные и базу данных объектов вашего проекта. Копируется во время клонирования репозит
//  * Рабочий каталог — извлечённая из базы копия определённой версии проекта.
//  * Область подготовленных файлов — это файл, хранящийся в каталоге Git, он содержит информацию, которая войдёт в следующий коммит.

// - Стандартный рабочий процесс с использованием Git'а выглядит примерно так:
// * Вы вносите изменения в файлы в своём рабочем каталоге.
// * Подготавливаете файлы, добавляя их слепки в область подготовленных файлов.
// * Делаете коммит, который берёт подготовленные файлы из индекса и помещает их в каталог Git'а на постоянное хранение.


    
    // // Введение Установка Git

// 1. Для установки Git'а вам понадобятся библиотеки, от которых он зависит: curl, zlib, openssl, expat и libiconv.
// если в вашей системе менеджер пакетов — yum (Fedora), или apt-get (Debian, Ubuntu),
//  можно воспользоваться следующими командами, чтобы разрешить все зависимости:
// $ yum install curl-devel expat-devel gettext-devel \
//      openssl-devel zlib-devel
// или. $ apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
//   libz-dev libssl-dev
// 
// 2. Cкачать последнюю версию с офф сайта
// http://git-scm.com/download
// 
// 3. Теперь скомпилируйте и установите:
// $ tar -zxf git-1.7.2.2.tar.gz
// $ cd git-1.7.2.2
// $ make prefix=/usr/local all
// $ sudo make prefix=/usr/local install
//
// 4. После этого вы можете скачать Git с помощью самого Git'а, чтобы получить обновления: 
// $ git clone git://git.kernel.org/pub/scm/git/git.git


    // // Введение Первоначальная настройка Git

// - git config - позволяет просматривать и устанавливать параметры, контролирующие все аспекты работы Git'а и его внешний вид.
// * Если при запуске git config указать параметр --system, то параметры будут читаться и сохраняться в файл /etc/gitconfig
// в нем находятся общие данные для всех пользователей системы и для всех их репозиториев
// * ~/.gitconfig хранит настройки конкретного пользователя. Этот файл используется при указании параметра --global.
// * Конфигурационный файл в каталоге Git'а (.git/config) в том репозитории, где вы находитесь в данный момент. 
// Эти параметры действуют только для данного конкретного репозитория. 
// Настройки на каждом следующем уровне подменяют настройки из предыдущих уровней, 
// то есть значения в .git/config перекрывают соответствующие значения в /etc/gitconfig.

// Имя пользователя и имейл
// $ git config --global user.name "John Doe"
// $ git config --global user.email johndoe@example.com

// Выбор редактора
// $ git config --global core.editor emacs (тут emacs можно и другой)
// Утилита сравнения
// встроенная diff-утилита, которая будет использоваться для разрешения конфликтов слияния
// kdiff3, tkdiff, meld, xxdiff, emerge, vimdiff, gvimdiff, ecmerge и opendiff, 
// $ git config --global merge.tool vimdiff (vimdiff - как пример)

// Проверка настроек
// git config --list

// Также вы можете проверить значение конкретного ключа, выполнив git config {ключ}:
// $ git config user.name


        // // Основы Git Создание Git-репозитория

    // // Создание Git-репозитория
// Создание Git-репозитория
// Первый подход — импорт в Git уже существующего проекта или каталога. (с локального в сервер)
// Второй — клонирование уже существующего репозитория с сервера. (c сервера в локальный)

// Создание репозитория в существующем локальном каталоге (в котором сейчас находимся - переходы $ cd dir  и  $ cd..)
// $ git init
// индексация елементов (добавление изменений но не коммит)
// добавление всех елементов по типу
// $ git add       *.c
// добавление файла
// $ git add       README 
// добавление ВСЕГО
// $ git add . 
// Коммит - обновление изменений 
// $ git commit -m          'initial project version'
// Объединённая запись добавления и коммита
// $ git commit -a -m        'initial project version'

// Клонирование существующего репозитория
// забираем с конкретного сервера, с конкретной папки (просто копируя её адрес), всё что там находится, линией разработки с коммитами
// $ git clone          git://github.com/schacon/grit.git
// Можно изменить каталог присвоив своё имя после URL
// $ git clone           git://github.com/schacon/grit.git           mygrit


    // // Основы Git Запись изменений в репозиторий

// Файлы в рабочем каталоге могут быть:
// * отслеживаемыми - то те файлы, которые были в последнем слепке состояния проекта:
    // - не изменённые;
    // - изменённые;
    // - подготовленные к коммиту;
// * не отслеживаемыми - файлы, которые не входили в последний слепок состояния и не подготовлены к коммиту.

    // Определение состояния файлов
// Что бы узнать в каком состоянии файлы, в данном каталоге стоит прописать
// $ git status

    // Отслеживание новых файлов
// Для того что бы отслеживать новые файлы надо их добавить 
// $ git add . - добавить все файлы
// $ git add filename - добавить файл по имени
// $ git add *.filetype - добавить все файлы по типу
// Если изменить не закоментированный файл после выполнения git add, 
// то придётся снова выполнить git add, чтобы проиндексировать последнюю версию файла

    // Игнорирование файлов
// Что бы игнорировать файлы при отслеживании, надо создать файл .gitignore и перечислить в нём все не нужные индексированию файлы
// *.[oa]  - игнорировать любые файлы заканчивающиеся на .o или .a — объектные и архивные файлы
// *~  -  игнорировать все файлы заканчивающиеся на тильду (~)

// К шаблонам в файле .gitignore применяются следующие правила:

// - Пустые строки, а также строки, начинающиеся с #, игнорируются.
// - Можно использовать стандартные glob шаблоны.
// - Можно заканчивать шаблон символом слэша (/) для указания каталога.
// - Можно инвертировать шаблон, использовав восклицательный знак (!) в качестве первого символа.

// # не обрабатывать файлы, имя которых заканчивается на .a
// *.a
// # НО отслеживать файл lib.a, несмотря на то, что мы игнорируем все .a файлы с помощью предыдущего правила
// !lib.a
// # игнорировать только файл TODO находящийся в корневом каталоге, не относится к файлам вида subdir/TODO
// /TODO
// # игнорировать все файлы в каталоге build/
// build/
// # игнорировать doc/notes.txt, но не doc/server/arch.txt
// doc/*.txt
// # игнорировать все .txt файлы в каталоге doc/
// doc/**/*.txt

    // Просмотр индексированных и неиндексированных изменений
// $ git diff
// git diff --cached - просмотр что вы проиндексировали и что войдёт в следующий коммит
// git diff --staged - сравнивает ваши индексированные изменения с последним коммитом

    // Фиксация изменений
// $ git commit - откроет новое окно и покажет где изменения, попросит написать коментарий к комиту
// $ git commit -v - откроет окно, покажет где и какие изменения и попросит написать комент к комиту
// $ git commit -m "" - без ного окна добавления коментария к новому комиту
    
    // Игнорирование индексации
// $ git commit -a -m '' - быстрое индексирование (старый файлов) и коммит с описанием в 1 строку 

    // Удаление файлов
// git rm name.file - физически удаляет файл, нужно находиться в одном каталоге с ним
// git rm -f - физически удаляет проиндексированный файл
// git rm --cashed name.file - удаляет только индексацию определённого файла
// git rm namecatalog/ - физически удаляет файлы в каталоге
// git rm .type - физически удаляет все файлы определённого типа
//  /   -  можно комбинировать что и где удалять через

    // Перемещение файлов
// $ git mv file_from file_to


        // Просмотр истории коммитов
    // Просмотр истории коммитов
// git log - показывает историю репозитория
// git log -p -2  - показывает разницу истории репозитория последних двух изменений 
// git log -p --word-diff  - получить дельту по словам (удобны при работе с длинным текстом)
// git log -U1 --word-diff  - получить дельту по словам до одной строки (слова)
// git log --stat  - получить статистику по каждому коммиту

// git log --pretty=  -  позволяет изменить формат вывода лога

// git log --pretty=oneline   -  выводит каждый коммит в одну строку, в дополнение к нему есть
// short, full, и fuller  -  практически не меняя формат вывода, позволяют выводить меньше или больше деталей соответственно:

// git log --pretty=format:" "  -  позволяет создать собственный формат вывода лога. 
// $ git log --pretty=format:"%h - %an, %ar : %s"  - пример
// Форматы:
// %H	- Хеш коммита
// %h	- Сокращённый хеш коммита
// %T	- Хеш дерева
// %t	- Сокращённый хеш дерева
// %P	- Хеши родительских коммитов
// %p	- Сокращённые хеши родительских коммитов
// %an	- Имя автора
// %ae	- Электронная почта автора
// %ad	- Дата автора (формат соответствует параметру --date=)
// %ar	- Дата автора, относительная (пр. "2 мес. назад")
// %cn	- Имя коммитера
// %ce	- Электронная почта коммитера
// %cd	- Дата коммитера
// %cr	- Дата коммитера, относительная
// %s	- Комментарий

// git log --graph  -  показывает историю ветвлений и слияний 
// $ git log --pretty=format:"%h %s" --graph   - пример

// Параметр	                        Описание
// -p	                Для каждого коммита показывать дельту внесённых им изменений.
// --word-diff	        Показывать изменения на уровне слов.
// --stat	            Длякаждого коммита дополнительно выводить статистику по изменённым файлам.
// --shortstat	        Показывать только строку changed/insertions/deletions от вывода с опцией --stat.
// --name-only	        Показывать список изменённых файлов после информации о коммите.
// --name-status	    Выводить список изменённых файлов вместе с информацией о добавлении/изменении/удалении.
// --abbrev-commit	    Выводить только первые несколько символов контрольной суммы SHA-1 вместо всех 40.
// --relative-date	    Выводить дату в относительном формате (например, "2 weeks ago") вместо полной даты.
// --graph	            Показывать ASCII-граф истории ветвлений и слияний рядом с выводом лога.
// --pretty	            Отображать коммиты в альтернативном формате. Возможные параметры: 
// oneline, short, full, fuller и format (где вы можете указать свой собственный формат).


    // Ограничение вывода команды log
// параметры, которые дают возможность отобразить часть коммитов
// --grep       -  позволяет искать по ключевым словам в сообщении.
// --all-match  -   позволяет искать по двум критериям сразу
//  Опция	                Описание
// -(n)	                    Показать последние n коммитов
// --since, --after	        Ограничить коммиты теми, которые сделаны после указанной даты.
// --until, --before	    Ограничить коммиты теми, которые сделаны до указанной даты.
// --author	                Показать только те коммиты, автор которых соответствует указанной строке.
// --committer	            Показать только те коммиты, коммитер которых соответствует указанной строке.

// gitk - интерфейс для визуального просмотра истории


    // // Основы Git - Отмена изменений

// Изменение последнего коммита
// $ git commit --amend    -  берёт индекс последнего коммита и использует его для нового (менят имя и состояние последнего коммита)

// Отмена индексации файла
// $ git reset HEAD file.name   -  отмена индексации в конкретном файле 

// Отмена изменений файла
// $ git checkout -- file.name  -  приводит конкретный файл к его последнему состоянию (без отмены индексации) 
