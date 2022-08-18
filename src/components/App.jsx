import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

export default function App() {
  return (
    <>
      <Header />
      <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
        <div className="max-w-700 center" />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </>

  );
}
