import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { Loading } from './components/loading'

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/detail/:id">Detail</Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
