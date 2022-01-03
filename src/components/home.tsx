import React from 'react';
import styled from 'styled-components';
import { Layout } from './Layout';
import { API_URL } from '../constants';
import { useFetch } from '../hooks/fetch';
import { CryptoTable } from './CryptoTable';
import Loading from './Loading';

interface HomeProps {}

export const Home = ({}: HomeProps): JSX.Element => {
  // const [filteredResults, setFilteredResults] = useState([]);
  // const [searchInput, setSearchInput] = useState('');

  const { data, loading }: any = useFetch({
    url: API_URL,
    params: {
      headers: {
        'X-CMC_PRO_API_KEY': '84688968-53a0-4a2e-88f0-e7cfa246c8a6',
      },
    },
  });

  const StyledLoading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  // const searchItems = searchValue => {
  //   setSearchInput(searchValue);
  //   if (searchInput !== '' && data) {
  //     const filteredData = data.data.filter(item => {
  //       return Object.values(item)
  //         .join('')
  //         .toLowerCase()
  //         .includes(searchInput.toLowerCase());
  //     });
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults(data);
  //   }
  // };

  const searchInput = [];
  const filteredResults = null;

  return (
    <Layout>
      {loading && (
        <StyledLoading>
          <Loading />
        </StyledLoading>
      )}
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
  );
};
