import { useQuery } from 'react-query';
import { ALL_COIN_QUERY_STRING } from '@helpers/api';
import { CryptoData } from '../types/types';

interface CryptoDataRequest {
  data: CryptoData[];
  hasMore?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isPreviousData?: boolean;
  error?: Error;
}

// A simple data fetching hook used to fetch all cryptos based on a given users currency.
export const useCryptos = (pageNumber: number) => {
  const { data, isLoading, isError, error }: CryptoDataRequest = useQuery(
    ['cryptos', pageNumber],
    async () => {
      const response = await fetch(
        `${process.env.BACKEND_API}/${ALL_COIN_QUERY_STRING(null, pageNumber)}`
      );

      const data = await response.json();
      return data;
    },
    {
      keepPreviousData: false,
      retry: 5,
      refetchInterval: 6000,
    }
  );

  return {
    cryptos: data,
    isLoading,
    isError,
    error,
  };
};
