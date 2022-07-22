import { client } from '@helpers/api';
import { useQuery } from 'react-query';
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

function useCryptos(pageNumber: number, user?: any) {
  const currency = window.localStorage.getItem('currency') || 'gbp'; //user.currency || localStorage
  const queryString = `cryptos/${currency}/${pageNumber}`;

  const data: CryptoDataRequest = useQuery(
    ['cryptos', pageNumber],
    () => client(`${queryString}`).then(cryptos => cryptos),
    {
      keepPreviousData: false,
      retry: 5,
      // refetchInterval: 6000,
    }
  );

  return { ...data };
}

export { useCryptos };
