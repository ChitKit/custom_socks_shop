import React from 'react';

export default function SocksGenerator() {
  return (
    <div className="textGenerate">
      <h1>Socks Generator</h1>
      <div className="colorBox">
        <img className="generateMask" src="/images/socks_mask.png" alt="Emply socks mask" />
        <div className="colorSocks" />
        <div className="patternSocks" />
        <div className="imagesSocks" />
      </div>
    </div>
  );
}
