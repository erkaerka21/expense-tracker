const { Router } = require("express");

const {
  getCategory,
  createCategory,
  editCategory,
  deleteCategory,
} = require("../controllers/category-Controller");
const auth = require("../middlewares/auth");
const router = Router();

router.route("/").get(auth, getCategory).post(auth, createCategory);
router.route("/:id").put(editCategory).delete(deleteCategory);

module.exports = router;
