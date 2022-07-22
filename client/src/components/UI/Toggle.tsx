import React from 'react';
import styled from 'styled-components';
import MoonIcon from '@assets/icons/moon.svg';
import SunIcon from '@assets/icons/sun.svg';

const ToggleContainer = styled.button`
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  border: none;
  background: transparent;
  padding-right: 0;
  padding-left: 1.5rem;

  svg {
    height: auto;
    width: 1.75rem;
    transition: all 0.3s linear;
    fill: ${({ theme }) => theme.colors.textColor};
  }
`;

export const Toggle = ({ theme, toggleTheme }): JSX.Element => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme}>
      {isLight ? <SunIcon /> : <MoonIcon />}
    </ToggleContainer>
  );
};
