const { Router } = require("express");
const auth = require("../middlewares/auth");
const {
  getCategory,
  createCategory,
  editCategory,
  deleteCategory,
} = require("../controllers/category-Controller");
const router = Router();

router.route("/").get(auth, getCategory).post(createCategory);
router.route("/:id").put(editCategory).delete(deleteCategory);

module.exports = router;
