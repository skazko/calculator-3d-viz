import React from 'react';
import CheckBoxSection from '../CheckBoxSection';

const ChooseQuality = () => {

  const quality = {
    title: "Максимальная фотореалистичность",
    value: "best"
  };

  const legend = 'Выберите настройки качества';
  const name = 'renders-quality';
  const defaultValue = true;

  return (
    <CheckBoxSection 
      value={quality}
      legend={legend}
      name={name}
      defaultChecked={defaultValue}
       />
  );
}

export default ChooseQuality;