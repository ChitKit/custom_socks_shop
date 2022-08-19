import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SocksGenerator({
  user_id, images, patterns, colors,
}) {
  console.log({ images, patterns, colors });
  const [customize, setCustomize] = useState({
    user_id: '', colour: { col_url: '#ffffff', col_id: '' }, patern: { pat_url: '/images/2.png', pattern_id: '' }, imge: { img_url: '/images/pic2.png', image_id: '' },
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
      body: JSON.stringify({
        user_id, col_id: customize.colour.col_id, pattern_id: customize.patern.pattern_id, image_id: customize.imge.image_id,
      }),
    });
    if (response.ok) {
      navigate('/favourites');
    }
  };

  const colorHandler = (color) => {
    setCustomize((prev) => ({
      ...prev, colour: { col_url: color.col_url, col_id: color.id },
    }));
  };

  const imageHandler = (image) => {
    setCustomize((prev) => ({
      ...prev, imge: { img_url: image.img_url, image_id: image.id },
    }));
  };

  const patternHandler = (pattern) => {
    setCustomize((prev) => ({
      ...prev, patern: { pat_url: pattern.pat_url, pattern_id: pattern.id },
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
          <div className="imagesSocks"><img className="imagesSocks" src={customize.imge.img_url ?? '/images/pic4.png'} alt={customize.imge.img_url} /></div>
          <div className="colorSocks" style={{ backgroundColor: customize.colour.col_url ?? 'red' }} />
          <div className="patternSocks"><img className="patternSocks" src={customize.patern.pat_url ?? '/images/2.png'} alt={customize.patern.pat_url} /></div>

        </div>
        <div>
          <button type="button" onClick={addedFavorite}>В избранное</button>
          <button>В корзину</button>
        </div>
      </div>
    </>
  );
}
