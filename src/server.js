import express from 'express';
import session from 'express-session';
import store from 'session-file-store';
import morgan from 'morgan';

import renderMainRoute from './routes/render/renderMain';
import renderFavouritesRoute from './routes/render/renderFavourites';
import renderGenerate from './routes/render/renderGenerator';
import apiAuthRoute from './routes/api/apiAuth';
import apiSocks from './routes/api/apiSocks';

import authCheck from './middlewares/authChecker';

const app = express();
const PORT = process.env.PORT ?? 3000;

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  store: new FileStore(),
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

// midlewars
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
app.use(session(sessionConfig));
// Routers
app.use('/api/auth', apiAuthRoute);
app.use('/', renderMainRoute);
app.use('/api/socks', apiSocks);
app.use(authCheck);
app.use('/favourites', renderFavouritesRoute);
app.use('/generate', renderGenerate);

app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));
