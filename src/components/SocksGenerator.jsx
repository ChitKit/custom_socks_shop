import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SocksGenerator({
  images, patterns, colors,
}) {
  console.log({ images, patterns, colors });
  const [customize, setCustomize] = useState({
    user_id: '', col_url: '/', pat_url: '2', img_url: '3',
  });
  const navigate = useNavigate();
  console.log(customize);

  const addedFavorite = async (e) => {
    e.preventDefault();
    const response = await fetch('/favourites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customize),
    });
    if (response.ok) {
      navigate('/favourites');
    }
  };

  const colorHandler = (color) => {
    setCustomize((prev) => ({
      ...prev, col_url: color.col_url,
    }));
  };

  const imageHandler = (image) => {
    setCustomize((prev) => ({
      ...prev, img_url: image.img_url,
    }));
  };

  const patternHandler = (pattern) => {
    setCustomize((prev) => ({
      ...prev, pat_url: pattern.pat_url,
    }));
  };

  console.log(customize);
  return (
    <>
      <h1>Создай свой дизайн носков!</h1>
      <div className="choiseColor">
        <h3>Выберете цвет</h3>
        <div className="customize">
          {colors.map((el) => (
            <div className="prevCol">
              <div
                name="color"
                // value={el.col_url}
                onClick={() => colorHandler(el)}
                style={{
                  backgroundColor: el.col_url,
                  width: '100px',
                  height: '100px',
                }}
              />
            </div>
          ))}

        </div>
      </div>
      <div className="choiseImages">
        <h3>Выберете картинку</h3>
        <div className="customize">{images.map((el) => <div className="prevIMG"><img name="image" onClick={() => imageHandler(el)} className="prevIMG" src={`${el.img_url}`} alt={`${el.name}`} /></div>)}</div>
      </div>
      <div className="choisePatterns">
        <h3>Выберете узор</h3>
        <div className="customize">{patterns.map((el) => <div className="prevIMG"><img name="pattern" onClick={() => patternHandler(el)} className="prevIMG" src={`${el.pat_url}`} alt={`${el.name}`} /></div>)}</div>
      </div>
      <div className="textGenerate">

        <div className="colorBox">
          <img className="generateMask" src="/images/socks_mask.png" alt="Emply socks mask" />
          <div className="imagesSocks"><img className="imagesSocks" src={customize.img_url ?? '/images/pic4.png'} alt={customize.img_url} /></div>
          <div className="colorSocks" style={{ backgroundColor: customize.col_url }} />
          <div className="patternSocks"><img className="patternSocks" src={customize.pat_url} alt={customize} /></div>

        </div>
        <div>
          <button type="button" onClick={addedFavorite}>В избранное</button>
          <button>В корзину</button>
        </div>
      </div>
    </>
  );
}
