import React from 'react';
import styled from 'styled-components';

interface StatsProps {
  stats: any;
}

const StyledStatsBar = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #d5d5d5;
`;

const StyledStatBlock = styled.div`
  padding: 0 1rem;
`;

const StyledStatTitle = styled.span`
  padding-right: 0.25rem;
  color: grey;
`;

export const StatsBar = ({ stats }: StatsProps): JSX.Element => {
  console.log('TOM stats', stats);
  return (
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
};
