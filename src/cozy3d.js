export const controls = [
  {
    legend: 'Выберите настройки качества',
    name: 'renders-quality',
    type: 'checkbox',
    values: [
      {
        title: 'Максимальная фотореалистичность',
        value: 'best',
        default: true
      }
    ]
  },
  {
    legend: 'Выберите наполненность помещения деталями',
    name: 'detalisation',
    type: 'radio',
    values: [
      {
        title: 'Пусто',
        value: 'empty',
        default: false
      },
      {
        title: 'Мебель',
        value: 'furniture',
        default: false
      },
      {
        title: 'Мелкие предметы',
        value: 'details',
        default: true
      },
      {
        title: 'Много мелких предметов',
        value: 'extra',
        default: false
      },
    ]
  },
  {
    legend: 'Нужно ли подбирать 3d модели?',
    name: '3d-models',
    type: 'checkbox',
    values: [
      {
        title: '3d-модели нужно подобрать',
        value: 'need-models',
        default: false
      }
    ]
  },
  {
    legend: 'Проект горит или работаем в штатном режиме?',
    name: 'urgency',
    type: 'checkbox',
    values: [
      {
        title: 'Работа срочная!',
        value: 'hot',
        default: false
      }
    ]
  },
  {
    legend: 'Введите параметры помещения',
    name: 'premise-props',
    type: 'text',
    values: [
      {
        title: 'Общая площадь в кв.м',
        value: 'square',
        default: 60
      },
      {
        title: 'и количество помещений',
        value: 'rooms-number',
        default: 5
      },
    ]
  },
  {
    legend: 'Количество рендеров на помещение',
    name: 'renders-number',
    type: 'radio',
    round: true,
    values: [
      {
        title: '3',
        value: '3',
        default: true
      },
      {
        title: '4',
        value: '4',
        default: false
      },
      {
        title: '5',
        value: '5',
        default: false
      },
      {
        title: '6',
        value: '6',
        default: false
      },
      {
        title: '7',
        value: '7',
        default: false
      },
    ]
  },
];