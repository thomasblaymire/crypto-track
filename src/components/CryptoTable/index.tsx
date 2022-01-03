import React, { Fragment } from 'react';
import {
  StyledCryptoTable,
  StyledTr,
  StyledTd,
  StyledIcon,
  StyledCoin,
  StyledRank,
  StyledVolume,
  StyledName,
  StyledLoading,
} from './styled';
import { useNavigate } from 'react-router-dom';
import Star from '../../assets/star.svg';
import { CryptoTableHead } from './CryptoTableHead';

interface CryptoTableProps {
  data: any;
}

export const CryptoTable = ({ data }: CryptoTableProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <StyledCryptoTable>
        <CryptoTableHead />
        <tbody>
          {data.map(item => {
            const { name, id, cmc_rank, symbol, quote } = item;
            const { price, percent_change_24h, market_cap } = quote.AUD;
            const priceFormatted = price.toLocaleString('en-AU');
            const marketCapFormatted = market_cap.toLocaleString('en-AU');
            const percentChange24h = percent_change_24h.toFixed(2);

            return (
              <StyledTr
                key={id}
                onClick={() => navigate(`currencies/${name.toLowerCase()}`)}
              >
                <StyledTd>
                  <StyledIcon>
                    <Star />
                  </StyledIcon>
                </StyledTd>
                <StyledTd>
                  <StyledRank>{cmc_rank}</StyledRank>
                </StyledTd>
                <StyledTd alignment="left">
                  <StyledCoin>
                    <img src={`/icons/${symbol}.svg`} />
                    <StyledName>
                      <p>{name}</p>
                    </StyledName>
                    <div>
                      <p>{symbol}</p>
                    </div>
                  </StyledCoin>
                </StyledTd>
                <StyledTd>${priceFormatted}</StyledTd>
                <StyledTd>
                  <StyledVolume isPositive={Math.sign(percentChange24h) === 1}>
                    {percentChange24h}%
                  </StyledVolume>
                </StyledTd>
                <StyledTd>6.68%</StyledTd>
                <StyledTd>${marketCapFormatted}</StyledTd>
                <StyledTd>$29,118,389,263</StyledTd>
                <StyledTd>$29,118,389,263</StyledTd>
              </StyledTr>
            );
          })}
        </tbody>
      </StyledCryptoTable>
    </Fragment>
  );
};
