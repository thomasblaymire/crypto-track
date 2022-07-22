import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title?: string;
  icon?: string;
  meta?: string;
  change?: string;
}

const StyledCard = styled.div`
  width: 100%;
  background: #13131d;
  padding: 3rem;
  font-size: 2rem;

  &:not(:last-child) {
    border-right: solid 1px #222231;
  }
`;

const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCardBody = styled.div``;

export const Card = ({ title, icon, meta, change }: CardProps): JSX.Element => (
  <StyledCard>
    <StyledCardHeader>
      <h4>{title}</h4>
      {icon}
    </StyledCardHeader>
    <StyledCardBody>
      <h5>{meta}</h5>
      <span>{change}</span>
    </StyledCardBody>
  </StyledCard>
);
