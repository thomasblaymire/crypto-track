import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Table } from './Table';
import { ALL_COIN_QUERY_STRING } from '../constants';
import { Loading } from './Loading';
import { Pagination } from './Pagination';
import { CryptoData } from '../types';

interface CryptoDataRequest {
  data: CryptoData[];
  hasMore?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isPreviousData?: boolean;
  error?: any;
}

export const CryptoTable = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isFetching, isError, error }: CryptoDataRequest =
    useQuery(
      ['cryptos', pageNumber],
      async () => {
        const response = await fetch(
          `${process.env.COINGEKO_API}/${ALL_COIN_QUERY_STRING(
            null,
            pageNumber
          )}`
        );

        const data = await response.json();
        return data;
      },
      {
        keepPreviousData: true,
        retry: 5,
        refetchInterval: 6000,
      }
    );

  const handlePaginate = (pageNumber: number): void => {
    setPageNumber(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {data && (
        <>
          <Table data={data} />
          <Pagination handlePaginate={handlePaginate} />
        </>
      )}
      {(isLoading || isFetching) && <Loading position="center" />}
      {isError && <p>{error.message}</p>}
    </>
  );
};
