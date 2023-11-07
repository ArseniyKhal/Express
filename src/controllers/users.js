const { request, response } = require("express");
const User = require("../models/user");

// Получим всех пользователей из БД
const getUsers = (request, response) => {
  return User.find({})
    .then((users) => {
      response.status(200).send(users);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

// Получим пользователя по ID
const getUser = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id)
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

// Создаем пользователя?
const createUser = (request, response) => {
  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

// Обновляем пользователя
const updateUser = (request, response) => {
  const { user_id } = request.params;
  return User.findByIdAndUpdate(user_id, { ...request.body })
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

// Удаляем пользователя
const deleteUser = (request, response) => {
  const { user_id } = request.params;
  return User.findByIdAndDelete(user_id)
    .then(() => {
      response.status(200).send("Success");
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
