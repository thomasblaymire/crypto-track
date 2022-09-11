import { client } from '@helpers/api';
import { storage } from '@helpers/storage';
import { useQuery } from 'react-query';
import { CryptoData } from '../types/types';

interface CryptoDataRequest {
  data: CryptoData[];
  hasMore?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  isFetching?: boolean;
  isPreviousData?: boolean;
  error?: Error;
}

function useCryptos(pageNumber: number, currency: string) {
  let userCurrency = storage.getItem(currency) || 'gbp';

  if (currency) {
    userCurrency = currency;
  }

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    isFetching,
  }: CryptoDataRequest = useQuery(
    ['cryptos', pageNumber],
    () =>
      client(`cryptos/${userCurrency}/${pageNumber}`).then(cryptos => cryptos),
    {
      keepPreviousData: false,
      retry: 5,
      //refetchInterval: 6000,
    }
  );

  return {
    cryptos: data,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    error,
  };
}

export { useCryptos };
