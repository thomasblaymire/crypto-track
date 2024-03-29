import React from 'react';
import styled from 'styled-components';
import LogoImage from '@assets/logo2.svg';
import { Link } from 'react-router-dom';

const StyledHeaderLogo = styled(LogoImage)`
  height: 30px;

  @media (min-width: 480px) {
    height: 35px;
  }
`;

export const Logo = (): JSX.Element => (
  <Link to="/">
    <StyledHeaderLogo />
  </Link>
);
