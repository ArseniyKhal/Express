const { req, res } = require("express");
const User = require("../models/user");

// Получим всех пользователей из БД
const getUsers = (req, res) => {
  return User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Получим пользователя по ID
const getUser = (req, res) => {
  const { user_id } = req.params;
  return User.findById(user_id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Создаем пользователя?
const createUser = (req, res) => {
  return User.create({ ...req.body })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Обновляем пользователя
const updateUser = (req, res) => {
  const { user_id } = req.params;
  return User.findByIdAndUpdate(user_id, { ...req.body })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Удаляем пользователя
const deleteUser = (req, res) => {
  const { user_id } = req.params;
  return User.findByIdAndDelete(user_id)
    .then(() => {
      res.status(200).send("Success");
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
