import React from 'react';
import CheckBox from '../CheckBox';
import RadioButton from '../RadioButton';
import Input from '../Input';

const ControlItem = ({val, name, type, handleChange, checked, round}) => {
  const {value, title} = val
  switch (type) {
    case 'checkbox':
      return <CheckBox name={name} value={value} title={title} handleChange={handleChange} checked={checked}/>
    case 'text': 
      return <Input name={value} title={title} value={checked} handleChange={handleChange}/>
    case 'radio':
        return (
          <div className="calc-section__radio-button">
            <RadioButton 
              round={round} 
              name={name} 
              value={value} 
              title={title} 
              handleChange={handleChange} 
              checked={checked}/>
          </div>
        ); 
        
        
    default:
      return;
  }
}

export default ControlItem