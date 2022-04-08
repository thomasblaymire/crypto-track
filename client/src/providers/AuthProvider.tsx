import React, { useState, useEffect, ReactNode, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage, setLocalStorage } from '@helpers/storage';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getLocalStorage('userId');
    if (token) {
      setToken(token);
    }
  }, []);

  const handleLogout = (): void => {
    setLocalStorage('userId', null);
    navigate('/currencies');
    setToken(null);
  };

  const value = {
    token,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
