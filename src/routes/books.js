const router = require("express").Router();
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

router.get("/books", getBooks);
router.get("/books/:user_id", getBook);
router.post("/books", createBook);
router.patch("/books/:user_id", updateBook);
router.delete("/books/:user_id", deleteBook);

module.exports = router;
