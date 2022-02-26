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
import { Coins } from '../../types';
import SearchIcon from '../../assets/search.svg';
import CloseIcon from '../../assets/close.svg';

interface CryptoResultData {
  results: Coins[];
  setSearchQuery: any;
  searchQuery: string;
  toggleSearch: boolean;
  setToggleSearch: (boolean) => void;
}

export const Search = ({
  results,
  setSearchQuery,
  searchQuery,
  toggleSearch,
  setToggleSearch,
}: CryptoResultData): JSX.Element => {
  const onChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <StyledCryptoWrapper hideToggle={toggleSearch}>
      <StyledSearchContainer>
        <StyledSearch>
          <SearchIcon />
          <StyledInputWrapper>
            <input
              placeholder="Search Cryptocurrencies"
              type="text"
              maxLength={50}
              name="search"
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

      {results &&
        results.map(coin => {
          return (
            <StyledResultsWrapper tabIndex={0}>
              <Results image={coin.large} name={coin.name} />
            </StyledResultsWrapper>
          );
        })}
    </StyledCryptoWrapper>
  );
};
