import React, { Fragment } from 'react';
import ButtonLabel from '../ButtonLabel';
import './RadioButton.css';

const RadioButton = ({name, value, title, handleChange, checked, round}) => {
  const id = `${name}-${value}`;

  return (
    <Fragment>
      <input
        checked={value === checked}
        onChange={handleChange}
        className="radio-button visually-hidden"
        name={name} 
        value={value} 
        id={id} 
        type="radio" />
      <ButtonLabel title={title} id={id} round={round} />
    </Fragment>
  )
}

export default RadioButton;