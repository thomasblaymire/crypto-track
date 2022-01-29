import React from 'react';
import {
  StyledCoin,
  StyledPrice,
  StyledName,
  StyledCryptoRow,
  StyledHeader,
  StyledHeaderItem,
  StyledGeneral,
  StyledWrapper,
  StyledTicker,
} from './styled';
import { useNavigate } from 'react-router-dom';
import { CryptoData } from '../../types';
import { cryptoHeadingColumns } from '../../data';
import { currencyFormat } from '../../helpers/format';

interface CryptoTableProps {
  data: CryptoData[];
}

export const CryptoTable = ({ data }: CryptoTableProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <StyledHeader>
        {cryptoHeadingColumns.map(column => {
          return <StyledHeaderItem>{column}</StyledHeaderItem>;
        })}
      </StyledHeader>

      {data.map((item, index) => {
        const {
          id,
          name,
          symbol,
          current_price,
          price_change_percentage_24h,
          market_cap,
          image,
        } = item;

        const isPositiveChange = Math.sign(price_change_percentage_24h) === 1;
        const priceChangeFormatted = price_change_percentage_24h.toFixed(2);

        return (
          <StyledCryptoRow
            key={index}
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
              {priceChangeFormatted}%
            </StyledPrice>
            <StyledPrice isPositive={isPositiveChange}>
              {priceChangeFormatted}
            </StyledPrice>
            <StyledGeneral>{currencyFormat(market_cap)}</StyledGeneral>
            <StyledGeneral>{currencyFormat(market_cap)}</StyledGeneral>
          </StyledCryptoRow>
        );
      })}
    </StyledWrapper>
  );
};
