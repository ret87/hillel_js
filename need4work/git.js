// shift + Z - 2 раза, закрытие всплывающего окна
// TAB - 2 раза, во время написания команды - выдаст подсказки основываясь на том что вы уже написали, тоже самое работает и для опций
// $ git config --global alias.ci commit    - создания псевдонима CI для записи commit (сокращенное написание команды)
// $ git config --global alias.unstage 'reset HEAD --'      - можно записывать даже несколько команд в один сокр псевдоним
// gitk - интерфейс для визуального просмотра истории

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

// Имя пользователя и имейл
// $ git config --global user.name "John Doe"
// $ git config --global user.email johndoe@example.com

// Утилита сравнения
// встроенная diff-утилита, которая будет использоваться для разрешения конфликтов слияния
// kdiff3, tkdiff, meld, xxdiff, emerge, vimdiff, gvimdiff, ecmerge и opendiff, 
// $ git config --global merge.tool vimdiff (vimdiff - как пример)

// Проверка настроек
// git config --list

// Создание репозитория в существующем локальном каталоге (в котором сейчас находимся - переходы $ cd dir  и  $ cd..)
// $ git init

// git rm --cached имя.папки - удалит созданный ранее репозиторий

// добавление ВСЕХ не отслеживаемых файлов
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

    // GIT IGNORE global:
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

// git diff - Просмотр индексированных и неиндексированных изменений
// git diff --cached - просмотр что вы проиндексировали и что войдёт в следующий коммит
// git diff --staged - сравнивает ваши индексированные изменения с последним коммитом

    // Фиксация изменений
// $ git commit - откроет новое окно и покажет где изменения, попросит написать коментарий к коммиту
// $ git commit -v - откроет окно, покажет где и какие изменения и попросит написать комент к коммиту
// $ git commit -m "" - без ного окна добавления коментария к новому коммиту
    
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
// --grep позволяет искать по ключевым словам в сообщении.
// --all-match  -   позволяет искать по двум критериям сразу
//  Опция	                Описание
// -(n)	                    Показать последние n коммитов
// --since, --after	        Ограничить коммиты теми, которые сделаны после указанной даты.
// --until, --before	    Ограничить коммиты теми, которые сделаны до указанной даты.
// --author	                Показать только те коммиты, автор которых соответствует указанной строке.
// --committer	            Показать только те коммиты, коммитер которых соответствует указанной строке.

// Перезапись/изменение последнего коммита
// $ git commit --amend -m ''  - берёт индекс последнего коммита и использует его снова (изменят имя и состояние последнего коммита)

// Отмена индексации файла
// $ git reset HEAD file.name   -  отмена индексации в конкретном файле 
// $ git reset HEAD ~N(число)   -  отмена индексации в последних N коммитах 
// $ git reset --hard HEAD ~N(число)   -  отмена изменений в последних N коммитах ПОЛНОСТЬЮ (с помощью HARD) 
// $ git reset --soft HEAD ~N(число)   -  отмена индексации в последних N коммитах, код остаётся, коммиты удаляются  (с помощью SOFT) 

// Отмена изменений файла
// $ git checkout -- file.name - удаляет все последние изменения в неиндексированном файле до крайнего коммита 

    // Отображение удалённых репозиториев
// $ git remote         - выведет сокращённые имена, всех отслеживаемых удалённых репозиториев 
// $ git remote -v      - выведет URL всех сокращённых имён отслеживаемых удалённых репозиториев

    // Добавление удалённых репозиториев
// git remote add [сокр имя] [url]    - добавление удалённого репозитория

    // Fetch и Pull
// git fetch [сокр имя]    - для получения данных из удалённых проектов
// git fetch origin - извлекает все наработки, отправленные (push) на этот сервер после того, 
// как вы склонировали его (или получили изменения с помощью fetch) - синхронизирует ваш локальный реп с удалённым

// git pull [сокр имя]     - автоматически извлекает и затем сливает данные из удалённой ветки в вашу текущую ветку
// git pull, извлекает (fetch) данные с сервера, с которого вы изначально склонировали, 
// и автоматически пытается слить (merge) их с кодом, над которым вы в данный момент работаете

    // Push
// git push [удал. сервер] [ветка]  - загружает с локального репозитория на удалённый изменённые данные (если есть права на запись)
// добавить на удалённый репозиторий свою версию можно только, если перед тобой их никто не менял, иначе надо пулл потом пуш
// git push --force     - чтобы переписать историю на сервере

    // Инспекция удалённого репозитория
// git remote show [удал. сервер]   - для просмотра информации про удалённый сервер 
// (ветки, какая будет запулена, каких веток нет в локальной версии, какие удалены у вас, какие удалённые будут влиты)

    // Удаление и переименование удалённых репозиториев
// $ git remote rename староеимя новоеимя   - переименовывает сокращённое имя репозитория
// также меняет имена удалённых веток
// $ git remote rm [удал сервер]    - удаляет отслеживание репозитория

    // Создание меток
// $ git tag -a name -m 'coment'  - создание ветки
// $ git show name  - показать инфу по имени ветки

    // Подписанные метки
