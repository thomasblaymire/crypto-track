import React from 'react';
import {
  StyledCryptoWrapper,
  StyledSearch,
  StyledInputWrapper,
  StyledSearchContainer,
  StyledResultsWrapper,
  StyledClose,
} from './styled';
import { Results } from '../Results';
import SearchIcon from '../../assets/search.svg';
import CloseIcon from '../../assets/close.svg';

interface CryptoResultData {
  data: any;
  setSearchQuery: (value: HTMLElement | string) => void;
  searchQuery: string;
  toggleSearch: void;
  setToggleSearch: void;
}

export const Search = ({
  data,
  setSearchQuery,
  searchQuery,
  toggleSearch,
  setToggleSearch,
}: CryptoResultData): JSX.Element => {
  const onChange = event => {
    const value = (event && (event.target as HTMLElement)) || '';
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
            <StyledClose onClick={() => lsetToggleSearch(!toggleSearch)}>
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
