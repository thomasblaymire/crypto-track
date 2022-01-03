import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Header } from './Header';

const Wrapper = styled.div`
  height: inherit;
  background-color: #1a1a24;
  min-height: 100vh;
`;

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 1300px;
  }
  @media (min-width: 1200px) {
    width: 1400px;
  }
`;

const StyledHead = styled.header`
  background: #161620; ;
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

{
  /* <input
            placeholder="Search..."
            // onChange={e => searchItems(e.target.value)}
          /> */
}
