import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/search.svg';

export const StyledSearch = styled.div`
  background-color: rgb(23, 25, 36);
  color: rgb(100, 107, 128);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  margin-left: 8px;

  div {
    display: flex;
    flex: 1 1 0%;
    font-weight: 600;
    font-size: 12px;
    margin-left: 4px;
    width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const StyledSearchContainer = styled.div`
  position: relative;
`;

const StyledSearchDialog = styled.div`
  width: 400px;
  min-height: 140px;
  max-height: 610px;
  border-radius: 8px;
  background-color: rgb(23, 25, 36);

  z-index: 9999;
  visibility: visible;
  position: absolute;
  left: 0px;
  top: 0px;
  margin: 0px;
  transform: translate3d(925px, 49px, 0px);
`;

export const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const [searchDisplay, setSearchDisplay] = useState(false);

  return (
    <StyledSearchContainer>
      <StyledSearch onClick={() => setSearchDisplay(true)}>
        <SearchIcon />
        <div>Search</div>
      </StyledSearch>
      {searchDisplay && (
        <StyledSearchDialog>
          <input
            placeholder="Search..."
            value={inputValue}
            type="search"
            name="search-bar"
            onInput={event => {
              setInputValue(event.currentTarget.value);
            }}
          />
        </StyledSearchDialog>
      )}
    </StyledSearchContainer>
  );
};
