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
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const getBook = async (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
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
