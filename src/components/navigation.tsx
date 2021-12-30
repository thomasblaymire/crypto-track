import React from 'react';
import styled from 'styled-components';

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-self: center;
`;

export const StyledNavigation = styled.nav`
  display: block;
`;

export const Navigation = ({ navItems }) => (
  <StyledNavigation>
    <ul>
      {navItems.map((item, i) => (
        <li key={i}>{item.item}</li>
      ))}
    </ul>
  </StyledNavigation>
);
