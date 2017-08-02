const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Heroku Doodley Doo')
});

const port = process.env.PORT || 3000;

app.listen(port);