import React, { Fragment, useContext } from 'react';
import ButtonLabel from '../ButtonLabel';
import {CalcDispatch, CalcState} from '../context';

const CheckBox = ({name, value, title}) => {
  const id = `${name}-${value}`;
  const dispatch = useContext(CalcDispatch);
  const pickedValues = useContext(CalcState)[name];

  function handleChange(e) {
    dispatch({ type: 'checkbox', payload: {name, value: e.target.value} });
  }

  const isChecked = pickedValues.includes(value);

  return (
    <Fragment>
      <input
        checked={isChecked}
        onChange={handleChange}
        className="button-input visually-hidden"
        name={name} 
        value={value} 
        id={id} 
        type="checkbox" />
      <ButtonLabel checked={isChecked} title={title} id={id} checkbox={true} />
    </Fragment>
  )
}

export default CheckBox;