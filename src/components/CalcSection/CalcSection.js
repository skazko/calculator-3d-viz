import React, {useState} from 'react';
import ControlItem from '../ConrolItem';
import './CalcSection.css';

const CalcSection = ({control}) => {
  //TODO: handle multiple default
  const {legend, values, name, type, round=false} = control;
  const defVal = createDefaultValues(type, values);

  const [checked, setChecked] = useState(defVal);

  const handleChange = (e) => {

    if (e.target.type === 'checkbox') {
      let newChecked;
      if (checked.includes(e.target.value)) {
        const idx = checked.findIndex(v => v === e.target.value);
        newChecked = [...checked.slice(0, idx), ...checked.splice(idx + 1)];
      } else {
        newChecked = [...checked, e.target.value];
      }
      setChecked(newChecked);
    } 
    
    if (e.target.type === 'radio') {
      setChecked([e.target.value]);
    } 
    
    if (e.target.type === 'text') {
      const newChecked = checked.map(item => {
        return item.name === e.target.name ? {...item, value: e.target.value} : {...item};
      });
      setChecked(newChecked);
    }
  }; 

  const controlsView = values.map((val) => (
    <ControlItem checked={checked} round={round} val={val} name={name} type={type} key={`${name}-${val.value}`} handleChange={handleChange}/>
  ))
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

export default CalcSection;