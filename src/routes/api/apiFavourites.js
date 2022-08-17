import express from 'express';
import { Favourite } from '../../db/models';
import from 'public/mockDB.js'

const route = express.Router();

route.get('/favourites', async (req, res) => {
  // const favourites = await Favourite.findAll();
  const favourites = await Favourite.findAll();

  res.json(favourites);
});

route.get('/favourites/:id', async (req, res) => {
  const { id } = req.params;
  const favourite = await Favourite.findByPk(id);
  res.json(favourite);
});

export default route;
