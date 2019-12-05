import React, { useState } from 'react';
import CalcSection from '../CalcSection';
import RadioButton from '../RadioButton';
import './RadioSection.css';

const RadioSection = ({legend, name, defaultValue, values, round=false}) => {

  const [checked, setChecked] = useState(defaultValue);

  const handleChange = (e) => {
    setChecked(e.target.value);
  };

  const buttons = values.map(value => {
    return (
      <div className="calc-section__radio-button" key={value.value}>
        <RadioButton
          round={round}
          checked={checked}
          handleChange={handleChange} 
          name={name} 
          title={value.title} 
          value={value.value} />
      </div>
    )
  });
  
  return (
    <CalcSection legend={legend}>
      {buttons}
    </CalcSection>
  );
}

export default RadioSection;