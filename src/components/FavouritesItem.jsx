import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function FavouritesItem({ favourites }) {
  const [favouritesItemState, setfavouritesItemState] = useState(favourites || []);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/favourites/${id}`)
      .then((res) => res.json())
      .then((data) => favouritesItemState(data));
  }, []);

  if (!favouritesItemState) return <div>Загрузка</div>;

  return (
    <div>
      <h1>Detail</h1>
      <img src={favouritesItemState.avatar} alt={favouritesItemState.name} />
      <span>
        {favouritesItemState.name}
        {' '}
        aka
        {' '}
        {favouritesItemState.git}
      </span>
    </div>
  );
}

export default FavouritesItem;
