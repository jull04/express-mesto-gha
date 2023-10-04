const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const app = express();

app.use(express.json());

mongoose.connect(DB_URL);

app.use((req, res, next) => {
  req.user = {
    _id: '65156729d52f3fffc79662d0',
  };
  next();
});

app.use('/', require('./routes/index'));

app.listen(PORT);
