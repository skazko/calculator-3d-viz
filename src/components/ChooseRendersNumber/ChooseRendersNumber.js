import React from 'react';
import RadioSection from '../RadioSection';

const ChooseRendersNumber = () => {

  const details = [
    { title: '3', value: "3" },
    { title: '4', value: "4" },
    { title: '5', value: "5" },
    { title: '6', value: "6" },
    { title: '7', value: "7" },
  ];

  const legend = 'Количество рендеров на помещение';
  const name = 'renders-number';
  const defaultValue = details[0].value;

  return (
    <RadioSection 
      values={details}
      legend={legend}
      name={name}
      defaultValue={defaultValue}
      round={true}
       />
  );
}

export default ChooseRendersNumber;