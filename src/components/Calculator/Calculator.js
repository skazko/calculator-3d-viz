import React from 'react';
import './Calculator.css';
import RadioButton from '../RadioButton';

function Calculator() {
  return (
    <div className="calculator">
      <RadioButton name="name" value="value" title="Radio Button" />
    </div>
  );
}

export default Calculator;
