import React from 'react';
import styled from 'styled-components';

interface StatsProps {
  stats: any;
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
  padding-right: 0.25rem;
  color: #eaecef;
`;

const StyledStatValue = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export const StatsBar = ({ stats }: StatsProps): JSX.Element => (
  <StyledStatsBar>
    {stats &&
      stats.map((stat, i) => (
        <StyledStatBlock key={i}>
          <StyledStatTitle>
            {stat.title}:{''}
          </StyledStatTitle>
          <StyledStatValue>{stat.value}</StyledStatValue>
        </StyledStatBlock>
      ))}
  </StyledStatsBar>
);
