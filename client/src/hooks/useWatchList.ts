import { useQuery } from 'react-query';

// This will eventaully hit the api to just return a users given cryptos
export const useWatchList = () => {
  const myHeaders = new Headers();

  myHeaders.append(
    'Authorization',
    'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGMxMWFhNDI0YmMxMGE1MjUzOWNmMSIsImVtYWlsIjoiaGZoQHRlc3QuY29tIiwiaWF0IjoxNjQ5MTUyNzU0fQ.pgoooUmMbBiXuSnkv7IuM8yh49oOUQB3Ofcn3QVesl0'
  );
  const { data, isLoading, isError, error }: any = useQuery(
    ['cryptos'],
    async () => {
      const response = await fetch(
        `https://553e-45-67-96-230.ngrok.io/api/watchlist/`,
        {
          headers: myHeaders,
        }
      );

      const data = await response.json();
      return data;
    }
  );
  return {
    watchlist: data,
    isLoading,
    isError,
    error,
  };
};
