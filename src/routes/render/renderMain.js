import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../../components/Layout';
import { Colors, Patterns, Images } from '../../db/models';

const route = express.Router();

route.get('/', async (req, res) => {
  try {
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
  } catch (err) {
    console.error(err);
  }
});

route.get('/reg', async (req, res) => {
  try {
    const initState = { path: req.originalUrl, userSession: req.session.userSession };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

route.get('/login', async (req, res) => {
  try {
    const initState = { path: req.originalUrl, userSession: req.session.userSession };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

export default route;
