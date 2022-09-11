import { useQuery, useMutation } from 'react-query';
import { client } from '@helpers/api';
import { storage } from '@helpers/storage';

function useWatchList() {
  const { data: watchListItems } = useQuery('watch-list', () =>
    client(`watchlist`, { token: storage.getToken() }).then(data => data)
  );
  return watchListItems ?? [];
}

// function useAddWatchListItem(value) {
//   console.log('TOm value', value);
//   return useMutation(({ cryptoId }: any) =>
//     client(`watchlist/add`, { data: { value }, token: storage.getToken() })
//   );
// }

function useRemoveWatchListItem() {
  return useMutation(({ cryptoId }: any) =>
    client(`watchlist/remove/${cryptoId}`, {
      method: 'DELETE',
      token: storage.getToken(),
    })
  );
}

export { useWatchList, useRemoveWatchListItem };
