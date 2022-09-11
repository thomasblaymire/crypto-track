import React from 'react';
import styled from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorMessage } from '@components/UI/ErrorMessage';
import { FullPageErrorFallback } from '@components/UI/FullPageErrorFallback';
import { Header } from '@components/UI/Header';
import { Router } from './routes';

const StyledCustomError = styled.div`
  height: '100%';
  display: 'flex';
  flex-direction: 'column';
  justify-content: flex;
  align-items: center;
`;

function ErrorFallback({ error }): JSX.Element {
  return (
    <StyledCustomError>
      <ErrorMessage error={error} />
    </StyledCustomError>
  );
}

function AuthenticatedApp({ toggleTheme, theme }): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router />
        </ErrorBoundary>
      </main>
    </ErrorBoundary>
  );
}

export default AuthenticatedApp;
