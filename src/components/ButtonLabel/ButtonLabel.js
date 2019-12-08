import React from 'react';
import { getControlClass } from '../../classNames';
import './ButtonLabel.css';

const ButtonLabel = ({title, id, round=false, checkbox=false, checked}) => {
  // TODO: review classname 
  
  const cls = getControlClass({round, checkbox, checked});

  return (
    <label htmlFor={id} className={cls}>
      {title}
    </label>
  );
}

export default ButtonLabel;