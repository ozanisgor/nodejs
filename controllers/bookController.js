const { ObjectId } = require('mongodb');
const Book = require('../models/Book');

exports.index = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.store = async (req, res) => {
  const db = await main();
  await db.collection('books').insertOne(req.body);
  res.status(201).json({ data: 'Book created' });
};

exports.show = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const book = await Book.findOne({ _id });
  res.json(book);
};

exports.update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.updateOne({ _id }, req.body);
  res.json({ data: 'Book updated' });
};

exports.destroy = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.deleteOne({ _id });
  res.status(204).json();
};
