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
    padding-right: 15px;
    padding-left: 15px;
  }

  @media (min-width: 768px) {
    max-width: 750px;
  }
  @media (min-width: 992px) {
    max-width: 1300px;
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
