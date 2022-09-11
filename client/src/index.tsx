import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import App from './App';
import { AppProviders } from './context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        //@ts-ignore
        if (error.status === 404) return false;
        else if (failureCount < 2) return true;
        else return false;
      },
    },
  },
});

const root = createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <AppProviders>
      <App />
    </AppProviders>
  </QueryClientProvider>
);
