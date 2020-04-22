import React, { useReducer } from 'react';
import './Cozy3dCalculator.css';
import SampleVisualisation from '../SampleVisualisation';
import Calculator from '../Calculator';
import reducer from '../../reducer';
import { CalcDispatch, CalcState } from '../context';
import { initialState } from '../../cozy3d';
import { RENDERS_QUALITY, DETALISATION } from '../../constants';

function Cozy3dCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const sampleState = getSampleState(state);

  return (
    <main className="cozy3d-calculator">
      <CalcState.Provider value={state}>
        <SampleVisualisation sampleState={sampleState} />
        <CalcDispatch.Provider value={dispatch}>
          <Calculator state={state} />
        </CalcDispatch.Provider>
      </CalcState.Provider>
    </main>
  );
}

function getSampleState(state) {
  const det = state[DETALISATION];
  const qua = state[RENDERS_QUALITY][0];
  return qua ? `${det}-${qua}` : det;
}

export default Cozy3dCalculator;
