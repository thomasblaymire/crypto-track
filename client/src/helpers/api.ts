import { QueryCache } from 'react-query';
import { API_URL } from '../constants';
import * as auth from './auth';

const queryCache = new QueryCache({
  onError: error => {
    console.log(error);
  },
  onSuccess: data => {
    console.log(data);
  },
});

async function client(
  endpoint,
  { data, token, headers: customHeaders, ...customConfig }: any = {}
) {
  console.log('TOM in client', endpoint);
  console.log('TOM data', data);
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return window.fetch(`${API_URL}/${endpoint}`, config).then(async response => {
    if (response.status === 401) {
      queryCache.clear();
      await auth.logout();
      // refresh the page for them
      window.location.assign(window.location as any);
      return Promise.reject({ message: 'Please re-authenticate.' });
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { client };
