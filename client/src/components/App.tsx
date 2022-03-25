import React, { Suspense } from 'react';
import { Loading } from './Loading';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AuthProvider } from '../providers/AuthProvider';
import { GlobalStyle, Theme } from '../helpers/style';
import { Router } from '../routes';

const queryClient = new QueryClient();

// See routes file for a breakdown of all routes.
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Suspense fallback={<Loading position="center" />}>
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </BrowserRouter>
      </Suspense>
      <ReactQueryDevtools />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
