import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Header } from './Header';

const Wrapper = styled.div`
  height: inherit;
  background-color: #1a1a24;
  min-height: 100vh;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  width: 100%;

  @media (min-width: 480px) {
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

const StyledHead = styled.header`
  background: #13131c;
`;

const navItems = [
  {
    id: '1',
    item: 'Cryptocurrencies',
    url: '/',
  },
  {
    id: '2',
    item: 'Markets',
    url: '/markets',
  },
  {
    id: '3',
    item: 'Influencers',
    url: '/influencers',
  },
];

export interface LayoutProps {
  children?: any;
}

const stats = [
  {
    title: 'Cryptocurrencys',
    value: 1592,
  },
  {
    title: 'Markets',
    value: 10271,
  },
  {
    title: 'Market Cap',
    value: 33456544334,
  },
  {
    title: 'Volume 24H',
    value: 12223245223,
  },
  {
    title: 'BTC Dominance',
    value: 387,
  },
];

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <StyledHead>
        <Container>
          <Header navItems={navItems} stats={stats} />
        </Container>
      </StyledHead>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </Fragment>
  );
};
