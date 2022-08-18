import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../../components/Layout';

const route = express.Router();

route.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  const html = renderToString(<Layout initState={initState} />);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

export default route;
