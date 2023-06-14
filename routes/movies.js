const movieRouter = require('express').Router();
// const {
//   validationCreateCard,
//   validationCardId,
// } = require('../utils/validation');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/', getMovies); // возвращает все сохранённые текущим  пользователем фильмы
movieRouter.post('/', createMovie); // создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId // validationCreateCard
movieRouter.delete('/:_id', deleteMovie); // удаляет сохранённый фильм по id // validationCardId

module.exports = movieRouter;
