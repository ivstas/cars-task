## Запуск

### dev-сервер
- `npm install`
- `npm run dev` для запуска dev-сервера
- открываем `localhost:4000` в браузере

## Проект

Проект собирается с помощью **webpack**.

Главный файл, с которого начинается сборка - `./src/main.js`.

Состояние приложения хранится в `./src/state/`, для хранения данных используются коллекции и модели **backbone** (`./src/models` и `.src/collections`).

Для отображения view используются stateful-компоненты **react**, который подписываются на изменения соответствующих моделей/коллекций **backbone**.
Остальный компоненты - stateless-компоненты **react**. View-слой **backbone** не используется.

#### Стили
Все стили собираются в один глобальный файл, точка входа - `./src/styles/global.less`

