import React from 'react';
import styled from 'styled-components';
import { currencies } from '../data';

const StyledListBox = styled.select``;

export const CurrencySelect = (): JSX.Element => {
  const [selected, setSelected] = React.useState('default');

  const setCurrency = (value: string) => {
    setSelected(value);
  };

  return (
    <StyledListBox onChange={({ target: { value } }) => setCurrency(value)}>
      {currencies.map(([value, text]) => (
        <option selected={selected === value} value={value}>
          {text}
        </option>
      ))}
    </StyledListBox>
  );
};
