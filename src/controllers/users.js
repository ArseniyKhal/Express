const { req, res } = require("express");
const User = require("../models/user");

// Получим всех пользователей из БД
const getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).send(users);
};

// Получим пользователя по ID
const getUser = async (req, res) => {
  const { user_id } = req.params;
  const user = await User.findById(user_id);
  res.status(200).send(user);
};

// Создаем пользователя
const createUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  res.status(201).send(user);
};

// Обновляем пользователя
const updateUser = async (req, res) => {
  const { user_id } = req.params;
  const user = await User.findByIdAndUpdate(user_id, { ...req.body });
  res.status(200).send(user);
};

// Удаляем пользователя
const deleteUser = async (req, res) => {
  const { user_id } = req.params;
  const user = await User.findByIdAndDelete(user_id);
  res.status(200).send("Success");
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
