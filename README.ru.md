<div align="center">

# BlockCity - Блоксити

**Блоксити - платформа маленьких 3D-мест в браузере: обби-башня, скоростной забег, «лава поднимается», сбор монеток, песочница и горка на ватрушке, с аватаром, друзьями-ботами, значками и каталогом. Работает в браузере без сервера и без интернета: откройте `index.html` или играйте онлайн.**

[**▶ Играть онлайн →**](https://alexalesha.github.io/BlockCity/) &nbsp;·&nbsp; [English version of this file](README.md)

[![Status](https://img.shields.io/badge/status-stable-brightgreen)](#) [![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML) [![Website](https://img.shields.io/badge/Website-open-0A84FF?logo=googlechrome&logoColor=white)](https://alexalesha.github.io/BlockCity/) [![Built with Claude Code](https://img.shields.io/badge/Built_with-Claude_Code-D97757?logo=claude&logoColor=white)](https://claude.com/claude-code)

Код, тесты и документация этого проекта написаны Claude (Anthropic) в Claude Code. Идеи, проверка и решения - Алексей.

</div>

> Фан-концепт, не связан с Roblox Corporation. Все места, персонажи и названия свои и сделаны кодом.

![Главный экран](docs/screens/home.png)

![Обби: Башня](docs/screens/obby.png)

![Горка на ватрушке](docs/screens/tube.png)

## Что есть в игре

- **Шесть мест:** Обби: Башня, Скоростной забег, Лава поднимается, Собери монетки, Песочница (строительство) и Горка на ватрушке; боты играют рядом.
- Редактор аватара и каталог, профиль со значками, друзья, чат в местах, таблица игроков (Tab).
- Интерфейс на русском и английском; настройки; прогресс сохраняется в браузере.
- three.js r149 в `vendor/` (MIT).

## Управление

| Клавиша | Действие |
|---|---|
| W A S D или стрелки | ходьба |
| Пробел | прыжок |
| Мышь | камера |
| Enter или / | чат |
| Tab | таблица игроков |
| R | сбросить персонажа |
| Esc | меню |

Где игра это позволяет, клавиши меняются в настройках.

## Запуск у себя

Откройте `index.html` в Chrome, Edge или Firefox. Всё лежит в репозитории, ничего не скачивается.

## Проверки

Законы - проверки Playwright в `tests/`. Они открывают страницу по файловому адресу в безголовом
Chromium, по одной за раз:

```
npm install
npx playwright install chromium
npm test
```

Захват мыши в проверках всегда поддельный: настоящий `requestPointerLock` в безголовом Chromium
на Windows может зажать курсор пользователя.
`npm run screenshots` делает кадры выше.

## История

Игра сделана в сборнике [Hub](https://github.com/ALEXalesha/ALEXalesha.github.io), там она же работает в Хабе ([играть там](https://alexalesha.github.io/)). Здесь игра лежит вместе с историей коммитов.

## Лицензия

MIT, см. [LICENSE](LICENSE). three.js - MIT.
