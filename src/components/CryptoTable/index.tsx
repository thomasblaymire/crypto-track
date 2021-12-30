import React from 'react';
import {
  StyledCryptoTable,
  StyledTr,
  StyledTh,
  StyledTd,
  StyledIcon,
  StyledCoin,
  StyledRank,
  StyledName,
} from './styled';
import Star from '../../assets/star.svg';

interface CryptoTableProps {
  data: any;
}

export const CryptoTable = ({
  data: { data },
}: CryptoTableProps): JSX.Element => {
  console.log('TOM DATA', data);
  return (
    <StyledCryptoTable>
      <thead>
        <tr>
          <StyledTh></StyledTh>
          <StyledTh></StyledTh>
          <StyledTh alignment="left">
            <p>Name</p>
          </StyledTh>
          <StyledTh>
            <p>Price</p>
          </StyledTh>
          <StyledTh>
            <p>24h%</p>
          </StyledTh>
          <StyledTh>
            <p>48h %</p>
          </StyledTh>
          <StyledTh>
            <p>Market Cap</p>
          </StyledTh>
          <StyledTh>
            <p>Volume (24h)</p>
          </StyledTh>
          <StyledTh>
            <p>Circulating Supply</p>
          </StyledTh>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          const { name, id, cmc_rank, symbol, quote } = item;
          const { price, volume_change_24h, market_cap } = quote.AUD;

          return (
            <StyledTr key={id}>
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
                  <img
                    className="coin-logo"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                    loading="lazy"
                    alt="BTC logo"
                  ></img>
                  <StyledName>
                    <p>{name}</p>
                  </StyledName>
                  <div>
                    <p>{symbol}</p>
                  </div>
                </StyledCoin>
              </StyledTd>
              <StyledTd>${price}</StyledTd>
              <StyledTd>{volume_change_24h}%</StyledTd>
              <StyledTd>6.68%</StyledTd>
              <StyledTd>${market_cap}</StyledTd>
              <StyledTd>$29,118,389,263</StyledTd>
              <StyledTd>$29,118,389,263</StyledTd>
            </StyledTr>
          );
        })}
      </tbody>
    </StyledCryptoTable>
  );
};
