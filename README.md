# Домашнее задание к лекции «Unit-тестирование»

# ajs-Unit-tests-Matchers
[![Build status](https://ci.appveyor.com/api/projects/status/i7d998k2khx4ry9g/branch/master?svg=true)](https://ci.appveyor.com/project/marinaustinovich/ajs-unit-tests-matchers/branch/master)



### **Важные моменты**

1. ESLint не должен выдавать ошибок.
2. Jest должен обеспечивать 100-процентное покрытие по строкам для тестируемых функций.
3. Ко всем задачам должен быть подключён AppVeyor и выставлен бейджик статуса.
4. Используйте `import`/`export`, а не `require`.

В качестве шаблона можете использовать [готовый проект](/ci-template).

## Описание установки

```shell
npm init
# При инициалиализации в качестве тестовой команды указать:
# test command: jest --coverage
npm install --save-dev jest babel-jest @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```

Не забудьте про `.babelrc` и `.browserslistrc`.

В `.babelrc`:
```json
{
  "presets": [["@babel/preset-env", {
    "useBuiltIns": "usage",
    "corejs": 3
  }]]
}
```

Запуск тестов:
```shell
npm test
```

## Matchers

### Легенда

Так как в игре вы можете управлять несколькими героями, то во время битвы нужно, чтобы отображался уровень жизни каждого героя в отсортированном порядке: наверху — самые здоровые. Необходимо сделать это и написать соответствующие автотесты.

### Описание

Дан массив с информацией о героях, например:
```javascript
[
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
```
В отсортированном порядке должно выглядеть так:
```javascript
[
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]
```

Убедитесь, что `toBe` работать не будет, но будет работать `toEqual`. Изучите документацию на [`toBe`]() и [`toEqual`]() и выясните в чём разница (а так же термин Deep Equality). Убедитесь, что вы обеспечили 100 % покрытие тестами по строкам.

Можете дополнительно изучить список доступных Matchers для организации сравнения. Этот список есть на странице [Документация по expect](https://jestjs.io/docs/ru/expect).

---
