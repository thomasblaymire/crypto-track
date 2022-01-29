import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerImage from '../assets/hamburger.svg';

interface MenuProps {
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
  @media (min-width: 480px) {
    display: flex;
    flex: 1 1 0%;
    align-items: center;
    padding-left: 3rem;
    min-height: 61px;
  }
`;

const StyledNavigationItem = styled.div`
  font-weight: 600;
  line-height: 21px;
  cursor: pointer;
  display: inline-block;
  padding-right: 3rem;
  font-size: 1.5rem;
`;

const StyledNavigationLink = styled.a`
  text-decoration: none;
  color: #fff;
  min-height: 61px;
`;

const StyledHamburger = styled(HamburgerImage)`
  display: flex;
  @media (min-width: 480px) {
    display: none;
  }
`;

const StyledMenu = styled.div<MenuProps>`
  justify-content: space-between;
  align-items: center;
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Navigation = ({ navItems, isOpen, setIsOpen }): JSX.Element => {
  return (
    <StyledNavigation>
      <StyledHamburger onClick={() => setIsOpen(!isOpen)} />
      <StyledMenu isOpen={isOpen}>
        {navItems.map((item, i) => (
          <StyledNavigationItem key={i}>
            <StyledNavigationLink href="/">{item.item}</StyledNavigationLink>
          </StyledNavigationItem>
        ))}
      </StyledMenu>
    </StyledNavigation>
  );
};
