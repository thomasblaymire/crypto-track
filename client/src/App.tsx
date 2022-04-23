import React, { Suspense } from 'react';
import { Loading } from './components/UI/Loading';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from 'react-query';
import { GlobalStyle, darkTheme, lightTheme } from '@helpers//style';
import { Router } from './routes';
import { useLightMode } from '@hooks/useLightMode';
import { Header } from './components/UI/Header';

import { AuthProvider } from '@helpers/auth';

const queryClient = new QueryClient();

// See routes file for a breakdown of all routes.
const App = () => {
  const [theme, toggleTheme, componentMounted] = useLightMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Suspense fallback={<Loading position="center" />}>
          <BrowserRouter>
            <AuthProvider>
              <Header toggleTheme={toggleTheme} theme={theme} />
              <Router />
            </AuthProvider>
          </BrowserRouter>
        </Suspense>
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
