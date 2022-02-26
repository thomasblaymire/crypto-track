import React from 'react';
import styled, { css } from 'styled-components';

interface VolumeProps {
  isPositive?: boolean;
}

export const StyledPrice = styled.div<VolumeProps>`
  width: 100px;
  flex: 100;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  white-space: nowrap;
  color: #f6465d;
  letter-spacing: 0.01rem;

  ${({ isPositive }) =>
    isPositive &&
    css`
      color: rgb(14, 203, 129);
    `}
`;

export const StyledChevron = styled.div<VolumeProps>`
  width: 0;
  height: 0;
  display: inline-block;
  border: 6px solid transparent;
  position: relative;

  ${({ isPositive }) =>
    isPositive &&
    css`
      border-bottom-color: rgb(14, 203, 129);
      bottom: 0.25rem;
      right: 0.5rem;
    `}

  ${({ isPositive }) =>
    !isPositive &&
    css`
      border-top-color: #f6465d;
      top: 0.25rem;
      right: 0.5rem;
    `}
`;

export const PriceChange = ({ price }): JSX.Element => {
  const isPositiveChange = Math.sign(price) === 1;
  const priceFormatted = price.toFixed(2).replace(/-/g, '');

  return (
    <StyledPrice isPositive={isPositiveChange}>
      <StyledChevron isPositive={isPositiveChange} />
      {priceFormatted}%
    </StyledPrice>
  );
};
