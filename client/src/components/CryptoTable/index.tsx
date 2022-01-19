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
  StyledTh,
} from './styled';
import { useNavigate } from 'react-router-dom';
import Star from '../../assets/star.svg';

interface CryptoTableProps {
  data: any;
  headingColumns: any;
}

export const CryptoTable = ({ data, headingColumns }: CryptoTableProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <StyledCryptoTable>
      <thead>
      <tr>
        {headingColumns.map((column, index) => (
          <StyledTh key={index}>{column}</StyledTh>
        ))}
      </tr>
      </thead>
        <tbody>
          {data.map((item, index) => {
            const { id, name, rank, symbol, price, percent24h, marketCap, image} = item;
            return (
              <StyledTr
                key={index}
                onClick={() => navigate(`${name.toLowerCase()}`, { state: id })}
              >
                <StyledTd>
                  <StyledIcon>
                    <Star />
                  </StyledIcon>
                </StyledTd>
                <StyledTd>
                  <StyledRank>{rank}</StyledRank>
                </StyledTd>
                <StyledTd alignment="left">
                  <StyledCoin>
                    <img src={image} />
                    <StyledName>
                      <p>{name}</p>
                    </StyledName>
                    <div>
                      <p>{symbol}</p>
                    </div>
                  </StyledCoin>
                </StyledTd>
                <StyledTd>${price}</StyledTd>
                <StyledTd>
                  <StyledVolume isPositive={Math.sign(percent24h) === 1}>
                    {percent24h}%
                  </StyledVolume>
                </StyledTd>
                <StyledTd>6.68%</StyledTd>
                <StyledTd>${marketCap}</StyledTd>
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
