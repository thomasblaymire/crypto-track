import React from 'react';
import styled from 'styled-components';

interface StatsProps {
  stats: any;
}

const StyledStatsBar = styled.div`
  display: none;
  font-size: 1.1rem;
  padding-top: 1rem;

  @media (min-width: 480px) {
    display: flex;
  }
`;

const StyledStatBlock = styled.div`
  padding: 0 1rem;
`;

const StyledStatTitle = styled.span`
  padding-right: 0.25rem;
  color: grey;
`;

export const StatsBar = ({ stats }: StatsProps): JSX.Element => (
  <StyledStatsBar>
    {stats &&
      stats.map((stat, i) => (
        <StyledStatBlock key={i}>
          <StyledStatTitle>{stat.title}</StyledStatTitle>
          <span>{stat.value}</span>
        </StyledStatBlock>
      ))}
  </StyledStatsBar>
);