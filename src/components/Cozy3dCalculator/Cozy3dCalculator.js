import React, {useReducer} from 'react';
import './Cozy3dCalculator.css';
import SampleVisualisation from '../SampleVisualisation';
import Calculator from '../Calculator';
import reducer from '../../reducer';
import { CalcDispatch, CalcState } from '../context';
import { initialState } from '../../cozy3d';


function Cozy3dCalculator() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="cozy3d-calculator">
      <CalcState.Provider value={state}>
        <SampleVisualisation state={state} />
        <CalcDispatch.Provider value={dispatch}>
          <Calculator state={state}/>
        </CalcDispatch.Provider>
      </CalcState.Provider>
    </main>
  );
}

export default Cozy3dCalculator;
