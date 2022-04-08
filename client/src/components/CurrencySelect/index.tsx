import React, { useState } from 'react';
import styled from 'styled-components';
import { useCryptos } from '@hooks/useCryptos';
import { currencies } from '../../data';
import { setLocalStorage } from '@helpers/storage';

const StyledListBox = styled.select``;

interface CurrencySelectInterface {
  className?: string;
}

export const CurrencySelect = ({
  className,
}: CurrencySelectInterface): JSX.Element => {
  const [currency, setCurrency] = useState(
    localStorage.getItem('currency') || '[]'
  );

  // useCryptos(currency);

  const setCurrencyValue = (value: string): void => {
    setCurrency(value);
    setLocalStorage('currency', value);
  };

  return (
    <StyledListBox
      className={className}
      onChange={({ target: { value } }) => setCurrencyValue(value)}
    >
      {currencies.map(([value, text]) => (
        //<option key={text} selected={currency === value} value={value}>
        <option key={text} value={value}>
          {text}
        </option>
      ))}
    </StyledListBox>
  );
};
