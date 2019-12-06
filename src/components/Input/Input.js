import React from 'react';
import './Input.css';

const Input = ({title, name, placeholder}) => {
  return (
    <label className="input">
      <span className="input__title">{title}</span>
      <input 
        className="input__value" 
        type="text" 
        name={name} 
        placeholder={placeholder}
        size="4"
        maxLength="4">
      </input>
    </label>
    
  );
}

export default Input;