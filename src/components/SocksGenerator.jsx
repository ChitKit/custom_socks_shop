import React from 'react';

export default function SocksGenerator() {
  return (
    <div className="textGenerate">
      <h1>Socks Generator</h1>
      <div className="colorBox">
        <img className="generateMask" src="/images/socks_mask.png" alt="Emply socks mask" />
        <div className="imagesSocks"><img className="imagesSocks" src="/images/рис4.png" alt="Узор4" /></div>
        <div className="colorSocks" />
        <div className="patternSocks"><img className="patternSocks" src="/images/4.png" alt="Узор4" /></div>
      </div>
    </div>
  );
}
