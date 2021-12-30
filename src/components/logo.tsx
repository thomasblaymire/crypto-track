import React from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/logo.svg';

const StyledHeaderLogo = styled(LogoImage)`
  height: 50px;
`;

export const Logo = () => <StyledHeaderLogo />;
