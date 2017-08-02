const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Heroku Doodley Doo')
});

app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

const port = process.env.PORT || 3000;

app.listen(port);