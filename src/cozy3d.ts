import {
  CHECKBOX,
  RADIO,
  TEXT,
  RENDERS_QUALITY,
  BEST,
  THREE_D_MODELS,
  URGENCY,
  HOT,
  DETALISATION,
  FURNITURE,
  DETAILS,
  EXTRA,
  NEED_MODELS,
  PREMISE,
  SQUARE,
  ROOMS_NUMBER,
  RENDERS_NUMBER,
} from './constants';

import { IControlItem } from './calc';

export const controls: IControlItem[] = [
  {
    legend: 'Введите параметры помещения',
    name: 'premise',
    type: 'text',
    role: 'v',
    values: [
      {
        title: 'Общая площадь в кв.м',
        value: 'square',
        default: 10,
      },
      {
        title: 'и количество помещений',
        value: 'rooms-number',
        default: 1,
      },
    ],
  },
  {
    legend: 'Выберите наполненность помещения деталями',
    name: 'detalisation',
    type: 'radio',
    role: '0',
    values: [
      {
        title: 'Мебель',
        value: 'furniture',
        default: false,
        cost: 10,
      },
      {
        title: 'Мелкие предметы',
        value: 'details',
        default: true,
        cost: 20,
      },
      {
        title: 'Много мелких предметов',
        value: 'extra',
        default: false,
        cost: 30,
      },
    ],
  },
  {
    legend: 'Выберите настройки качества',
    name: 'renders-quality',
    type: 'checkbox',
    role: '0',
    values: [
      {
        title: 'Максимальная фотореалистичность',
        value: 'best',
        default: true,
        cost: 10,
      },
    ],
  },
  {
    legend: 'Нужна ли постобработка в фотошоп',
    name: 'postproduction',
    type: 'checkbox',
    role: '1',
    values: [
      {
        title: 'Сделать постобработку',
        value: 'photoshop',
        default: false,
        cost: 800,
      },
    ],
  },
  {
    legend: 'Нужно ли подбирать 3d модели?',
    name: '3d-models',
    type: 'checkbox',
    role: '0',
    values: [
      {
        title: '3d-модели нужно подобрать',
        value: 'need-models',
        default: false,
        cost: 50,
      },
    ],
  },
  {
    legend: 'Проект горит или работаем в штатном режиме?',
    name: 'urgency',
    type: 'checkbox',
    role: 'k',
    values: [
      {
        title: 'Работа срочная!',
        value: 'hot',
        default: false,
        cost: 1.5,
      },
    ],
  },
  {
    legend: 'Количество рендеров на помещение',
    name: 'renders-number',
    type: 'radio',
    round: true,
    role: 'v',
    values: [
      {
        title: '3',
        value: '3',
        default: true,
      },
      {
        title: '4',
        value: '4',
        default: false,
      },
      {
        title: '5',
        value: '5',
        default: false,
      },
      {
        title: '6',
        value: '6',
        default: false,
      },
      {
        title: '7',
        value: '7',
        default: false,
      },
    ],
  },
];

export const initialState = Object.fromEntries(
  controls.map((controlItem) => {
    return [controlItem.name, getDefaultValue(controlItem)];
  })
);

interface IState {
  [DETALISATION]: 'furniture' | 'details' | 'extra';
  [key: string]: any;
}

function getDefaultValue(controlItem: IControlItem) {
  switch (controlItem.type) {
    case CHECKBOX:
      return controlItem.values.filter((v) => v.default).map((v) => v.value);
    case TEXT:
      return Object.fromEntries(
        controlItem.values.map((v) => [v.value, v.default])
      );
    case RADIO:
      const defaultValue = controlItem.values.find((v) => v.default);
      if (defaultValue) {
        return defaultValue.value;
      }
      break;
    default:
      throw new Error(
        'control item should have property type with value checkbox, radio or text'
      );
  }
}

export function calculate(state: IState) {
  // Hard coded...
  // Calc main jobs
  // Calc volume: max of square or rooms * 10m2

  const volume = Math.max(
    state[PREMISE][ROOMS_NUMBER] * 10,
    state[PREMISE][SQUARE]
  );

  // Calc rate
  const baseRate = 250;

  const detalisationRate = {
    [FURNITURE]: 100,
    [DETAILS]: 200,
    [EXTRA]: 250,
  };

  const photorealisticRate = state[RENDERS_QUALITY][0] === BEST ? 50 : 0;

  const chooseModelsRate =
    state[THREE_D_MODELS][0] === NEED_MODELS ? baseRate * 0.2 : 0;

  const rate =
    baseRate +
    detalisationRate[state[DETALISATION]] +
    photorealisticRate +
    chooseModelsRate;

  const mainJob = volume * rate;

  // Calc postproductin job

  const postproductionRate =
    state['postproduction'][0] === 'photoshop' ? 300 : 0;

  const postproductionVolume =
    state[PREMISE][ROOMS_NUMBER] * state[RENDERS_NUMBER];

  const postproductionJob = postproductionRate * postproductionVolume;

  // Calc additional views

  const addViewsRate = 800;

  const addViewsVolume =
    state[PREMISE][ROOMS_NUMBER] * (state[RENDERS_NUMBER] - 3);

  const addViewsJob = addViewsRate * addViewsVolume;

  // Calc job cost

  const urgencyRate = state[URGENCY][0] === HOT ? 1.5 : 1;

  const jobCost = (mainJob + postproductionJob + addViewsJob) * urgencyRate;

  return jobCost;
}
