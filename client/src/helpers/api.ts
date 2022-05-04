// The idea of this file is to provide a centralized set of helpers that we can all when we want to pass data to a specific endpoint.

const SINGLE_COIN_QUERY_STRING = (crypto?: string): string =>
  `coins/${crypto}?localization=false&tickers=false&market_data=false&developer_data=false&sparkline=false`;

const ALL_COIN_QUERY_STRING = (currency?: string, page?: number): string => {
  // Currency will eventually be stored on userData with backend, temporarily lets use localStorage.
  // const defaultCurrency = currency || 'gbp';
  // const userCurrency = window.localStorage.getItem('currency');

  // if (userCurrency) {
  //   currency = userCurrency;
  // }

  const defaultCurrency = window.localStorage.getItem('currency') || 'gbp';

  return `api/cryptos/${defaultCurrency}/${page}`;
};

import { storage } from './storage';

interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  token?: string;
}

const API_URL = 'http://127.0.0.1:3000/api';

export async function handleApiResponse(response) {
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
}

export async function getUserProfile() {
  return await fetch(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  }).then();
}

export async function loginWithEmailAndPassword(data): Promise<AuthResponse> {
  return window
    .fetch(`${API_URL}/users/signin`, {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(handleApiResponse);
}

export async function registerWithEmailAndPassword(
  data
): Promise<AuthResponse> {
  return window
    .fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
    .then(handleApiResponse);
}

export { ALL_COIN_QUERY_STRING, SINGLE_COIN_QUERY_STRING };
