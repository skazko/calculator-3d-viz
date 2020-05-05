interface IControlValueBase {
  title: string;
  value: string;
  cost?: number;
}

interface IControlValueItem extends IControlValueBase {
  default: boolean;
}

interface IControlValueTextItem extends IControlValueBase {
  default: number;
}

export type IControlValue = IControlValueItem | IControlValueTextItem;

interface IControlItemBase {
  legend: string;
  name: string;
  role: string;
}

interface IControlItemRadio extends IControlItemBase {
  type: 'radio';
  values: IControlValueItem[];
  round?: boolean;
}

interface IControlItemCheckbox extends IControlItemBase {
  type: 'checkbox';
  values: IControlValueItem[];
}

interface IControlItemText extends IControlItemBase {
  type: 'text';
  values: IControlValueTextItem[];
}

export type IControlItem =
  | IControlItemRadio
  | IControlItemText
  | IControlItemCheckbox;
