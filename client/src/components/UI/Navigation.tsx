import React from 'react';
import styled from 'styled-components';
import HamburgerImage from '@assets/hamburger.svg';
import { NavigationItem } from '../../types/types';
import { useNavigate } from 'react-router-dom';

interface MenuProps {
  isOpen: boolean;
}
interface NavigationProps {
  navItems: NavigationItem[];
  setIsOpen: (arg: boolean) => void;
  isOpen: boolean;
}

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-self: center;
`;

const StyledNavigation = styled.nav`
  justify-content: flex-end;
  padding-top: 0.5rem;
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  padding-left: 3rem;

  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`;

const StyledNavigationItem = styled.div`
  font-weight: 600;
  line-height: 21px;
  cursor: pointer;
  display: flex;
  padding-right: 3rem;
  font-size: 1.4rem;
  min-height: 20px;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.5rem;
    fill: ${({ theme }) => theme.colors.textColor};
    margin-right: 0.75rem;
  }

  &:hover,
  &:hover svg path {
    color: ${({ theme }) => theme.colors.blue};
    fill: ${({ theme }) => theme.colors.blue};
  }
`;

const StyledHamburger = styled.div`
  display: flex;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const StyledMenu = styled.div<MenuProps>`
  justify-content: space-between;
  align-items: center;
  position: relative;
  display: none;

  @media (min-width: 1200px) {
    display: flex;
  }
`;

export const Navigation = ({
  navItems,
  isOpen,
  setIsOpen,
}: NavigationProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <StyledNavigation>
      <StyledHamburger onClick={() => setIsOpen(!isOpen)}>
        <HamburgerImage />
      </StyledHamburger>
      <StyledMenu isOpen={isOpen}>
        {navItems.map(({ title, url, icon }, i) => (
          <StyledNavigationItem key={i} onClick={() => navigate(url)}>
            {icon}
            {title}
          </StyledNavigationItem>
        ))}
      </StyledMenu>
    </StyledNavigation>
  );
};
