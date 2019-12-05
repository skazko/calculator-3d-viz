import React from 'react';
import RadioSection from '../RadioSection';

const ChooseDetails = () => {

  const details = [
    { title: 'Пусто', value: 'empty' },
    { title: 'Мебель', value: 'furniture' },
    { title: 'Мелкие предметы', value: 'details' },
    { title: 'Много мелких предметов', value: 'extra' },
  ];

  const legend = 'Выберите наполненность помещения деталями';
  const name = 'detalisation';
  const defaultValue = details[2].value;

  return (
    <RadioSection 
      values={details}
      legend={legend}
      name={name}
      defaultValue={defaultValue}
       />
  );
}

export default ChooseDetails;