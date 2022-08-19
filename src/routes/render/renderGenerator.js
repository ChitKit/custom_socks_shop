import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../../components/Layout';
import { Colors, Patterns, Images } from '../../db/models';

const route = express.Router();

route.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  const colors = await Colors.findAll();
  const images = await Images.findAll();
  const patterns = await Patterns.findAll();
  console.log('endpoint', images, colors, patterns);
  initState.colors = colors;
  initState.images = images;
  initState.patterns = patterns;
  console.log('initState', initState);
  const html = renderToString(<Layout initState={initState} />);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

export default route;
