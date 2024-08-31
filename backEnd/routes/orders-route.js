const { Router } = require("express");
const {
  getOrders,
  createOrder,
  editOrder,
} = require("../controllers/orders-Controller");

const router = Router();

router.route("/").get(getOrders).post(createOrder);
router.route("/:id").put(editOrder);

module.exports = router;
