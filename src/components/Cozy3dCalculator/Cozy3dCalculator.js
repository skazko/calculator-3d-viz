import React from 'react';
import './Cozy3dCalculator.css';
import SampleVisualisation from '../SampleVisualisation';
import Calculator from '../Calculator';

function Cozy3dCalculator() {
  return (
    <main className="cozy3d-calculator">
      <SampleVisualisation />
      <Calculator />
    </main>
  );
}

export default Cozy3dCalculator;
