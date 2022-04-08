import React, { Fragment } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: inherit;

  min-height: 100vh;
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  width: 100%;

  @media (min-width: 390px) {
    padding-right: 16px;
    padding-left: 16px;
  }

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 1300px;
  }
`;

export interface LayoutProps {
  children?: any;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <Fragment>
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  </Fragment>
);
