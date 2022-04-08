import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSearch } from '@hooks/useSearch';

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

export const StyledResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 10px;
  color: rgb(133, 140, 162);

  &:focus {
    background: red;
  }
`;

export const Results = ({ searchQuery }): JSX.Element => {
  const { data }: any = useSearch(searchQuery);

  return (
    <StyledResultsWrapper tabIndex={0}>
      {data &&
        data.map(coin => (
          <StyledLink to={`/currencies/${coin.id}`}>
            <StyledResults>
              <img src={coin.thumb} />
              <span>{coin.name}</span>
            </StyledResults>
          </StyledLink>
        ))}
    </StyledResultsWrapper>
  );
};
