import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CurrentFavouritesItem({ favourites }) {
  const [favouritesState, setFavouritesState] = useState(favourites || []);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/favourites/${id}`)
      .then((res) => res.json())
      .then((data) => setFavouritesState(data));
  }, []);

  if (!favouritesState) return <div>Загрузка</div>;

  return (
    <div>
      <h1>Favourites</h1>
      {favourites.map((el) => (
        <div key={el.id}>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-secondary">FAV</button>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CurrentFavouritesItem;
