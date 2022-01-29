import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from './Layout';
import { CryptoTable } from './CryptoTable';
import { Search } from './Search/index';
import { SearchToggle } from './Search';
import { useFetch } from '../hooks/fetch';
import { useDebounce } from '../hooks/debounce';
import { fetchCoinByQuery } from '../helpers/crypto';
import { CryptoData } from '../types';
import {
  QUERY_DEBOUNCE_DURATION_MILLISECONDS,
  ALL_COIN_QUERY_STRING,
} from '../constants';

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

interface FetchCryptoCoinsInterface {
  data?: CryptoData[];
  isLoading?: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

export const Home = (): JSX.Element => {
  const { data, hasError, errorMessage }: FetchCryptoCoinsInterface = useFetch({
    initialUrl: `${process.env.COINGEKO_API}/${ALL_COIN_QUERY_STRING()}`,
    interval: 5,
    revalidate: true,
  });

  const [searchQuery, setSearchQuery] = useState('');
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
      {hasError && <p>{errorMessage}</p>}

      <StyledRow>
        <SearchToggle
          setToggleSearch={setToggleSearch}
          toggleSearch={toggleSearch}
        />
        {toggleSearch && (
          <Search
            data={searchResults}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            setToggleSearch={setToggleSearch}
            toggleSearch={toggleSearch}
          />
        )}
      </StyledRow>

      {data && <CryptoTable data={data} />}
    </Layout>
  );
};
