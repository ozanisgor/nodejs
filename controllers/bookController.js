const main = require('../database/db');
const { ObjectId } = require('mongodb');

exports.index = async (req, res) => {
  const db = await main();
  const allBooks = await db.collection('books').find().toArray();
  res.json(allBooks);
};

exports.store = async (req, res) => {
  const db = await main();
  await db.collection('books').insertOne(req.body);
  res.status(201).json({ data: 'Book created' });
};

exports.show = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await main();
  const book = await db.collection('books').findOne({ _id });
  res.json(book);
};

exports.update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await main();
  await db.collection('books').updateOne({ _id }, { $set: req.body });
  res.json({ data: 'Book updated' });
};

exports.destroy = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await main();
  await db.collection('books').deleteOne({ _id });
  res.status(204).json();
};
