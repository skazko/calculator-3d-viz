import React, {useContext} from 'react';
import './Input.css';
import {CalcDispatch, CalcState} from '../context';

const Input = ({title, name, sectionName}) => {
  
  const dispatch = useContext(CalcDispatch);
  const pickedValue = useContext(CalcState)[sectionName][name];

  function handleChange(e) {
    dispatch({
      type: 'text',
      payload: {
        name: sectionName,
        value: {
          name,
          value: e.target.value
        }
      }
    })
  }

  return (
    <label className="input">
      <span className="input__title">{title}</span>
      <input 
        onChange={handleChange}
        className="input__value" 
        type="text" 
        name={name} 
        value={pickedValue}
        size="4"
        maxLength="4">
      </input>
    </label>
    
  );
}

export default Input;