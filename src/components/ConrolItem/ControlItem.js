import React from 'react';
import CheckBox from '../CheckBox';
import RadioButton from '../RadioButton';
import Input from '../Input';

const ControlItem = ({val, name, type, round}) => {
  const {value, title} = val
  switch (type) {

    case 'checkbox':
      return (
        <div className="calc-section__checkbox">
          <CheckBox 
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

    case 'radio':
        return (
          <div className="calc-section__radio-button">
            <RadioButton 
              round={round} 
              name={name} 
              value={value} 
              title={title} />
          </div>
        ); 

    default:
      throw new Error('Undefined control type, should use only: checkbox, radio, text');
  }
}

export default ControlItem