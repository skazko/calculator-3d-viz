import React from 'react';
import ControlItem from '../ConrolItem';
import './CalcSection.css';

//TODO: replace checked for picked

const CalcSection = ({control}) => {

  const {legend, values, name, type, round=false} = control;

  const controlsView = values.map((val) => (
    <ControlItem 
      round={round} 
      val={val} 
      name={name} 
      type={type} 
      key={`${name}-${val.value}`} />
  ));
  
  return (
    <fieldset className="calc-section">
      <legend className="calc-section__legend">
        {legend}
      </legend>
      {controlsView}
    </fieldset>
  );
}

export default CalcSection;