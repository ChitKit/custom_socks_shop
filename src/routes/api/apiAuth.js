import express from 'express';
import bcrypt from 'bcrypt';
import { Users } from '../../db/models';

const route = express.Router();

route.get('/registration', (req, res) => {
  res.redirect('/registration');
});

route.post('/registration', async (req, res) => {
  const {
    email, password, secondName, firstName,
  } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      const newUser = await Users.create({
        email, password: hashPassword, secondName, firstName,
      });
      console.log('BACK CREATE USER ====>', res.json(newUser.id));

      req.session.userSession = { email: newUser.email };
      return res.json({ email: newUser.email, id: newUser.id });
    }
    res.status(400).json({ message: 'Такой email уже занят' });
  } catch (err) {
    console.error(err);
  }
});

route.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email } });
    // console.log('BACK USER ====>', user.id);
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password); // возвращает boolean значение
      if (checkPass) {
        req.session.userSession = { email: user.email, id: user.id };
        return res.json({ email: user.email, id: user.id });
      }
    }
    res.status(400).json({ message: 'Email или пароль не верны' });
  } catch (err) {
    console.error(err);
  }
});

route.get('/logout', async (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

export default route;
