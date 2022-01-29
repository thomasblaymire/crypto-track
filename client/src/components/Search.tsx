import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/search.svg';

export const StyledSearch = styled.div`
  background: #13131c;
  color: rgb(100, 107, 128);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 200px;
  border: none;
  padding-left: 1rem;
  line-height: 2rem;

  span {
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    padding-left: 1rem;
  }
`;

const StyledSearchContainer = styled.div``;

export const SearchToggle = ({ setToggleSearch, toggleSearch }) => (
  <StyledSearchContainer>
    <StyledSearch>
      <SearchIcon />
      <div onClick={() => setToggleSearch(!toggleSearch)}>
        <span>Search Cryptocurrencys</span>
      </div>
    </StyledSearch>
  </StyledSearchContainer>
);
