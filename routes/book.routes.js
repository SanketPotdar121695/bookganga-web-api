const { Router } = require('express');
const {
  addBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook
} = require('../controllers/book.controllers');

const bookRouter = Router();

// Routes for CRUD operations on books
bookRouter.get('/', getBooks);
bookRouter.post('/add', addBook);
bookRouter.get('/:bookID?', getBook);
bookRouter.put('/update/:bookID', updateBook);
bookRouter.delete('/delete/:bookID', deleteBook);

module.exports = { bookRouter };
