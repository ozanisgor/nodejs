const express = require('express');
const bookRouter = express.Router();
const bookController = require('../controllers/bookController');

bookRouter.route('/').get(bookController.index).post(bookController.store);

bookRouter.route('/:id').get(bookController.show).patch(bookController.update).delete(bookController.destroy);

module.exports = bookRouter;
