// TODO: Create dinamic maps and class creators;

const classes = {
  1: 'calc-control__label',
  2: 'calc-control__label_round',
  4: 'calc-control__label_checkbox',
  8: 'calc-control__label_checked',
}

export const map = getMap(classes);


function getMap(classes) {
  const map = {};
  const base = new RegExp(`${classes[1]}_`);
  for (let [value, cls] of Object.entries(classes)) {
    let mapKey = cls.replace(base, '');
    map[mapKey] = parseInt(value);
  }
  return map;
}

export function getType(mask) {
  return Boolean(mask & map.checkbox) ?
    'checkbox' : 'radio';
}

export function isChecked(mask) {
  return Boolean(mask & map.checked);
}

export function addFlags(mask, flags){
  for (let [key, isKey] of Object.entries(flags)) {
    if (isKey) {
      mask = mask | map[key];
    }
  }
  console.log(mask)
  return mask;
}

/**
 * Calculate bit mask from provided keys
 * @param {Object} keys
 * @param {boolean} keys.round True if need _round modifier
 * @param {boolean} keys.checkbox True if need _checkbox modifier
 * @param {boolean} keys.checked True if need _checked modifier
 * @returns {number} Bit mask
 */

export function getMask(keys = {round: false, checkbox: false, checked: false}) {
  // base class (classes[1]) should be always in class string 
  let mask = 1;
  for (let [key, isKey] of Object.entries(keys)) {
    if (isKey) {
      mask = mask | map[key];
    }
  }
  return mask;
}

/**
 * Create string with class names for button label
 * @param {number} state Bit mask
 * @returns {string} Class names string
 */

export function getClass(mask) {
  const output = [];
  for (let [value, cls] of Object.entries(classes)) {
    if (Boolean(mask & value)) {
      output.push(cls);
    }
  }
  return output.join(' ');
}

/**
 * Returns class names string matches provided keys
 * @param {Object} keys 
 * @param {boolean} keys.round True if need _round modifier
 * @param {boolean} keys.checkbox True if need _checkbox modifier
 * @param {boolean} keys.checked True if need _checked modifier
 * @returns {string} Class names string
 */

export function getControlClass(keys) {
  return getClass(getMask(keys));
}