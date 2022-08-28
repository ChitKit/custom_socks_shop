import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import FavouritesList from './FavouritesList';
import SocksGenerator from './SocksGenerator';
import Registration from './Registration';
import Login from './Login';
import Footer from './Footer';

export default function App({
  colors, images, patterns, favourites, userSession, user_id,
}) {
  const [authState, setAuthState] = useState(userSession || null);
  console.log('AUTH =====>', userSession);
  console.log('user_id =====>', authState);
  // console.log('CUSTOMIZE =====>', colors, patterns, images);
  // userId={authState.id}
  return (
    <>
      <Header setAuthState={setAuthState} authState={authState} />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registration" element={<Registration setAuthState={setAuthState} />} />
          <Route path="/login" element={<Login setAuthState={setAuthState} />} />
          <Route path="/favourites" element={<FavouritesList favourites={favourites} />} />
          <Route path="/generate" element={<SocksGenerator colors={colors} images={images} patterns={patterns} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
