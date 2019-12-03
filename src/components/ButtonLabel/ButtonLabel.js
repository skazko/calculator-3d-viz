import React from 'react';
import './ButtonLabel.css';

const ButtonLabel = ({title, id}) => {
  const clsName = "button-label";

  return (
    <label htmlFor={id} className={clsName}>
      {title}
    </label>
  );
}

export default ButtonLabel;