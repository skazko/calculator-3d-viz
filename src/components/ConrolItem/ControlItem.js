import React, { useContext } from 'react';
import Input from '../Input';
import CalcControl from '../CalcControl';
import { addFlags } from "../../classNames";
import { CalcState } from '../context';

const ControlItem = ({val, name, type, mask}) => {
  const {value, title} = val;
  const pickedValues = useContext(CalcState)[name];
  let checkbox = false;
  let checked = value === pickedValues;
  
  switch (type) {
    case 'checkbox':
      checkbox = true;
      checked = pickedValues.includes(value);
    // eslint-disable-next-line no-fallthrough
    case 'radio':
      return (
        <div className={`calc-section__${type}`}>
          <CalcControl 
            mask={addFlags(mask, {checkbox, checked})} 
            name={name} 
            value={value} 
            title={title} />
        </div>
      ); 
    
    case 'text': 
      return (
        <Input 
          sectionName={name}
          name={value} 
          title={title} />
      );
    
    default:
      throw new Error('Undefined control type, should use only: checkbox, radio, text');
  }
}

export default ControlItem