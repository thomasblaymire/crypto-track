import React from 'react';
import { useRoutes, useLocation, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { WatchList } from './components/WatchList';
import { Influencers } from './components/Influencers';
import { CryptoDetails } from './components/CryptoDetails';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Reset } from './components/Reset';
import { Register } from './components/Register';
import { NotFound } from './components/NotFound';
import { Settings } from './components/Settings';
import { useAuth } from './hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

const Router = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
      index: true,
    },
    {
      path: '/currencies',
      element: <Home />,
    },
    {
      path: '/currencies/:crypto',
      element: <CryptoDetails />,
    },
    {
      path: '/influencers',
      element: <Influencers />,
    },
    {
      path: '/watchlist',
      element: <WatchList />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/signin',
      element: <Signin />,
    },
    {
      path: '/reset',
      element: <Reset />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/settings',
      element: <Settings />,
    },
    {
      path: '*',
      element: (
        <ProtectedRoute>
          <NotFound />
        </ProtectedRoute>
      ),
    },
  ]);
  return element as any;
};

export { Router };
