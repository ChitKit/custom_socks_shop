import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SocksGenerator({ images, patterns, colors }) {
  console.log({ images, patterns, colors });
  const [customize, setCustomize] = useState({
    user_id: '', col_id: '', pattern_id: '', image_id: '',
  });
  const namigate = useNavigate();

  return (
    <div className="textGenerate">
      <h1>Создай свой дизайн носков!</h1>
      <div className="colorBox">
        <img className="generateMask" src="/images/socks_mask.png" alt="Emply socks mask" />
        <div className="imagesSocks"><img className="imagesSocks" src="/images/рис1.png" alt="Узор4" /></div>
        <div className="colorSocks" />
        <div className="patternSocks"><img className="patternSocks" src="/images/4.png" alt="Узор4" /></div>

      </div>
      <div>
        <button>В избранное</button>
        <button>В корзину</button>
      </div>
    </div>
  );
}
