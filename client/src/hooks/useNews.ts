import { client } from '@helpers/api';
import { useQuery } from 'react-query';

function useNews(pageNumber: number, query: string) {
  const { data, isLoading, isSuccess, isError, error, isFetching }: any =
    useQuery(
      ['news', pageNumber],
      () => client(`news/${query}/${pageNumber}`).then(news => news),
      {
        keepPreviousData: false,
      }
    );

  return {
    news: data,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    error,
  };
}

export { useNews };
