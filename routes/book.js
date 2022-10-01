const express = require('express');
const bookRouter = express.Router();
const main = require('../database/db');

bookRouter
  .route('/')
  .get(async (req, res) => {
    const db = await main();
    const allBooks = await db.collection('books').find().toArray();
    res.json(allBooks);
  })
  .post(async (req, res) => {
    const db = await main();
    const data = {
      title: 'first book',
      author: 'first author'
    };
    await db.collection('books').insertOne(data);
    res.json({ data: 'Book created' });
  });

bookRouter
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    res.send(`Showing book ID: ${id}`);
  })
  .patch((req, res) => {
    const { id } = req.params;
    res.send(`Showing book ID: ${id} to update`);
  })
  .delete((req, res) => {
    const { id } = req.params;
    res.send(`Showing book ID: ${id} to delete`);
  });

module.exports = bookRouter;
