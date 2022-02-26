import { useQuery } from 'react-query';
import { ALL_COIN_QUERY_STRING } from '../constants';

// A simple data fetching hook used to fetch all cryptos based on a given users currency.
export const useCryptos = (currency?: string) => {
  return useQuery('cryptos', async () => {
    const response = await fetch(
      `${process.env.COINGEKO_API}/${ALL_COIN_QUERY_STRING(currency)}`
    );
    const data = await response.json();
    return data;
  });
};
