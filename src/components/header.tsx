import React from 'react';
import styled from 'styled-components';
import { Logo } from './logo';
import { Navigation } from './navigation';
import { StatsBar } from './stats';

interface HeaderProps {
  navItems: NavigationItem[];
  stats: Stats[];
}

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0px;
  max-width: 1400px;
  width: 100%;
  overflow: hidden;
  margin: 0px auto;
`;

export const Header = ({ navItems, stats }: HeaderProps): JSX.Element => (
  <>
    {stats && <StatsBar stats={stats} />}
    <StyledHeaderWrapper>
      <Logo />
      <Navigation navItems={navItems} />
    </StyledHeaderWrapper>
  </>
);
