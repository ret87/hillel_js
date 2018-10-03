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
