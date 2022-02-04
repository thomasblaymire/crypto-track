import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { StatsBar } from './Status';
import { AuthActions } from './AuthActions';
import { NavigationItem, Stats } from '../types';
import { device } from '../helpers/device';

interface HeaderProps {
  navItems: NavigationItem[];
  stats: Stats[];
}

const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0px;
  width: 100%;
  justify-content: space-between;

  @media ${device.mobileL} {
    justify-content: initial;
  }
`;

const StyledActions = styled.div`
  display: none;
  @media ${device.mobileL} {
    display: flex;
    align-items: center;
  }
`;

const StyledResponsiveMenu = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  z-index: 932;
  color: rgb(255, 255, 255);
  right: 0px;
  transition: right 0.2s ease 0s;
  height: calc(100% - 60px);
  overflow: auto;
  background: ${props => props.theme.colors.primary};
`;

const StyledResponseiveDiv = styled.div`
  padding: 0px 8px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
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
  -webkit-box-align: center;
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

export const Header = ({ navItems, stats }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      {stats && <StatsBar stats={stats} />}
      <StyledHeaderWrapper>
        <Logo />
        <Navigation navItems={navItems} setIsOpen={setIsOpen} isOpen={isOpen} />
        <StyledActions>
          <AuthActions />
        </StyledActions>
        {isOpen && (
          <>
            <StyledResponsiveMenu>
              <StyledResponsiveHeader>
                <Logo />
                <button onClick={() => setIsOpen(false)}>CLOSE</button>
              </StyledResponsiveHeader>

              <StyledResponsiveBody>
                {navItems.map((item, i) => (
                  <StyledResponseiveDiv key={i}>
                    <a href="/">{item.item}</a>
                  </StyledResponseiveDiv>
                ))}
              </StyledResponsiveBody>
            </StyledResponsiveMenu>
          </>
        )}
      </StyledHeaderWrapper>
    </Fragment>
  );
};
