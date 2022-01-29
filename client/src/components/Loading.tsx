import React from 'react';
import LoadingIcon from '../assets/loading.svg';
import styled, { css } from 'styled-components';

interface LoadingProps {
  position: string;
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

export const StyledIcon = styled(LoadingIcon)`
  display: block;
  color: white;
  width: 400px;
  height: 300px;
`;

export const Loading = ({ position }): JSX.Element => (
  <StyledLoading position={position}>
    <LoadingIcon />
  </StyledLoading>
);
