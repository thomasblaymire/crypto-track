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
    border-bottom: solid 1px #222531;
    height: 50px;
    align-items: center;
  }
`;

const StyledBarActions = styled.div`
  display: flex;
  line-height: 22px;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledHeader = styled.header`
  background: ${props => props.theme.colors.primary};
`;

interface HeaderProps {
  theme: any;
  toggleTheme: any;
  user?: any;
}

export const Header = ({ theme, toggleTheme }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledBar>
        <Container>
          <StyledWrapper>
            {stats && <StatsBar stats={stats} />}
            <StyledBarActions>
              <CurrencySelect />
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </StyledBarActions>
          </StyledWrapper>
        </Container>
      </StyledBar>

      <Container>
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
