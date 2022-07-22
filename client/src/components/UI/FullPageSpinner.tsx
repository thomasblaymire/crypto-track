import React from 'react';
import { Loading } from './Loading';
import styled from 'styled-components';

const StyledFullPage = styled.div`
  height: '100vh';
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'center';
  align-items: 'center';
  background: #1a1a25;
  width: 100%;
  color: red;
`;

function FullPageSpinner() {
  return <StyledFullPage>{/* <Loading /> */}</StyledFullPage>;
}

export { FullPageSpinner };
