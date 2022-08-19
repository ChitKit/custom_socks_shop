import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../../components/Layout';
import { Colors, Patterns, Images } from '../../db/models';

const route = express.Router();

route.get('/generate', async (req, res) => {
// const colors = await Colors.findAll();
// const images = await Images.findAll();
// const patterns = await Patterns.findAll();
// initState.colors = colors;
// initState.images = images;
// initState.patterns = patterns;
  const initState = { path: req.originalUrl };
  const html = renderToString(<Layout initState={initState} />);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

export default route;
