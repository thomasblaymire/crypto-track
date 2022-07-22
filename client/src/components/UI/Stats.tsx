import React from 'react';
import styled from 'styled-components';

type StatsType = {
  title: string;
  value: string;
};
interface StatsProps {
  stats: StatsType[];
}

const StyledStatsBar = styled.div`
  display: none;
  font-size: 1.1rem;

  @media (min-width: 480px) {
    display: flex;
  }
`;

const StyledStatBlock = styled.div`
  margin-right: 15px;
`;

const StyledStatTitle = styled.span`
  padding-right: 0.5rem;
  color: ${({ theme }) => theme.colors.textColorSub};
`;

const StyledStatValue = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export const StatsBar = ({ stats }: StatsProps): JSX.Element => (
  <StyledStatsBar>
    {stats.map((stat, i) => (
      <StyledStatBlock key={i}>
        <StyledStatTitle>
          {stat.title}:{''}
        </StyledStatTitle>
        <StyledStatValue>{stat.value}</StyledStatValue>
      </StyledStatBlock>
    ))}
  </StyledStatsBar>
);
