const { req, res } = require("express");
require("express-async-errors");
const Book = require("../models/book");

// Получим все книги из БД
const getBooks = async (req, res) => {
  const books = await Book.find({});
  res.status(200).send(books);
};

// Получим книгу по ID
const getBook = async (req, res) => {
  const { book_id } = req.params;
  const book = await Book.findById(book_id);
  res.status(200).send(book);
};

// Создаем книгу
const createBook = async (req, res) => {
  const book = await Book.create({ ...req.body });
  res.status(201).send(book);
};

// Обновляем книгу
const updateBook = async (req, res) => {
  const { book_id } = req.params;
  const book = await Book.findByIdAndUpdate(book_id, { ...req.body });
  res.status(202).send(book);
};

// Удаляем книгу
const deleteBook = async (req, res) => {
  const { book_id } = req.params;
  const book = await Book.findByIdAndDelete(book_id);
  res.status(200).send("Success");
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
