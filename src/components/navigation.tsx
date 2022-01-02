import React from 'react';
import styled from 'styled-components';

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-self: center;
`;

const StyledNavigation = styled.nav`
  display: flex;
  flex: 1 1 0%;
  padding-left: 3rem;
  min-height: 61px;
  align-items: center;
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

export const Navigation = ({ navItems }) => (
  <StyledNavigation>
    {navItems.map((item, i) => (
      <StyledNavigationItem key={i}>
        <StyledNavigationLink href="/">{item.item}</StyledNavigationLink>
      </StyledNavigationItem>
    ))}
  </StyledNavigation>
);
