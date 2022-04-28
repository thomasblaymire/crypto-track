import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { StatsBar } from './Stats';
import { Actions } from '../Auth/Actions';
import { device } from '@helpers/device';
import { navItems, stats } from '../../data';
import { CurrencySelect } from '../CurrencySelect';
import { MobileNav } from './MobileNav';
import { Container } from './Layout';
import { Toggle } from './Toggle';

const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 0px;
  width: 100%;
  height: 70px;
  justify-content: space-between;

  @media ${device.mobileL} {
    justify-content: initial;
  }
`;

const StyledActions = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

const StyledBar = styled.div`
  display: none;
  @media ${device.laptopL} {
    display: flex;
    justify-content: space-between;
    height: 37px;
    display: flex;
    align-items: center;
  }
`;

const StyledBarActions = styled.div`
  display: flex;
  line-height: 22px;
`;

export const StyledHeader = styled.header`
  background: ${props => props.theme.colors.primary};
`;

export const Header = ({ theme, toggleTheme }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <StyledBar>
          {stats && <StatsBar stats={stats} />}
          <StyledBarActions>
            <CurrencySelect />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </StyledBarActions>
        </StyledBar>

        <StyledHeaderWrapper>
          <Logo />
          <Navigation
            navItems={navItems}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
          <StyledActions>
            <Actions />
          </StyledActions>
          {isOpen && <MobileNav setIsOpen={setIsOpen} />}
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
