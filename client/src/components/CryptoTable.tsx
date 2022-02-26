import React from 'react';
import { Table } from './Table';
import { useFetch } from '../hooks/fetch';
import { ALL_COIN_QUERY_STRING } from '../constants';
import { CryptoData } from '../types';
import { Loading } from './Loading';

interface FetchCryptoCoinsInterface {
  data: CryptoData[];
  isLoading?: boolean;
  hasError?: boolean;
  isInitialLoad: number;
  errorMessage?: string;
}

export const CryptoTable = (): JSX.Element => {
  const {
    data,
    hasError,
    errorMessage,
    isInitialLoad,
  }: FetchCryptoCoinsInterface = useFetch({
    initialUrl: `${process.env.COINGEKO_API}/${ALL_COIN_QUERY_STRING()}`,
    interval: 5,
    revalidate: true,
  });

  return (
    <>
      {data && <Table data={data} />}
      {isInitialLoad === 0 && <Loading position="center" />}
      {hasError && <p>{errorMessage}</p>}
    </>
  );
};
