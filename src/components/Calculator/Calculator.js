import React from 'react';
import './Calculator.css';
import ChooseDetails from '../ChooseDetails';
import ChooseRendersNumber from '../ChooseRendersNumber';
import ChooseQuality from '../ChooseQuality';

function Calculator() {
  return (
    <div className="calculator">
      <ChooseQuality />
      <ChooseDetails />
      <ChooseRendersNumber />
    </div>
  );
}

export default Calculator;
