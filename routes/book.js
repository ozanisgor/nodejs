const express = require('express');
const bookRouter = express.Router();

bookRouter
  .route('/')
  .get((req, res) => {
    res.send('All Books');
  })
  .post((req, res) => {
    res.json({ data: 'Book created' });
  });

bookRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Showing book ID: ${id}`);
});

module.exports = bookRouter;
