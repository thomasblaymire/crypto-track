import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { Loading } from './components/loading';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-weight: 200;
    font-family: 'Gotham Book';
    src: url(../assets/fonts/GothamBook.ttf);
    font-style: normal;
  }
  html {
    height: 100vh;
  }
  body {
    background-color: #ecf1f3;
    height: inherit;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id">Detail</Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
