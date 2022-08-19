import express from 'express';
import { Colors, Patterns, Images } from '../../db/models';

const route = express.Router();

route.get('/generate', async (req, res) => {
  const colors = await Colors.findAll();
  res.json(colors);
});

route.get('/generate', async (req, res) => {
  const images = await Images.findAll();
  res.json(images);
});

route.get('/generate', async (req, res) => {
  const patterns = await Patterns.findAll();
  res.json(patterns);
});

export default route;
