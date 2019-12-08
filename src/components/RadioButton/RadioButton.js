import React, { Fragment, useContext } from 'react';
import ButtonLabel from '../ButtonLabel';
import {CalcDispatch, CalcState} from '../context';

const RadioButton = ({name, value, title, round}) => {
  const id = `${name}-${value}`;
  const dispatch = useContext(CalcDispatch);
  const pickedValue = useContext(CalcState)[name];

  function handleChange(e) {
    dispatch({ type: 'radio', payload: {name, value: e.target.value} });
  }

  const isChecked = value === pickedValue;

  return (
    <Fragment>
      <input
        checked={isChecked}
        onChange={handleChange}
        className="button-input visually-hidden"
        name={name} 
        value={value} 
        id={id} 
        type="radio" />
      <ButtonLabel checked={isChecked} title={title} id={id} round={round} />
    </Fragment>
  )
}

export default RadioButton;