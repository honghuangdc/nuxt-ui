import { defineLocale } from '../composables/defineLocale'

export default defineLocale({
  name: 'Українська',
  code: 'uk',
  messages: {
    inputMenu: {
      noMatch: 'Збігів не знайдено',
      noData: 'Немає даних',
      create: 'Створити "{label}"'
    },
    calendar: {
      prevYear: 'Попередній рік',
      nextYear: 'Наступний рік',
      prevMonth: 'Попередній місяць',
      nextMonth: 'Наступний місяць'
    },
    inputNumber: {
      increment: 'Збільшити',
      decrement: 'Зменшити'
    },
    commandPalette: {
      noMatch: 'Збігів не знайдено',
      noData: 'Немає даних',
      close: 'Закрити'
    },
    selectMenu: {
      noMatch: 'Збігів не знайдено',
      noData: 'Немає даних',
      create: 'Створити "{label}"'
    },
    toast: {
      close: 'Закрити'
    },
    carousel: {
      prev: 'Назад',
      next: 'Далі',
      goto: 'Перейти до {slide}'
    },
    modal: {
      close: 'Закрити'
    },
    slideover: {
      close: 'Закрити'
    },
    alert: {
      close: 'Закрити'
    },
    table: {
      noData: 'Немає даних'
    }
  }
})