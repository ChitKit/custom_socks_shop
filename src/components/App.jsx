import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import FavouritesList from './FavouritesList';
import SocksGenerator from './SocksGenerator';
import Registration from './Registration';
import Login from './Login';

export default function App({ favourites, userSession }) {
  const [authState, setAuthState] = useState(userSession || null);
  console.log(authState, userSession);
  console.log(favourites);
  return (
    <>
      <Header />
      <div>
        <div className="max-w-700 center" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reg" element={<Registration setAuthState={setAuthState} />} />
          <Route path="/login" element={<Login setAuthState={setAuthState} />} />
          <Route path="/favourites" element={<FavouritesList favourites={favourites} />} />
          <Route path="/generate" element={<SocksGenerator />} />
        </Routes>
      </div>
    </>

  );
}
