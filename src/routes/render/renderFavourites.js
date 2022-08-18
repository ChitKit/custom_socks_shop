import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../../components/Layout';

const route = express.Router();

route.get('/favourites', async (req, res) => {
  const initState = { path: req.originalUrl };
  const favourites = [{
    id: '123224325', user_id: '45', color_id: '3535', pattern_id: '23434', image_id: '26734723647',
  }, {
    id: '123224326', user_id: '46', color_id: '4324', pattern_id: '324432', image_id: '2144324234',
  }];
  initState.favourites = favourites;
  const html = renderToString(<Layout initState={initState} />);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

// route.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const initState = { path: req.originalUrl, userSession: req.session.userSession };
//   const student = await Student.findByPk(id);
//   initState.student = student;
//   const html = renderToString(<Layout initState={initState} />);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });

export default route;
