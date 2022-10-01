const express = require('express');
const router = express.Router();
const bookRouter = require('./book');

router.get('/', (req, res) => {
  res.send('Hello Express!');
});

router.use('/book', bookRouter);

router.all('/*', (req, res) => {
  res.send('Page not found');
});

module.exports = router;
