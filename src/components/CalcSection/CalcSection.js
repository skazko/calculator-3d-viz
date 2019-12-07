import React, {useState} from 'react';
import ControlItem from '../ConrolItem';
import './CalcSection.css';

//TODO: replace checked for picked

const CalcSection = ({control}) => {

  const {legend, values, name, type, round=false} = control;
  const defVal = createDefaultValues(type, values);
  const [checked, setChecked] = useState(defVal);

  const handleChange = (e) => {
    const type = e.target.type;
    const value = e.target.value;
    const name = e.target.name;

    switch (type) {
      case 'checkbox':
        setChecked(oldChecked => getNewChecked(value, oldChecked));
        break;
      case 'radio':
        setChecked([value]);
        break;
      case 'text':
        setChecked(oldChecked => getNewInput({value, name}, oldChecked));
        break;
      default:
        throw new Error (`${type} is not supported! 
        Use only checkbox, radio and text inputs`);
    }
  }; 

  const controlsView = values.map((val) => (
    <ControlItem 
      checked={checked} 
      round={round} 
      val={val} 
      name={name} 
      type={type} 
      key={`${name}-${val.value}`} 
      handleChange={handleChange}/>
  ));
  
  return (
    <fieldset className="calc-section">
      <legend className="calc-section__legend">
        {legend}
      </legend>
      {controlsView}
    </fieldset>
  );
}

function createDefaultValues(type, values) {
  return type === 'text' ? 
    values.map(v => ({ name: v.value, value: v.default })) :
    values.filter(v => v.default).map(v => v.value)
}

function getNewChecked(currentValue, checked) {
  const isCurrentValueChecked = checked.includes(currentValue);
  const idx = checked.findIndex(v => v === currentValue);

  return isCurrentValueChecked ? 
    [...checked.slice(0, idx), ...checked.slice(idx + 1)] :
    [...checked, currentValue];
} 

function getNewInput({name, value}, picked) {
  return picked.map(item => item.name === name ? 
    {...item, value} : 
    {...item})
}

export default CalcSection;