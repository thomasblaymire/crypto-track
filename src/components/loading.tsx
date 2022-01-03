import React from 'react';
import LoadingIcon from '../assets/loading.svg';
import styled from 'styled-components';
import ReactDelayRender from 'react-delay-render';

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-self: center;

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

const Loading = () => (
  <StyledLoading>
    <LoadingIcon />
  </StyledLoading>
);

export default ReactDelayRender({ delay: 300 })(Loading);
