import React, { useState } from 'react';
import CalcSection from '../CalcSection';
import CheckBox from '../CheckBox';
import './CheckBoxSection.css';

const CheckBoxSection = ({legend, name, defaultChecked, value}) => {

  //TODO: not one checkbox handling;

  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e) => {
    setChecked(!checked);
  };
  
  return (
    <CalcSection legend={legend}>
      <div className="calc-section__checkbox">
        <CheckBox
          checked={checked}
          handleChange={handleChange} 
          name={name} 
          title={value.title} 
          value={value.value} />
      </div>
    </CalcSection>
  );
}

export default CheckBoxSection;