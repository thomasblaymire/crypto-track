import React, { useState } from 'react';
import {
  StyledCryptoWrapper,
  StyledSearch,
  StyledInputWrapper,
  StyledSearchContainer,
  StyledClose,
} from './styled';
import { Results } from './SearchResults';
import { useDebounce } from '@hooks/useDebounce';
import { QUERY_DEBOUNCE_DURATION_MILLISECONDS } from '../../constants';
import SearchIcon from '@assets/search.svg';
import CloseIcon from '@assets/close.svg';

interface SearchInterface {
  toggleSearch: boolean;
  setToggleSearch: (boolean) => void;
}

export const Search = ({
  toggleSearch,
  setToggleSearch,
}: SearchInterface): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChange = event => {
    const { value } = event.target as HTMLFormElement;
    setSearchQuery(value);
  };

  const debouncedSearchTerm = useDebounce(
    searchQuery,
    QUERY_DEBOUNCE_DURATION_MILLISECONDS
  );

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

      <Results searchQuery={debouncedSearchTerm} />
    </StyledCryptoWrapper>
  );
};
