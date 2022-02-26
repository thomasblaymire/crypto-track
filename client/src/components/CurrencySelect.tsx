import React, { useState } from 'react';
import styled from 'styled-components';
import { useCryptos } from '../hooks/useCryptos';
import { currencies } from '../data';

const StyledListBox = styled.select``;

export const CurrencySelect = (): JSX.Element => {
  const [selected, setSelected] = useState('aud');
  const { refetch } = useCryptos(selected);

  const setCurrency = (value: string) => {
    setSelected(value);
    window.localStorage.setItem('currency', value);
    refetch();
  };

  return (
    <StyledListBox onChange={({ target: { value } }) => setCurrency(value)}>
      {currencies.map(([value, text]) => (
        <option key={text} selected={selected === value} value={value}>
          {text}
        </option>
      ))}
    </StyledListBox>
  );
};
