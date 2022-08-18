import express from 'express';
import renderMain from './routes/render/renderMain';

const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.use('/', renderMain);

app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));
