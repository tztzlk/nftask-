# Logger System

## Описание

Эта система логирования получает поток сообщений с соответствующим временем в формате timestamp. Каждое уникальное сообщение может существовать не более 10 секунд. Система поддерживает методы для проверки возможности печати сообщения, очистки и получения размера текущего логгера.

## Структура

Проект включает следующие файлы:
- `logger.js`: основной файл с реализацией класса `Logger`.
- `README.md`: инструкция по запуску и использованию.

## Использование

### Установка

Убедитесь, что у вас установлен [Node.js](https://nodejs.org/).

### Запуск

1. Склонируйте репозиторий или загрузите файлы проекта.

    ```sh
    git clone https://github.com/tztzlk/nftask-.git
    cd ваш_репозиторий
    ```

2. Запустите программу:

    ```sh
    node logger.js
    ```

### Пример использования

Пример использования класса `Logger` находится в файле `logger.js`:

```javascript
const logger = new Logger();

console.log(logger.shouldPrintMessage(1, "foo"));  // true
console.log(logger.shouldPrintMessage(2, "bar"));  // true
console.log(logger.shouldPrintMessage(3, "foo"));  // false
console.log(logger.shouldPrintMessage(8, "bar"));  // false
console.log(logger.shouldPrintMessage(10, "foo")); // false
console.log(logger.shouldPrintMessage(11, "foo")); // true
console.log(logger.loggerSize());                  // 2
console.log(logger.clean(11));                     // false
console.log(logger.clean(12));                     // true
