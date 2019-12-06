import React from 'react';
import './Input.css';

const Input = ({title, name, value, handleChange}) => {
  const currentValue = value.find(v => v.name === name).value;
  return (
    <label className="input">
      <span className="input__title">{title}</span>
      <input 
        onChange={handleChange}
        className="input__value" 
        type="text" 
        name={name} 
        value={currentValue}
        size="4"
        maxLength="4">
      </input>
    </label>
    
  );
}

export default Input;