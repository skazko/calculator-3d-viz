import React from 'react';
import './Calculator.css';
import ChooseDetails from '../ChooseDetails';
import ChooseRendersNumber from '../ChooseRendersNumber';
import ChooseQuality from '../ChooseQuality';
import Choose3dModels from '../Choose3dModels';
import ChooseUrgency from '../ChooseUrgency/ChooseUrgency';

function Calculator() {
  return (
    <div className="calculator">
      <ChooseQuality />
      <ChooseDetails />
      <Choose3dModels />
      <ChooseUrgency /> 
      <ChooseRendersNumber />
    </div>
  );
}

export default Calculator;
