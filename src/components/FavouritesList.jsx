import React from 'react';
import { Link } from 'react-router-dom';

function FavouritesList({ favourites }) {
  // Дописать useState и useEffect
  return (
    <div>
      {favourites.map((el) => <div key={el.id}><Link to={`/favourites/${el.id}`}>{el.name}</Link></div>)}
    </div>
  );
}

export default FavouritesList;
