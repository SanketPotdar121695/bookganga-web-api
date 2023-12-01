const { Schema, model } = require('mongoose');

// Book Schema
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

// Bokk model serving as a collection
const BookModel = model('book', bookSchema);

module.exports = { BookModel };
