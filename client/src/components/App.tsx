import React, { Suspense } from 'react';
import { Loading } from './Loading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Signup } from './Signup';
import { Signin } from './Signin';
import { Reset } from './Reset';
import { Register } from './Register';
import { Influencers } from './Influencers';
import { NotFound } from './NotFound';
import { CryptoDetails } from './CryptoDetails';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from 'react-query';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height: 100vh;
  }

body {
  padding: 0;
  margin: 0;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
  color: #FFF;
  height: inherit;
}

a {
  line-height: 0;
}
`;

// Create a client
const queryClient = new QueryClient();

const theme = {
  colors: {
    primary: '#13131c',
    secondary: '#000',
    tertiary: '#13131c',
    quaternary: 'rgb(100, 107, 128)',
  },
  borders: {
    primary: 'rgb(34, 37, 49)',
  },
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<Loading position="center" />}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path=":crypto" element={<CryptoDetails />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/influencers" element={<Influencers />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Router>
        </Suspense>
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
