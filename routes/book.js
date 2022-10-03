const express = require('express');
const { ObjectId } = require('mongodb');
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
    await db.collection('books').insertOne(req.body);
    res.status(201).json({ data: 'Book created' });
  });

bookRouter
  .route('/:id')
  .get(async (req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await main();
    const book = await db.collection('books').findOne({ _id });
    res.json(book);
  })
  .patch(async (req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await main();
    await db.collection('books').updateOne({ _id }, { $set: req.body });
    res.json({ data: 'Book updated' });
  })
  .delete(async (req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await main();
    await db.collection('books').deleteOne({ _id });
    res.status(204).json();
  });

module.exports = bookRouter;
