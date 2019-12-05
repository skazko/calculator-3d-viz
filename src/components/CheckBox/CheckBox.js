import React, { Fragment } from 'react';
import ButtonLabel from '../ButtonLabel';


const CheckBox = ({name, value, title, handleChange, checked}) => {
  const id = `${name}-${value}`;

  return (
    <Fragment>
      <input
        checked={checked}
        onChange={handleChange}
        className="radio-button visually-hidden"
        name={name} 
        value={value} 
        id={id} 
        type="checkbox" />
      <ButtonLabel title={title} id={id} checkbox={true} />
    </Fragment>
  )
}

export default CheckBox;