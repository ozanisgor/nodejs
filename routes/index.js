const express = require('express');
const router = express.Router();
const bookRouter = require('./book');
const authRouter = require('./auth');

router.get('/', (req, res) => {
  res.render('../views/index.ejs', { name: 'Ozan' });
});

router.use('/book', bookRouter);
router.use('/auth', authRouter);

router.all('/*', (req, res) => {
  res.send('Page not found');
});

module.exports = router;
