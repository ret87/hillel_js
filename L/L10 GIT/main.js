'use strict';
console.log('GIT');

        // // Введение
    // Основы

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


// Состояния в GIT

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


    
    // Установка Git
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


    // Первоначальная настройка Git

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


        // Основы Git

    // Создание Git-репозитория
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


    // Запись изменений в репозиторий

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
