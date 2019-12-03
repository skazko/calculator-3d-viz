import React from 'react';
import ButtonLabel from '../ButtonLabel';
import './RadioButton.css';

const RadioButton = ({name, value, title}) => {
  const id = `${name}-${value}`;
  return (
    <div>
      <input className="visually-hidden" name={name} value={value} id={id} type="radio" />
      <ButtonLabel title={title} id={id} />
    </div>
  )
}

export default RadioButton;