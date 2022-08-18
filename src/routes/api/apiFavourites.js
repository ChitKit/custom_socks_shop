import express from 'express';
import { Favorites } from '../../db/models';

const route = express.Router();

route.get('/favourites', async (req, res) => {
  const favourites = await Favorites.findAll();
  res.json(favourites);
});

route.get('/favorites/:id', async (req, res) => {
  const { id } = req.params;
  const favourite = await Favorites.findByPk(id);
  res.json(favourite);
});

route.delete('/favorites/:id', async (req, res) => {
  const { id } = req.params;
  await Favorites.destroy({ where: { id } });
  res.redirect('/favourites');
});

export default route;
