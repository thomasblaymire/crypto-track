import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Table } from '@components/Table';
import { Loading } from '@components/UI/Loading';
import { Layout } from '@components/UI/Layout';
import { Pagination } from '@components/UI/Pagination';
import { CryptoData } from '../types/types';

interface CryptoDataRequest {
  data: CryptoData[];
  hasMore?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isPreviousData?: boolean;
  error?: any;
}

export const WatchList = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);

  // This will eventaully hit the api to just return a users given cryptos
  const { data, isLoading, isError, error }: CryptoDataRequest = useQuery(
    ['cryptos', pageNumber],
    async () => {
      const response = await fetch(`${process.env.BACKEND_API}/api/watchlist/`);

      const data = await response.json();
      return data;
    },
    {
      keepPreviousData: true,
      retry: 5,
    }
  );

  const handlePaginate = (pageNumber: number): void => {
    setPageNumber(pageNumber);
    window.scrollTo(0, 0);
  };

  const onFetchData = () => {
    // console.log('FETCH INITIAL DATA AND WATCHLIST ITEMS');
  };

  return (
    <Layout>
      {data && (
        <>
          {/* <Table data={data} onFetchData={onFetchData} /> */}
          <Pagination handlePaginate={handlePaginate} />
        </>
      )}
      {isLoading && <Loading position="center" />}
      {isError && <p>{error.message}</p>}
    </Layout>
  );
};
