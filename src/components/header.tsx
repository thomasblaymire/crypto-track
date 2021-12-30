import React from 'react';
import styled from 'styled-components';
import { Logo } from './logo';
import { Navigation } from './navigation';
import { StatsBar } from './stats';

interface HeaderProps {
  navItems: NavigationItem[];
  stats: Stats[];
}

const StyledHeader = styled.header``;

const StyledHeaderWrapper = styled.div`
  display: flex;
  padding: 3.5rem 0;
`;

export const Header = ({ navItems, stats }: HeaderProps): JSX.Element => (
  <StyledHeader>
    {stats && <StatsBar stats={stats} />}
    <StyledHeaderWrapper>
      <Logo />
      <Navigation navItems={navItems} />
    </StyledHeaderWrapper>
  </StyledHeader>
);
