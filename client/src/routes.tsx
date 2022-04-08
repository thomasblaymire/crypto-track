import React from 'react';
import { useRoutes, useLocation, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { WatchList } from './pages/WatchList';
import { Influencers } from './pages/Influencers';
import { Details } from './pages/Details';
import { Signin } from './pages/Signin';
import { Reset } from './pages/Reset';
import { Markets } from './pages/Markets';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound';
import { Settings } from './pages/Settings';
import { Tools } from './pages/Tools';
import { News } from './pages/News';
import { useAuth } from '@hooks/useAuth';

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
      element: <Details />,
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
      path: '/news',
      element: <News />,
    },
    {
      path: '/markets',
      element: <Markets />,
    },
    {
      path: '/tools',
      element: <Tools />,
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

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export { Router };
