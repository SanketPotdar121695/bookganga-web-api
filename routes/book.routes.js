const { Router } = require('express');
const {
  addBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook
} = require('../controllers/book.controller');

const bookRouter = Router();

// Routes for CRUD operations on books
bookRouter.get('/', getBooks);
bookRouter.post('/add', addBook);
bookRouter.get('/:bookID?', getBook);
bookRouter.patch('/update/:postID', updateBook);
bookRouter.delete('/delete/:postID', deleteBook);

module.exports = { bookRouter };
