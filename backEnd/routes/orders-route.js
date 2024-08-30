const { Router } = require("express");
const { getOrder } = require("../controllers/orders-Controller");

const router = Router();

router.route("/").get(getOrder);

module.exports = router;
