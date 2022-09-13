import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { navItems } from '../../data';
import CloseIcon from '@assets/close.svg';

const StyledResponsiveMenu = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 5px;
  z-index: 932;
  color: rgb(255, 255, 255);
  right: 0px;
  transition: right 0.2s ease 0s;
  height: 100%;
  overflow: auto;
  background: ${props => props.theme.colors.primary};
`;

const StyledResponseiveDiv = styled.div`
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  color: rgb(255, 255, 255);
  transition: all 0.2s ease 0s;
  border-bottom: 1px solid rgb(34, 37, 49);
  font-size: 1.5rem;

  a {
    color: white;
    text-decoration: none;
  }
`;

const StyledResponsiveHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  position: relative;
  padding-right: 16px;
  padding-left: 16px;
  background: ${props => props.theme.colors.primary};
`;

const StyledResponsiveBody = styled.div`
  padding: 8px 16px;
  height: calc(100% - 60px);
  overflow: auto;
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 25px;
  height: 25px;
`;

export const MobileNav = ({ setIsOpen }): JSX.Element => (
  <StyledResponsiveMenu>
    <StyledResponsiveHeader>
      <Logo />
      <StyledCloseIcon onClick={() => setIsOpen(false)} />
    </StyledResponsiveHeader>

    <StyledResponsiveBody>
      {navItems.map(({ title, url }, i) => (
        <StyledResponseiveDiv key={i}>
          <Link to={url}>{title}</Link>
        </StyledResponseiveDiv>
      ))}
    </StyledResponsiveBody>
  </StyledResponsiveMenu>
);
