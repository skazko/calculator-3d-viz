import React from 'react';
import './Calculator.css';
import CalcSection from '../CalcSection';
import { controls, calculate } from '../../cozy3d';

function Calculator({state}) {
  const total = calculate(state);
  const ctrls = controls.map(c => <CalcSection key={c.name} control={c}/>);
  return (
    <div className="calculator">
      <h3 className="calculator__header">Расчет стоимости 3D визуализации</h3>
      {ctrls}
      <div className="calculator__total">Итого: {total}</div>
      <span className="calculator__note">Стоимость является ориентировочной.</span>
    </div>
  );
}

export default Calculator;
