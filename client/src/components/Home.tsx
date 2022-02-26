import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from './Layout';
import { CryptoTable } from './CryptoTable';
import { Search } from './Search/index';
import { SearchToggle } from './SearchToggle';
import { useDebounce } from '../hooks/debounce';
import { fetchCoinByQuery } from '../helpers/crypto';
import { QUERY_DEBOUNCE_DURATION_MILLISECONDS } from '../constants';

const StyledRow = styled.div`
  display: flex;
  padding-top: 4rem;
  margin-bottom: 4rem;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`;

export const Home = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [toggleSearch, setToggleSearch] = useState(false);

  const debouncedSearchTerm = useDebounce(
    searchQuery,
    QUERY_DEBOUNCE_DURATION_MILLISECONDS
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchCoinByQuery(debouncedSearchTerm).then(results => {
        setSearchResults(results.coins.slice(0, 5));
      });
    } else {
      setSearchResults(null);
    }
  }, [debouncedSearchTerm]);

  return (
    <Layout>
      <StyledRow>
        <SearchToggle
          setToggleSearch={setToggleSearch}
          toggleSearch={toggleSearch}
        />

        {toggleSearch && (
          <Search
            results={searchResults}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            setToggleSearch={setToggleSearch}
            toggleSearch={toggleSearch}
          />
        )}
      </StyledRow>

      <CryptoTable />
    </Layout>
  );
};
