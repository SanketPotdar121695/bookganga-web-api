const { BookModel: Book } = require('../models/book.model');

const addBook = async (req, res) => {
  try {
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
