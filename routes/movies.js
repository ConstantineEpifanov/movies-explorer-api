const movieRouter = require('express').Router();
const {
  validationCreateMovie,
  validationMovieId,
} = require('../utils/validation');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/', getMovies); // возвращает все сохранённые текущим  пользователем фильмы
movieRouter.post('/', validationCreateMovie, createMovie); // создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId // validationCreateCard
movieRouter.delete('/:id', validationMovieId, deleteMovie); // удаляет сохранённый фильм по id //

module.exports = movieRouter;
