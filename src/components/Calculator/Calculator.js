import React from 'react';
import './Calculator.css';
import CalcSection from '../CalcSection';
import { controls } from '../../cozy3d';

function Calculator() {
  const total = 18000;
  const ctrls = controls.map(c => <CalcSection key={c.name} control={c} />);
  return (
    <div className="calculator">
      <h3 className="calculator__header">Расчет стоимости 3D визуализации</h3>
      {ctrls}
      <div className="calculator__total">Итого: {total}</div>
    </div>
  );
}

export default Calculator;
