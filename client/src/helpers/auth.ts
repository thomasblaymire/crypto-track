import { storage } from './storage';
import { client } from '@helpers/api';
import { AuthResponse } from '../types/types';

async function logout() {
  await storage.clearToken();
}

export async function handleUserResponse(response) {
  const { token, data } = response;
  storage.setToken(token);
  return data.user;
}

function getUser({ token }): Promise<AuthResponse> {
  return client('users/me', { data: { token } }).then(handleUserResponse);
}

function login({ email, password }): Promise<AuthResponse> {
  return client('users/signin', { data: { email, password } }).then(
    handleUserResponse
  );
}

function register({ name, email, password }): Promise<AuthResponse> {
  return client('users/signup', { data: { name, email, password } }).then(
    handleUserResponse
  );
}

function setUserCurrency({ token, currency }): Promise<AuthResponse> {
  return client('users/currency', {
    method: 'PATCH',
    data: { token, currency },
  }).then(handleUserResponse);
}

export { logout, login, register, getUser, setUserCurrency };
