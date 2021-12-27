import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import { StatsBar } from '../components/stats';

interface HeaderProps {
  navigation: any;
  stats: any;
}

const StyledHeader = styled.header``;

const StyledHeaderLogo = styled(Logo)`
  height: 50px;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  padding: 1.5rem 0;
`;

export const Header = ({ navigation, stats }: HeaderProps): JSX.Element => (
  <StyledHeader>
    {stats && <StatsBar stats={stats} />}
    <StyledHeaderWrapper>
      <StyledHeaderLogo />
    </StyledHeaderWrapper>
  </StyledHeader>
);
