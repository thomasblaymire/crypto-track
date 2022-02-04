import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const StyledResults = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  min-height: 36px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 1rem;
  }

  span {
    font-size: 14px;
  }
`;

export const Results = ({ name, image }): JSX.Element => (
  <StyledLink to="/" tabIndex={0}>
    <StyledResults>
      <img src={image} />
      <span>{name}</span>
    </StyledResults>
  </StyledLink>
);
