const { req, res } = require("express");
const Book = require("../models/book");

// Получим всех пользователей из БД
const getBooks = (req, res) => {
  return Book.find({})
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Получим пользователя по ID
const getBook = (req, res) => {
  const { book_id } = req.params;
  return Book.findById(book_id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Создаем пользователя?
const createBook = (req, res) => {
  return Book.create({ ...req.body })
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Обновляем пользователя
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

// Удаляем пользователя
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
