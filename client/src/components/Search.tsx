import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/search.svg';
import { useNavigate } from "react-router-dom"
import { DELAY_AFTER_KEY_PRESS } from '../constants'

export const StyledSearch = styled.div`
  input {
    background-color: rgb(23, 25, 36);
    color: rgb(100, 107, 128);
    border-radius: 8px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin-top: 2rem;
    width: 200px;
    border: none;
  }


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
  display: flex;
  justify-content: flex-end;
`;

export const Search = ({updateSearchResults}) => {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams()
    if (query) {
      params.append("search", query)
    } else {
      params.delete("search")
    }
    navigate({search: params.toString()})
  }, [query, history])

  const onChange = (e: any) => {
    const query = (e && e.target.value) || '';
    setQuery(query)
    updateSearchResults(query, DELAY_AFTER_KEY_PRESS);
  }

  const onKeyPress = () => {}

  const handleFocus = () => {}

  return (
    <StyledSearchContainer>
      <StyledSearch >
        <SearchIcon />
          <input
            placeholder="Search Cryptos"
            type="search"
            maxLength={50}
            name="search-bar"
            onKeyPress={onKeyPress}
            onFocus={handleFocus}
            onChange={onChange}
            value={query}
          />
      </StyledSearch>
    </StyledSearchContainer>
  );
};
