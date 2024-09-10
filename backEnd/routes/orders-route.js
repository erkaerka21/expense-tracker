const { Router } = require("express");
const {
  getOrders,
  createOrder,
  editOrder,
  deleteOrder,
  getRecordinfo,
} = require("../controllers/orders-Controller");

const router = Router();

router.route("/").get(getOrders).post(createOrder);
router.route("/:id").put(editOrder).delete(deleteOrder);
router.route("/info").get(getRecordinfo);

module.exports = router;
