import React from 'react';
import './ButtonLabel.css';

const ButtonLabel = ({title, id, round=false, checkbox=false}) => {
  const clsRound = round ? " button-label_round" : "";
  const clsCheckbox = checkbox ? " button-label_checkbox" : ""; 
  const clsName = "button-label" + clsRound + clsCheckbox;
  return (
    <label htmlFor={id} className={clsName}>
      {title}
    </label>
  );
}

export default ButtonLabel;