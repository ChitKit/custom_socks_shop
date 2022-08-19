import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import FavouritesList from './FavouritesList';
import SocksGenerator from './SocksGenerator';
import Registration from './Registration';
import Login from './Login';

export default function App({
  colors, images, patterns, favourites, userSession,
}) {
  const [authState, setAuthState] = useState(userSession || null);
  console.log('AUTH =====>', authState, userSession);
  console.log('FAVORITE =====>', favourites);
  console.log('CUSTOMIZE =====>', colors, patterns, images);
  // userId={authState.id}
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reg" element={<Registration setAuthState={setAuthState} />} />
          <Route path="/login" element={<Login setAuthState={setAuthState} />} />
          <Route path="/favourites" element={<FavouritesList favourites={favourites} />} />
          <Route path="/generate" element={<SocksGenerator colors={colors} images={images} patterns={patterns} />} />
        </Routes>
      </div>
    </>
  );
}
