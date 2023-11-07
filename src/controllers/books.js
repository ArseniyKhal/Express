const { req, res } = require("express");
require("express-async-errors");
const Book = require("../models/book");

// Получим все книги из БД
const getBooks = (req, res) => {
  return Book.find({})
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Получим книгу по ID
const getBook = async (req, res) => {
  const { book_id } = req.params;
  try {
    const book = await Book.findById(book_id);
    res.status(200).send(book);
  } catch (err) {
    if (!book) throw Error();
  }
};

// Создаем книгу
const createBook = (req, res) => {
  return Book.create({ ...req.body })
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Обновляем книгу
const updateBook = (req, res) => {
  const { book_id } = req.params;
  return Book.findByIdAndUpdate(book_id, { ...req.body })
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Удаляем книгу
const deleteBook = (req, res) => {
  const { book_id } = req.params;
  return Book.findByIdAndDelete(book_id)
    .then(() => {
      res.status(200).send("Success");
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
