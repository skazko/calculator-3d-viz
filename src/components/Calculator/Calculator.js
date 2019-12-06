import React from 'react';
import './Calculator.css';
import ChooseDetails from '../ChooseDetails';
import ChooseRendersNumber from '../ChooseRendersNumber';
import ChooseQuality from '../ChooseQuality';
import Choose3dModels from '../Choose3dModels';
import ChooseUrgency from '../ChooseUrgency/ChooseUrgency';
import InputPremiseProps from '../InputPrimiseProps/InputPremiseProps';

function Calculator() {
  const total = 18000;
  return (
    <div className="calculator">
      <h3 className="calculator__header">Расчет стоимости 3D визуализации</h3>
      <ChooseQuality />
      <ChooseDetails />
      <Choose3dModels />
      <ChooseUrgency /> 
      <InputPremiseProps />
      <ChooseRendersNumber />
      <div className="calculator__total">Итого: {total}</div>
    </div>
  );
}

export default Calculator;
