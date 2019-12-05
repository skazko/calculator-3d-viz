import React from 'react';
import CheckBoxSection from '../CheckBoxSection';

const Choose3dModels = () => {

  const value = {
    title: "3d-модели нужно подобрать",
    value: "models-exist"
  };

  const legend = 'Нужно ли подбирать 3d модели?';
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

export default Choose3dModels;