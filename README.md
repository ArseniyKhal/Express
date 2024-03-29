Установка

Для запуска проекта на компьютере должен быть установлен Docker (https://www.docker.com/products/docker-desktop/):

    Windows — Docker Desktop for Windows.
    MacOS — Docker Desktop for Mac.
    Linux — в зависимости от версии: CentOS, Debian, Fedora, Raspbian, Ubuntu.

Запустите Docker Desktop.

Откройте терминал (macOS и Linux) или Git Bash (Windows) и введите команду:

docker run -d -p 127.0.0.1:27017:27017 --name library mongo

Склонируйте репозиторий и установите зависимости (dependencies, devDependencies).

cd skypro_node-coursework
npm install

Создайте файл .env (пример всех переменных окружения находится в файле .env.example)

Для запуска сервера выполните команду

npm run start

Для запуска в development режиме выполните команду

npm run dev

Сервер будет доступен по адресу http://127.0.0.1:<PORT>.
Задание

Создать сервер на Express.js + MongoDB на основе REST API из предыдущего урока.

REST API должно быть доступно по адресу 127.0.0.1:3005.

REST API должно:

    Отдавать список всех пользователей.
    Отдавать данные по пользователю на основе id.
    Изменять данные пользователя на основе id.
    Удалять данные пользователя на основе id.
    Отдавать список всех книг.
    Отдавать данные по книге на основе id.
    Изменять данные книги на основе id.
    Удалять данные книги на основе id.

Также REST API должно:

    Возвращать ошибку 404, если сущность не найдена или был запрошен несуществующий роут.
    Возвращать ошибку 500, если что-то пошло не так при обработке запроса.
    При успешном ответе сервера возвращать JSON-сущности.

Формат данных пользователя:

    Имя, строка, не менее 2 символов.
    Фамилия, строка, не менее 2 символов.
    Username, строка, не менее 5 символов.

Формат данных книги:

    Заголовок, строка, не менее 2 символов.
    Автор, строка, не менее 2 символов.
    Год выпуска, число.

Чек-лист для самопроверки

    В файле package.json в секции scripts есть dev, который запускает nodemon, и start, который запускает сервер в обычном режиме.
    Для чтения переменных окружения используется пакет dotenv.
    В проекте есть .env.example, файл .env добавлен в .gitignore.
    При запуске приложение подключается к серверу mongo.
    При разных запросах сервер не падает и в консоли нет ошибок.
    Настроен CORS через middleware.
    Добавлен middleware логирования, который выводит в консоль адрес, на который пришел запрос (originalUrl).
    У проекта понятная структура, код разбит на роуты, модели, контроллеры и middleware.
