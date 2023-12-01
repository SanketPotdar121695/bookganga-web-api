const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    cover_image: String
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const BookModel = model('book', bookSchema);

module.exports = { BookModel };
