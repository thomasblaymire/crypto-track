import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

export const Coin = ({ data: { image, name, symbol, id } }): JSX.Element => {
  const navigate = useNavigate();
  return (
    <StyledCoin onClick={() => navigate(`/currencies/${id}`)}>
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
