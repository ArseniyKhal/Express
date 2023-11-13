const router = require("express").Router();
const loggerRequestURL = require("../middlewares/loggerRequestURL");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.use(loggerRequestURL);

router.get("/users", getUsers);
router.get("/users/:user_id", getUser);
router.post("/users", createUser);
router.patch("/users/:user_id", updateUser);
router.delete("/users/:user_id", deleteUser);

module.exports = router;
