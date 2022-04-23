import { useMutation } from 'react-query';

// This will eventaully hit the api to just return a users given cryptos
export const useWatchList = () => {
  const mutation = useMutation(
    (data: any) => {
      const { cryptoId } = data;
      return fetch('http://127.0.0.1:3000/api/watchlist/', {
        method: 'POST',
        body: JSON.stringify({
          cryptoId,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      });
    }
  );

  // const { data, isLoading, isError, error }: any = useMutation(
  //   ['cryptos'],
  //   async () => {
  //     const response = await fetch(`http://127.0.0.1:3000/api/watchlist/`);
  //     const data = await response.json();
  //     return data;
  //   }
  // );

  return {
    watchlist: data,
    isLoading,
    isError,
    error,
  };
};
