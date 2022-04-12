import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@assets/search.svg';

export const StyledSearch = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.quaternary};
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  border: none;
  padding-left: 1rem;
  line-height: 2rem;

  @media (min-width: 480px) {
    width: 200px;
  }

  span {
    font-size: 1.2rem;
    padding-left: 1rem;
  }
`;

const StyledSearchContainer = styled.div``;

export const SearchToggle = ({
  setToggleSearch,
  toggleSearch,
}): JSX.Element => (
  <StyledSearchContainer>
    <StyledSearch>
      <SearchIcon />
      <div onClick={() => setToggleSearch(!toggleSearch)}>
        <span>Search Cryptocurrencys</span>
      </div>
    </StyledSearch>
  </StyledSearchContainer>
);