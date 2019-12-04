import React from 'react';
import './CalcSection.css';

const CalcSection = ({legend, children}) => {
  return (
    <fieldset className="calc-section">
      <legend className="calc-section__legend">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

export default CalcSection;