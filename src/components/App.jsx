import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import FavouritesList from './FavouritesList';
import SocksGenerator from './SocksGenerator';
import Registration from './Registration';
import Login from './Login';
import Footer from './Footer';

export default function App({ favourites, userSession }) {
  const [authState, setAuthState] = useState(userSession || null);
  console.log(authState, userSession);
  console.log(favourites);
  return (
    <>
      <Header />
      <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
        <div className="max-w-700 center" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registration" element={<Registration setAuthState={setAuthState} />} />
          <Route path="/login" element={<Login setAuthState={setAuthState} />} />
          <Route path="/favourites" element={<FavouritesList favourites={favourites} />} />
          <Route path="/generate" element={<SocksGenerator />} />
        </Routes>
        <Footer />
      </div>
    </>

  );
}
