import {
  CHECKBOX, RADIO, TEXT, RENDERS_QUALITY, BEST, THREE_D_MODELS,
  URGENCY, HOT, DETALISATION, EMPTY, FURNITURE, DETAILS, 
  EXTRA, NEED_MODELS, PREMISE, SQUARE, ROOMS_NUMBER, 
  RENDERS_NUMBER
} from './constants';

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
    name: 'premise',
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

export const initialState = Object.fromEntries(controls.map(c => {
  return [c.name, getValue(c.type, c.values)];
}));

function getValue(type, values) {
  switch (type) {
    case CHECKBOX: 
      return values.filter(v => v.default).map(v => v.value);
    case TEXT:
      return Object.fromEntries(values.map(v => [v.value, v.default]));
    case RADIO:
      return values.find(v => v.default).value;
    default: 
      return null
  }
}

export function calculate(state) {
  let k = 1; 
  if (state[RENDERS_QUALITY][0] === BEST) {
    k = k * 1.5;
  };
  switch (state[DETALISATION]) {
    case EMPTY: 
      k = k * 0.6;
      break
    case FURNITURE: 
      k = k * 0.9;
      break;
    case EXTRA: 
      k = k * 1.4;
      break;
    case DETAILS: 
    default: 
      break;
  }
  if (state[THREE_D_MODELS][0] === NEED_MODELS) {
    k = k * 1.5;
  }
  if (state[URGENCY][0] === HOT) {
    k = k * 2;
  }

  const baseRate = 300;
  const rate = k * baseRate;
  const addPerView = 500;

  const rooms = parseInt(state[PREMISE][ROOMS_NUMBER]);
  let square = parseFloat(state[PREMISE][SQUARE])
  square = Math.max(rooms * 10, square);
  const imagePerRoom = parseInt(state[RENDERS_NUMBER]);
  const addCost = imagePerRoom > 3 ? 
    rooms * (imagePerRoom - 3) * addPerView : 
    0;
    
  return Math.ceil(square * rate) + addCost;
}