// $ git tag -s name -m 'coment'    - создаёт подпись к метке с помощью GPG

    // Легковесные метки
// $ git tag name_lw    - лекговесная метка

    // Верификация меток
// git tag -v [имя метки]   - верификация меток

    // Выставление меток позже
// $ git tag -a [имя метки] -m 'коментарий' [контрольная сумма коммита]    - выставление меток по существующему коммиту

    // Обмен метками
// $ git push origin(имя ветки) [имя метки]  - выкладывание меток на удалённый сервер
// $ git push origin(имя ветки) --tags  - отправляет все метки на заданную ветку

        
        // // Ветвление в Git Основы ветвления и слияния

        // Ветвление в Git Вступление
// $ git branch name    - создать новую ветку с именем 
// $ git checkout name    - перейти на созданную ветку

        // Ветвление в Git Основы ветвления
    // Основы ветвления    
// $ git checkout -b name   - создать и сразу перейти на новую ветку
// $ git branch -d name     - удалить ветку по имени
    // Основы слияния
// $ git merge nameFrom  - осуществляет слияние с той веткой в которой вы находитесь
// $ git merge имяВеткиКоторуюСливаете    - осуществляет слияние с той веткой в которой вы находитесь
    // Основы конфликтов при слиянии
// $ git status   - так же для получения информации пост фактум, о файлах которые не прошли слияние (unmerged)


        // Ветвление в Git Управление ветками
    // Управление ветками
// $ git branch   - показывает список наших веток
// $ git branch -v  - показывает последний коммит для всех веток
// $ git branch --merged  - покажет все слитые ветки, в ныне находяшуюся 
// $ git branch --no-merged  - покажет все не слитые ветки, в с той в которой сейчас находимся 
// $ git branch -D name   - удалит ветку даже если вы не слили с неё наработки 


        // Ветвление в Git - Удалённые ветки

    // Удалённые ветки
// $ git fetch origin   - синхронизирует удалённые ветки репозитория с вашими

    // Отправка изменений
// $ git merge имяУдСер/НоваяУдВетка    - только так можно слить себе ветку с сервера, которой нет у нас на локальном репозитории
// $ git merge origin/serverfix         - пример
// $ git checkout --track имяУдСер/НоваяУдВетка  - отслеживать ветку с удал сервера и создать её у себя на локал с тем же именем
// $ git checkout --track origin/serverfix  - пример
// $ git checkout -b имяКакУдВетки имяУдСер/НоваяУдВетка  -создать локально ветку которой у вас нет, с тем же именем что и у удал
// так же эта команда создаст локальную ветку автоматически отслеживаемую с указанного вами сервера
// $ git checkout -b serverfix origin/serverfix - пример

    // Отслеживание веток
// $ git pull [сокр имя]    - таким образом скопируются и перезапишутся все данные с сервера на локальный реп
// $ git checkout --track имяУдСер/НоваяУдВетка  - отслеживать ветку с удал сервера и создать её у себя на локал с тем же именем
// $ git checkout --track origin/serverfix  - пример
// $ git checkout -b [ветка] [удал. сервер]/[ветка]   - созд отслеживаемую ветку удалённого сервера у себя на локал репоз с любым имен

    // Удаление веток на удалённом сервере
// git push [удал. сервер] :[ветка]     - удалить ветку на удалённом сервере
// $ git push origin :serverfix     - пример


        // Ветвление в Git - Перемещение (rebase)
        // Осуществлять только с локальными ветками, теми которые ещё не были запушены на удалённый репозиторий
        // - Перемещение применяет изменения из одной линии разработки в другую в том порядке, в котором они были представлены, 
        // тогда как слияние объединяет вместе конечные точки двух веток.
        // - Перемещение - все изменения из одной ветки по порядку повторить на другой
        // - Позволяет реализацию определённой ветки перебрасывать в любую часть кода (в другие ветки)
    // Основы перемещения
// $ git rebase имя.ветки   - перемещение всех изменений из находящейся вами ветки в указанную
    // Более интересные перемещения (перемещение от не прямых потомков)
// $ git rebase --onto ветка.куда.слить ветка.общий.предок ветка.откуда.взять   - слить данные из не прямого потомка ветки
// $ git checkout ветка.куда.слить      - далее обычная перемотка (обновление ветки)
// $ git merge ветка.откуда.слить       - далее обычная перемотка (обновление ветки)
    // - пример
// $ git rebase --onto master server client     
// “переключиться на ветку client, взять изменения от общего предка веток client и server и повторить их на master”
// $ git checkout master
// $ git merge client
// после обязательно переключиться в главную ветку и задать стандартную процедуру слияния с не прямым предком 

// $ git rebase   ветка.куда.слить   ветка.откуда.взять   - слить данные из прямого потомка ветки вконец другой ветки
// $ git checkout ветка.куда.слить      - далее обычная перемотка (обновление ветки)
// $ git merge ветка.откуда.слить       - далее обычная перемотка (обновление ветки)

    // Скопировать из удалённого репозитория на локальный в мастер и сразу добавить к нему ветку в которой работаешь
// git pull --rebase сокр.имя.уд.сервера имя.локальной.ветки  
// git pull --rebase origin master