const router = require('express').Router();

const auth = require('../middlewares/auth');
const { validationSignup, validationSignin } = require('../utils/validation');
const { createUser, login } = require('../controllers/users');

const NotFoundError = require('../errors/notFoundError');

const userRouter = require('./users');
const movieRouter = require('./movies');

router.post('/signup', validationSignup, createUser);
router.post('/signin', validationSignin, login);

router.use('/users', auth, userRouter);
router.use('/movies', auth, movieRouter);
router.use('/*', auth, (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
