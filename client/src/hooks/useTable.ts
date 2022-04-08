import { useCryptos } from '@hooks/useCryptos';
import { useWatchList } from '@hooks/useWatchList';
import { useQueries } from 'react-query';

// This is the primary hook for loading the table data, ths will make two subsequent calls one to /api/cryptos and another to /api/watchlist
export const useTable = (pageNumber: number) => {
  // const queryResults = useQueries([
  //   { queryKey: ['cryptos', 1], queryFn: fetchPost },
  //   { queryKey: ['watchlist', 2], queryFn: fetchPost },
  // ]);

  // const isLoading = queryResults.some(query => query.isLoading);

  // const { cryptos, error, isLoading, isError } = useCryptos(pageNumber);
  const { watchlist } = useWatchList();

  // const {
  //   watchlist,
  //   error: watchlistError,
  //   isLoading: watchlistIsLoading,
  //   isError: watchlistIsError,
  // } = useWatchList();

  // const isLoading = watchlistIsLoading || cryptosIsLoading;
  // const error = watchlistError || cryptosError;
  // const isError = watchlistIsError || cryptoIsError;

  // console.log('TOM watchList', watchlist);
  // console.log('TOM cryptos', cryptos);
  console.log('TOM watchlist', watchlist);

  // let result = cryptos.filter(o1 => !watchlist.some(o2 => o1.id === o2.id));

  // console.log('TOM RESULT', result);

  // const data = { ...watchlist, cryptos };

  return {
    // error,
    // isLoading,
    // isError,
    // cryptos,
  };
};
