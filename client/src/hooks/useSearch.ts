import { useQuery } from 'react-query';

interface CancellablePromise<T> extends Promise<T> {
  cancel: () => void;
}

type QueryPromise = CancellablePromise<string | boolean>;

// In order to save bandwidth I decided to implement query cancellation with promises,
// therefore when a search query is cancelled e.g from a 404 the browser will not download the data. #perf
export const useSearch = (query?: string) => {
  return useQuery(
    ['query', query],
    async () => {
      const controller = new AbortController();
      const signal = controller.signal;

      const promise: Partial<QueryPromise> = new Promise<void>(resolve =>
        resolve()
      )
        .then(() => {
          return fetch(`${process.env.COINGEKO_API}/search?query=${query}`, {
            method: 'GET',
            signal,
          });
        })
        .then(res => {
          return res.json();
        })
        .then(data => data.coins.slice(0, 5));

      promise.cancel = () => {
        controller.abort();
      };

      return promise as QueryPromise;
    },

    {
      retry: 2,
      enabled: true,
    }
  );
};
