import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyle, darkTheme, lightTheme } from '@helpers//style';
import { FullPageSpinner } from '@components/UI/FullPageSpinner';
import { useLightMode } from '@hooks/index';
import { useAuth } from './context/auth';

const AuthenticatedApp = React.lazy(
  () => import(/* webpackPrefetch: true */ './authenticated-app')
);
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'));

function App() {
  const { user } = useAuth();
  const [theme, toggleTheme] = useLightMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const props = { user, toggleTheme, theme };

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        {user ? (
          <AuthenticatedApp {...props} />
        ) : (
          <UnauthenticatedApp {...props} />
        )}
        <ReactQueryDevtools />
      </ThemeProvider>
    </React.Suspense>
  );
}

export { App };
