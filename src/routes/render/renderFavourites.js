import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../../components/Layout';
import { Favorites } from '../../db/models';

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const initState = { path: req.originalUrl };
    const favourites = await Favorites.findAll();
    initState.favourites = favourites;
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

route.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const initState = { path: req.originalUrl };
    const favourites = await Favorites.findByPk(id);
    initState.favourites = favourites;
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

export default route;
