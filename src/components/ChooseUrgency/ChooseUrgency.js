import React from 'react';
import CheckBoxSection from '../CheckBoxSection';

const ChooseUrgency = () => {

  const value = {
    title: 'Работа срочная!',
    value: 'urgency'
  };

  const legend = 'Проект горит или работаем в штатном режиме?';
  const name = '3d-models';
  const defaultValue = false;

  return (
    <CheckBoxSection 
      value={value}
      legend={legend}
      name={name}
      defaultChecked={defaultValue}
       />
  );
}

export default ChooseUrgency;