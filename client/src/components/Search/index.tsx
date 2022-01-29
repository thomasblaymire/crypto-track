import React from 'react';
import styled from 'styled-components';
import { Results } from '../Results';
import SearchIcon from '../../assets/search.svg';
import CloseIcon from '../../assets/close.svg';

interface CryptoResultData {
  large: string;
  name: string;
  id: string;
  toggleSearch: boolean;
  setToggleSearch: void;
}

interface WrapperProps {
  hideToggle: boolean;
}

const StyledCryptoWrapper = styled.div<WrapperProps>`
  width: 400px;
  min-height: 140px;
  max-height: 610px;
  border-radius: 8px;
  background-color: rgb(23, 25, 36);
  position: ${({ hideToggle }) => (hideToggle ? `absolute` : `relative`)};
`;

export const StyledSearch = styled.div`
  padding: 18px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(133, 140, 162);

  input {
    border: none;
    outline: none;
    width: 100%;
    box-shadow: none;
    background-color: rgb(23, 25, 36);
    color: rgb(255, 255, 255);
  }

  svg {
    bottom: 8px;
    left: 10px;
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
  }
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  padding: 0px 4px;
`;

const StyledSearchContainer = styled.div``;

const StyledResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 10px;
  color: rgb(133, 140, 162);
`;

const StyledClose = styled.div`
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(50, 53, 70);
  color: rgb(23, 25, 36);
  border-radius: 8px;
`;

export const Search = ({
  data,
  setSearchQuery,
  searchQuery,
  toggleSearch,
  setToggleSearch,
}): JSX.Element => {
  const onChange = (e: any) => {
    const value = (e && e.target.value) || '';
    setSearchQuery(value);
  };

  return (
    <StyledCryptoWrapper hideToggle={toggleSearch}>
      <StyledSearchContainer>
        <StyledSearch>
          <SearchIcon />
          <StyledInputWrapper>
            <input
              placeholder="Search Cryptocurrencies"
              type="search"
              maxLength={50}
              name="search-bar"
              autoComplete="off"
              autoFocus
              onChange={onChange}
              value={searchQuery}
            />
            <StyledClose onClick={() => setToggleSearch(!toggleSearch)}>
              <CloseIcon />
            </StyledClose>
          </StyledInputWrapper>
        </StyledSearch>
      </StyledSearchContainer>

      {data &&
        data.map(coin => {
          return (
            <StyledResultsWrapper>
              <Results image={coin.large} name={coin.name} />
            </StyledResultsWrapper>
          );
        })}
    </StyledCryptoWrapper>
  );
};
