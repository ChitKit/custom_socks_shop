import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function FavouritesItem({ favourites }) {
  const [favouritesItemState, setfavouritesItemState] = useState(favourites || []);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/favourites/${id}`)
      .then((res) => res.json())
      .then((data) => setfavouritesItemState(data));
  }, []);

  if (!favouritesItemState) return <div>Загрузка</div>;

  return (
    <div key={el.id} className="card w-20">
      <img src="../" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" />
        <p className="card-text">1</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default FavouritesItem;
