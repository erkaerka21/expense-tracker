const { Router } = require("express");
const { signIn, signUp } = require("../controllers/auth_Controller");

const router = Router();

router.route("/signin").get(signIn);
router.route("/login").post(signUp);

module.exports = router;
