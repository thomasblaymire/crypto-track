import { useEffect, useState } from 'react';
import { storage } from '../helpers/storage';

const API_URL = 'http://127.0.0.1:3000/api';

export const useWatchList = () => {
  const [watchList, setWatchList] = useState(null);
  const [watchListError, setWatchListError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await window.fetch(`${API_URL}/watchlist`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${storage.getToken()}`,
          },
        });

        const data = await response.json();

        setWatchList(data);
      } catch (err) {
        console.log(err);
      } finally {
        console.log('TEST');
      }
    })();
  }, []);

  async function addWatchList(cryptoId): Promise<any> {
    return window
      .fetch(`${API_URL}/watchlist`, {
        method: 'POST',
        body: JSON.stringify(cryptoId),
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${storage.getToken()}`,
        },
      })
      .then(data => data);
  }

  const watchListAdd = async (id: any) => {
    try {
      const watchList = await addWatchList({
        cryptoId: id,
      });
      const watchListResponse = await watchList.json();
      console.log(watchListResponse);
    } catch (error) {
      console.log(error);
    }
  };

  // const watchListGet = async () => {
  //   try {
  //     const watchList = await getWatchList();
  //     console.log('TOM watchList', watchList);
  //     // const watchListResponse = await watchList.json();
  //     // return watchListResponse;
  //   } catch (error) {
  //     console.log('TOM error', error);
  //   }
  // };

  return {
    watchListAdd,
    watchList,
    watchListError,
  };
};
