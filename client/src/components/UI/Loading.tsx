import React from 'react';
import LoadingIncon from '@assets/loading.svg';
import styled, { css } from 'styled-components';

interface LoadingProps {
  position?: string;
  width?: string;
  height?: string;
}

const StyledLoading = styled.div<LoadingProps>`
  ${props =>
    props.position === 'center' &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  svg {
    color: white;
  }
`;

export const Loading = ({
  position,
  width,
  height,
}: LoadingProps): JSX.Element => (
  <StyledLoading position={position} width={width} height={height}>
    <LoadingIncon />
  </StyledLoading>
);
