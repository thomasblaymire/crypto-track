import React, { useEffect, useState } from 'react';
import { Header } from './header';
import { Layout } from './layout';
import { API_URL } from '../constants';
import { useFetch } from '../hooks/fetch';
import { CryptoTable } from '../components/CryptoTable';
import { Loading } from '../components/loading';

interface HomeProps {}

export const Home = ({}: HomeProps): JSX.Element => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const { data, loading }: any = useFetch({
    url: API_URL,
    params: {
      headers: {
        'X-CMC_PRO_API_KEY': '84688968-53a0-4a2e-88f0-e7cfa246c8a6',
      },
    },
  });

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchInput !== '' && data) {
      const filteredData = data.data.filter(item => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <>
      <Layout>
        {loading && <Loading />}
        {data && (
          <div>
            {searchInput.length > 1 ? (
              <CryptoTable data={filteredResults} />
            ) : (
              <CryptoTable data={data.data} />
            )}
          </div>
        )}
      </Layout>
    </>
  );
};
