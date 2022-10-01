const express = require('express');
const router = express.Router();
const bookRouter = require('./book');
const path = require('path');

router.get('/', (req, res) => {
  res.render('../views/index.ejs', { name: 'Ozan' });
});

router.use('/book', bookRouter);

router.all('/*', (req, res) => {
  res.send('Page not found');
});

module.exports = router;
