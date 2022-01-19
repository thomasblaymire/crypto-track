import React, { Fragment, Suspense } from 'react';
import { Loading } from './Loading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';
import { NotFound } from './NotFound';
import { CryptoDetails } from './CryptoDetails';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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

const theme = {
  colors: {
    primary: '#FFF',
    secondary: '#000',
    tertiary: '#171925'
  },
  borders: {
    primary: 'rgb(34, 37, 49)'
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loading position="center" />}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":crypto" element={<CryptoDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
