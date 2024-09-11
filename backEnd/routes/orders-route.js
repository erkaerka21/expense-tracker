const { Router } = require("express");
const {
  getOrders,
  createOrder,
  editOrder,
  deleteOrder,
  getRecordinfo,
  getChartData,
} = require("../controllers/orders-Controller");

const router = Router();

router.route("/").get(getOrders).post(createOrder);
router.route("/:id").put(editOrder).delete(deleteOrder);
router.route("/info").get(getRecordinfo);
router.route("/chartinfo").get(getChartData);

module.exports = router;
