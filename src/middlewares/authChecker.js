export default function authCheck(req, res, next) {
  if (req.session?.userSession) {
    next();
  }
  res.status(401).json({ message: 'Позьзователь не авторизован' });
}
