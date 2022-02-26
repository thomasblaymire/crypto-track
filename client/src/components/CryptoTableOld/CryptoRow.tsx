import React from 'react';
import { useNavigate } from 'react-router-dom';
import { currencyFormat } from '../../helpers/format';
import {
  StyledCoin,
  StyledPrice,
  StyledName,
  StyledCryptoRow,
  StyledChevron,
  StyledGeneral,
  StyledTicker,
} from './styled';

export const CryptoRow = ({
  column: {
    id,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    market_cap,
    image,
  },
}): JSX.Element => {
  const navigate = useNavigate();

  const isPositiveChange = Math.sign(price_change_percentage_24h) === 1;

  const priceChangeFormatted = price_change_percentage_24h
    .toFixed(2)
    .replace(/-/g, '');

  return (
    <StyledCryptoRow
      onClick={() => navigate(`${name.toLowerCase()}`, { state: id })}
    >
      <StyledCoin>
        <img src={image} alt={name} />
        <StyledName>
          <p>{symbol.toUpperCase()}</p>
        </StyledName>
        <StyledTicker>
          <p>{name}</p>
        </StyledTicker>
      </StyledCoin>
      <StyledGeneral>{currencyFormat(current_price)}</StyledGeneral>
      <StyledPrice isPositive={isPositiveChange}>
        <StyledChevron isPositive={isPositiveChange} />
        {priceChangeFormatted}%
      </StyledPrice>
      <StyledPrice isPositive={isPositiveChange}>
        <StyledChevron isPositive={isPositiveChange} />
        {priceChangeFormatted}%
      </StyledPrice>
      <StyledGeneral>{currencyFormat(market_cap)}</StyledGeneral>
      <StyledGeneral>{currencyFormat(market_cap)}</StyledGeneral>
    </StyledCryptoRow>
  );
};
