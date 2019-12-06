import React from 'react';
import Input from '../Input';
import CalcSection from '../CalcSection';

const InputPremiseProps = () => {

  return (
    <CalcSection legend="Введите параметры помещения">
      <Input title="Общая площадь в кв.м" name="square" placeholder="?"></Input>
      <Input title="и количество помещений" name="rooms-number" placeholder="?"></Input>
    </CalcSection>
  );
}

export default InputPremiseProps;