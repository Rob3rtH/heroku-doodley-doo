const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Heroku Doodley Doo')
});

app.listen(5000);