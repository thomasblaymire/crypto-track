import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useEffect,
} from 'react';
import { QueryCache } from 'react-query';
import * as auth from '@helpers/auth';
import { client } from '@helpers/api';
import { useAsync } from '@hooks/useAsync';
import { FullPageSpinner } from '@components/UI/FullPageSpinner';
import { FullPageErrorFallback } from '@components/UI/FullPageErrorFallback';
import { storage } from '@helpers/storage';

const queryCache = new QueryCache({
  onError: error => {
    console.log(error);
  },
  onSuccess: data => {
    console.log(data);
  },
});

async function bootstrapAppData() {
  let user = null;
  const token = storage.getToken();

  if (token) {
    const data = await client('users/me', { token });
    user = data.data.user;
  }

  return user;
}

const AuthContext = createContext(null);
AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync();

  useEffect(() => {
    const appDataPromise = bootstrapAppData();
    run(appDataPromise);
  }, [run]);

  const login = useCallback(
    form => auth.login(form).then(user => setData(user)),
    [setData]
  );

  const register = useCallback(
    form => auth.register(form).then(user => setData(user)),
    [setData]
  );

  const logout = useCallback(() => {
    auth.logout();
    queryCache.clear();
    storage.clearToken();
    setData(null);
  }, [setData]);

  const value = useMemo(
    () => ({ user, login, logout, register }),
    [login, logout, register, user]
  );

  if (isLoading || isIdle) {
    return <FullPageSpinner />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />;
  }

  throw new Error(`Unhandled status: ${status}`);
}

function useAuth(): any {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

function useClient() {
  const { user }: any = useAuth();
  const token = user?.token;
  return useCallback(
    (endpoint, config) => client(endpoint, { ...config, token }),
    [token]
  );
}

export { AuthProvider, useAuth, useClient };
