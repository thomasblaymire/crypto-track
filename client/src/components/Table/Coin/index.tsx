import React from 'react';
import styled from 'styled-components';

export const StyledCoin = styled.div`
  display: flex;
  text-align: left;
  justify-content: flex-start;
  align-items: center;

  img {
    height: 24px;
    width: 24px;
    border-radius: 12px;
    margin-right: 1rem;
  }
`;

export const StyledName = styled.div`
  padding-right: 1rem;
  padding-left: 0.5rem;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const StyledTicker = styled.div`
  color: #848e9c;
`;

export const Coin = ({ data }): JSX.Element => {
  const { image, name, market_cap_rank, symbol } = data;

  return (
    <StyledCoin>
      <img src={image} alt={name} />
      <StyledName>
        <p>{symbol.toUpperCase()}</p>
      </StyledName>
      <StyledTicker>
        <p>{name}</p>
      </StyledTicker>
    </StyledCoin>
  );
};
