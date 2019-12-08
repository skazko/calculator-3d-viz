const CONTROL_CLASS = {
  BASE: 'button-label',
  ROUND: 'button-label_round',
  CHECKBOX: 'button-label_checkbox',
  CHECKED: 'button-label_checked',
  CHECKBOX_CHECKED: 'button-label_checkbox-checked'
}

export function getControlClass({round, checkbox, checked}) {
  const {BASE, ROUND, CHECKBOX, 
    CHECKED, CHECKBOX_CHECKED} = CONTROL_CLASS;
  const r = !round ? '' : ROUND;
  const cb = !checkbox ? '' : CHECKBOX;
  const c = !checked ? '' : CHECKED;
  const ccb = !(checked && checkbox) ? '' : CHECKBOX_CHECKED;
  
  return [BASE, r, cb, c, ccb].filter(c => !!c).join(' ');
}