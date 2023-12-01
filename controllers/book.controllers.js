const { BookModel: Book } = require('../models/book.model');

const addBook = async (req, res) => {
  try {
    let book = new Book({ ...req.body });
    await book.save();

    return res
      .status(200)
      .send({ message: 'A new book has been added to the DB.' });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const getBooks = async (req, res) => {
  try {
    let books = await Book.find({});
    return res.status(200).send(books);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const getBook = async (req, res) => {
  try {
    let bookID = req.params.bookID;
    let book = await Book.findById(bookID);
    return res.status(200).send(book);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    let bookID = req.params.bookID;
    let book = await Book.findByIdAndUpdate(bookID);

    if (book)
      return res.status(200).send({
        message: `The book with ID: ${req.params.bookID} has been updated successfully!`
      });

    return res.status(400).send({ error: 'Invalid book ID! Could find book.' });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

module.exports = {
  addBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook
};
