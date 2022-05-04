import React from 'react';
import { useRoutes, useLocation, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { WatchList } from './pages/WatchList';
import { Influencers } from './pages/Influencers';
import { Details } from './pages/Details';
import { Markets } from './pages/Markets';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound';
import { Settings } from './pages/Settings';
import { Tools } from './pages/Tools';
import { News } from './pages/News';
import { useAuth } from '@helpers/auth';

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
  const { user } = useAuth();
  const location = useLocation();

  if (!user.token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export { Router };
