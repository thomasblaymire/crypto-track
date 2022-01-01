import React from 'react';
import { StyledTh } from '../styled';

export const CryptoTableHead = (): JSX.Element => {
  return (
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
  );
};
