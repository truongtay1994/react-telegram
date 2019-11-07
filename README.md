# CREATE-PARSEL-APP

## Запуск

```bash
yarn
yarn start
```

## Структура проекта

### Components

Содержит в себе компоненты, сортированные по абстрактным ролям ( form, content, cards, ..., etc ) 

Особенности Компонента:

- Чистый, небольшой, независимый от контекста
- Не использует и не изменяет глобальный стейт
- Не ипользует REST / GRAPHQL
- Не использует Контейнеры
- Может использовать другие Компоненты
- Не содержит сложную программную логику
- Можно рассматривать его как чистый шаблон верстки
- Старается не содержать отступы и фиксированные размеры, делегируя эту задачу на оборачивающий блок, который будет использовать этот Компонент


### Containers

Содержит в себе контейнеры, сортированные по сущностям ( pages, fundamental, news, user, ...., etc)
pages - это полностью собранные страницы
fundamental - это фундаментальные компоненты построения страницы ( header, footer, aside, navigation, ..., etc )

Особенности Контейнера:

- Содержит в себе основную программную логику и может использовать REST / GRAPHQL, а также использовать и менять глобальный стейт
- Может использовать другие Контейнеры и Компоненты
- Содержит в себе ограниченное количество стилей, в противном случае лучше вынести их в отдельный Компонент
- Является логически изолированной секцией с выводом данных, используя компоненты, но также может связывать эти секции в большие блоки и страницы

### Constants

Содержит в себе статичные данные, которые необходимо использовать глобально по всему проекту. Также содержит в себе значения различных условных флагов - свитчей, которые приходят с бэка. Допустим, если с бека приходит status, который может иметь несколько разный значений, лучше вынести эти значения в константы. Конвенция именования - UPPER_SNAKE_CASE.

Зачем константы, если можно просто текстом проверить статус ` status === 'fail' `?
- Константы лучше для чтения и понимания, а также если данные с бека поменяются, то нам надо будет поменять это только в одном месте.

Пример статусов:

`
  const STATUSES = {
    SUCCESS: 'success',
    FAIL: 'fail',
    PROCESS: 'process',
  }
`

### Graphql

Содержит в себе graphql фрагменты, мутации, ресолверы и запросы данных. В каждой папке разбиваем файлы по сущностям ( news, user, ..., etc ). 

Фрагменты.

Разбиваем фрагменты по типам graphql. Названия переменных делаем по шаблону [name + Fragment] в camelCase. Пример, есть модель UserRole, называем фрагмент UserRoleFragment.

Мутации и Запросы

Называем по rest конвенциям в UPPER_SNAKE_CASE.

### Store

Redux хранилище, в разбивкой по сущностям, которые содержат свои types, actions и reducers. Называем по rest конвенциям. Редюсеры не должны содержать в себе какую-либо сложную логику, держать их простым и понятными. 

### Utils

Всю логику и преобразования данных храним тут по сущностям. Также функции помощники, форматтеры, парсеры, селекторы и тд. Придумываем уникальные названия, чтобы использовать напрямую из utils.
