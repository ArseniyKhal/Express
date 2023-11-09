const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const bodyParser = require("body-parser");
const loggerOne = require("./middlewares/loggerOne");
require("express-async-errors");

dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/mydb",
} = process.env;

mongoose.connect(MONGO_URL);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Connected to MongoDB");
});

const helloWorld = (req, res) => {
  res.status(200);
  res.send("hello, World!");
};
app.get("/", helloWorld);

app.use(cors());
// app.use(loggerOne);

app.use((err, req, res, next) => {
  console.log(`Ошибка: ${err.message}`);
  if (err instanceof mongoose.Error.CastError) {
    res.status(404).send({ error: "Сущность не найдена" });
  } else {
    res.status(500).send(err.message);
  }
  next(err);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
