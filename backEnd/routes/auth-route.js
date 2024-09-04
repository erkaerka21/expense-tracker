const { Router } = require("express");
const { signIn, signUp } = require("../controllers/auth_Controller");

const router = Router();

router.route("/signin").post(signIn);
router.route("/signup").post(signUp);

module.exports = router;
