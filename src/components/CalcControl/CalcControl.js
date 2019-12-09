import React, { useContext } from 'react';
import {CalcDispatch} from '../context';
import {getClass, getType, isChecked} from '../../classNames';
import './CalcControl.css';

const CalcControl = ({name, value, title, mask}) => {
  const id = `${name}-${value}`;
  const dispatch = useContext(CalcDispatch);
  const type = getType(mask);
  
  function handleChange(e) {
    const { value } = e.target;
    dispatch({ type, payload: {name, value} });
  }

  return (
    <div className="calc-control">
      <input
        checked={isChecked(mask)}
        onChange={handleChange}
        className="calc-control__input visually-hidden"
        name={name} 
        value={value} 
        id={id} 
        type={type} />
      <label htmlFor={id} className={getClass(mask)}>
        {title}
      </label>
    </div>
  );
}

export default CalcControl;