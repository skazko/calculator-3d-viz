import React, { useState } from 'react';
import CalcSection from '../CalcSection';
import RadioButton from '../RadioButton';

const ChooseDetails = () => {

  const [detalisation, setDetalisation] = useState('details');

  const handleDetailsChange = (e) => {
    setDetalisation(e.target.value);
  };

  const details = [
    { title: 'Пусто', value: 'empty' },
    { title: 'Мебель', value: 'furniture' },
    { title: 'Мелкие предметы', value: 'details' },
    { title: 'Много мелких предметов', value: 'extra' },
  ];

  const buttons = details.map(detail => {
    return (
      <div className="calc-section__radio-button" key={detail.value}>
        <RadioButton
          checked={detalisation}
          handleDetailsChange={handleDetailsChange} 
          name="detalisation" 
          title={detail.title} 
          value={detail.value} />
      </div>
    )
  });
  
  return (
    <CalcSection legend="Выберите наполненность помещения деталями">
      {buttons}
    </CalcSection>
  );
}

export default ChooseDetails;