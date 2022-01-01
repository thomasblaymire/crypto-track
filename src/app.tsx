import React, { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { Loading } from './components/loading';

import { createGlobalStyle } from 'styled-components';

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Poppins', sans-serif;
  //background-color: #ecf1f3;
  background-color: #17171a;
  height: inherit;
}

`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id">Detail</Route>
          </Routes>
        </Router>
      </Suspense>
    </Fragment>
  );
}

export default App;
