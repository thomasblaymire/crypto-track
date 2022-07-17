import { storage } from './storage';
import { API_URL } from '../constants';

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

async function handleApiResponse(response): Promise<any> {
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  return Promise.reject(data);
}

async function getUserProfile(): Promise<AuthResponse> {
  const response = await window.fetch(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });
  return handleApiResponse(response);
}

async function loginWithEmailAndPassword(data): Promise<AuthResponse> {
  const response = await window.fetch(`${API_URL}/users/signin`, {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return handleApiResponse(response);
}

async function registerWithEmailAndPassword(data): Promise<AuthResponse> {
  const response = await window.fetch(`${API_URL}/users/signup`, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return handleApiResponse(response);
}

async function storeUserCurrency(data): Promise<AuthResponse> {
  const response = await window.fetch(`${API_URL}/users/currency`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
  return handleApiResponse(response);
}

export {
  storeUserCurrency,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  getUserProfile,
  handleApiResponse,
};
