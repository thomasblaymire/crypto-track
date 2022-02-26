import React from 'react';
import styled from 'styled-components';
import { StyledCoin, StyledGeneral, StyledPriceBasic } from './styled';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-color: #474d57;
  background: ${props => props.theme.colors.primary};
  flex: 1;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #eaecef;
  height: 50px;
  font-weight: bold;
`;

export const CryptoHeader = ({ columns }): JSX.Element => {
  const { name, price, priceChange24, priceChange48, marketCap, volume } =
    columns;
  return (
    <StyledHeader>
      <StyledCoin>{name}</StyledCoin>
      <StyledGeneral>{price}</StyledGeneral>
      <StyledPriceBasic>{priceChange24}</StyledPriceBasic>
      <StyledPriceBasic>{priceChange48}</StyledPriceBasic>
      <StyledGeneral>{marketCap}</StyledGeneral>
      <StyledGeneral>{volume}</StyledGeneral>
    </StyledHeader>
  );
};
