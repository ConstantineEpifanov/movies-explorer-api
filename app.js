const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const { limiter } = require('./utils/limiter');
const { handleErrors } = require('./middlewares/handleErrors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes/index');

const { PORT = 3000, DB_LINK } = process.env;

const app = express();

mongoose.connect(DB_LINK);

app.use(helmet());
app.use(requestLogger);
app.use(cors());
app.options('/', cors());
app.use(limiter);
app.use(cookieParser());
app.use(express.json());

app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Server is working on PORT ${PORT}!`);
});
