const { Router } = require("express");
const {
  getUsers,
  postUser,
  editUser,
  deleteUser,
} = require("../controllers/user-Controller");

const router = Router();

router.route("/").get(getUsers).post(postUser);
router.route("/:id").put(editUser).delete(deleteUser);

module.exports = router;
