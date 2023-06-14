const userRouter = require('express').Router();
// const {
//   validationUpdateProfile,
// } = require('../utils/validation');

const {
  getUser,
  updateProfile,
} = require('../controllers/users');

userRouter.get('/me', getUser); // возвращает информацию о пользователе (email и имя)
userRouter.patch('/me', updateProfile); // обновляет информацию о пользователе (email и имя) ?validationUpdateProfile?

module.exports = userRouter;
