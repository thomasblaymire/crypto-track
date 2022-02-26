import React from 'react';
import { Table } from './Table';
import { CryptoData } from '../types';
import { Loading } from './Loading';
import { useCryptos } from '../hooks/useCryptos';

interface CryptoDataRequest {
  data: CryptoData[];
  isLoading?: boolean;
  isError?: boolean;
  error?: any;
}

export const CryptoTable = (): JSX.Element => {
  const { data, isLoading, isError, error }: CryptoDataRequest = useCryptos();

  return (
    <>
      {data && <Table data={data} />}
      {isLoading && <Loading position="center" />}
      {isError && <p>{error.message}</p>}
    </>
  );
};
